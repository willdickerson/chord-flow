import React from 'react'
import { Triad } from '../../../types'

interface ChordChartProps {
  sequence: Triad[] | null
  currentPosition: number
  onPositionSelect: (position: number) => void
  isEnabled: boolean
  initialChordNames?: string[]
}

export const ChordChart: React.FC<ChordChartProps> = ({
  sequence,
  currentPosition,
  onPositionSelect,
  isEnabled,
  initialChordNames = [],
}) => {
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
                onClick={() => onPositionSelect(index)}
                className="w-[60px] px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-center
                  bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100
                  data-[current=true]:bg-purple-100 data-[current=true]:text-purple-700 data-[current=true]:border-purple-200 data-[current=true]:hover:bg-purple-200"
                data-current={index === currentPosition}
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
