import React, { useMemo } from 'react'
import { audioService } from '../../services/audioService'
import {
  generateTabSequence,
  STANDARD_TUNING,
  STRING_NAMES,
} from '../../common/utils/tabUtils'
import { getScaleDegreeLabel } from '../../common/utils/chordUtils'

interface FretboardProps {
  activeNotes: number[]
  currentChords?: string[]
}

// Layout constants (SVG user units)
const WIDTH = 760
const HEIGHT = 112
const FRETS = 15
const NUT_X = 40
const BOARD_RIGHT = 748
const FRET_W = (BOARD_RIGHT - NUT_X) / FRETS
const TOP = 14
const STRING_GAP = 16
const MARKER_FRETS = [3, 5, 7, 9, 15]
const NOTE_RADIUS = 7.5

const INK = '#2C1810'
const PAPER = '#F5E6D3'
const HIGHLIGHT = '#7A8A6A'
const MUTED = '#846C5B'

export const Fretboard: React.FC<FretboardProps> = ({
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

  const fingering = activeNotes.length > 0 ? (fingerings[position] ?? null) : null
  const chordName = sequence[position]?.chordName ?? ''

  // String 0 (low E) renders on the bottom line, high e on top
  const stringY = (stringIndex: number): number =>
    TOP + (STRING_NAMES.length - 1 - stringIndex) * STRING_GAP
  // Notes sit between fret wires; open strings sit just left of the nut
  const noteX = (fret: number): number =>
    fret === 0 ? NUT_X - 14 : NUT_X + (fret - 0.5) * FRET_W

  const midY = (stringY(0) + stringY(STRING_NAMES.length - 1)) / 2

  return (
    <div className="container mx-auto px-4">
      <div
        className="relative mx-auto mb-2"
        style={{
          height: '120px',
          maxWidth: '780px',
        }}
      >
        <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#2C1810] rounded-lg"></div>
        <div className="relative w-full h-full bg-[#F5E6D3] rounded-lg p-2">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="w-full h-full select-none"
            role="img"
            aria-label="Guitar fretboard"
          >
            {/* nut */}
            <line
              x1={NUT_X}
              y1={stringY(STRING_NAMES.length - 1)}
              x2={NUT_X}
              y2={stringY(0)}
              stroke={INK}
              strokeWidth="3.5"
            />

            {/* fret wires */}
            {Array.from({ length: FRETS }, (_, i) => i + 1).map(fret => (
              <line
                key={fret}
                x1={NUT_X + fret * FRET_W}
                y1={stringY(STRING_NAMES.length - 1)}
                x2={NUT_X + fret * FRET_W}
                y2={stringY(0)}
                stroke={INK}
                strokeWidth="1"
                opacity="0.35"
              />
            ))}

            {/* position markers */}
            {MARKER_FRETS.map(fret => (
              <circle
                key={fret}
                cx={noteX(fret)}
                cy={midY}
                r="4"
                fill={MUTED}
                opacity="0.25"
              />
            ))}
            <circle
              cx={noteX(12)}
              cy={midY - STRING_GAP}
              r="4"
              fill={MUTED}
              opacity="0.25"
            />
            <circle
              cx={noteX(12)}
              cy={midY + STRING_GAP}
              r="4"
              fill={MUTED}
              opacity="0.25"
            />

            {/* strings, thicker toward the low E */}
            {STRING_NAMES.map((_, stringIndex) => (
              <line
                key={stringIndex}
                x1={NUT_X}
                y1={stringY(stringIndex)}
                x2={BOARD_RIGHT}
                y2={stringY(stringIndex)}
                stroke={INK}
                strokeWidth={1.6 - stringIndex * 0.16}
              />
            ))}

            {/* string names */}
            {STRING_NAMES.map((name, stringIndex) => (
              <text
                key={name + stringIndex}
                x={12}
                y={stringY(stringIndex) + 3.5}
                textAnchor="middle"
                fontSize="10"
                fill={MUTED}
              >
                {name}
              </text>
            ))}

            {/* fret numbers */}
            {[...MARKER_FRETS, 12].map(fret => (
              <text
                key={fret}
                x={noteX(fret)}
                y={HEIGHT - 3}
                textAnchor="middle"
                fontSize="9"
                fill={MUTED}
              >
                {fret}
              </text>
            ))}

            {/* played notes, labeled by scale degree relative to the root */}
            {fingering?.map((fret, stringIndex) => {
              if (fret === null) return null
              const midi = STANDARD_TUNING[stringIndex] + fret
              const degree = chordName
                ? getScaleDegreeLabel(midi, chordName)
                : ''
              const isRoot = degree === 'R'
              const x = noteX(fret)
              const y = stringY(stringIndex)
              return (
                <g key={stringIndex}>
                  <circle
                    cx={x}
                    cy={y}
                    r={NOTE_RADIUS}
                    fill={isRoot ? INK : HIGHLIGHT}
                    stroke={INK}
                    strokeWidth={isRoot ? 0 : 1}
                  />
                  <text
                    x={x}
                    y={y + 3}
                    textAnchor="middle"
                    fontSize={degree.length > 1 ? 8 : 9}
                    fontWeight={700}
                    fill={PAPER}
                  >
                    {degree}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>
      </div>
    </div>
  )
}
