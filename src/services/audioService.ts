import * as Tone from 'tone'
import { Triad } from '../types'
import {
  buildVoiceLeadingGraph,
  findOptimalVoiceLeading,
} from '../utils/graphUtils'
import { generateTriads } from '../utils/chordUtils'

export type InstrumentType = 'piano' | 'synth' | 'guitar'

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
  private currentPlayingNotes: string[] = []
  private currentPosition = 0
  private savedPosition = 0
  private currentMidiNotes: number[] = []
  private stoppedMidiNotes: number[] = []
  private isFirstPlay = true
  private wasPositionSelected = false
  private volume = 25
  private chordDuration = 670
  private isLooping = false
  private _isArpeggiating = false

  setVolume(value: number): void {
    this.volume = value
    const normalizedVolume = value / 100 // Convert 0-100 to 0-1
    Object.values(this.instruments).forEach(instrument => {
      if (instrument) {
        instrument.volume.value = Tone.gainToDb(normalizedVolume)
      }
    })
  }

  getInitialVolume(): number {
    return this.volume
  }

  getInitialChordDuration(): number {
    return this.chordDuration
  }

  getInitialLooping(): boolean {
    return this.isLooping
  }

  setLooping(shouldLoop: boolean): void {
    this.isLooping = shouldLoop
  }

  setChordDuration(duration: number): void {
    this.chordDuration = duration
  }

  get shouldStop(): boolean {
    return this._shouldStop
  }

  async initialize(): Promise<void> {
    console.log('Initializing audio service...')
    if (this.isInitialized) {
      console.log('Already initialized')
      return
    }

    try {
      // Start Tone.js first
      console.log('Starting Tone.js...')
      await Tone.start()
      console.log('Tone.js started')

      console.log('Loading synth...')
      // Initialize synth
      this.instruments.synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: 'triangle',
        },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.3,
          release: 1,
        },
      }).toDestination()

      console.log('Loading piano...')
      // Initialize piano
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
          console.log('Piano samples loaded')
        }
      }).toDestination()

      console.log('Loading guitar...')
      // Initialize guitar
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
          console.log('Guitar samples loaded')
        }
      }).toDestination()

      // Wait for samples to load
      console.log('Waiting for instruments to load...')
      await new Promise((resolve) => {
        const checkLoaded = () => {
          if (this.instruments.piano.loaded && this.instruments.guitar.loaded) {
            console.log('All instruments loaded successfully')
            resolve(true)
          } else {
            setTimeout(checkLoaded, 100)
          }
        }
        checkLoaded()
      })

      // Set initial volume
      this.setVolume(this.volume)

      this.isInitialized = true
      console.log('Audio service initialized successfully')
    } catch (err) {
      console.error('Failed to initialize audio service:', err)
      throw err
    }
  }

  private async waitForLoad(): Promise<void> {
    // Wait for either piano or guitar to load
    return new Promise(resolve => {
      const checkLoaded = () => {
        if (
          (this.instruments.piano instanceof Tone.Sampler &&
            this.instruments.piano.loaded) ||
          this.instruments.synth
        ) {
          resolve()
        } else {
          setTimeout(checkLoaded, 100)
        }
      }
      checkLoaded()
    })
  }

  setInstrument(type: InstrumentType): void {
    this.currentInstrument = type
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

  getCurrentInstrument(): Tone.Sampler | Tone.PolySynth | null {
    console.log('Getting current instrument:', this.currentInstrument)
    const instrument = this.instruments[this.currentInstrument] || this.instruments.synth
    console.log('Got instrument:', instrument ? 'yes' : 'no')
    return instrument
  }

  async playTriad(
    midiNotes: number[],
    duration: number,
    onNotesChange?: (notes: number[]) => void
  ): Promise<void> {
    console.log('playTriad called:', { 
      midiNotes, 
      duration, 
      isArpeggiating: this.isArpeggiating,
      currentInstrument: this.currentInstrument
    })
    
    if (midiNotes.length === 0) return

    const instrument = this.getCurrentInstrument()
    console.log('Got instrument:', instrument ? 'yes' : 'no')
    
    if (!instrument) {
      throw new Error('No instrument loaded')
    }

    // Convert MIDI notes to note names
    const notes = midiNotes.map(midi => this.midiToNote(midi))
    console.log('Converted to note names:', notes)
    
    this.currentPlayingNotes = notes
    this.currentMidiNotes = midiNotes

    if (this.isArpeggiating) {
      console.log('Playing arpeggiated')
      
      // Show all notes initially if we want them to stay lit
      if (onNotesChange) {
        onNotesChange(midiNotes)
      }

      const noteDelay = duration / midiNotes.length
      const now = Tone.now()

      // Schedule all notes with Tone.js
      notes.forEach((note, i) => {
        const startTime = now + (i * noteDelay / 1000)
        const duration = noteDelay / 1000
        console.log(`Scheduling note ${note} at ${startTime} for ${duration}s`)
        instrument.triggerAttackRelease(note, duration, startTime, 0.7)
      })

      // Wait for all notes to complete
      await new Promise(resolve => setTimeout(resolve, duration + 100))
    } else {
      console.log('Playing all notes together:', notes)
      // Play all notes together
      instrument.triggerAttack(notes)
      onNotesChange?.(midiNotes)

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

        console.log('Releasing notes:', notes)
        // Release the audio but don't clear visual notes
        instrument.triggerRelease(notes)
      } catch (err) {
        console.error('Error playing notes:', err)
        instrument.triggerRelease(notes)
        throw err
      }
    }
  }

  async playTriadSequence(
    triads: Triad[],
    onNotesChange?: (notes: number[]) => void,
    startPosition: number = 0,
    onPositionChange?: (position: number) => void
  ): Promise<void> {
    console.log('Starting sequence from position:', startPosition)
    this._shouldStop = false

    if (this.isFirstPlay) {
      this.currentPosition = startPosition
      this.isFirstPlay = false
    } else if (this.wasPositionSelected) {
      // Start from the selected position
      this.currentPosition = this.savedPosition
      this.wasPositionSelected = false
    } else {
      // On normal resume, advance to next chord unless we're at the end
      const nextPosition = this.savedPosition + 1
      this.currentPosition =
        nextPosition < triads.length ? nextPosition : this.savedPosition
    }

    try {
      for (let i = this.currentPosition; i < triads.length; i++) {
        if (this._shouldStop) break
        const triad = triads[i]
        this.currentPosition = i
        console.log('Playing position:', i)
        onPositionChange?.(i)
        await this.playTriad(triad.midiNotes, this.chordDuration, onNotesChange)
        if (this._shouldStop) break

        // Only clear notes if we're continuing to the next note
        if (!this._shouldStop && i < triads.length - 1) {
          onNotesChange?.([])
        }
      }

      // Only clear notes if we completed the sequence
      if (!this._shouldStop) {
        onNotesChange?.([])
        // If looping, start over from the beginning
        if (this.isLooping) {
          this.currentPosition = 0
          this.isFirstPlay = true  // Reset first play flag
          this.wasPositionSelected = false  // Reset position selection
          this.savedPosition = 0  // Reset saved position
          await this.playTriadSequence(triads, onNotesChange, 0, onPositionChange)
        }
      }
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err
      }
    }
  }

  stopPlayback(): void {
    console.log('Stopping playback at position:', this.currentPosition)
    this._shouldStop = true
    this.savedPosition = this.currentPosition
    const instrument = this.getCurrentInstrument()
    if (instrument && this.currentPlayingNotes.length > 0) {
      instrument.triggerRelease(this.currentPlayingNotes)
    }
  }

  restart(): void {
    this._shouldStop = true
    const instrument = this.getCurrentInstrument()
    if (instrument && this.currentPlayingNotes.length > 0) {
      instrument.triggerRelease(this.currentPlayingNotes)
      this.currentPlayingNotes = []
    }
    this.currentPosition = 0
    this.savedPosition = 0
    this.wasPositionSelected = false
    this.isFirstPlay = true
    this.currentMidiNotes = []
    this.stoppedMidiNotes = []
  }

  getCurrentPosition(): number {
    console.log('Getting current position:', this.savedPosition)
    return this.savedPosition
  }

  getCurrentMidiNotes(): number[] {
    // Return the stopped notes if we're stopping, otherwise return current notes
    return this._shouldStop ? this.stoppedMidiNotes : this.currentMidiNotes
  }

  getInitialChordNames(): string[] {
    return [
      'B',
      'D',
      'G',
      'Bb',
      'Eb',
      'Eb',
      'Am',
      'D',
      'G',
      'Bb',
      'Eb',
      'F#',
      'B',
      'B',
      'Fm',
      'Bb',
      'Eb',
      'Eb',
      'Am',
      'D',
      'G',
      'G',
      'C#m',
      'F#',
      'B',
      'B',
      'Fm',
      'Bb',
      'Eb',
      'Eb',
      'C#m',
      'F#',
    ]
  }

  generateGiantStepsSequence(): Triad[] {
    this.isFirstPlay = true // Reset first play flag when generating new sequence
    const GIANT_STEPS = this.getInitialChordNames()
    const MIDI_RANGE: [number, number] = [40, 90]

    const triads = Object.fromEntries(
      GIANT_STEPS.map(chord => [chord, generateTriads(chord, 'spread')])
    )

    const graph = buildVoiceLeadingGraph(GIANT_STEPS, MIDI_RANGE, triads)

    console.log(graph)

    const startNodes = graph.nodes.filter(
      n => n.position === 0 && n.chordName === 'B'
    )
    const endNodes = graph.nodes.filter(
      n => n.position === GIANT_STEPS.length - 1 && n.chordName === 'F#'
    )

    return findOptimalVoiceLeading(graph, startNodes, endNodes)
  }

  playNote(midiNote: number): void {
    const instrument = this.getCurrentInstrument()
    if (!instrument) throw new Error('No instrument loaded')

    const note = this.midiToNote(midiNote)
    instrument.triggerAttack(note)
  }

  stopNote(midiNote: number): void {
    const instrument = this.getCurrentInstrument()
    if (!instrument) throw new Error('No instrument loaded')

    const note = this.midiToNote(midiNote)
    instrument.triggerRelease(note)
  }

  setPosition(position: number): void {
    this.currentPosition = position
    this.savedPosition = position
    this.wasPositionSelected = true
    this.isFirstPlay = false
  }

  get isArpeggiating(): boolean {
    return this._isArpeggiating
  }

  setArpeggiating(value: boolean) {
    console.log('Setting arpeggiating:', value)
    this._isArpeggiating = value
  }

  getInitialArpeggiating(): boolean {
    return this.isArpeggiating
  }

  getMidiNotesForChord(chordName: string): number[] {
    const { root, quality } = this.parseChord(chordName)
    const rootNote = this.noteToMidi(root)
    if (rootNote === null) return []

    const intervals = this.getTriadIntervals(quality)
    return intervals.map(interval => rootNote + interval)
  }

  parseChord(chordName: string): { root: string; quality: string } {
    const root = chordName.slice(0, 1)
    const quality = chordName.slice(1)
    return { root, quality }
  }

  getTriadIntervals(quality: string): number[] {
    switch (quality) {
      case 'maj':
        return [0, 4, 7]  // Major triad: root, major third, perfect fifth
      case 'min':
        return [0, 3, 7]  // Minor triad: root, minor third, perfect fifth
      case 'dim':
        return [0, 3, 6]  // Diminished triad: root, minor third, diminished fifth
      case 'aug':
        return [0, 4, 8]  // Augmented triad: root, major third, augmented fifth
      default:
        return [0, 4, 7]  // Default to major
    }
  }

  noteToMidi(note: string): number | null {
    const baseNotes: { [key: string]: number } = {
      'C': 60, 'D': 62, 'E': 64, 'F': 65, 'G': 67, 'A': 69, 'B': 71
    }
    return baseNotes[note] ?? null
  }

  setCurrentPosition(position: number): void {
    this.currentPosition = position
    this.wasPositionSelected = true
    this.isFirstPlay = false
  }

  getChordDuration(): number {
    return this.chordDuration
  }
}

export const audioService = new AudioService()
