// Guitar tablature fingering assignment.
//
// Any given pitch can be played in several places on the fretboard, so
// choosing where to play a chord is an optimization problem. Each chord's
// candidate fingerings are scored for playability (fret span, hand position,
// muted inner strings), then dynamic programming picks the sequence of
// fingerings that minimizes shape cost plus hand movement between chords —
// the fretting-hand analogue of the voice-leading optimizer.
//
// Not every keyboard voicing is playable on six strings (close-position
// clusters low on the neck, for instance), so candidates are generated in
// tiers of decreasing faithfulness: the exact voicing, the voicing an octave
// up (guitar sounds an octave below written pitch, so this is idiomatic),
// and finally a re-voicing of the same pitch classes over the same bass.
// Later tiers carry penalties so the most faithful playable shape wins.

// Standard tuning, low to high: E2 A2 D3 G3 B3 E4
export const STANDARD_TUNING = [40, 45, 50, 55, 59, 64]
export const STRING_NAMES = ['E', 'A', 'D', 'G', 'B', 'e']
const MAX_FRET = 15
const LOWEST_NOTE = STANDARD_TUNING[0]
const HIGHEST_NOTE = STANDARD_TUNING[STANDARD_TUNING.length - 1] + MAX_FRET

const OCTAVE_SHIFT_PENALTY = 2
const REVOICE_PENALTY = 4

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

  // Average fret pulls gently toward open position
  const avgFret = frets.reduce((a, b) => a + b, 0) / frets.length

  return span * 2 + (span >= 4 ? 4 : 0) + innerGaps * 0.75 + avgFret * 0.25
}

// Cost of moving the fretting hand between consecutive chords.
function transitionCost(prevFrets: number[], nextFrets: number[]): number {
  return Math.abs(handPosition(prevFrets) - handPosition(nextFrets))
}

type Candidate = {
  strings: number[] // string index per note, ascending
  frets: number[] // fret per note, parallel to strings
  cost: number
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
      if (span <= maxSpan) {
        candidates.push({
          strings: [...acc],
          frets,
          cost: shapeCost(acc, frets),
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

const withPenalty = (candidates: Candidate[], penalty: number): Candidate[] =>
  candidates.map(c => ({ ...c, cost: c.cost + penalty }))

// All ways to place the chord's pitch classes on the fretboard as an
// ascending set of distinct pitches, keeping the original bass pitch class
// on the bottom so the arrangement's bass line survives.
function revoicedPitchSets(midiNotes: number[]): number[][] {
  const bassPc = midiNotes[0] % 12
  const upperPcs = midiNotes.slice(1).map(n => n % 12)

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
        if (new Set(set).size === set.length) {
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

// Candidate fingerings for one chord, in tiers of decreasing faithfulness.
function candidatesForChord(midiNotes: number[]): Candidate[] {
  const octaveUp = midiNotes.map(n => n + 12)
  const inRange = (notes: number[]) =>
    notes.every(n => n >= LOWEST_NOTE && n <= HIGHEST_NOTE)

  const tiers: Array<() => Candidate[]> = [
    () => findCandidates(midiNotes, 4),
    () =>
      inRange(octaveUp)
        ? withPenalty(findCandidates(octaveUp, 4), OCTAVE_SHIFT_PENALTY)
        : [],
    () =>
      withPenalty(
        revoicedPitchSets(midiNotes).flatMap(set => findCandidates(set, 4)),
        REVOICE_PENALTY
      ),
    // Last resort: allow an uncomfortable stretch before giving up
    () => findCandidates(midiNotes, 5),
    () =>
      withPenalty(
        revoicedPitchSets(midiNotes).flatMap(set => findCandidates(set, 5)),
        REVOICE_PENALTY
      ),
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

// Assign a fingering to every chord in the sequence, minimizing total
// shape difficulty plus hand movement (Viterbi over per-chord candidates).
// Chords with no playable assignment at all (which should only happen for
// degenerate input, e.g. more notes than strings) get null.
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
          prevTotals[j] +
          candidate.cost +
          transitionCost(prev.frets, candidate.frets)
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
