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
  private instruments: { [key in InstrumentType]: Tone.PolySynth | null } = {
    synth: null,
    piano: null,
    guitar: null,
  }
  private isInitialized = false
  private currentInstrument: InstrumentType = 'synth'
  private _shouldStop = false
  private volume = -12
  private _isArpeggiating = false
  private playbackTimeout: NodeJS.Timeout | null = null
  private currentPosition = 0
  private savedPosition = 0
  private onComplete: (() => void) | null = null
  private chordDuration = 670

  get shouldStop(): boolean {
    return this._shouldStop
  }

  get isArpeggiating(): boolean {
    return this._isArpeggiating
  }

  setArpeggiating(value: boolean): void {
    this._isArpeggiating = value
  }

  getInitialArpeggiating(): boolean {
    return this._isArpeggiating
  }

  setInstrument(type: InstrumentType): void {
    this.currentInstrument = type
  }

  getInitialVolume(): number {
    return this.volume
  }

  setVolume(value: number): void {
    this.volume = value
    Object.values(this.instruments).forEach(instrument => {
      if (instrument) {
        instrument.volume.value = value
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

    console.log('Initializing audio service')
    await Tone.start()
    this.instruments.synth = new Tone.PolySynth().toDestination()
    this.isInitialized = true
    console.log('Audio service initialized')
  }

  getCurrentInstrument(): Tone.PolySynth | null {
    if (!this.isInitialized) {
      console.warn('Audio service not initialized')
      return null
    }
    return this.instruments.synth
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
    if (!sequence || sequence.length === 0) {
      console.error('Cannot play next triad: no sequence provided')
      if (this.onComplete) {
        this.onComplete()
      }
      onNotesChange?.([])
      return
    }

    if (this._shouldStop || this.currentPosition >= sequence.length) {
      console.log('Playback complete:', {
        shouldStop: this._shouldStop,
        position: this.currentPosition,
        sequenceLength: sequence.length
      })
      if (this.onComplete) {
        this.onComplete()
      }
      onNotesChange?.([])
      return
    }

    const triad = sequence[this.currentPosition]
    console.log('Playing triad at position:', {
      position: this.currentPosition,
      triad
    })
    
    // Update visualization before playing
    this.savedPosition = this.currentPosition
    onNotesChange?.(triad.midiNotes)
    
    this.playTriad(triad.midiNotes, this.chordDuration)

    this.playbackTimeout = setTimeout(() => {
      // Clear notes before moving to next chord
      if (!this._shouldStop && this.currentPosition < sequence.length - 1) {
        onNotesChange?.([])
      }
      this.currentPosition++
      this.savedPosition = this.currentPosition
      this.playNextTriad(sequence, onNotesChange)
    }, this.chordDuration)
  }

  stopPlayback() {
    console.log('Stopping playback at position:', this.currentPosition)
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

  setPosition(position: number) {
    this.currentPosition = position
    this.savedPosition = position
  }

  private midiToNote(midi: number): string {
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const octave = Math.floor(midi / 12) - 1
    const noteIndex = midi % 12
    return `${noteNames[noteIndex]}${octave}`
  }

  async playTriad(midiNotes: number[], duration: number): Promise<void> {
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

    if (this._isArpeggiating) {
      console.log('Playing arpeggiated')
      const noteDelay = duration / midiNotes.length
      const noteDuration = noteDelay * 0.95 // Slightly shorter than delay to prevent overlap
      const now = Tone.now()

      // Schedule all notes with Tone.js
      notes.forEach((note, i) => {
        const startTime = now + (i * noteDelay) / 1000
        console.log(
          `Scheduling note ${note} at ${startTime} for ${noteDuration / 1000}s`
        )
        instrument.triggerAttackRelease(
          note,
          noteDuration / 1000,
          startTime,
          0.7
        )
      })

      // Wait for the full chord duration
      await new Promise(resolve => setTimeout(resolve, duration))
    } else {
      console.log('Playing all notes together:', notes)
      // Play all notes together
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
