import {
  CHROMATIC_SCALE,
  SCALE_INTERVALS,
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

export function findAllTriadsInRange(
  notes: string[],
  midiRange: [number, number]
): number[][] {
  const baseMidis = notes.map(
    note => NOTE_TO_MIDI_BASE[note] ?? NOTE_TO_MIDI_BASE[ENHARMONIC_MAP[note]]
  )
  const validMidis: number[][] = []
  const octaves = [-2, -1, 0, 1, 2]

  for (const o1 of octaves) {
    for (const o2 of octaves) {
      for (const o3 of octaves) {
        const midiNotes = [
          baseMidis[0] + o1 * 12,
          baseMidis[1] + o2 * 12,
          baseMidis[2] + o3 * 12,
        ]

        const inRange = midiNotes.every(
          midi => midiRange[0] <= midi && midi <= midiRange[1]
        )

        // Check if notes are in ascending order
        const isAscending = midiNotes.every(
          (midi, i) => i === 0 || midi > midiNotes[i - 1]
        )

        // Check that no two neighboring notes are more than an octave apart
        const withinOctave = midiNotes.every(
          (midi, i) => i === 0 || Math.abs(midi - midiNotes[i - 1]) <= 12
        )

        if (inRange && isAscending && withinOctave) {
          validMidis.push(midiNotes)
        }
      }
    }
  }

  return validMidis
}
