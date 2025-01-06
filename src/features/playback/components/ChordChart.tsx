import React from 'react'
import { Triad } from '../../../types'
import { audioService } from '../../../services/audioService'
import * as Tone from 'tone'

interface ChordChartProps {
  sequence: Triad[] | null
  currentPosition: number
  onPositionSelect: (position: number) => void
  isEnabled: boolean
  initialChordNames?: string[]
  isPlaying: boolean
  onNotesChange: (notes: number[]) => void
}

export const ChordChart: React.FC<ChordChartProps> = ({
  sequence,
  currentPosition,
  onPositionSelect,
  isEnabled,
  initialChordNames = [],
  isPlaying,
  onNotesChange,
}) => {
  console.log('ChordChart render:', { 
    hasSequence: !!sequence, 
    currentPosition, 
    isEnabled, 
    isPlaying 
  })

  const handleChordClick = async (index: number) => {
    console.log('Chord clicked:', index)
    onPositionSelect(index)
    
    // Only play the chord if we're not currently playing and we have a sequence
    if (!isPlaying && sequence) {
      console.log('Attempting to play chord at index:', index)
      try {
        // Ensure audio context is started (required by browsers)
        console.log('Starting Tone.js...')
        await Tone.start()
        console.log('Initializing audio service...')
        await audioService.initialize()
        
        const chord = sequence[index]
        console.log('Chord to play:', chord)
        
        // Update the visual keyboard state
        onNotesChange(chord.midiNotes)
        console.log('Updated visual keyboard with notes:', chord.midiNotes)
        
        // Get the current instrument
        const instrument = audioService.getCurrentInstrument()
        console.log('Current instrument:', instrument)
        
        if (!instrument) {
          throw new Error('No instrument loaded')
        }

        // Convert MIDI notes to note names
        const notes = chord.midiNotes.map(midi => {
          const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
          const octave = Math.floor(midi / 12) - 1
          const noteIndex = midi % 12
          return `${noteNames[noteIndex]}${octave}`
        })
        console.log('Converted MIDI notes to:', notes)

        // Play the chord
        console.log('Triggering attack on notes:', notes)
        instrument.triggerAttack(notes)
        
        // Hold for 1/3 second then release
        console.log('Waiting 333ms before release...')
        await new Promise(resolve => setTimeout(resolve, 333))
        console.log('Triggering release on notes:', notes)
        instrument.triggerRelease(notes)
        
        // Keep the visual keyboard state lit up
        // We no longer clear the notes after playing
      } catch (err) {
        console.error('Failed to play chord:', err)
        onNotesChange([])
      }
    } else {
      console.log('Not playing chord because:', isPlaying ? 'playback is active' : 'no sequence available')
    }
  }

  // Group chords into rows of 8
  const rows = (
    sequence
      ? sequence.map((t, i) => ({ chord: t.chordName, index: i }))
      : initialChordNames.map((name, i) => ({ chord: name, index: i }))
  ).reduce(
    (acc, { chord, index }) => {
      const rowIndex = Math.floor(index / 8)
      if (!acc[rowIndex]) {
        acc[rowIndex] = []
      }
      acc[rowIndex].push({ chord, index })
      return acc
    },
    [] as { chord: string; index: number }[][]
  )

  return (
    <div className="space-y-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} role="row" className="flex gap-2">
          {row.map(({ chord, index }) =>
            isEnabled ? (
              <button
                key={index}
                onClick={() => {
                  console.log('Button clicked:', index)
                  handleChordClick(index)
                }}
                className={`w-[60px] px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-center
                  ${
                    index === currentPosition
                      ? 'bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200'
                      : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {chord}
              </button>
            ) : (
              <div
                key={index}
                className="w-[60px] px-3 py-1.5 rounded-md text-sm font-medium text-center
                  bg-gray-50 text-gray-600 border border-gray-100"
              >
                {chord}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  )
}
