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
