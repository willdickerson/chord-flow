import React from 'react'
import { useKeyboardState } from '../hooks/useKeyboardState'
import { KEYBOARD_CONFIG, OCTAVE_MAP } from '../constants'

interface PianoKeyboardProps {
  activeNotes: number[]
}

export const PianoKeyboard: React.FC<PianoKeyboardProps> = ({
  activeNotes,
}) => {
  const {
    playedNotes,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
  } = useKeyboardState()

  const isNoteActive = (midiNote: number) =>
    activeNotes.includes(midiNote) || playedNotes.has(midiNote)

  const totalOctaves = Math.floor(
    (KEYBOARD_CONFIG.midiEnd - KEYBOARD_CONFIG.midiStart) / 12
  )

  // Calculate total width needed
  const totalWhiteKeys = totalOctaves * 7 + 1 // 7 white keys per octave plus final C
  const totalWidth = totalWhiteKeys * KEYBOARD_CONFIG.keyWidth

  return (
    <div className="w-full py-2">
      <div className="max-w-[900px] mx-auto">
        <svg
          width={totalWidth}
          height={KEYBOARD_CONFIG.whiteKeyHeight}
          className="select-none mx-auto"
          viewBox={`0 0 ${totalWidth} ${KEYBOARD_CONFIG.whiteKeyHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Generate white keys */}
          {Array.from({ length: totalOctaves }).map((_, octave) => (
            <React.Fragment key={`octave-${octave}`}>
              {OCTAVE_MAP.white.slice(0, -1).map((noteInOctave, i) => {
                const midiNote =
                  KEYBOARD_CONFIG.midiStart + octave * 12 + noteInOctave
                if (midiNote > KEYBOARD_CONFIG.midiEnd) return null
                return (
                  <rect
                    key={`white-${midiNote}`}
                    x={(octave * 7 + i) * KEYBOARD_CONFIG.keyWidth}
                    y={0}
                    width={KEYBOARD_CONFIG.keyWidth - 1}
                    height={KEYBOARD_CONFIG.whiteKeyHeight}
                    fill={isNoteActive(midiNote) ? '#9333ea' : 'white'}
                    stroke="#d1d5db"
                    strokeWidth="1"
                    rx="2"
                    className="transition-colors duration-100 cursor-pointer"
                    onMouseDown={() => handleMouseDown(midiNote)}
                    onMouseUp={() => handleMouseUp(midiNote)}
                    onMouseEnter={() => handleMouseEnter(midiNote)}
                    onMouseLeave={() => handleMouseLeave(midiNote)}
                  />
                )
              })}
            </React.Fragment>
          ))}

          {/* Add the final C */}
          <rect
            key="white-final-c"
            x={
              totalWhiteKeys * KEYBOARD_CONFIG.keyWidth -
              KEYBOARD_CONFIG.keyWidth
            }
            y={0}
            width={KEYBOARD_CONFIG.keyWidth - 1}
            height={KEYBOARD_CONFIG.whiteKeyHeight}
            fill={isNoteActive(KEYBOARD_CONFIG.midiEnd) ? '#9333ea' : 'white'}
            stroke="#d1d5db"
            strokeWidth="1"
            rx="2"
            className="transition-colors duration-100 cursor-pointer"
            onMouseDown={() => handleMouseDown(KEYBOARD_CONFIG.midiEnd)}
            onMouseUp={() => handleMouseUp(KEYBOARD_CONFIG.midiEnd)}
            onMouseEnter={() => handleMouseEnter(KEYBOARD_CONFIG.midiEnd)}
            onMouseLeave={() => handleMouseLeave(KEYBOARD_CONFIG.midiEnd)}
          />

          {/* Generate black keys */}
          {Array.from({ length: totalOctaves }).map((_, octave) => (
            <React.Fragment key={`octave-black-${octave}`}>
              {OCTAVE_MAP.black.map((noteInOctave, i) => {
                const midiNote =
                  KEYBOARD_CONFIG.midiStart + octave * 12 + noteInOctave
                if (midiNote > KEYBOARD_CONFIG.midiEnd) return null

                // Calculate x position based on white key positions
                const octaveOffset = octave * 7 * KEYBOARD_CONFIG.keyWidth
                const blackKeyOffset =
                  KEYBOARD_CONFIG.keyWidth -
                  (KEYBOARD_CONFIG.keyWidth * 0.7) / 2

                // Position black keys relative to white keys
                let whiteKeyIndex
                if (i < 2)
                  whiteKeyIndex = i // C#, D#
                else whiteKeyIndex = i + 1 // F#, G#, A#

                return (
                  <rect
                    key={`black-${midiNote}`}
                    x={
                      octaveOffset +
                      whiteKeyIndex * KEYBOARD_CONFIG.keyWidth +
                      blackKeyOffset
                    }
                    y={0}
                    width={KEYBOARD_CONFIG.keyWidth * 0.7}
                    height={KEYBOARD_CONFIG.blackKeyHeight}
                    fill={isNoteActive(midiNote) ? '#9333ea' : '#1f2937'}
                    stroke="#1f2937"
                    strokeWidth="1"
                    rx="1"
                    className="transition-colors duration-100 cursor-pointer"
                    onMouseDown={() => handleMouseDown(midiNote)}
                    onMouseUp={() => handleMouseUp(midiNote)}
                    onMouseEnter={() => handleMouseEnter(midiNote)}
                    onMouseLeave={() => handleMouseLeave(midiNote)}
                  />
                )
              })}
            </React.Fragment>
          ))}
        </svg>
      </div>
    </div>
  )
}
