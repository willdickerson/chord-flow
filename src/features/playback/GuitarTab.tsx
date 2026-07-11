import React, { useMemo } from 'react'
import { audioService } from '../../services/audioService'
import {
  generateTabSequence,
  STRING_NAMES,
  TabFingering,
} from '../../common/utils/tabUtils'

interface GuitarTabProps {
  activeNotes: number[]
  currentChords?: string[]
}

// Layout constants (SVG user units)
const WIDTH = 400
const HEIGHT = 96
const TOP = 14
const LINE_GAP = 13
const LEFT = 30
const RIGHT = 388
const CHORDS_PER_ROW = 4

const INK = '#2C1810'
const PAPER = '#F5E6D3'
const HIGHLIGHT = '#7A8A6A'
const MUTED = '#846C5B'

export const GuitarTab: React.FC<GuitarTabProps> = ({
  activeNotes,
  currentChords,
}) => {
  const sequence = audioService.getCurrentSequence()
  const position = audioService.getCurrentPosition()

  const fingerings = useMemo(
    () => generateTabSequence(sequence.map(triad => triad.midiNotes)),
    // currentChords signals chart edits; the sequence array identity changes
    // with every regeneration as well.
    [sequence, currentChords] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const rowStartIndex = Math.floor(position / CHORDS_PER_ROW) * CHORDS_PER_ROW
  const rowFingerings = fingerings.slice(
    rowStartIndex,
    rowStartIndex + CHORDS_PER_ROW
  )
  const highlightIndex =
    activeNotes.length > 0 ? position - rowStartIndex : -1

  const columnX = (column: number): number =>
    LEFT + 28 + ((RIGHT - LEFT - 40) / (CHORDS_PER_ROW - 1)) * column

  // String 0 (low E) renders on the bottom line, high e on top
  const stringY = (stringIndex: number): number =>
    TOP + (STRING_NAMES.length - 1 - stringIndex) * LINE_GAP

  const renderChord = (
    fingering: TabFingering | null,
    column: number
  ): React.ReactNode => {
    const x = columnX(column)
    const isActive = column === highlightIndex
    const color = isActive ? HIGHLIGHT : INK

    if (!fingering) {
      return (
        <text
          key={`chord-${column}`}
          x={x}
          y={stringY(2) + 4}
          textAnchor="middle"
          fontSize="10"
          fill={MUTED}
        >
          —
        </text>
      )
    }

    return (
      <g key={`chord-${column}`}>
        {fingering.map((fret, stringIndex) => {
          if (fret === null) return null
          const y = stringY(stringIndex)
          const label = String(fret)
          return (
            <g key={stringIndex}>
              {/* mask the string line behind the number */}
              <rect
                x={x - label.length * 3.5}
                y={y - 5}
                width={label.length * 7}
                height={10}
                fill={PAPER}
              />
              <text
                x={x}
                y={y + 3.5}
                textAnchor="middle"
                fontSize="10"
                fontWeight={isActive ? 700 : 500}
                fill={color}
              >
                {label}
              </text>
            </g>
          )
        })}
      </g>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <div
        className="relative mx-auto mb-2"
        style={{
          height: '100px',
          maxWidth: '380px',
        }}
      >
        <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#2C1810] rounded-lg"></div>
        <div className="relative w-full h-full bg-[#F5E6D3] rounded-lg p-2">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="w-full h-full select-none"
            role="img"
            aria-label="Guitar tablature"
          >
            {/* string lines */}
            {STRING_NAMES.map((_, stringIndex) => (
              <line
                key={stringIndex}
                x1={LEFT}
                y1={stringY(stringIndex)}
                x2={RIGHT}
                y2={stringY(stringIndex)}
                stroke={INK}
                strokeWidth="0.75"
              />
            ))}

            {/* start and end bars */}
            <line
              x1={LEFT}
              y1={stringY(STRING_NAMES.length - 1)}
              x2={LEFT}
              y2={stringY(0)}
              stroke={INK}
              strokeWidth="1.5"
            />
            <line
              x1={RIGHT}
              y1={stringY(STRING_NAMES.length - 1)}
              x2={RIGHT}
              y2={stringY(0)}
              stroke={INK}
              strokeWidth="1.5"
            />

            {/* string names */}
            {STRING_NAMES.map((name, stringIndex) => (
              <text
                key={name + stringIndex}
                x={LEFT - 10}
                y={stringY(stringIndex) + 3.5}
                textAnchor="middle"
                fontSize="9"
                fill={MUTED}
              >
                {name}
              </text>
            ))}

            {rowFingerings.map((fingering, column) =>
              renderChord(fingering, column)
            )}
          </svg>
        </div>
      </div>
    </div>
  )
}
