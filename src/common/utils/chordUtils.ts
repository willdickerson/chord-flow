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
  const { standardizedRoot } = parseChord(chord)
  const rootMidi = NOTE_TO_MIDI_BASE[standardizedRoot]
  return DEGREE_LABELS[(((midi - rootMidi) % 12) + 12) % 12]
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

  const lower = suffix.toLowerCase()

  let chordType: string
  if (suffix.includes('m7b5') || suffix.includes('ø')) {
    chordType = 'm7b5'
  } else if (suffix.includes('dim7') || suffix.includes('°7')) {
    chordType = 'dim7'
  } else if (suffix.includes('dim') || suffix.includes('°')) {
    chordType = 'm7b5' // half-dim is the most common interpretation of a bare "dim" in a 7th-chord context
  } else if (lower.includes('mmaj7') || suffix.includes('mM7')) {
    chordType = 'mMaj7'
  } else if (lower.includes('maj7') || suffix.includes('M7')) {
    chordType = 'maj7'
  } else if (lower.includes('maj')) {
    chordType = 'maj7' // maj9, maj13, etc. all carry a major 7th
  } else if (suffix.includes('aug') || suffix.includes('+')) {
    chordType = '7' // closest 4-note approximation; aug7 not yet modeled (checked before the minor test so "maug" isn't read as minor)
  } else if (suffix.startsWith('m')) {
    chordType = 'm7' // m6, m9, m11, etc. -> minor 7th
  } else if (lower.includes('add') || suffix.includes('6')) {
    chordType = 'maj7' // add9 / 6 / 69 chords have no b7 — major quality
  } else if (/7|9|11|13/.test(suffix)) {
    chordType = '7' // dominant extensions/alterations: 9, 13, 7b9, 7alt, ...
  } else {
    chordType = 'maj7' // bare major chord -> major 7th in seventh mode
  }

  return { originalRoot, standardizedRoot, chordType }
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
