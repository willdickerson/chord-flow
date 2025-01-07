import * as Tone from 'tone'
import { Triad } from '../types'
import {
  buildVoiceLeadingGraph,
  findOptimalVoiceLeading,
} from '../utils/graphUtils'
import { generateTriads } from '../utils/chordUtils'

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

const giantStepsChords = [
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

const giantStepsTriads = Object.fromEntries(
  giantStepsChords.map(chord => [chord, generateTriads(chord, 'spread')])
)

export class AudioService {
  private instruments: Record<InstrumentType, Tone.Sampler | Tone.PolySynth | null> = {
    piano: null,
    synth: null,
    guitar: null,
  }
  private currentInstrument: InstrumentType = 'synth'
  private isInitialized = false
  private _shouldStop = false
  private volume = -12
  private _isArpeggiating = false
  private _isLooping = false
  private playbackTimeout: NodeJS.Timeout | null = null
  private currentPosition = 0
  private savedPosition = 0
  private onComplete: (() => void) | null = null
  private chordDuration = 670
  private currentMidiNotes: number[] = [] // Track current notes for visualization

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
    this._isArpeggiating = value
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
    const normalizedVolume = value / 100 // Convert 0-100 to 0-1
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
    return giantStepsChords
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
      console.log('Audio service already initialized')
      return
    }

    console.log('Initializing audio service...')
    try {
      await Tone.start()
      console.log('Tone.js started')

      // Initialize synth first for immediate playback
      console.log('Loading synth...')
      this.instruments.synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: {
          attack: 0.005,
          decay: 0.1,
          sustain: 0.3,
          release: 1
        }
      }).toDestination()

      // Set initial volume for synth
      if (this.instruments.synth) {
        this.instruments.synth.volume.value = Tone.gainToDb(this.volume / 100)
      }

      // Mark as initialized once synth is ready
      this.isInitialized = true
      console.log('Synth initialized, starting sample loading...')

      // Load sampled instruments in the background
      this.loadSampledInstruments()
    } catch (err) {
      console.error('Failed to initialize audio service:', err)
      throw err
    }
  }

  private async loadSampledInstruments() {
    try {
      // Initialize piano with Salamander samples
      console.log('Loading piano...')
      this.instruments.piano = new Tone.Sampler({
        urls: {
          A0: 'A0.mp3', C1: 'C1.mp3', 'D#1': 'Ds1.mp3', 'F#1': 'Fs1.mp3',
          A1: 'A1.mp3', C2: 'C2.mp3', 'D#2': 'Ds2.mp3', 'F#2': 'Fs2.mp3',
          A2: 'A2.mp3', C3: 'C3.mp3', 'D#3': 'Ds3.mp3', 'F#3': 'Fs3.mp3',
          A3: 'A3.mp3', C4: 'C4.mp3', 'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3',
          A4: 'A4.mp3', C5: 'C5.mp3', 'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
          A5: 'A5.mp3', C6: 'C6.mp3', 'D#6': 'Ds6.mp3', 'F#6': 'Fs6.mp3',
          A6: 'A6.mp3', C7: 'C7.mp3', 'D#7': 'Ds7.mp3', 'F#7': 'Fs7.mp3',
          A7: 'A7.mp3', C8: 'C8.mp3'
        },
        release: 1,
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        onload: () => {
          console.log('Piano samples loaded')
          if (this.instruments.piano) {
            this.instruments.piano.volume.value = Tone.gainToDb(this.volume / 100)
          }
        }
      }).toDestination()

      // Initialize guitar with nylon guitar samples
      console.log('Loading guitar...')
      this.instruments.guitar = new Tone.Sampler({
        urls: {
          'E2': 'E2.mp3', 'F#2': 'Fs2.mp3', 'G#2': 'Gs2.mp3',
          'A2': 'A2.mp3', 'B2': 'B2.mp3', 'D3': 'D3.mp3',
          'E3': 'E3.mp3', 'F#3': 'Fs3.mp3', 'G3': 'G3.mp3',
          'A3': 'A3.mp3', 'B3': 'B3.mp3', 'C#4': 'Cs4.mp3',
          'D#4': 'Ds4.mp3', 'E4': 'E4.mp3', 'F#4': 'Fs4.mp3',
          'G#4': 'Gs4.mp3'
        },
        release: 1.2,
        volume: -3,
        baseUrl: 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-nylon/',
        onload: () => {
          console.log('Guitar samples loaded')
          if (this.instruments.guitar) {
            this.instruments.guitar.volume.value = Tone.gainToDb(this.volume / 100)
          }
        }
      }).toDestination()

    } catch (err) {
      console.error('Failed to load sampled instruments:', err)
    }
  }

  getCurrentInstrument(): Tone.Sampler | Tone.PolySynth | null {
    if (!this.isInitialized) {
      console.warn('Audio service not initialized')
      return null
    }
    const instrument = this.instruments[this.currentInstrument]
    if (!this.isInstrumentReady(this.currentInstrument)) {
      console.warn(`Current instrument (${this.currentInstrument}) is not ready`)
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

    console.log('Starting playback:', {
      sequenceLength: sequence.length,
      startPosition,
    })

    this._shouldStop = false
    this.currentPosition = startPosition
    this.savedPosition = startPosition
    this.onComplete = onComplete
    this.playNextTriad(sequence, onNotesChange)
  }

  private playNextTriad(sequence: Triad[], onNotesChange?: (notes: number[]) => void) {
    console.log('Playing next triad at position:', this.currentPosition)
    
    if (this._shouldStop || this.currentPosition >= sequence.length) {
      console.log('Stopping sequence at position:', this.currentPosition)
      // If we're looping and not manually stopped, start from beginning
      if (this._isLooping && !this._shouldStop && this.currentPosition >= sequence.length) {
        console.log('Looping back to start')
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
    console.log('Playing triad at position:', {
      position: this.currentPosition,
      triad
    })
    
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
        console.log('Reached end, looping back to start')
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
    console.log('Stopping playback at position:', this.currentPosition)
    this._shouldStop = true
    const instrument = this.getCurrentInstrument()
    if (instrument) {
      instrument.releaseAll()
    }
    // Don't clear currentMidiNotes here to maintain visualization
  }

  restart(): void {
    console.log('Restarting playback')
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
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const octave = Math.floor(midi / 12) - 1
    const noteIndex = midi % 12
    return `${noteNames[noteIndex]}${octave}`
  }

  async playTriad(midiNotes: number[], duration: number, onNotesChange?: (notes: number[]) => void): Promise<void> {
    console.log('playTriad called:', {
      midiNotes,
      duration,
      isArpeggiating: this._isArpeggiating,
      currentInstrument: this.currentInstrument,
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

    // Update current notes for visualization
    this.currentMidiNotes = midiNotes
    onNotesChange?.(this.currentMidiNotes)

    if (this._isArpeggiating) {
      console.log('Playing arpeggiated')
      const noteDelay = duration / midiNotes.length
      const noteDuration = noteDelay * 0.95 // Slightly shorter than delay to prevent overlap
      const now = Tone.now()

      notes.forEach((note, i) => {
        const startTime = now + (i * noteDelay) / 1000
        console.log(`Scheduling note ${note} at ${startTime} for ${noteDuration / 1000}s`)
        instrument.triggerAttackRelease(note, noteDuration / 1000, startTime, 0.7)
      })

      await new Promise(resolve => setTimeout(resolve, duration))
    } else {
      console.log('Playing all notes together:', notes)
      instrument.triggerAttack(notes)

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

  getCurrentMidiNotes(): number[] {
    return this.currentMidiNotes
  }

  clearCurrentNotes(onNotesChange?: (notes: number[]) => void): void {
    this.currentMidiNotes = []
    onNotesChange?.([])
  }

  generateGiantStepsSequence(voiceLeadingState: VoiceLeadingState = defaultVoiceLeadingState): Triad[] {
    const chords = giantStepsChords
    const midiRange: [number, number] = [40, 76] // From E2 to E5
    const triads = giantStepsTriads

    // Create a custom cost function based on which voices to optimize
    const customVoiceLeadingCost = (currentNotes: number[], nextNotes: number[]): number => {
      let totalCost = 0
      let costs = {
        bass: Math.abs(currentNotes[0] - nextNotes[0]),
        middle: Math.abs(currentNotes[1] - nextNotes[1]),
        high: Math.abs(currentNotes[2] - nextNotes[2])
      }
      
      // Calculate weights based on which voices are selected
      const selectedCount = Object.values(voiceLeadingState).filter(v => v).length
      const primaryWeight = selectedCount > 0 ? 1.0 : 0.333 // If no voices selected, weight all equally
      const secondaryWeight = 0.1 // Small weight for unselected voices
      
      // Apply weights to each voice
      if (voiceLeadingState.bass) {
        totalCost += costs.bass * primaryWeight
      } else {
        totalCost += costs.bass * secondaryWeight
      }
      if (voiceLeadingState.middle) {
        totalCost += costs.middle * primaryWeight
      } else {
        totalCost += costs.middle * secondaryWeight
      }
      if (voiceLeadingState.high) {
        totalCost += costs.high * primaryWeight
      } else {
        totalCost += costs.high * secondaryWeight
      }

      console.log('Voice movement costs:', {
        from: currentNotes,
        to: nextNotes,
        individualCosts: costs,
        weights: {
          bass: voiceLeadingState.bass ? primaryWeight : secondaryWeight,
          middle: voiceLeadingState.middle ? primaryWeight : secondaryWeight,
          high: voiceLeadingState.high ? primaryWeight : secondaryWeight
        },
        totalCost
      })

      return totalCost
    }

    // Build graph with custom cost function
    console.log('Building graph with voice leading state:', voiceLeadingState)
    const graph = buildVoiceLeadingGraph(chords, midiRange, triads, customVoiceLeadingCost)

    // Find optimal path
    const startNodes = graph.nodes.filter(node => node.position === 0)
    const endNodes = graph.nodes.filter(node => node.position === chords.length - 1)

    console.log('Finding optimal path...')
    const path = findOptimalVoiceLeading(graph, startNodes, endNodes)

    if (!path.length) {
      console.error('No valid path found')
      return []
    }

    console.log('Found optimal path with length:', path.length)

    // Log voice movements between consecutive chords
    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i]
      const next = path[i + 1]
      console.log(`Voice movements from ${current.chordName} to ${next.chordName}:`, {
        bass: Math.abs(current.midiNotes[0] - next.midiNotes[0]),
        middle: Math.abs(current.midiNotes[1] - next.midiNotes[1]),
        high: Math.abs(current.midiNotes[2] - next.midiNotes[2])
      })
    }

    return path
  }
}

export const audioService = new AudioService()
