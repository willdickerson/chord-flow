import React from 'react'
import { Triad } from '../../../types'

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

  const handleChordClick = (index: number) => {
    console.log('ChordChart handleChordClick:', { index, isPlaying, hasSequence: !!sequence })
    if (!sequence) return

    const chord = sequence[index]
    console.log('Chord to play:', chord)
    
    if (isPlaying) {
      console.log('Playing while sequence is active')
      // If playing, just update position and play the chord without pausing
      onPositionSelect(index)
      onNotesChange({
        type: 'play',
        notes: chord.midiNotes,
        duration: 333,
        stayLit: true,     // Keep visual state lit even during playback
        releaseAudio: true // Always release the audio
      })
    } else {
      console.log('Playing while sequence is paused')
      // If paused, update position and play the chord
      onPositionSelect(index)
      onNotesChange({
        type: 'play',
        notes: chord.midiNotes,
        duration: 333,
        stayLit: true,     // Keep visual state lit
        releaseAudio: true // Always release the audio
      })
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
