// Feature flags

// Guitar tab + fretboard views are hidden while known issues are resolved:
// the fretboard card overlaps the controls panel, and the tab/fretboard
// fingerings can fall out of sync with the generated voicings shown on the
// keyboard (the fingering optimizer octave-shifts or re-voices chords that
// are unplayable as generated). Flip to true to work on them locally.
export const SHOW_GUITAR_VIEWS = false
