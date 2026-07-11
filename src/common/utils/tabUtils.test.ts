import { describe, it, expect } from 'vitest'
import {
  generateTabSequence,
  STANDARD_TUNING,
  TabFingering,
} from './tabUtils'

const soundedNotes = (fingering: TabFingering): number[] =>
  fingering.flatMap((fret, string) =>
    fret === null ? [] : [STANDARD_TUNING[string] + fret]
  )

const frettedFrets = (fingering: TabFingering): number[] =>
  fingering.filter((f): f is number => f !== null && f > 0)

const fretSpan = (fingering: TabFingering): number => {
  const fretted = frettedFrets(fingering)
  return fretted.length ? Math.max(...fretted) - Math.min(...fretted) : 0
}

const handPosition = (fingering: TabFingering): number => {
  const fretted = frettedFrets(fingering)
  return fretted.length ? Math.min(...fretted) : 0
}

describe('generateTabSequence', () => {
  it('reproduces every pitch on a distinct string within the fret range', () => {
    const chords = [
      [48, 52, 55], // C major triad
      [45, 52, 57], // A minor voicing
      [43, 50, 55, 59], // G chord tones
      [40, 47, 52, 56], // E7 fragment
    ]
    const tabs = generateTabSequence(chords)

    tabs.forEach((fingering, i) => {
      expect(fingering).not.toBeNull()
      const sounded = soundedNotes(fingering!).sort((a, b) => a - b)
      expect(sounded).toEqual([...chords[i]].sort((a, b) => a - b))
      fingering!.forEach(fret => {
        if (fret !== null) {
          expect(fret).toBeGreaterThanOrEqual(0)
          expect(fret).toBeLessThanOrEqual(15)
        }
      })
    })
  })

  it('keeps every shape within a playable hand span', () => {
    // A realistic run: Giant Steps' first chords voiced in the app's range
    const chords = [
      [47, 51, 54], // B major
      [45, 50, 54], // D7 fragment
      [43, 47, 50], // G major
      [46, 50, 53], // Bb7 fragment
      [43, 46, 51], // Eb fragment
    ]
    const tabs = generateTabSequence(chords)
    tabs.forEach(fingering => {
      expect(fingering).not.toBeNull()
      expect(fretSpan(fingering!)).toBeLessThanOrEqual(4)
    })
  })

  it('prefers open position for open-friendly chords', () => {
    // C3 E3 G3 is the middle of the open C shape: A3 D2 G0
    const [c] = generateTabSequence([[48, 52, 55]])
    expect(c).toEqual([null, 3, 2, 0, null, null])
  })

  it('keeps the same fingering for repeated chords', () => {
    const chord = [48, 52, 55]
    const tabs = generateTabSequence([chord, chord, chord])
    expect(tabs[1]).toEqual(tabs[0])
    expect(tabs[2]).toEqual(tabs[0])
  })

  it('minimizes hand movement between consecutive chords', () => {
    // Each chord playable in several positions; consecutive choices should
    // never ask the hand to leap more than a few frets.
    const chords = [
      [48, 52, 55],
      [50, 53, 57],
      [52, 55, 59],
      [50, 53, 57],
      [48, 52, 55],
    ]
    const tabs = generateTabSequence(chords)
    for (let i = 1; i < tabs.length; i++) {
      const jump = Math.abs(handPosition(tabs[i]!) - handPosition(tabs[i - 1]!))
      expect(jump).toBeLessThanOrEqual(4)
    }
  })

  it('shifts a voicing up an octave when it is unplayable in place', () => {
    // E2 G#2 B2: both E2 and G#2 only exist on the low E string, so the
    // voicing is unplayable in place — but it sits nicely an octave up.
    const [fingering] = generateTabSequence([[40, 44, 47]])
    expect(fingering).not.toBeNull()
    const sounded = soundedNotes(fingering!).sort((a, b) => a - b)
    expect(sounded).toEqual([52, 56, 59])
    expect(fretSpan(fingering!)).toBeLessThanOrEqual(4)
  })

  it('re-voices unplayable cluster voicings, preserving pitch classes and bass', () => {
    // A real case from seventh mode: Bmaj7 voiced A#2 B2 D#3 F#3 —
    // fine on a keyboard, impossible on six strings even an octave up.
    const chord = [46, 47, 51, 54]
    const [fingering] = generateTabSequence([chord])
    expect(fingering).not.toBeNull()

    const sounded = soundedNotes(fingering!).sort((a, b) => a - b)
    const pitchClasses = (notes: number[]) =>
      [...new Set(notes.map(n => n % 12))].sort((a, b) => a - b)
    expect(pitchClasses(sounded)).toEqual(pitchClasses(chord))
    // The bass pitch class survives the re-voicing
    expect(sounded[0] % 12).toBe(chord[0] % 12)
    expect(fretSpan(fingering!)).toBeLessThanOrEqual(5)
  })

  it('returns null only for degenerate input without breaking the rest', () => {
    const chords = [
      [48, 52, 55],
      [40, 41, 42, 43, 44, 45, 46], // more notes than strings
      [48, 52, 55],
    ]
    const tabs = generateTabSequence(chords)
    expect(tabs[0]).not.toBeNull()
    expect(tabs[1]).toBeNull()
    expect(tabs[2]).not.toBeNull()
  })

  it('handles four-note seventh chords from the app range', () => {
    const chords = [
      [40, 47, 51, 56], // E maj7 fragment spanning the low strings
      [45, 52, 56, 59], // A maj7 fragment
    ]
    const tabs = generateTabSequence(chords)
    tabs.forEach((fingering, i) => {
      expect(fingering).not.toBeNull()
      expect(soundedNotes(fingering!).sort((a, b) => a - b)).toEqual(
        [...chords[i]].sort((a, b) => a - b)
      )
      expect(fretSpan(fingering!)).toBeLessThanOrEqual(4)
    })
  })

  it('returns an empty array for an empty sequence', () => {
    expect(generateTabSequence([])).toEqual([])
  })
})
