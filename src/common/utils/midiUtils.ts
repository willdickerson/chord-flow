import { ChordSequence } from '../../types'
import { AudioService } from '../../features/playback/AudioService'

export const downloadMidiFile = (
  sequence: ChordSequence | null, 
  audioService: AudioService, 
  songName?: string,
  composer?: string
) => {
  if (!sequence) return

  const isArpeggiating = audioService.isArpeggiating
  const arpeggioType = audioService.arpeggioType

  // Create MIDI file
  const midiData = new Uint8Array([
    // MIDI header
    0x4D, 0x54, 0x68, 0x64, // MThd
    0x00, 0x00, 0x00, 0x06, // Header size (6 bytes)
    0x00, 0x00, // Format 0 (single track)
    0x00, 0x01, // One track
    0x00, 0x60, // 96 ticks per quarter note

    // Track header
    0x4D, 0x54, 0x72, 0x6B, // MTrk

    // Track data length (placeholder)
    0x00, 0x00, 0x00, 0x00,
  ])

  const trackEvents = []
  const ticksPerBeat = 96
  const bpm = 120
  const ticksPerNote = isArpeggiating ? ticksPerBeat / 3 : ticksPerBeat // 3 notes per beat in arpeggio mode

  // Set tempo (120 BPM)
  trackEvents.push([
    0, // delta time
    0xFF, 0x51, 0x03, // tempo meta event
    0x07, 0xA1, 0x20, // 500000 microseconds per quarter note (120 BPM)
  ])

  // Add title metadata if provided
  if (songName) {
    const titleBytes = Array.from(new TextEncoder().encode(songName))
    trackEvents.push([
      0, // delta time
      0xFF, 0x03, // Text event type for track/sequence name
      titleBytes.length, // Length of text
      ...titleBytes // The text data
    ])
  }

  // Add composer metadata if provided
  if (composer) {
    const composerBytes = Array.from(new TextEncoder().encode(`Composer: ${composer}`))
    trackEvents.push([
      0, // delta time
      0xFF, 0x01, // Text event type for generic text
      composerBytes.length, // Length of text
      ...composerBytes // The text data
    ])
  }

  // For each time point, we'll group all events that happen at that time
  sequence.forEach((triad, chordIndex) => {
    const notes = triad.midiNotes
    if (isArpeggiating) {
      // Sort notes based on arpeggio type
      const sortedNotes = [...notes].sort((a, b) => a - b)
      let arpeggioNotes: number[]
      
      switch (arpeggioType) {
        case 'ascending':
          arpeggioNotes = sortedNotes
          break
        case 'descending':
          arpeggioNotes = sortedNotes.reverse()
          break
        case 'alternating':
          arpeggioNotes = chordIndex % 2 === 0 ? sortedNotes : sortedNotes.reverse()
          break
        default:
          arpeggioNotes = sortedNotes
      }

      // Add note events for each note in the arpeggio
      arpeggioNotes.forEach((note, noteIndex) => {
        // Note on event
        const isFirstNoteOfFirstChord = noteIndex === 0 && chordIndex === 0
        const isFirstNoteOfChord = noteIndex === 0
        
        trackEvents.push([
          isFirstNoteOfFirstChord ? 0 :
          isFirstNoteOfChord ? ticksPerNote : // First note starts after last note of previous chord
          ticksPerNote, // Other notes start after previous note
          0x90,
          note,
          0x50,
        ])

        // Note off event
        trackEvents.push([
          ticksPerNote, // All notes last for one third of a beat
          0x80,
          note,
          0x00,
        ])
      })

    } else {
      // Chord mode - all notes start and end together
      if (chordIndex > 0) {
        // End previous chord
        sequence[chordIndex - 1].midiNotes.forEach((note, index) => {
          trackEvents.push([
            index === 0 ? ticksPerBeat : 0,
            0x80,
            note,
            0x00,
          ])
        })
      }

      // Start current chord
      notes.forEach((note, index) => {
        trackEvents.push([
          index === 0 && chordIndex === 0 ? 0 : 0,
          0x90,
          note,
          0x50,
        ])
      })
    }
  })

  // Add final note-off events for the last chord if not in arpeggio mode
  if (!isArpeggiating && sequence.length > 0) {
    sequence[sequence.length - 1].midiNotes.forEach((note, index) => {
      trackEvents.push([
        index === 0 ? ticksPerBeat : 0,
        0x80,
        note,
        0x00,
      ])
    })
  }

  // End of track
  trackEvents.push([0, 0xFF, 0x2F, 0x00])

  // Convert track events to bytes
  const trackData = []
  trackEvents.forEach((event) => {
    trackData.push(...event)
  })

  // Create final MIDI data
  const finalMidiData = new Uint8Array([
    ...midiData,
    ...trackData,
  ])

  // Update track length
  const trackLength = trackData.length
  finalMidiData[18] = (trackLength >> 24) & 0xFF
  finalMidiData[19] = (trackLength >> 16) & 0xFF
  finalMidiData[20] = (trackLength >> 8) & 0xFF
  finalMidiData[21] = trackLength & 0xFF

  // Create blob and download
  const blob = new Blob([finalMidiData], { type: 'audio/midi' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  
  // Format filename: convert spaces to dashes and make lowercase
  const formattedSongName = songName ? songName.trim().toLowerCase().replace(/\s+/g, '-') : 'chord-sequence'
  a.download = `${formattedSongName}-chord-flow.mid`
  
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
