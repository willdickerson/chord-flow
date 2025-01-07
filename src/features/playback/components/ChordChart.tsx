import React, { useRef } from 'react'
import { Triad } from '../../../types'

interface ChordChartProps {
  sequence: Triad[] | null
  currentPosition: number
  onPositionSelect: (position: number) => void
  isEnabled: boolean
  initialChordNames?: string[]
  isPlaying: boolean
  onNotesChange: (notes: number[]) => void
  audioService: unknown // Assuming audioService is an object with getChordDuration, isArpeggiating, initialize and playTriad methods
}

export const ChordChart: React.FC<ChordChartProps> = ({
  sequence,
  currentPosition,
  onPositionSelect,
  isEnabled,
  initialChordNames = [],
  isPlaying,
  onNotesChange,
  audioService, // Add audioService as a prop
}) => {
  const displayedNotesRef = useRef<number[]>([])
  const setCurrentPosition = (position: number) => onPositionSelect(position)

  const handleChordClick = async (index: number) => {
    if (!sequence || sequence.length === 0) {
      console.warn('No sequence available')
      return
    }

    try {
      // Initialize audio if needed
      await audioService.initialize()

      const triad = sequence[index]
      if (!triad) {
        console.warn('No triad at position:', index)
        return
      }

      // Update displayed notes and position
      displayedNotesRef.current = triad.midiNotes
      onNotesChange(triad.midiNotes)
      setCurrentPosition(index)

      // Play the triad but maintain the visual state
      await audioService.playTriad(
        triad.midiNotes,
        audioService.getChordDuration()
      )
    } catch (err) {
      console.error('Error playing chord:', err)
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
                onClick={() => handleChordClick(index)}
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
