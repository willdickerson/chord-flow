import * as Tone from 'tone'
import { ChordSequence } from '../types'
import { AudioService } from '../../services/audioService'

const PIANO_SAMPLES = {
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
  baseUrl: 'https://tonejs.github.io/audio/salamander/'
}

const GUITAR_SAMPLES = {
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
  baseUrl: 'https://raw.githubusercontent.com/nbrosowsky/tonejs-instruments/master/samples/guitar-nylon/'
}

export const downloadWavFile = async (
  sequence: ChordSequence | null,
  audioService: AudioService,
  songName?: string,
  composer?: string
) => {
  if (!sequence) return
  console.log('Starting WAV generation...', { sequence })

  // Get duration from audioService's initial value if not already set
  const chordDuration = (audioService.getChordDuration() || audioService.getInitialChordDuration()) * 2 // Double duration to match live playback
  const duration = sequence.chords.length * chordDuration
  const currentInstrument = audioService.getCurrentInstrument()
  const instrumentType = audioService.getCurrentInstrumentType()
  
  console.log('Audio settings:', { 
    chordDuration, 
    totalDuration: duration,
    isArpeggiating: audioService.isArpeggiating,
    instrument: instrumentType
  })
  
  if (!currentInstrument) {
    console.error('No instrument available')
    return
  }

  try {
    // Create the offline rendering context
    console.log('Starting offline rendering...')
    
    const buffer = await Tone.Offline(async ({ destination }) => {
      // Create a new instrument instance for offline rendering
      let offlineInstrument: Tone.Sampler | Tone.PolySynth

      if (currentInstrument instanceof Tone.Sampler) {
        // For sampled instruments (piano, guitar), we need to create a new sampler and wait for it to load
        const settings = currentInstrument.get()
        console.log('Current instrument settings:', settings)
        
        const samples = instrumentType === 'piano' ? PIANO_SAMPLES : GUITAR_SAMPLES
        
        console.log('Creating sampler:', { instrumentType, samples })
        
        await new Promise<void>((resolve, reject) => {
          offlineInstrument = new Tone.Sampler({
            urls: samples.urls,
            baseUrl: samples.baseUrl,
            release: 1.5,
            attack: instrumentType === 'guitar' ? 0.01 : undefined,
            onload: () => {
              console.log('Offline sampler loaded')
              resolve()
            },
            onerror: (err) => {
              console.error('Error loading sampler:', err)
              reject(err)
            }
          }).connect(destination)
        })
      } else {
        // For synth, create a new PolySynth with the same settings
        offlineInstrument = new Tone.PolySynth(Tone.Synth, {
          maxPolyphony: 32,
          voice: Tone.Synth,
          options: currentInstrument.get()
        }).connect(destination)
      }

      console.log('Scheduling notes...')
      
      // Schedule all the notes
      for (let i = 0; i < sequence.chords.length; i++) {
        const chord = sequence.chords[i]
        const notes = chord.midiNotes.map(note => Tone.Frequency(note, "midi").toNote())
        const startTime = i * chordDuration / 1000 // Convert to seconds for Tone.js
        
        if (audioService.isArpeggiating) {
          // Handle arpeggio playback - match the timing in audioService.playArpeggio
          const noteDuration = chordDuration / notes.length // Keep in milliseconds for consistency
          
          // Handle arpeggio direction
          let notesToPlay = [...notes]
          if (audioService.getArpeggioType() === 'descending') {
            notesToPlay.reverse()
          } else if (audioService.getArpeggioType() === 'alternating') {
            if (i % 2 === 1) {
              notesToPlay.reverse()
            }
          }
          
          // Schedule each note with proper timing
          for (let j = 0; j < notesToPlay.length; j++) {
            const noteStartTime = startTime + (j * noteDuration / 1000) // Convert to seconds for scheduling
            
            // Make each note last until the next note starts (or chord ends)
            const nextNoteTime = j < notesToPlay.length - 1 
              ? startTime + ((j + 1) * noteDuration / 1000)
              : startTime + (chordDuration / 1000)
            
            const noteDurationSeconds = nextNoteTime - noteStartTime
            
            offlineInstrument.triggerAttackRelease(
              notesToPlay[j],
              noteDurationSeconds * 0.9, // Slightly shorter for separation
              noteStartTime,
              0.7 // Velocity to match live playback
            )
          }
        } else {
          // Play chord as block
          offlineInstrument.triggerAttackRelease(
            notes, 
            chordDuration / 1000 * 0.95, // Make slightly shorter for better separation
            startTime,
            0.7 // Velocity to match live playback
          )
        }
        
        // Add a small delay between iterations to allow for proper scheduling
        await new Promise(resolve => setTimeout(resolve, 0))
      }

      // Wait a bit to ensure all notes are processed
      await new Promise(resolve => setTimeout(resolve, 100))
    }, duration / 1000 + 1.5) // Add extra time for release tails

    console.log('Rendering complete, creating WAV...')
    
    // Create WAV blob
    const numberOfChannels = buffer.numberOfChannels
    const sampleRate = buffer.sampleRate
    const length = buffer.length * numberOfChannels * 2
    const outputBuffer = new ArrayBuffer(44 + length)
    const view = new DataView(outputBuffer)
    const channels = []
    
    // Write WAV header
    writeString(view, 0, 'RIFF')
    view.setUint32(4, 36 + length, true)
    writeString(view, 8, 'WAVE')
    writeString(view, 12, 'fmt ')
    view.setUint32(16, 16, true)
    view.setUint16(20, 1, true)
    view.setUint16(22, numberOfChannels, true)
    view.setUint32(24, sampleRate, true)
    view.setUint32(28, sampleRate * numberOfChannels * 2, true)
    view.setUint16(32, numberOfChannels * 2, true)
    view.setUint16(34, 16, true)
    writeString(view, 36, 'data')
    view.setUint32(40, length, true)

    // Write audio data
    let offset = 44
    for (let i = 0; i < buffer.numberOfChannels; i++) {
      channels[i] = buffer.getChannelData(i)
    }

    while (offset < outputBuffer.byteLength) {
      for (let i = 0; i < numberOfChannels; i++) {
        const sample = Math.max(-1, Math.min(1, channels[i][(offset - 44) / 2]))
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true)
        offset += 2
      }
    }

    const wavBlob = new Blob([outputBuffer], { type: 'audio/wav' })
    
    // Create download link
    const fileName = songName ? `${songName}.wav` : 'chord-sequence.wav'
    console.log('Creating download link:', fileName)
    const url = URL.createObjectURL(wavBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()
    
    // Cleanup
    URL.revokeObjectURL(url)
    console.log('WAV generation complete!')
  } catch (error) {
    console.error('Error generating WAV:', error)
  }
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i))
  }
}
