import { describe, it, expect } from 'vitest'
import {
  generateTabSequence,
  isGuitarPlayable,
  STANDARD_TUNING,
  TabFingering,
} from './tabUtils'
import {
  generateSeventhChords,
  generateTriads,
} from './chordUtils'
import { generateOptimalVoiceLeadingSequence } from './graphUtils'

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
  it('preserves each voicing structure, at pitch or an octave up', () => {
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
      const played = [...chords[i]].sort((a, b) => a - b)
      // Tab renders in written guitar register (an octave above played
      // pitch) when it fits; either way the voicing structure is intact
      const matchesPlayed =
        JSON.stringify(sounded) === JSON.stringify(played) ||
        JSON.stringify(sounded) === JSON.stringify(played.map(n => n + 12))
      expect(matchesPlayed).toBe(true)
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

  it('prefers closed (fretted) shapes over open strings', () => {
    // C3 E3 G3 could sit in open position (A3 D2 G-open), but jazz playing
    // avoids open strings — a fretted movable shape should win.
    const [c] = generateTabSequence([[48, 52, 55]])
    expect(frettedFrets(c!).length).toBe(3) // no open strings
    expect(c!.includes(0)).toBe(false)
  })

  it('still uses open strings when a chord is otherwise unplayable', () => {
    // E2 only exists as the open low E string, and the high G#4 keeps the
    // chord from shifting up an octave — the open string must stay.
    const [fingering] = generateTabSequence([[40, 47, 68]])
    expect(fingering).not.toBeNull()
    expect(fingering![0]).toBe(0)
    expect(soundedNotes(fingering!).sort((a, b) => a - b)).toEqual([
      40, 47, 68,
    ])
  })

  it('renders the played voicing structure an octave up (guitar register)', () => {
    // The opening of Giant Steps as the app voices it: true open triads in
    // a low keyboard register. On guitar these render an octave up with the
    // exact voicing structure intact — never collapsed into closed shapes.
    const tabs = generateTabSequence([
      [42, 51, 59], // Bmaj7 triad: F#2 D#3 B3
      [42, 50, 57], // D7 triad: F#2 D3 A3
      [43, 50, 59], // Gmaj7 triad: G2 D3 B3
    ])
    expect(tabs[0]).toEqual([null, null, 4, null, 4, 7])
    expect(tabs[2]).toEqual([null, null, 5, 7, null, 7])
    // The middle chord keeps the same register (structure +12, elementwise)
    expect(soundedNotes(tabs[1]!).sort((a, b) => a - b)).toEqual([54, 62, 69])
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
      // Chords needing open strings may be octave-shifted or re-voiced
      // into a closed shape, so assert pitch-class fidelity, not octaves
      const pitchClasses = (notes: number[]) =>
        [...new Set(notes.map(n => n % 12))].sort((a, b) => a - b)
      expect(pitchClasses(soundedNotes(fingering!))).toEqual(
        pitchClasses(chords[i])
      )
      expect(fretSpan(fingering!)).toBeLessThanOrEqual(4)
    })
  })

  it('returns an empty array for an empty sequence', () => {
    expect(generateTabSequence([])).toEqual([])
  })
})

describe('isGuitarPlayable', () => {
  it('accepts voicings with a closed shape at pitch or an octave up', () => {
    expect(isGuitarPlayable([48, 52, 55])).toBe(true) // C major triad
    expect(isGuitarPlayable([42, 51, 59])).toBe(true) // open Bmaj7 triad
    expect(isGuitarPlayable([42, 47, 51, 58])).toBe(true) // drop-2 style Bmaj7
  })

  it('rejects close-position clusters that need more strings than exist', () => {
    // A#2 B2 D#3 F#3 — the keyboard cluster the generator used to pick
    expect(isGuitarPlayable([46, 47, 51, 54])).toBe(false)
  })

  it('rejects voicings only fingerable with open strings ringing', () => {
    // D3 F#3 G3 B3 is "playable" only as frets 10/9 against two open
    // strings — not a real shape
    expect(isGuitarPlayable([50, 54, 55, 59])).toBe(false)
  })
})

describe('guitar-constrained generation stays in sync with the tab', () => {
  const chords = ['Bmaj7', 'D7', 'Gmaj7', 'Bb7', 'Ebmaj7', 'Am7', 'D7', 'Gmaj7']

  it('extended qualities (6ths, 9ths, sus, 13ths) generate and render faithfully', () => {
    const extended = ['C6', 'Am9', 'D9', 'G13', 'C69', 'Fmaj9', 'Bm7b5', 'E7sus']
    const voicings = Object.fromEntries(
      extended.map(c => [c, generateSeventhChords(c, 'all')])
    )
    const seq = generateOptimalVoiceLeadingSequence(
      extended,
      [40, 76],
      voicings,
      [true, true, true, true],
      isGuitarPlayable
    )
    expect(seq.length).toBe(extended.length)

    const tabs = generateTabSequence(seq.map(t => t.midiNotes))
    seq.forEach((triad, i) => {
      expect(tabs[i]).not.toBeNull()
      const sounded = soundedNotes(tabs[i]!).sort((a, b) => a - b)
      const faithful =
        JSON.stringify(sounded) === JSON.stringify(triad.midiNotes) ||
        JSON.stringify(sounded) ===
          JSON.stringify(triad.midiNotes.map(n => n + 12))
      expect(faithful).toBe(true)
    })
  })

  const modes = [
    {
      name: 'open triads',
      voicings: Object.fromEntries(
        chords.map(c => [c, generateTriads(c, 'open')])
      ),
      weights: [true, true, true],
    },
    {
      name: 'seventh chords',
      voicings: Object.fromEntries(
        chords.map(c => [c, generateSeventhChords(c, 'all')])
      ),
      weights: [true, true, true, true],
    },
  ]

  modes.forEach(({ name, voicings, weights }) => {
    it(`every generated ${name} voicing renders faithfully in the tab`, () => {
      const seq = generateOptimalVoiceLeadingSequence(
        chords,
        [40, 76],
        voicings,
        weights,
        isGuitarPlayable
      )
      expect(seq.length).toBe(chords.length)

      const tabs = generateTabSequence(seq.map(t => t.midiNotes))
      seq.forEach((triad, i) => {
        const fingering = tabs[i]
        expect(fingering).not.toBeNull()
        const sounded = soundedNotes(fingering!).sort((a, b) => a - b)
        // The tab plays the generated voicing exactly, at pitch or in the
        // written guitar register an octave up — never re-voiced
        const faithful =
          JSON.stringify(sounded) === JSON.stringify(triad.midiNotes) ||
          JSON.stringify(sounded) ===
            JSON.stringify(triad.midiNotes.map(n => n + 12))
        expect(faithful).toBe(true)
        // and as a closed shape within a normal hand span
        expect(fingering!.includes(0)).toBe(false)
        expect(fretSpan(fingering!)).toBeLessThanOrEqual(4)
      })
    })
  })
})
