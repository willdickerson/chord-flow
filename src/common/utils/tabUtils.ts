// Guitar tablature fingering assignment.
//
// Any given pitch can be played in several places on the fretboard, so
// choosing where to play a chord is an optimization problem. Each chord's
// candidate fingerings are scored for playability (fret span, hand position,
// muted inner strings), then dynamic programming picks the sequence of
// fingerings that minimizes shape cost plus hand movement between chords —
// the fretting-hand analogue of the voice-leading optimizer.
//
// Guitar is written an octave above sounding pitch, and the app's voicings
// sit in a low keyboard register — so the default is to render each voicing
// an octave up, the guitar's natural chord register. Chords too high to
// shift fall back to their played pitch. Each candidate carries its
// register displacement, and transitions penalize CHANGING displacement
// between chords, so whole stretches of the chart sit in one register
// instead of lurching octave to octave chord by chord.
//
// Not every voicing is playable on six strings (close-position clusters,
// for instance), so as a last resort a chord is re-voiced: same pitch
// classes over the same bass, at or above the original register. The
// re-voice penalty is high enough that a playable structure-preserving
// shape always wins.

// Standard tuning, low to high: E2 A2 D3 G3 B3 E4
export const STANDARD_TUNING = [40, 45, 50, 55, 59, 64]
export const STRING_NAMES = ['E', 'A', 'D', 'G', 'B', 'e']
const MAX_FRET = 15
const LOWEST_NOTE = STANDARD_TUNING[0]
const HIGHEST_NOTE = STANDARD_TUNING[STANDARD_TUNING.length - 1] + MAX_FRET

// Where the fretting hand feels most at home for chord work
const HOME_FRET = 5

// Mild: staying at played pitch (an octave below written guitar register)
// is the fallback for chords that sit too high to shift up
const AT_PITCH_PENALTY = 0.5
// High enough that re-voicing only wins when nothing faithful is playable
const REVOICE_PENALTY = 8
// Cost per semitone of register-displacement change between consecutive
// chords: an unforced octave lurch (12 semitones) costs 4.8
const DISPLACEMENT_CHANGE_WEIGHT = 0.4

// One chord's fingering: fret number per string (index 0 = low E),
// or null where the string isn't played.
export type TabFingering = (number | null)[]

const frettedFrets = (frets: number[]): number[] => frets.filter(f => f > 0)

// Fret the hand sits at: the lowest fretted note, 0 if everything is open.
function handPosition(frets: number[]): number {
  const fretted = frettedFrets(frets)
  return fretted.length ? Math.min(...fretted) : 0
}

// How hard a shape is to hold, independent of context.
function shapeCost(strings: number[], frets: number[]): number {
  const fretted = frettedFrets(frets)
  const span = fretted.length
    ? Math.max(...fretted) - Math.min(...fretted)
    : 0

  // Muted strings between the outermost sounded strings are awkward to strum
  const innerGaps =
    Math.max(...strings) - Math.min(...strings) + 1 - strings.length

  // Open strings are avoided in jazz playing: they break movable shapes
  // and can't be muted or shifted. Penalized, not banned — if a chord is
  // only playable with an open string, it still renders.
  const openStrings = frets.filter(f => f === 0).length

  // Weak tie-break toward the middle of the neck, where chord work sits
  const avgFret = frets.reduce((a, b) => a + b, 0) / frets.length

  return (
    span * 1.5 +
    (span >= 4 ? 4 : 0) +
    innerGaps * 0.75 +
    openStrings * 4 +
    Math.abs(avgFret - HOME_FRET) * 0.1
  )
}

type Candidate = {
  strings: number[] // string index per note, ascending
  frets: number[] // fret per note, parallel to strings
  cost: number
  // Semitones between what this candidate sounds and the played voicing
  // (0 for the exact voicing, 12 an octave up, fractional for re-voicings)
  displacement: number
}

// Cost of moving the fretting hand between consecutive chords, plus a
// penalty for changing register displacement so the tab doesn't jump
// octaves between neighboring chords unless the chart forces it.
function transitionCost(prev: Candidate, next: Candidate): number {
  return (
    Math.abs(handPosition(prev.frets) - handPosition(next.frets)) +
    Math.abs(prev.displacement - next.displacement) *
      DISPLACEMENT_CHANGE_WEIGHT
  )
}

