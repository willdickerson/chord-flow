export type MidiNote = number
export type ChordName = string
export type Inversion = string

export type Triad = {
  chordName: ChordName
  inversion: Inversion
  midiNotes: MidiNote[]
}

export type GraphNode = {
  position: number
  chordName: ChordName
  inversion: Inversion
  midiNotes: MidiNote[]
}

export type GraphEdge = {
  from: GraphNode
  to: GraphNode
  weight: number
}

export interface VoiceLeadingState {
  bass: boolean
  middle: boolean
  high: boolean
}

export interface SeventhVoiceLeadingState {
  bass: boolean
  tenor: boolean
  alto: boolean
  soprano: boolean
}

export type ChordMode = 'triad' | 'seventh'

export type VoiceLeadingGraph = {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export type ScaleIntervals = {
  [key: string]: number[]
}

export const SCALE_INTERVALS: ScaleIntervals = {
  M: [2, 2, 1, 2, 2, 2, 1], // Major
  m: [2, 1, 2, 2, 1, 2, 2], // Minor
  dim: [2, 1, 2, 1, 2, 1, 2], // Diminished
  aug: [3, 1, 3, 1, 3], // Augmented
}

// Semitone offsets from the root for 4-note chord qualities. Offsets above
// 11 (9ths, 13ths) wrap to their pitch class when the stack is built.
// Five-note qualities are represented by their standard 4-note reduction:
// 9th and 13th chords drop the 5th.
export const SEVENTH_CHORD_INTERVALS: { [key: string]: number[] } = {
  maj7: [0, 4, 7, 11],
  '7': [0, 4, 7, 10],
  m7: [0, 3, 7, 10],
  m7b5: [0, 3, 6, 10],
  dim7: [0, 3, 6, 9],
  mMaj7: [0, 3, 7, 11],
  '6': [0, 4, 7, 9],
  m6: [0, 3, 7, 9],
  '69': [0, 4, 9, 14],
  m69: [0, 3, 9, 14],
  '9': [0, 4, 10, 14],
  m9: [0, 3, 10, 14],
  maj9: [0, 4, 11, 14],
  add9: [0, 4, 7, 14],
  '13': [0, 4, 10, 21],
  '7sus': [0, 5, 7, 10],
  aug7: [0, 4, 8, 10],
  'maj7#5': [0, 4, 8, 11],
  '7b5': [0, 4, 6, 10],
  mb6: [0, 3, 7, 8],
}

export const CHROMATIC_SCALE = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
]

export const ENHARMONIC_MAP: { [key: string]: string } = {
  'C#': 'Db',
  Db: 'Db',
  'D#': 'Eb',
  Eb: 'Eb',
  'F#': 'Gb',
  Gb: 'Gb',
  'G#': 'Ab',
  Ab: 'Ab',
  'A#': 'Bb',
  Bb: 'Bb',
}

export const NOTE_TO_MIDI_BASE: { [key: string]: number } = {
  C: 60,
  'C#': 61,
  Db: 61,
  D: 62,
  'D#': 63,
  Eb: 63,
  E: 64,
  F: 65,
  'F#': 66,
  Gb: 66,
  G: 67,
  'G#': 68,
  Ab: 68,
  A: 69,
  'A#': 70,
  Bb: 70,
  B: 71,
}

export type ChordSequence = {
  chords: Triad[]
  tempo?: number
}
