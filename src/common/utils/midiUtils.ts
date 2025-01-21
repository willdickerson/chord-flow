import { ChordSequence, Triad } from '../types/'
import { AudioService } from '../../services/audioService'

export const downloadMidiFile = (
  sequence: ChordSequence | null,
  audioService: AudioService,
  songName?: string,
  composer?: string
) => {
  if (!sequence) return

  const isArpeggiating = audioService.isArpeggiating
  const arpeggioType = audioService.getArpeggioType()

  const midiData = new Uint8Array([
    // MIDI header
    0x4d,
    0x54,
    0x68,
    0x64, // MThd
    0x00,
    0x00,
    0x00,
    0x06, // Header size (6 bytes)
    0x00,
    0x00, // Format 0 (single track)
    0x00,
    0x01, // One track
    0x00,
    0x60, // 96 ticks per quarter note

    // Track header
    0x4d,
    0x54,
    0x72,
    0x6b, // MTrk

    // Track data length (placeholder)
    0x00,
    0x00,
    0x00,
    0x00,
  ])

  const trackEvents = []
  const ticksPerBeat = 96

  // Set tempo (120 BPM)
  trackEvents.push([
    0, // delta time
    0xff,
    0x51,
    0x03, // tempo meta event
    0x07,
    0xa1,
    0x20, // 500000 microseconds per quarter note (120 BPM)
  ])

  // Set time signature
  if (isArpeggiating) {
    trackEvents.push([
      0, // delta time
      0xff,
      0x58,
      0x04, // time signature meta event
      0x03, // numerator (3)
      0x02, // denominator (2^2 = 4, so 3/4 time)
      0x18, // clocks per metronome click (24 MIDI clocks per quarter note)
      0x08, // number of 32nd notes per 24 MIDI clocks (8)
    ])
  } else {
    trackEvents.push([
      0, // delta time
      0xff,
      0x58,
      0x04, // time signature meta event
      0x04, // numerator (4)
      0x02, // denominator (2^2 = 4, so 4/4 time)
      0x18, // clocks per metronome click
      0x08, // number of 32nd notes per 24 MIDI clocks
    ])
  }

  // Add title metadata if provided
  if (songName) {
    const titleBytes = Array.from(new TextEncoder().encode(songName))
    trackEvents.push([
      0, // delta time
      0xff,
      0x03, // Text event type for track/sequence name
      titleBytes.length, // Length of text
      ...titleBytes, // The text data
    ])
  }

  // Add composer metadata if provided
  if (composer) {
    const composerBytes = Array.from(
      new TextEncoder().encode(`Composer: ${composer}`)
    )
    trackEvents.push([
      0, // delta time
      0xff,
      0x01, // Text event type for generic text
      composerBytes.length, // Length of text
      ...composerBytes, // The text data
    ])
  }

  if (isArpeggiating) {
    // For arpeggio mode, flatten all notes into a single sequence
    const allNotes: number[] = []
    sequence.chords.forEach((triad: Triad, chordIndex: number) => {
      const sortedNotes = [...triad.midiNotes].sort((a, b) => a - b)
      let chordNotes: number[]

      switch (arpeggioType) {
        case 'ascending':
          chordNotes = sortedNotes
          break
        case 'descending':
          chordNotes = sortedNotes.reverse()
          break
        case 'alternating':
          chordNotes =
            chordIndex % 2 === 0 ? sortedNotes : sortedNotes.reverse()
          break
        default:
          chordNotes = sortedNotes
      }
      allNotes.push(...chordNotes)
    })

    // Add each note as a quarter note in sequence
    allNotes.forEach((note, index) => {
      if (index > 0) {
        // Note-off for previous note (happens at same time as current note-on)
        trackEvents.push([
          ticksPerBeat, // One beat since last event
          0x80,
          allNotes[index - 1],
          0x00,
        ])

        // Note-on for current note
        trackEvents.push([
          0, // Immediately after note-off
          0x90,
          note,
          0x50,
        ])
      } else {
        // First note just needs note-on
        trackEvents.push([0, 0x90, note, 0x50])
      }
    })

    // Final note-off for the last note
    if (allNotes.length > 0) {
      trackEvents.push([
        ticksPerBeat,
        0x80,
        allNotes[allNotes.length - 1],
        0x00,
      ])
    }
  } else {
    sequence.chords.forEach((triad: Triad, chordIndex: number) => {
      const notes = triad.midiNotes
      if (chordIndex > 0) {
        // End previous chord
        sequence.chords[chordIndex - 1].midiNotes.forEach((note, index) => {
          trackEvents.push([index === 0 ? ticksPerBeat : 0, 0x80, note, 0x00])
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
    })

    // Add final note-off events for the last chord
    if (sequence.chords.length > 0) {
      sequence.chords[sequence.chords.length - 1].midiNotes.forEach(
        (note, index) => {
          trackEvents.push([index === 0 ? ticksPerBeat : 0, 0x80, note, 0x00])
        }
      )
    }
  }

  // End of track
  trackEvents.push([0, 0xff, 0x2f, 0x00])

  // Convert track events to bytes
  const trackData: number[] = []
  trackEvents.forEach(event => {
    trackData.push(...event)
  })

  // Create final MIDI data
  const finalMidiData = new Uint8Array([...midiData, ...trackData])

  // Update track length
  const trackLength = trackData.length
  finalMidiData[18] = (trackLength >> 24) & 0xff
  finalMidiData[19] = (trackLength >> 16) & 0xff
  finalMidiData[20] = (trackLength >> 8) & 0xff
  finalMidiData[21] = trackLength & 0xff

  const blob = new Blob([finalMidiData], { type: 'audio/midi' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url

  const formattedSongName = songName
    ? songName.trim().toLowerCase().replace(/\s+/g, '-')
    : 'chord-sequence'
  a.download = `${formattedSongName}-chord-flow.mid`

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