// Enumerate every way to place the chord's notes (ascending) on strictly
// ascending strings — non-crossing assignments only, which is how chords
// are actually voiced on the instrument.
function findCandidates(midiNotes: number[], maxSpan: number): Candidate[] {
  const candidates: Candidate[] = []

  const recurse = (noteIndex: number, minString: number, acc: number[]) => {
    if (noteIndex === midiNotes.length) {
      const frets = acc.map((s, i) => midiNotes[i] - STANDARD_TUNING[s])
      const fretted = frettedFrets(frets)
      const span = fretted.length
        ? Math.max(...fretted) - Math.min(...fretted)
        : 0
      // A four-finger "staircase" — four distinct frets spread over four
      // or more — is impractically awkward (the close-position dominant
      // grip x5421x, whose 4-3-3 stack forces a gapped 5-4-2-1 reach).
      // Four distinct frets within a 3-fret span stays legal: the
      // consecutive diagonal of a close maj7 (x-x-13-12-11-10) spans
      // only 3 and falls naturally under fingers 4-3-2-1.
      const staircase =
        new Set(fretted).size >= 4 && span >= 4
      if (span <= maxSpan && !staircase) {
        candidates.push({
          strings: [...acc],
          frets,
          cost: shapeCost(acc, frets),
          displacement: 0,
        })
      }
      return
    }
    for (let s = minString; s < STANDARD_TUNING.length; s++) {
      const fret = midiNotes[noteIndex] - STANDARD_TUNING[s]
      if (fret < 0 || fret > MAX_FRET) continue
      acc.push(s)
      recurse(noteIndex + 1, s + 1, acc)
      acc.pop()
    }
  }

  recurse(0, 0, [])
  return candidates
}

function toFingering(candidate: Candidate): TabFingering {
  const fingering: TabFingering = STANDARD_TUNING.map(() => null)
  candidate.strings.forEach((s, i) => {
    fingering[s] = candidate.frets[i]
  })
  return fingering
}

const tag = (
  candidates: Candidate[],
  penalty: number,
  displacement: number
): Candidate[] =>
  candidates.map(c => ({ ...c, cost: c.cost + penalty, displacement }))

const average = (notes: number[]): number =>
  notes.reduce((a, b) => a + b, 0) / notes.length

// All ways to place the chord's pitch classes on the fretboard as an
// ascending set of distinct pitches, keeping the original bass pitch class
// on the bottom so the arrangement's bass line survives. Re-voicings sit at
// or slightly above the original register — never below it, so a re-voiced
// chord can't lurch down an octave relative to its neighbors.
function revoicedPitchSets(midiNotes: number[]): number[][] {
  const bassPc = midiNotes[0] % 12
  const upperPcs = midiNotes.slice(1).map(n => n % 12)
  const originalAvg = average(midiNotes)

  const optionsForPc = (pc: number, min: number): number[] => {
    const options: number[] = []
    for (let midi = min; midi <= HIGHEST_NOTE; midi++) {
      if (midi % 12 === pc) options.push(midi)
    }
    return options
  }

  const sets = new Map<string, number[]>()
  for (const bass of optionsForPc(bassPc, LOWEST_NOTE)) {
    const recurse = (pcIndex: number, acc: number[]) => {
      if (pcIndex === upperPcs.length) {
        const set = [bass, ...acc].sort((a, b) => a - b)
        const avg = average(set)
        if (
          new Set(set).size === set.length &&
          avg >= originalAvg &&
          avg <= originalAvg + 12
        ) {
          sets.set(set.join(','), set)
        }
        return
      }
      for (const midi of optionsForPc(upperPcs[pcIndex], bass + 1)) {
        acc.push(midi)
        recurse(pcIndex + 1, acc)
        acc.pop()
      }
    }
    recurse(0, [])
  }
  return [...sets.values()]
}

const inGuitarRange = (notes: number[]): boolean =>
  notes.every(n => n >= LOWEST_NOTE && n <= HIGHEST_NOTE)

