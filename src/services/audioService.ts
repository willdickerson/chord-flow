import * as Tone from 'tone'
import { Inversion, Triad, VoiceLeadingState } from '../common/types'
import { generateOptimalVoiceLeadingSequence } from '../common/utils/graphUtils'
import { generateTriads } from '../common/utils/chordUtils'
import { CHORD_CHARTS } from '../features/charts/charts'
import {
  AUDIO_DEFAULTS,
  DEFAULT_VOICE_LEADING_STATE,
  INSTRUMENT_TYPES,
  InstrumentType,
  SEQUENCE_RANGES,
  TriadType,
  ArpeggioType,
} from './audioConstants'

const defaultChordNames = CHORD_CHARTS.find(
  chart => chart.title === 'Giant Steps'
)!.chords

const defaultTriads = Object.fromEntries(
  defaultChordNames!.map(chord => [chord, generateTriads(chord, 'open')])
)

export class AudioService {
  private instruments: Record<
    InstrumentType,
    Tone.Sampler | Tone.PolySynth | null
  > = Object.fromEntries(INSTRUMENT_TYPES.map(type => [type, null])) as Record<
    InstrumentType,
    Tone.Sampler | Tone.PolySynth | null
  >

  private currentInstrument: InstrumentType = 'synth'
  private isInitialized = false
  private _shouldStop = false
  private volume = AUDIO_DEFAULTS.VOLUME
  private _isArpeggiating = AUDIO_DEFAULTS.IS_ARPEGGIATING
  private _isLooping = AUDIO_DEFAULTS.IS_LOOPING
  private playbackTimeout: ReturnType<typeof setTimeout> | null = null
  private currentPosition = 0
  private savedPosition = 0
  private onComplete: (() => void) | null = null
  private chordDuration = AUDIO_DEFAULTS.CHORD_DURATION
  private currentMidiNotes: number[] = []
  private currentChordNames: string[] = defaultChordNames
  private currentTriads: { [key: string]: Inversion[] } = defaultTriads
  private triadType: TriadType = AUDIO_DEFAULTS.TRIAD_TYPE
  private arpeggioType: ArpeggioType = AUDIO_DEFAULTS.ARPEGGIO_TYPE
  private isMobile = window.innerWidth <= 768

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768
    })
  }

  public getIsInitialized(): boolean {
    return this.isInitialized
  }

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
      Tone.Transport.scheduleRepeat(() => {}, '8n')
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
      await Tone.start()

      this.instruments.synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sine4' },
        envelope: {
          attack: 0.01,
          decay: 0.2,
          sustain: 0.5,
          release: 1.5,
        },
      })
        .set({ volume: -8 })
        .toDestination()

      if (this.instruments.synth) {
        this.instruments.synth.volume.value = Tone.gainToDb(this.volume / 100)
      }

      this.isInitialized = true
    } catch (err) {
      console.error('Failed to initialize audio service:', err)
      throw err
    }
  }

  async loadSampledInstruments() {
    try {
      const pianoLoadPromise = new Promise<void>(resolve => {
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
          release: 1.5,
          baseUrl: 'https://tonejs.github.io/audio/salamander/',
          onload: () => {
            if (this.instruments.piano) {
              this.instruments.piano.volume.value = Tone.gainToDb(
                this.volume / 100
              )
            }
            resolve()
          },
        }).toDestination()
      })

      const guitarLoadPromise = new Promise<void>(resolve => {
        const reverb = new Tone.Reverb({ decay: 2.5, wet: 0.1 }).toDestination()
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
          release: 1.5,
          attack: 0.01,
          baseUrl:
            'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-nylon/',
          onload: () => {
            if (this.instruments.guitar) {
              this.instruments.guitar.volume.value = Tone.gainToDb(
                (this.volume - 75) / 100
              )
            }
            resolve()
          },
        }).connect(reverb)
      })

      await Promise.all([pianoLoadPromise, guitarLoadPromise])
    } catch (err) {
      console.error('Failed to load sampled instruments:', err)
      throw err
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

  getCurrentInstrumentType(): InstrumentType {
    return this.currentInstrument
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

    Tone.Transport.start()

    this.playNextTriad(sequence, onNotesChange)
  }

  private playNextTriad(
    sequence: Triad[],
    onNotesChange?: (notes: number[]) => void
  ) {
    if (this._shouldStop || this.currentPosition >= sequence.length) {
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

    this.savedPosition = this.currentPosition
    this.currentMidiNotes = triad.midiNotes
    onNotesChange?.(this.currentMidiNotes)

    this.playTriad(triad.midiNotes, this.chordDuration, onNotesChange)

    this.playbackTimeout = setTimeout(() => {
      if (!this._shouldStop && this.currentPosition < sequence.length - 1) {
        this.currentPosition++
        this.savedPosition = this.currentPosition
        this.playNextTriad(sequence, onNotesChange)
      } else if (!this._shouldStop && this._isLooping) {
        this.currentPosition = 0
        this.savedPosition = 0
        this.playNextTriad(sequence, onNotesChange)
      } else if (!this._shouldStop) {
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

  async playTriad(
    midiNotes: number[],
    duration: number,
    onNotesChange?: (notes: number[]) => void
  ): Promise<void> {
    if (midiNotes.length === 0) return

    const instrument = this.getCurrentInstrument()
    if (!instrument) {
      throw new Error('No instrument loaded')
    }

    this.cancelScheduledEvents()

    this.currentMidiNotes = midiNotes
    onNotesChange?.(this.currentMidiNotes)

    if (this._isArpeggiating) {
      await this.playArpeggio(midiNotes, duration)
    } else {
      instrument.triggerAttack(midiNotes.map(note => this.midiToNote(note)))

      try {
        await new Promise(resolve => {
          const timeout = setTimeout(() => {
            if (!this._shouldStop) {
              resolve('completed')
            }
          }, duration)
          const checkInterval = setInterval(() => {
            if (this._shouldStop) {
              clearTimeout(timeout)
              clearInterval(checkInterval)
              resolve('stopped')
            }
          }, 100)
        })

        instrument.triggerRelease(midiNotes.map(note => this.midiToNote(note)))
      } catch (err) {
        console.error('Error playing notes:', err)
        instrument.triggerRelease(midiNotes.map(note => this.midiToNote(note)))
        throw err
      }
    }
  }

  async playArpeggio(midiNotes: number[], duration: number) {
    const notesToPlay = [...midiNotes]
    if (this.arpeggioType === 'descending') {
      notesToPlay.reverse()
    } else if (this.arpeggioType === 'alternating') {
      const currentPosition = this.getCurrentPosition()
      if (currentPosition % 2 === 1) {
        notesToPlay.reverse()
      }
    }

    const noteDuration = duration / notesToPlay.length
    for (let i = 0; i < notesToPlay.length; i++) {
      const note = notesToPlay[i]
      const noteFreq = Tone.Frequency(note, 'midi').toFrequency()

      if (this.currentInstrument === 'synth' && this.instruments.synth) {
        this.instruments.synth.triggerAttackRelease(
          noteFreq,
          noteDuration / 1000
        )
      } else if (this.currentInstrument === 'piano' && this.instruments.piano) {
        this.instruments.piano.triggerAttackRelease(
          noteFreq,
          noteDuration / 1000
        )
      } else if (
        this.currentInstrument === 'guitar' &&
        this.instruments.guitar
      ) {
        this.instruments.guitar.triggerAttackRelease(
          noteFreq,
          noteDuration / 1000
        )
      }

      await new Promise(resolve => setTimeout(resolve, noteDuration))
    }
  }

  playNote(midiNote: number): void {
    const instrument = this.getCurrentInstrument()
    if (!instrument) {
      throw new Error('No instrument loaded')
    }

    const note = this.midiToNote(midiNote)
    instrument.triggerAttack(note)

    this.currentMidiNotes = [midiNote]
  }

  stopNote(midiNote: number): void {
    const instrument = this.getCurrentInstrument()
    if (!instrument) {
      return
    }

    const note = this.midiToNote(midiNote)
    instrument.triggerRelease(note)

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
    voiceLeadingState: VoiceLeadingState = DEFAULT_VOICE_LEADING_STATE
  ): Triad[] {
    const midiRange: [number, number] = this.isMobile
      ? SEQUENCE_RANGES.MOBILE
      : SEQUENCE_RANGES.DESKTOP

    return generateOptimalVoiceLeadingSequence(
      this.currentChordNames,
      midiRange,
      this.currentTriads,
      voiceLeadingState
    )
  }

  setTriadType(type: TriadType): void {
    this.triadType = type
    this.currentTriads = Object.fromEntries(
      this.currentChordNames.map(chord => [chord, generateTriads(chord, type)])
    )
  }

  getTriadType(): TriadType {
    return this.triadType
  }

  setArpeggioType(type: ArpeggioType): void {
    this.arpeggioType = type
  }

  getArpeggioType(): ArpeggioType {
    return this.arpeggioType
  }
}

export const audioService = new AudioService()
