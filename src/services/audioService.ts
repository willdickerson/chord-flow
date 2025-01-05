import * as Tone from 'tone'
import { Triad } from '../types'
import {
  buildVoiceLeadingGraph,
  findOptimalVoiceLeading,
} from '../utils/graphUtils'
import { generateTriads } from '../utils/chordUtils'

export type InstrumentType = 'piano' | 'synth'

export class AudioService {
  private instruments: Record<InstrumentType, Tone.Sampler | Tone.PolySynth | null> = {
    piano: null,
    synth: null,
  }
  private currentInstrument: InstrumentType = 'piano'
  private isInitialized = false
  private _shouldStop = false
  private currentPlayingNotes: string[] = []
  private currentPosition = 0
  private savedPosition = 0
  private currentMidiNotes: number[] = []
  private stoppedMidiNotes: number[] = []
  private isFirstPlay = true

  get shouldStop(): boolean {
    return this._shouldStop;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return

    // Initialize Tone.js
    await Tone.start()
    
    // Create instruments
    this.instruments.piano = new Tone.Sampler({
      urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3"
      },
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        console.log('Piano samples loaded')
      }
    }).toDestination()

    // Fallback synth in case samples don't load
    this.instruments.synth = new Tone.PolySynth(Tone.Synth).toDestination()

    this.isInitialized = true
    await this.waitForLoad()
  }

  private async waitForLoad(): Promise<void> {
    // Wait for either piano or guitar to load
    return new Promise((resolve) => {
      const checkLoaded = () => {
        if (
          (this.instruments.piano instanceof Tone.Sampler && this.instruments.piano.loaded) ||
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
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const octave = Math.floor(midi / 12) - 1
    const noteIndex = midi % 12
    return `${noteNames[noteIndex]}${octave}`
  }

  async playTriad(midiNotes: number[], duration: number, onNotesChange?: (notes: number[]) => void): Promise<void> {
    const instrument = this.instruments[this.currentInstrument] || this.instruments.synth
    if (!instrument) throw new Error('No instrument loaded')

    const notes = midiNotes.map(this.midiToNote)
    console.log('Setting current notes:', midiNotes);
    this.currentPlayingNotes = notes
    this.currentMidiNotes = midiNotes
    instrument.triggerAttack(notes)
    onNotesChange?.(midiNotes)
    
    try {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          if (!this._shouldStop) {
            resolve('completed');
          }
        }, duration)
        const checkInterval = setInterval(() => {
          if (this._shouldStop) {
            // Capture the current notes at the moment we decide to stop
            this.stoppedMidiNotes = [...this.currentMidiNotes];
            clearTimeout(timeout)
            clearInterval(checkInterval)
            resolve('stopped');
          }
        }, 100)
      })
      
      // Release the audio but don't clear visual notes
      instrument.triggerRelease(notes)
    } catch (err) {
      instrument.triggerRelease(notes)
      throw err
    }
  }

  async playTriadSequence(triads: Triad[], onNotesChange?: (notes: number[]) => void, startPosition: number = 0): Promise<void> {
    console.log('Starting sequence from position:', startPosition);
    this._shouldStop = false;
    
    if (this.isFirstPlay) {
      this.currentPosition = startPosition;
      this.isFirstPlay = false;
    } else {
      // On resume, advance to next chord unless we're at the end
      const nextPosition = this.savedPosition + 1;
      this.currentPosition = nextPosition < triads.length ? nextPosition : this.savedPosition;
    }
    
    try {
      for (let i = this.currentPosition; i < triads.length; i++) {
        if (this._shouldStop) break
        const triad = triads[i]
        this.currentPosition = i
        console.log('Playing position:', i);
        await this.playTriad(triad.midiNotes, 1000, onNotesChange)
        if (this._shouldStop) break
        
        // Only clear notes and add delay if we're continuing to the next note
        if (!this._shouldStop && i < triads.length - 1) {
          onNotesChange?.([])
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(resolve, 200)
            const checkInterval = setInterval(() => {
              if (this._shouldStop) {
                clearTimeout(timeout)
                clearInterval(checkInterval)
                resolve('stopped')
              }
            }, 50)
          })
        }
      }
      
      // Only clear notes if we completed the sequence
      if (!this._shouldStop) {
        onNotesChange?.([])
      }
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err
      }
    }
  }

  stopPlayback(): void {
    console.log('Stopping playback at position:', this.currentPosition);
    this._shouldStop = true
    this.savedPosition = this.currentPosition
    const instrument = this.instruments[this.currentInstrument] || this.instruments.synth
    if (instrument && this.currentPlayingNotes.length > 0) {
      instrument.triggerRelease(this.currentPlayingNotes)
      this.currentPlayingNotes = []
    }
  }

  getCurrentPosition(): number {
    console.log('Getting current position:', this.savedPosition);
    return this.savedPosition;
  }

  getCurrentMidiNotes(): number[] {
    // Return the stopped notes if we're stopping, otherwise return current notes
    return this._shouldStop ? this.stoppedMidiNotes : this.currentMidiNotes;
  }

  generateGiantStepsSequence(): Triad[] {
    this.isFirstPlay = true; // Reset first play flag when generating new sequence
    const GIANT_STEPS = [
      "B", "D", "G", "Bb", "Eb", "Eb", "Am", "D",
      "G", "Bb", "Eb", "F#", "B", "B", "Fm", "Bb",
      "Eb", "Eb", "Am", "D", "G", "G", "C#m", "F#", 
      "B", "B", "Fm", "Bb", "Eb", "Eb", "C#m", "F#"
  ]
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
}

export const audioService = new AudioService()