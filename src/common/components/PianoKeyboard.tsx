import React, { useEffect, useState, useCallback } from 'react'
import { audioService } from '../../services/audioService'

interface PianoKeyboardProps {
  activeNotes: number[]
}

// MIDI note numbers for reference
const MIDI_START = 24 // C1
const MIDI_END = 108 // C8

const KEY_WIDTH = 14
const WHITE_KEY_HEIGHT = 100
const BLACK_KEY_HEIGHT = 65

const MOBILE_KEY_WIDTH = 20
const MOBILE_WHITE_KEY_HEIGHT = 120
const MOBILE_BLACK_KEY_HEIGHT = 75

// Mobile keyboard range (2 octaves)
const MOBILE_MIDI_START = 60 // C4
const MOBILE_MIDI_END = 84 // C7

// Map of note numbers within an octave (0 = C)
const OCTAVE_MAP = {
  white: [0, 2, 4, 5, 7, 9, 11, 12], // C, D, E, F, G, A, B, C
  black: [1, 3, 6, 8, 10], // C#/Db, D#/Eb, F#/Gb, G#/Ab, A#/Bb
}

export const PianoKeyboard: React.FC<PianoKeyboardProps> = ({
  activeNotes,
}) => {
  const [playedNotes, setPlayedNotes] = useState<Set<number>>(new Set())
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    audioService.initialize()

    // Add global mouse up handler
    const handleGlobalMouseUp = () => {
      setIsMouseDown(false)
    }
    window.addEventListener('mouseup', handleGlobalMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Use mobile dimensions if on mobile
  const effectiveKeyWidth = isMobile ? MOBILE_KEY_WIDTH : KEY_WIDTH
  const effectiveWhiteKeyHeight = isMobile ? MOBILE_WHITE_KEY_HEIGHT : WHITE_KEY_HEIGHT
  const effectiveBlackKeyHeight = isMobile ? MOBILE_BLACK_KEY_HEIGHT : BLACK_KEY_HEIGHT

  // Adjust range based on screen size
  const effectiveMidiStart = isMobile ? MOBILE_MIDI_START : MIDI_START
  const effectiveMidiEnd = isMobile ? MOBILE_MIDI_END : MIDI_END
  const totalOctaves = Math.floor((effectiveMidiEnd - effectiveMidiStart) / 12)

  // Convert MIDI note to octave and note within octave
  const isNoteActive = (midiNote: number) =>
    activeNotes.includes(midiNote) || playedNotes.has(midiNote)

  const playNote = useCallback(
    async (midiNote: number) => {
      if (playedNotes.has(midiNote)) return // Don't play if already playing

      try {
        await audioService.initialize()
        audioService.playNote(midiNote)
        setPlayedNotes(prev => new Set([...prev, midiNote]))
      } catch (err) {
        console.error('Error playing note:', err)
      }
    },
    [playedNotes]
  )

  const stopNote = useCallback((midiNote: number) => {
    audioService.stopNote(midiNote)
    setPlayedNotes(prev => {
      const next = new Set(prev)
      next.delete(midiNote)
      return next
    })
  }, [])

  const handleMouseDown = async (midiNote: number) => {
    setIsMouseDown(true)
    await playNote(midiNote)
  }

  const handleMouseUp = (midiNote: number) => {
    setIsMouseDown(false)
    stopNote(midiNote)
  }

  const handleMouseEnter = async (midiNote: number) => {
    if (isMouseDown) {
      await playNote(midiNote)
    }
  }

  const handleMouseLeave = (midiNote: number) => {
    stopNote(midiNote)
  }

  // Calculate total width needed
  const totalWhiteKeys = totalOctaves * 7 + 1 // 7 white keys per octave plus final C
  const totalWidth = totalOctaves * 7 * effectiveKeyWidth + effectiveKeyWidth

  return (
    <div className="w-full overflow-x-auto">
      <div className="max-w-[900px] mx-auto">
        <svg
          width={totalWidth}
          height={effectiveWhiteKeyHeight}
          className="mx-auto"
          viewBox={`0 0 ${totalWidth} ${effectiveWhiteKeyHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Generate white keys */}
          {Array.from({ length: totalOctaves }).map((_, octave) => (
            <React.Fragment key={`octave-${octave}`}>
              {OCTAVE_MAP.white.slice(0, -1).map((noteInOctave, i) => {
                const midiNote = effectiveMidiStart + octave * 12 + noteInOctave
                if (midiNote > effectiveMidiEnd) return null
                return (
                  <rect
                    key={`white-${midiNote}`}
                    x={(octave * 7 + i) * effectiveKeyWidth}
                    y={0}
                    width={effectiveKeyWidth - 1}
                    height={effectiveWhiteKeyHeight}
                    fill={isNoteActive(midiNote) ? '#A6B39C' : '#F5E6D3'}
                    stroke="#846C5B"
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
            key={`white-final-c`}
            x={totalWhiteKeys * effectiveKeyWidth - effectiveKeyWidth}
            y={0}
            width={effectiveKeyWidth - 1}
            height={effectiveWhiteKeyHeight}
            fill={isNoteActive(effectiveMidiEnd) ? '#A6B39C' : '#F5E6D3'}
            stroke="#846C5B"
            strokeWidth="1"
            rx="2"
            className="transition-colors duration-100 cursor-pointer"
            onMouseDown={() => handleMouseDown(effectiveMidiEnd)}
            onMouseUp={() => handleMouseUp(effectiveMidiEnd)}
            onMouseEnter={() => handleMouseEnter(effectiveMidiEnd)}
            onMouseLeave={() => handleMouseLeave(effectiveMidiEnd)}
          />

          {/* Generate black keys */}
          {Array.from({ length: totalOctaves }).map((_, octave) => (
            <React.Fragment key={`octave-black-${octave}`}>
              {OCTAVE_MAP.black.map((noteInOctave, i) => {
                const midiNote = effectiveMidiStart + octave * 12 + noteInOctave
                if (midiNote > effectiveMidiEnd) return null

                // Calculate x position based on white key positions
                const octaveOffset = octave * 7 * effectiveKeyWidth
                const blackKeyOffset = effectiveKeyWidth - (effectiveKeyWidth * 0.7) / 2

                // Position black keys relative to white keys
                let whiteKeyIndex
                if (i < 2)
                  whiteKeyIndex = i // C#, D#
                else whiteKeyIndex = i + 1 // F#, G#, A#

                return (
                  <rect
                    key={`black-${midiNote}`}
                    x={
                      octaveOffset + whiteKeyIndex * effectiveKeyWidth + blackKeyOffset
                    }
                    y={0}
                    width={effectiveKeyWidth * 0.7}
                    height={effectiveBlackKeyHeight}
                    fill={isNoteActive(midiNote) ? '#A6B39C' : '#2C1810'}
                    stroke="#2C1810"
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
