import { describe, it, expect } from 'vitest'
import {
  formatChordWithBass,
  getScaleDegreeLabel,
  noteNameForMidi,
} from './chordUtils'

describe('formatChordWithBass', () => {
  it('adds a slash bass when the bass is not the root', () => {
    // F major with an A in the bass (A2 = 45)
    expect(formatChordWithBass('F', 45)).toBe('F/A')
    // Bmaj7 with the fifth in the bass (F#3 = 54)
    expect(formatChordWithBass('Bmaj7', 54)).toBe('Bmaj7/F#')
    // Bb7 with the third in the bass (D3 = 50)
    expect(formatChordWithBass('Bb7', 50)).toBe('Bb7/D')
  })

  it('keeps the plain symbol when the bass is the root, any octave', () => {
    expect(formatChordWithBass('F', 41)).toBe('F')
    expect(formatChordWithBass('F', 53)).toBe('F')
    expect(formatChordWithBass('Bmaj7', 47)).toBe('Bmaj7')
  })

  it('spells the bass to match the chord root accidental', () => {
    // Flat-side chord: Eb over Bb7... bass Ab (56) under Bb7 -> Ab, not G#
    expect(formatChordWithBass('Bb7', 56)).toBe('Bb7/Ab')
    // Sharp-side chord: D#3 (51) under Bmaj7 -> D#, not Eb
    expect(formatChordWithBass('Bmaj7', 51)).toBe('Bmaj7/D#')
  })
})

describe('getScaleDegreeLabel', () => {
  it('labels chord tones relative to the chord root', () => {
    // B major: F# is the 5th, D# the 3rd, A# the 7th
    expect(getScaleDegreeLabel(47, 'Bmaj7')).toBe('R')
    expect(getScaleDegreeLabel(54, 'Bmaj7')).toBe('5')
    expect(getScaleDegreeLabel(51, 'Bmaj7')).toBe('3')
    expect(getScaleDegreeLabel(58, 'Bmaj7')).toBe('7')
  })

  it('labels flat degrees for minor and dominant chords', () => {
    // D minor: F is the b3
    expect(getScaleDegreeLabel(53, 'Dm7')).toBe('b3')
    // G7: F is the b7
    expect(getScaleDegreeLabel(53, 'G7')).toBe('b7')
    // C7: Gb is the b5
    expect(getScaleDegreeLabel(54, 'C7b5')).toBe('b5')
  })

  it('is octave-independent', () => {
    expect(getScaleDegreeLabel(41, 'F')).toBe('R')
    expect(getScaleDegreeLabel(65, 'F')).toBe('R')
    expect(getScaleDegreeLabel(69, 'F')).toBe('3')
  })
})

describe('noteNameForMidi', () => {
  it('uses flats for flat-side chords and sharps otherwise', () => {
    expect(noteNameForMidi(51, 'Eb')).toBe('Eb')
    expect(noteNameForMidi(51, 'B')).toBe('D#')
    expect(noteNameForMidi(56, 'F')).toBe('Ab')
  })
})