// Whether a voicing can be played as-is on the fretboard — in the written
// guitar register (an octave up) or at pitch — within a normal hand span,
// as a closed (fully fretted, movable) shape. Requiring a closed shape
// rules out technically-fingerable degenerates like a barre at the 10th
// fret ringing against open strings. The voice-leading generator uses this
// to only pick voicings the tab can render without altering them.
export function isGuitarPlayable(midiNotes: number[]): boolean {
  const hasClosedShape = (notes: number[]): boolean =>
    findCandidates(notes, 4).some(c => c.frets.every(f => f > 0))

  if (hasClosedShape(midiNotes)) return true
  const octaveUp = midiNotes.map(n => n + 12)
  return inGuitarRange(octaveUp) && hasClosedShape(octaveUp)
}

// Candidate fingerings for one chord. Pitch-faithful shapes (the exact
// voicing, or the exact voicing in the written guitar register an octave
// up) always win over re-voicings: re-voiced pitch sets are only
// considered when no faithful shape is playable at all, so a chord that
// passes isGuitarPlayable is guaranteed to render with its own notes.
function candidatesForChord(midiNotes: number[]): Candidate[] {
  const octaveUp = midiNotes.map(n => n + 12)
  const originalAvg = average(midiNotes)

  const faithfulAtSpan = (maxSpan: number): Candidate[] => [
    // The written-pitch register (an octave up) is the guitar default
    ...(inGuitarRange(octaveUp)
      ? tag(findCandidates(octaveUp, maxSpan), 0, 12)
      : []),
    ...tag(findCandidates(midiNotes, maxSpan), AT_PITCH_PENALTY, 0),
  ]
  const revoicedAtSpan = (maxSpan: number): Candidate[] =>
    revoicedPitchSets(midiNotes).flatMap(set =>
      tag(findCandidates(set, maxSpan), REVOICE_PENALTY, average(set) - originalAvg)
    )

  // Allow an uncomfortable 5-fret stretch before altering any pitches
  const tiers = [
    () => faithfulAtSpan(4),
    () => faithfulAtSpan(5),
    () => revoicedAtSpan(4),
    () => revoicedAtSpan(5),
  ]
  for (const tier of tiers) {
    const found = tier()
    if (found.length) {
      // Keep the DP small: only the most playable shapes matter
      return found.sort((a, b) => a.cost - b.cost).slice(0, 24)
    }
  }
  return []
}

// Assign a fingering to every chord in the sequence: Viterbi over per-chord
// candidates, minimizing total shape difficulty plus hand movement and
// register-displacement changes between chords. Chords with no playable
// assignment at all (degenerate input, e.g. more notes than strings) get
// null.
export function generateTabSequence(
  chords: number[][]
): (TabFingering | null)[] {
  const candidatesPerChord = chords.map(candidatesForChord)

  // Viterbi forward pass
  const totals: number[][] = []
  const backPointers: number[][] = []
  let prevCandidates: Candidate[] = []
  let prevTotals: number[] = []

  candidatesPerChord.forEach(candidates => {
    const totalRow: number[] = []
    const backRow: number[] = []

    candidates.forEach(candidate => {
      if (!prevCandidates.length) {
        totalRow.push(candidate.cost)
        backRow.push(-1)
        return
      }
      let best = Infinity
      let bestPrev = -1
      prevCandidates.forEach((prev, j) => {
        const total =
          prevTotals[j] + candidate.cost + transitionCost(prev, candidate)
        if (total < best) {
          best = total
          bestPrev = j
        }
      })
      totalRow.push(best)
      backRow.push(bestPrev)
    })

    totals.push(totalRow)
    backPointers.push(backRow)
    // Chords with no candidates are skipped: the hand-position chain
    // continues across them from the last playable chord.
    if (candidates.length) {
      prevCandidates = candidates
      prevTotals = totalRow
    }
  })

  // Backtrack from the cheapest final state
  const result: (TabFingering | null)[] = chords.map(() => null)
  let nextChoice = -1
  for (let i = chords.length - 1; i >= 0; i--) {
    const candidates = candidatesPerChord[i]
    if (!candidates.length) continue
    let choice: number
    if (nextChoice === -1) {
      let best = Infinity
      choice = 0
      totals[i].forEach((t, j) => {
        if (t < best) {
          best = t
          choice = j
        }
      })
    } else {
      choice = nextChoice
    }
    result[i] = toFingering(candidates[choice])
    nextChoice = backPointers[i][choice]
  }

  return result
}
