import React from 'react';
import { Triad } from '../types';

interface PianoKeyboardProps {
  activeNotes: number[];
}

// MIDI note numbers for reference
const MIDI_START = 24; // C1
const MIDI_END = 108;  // C8

// Calculate key width based on viewport width
const TOTAL_WHITE_KEYS = 52; // Number of white keys on a piano
const KEY_WIDTH = 14;  // Making keys smaller to fit all 88 keys
const WHITE_KEY_HEIGHT = 100;
const BLACK_KEY_HEIGHT = 65;

// Map of note numbers within an octave (0 = C)
const OCTAVE_MAP = {
  white: [0, 2, 4, 5, 7, 9, 11, 12], // C, D, E, F, G, A, B, C
  black: [1, 3, 6, 8, 10]  // C#/Db, D#/Eb, F#/Gb, G#/Ab, A#/Bb
};

export const PianoKeyboard: React.FC<PianoKeyboardProps> = ({ activeNotes }) => {
  const totalOctaves = Math.floor((MIDI_END - MIDI_START) / 12);
  
  // Convert MIDI note to octave and note within octave
  const isNoteActive = (midiNote: number) => activeNotes.includes(midiNote);
  
  // Calculate total width needed
  const totalWhiteKeys = totalOctaves * 7 + 1; // 7 white keys per octave plus final C
  const totalWidth = totalWhiteKeys * KEY_WIDTH;

  return (
    <div className="w-full py-2">
      <div className="max-w-[900px] mx-auto">
        <svg
          width={totalWidth}
          height={WHITE_KEY_HEIGHT}
          className="select-none mx-auto"
          viewBox={`0 0 ${totalWidth} ${WHITE_KEY_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Generate white keys */}
          {Array.from({ length: totalOctaves }).map((_, octave) => (
            <React.Fragment key={`octave-${octave}`}>
              {OCTAVE_MAP.white.slice(0, -1).map((noteInOctave, i) => {
                const midiNote = MIDI_START + octave * 12 + noteInOctave;
                if (midiNote > MIDI_END) return null;
                return (
                  <rect
                    key={`white-${midiNote}`}
                    x={((octave * 7) + i) * KEY_WIDTH}
                    y={0}
                    width={KEY_WIDTH - 1}
                    height={WHITE_KEY_HEIGHT}
                    fill={isNoteActive(midiNote) ? '#9333ea' : 'white'}
                    stroke="#d1d5db"
                    strokeWidth="1"
                    rx="2"
                    className="transition-colors duration-100"
                  />
                );
              })}
            </React.Fragment>
          ))}
          
          {/* Add the final C */}
          <rect
            key={`white-final-c`}
            x={totalWhiteKeys * KEY_WIDTH - KEY_WIDTH}
            y={0}
            width={KEY_WIDTH - 1}
            height={WHITE_KEY_HEIGHT}
            fill={isNoteActive(MIDI_END) ? '#9333ea' : 'white'}
            stroke="#d1d5db"
            strokeWidth="1"
            rx="2"
            className="transition-colors duration-100"
          />

          {/* Generate black keys */}
          {Array.from({ length: totalOctaves }).map((_, octave) => (
            <React.Fragment key={`octave-black-${octave}`}>
              {OCTAVE_MAP.black.map((noteInOctave, i) => {
                const midiNote = MIDI_START + octave * 12 + noteInOctave;
                if (midiNote > MIDI_END) return null;
                
                // Calculate x position based on white key positions
                const octaveOffset = octave * 7 * KEY_WIDTH;
                const blackKeyOffset = KEY_WIDTH - (KEY_WIDTH * 0.7) / 2;
                
                // Position black keys relative to white keys
                let whiteKeyIndex;
                if (i < 2) whiteKeyIndex = i; // C#, D#
                else whiteKeyIndex = i + 1;    // F#, G#, A#
                
                return (
                  <rect
                    key={`black-${midiNote}`}
                    x={octaveOffset + (whiteKeyIndex * KEY_WIDTH) + blackKeyOffset}
                    y={0}
                    width={KEY_WIDTH * 0.7}
                    height={BLACK_KEY_HEIGHT}
                    fill={isNoteActive(midiNote) ? '#9333ea' : '#1f2937'}
                    stroke="#1f2937"
                    strokeWidth="1"
                    rx="1.5"
                    className="transition-colors duration-100"
                  />
                );
              })}
            </React.Fragment>
          ))}
        </svg>
      </div>
    </div>
  );
};
