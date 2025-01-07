import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as Tone from 'tone'
import { AudioService } from '../audioService'

// Mock Tone.js
vi.mock('tone', () => ({
  start: vi.fn(),
  gainToDb: vi.fn().mockImplementation((value) => value * 0.2 - 20), // Mock conversion
  Sampler: vi.fn().mockImplementation(() => ({
    triggerAttack: vi.fn(),
    triggerRelease: vi.fn(),
    releaseAll: vi.fn(),
    toDestination: vi.fn().mockReturnThis(),
    volume: { value: 0 }
  })),
  Synth: vi.fn(),
  PolySynth: vi.fn().mockImplementation(() => ({
    triggerAttack: vi.fn(),
    triggerRelease: vi.fn(),
    releaseAll: vi.fn(),
    toDestination: vi.fn().mockReturnThis(),
    volume: { value: 0 }
  })),
  context: {
    resume: vi.fn().mockResolvedValue(undefined)
  },
  Transport: {
    start: vi.fn(),
    stop: vi.fn(),
    position: 0,
    scheduleRepeat: vi.fn(),
    cancel: vi.fn(),
    bpm: { value: 120 }
  },
  now: vi.fn().mockReturnValue(0)
}))

describe('AudioService', () => {
  let mockOnNotesChange: jest.Mock
  let audioService: AudioService

  beforeEach(() => {
    vi.useFakeTimers()
    mockOnNotesChange = vi.fn()
    
    // Mock Tone.now() to return a fixed timestamp
    vi.mocked(Tone.now).mockReturnValue(0)
    
    // Mock Transport methods
    vi.mocked(Tone.Transport.start).mockImplementation(() => {})
    vi.mocked(Tone.Transport.stop).mockImplementation(() => {})
    vi.mocked(Tone.Transport.scheduleRepeat).mockImplementation(() => 0)
    vi.mocked(Tone.Transport.cancel).mockImplementation(() => {})
    
    audioService = new AudioService()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.clearAllMocks()
  })

  describe('initialization', () => {
    it('initializes Tone.js and creates instruments', async () => {
      await audioService.initialize()

      expect(Tone.start).toHaveBeenCalled()
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
      const midiNotes = [60, 64, 67]
      const noteNames = midiNotes.map(note => audioService.midiToNote(note))

      const playPromise = audioService.playTriad(midiNotes, 100)
      await vi.advanceTimersByTimeAsync(100)
      await playPromise

      const instrument = audioService.getCurrentInstrument()
      expect(instrument.triggerAttack).toHaveBeenCalledWith(noteNames)
      expect(instrument.triggerRelease).toHaveBeenCalledWith(noteNames)
    })

    it('stops playback', async () => {
      const sequence = audioService.generateGiantStepsSequence()
      const onComplete = vi.fn()

      audioService.startPlayback(sequence, 0, onComplete, mockOnNotesChange)
      await vi.advanceTimersByTimeAsync(100)
      audioService.stopPlayback()

      const instrument = audioService.getCurrentInstrument()
      expect(instrument.releaseAll).toHaveBeenCalled()
    })

    it('restarts playback', async () => {
      const sequence = audioService.generateGiantStepsSequence()
      const onComplete = vi.fn()

      audioService.startPlayback(sequence, 2, onComplete, mockOnNotesChange)
      await vi.advanceTimersByTimeAsync(100)
      audioService.restart()

      expect(audioService.getCurrentPosition()).toBe(0)
      const instrument = audioService.getCurrentInstrument()
      expect(instrument.releaseAll).toHaveBeenCalled()
    })

    it('sets and gets position', () => {
      audioService.setPosition(2)
      expect(audioService.getCurrentPosition()).toBe(2)
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
      const sequence = audioService.generateGiantStepsSequence()
      const onComplete = vi.fn()
      const firstTriadNoteNames = sequence[0].midiNotes.map(note => audioService.midiToNote(note))

      // Start playback
      audioService.startPlayback(sequence, 0, onComplete, mockOnNotesChange)
      
      // Wait for first triad to play
      await vi.advanceTimersByTimeAsync(0)
      
      // Verify first triad is played
      const instrument = audioService.getCurrentInstrument()
      expect(instrument.triggerAttack).toHaveBeenCalledWith(firstTriadNoteNames)
      expect(Tone.Transport.start).toHaveBeenCalled()
      expect(mockOnNotesChange).toHaveBeenCalledWith(sequence[0].midiNotes)
      
      // Wait for next triad
      await vi.advanceTimersByTimeAsync(audioService.getChordDuration())
      
      // Verify second triad is played
      const secondTriadNoteNames = sequence[1].midiNotes.map(note => audioService.midiToNote(note))
      expect(instrument.triggerAttack).toHaveBeenCalledWith(secondTriadNoteNames)
      expect(mockOnNotesChange).toHaveBeenCalledWith(sequence[1].midiNotes)
    })

    it('starts playback from specified position', async () => {
      const sequence = audioService.generateGiantStepsSequence()
      const startPosition = 2
      const onComplete = vi.fn()
      const startTriadNoteNames = sequence[startPosition].midiNotes.map(note => audioService.midiToNote(note))

      audioService.startPlayback(
        sequence,
        startPosition,
        onComplete,
        mockOnNotesChange
      )

      // Advance timers to trigger the note at the specified position
      await vi.advanceTimersByTimeAsync(100)

      const instrument = audioService.getCurrentInstrument()
      expect(instrument.triggerAttack).toHaveBeenCalledWith(startTriadNoteNames)
      expect(mockOnNotesChange).toHaveBeenCalledWith(sequence[startPosition].midiNotes)
      expect(audioService.getCurrentPosition()).toBe(startPosition)
    })
  })

  describe('arpeggiator', () => {
    beforeEach(async () => {
      await audioService.initialize()
    })

    it('initializes with arpeggiator disabled', () => {
      expect(audioService.isArpeggiating).toBe(false)
      expect(Tone.Transport.scheduleRepeat).not.toHaveBeenCalled()
    })

    it('toggles arpeggiator state', async () => {
      expect(audioService.isArpeggiating).toBe(false)
      
      // Enable arpeggiator
      audioService.setArpeggiating(true)
      await vi.advanceTimersByTimeAsync(0)
      expect(audioService.isArpeggiating).toBe(true)
      expect(Tone.Transport.start).toHaveBeenCalled()
      expect(Tone.Transport.scheduleRepeat).toHaveBeenCalledWith(expect.any(Function), "8n")
      
      // Disable arpeggiator
      audioService.setArpeggiating(false)
      await vi.advanceTimersByTimeAsync(0)
      expect(audioService.isArpeggiating).toBe(false)
      expect(Tone.Transport.cancel).toHaveBeenCalled()
      expect(Tone.Transport.stop).toHaveBeenCalled()
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
