import {
  CHROMATIC_SCALE,
  SCALE_INTERVALS,
  SEVENTH_CHORD_INTERVALS,
  ENHARMONIC_MAP,
  Inversion,
  NOTE_TO_MIDI_BASE,
} from '../../common/types'

export function parseChord(chord: string): {
  originalRoot: string
  standardizedRoot: string
  chordType: string
} {
  const match = chord.match(/^([A-G][#b]?)(.*)$/)
  if (!match) {
    console.error('Invalid chord format:', chord)
    return { originalRoot: 'C', standardizedRoot: 'C', chordType: 'M' }
  }

  const originalRoot = match[1]
  const standardizedRoot = ENHARMONIC_MAP[originalRoot] || originalRoot
  let chordType = match[2] || 'M' // Default to major if not specified

  // Map extended chord qualities to their basic triad type
  if (chordType.includes('m7b5') || chordType.includes('ø')) {
    chordType = 'dim' // half-diminished -> diminished triad
  } else if (chordType.includes('dim') || chordType.includes('°')) {
    chordType = 'dim'
  } else if (chordType.includes('aug') || chordType.includes('+')) {
    chordType = 'aug'
  } else if (chordType.toLowerCase().includes('mmaj')) {
    chordType = 'm' // minor-major 7th chord -> minor triad
  } else if (chordType.includes('maj7') || chordType.includes('maj')) {
    chordType = 'M' // major 7th chord -> major triad
  } else if (chordType.startsWith('m')) {
    chordType = 'm' // any minor chord -> minor triad
  } else if (chordType.includes('7')) {
    chordType = 'M' // dominant 7th chord -> major triad
  } else if (chordType.includes('M')) {
    chordType = 'M' // explicitly marked major chord
  } else {
    chordType = 'M' // default to major
  }

  return { originalRoot, standardizedRoot, chordType }
}

export function generateTriads(
  chord: string,
  triadType: 'all' | 'close' | 'open' = 'open'
): Inversion[] {
  const { originalRoot, standardizedRoot, chordType } = parseChord(chord)

  const rootIndex = CHROMATIC_SCALE.indexOf(standardizedRoot)
  const intervals = SCALE_INTERVALS[chordType] || SCALE_INTERVALS['M']

  const notes = [
    CHROMATIC_SCALE[rootIndex],
    CHROMATIC_SCALE[
      (rootIndex + sum(intervals.slice(0, 2))) % CHROMATIC_SCALE.length
    ],
    CHROMATIC_SCALE[
      (rootIndex + sum(intervals.slice(0, 4))) % CHROMATIC_SCALE.length
    ],
  ]

  const triad_permutations = generatePermutations(notes)

  let triads: string[]
  if (triadType === 'all') {
    triads = triad_permutations
  } else if (triadType === 'close') {
    triads = [
      triad_permutations[0],
      triad_permutations[3],
      triad_permutations[4],
    ]
  } else {
    // open
    triads = [
      triad_permutations[1],
      triad_permutations[2],
      triad_permutations[5],
    ]
  }

  return triads.map(triad =>
    triad.replace(new RegExp(standardizedRoot, 'g'), originalRoot)
  )
}

function sum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0)
}

const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

// Spell a pitch in the context of a chord: flat-side roots get flat
// spellings (Bb7 -> Ab, not G#), everything else gets sharps.
export function noteNameForMidi(midi: number, chordRoot: string): string {
  const useFlats = chordRoot.includes('b') || chordRoot === 'F'
  return (useFlats ? FLAT_NAMES : SHARP_NAMES)[((midi % 12) + 12) % 12]
}

// Jazz-style degree name for each semitone offset from the root
export const DEGREE_LABELS = [
  'R', 'b9', '9', 'b3', '3', '11', 'b5', '5', '#5', '13', 'b7', '7',
]

export function getScaleDegreeLabel(midi: number, chord: string): string {
  const { standardizedRoot, chordType } = parseSeventhChord(chord)
  const rootMidi = NOTE_TO_MIDI_BASE[standardizedRoot]
  const offset = (((midi - rootMidi) % 12) + 12) % 12

  // Quality-aware names: the 9 semitones above the root of a sixth chord
  // are its 6, not a 13; likewise b6 in mb6 and the suspended 4
  if (offset === 9 && ['6', 'm6', '69', 'm69'].includes(chordType)) return '6'
  if (offset === 8 && chordType === 'mb6') return 'b6'
  if (offset === 5 && chordType === '7sus') return '4'

  return DEGREE_LABELS[offset]
}

// "F" with an A in the bass -> "F/A"; bass on the root stays plain "F"
export function formatChordWithBass(chord: string, bassMidi: number): string {
  const { originalRoot, standardizedRoot } = parseChord(chord)
  const rootMidi = NOTE_TO_MIDI_BASE[standardizedRoot]
  if ((((bassMidi - rootMidi) % 12) + 12) % 12 === 0) {
    return chord
  }
  return `${chord}/${noteNameForMidi(bassMidi, originalRoot)}`
}

function generatePermutations(notes: string[]): string[] {
  const result: string[] = []
  const n = notes.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && i !== k) {
          result.push([notes[i], notes[j], notes[k]].join(' '))
        }
      }
    }
  }

  return result
}

