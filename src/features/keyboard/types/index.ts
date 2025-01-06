export interface KeyProps {
  midiNote: number;
  isBlack: boolean;
  x: number;
  width: number;
  height: number;
  isActive: boolean;
  onMouseDown: (midiNote: number) => void;
  onMouseUp: (midiNote: number) => void;
  onMouseEnter: (midiNote: number) => void;
  onMouseLeave: (midiNote: number) => void;
}

export interface KeyboardConfig {
  midiStart: number;
  midiEnd: number;
  keyWidth: number;
  whiteKeyHeight: number;
  blackKeyHeight: number;
}

export interface OctaveMap {
  white: number[];
  black: number[];
}
