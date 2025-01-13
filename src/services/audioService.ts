import * as Tone from 'tone'
import { Inversion, Triad } from '../common/types'
import {
  buildVoiceLeadingGraph,
  findOptimalVoiceLeading,
} from '../common/utils/graphUtils'
import { generateTriads } from '../common/utils/chordUtils'
import { CHORD_CHARTS } from '../features/playback/charts'

export type InstrumentType = 'piano' | 'synth' | 'guitar'

export interface VoiceLeadingState {
  bass: boolean
  middle: boolean
  high: boolean
}

const defaultVoiceLeadingState: VoiceLeadingState = {
  bass: true,
  middle: true,
  high: true,
}

const defaultChordNames = CHORD_CHARTS.find(
  chart => chart.title === 'Giant Steps'
)!.chords

const defaultTriads = Object.fromEntries(
  defaultChordNames!.map(chord => [chord, generateTriads(chord, 'spread')])
)

export class AudioService {
  private instruments: Record<
    InstrumentType,
    Tone.Sampler | Tone.PolySynth | null
  > = {
    piano: null,
    synth: null,
    guitar: null,
  }
  private currentInstrument: InstrumentType = 'synth'
  private isInitialized = false
  private _shouldStop = false
  private volume = -12
  private _isArpeggiating = true
  private _isLooping = false
  private hasUserGesture = false
  private isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  private playbackTimeout: ReturnType<typeof setTimeout> | null = null
  private currentPosition = 0
  private savedPosition = 0
  private onComplete: (() => void) | null = null
  private chordDuration = 500
  private currentMidiNotes: number[] = []
  private currentChordNames: string[] = defaultChordNames
  private currentTriads: { [key: string]: Inversion[] } = defaultTriads
  private triadType: 'spread' | 'close' = 'spread'

  get shouldStop(): boolean {
    return this._shouldStop
  }

  get isArpeggiating(): boolean {
    return this._isArpeggiating
  }

  get isLooping(): boolean {
    return this._isLooping
  }

  setLooping(value: boolean): void {
    this._isLooping = value
  }

  setArpeggiating(value: boolean): void {
    if (value === this._isArpeggiating) return

    this._isArpeggiating = value
    if (value) {
      Tone.Transport.start()
      Tone.Transport.scheduleRepeat(() => {
        // Arpeggiator logic here
      }, '8n')
    } else {
      Tone.Transport.cancel()
      Tone.Transport.stop()
    }
  }

  getInitialArpeggiating(): boolean {
    return this._isArpeggiating
  }

  isInstrumentReady(type: InstrumentType): boolean {
    const instrument = this.instruments[type]
    if (!instrument) return false
    if (type === 'synth') return true
    return instrument instanceof Tone.Sampler && instrument.loaded
  }

  setInstrument(type: InstrumentType): void {
    if (!this.isInstrumentReady(type)) {
      console.warn(`${type} is not ready yet`)
      return
    }
    this.currentInstrument = type
  }

  getInitialVolume(): number {
    return this.volume
  }

  setVolume(value: number): void {
    this.volume = value
    const normalizedVolume = value / 100
    Object.values(this.instruments).forEach(instrument => {
      if (instrument) {
        instrument.volume.value = Tone.gainToDb(normalizedVolume)
      }
    })
  }

  getCurrentPosition(): number {
    return this.savedPosition
  }

  getInitialChordNames(): string[] {
    return this.currentChordNames
  }

  setCurrentChordNames(chordNames: string[]): void {
    this.currentChordNames = chordNames
    this.currentTriads = Object.fromEntries(
      chordNames.map(chord => [chord, generateTriads(chord, this.triadType)])
    )
  }

  getInitialChordDuration(): number {
    return this.chordDuration
  }

  getChordDuration(): number {
    return this.chordDuration
  }

  setChordDuration(duration: number): void {
    this.chordDuration = duration
  }