export function findAllVoicingsInRange(
  notes: string[],
  midiRange: [number, number]
): number[][] {
  const baseMidis = notes.map(
    note => NOTE_TO_MIDI_BASE[note] ?? NOTE_TO_MIDI_BASE[ENHARMONIC_MAP[note]]
  )
  const validMidis: number[][] = []
  const octaves = [-2, -1, 0, 1, 2]

  const recurse = (acc: number[]) => {
    const i = acc.length
    if (i === baseMidis.length) {
      validMidis.push(acc)
      return
    }
    for (const o of octaves) {
      const midi = baseMidis[i] + o * 12
      if (midi < midiRange[0] || midi > midiRange[1]) continue
      if (i > 0 && midi <= acc[i - 1]) continue // ascending
      if (i > 0 && midi - acc[i - 1] > 12) continue // within an octave of previous
      recurse([...acc, midi])
    }
  }

  recurse([])
  return validMidis
}

export function findAllTriadsInRange(
  notes: string[],
  midiRange: [number, number]
): number[][] {
  return findAllVoicingsInRange(notes, midiRange)
}

function parseSeventhChord(chord: string): {
  originalRoot: string
  standardizedRoot: string
  chordType: string
} {
  const match = chord.match(/^([A-G][#b]?)(.*)$/)
  if (!match) {
    console.error('Invalid chord format:', chord)
    return { originalRoot: 'C', standardizedRoot: 'C', chordType: 'maj7' }
  }

  const originalRoot = match[1]
  const standardizedRoot = ENHARMONIC_MAP[originalRoot] || originalRoot
  const suffix = match[2] || ''

  return {
    originalRoot,
    standardizedRoot,
    chordType: seventhChordType(suffix),
  }
}

// Map a chord suffix to its 4-note quality. Genuine 4-note qualities are
// kept as themselves; 5-note qualities reduce to their standard 4-note
// form (9ths/13ths drop the 5th, 11ths become sus); altered extensions
// collapse to their parent quality (7b13 -> 7, m11 -> m7, maj7#11 -> maj7).
// Match order matters throughout: more specific suffixes first.
function seventhChordType(suffix: string): string {
  const lower = suffix.toLowerCase()

  // Diminished / half-diminished family
  if (suffix.includes('m7b5') || suffix.includes('ø')) return 'm7b5'
  if (suffix.includes('dim7') || suffix.includes('°7')) return 'dim7'
  // half-dim is the most common reading of a bare "dim" in a 7th-chord context
  if (suffix.includes('dim') || suffix.includes('°')) return 'm7b5'

  // Major-seventh family (before the minor family: "maj" starts with "m")
  if (lower.includes('mmaj7') || suffix.includes('mM7')) return 'mMaj7'
  if (lower.includes('maj9')) return 'maj9'
  if (lower.includes('maj7#5')) return 'maj7#5'
  if (lower.includes('maj7') || suffix.includes('M7')) return 'maj7'
  if (lower.includes('maj')) return 'maj7' // maj13 etc.

  // Augmented family (before the minor family so "maug" isn't read as
  // minor; before the dominant family so 7#5 / 9#5 keep the raised 5th)
  if (suffix.includes('aug') || suffix.includes('+') || suffix.includes('#5'))
    return 'aug7'

  // Minor family
  if (suffix.startsWith('m')) {
    if (suffix.includes('b6')) return 'mb6'
    if (suffix.includes('69')) return 'm69'
    if (suffix.includes('6')) return 'm6'
    if (suffix.includes('b9') || suffix.includes('#9')) return 'm7' // m7b9 -> m7
    if (suffix.includes('9')) return 'm9'
    return 'm7' // m7, m11, bare minor, ...
  }

  // Suspended family (before 9/13: 9sus and 13sus are sus sounds)
  if (suffix.includes('sus')) return '7sus'

  // Dominant / major-sixth family
  if (suffix.includes('b5')) return '7b5' // 7b5, 9b5, 7b5b9
  if (suffix.includes('69')) return '69'
  if (suffix.includes('add9')) return 'add9'
  if (suffix.includes('b13')) return '7' // 7b13 -> 7
  if (suffix.includes('13')) return '13' // 13, 13b9, 13#11
  if (suffix.includes('b9') || suffix.includes('#9')) return '7' // 7b9, 7#9
  if (suffix.includes('9')) return '9' // 9, 9#11
  if (suffix.includes('#11')) return '7' // 7#11 -> 7
  if (suffix.includes('11')) return '7sus' // bare 11th chords are sus sounds
  if (suffix.includes('6')) return '6'
  if (suffix.includes('7')) return '7' // 7, 7alt
  return 'maj7' // bare major chord -> major 7th in seventh mode
}

// Cyclic rotations of the canonical tertian stack [1, 3, 5, 7] —
// these are the four close-position inversions: root, 1st, 2nd, 3rd.
function rotations<T>(arr: T[]): T[][] {
  return arr.map((_, i) => [...arr.slice(i), ...arr.slice(0, i)])
}

// Drop-2: take a close-position voicing (low-to-high in pitch class) and
// move the second-from-top voice down an octave, so it becomes the new bass.
// For a 4-note voicing [a, b, c, d], drop-2 yields [c, a, b, d].
function dropTwo(closeVoicing: string[]): string[] {
  if (closeVoicing.length !== 4) return closeVoicing
  const [a, b, c, d] = closeVoicing
  return [c, a, b, d]
}

export function generateSeventhChords(
  chord: string,
  voicingType: 'all' | 'close' | 'open' = 'all'
): Inversion[] {
  const { originalRoot, standardizedRoot, chordType } = parseSeventhChord(chord)

  const rootIndex = CHROMATIC_SCALE.indexOf(standardizedRoot)
  const intervals =
    SEVENTH_CHORD_INTERVALS[chordType] || SEVENTH_CHORD_INTERVALS['maj7']

  const tertianStack = intervals.map(
    semis => CHROMATIC_SCALE[(rootIndex + semis) % CHROMATIC_SCALE.length]
  )

  const closeVoicings = rotations(tertianStack)

  let voicings: string[][]
  if (voicingType === 'close') {
    voicings = closeVoicings
  } else if (voicingType === 'open') {
    voicings = closeVoicings.map(dropTwo)
  } else {
    voicings = [...closeVoicings, ...closeVoicings.map(dropTwo)]
  }

  return voicings
    .map(v => v.join(' '))
    .map(v => v.replace(new RegExp(standardizedRoot, 'g'), originalRoot))
}
