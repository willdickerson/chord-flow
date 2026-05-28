import { describe, it, expect } from 'vitest'
import {
  generateSeventhChords,
  generateTriads,
  findAllVoicingsInRange,
} from './chordUtils'
import {
  generateOptimalVoiceLeadingSequence,
  calculateVoiceLeadingCostWithWeightsN,
} from './graphUtils'

const MIDI_RANGE: [number, number] = [40, 76]

describe('seventh chord generation', () => {
  it('produces the 4 close-position inversions (rotations of the tertian stack)', () => {
    const voicings = generateSeventhChords('Cmaj7', 'close')
    expect(voicings).toEqual([
      'C E G B', // root position
      'E G B C', // 1st inversion
      'G B C E', // 2nd inversion
      'B C E G', // 3rd inversion
    ])
  })

  it('produces 4 drop-2 open voicings', () => {
    const voicings = generateSeventhChords('Cmaj7', 'open')
    // drop-2 of [a,b,c,d] = [c,a,b,d]
    expect(voicings).toEqual([
      'G C E B', // drop-2 of root pos: bass = 5th
      'B E G C', // drop-2 of 1st inv: bass = 7th
      'C G B E', // drop-2 of 2nd inv: bass = root
      'E B C G', // drop-2 of 3rd inv: bass = 3rd
    ])
  })

  it("'all' returns close + drop-2 (8 voicings)", () => {
    const voicings = generateSeventhChords('Cmaj7', 'all')
    expect(voicings.length).toBe(8)
    for (const v of voicings) {
      const notes = v.split(' ')
      expect(notes.length).toBe(4)
      expect(notes.sort().join(',')).toBe(['B', 'C', 'E', 'G'].sort().join(','))
    }
  })

  it('preserves the original root spelling', () => {
    const voicings = generateSeventhChords('F#maj7', 'close')
    expect(voicings[0].startsWith('F#')).toBe(true)
  })

  it('produces correct chord tones for D7', () => {
    const root = generateSeventhChords('D7', 'close')[0].split(' ')
    // D, F#, A, C — F# normalizes to Gb internally; root D is preserved
    expect(root.sort().join(',')).toBe(['A', 'C', 'D', 'Gb'].sort().join(','))
  })

  it('produces correct chord tones for Em7b5 (half-diminished)', () => {
    const root = generateSeventhChords('Em7b5', 'close')[0].split(' ')
    expect(root.sort().join(',')).toBe(['Bb', 'D', 'E', 'G'].sort().join(','))
  })

  it('falls back to maj7 for bare root', () => {
    const root = generateSeventhChords('C', 'close')[0].split(' ')
    expect(root.sort().join(',')).toBe(['B', 'C', 'E', 'G'].sort().join(','))
  })
})

describe('findAllVoicingsInRange (N-voice)', () => {
  it('still works for 3-note inputs (backwards compat)', () => {
    const voicings = generateTriads('CM', 'all')
    const notes = voicings[0].split(' ')
    const midis = findAllVoicingsInRange(notes, MIDI_RANGE)
    expect(midis.length).toBeGreaterThan(0)
    for (const m of midis) {
      expect(m.length).toBe(3)
      expect(m[0]).toBeLessThan(m[1])
      expect(m[1]).toBeLessThan(m[2])
    }
  })

  it('produces ascending 4-note midi sets within range', () => {
    const voicings = generateSeventhChords('Cmaj7', 'all')
    const all = voicings.flatMap(v =>
      findAllVoicingsInRange(v.split(' '), MIDI_RANGE)
    )
    expect(all.length).toBeGreaterThan(0)
    for (const m of all) {
      expect(m.length).toBe(4)
      for (let i = 1; i < m.length; i++) {
        expect(m[i]).toBeGreaterThan(m[i - 1])
        expect(m[i] - m[i - 1]).toBeLessThanOrEqual(12)
      }
      expect(m[0]).toBeGreaterThanOrEqual(40)
      expect(m[m.length - 1]).toBeLessThanOrEqual(76)
    }
  })
})

describe('voice-leading cost (N-voice)', () => {
  it('weighs each voice independently', () => {
    const cur = [60, 64, 67, 71]
    const next = [62, 65, 67, 72]
    // movements: 2, 1, 0, 1
    const all = calculateVoiceLeadingCostWithWeightsN(cur, next, [
      true,
      true,
      true,
      true,
    ])
    // (2+1+0+1)/4 = 1
    expect(all).toBeCloseTo(1)

    const bassOnly = calculateVoiceLeadingCostWithWeightsN(cur, next, [
      true,
      false,
      false,
      false,
    ])
    // 2*1 + 1*.001 + 0*.001 + 1*.001 = 2.002, /1 active = 2.002
    expect(bassOnly).toBeGreaterThan(2)
    expect(bassOnly).toBeLessThan(2.01)
  })
})

describe('end-to-end 4-voice optimization', () => {
  const chords = ['Cmaj7', 'Am7', 'Dm7', 'G7']
  const voicings = Object.fromEntries(
    chords.map(c => [c, generateSeventhChords(c, 'all')])
  )

  it('produces a 4-note sequence the same length as the input', () => {
    const seq = generateOptimalVoiceLeadingSequence(
      chords,
      MIDI_RANGE,
      voicings,
      [true, true, true, true]
    )
    expect(seq.length).toBe(chords.length)
    for (const triad of seq) {
      expect(triad.midiNotes.length).toBe(4)
    }
  })

  it('chooses smooth voice leading by default (low total movement)', () => {
    const seq = generateOptimalVoiceLeadingSequence(
      chords,
      MIDI_RANGE,
      voicings,
      [true, true, true, true]
    )
    let totalMovement = 0
    for (let i = 1; i < seq.length; i++) {
      const prev = seq[i - 1].midiNotes
      const cur = seq[i].midiNotes
      for (let v = 0; v < prev.length; v++) {
        totalMovement += Math.abs(cur[v] - prev[v])
      }
    }
    // Naive worst case for ii-V-I-vi cycling through random 7ths is large.
    // Optimal smooth voice leading on this progression should keep total
    // semitone movement well under 30 across 3 transitions × 4 voices.
    expect(totalMovement).toBeLessThan(30)
  })

  it('respects voice selection: pinning bass produces less bass movement', () => {
    const balanced = generateOptimalVoiceLeadingSequence(
      chords,
      MIDI_RANGE,
      voicings,
      [true, true, true, true]
    )
    const bassOnly = generateOptimalVoiceLeadingSequence(
      chords,
      MIDI_RANGE,
      voicings,
      [true, false, false, false]
    )

    const bassMovement = (seq: typeof balanced) => {
      let m = 0
      for (let i = 1; i < seq.length; i++) {
        m += Math.abs(seq[i].midiNotes[0] - seq[i - 1].midiNotes[0])
      }
      return m
    }

    // When only bass is weighted, bass movement should be minimized
    expect(bassMovement(bassOnly)).toBeLessThanOrEqual(bassMovement(balanced))
  })
})
