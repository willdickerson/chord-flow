import { KeyboardConfig, OctaveMap } from './types';

export const KEYBOARD_CONFIG: KeyboardConfig = {
  midiStart: 24, // C1
  midiEnd: 108,  // C8
  keyWidth: 14,
  whiteKeyHeight: 100,
  blackKeyHeight: 65,
};

export const OCTAVE_MAP: OctaveMap = {
  white: [0, 2, 4, 5, 7, 9, 11, 12], // C, D, E, F, G, A, B, C
  black: [1, 3, 6, 8, 10]  // C#/Db, D#/Eb, F#/Gb, G#/Ab, A#/Bb
};
