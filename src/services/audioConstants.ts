import { VoiceLeadingState } from '../common/types'

export const SEQUENCE_RANGES = {
  DESKTOP: [40, 76] as [number, number],
  MOBILE: [60, 84] as [number, number],
} as const

export const AUDIO_DEFAULTS = {
  VOLUME: -12,
  CHORD_DURATION: 500,
  IS_ARPEGGIATING: true,
  IS_LOOPING: false,
  TRIAD_TYPE: 'spread' as const,
  ARPEGGIO_TYPE: 'ascending' as const,
}

export const DEFAULT_VOICE_LEADING_STATE: VoiceLeadingState = {
  bass: true,
  middle: true,
  high: true,
}

export const INSTRUMENT_TYPES = ['piano', 'synth', 'guitar'] as const
export type InstrumentType = (typeof INSTRUMENT_TYPES)[number]
export type TriadType = 'close' | 'spread'
export type ArpeggioType = 'ascending' | 'descending' | 'alternating'