  async initialize() {
    if (this.isInitialized) {
      return
    }

    try {
      // For iOS, we need a user gesture to start audio
      if (this.isIOS && !this.hasUserGesture) {
        return
      }

      // Start audio context and mark as initialized
      await Tone.start()
      await Tone.context.resume()
      this.isInitialized = true

      // Initialize synth first for immediate playback
      this.instruments.synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.3,
          release: 1,
        },
      }).toDestination()

      // Set initial volume for synth
      if (this.instruments.synth) {
        this.instruments.synth.volume.value = Tone.gainToDb(this.volume / 100)
      }

      // Mark as initialized once synth is ready
      this.hasUserGesture = true

      // Load sampled instruments in the background
      this.loadSampledInstruments()
    } catch (err) {
      console.error('Failed to initialize audio service:', err)
      throw err
    }
  }

  async ensureAudioInitialized(): Promise<void> {
    if (!this.isInitialized) {
      // For iOS, we need to handle the first user interaction
      if (this.isIOS && !this.hasUserGesture) {
        this.hasUserGesture = true
        await this.initialize()
      } else {
        await this.initialize()
      }
    }

    // Double-check audio context state
    if (Tone.context.state === 'suspended') {
      await Tone.context.resume()
    }
  }

  async playNote(midiNote: number) {
    try {
      await this.ensureAudioInitialized()
      const instrument = this.getCurrentInstrument()
      if (!instrument) return

      const note = this.midiToNote(midiNote)
      instrument.triggerAttackRelease(note, '8n')
      this.currentMidiNotes = [...this.currentMidiNotes, midiNote]
    } catch (err) {
      console.error('Error playing note:', err)
    }
  }

  async playTriad(
    midiNotes: number[],
    duration: number,
    onNotesChange?: (notes: number[]) => void
  ): Promise<void> {
    try {
      await this.ensureAudioInitialized()

      if (midiNotes.length === 0) return

      const instrument = this.getCurrentInstrument()
      if (!instrument) {
        throw new Error('No instrument loaded')
      }

      // Clear any currently playing notes
      this.clearCurrentNotes(onNotesChange)

      // Cancel any previously playing notes
      this.cancelScheduledEvents()

      // Update current notes for visualization
      this.currentMidiNotes = midiNotes
      onNotesChange?.(this.currentMidiNotes)

      if (this._isArpeggiating) {
        const noteDelay = duration / midiNotes.length
        const noteDuration = noteDelay * 0.95 // Slightly shorter than delay to prevent overlap
        const now = Tone.now()

        midiNotes.forEach((note, i) => {
          const startTime = now + (i * noteDelay) / 1000
          instrument.triggerAttackRelease(
            this.midiToNote(note),
            noteDuration / 1000,
            startTime
          )
        })
      } else {
        // Play all notes simultaneously
        const notes = midiNotes.map(midi => this.midiToNote(midi))
        instrument.triggerAttackRelease(notes, duration / 1000)
      }
    } catch (error) {
      console.error('Error playing triad:', error)
    }
  }

  getCurrentInstrument(): Tone.Sampler | Tone.PolySynth | null {
    if (!this.isInitialized) {
      console.warn('Audio service not initialized')
      return null
    }
    const instrument = this.instruments[this.currentInstrument]
    if (!this.isInstrumentReady(this.currentInstrument)) {
      console.warn(
        `Current instrument (${this.currentInstrument}) is not ready`
      )
      return null
    }
    return instrument
  }

  startPlayback(
    sequence: Triad[],
    startPosition: number,
    onComplete: () => void,
    onNotesChange?: (notes: number[]) => void
  ) {
    if (!sequence || sequence.length === 0) {
      console.error('Cannot start playback: no sequence provided')
      onComplete()
      return
    }

    this._shouldStop = false
    this.currentPosition = startPosition
    this.savedPosition = startPosition
    this.onComplete = onComplete

    // Start transport for all playback modes
    Tone.Transport.start()

    this.playNextTriad(sequence, onNotesChange)
  }

  private playNextTriad(
    sequence: Triad[],
    onNotesChange?: (notes: number[]) => void
  ) {
    if (this._shouldStop || this.currentPosition >= sequence.length) {
      // If we're looping and not manually stopped, start from beginning
      if (
        this._isLooping &&
        !this._shouldStop &&
        this.currentPosition >= sequence.length
      ) {
        this.currentPosition = 0
        this.savedPosition = 0
        this.playNextTriad(sequence, onNotesChange)
        return
      }

      // Otherwise stop playback and clear state
      this._shouldStop = true
      const instrument = this.getCurrentInstrument()
      if (instrument) {
        instrument.releaseAll()
      }
      if (this.onComplete) {
        this.onComplete()
      }
      return
    }

    const triad = sequence[this.currentPosition]

    // Update visualization before playing
    this.savedPosition = this.currentPosition
    this.currentMidiNotes = triad.midiNotes
    onNotesChange?.(this.currentMidiNotes)

    this.playTriad(triad.midiNotes, this.chordDuration, onNotesChange)

    this.playbackTimeout = setTimeout(() => {
      // Only advance position and play next chord if not stopped
      if (!this._shouldStop && this.currentPosition < sequence.length - 1) {
        this.currentPosition++
        this.savedPosition = this.currentPosition
        this.playNextTriad(sequence, onNotesChange)
      } else if (!this._shouldStop && this._isLooping) {
        // We've reached the end but we're looping
        this.currentPosition = 0
        this.savedPosition = 0
        this.playNextTriad(sequence, onNotesChange)
      } else if (!this._shouldStop) {
        // We've reached the end of the sequence
        this._shouldStop = true
        const instrument = this.getCurrentInstrument()
        if (instrument) {
          instrument.releaseAll()
        }
        if (this.onComplete) {
          this.onComplete()
        }
      }
    }, this.chordDuration)
  }

  stopPlayback(): void {
    this._shouldStop = true
    if (this.playbackTimeout) {
      clearTimeout(this.playbackTimeout)
      this.playbackTimeout = null
    }
    const instrument = this.getCurrentInstrument()
    if (instrument) {
      instrument.releaseAll()
    }
  }

  restart(): void {
    this._shouldStop = true
    const instrument = this.getCurrentInstrument()
    if (instrument) {
      instrument.releaseAll()
    }
    this.currentPosition = 0
    this.savedPosition = 0
    this.currentMidiNotes = []
  }

  setPosition(position: number): void {
    this.currentPosition = position
    this.savedPosition = position
  }

  private midiToNote(midi: number): string {
    const noteNames = [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B',
    ]
    const octave = Math.floor(midi / 12) - 1
    const noteIndex = midi % 12
    return `${noteNames[noteIndex]}${octave}`
  }

  private cancelScheduledEvents(): void {
    const instrument = this.getCurrentInstrument()
    if (instrument) {
      instrument.releaseAll()
    }
  }

  stopNote(midiNote: number): void {
    const instrument = this.getCurrentInstrument()
    if (!instrument) {
      return
    }

    const note = this.midiToNote(midiNote)
    instrument.triggerRelease(note)

    // Remove the note from current notes
    this.currentMidiNotes = this.currentMidiNotes.filter(n => n !== midiNote)
  }

  getCurrentMidiNotes(): number[] {
    return this.currentMidiNotes
  }

  clearCurrentNotes(onNotesChange?: (notes: number[]) => void): void {
    this.currentMidiNotes = []
    onNotesChange?.([])
  }

  generateOptimalSequence(
    voiceLeadingState: VoiceLeadingState = defaultVoiceLeadingState
  ): Triad[] {
    const chords = this.currentChordNames
    const midiRange: [number, number] = [40, 76] // From E2 to E5
    const triads = this.currentTriads

    const customVoiceLeadingCost = (
      currentNotes: number[],
      nextNotes: number[]
    ): number => {
      let totalCost = 0
      let activeVoices = 0

      const getWeight = (isSelected: boolean) => (isSelected ? 1.0 : 0.001)

      if (voiceLeadingState.bass) activeVoices++
      if (voiceLeadingState.middle) activeVoices++
      if (voiceLeadingState.high) activeVoices++

      totalCost +=
        Math.abs(currentNotes[0] - nextNotes[0]) *
        getWeight(voiceLeadingState.bass)
      totalCost +=
        Math.abs(currentNotes[1] - nextNotes[1]) *
        getWeight(voiceLeadingState.middle)
      totalCost +=
        Math.abs(currentNotes[2] - nextNotes[2]) *
        getWeight(voiceLeadingState.high)

      return activeVoices > 0 ? totalCost / activeVoices : totalCost
    }

    const graph = buildVoiceLeadingGraph(
      chords,
      midiRange,
      triads,
      customVoiceLeadingCost
    )

    // Use phantom nodes as start nodes and actual end nodes
    const phantomNodes = graph.nodes.filter(node => node.position === -1)
    const endNodes = graph.nodes.filter(
      node => node.position === chords.length - 1
    )

    const path = findOptimalVoiceLeading(graph, phantomNodes, endNodes)

    if (!path.length) {
      console.error('No valid path found')
      return []
    }

    return path
  }

  setTriadType(type: 'spread' | 'close'): void {
    this.triadType = type
    this.currentTriads = Object.fromEntries(
      this.currentChordNames.map(chord => [chord, generateTriads(chord, type)])
    )
  }

  getTriadType(): 'spread' | 'close' {
    return this.triadType
  }

  private async loadSampledInstruments() {
    try {
      // Initialize piano with Salamander samples
      this.instruments.piano = new Tone.Sampler({
        urls: {
          A0: 'A0.mp3',
          C1: 'C1.mp3',
          'D#1': 'Ds1.mp3',
          'F#1': 'Fs1.mp3',
          A1: 'A1.mp3',
          C2: 'C2.mp3',
          'D#2': 'Ds2.mp3',
          'F#2': 'Fs2.mp3',
          A2: 'A2.mp3',
          C3: 'C3.mp3',
          'D#3': 'Ds3.mp3',
          'F#3': 'Fs3.mp3',
          A3: 'A3.mp3',
          C4: 'C4.mp3',
          'D#4': 'Ds4.mp3',
          'F#4': 'Fs4.mp3',
          A4: 'A4.mp3',
          C5: 'C5.mp3',
          'D#5': 'Ds5.mp3',
          'F#5': 'Fs5.mp3',
          A5: 'A5.mp3',
          C6: 'C6.mp3',
          'D#6': 'Ds6.mp3',
          'F#6': 'Fs6.mp3',
          A6: 'A6.mp3',
          C7: 'C7.mp3',
          'D#7': 'Ds7.mp3',
          'F#7': 'Fs7.mp3',
          A7: 'A7.mp3',
          C8: 'C8.mp3',
        },
        release: 1,
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        onload: () => {
          if (this.instruments.piano) {
            this.instruments.piano.volume.value = Tone.gainToDb(
              this.volume / 100
            )
          }
        },
      }).toDestination()

      // Initialize guitar with nylon guitar samples
      this.instruments.guitar = new Tone.Sampler({
        urls: {
          E2: 'E2.mp3',
          'F#2': 'Fs2.mp3',
          'G#2': 'Gs2.mp3',
          A2: 'A2.mp3',
          B2: 'B2.mp3',
          D3: 'D3.mp3',
          E3: 'E3.mp3',
          'F#3': 'Fs3.mp3',
          G3: 'G3.mp3',
          A3: 'A3.mp3',
          B3: 'B3.mp3',
          'C#4': 'Cs4.mp3',
          'D#4': 'Ds4.mp3',
          E4: 'E4.mp3',
          'F#4': 'Fs4.mp3',
          'G#4': 'Gs4.mp3',
        },
        release: 1.2,
        volume: -3,
        baseUrl:
          'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-nylon/',
        onload: () => {
          if (this.instruments.guitar) {
            this.instruments.guitar.volume.value = Tone.gainToDb(
              this.volume / 100
            )
          }
        },
      }).toDestination()
    } catch (err) {
      console.error('Failed to load sampled instruments:', err)
    }
  }
}

export const audioService = new AudioService()
