import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as Tone from 'tone'
import { audioService } from '../audioService'

// Mock Tone.js
vi.mock('tone', () => ({
  start: vi.fn().mockResolvedValue(undefined),
  Synth: vi.fn().mockImplementation(() => ({
    oscillator: { type: 'triangle' },
    toDestination: vi.fn().mockReturnThis(),
    volume: { value: 0 },
  })),
  Sampler: vi.fn().mockImplementation(() => ({
    triggerAttack: vi.fn(),
    triggerRelease: vi.fn(),
    toDestination: vi.fn().mockReturnThis(),
    loaded: true,
    volume: { value: 0 },
  })),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  PolySynth: vi.fn().mockImplementation(Synth => ({
    triggerAttack: vi.fn(),
    triggerRelease: vi.fn(),
    toDestination: vi.fn().mockReturnThis(),
    volume: { value: 0 },
  })),
  gainToDb: vi.fn().mockReturnValue(0),
}))

describe('AudioService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset the audioService's state
    audioService['isInitialized'] = false
    audioService['_shouldStop'] = false
    audioService['currentPosition'] = 0
    audioService['savedPosition'] = 0
    audioService['currentMidiNotes'] = []
    audioService['stoppedMidiNotes'] = []
    audioService['isFirstPlay'] = true
    audioService['wasPositionSelected'] = false
    audioService['_isArpeggiating'] = false
  })

  describe('initialization', () => {
    it('initializes Tone.js and creates instruments', async () => {
      await audioService.initialize()

      expect(Tone.start).toHaveBeenCalled()
      expect(Tone.Sampler).toHaveBeenCalled()
      expect(Tone.PolySynth).toHaveBeenCalled()
    })

    it('only initializes once', async () => {
      await audioService.initialize()
      await audioService.initialize()

      expect(Tone.start).toHaveBeenCalledTimes(1)
    })
  })

  describe('playback control', () => {
    beforeEach(async () => {
      await audioService.initialize()
    })

    it('plays a triad', async () => {
      const mockOnNotesChange = vi.fn()
      const playPromise = audioService.playTriad(
        [60, 64, 67],
        1000,
        mockOnNotesChange
      )

      // Should call onNotesChange with the midi notes
      expect(mockOnNotesChange).toHaveBeenCalledWith([60, 64, 67])

      // Wait a bit to let the promise resolve
      await new Promise(resolve => setTimeout(resolve, 100))

      // Stop playback to resolve the promise
      audioService.stopPlayback()
      await playPromise
    })

    it('stops playback', async () => {
      const mockOnNotesChange = vi.fn()
      const playPromise = audioService.playTriad(
        [60, 64, 67],
        1000,
        mockOnNotesChange
      )

      // Wait a bit then stop
      await new Promise(resolve => setTimeout(resolve, 100))
      audioService.stopPlayback()

      // The promise should resolve when stopped
      await playPromise

      expect(audioService.shouldStop).toBe(true)
    })

    it('restarts playback', () => {
      audioService.setPosition(2)
      expect(audioService.getCurrentPosition()).toBe(2)

      audioService.restart()
      expect(audioService.getCurrentPosition()).toBe(0)
    })

    it('sets and gets position', () => {
      audioService.setPosition(3)
      expect(audioService.getCurrentPosition()).toBe(3)
    })
  })

  describe('note conversion', () => {
    it('converts midi notes to note names', () => {
      // Middle C (60) should be "C4"
      const notes = [60, 64, 67].map(note => audioService['midiToNote'](note))
      expect(notes).toEqual(['C4', 'E4', 'G4'])
    })
  })

  describe('sequence generation', () => {
    it('generates Giant Steps sequence', () => {
      const sequence = audioService.generateGiantStepsSequence()

      expect(sequence).toHaveLength(32) // Giant Steps has 32 chords (2 bars each)
      expect(sequence[0]).toHaveProperty('chordName')
      expect(sequence[0]).toHaveProperty('midiNotes')
      expect(sequence[0].midiNotes).toHaveLength(3) // Each chord should be a triad
    })
  })

  describe('playback sequence', () => {
    beforeEach(async () => {
      await audioService.initialize()
    })

    it('plays a sequence of triads', async () => {
      const mockOnNotesChange = vi.fn()
      const mockOnPositionChange = vi.fn()
      const sequence = audioService.generateGiantStepsSequence()

      const playPromise = audioService.playTriadSequence(
        sequence,
        mockOnNotesChange,
        0,
        mockOnPositionChange
      )

      // Wait for the next tick to allow callbacks to be called
      await new Promise(resolve => setTimeout(resolve, 0))

      // Should have called the callbacks
      expect(mockOnPositionChange).toHaveBeenCalledWith(0)
      expect(mockOnNotesChange).toHaveBeenCalledWith(sequence[0].midiNotes)

      // Stop playback to resolve the promise
      audioService.stopPlayback()
      await playPromise
    })

    it('starts playback from specified position', async () => {
      const mockOnNotesChange = vi.fn()
      const mockOnPositionChange = vi.fn()
      const sequence = audioService.generateGiantStepsSequence()
      const startPosition = 2

      const playPromise = audioService.playTriadSequence(
        sequence,
        mockOnNotesChange,
        startPosition,
        mockOnPositionChange
      )

      // Wait for the next tick to allow callbacks to be called
      await new Promise(resolve => setTimeout(resolve, 0))

      // Should start from the specified position
      expect(mockOnPositionChange).toHaveBeenCalledWith(startPosition)
      expect(mockOnNotesChange).toHaveBeenCalledWith(sequence[startPosition].midiNotes)

      // Stop playback to resolve the promise
      audioService.stopPlayback()
      await playPromise
    })
  })

  describe('arpeggiator', () => {
    beforeEach(async () => {
      await audioService.initialize()
    })

    it('initializes with arpeggiator disabled', () => {
      expect(audioService.isArpeggiating).toBe(false)
    })

    it('toggles arpeggiator state', () => {
      expect(audioService.isArpeggiating).toBe(false)
      audioService.setArpeggiating(true)
      expect(audioService.isArpeggiating).toBe(true)
      audioService.setArpeggiating(false)
      expect(audioService.isArpeggiating).toBe(false)
    })

    it('returns initial arpeggiator state', () => {
      const initialState = audioService.getInitialArpeggiating()
      expect(initialState).toBe(false)
      
      audioService.setArpeggiating(true)
      const updatedState = audioService.getInitialArpeggiating()
      expect(updatedState).toBe(true)
    })
  })
})
