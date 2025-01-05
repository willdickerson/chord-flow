import { describe, it, expect } from 'vitest'
import { generateTriads, findAllTriadsInRange } from '../utils/chordUtils'
import {
  buildVoiceLeadingGraph,
  findOptimalVoiceLeading,
} from '../utils/graphUtils'

describe('Voice Leading', () => {
  // Test data from Giant Steps
  const GIANT_STEPS_FIRST_FOUR = ['B', 'D', 'G', 'Bb']
  const MIDI_RANGE: [number, number] = [40, 90]

  describe('generateTriads', () => {
    it('generates correct spread triads for B major', () => {
      const triads = generateTriads('B', 'spread')
      expect(triads).toHaveLength(3)
      expect(triads).toContain('B Gb Eb')
      expect(triads).toContain('Eb B Gb')
      expect(triads).toContain('Gb Eb B')
    })

    it('generates correct spread triads for D major', () => {
      const triads = generateTriads('D', 'spread')
      expect(triads).toHaveLength(3)
      expect(triads).toContain('D A Gb')
      expect(triads).toContain('Gb D A')
      expect(triads).toContain('A Gb D')
    })

    it('generates correct triads for minor chords', () => {
      const triads = generateTriads('Am', 'spread')
      expect(triads).toHaveLength(3)
      expect(triads).toContain('A E C')
      expect(triads).toContain('C A E')
      expect(triads).toContain('E C A')
    })
  })

  describe('findAllTriadsInRange', () => {
    it('finds valid triads within MIDI range', () => {
      const notes = ['B', 'Gb', 'Eb']
      const combinations = findAllTriadsInRange(notes, MIDI_RANGE)

      expect(combinations).toContainEqual([47, 54, 63]) // B Gb Eb
      expect(combinations).toContainEqual([59, 66, 75]) // B Gb Eb in higher octave
      expect(combinations).toContainEqual([71, 78, 87]) // B Gb Eb in even higher octave
    })

    it('ensures no adjacent notes are more than an octave apart', () => {
      const notes = ['B', 'Gb', 'Eb']
      const combinations = findAllTriadsInRange(notes, MIDI_RANGE)

      for (const combo of combinations) {
        expect(combo[1] - combo[0]).toBeLessThanOrEqual(12)
        expect(combo[2] - combo[1]).toBeLessThanOrEqual(12)
      }
    })
  })

  describe('Voice Leading Graph', () => {
    it('builds correct graph for first two chords of Giant Steps', () => {
      const chords = ['B', 'D']
      const triads = {
        B: generateTriads('B', 'spread'),
        D: generateTriads('D', 'spread'),
      }

      const graph = buildVoiceLeadingGraph(chords, MIDI_RANGE, triads)

      const bTriad = graph.nodes.find(
        n =>
          n.position === 0 &&
          n.chordName === 'B' &&
          n.midiNotes[0] === 47 &&
          n.midiNotes[1] === 54 &&
          n.midiNotes[2] === 63
      )

      const dTriad = graph.nodes.find(
        n =>
          n.position === 1 &&
          n.chordName === 'D' &&
          n.midiNotes[0] === 42 &&
          n.midiNotes[1] === 50 &&
          n.midiNotes[2] === 57
      )

      expect(bTriad).toBeDefined()
      expect(dTriad).toBeDefined()

      const edge = graph.edges.find(e => e.from === bTriad && e.to === dTriad)

      expect(edge).toBeDefined()
      expect(edge?.weight).toBe(15)
    })

    it('finds optimal path matching Python output', () => {
      const chords = GIANT_STEPS_FIRST_FOUR
      const triads = Object.fromEntries(
        chords.map(chord => [chord, generateTriads(chord, 'spread')])
      )

      const graph = buildVoiceLeadingGraph(chords, MIDI_RANGE, triads)
      const startNodes = graph.nodes.filter(
        n => n.position === 0 && n.chordName === 'B'
      )
      const endNodes = graph.nodes.filter(
        n => n.position === 3 && n.chordName === 'Bb'
      )

      const path = findOptimalVoiceLeading(graph, startNodes, endNodes)

      expect(path[0].chordName).toBe('B')
      expect(path[0].inversion).toBe('B Gb Eb')
      expect(path[0].midiNotes).toEqual([47, 54, 63])

      expect(path[1].chordName).toBe('D')
      expect(path[1].inversion).toBe('A Gb D')
      expect(path[1].midiNotes).toEqual([45, 54, 62])

      expect(path[2].chordName).toBe('G')
      expect(path[2].inversion).toBe('B G D')
      expect(path[2].midiNotes).toEqual([47, 55, 62])

      expect(path[3].chordName).toBe('Bb')
      expect(path[3].inversion).toBe('Bb F D')
      expect(path[3].midiNotes).toEqual([46, 53, 62])
    })
  })
})
