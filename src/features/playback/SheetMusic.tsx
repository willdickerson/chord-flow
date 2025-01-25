import React, { useEffect, useRef } from 'react'
import ABCJS from 'abcjs'
import { midiNoteToName } from '../../common/utils/midiUtils'
import { usePlaybackState } from './usePlaybackState'
import { Triad } from '../../common/types'
import { audioService } from '../../services/audioService'

interface SheetMusicProps {
  activeNotes: number[]
}

export const SheetMusic: React.FC<SheetMusicProps> = ({ activeNotes }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const visualObjRef = useRef<any>(null)
  const { sequence, currentPosition } = usePlaybackState(notes => {
    // We don't need to handle notes changes here
  })

  // Effect to update selection when position changes
  useEffect(() => {
    const updateSelection = () => {
      if (divRef.current) {
        const position = audioService.getCurrentPosition()
        const relativePosition = position % 4
        console.log('Updating selection for position:', {
          position,
          relativePosition,
        })

        // Remove previous selections
        const selectedNotes = divRef.current.querySelectorAll(
          '.abcjs-note_selected'
        )
        selectedNotes.forEach(note => {
          note.classList.remove('abcjs-note_selected')
        })

        // Find and select the current note
        const notes = divRef.current.querySelectorAll('.abcjs-note')
        if (notes[relativePosition]) {
          notes[relativePosition].classList.add('abcjs-note_selected')
          console.log('Selected note:', notes[relativePosition])
        }
      }
    }

    // Update immediately
    updateSelection()

    // Then update every 100ms
    const interval = setInterval(updateSelection, 100)

    return () => clearInterval(interval)
  }, [])

  // Effect to render the sheet music
  useEffect(() => {
    console.log('Render effect running with:', {
      sequence,
      currentPosition,
      activeNotes,
    })

    if (!divRef.current) {
      console.log('No div ref')
      return
    }

    let abcNotation: string

    // Always generate a fresh sequence to ensure we have the latest chords
    const currentSequence = audioService.generateOptimalSequence()
    const position = audioService.getCurrentPosition()
    console.log('Current sequence and position:', { currentSequence, position })

    if (!currentSequence || currentSequence.length === 0) {
      // If we don't have any sequence yet, just show the active notes
      const noteNames =
        activeNotes.length > 0
          ? activeNotes
              .map(note => midiNoteToName(note))
              .map(note => note.replace('#', '^').replace('b', '_'))
          : ['z']

      abcNotation = `
X:1
M:4/4
L:1/4
K:C
[${noteNames.join('')}]4|]`.trim()
    } else {
      // Show the current row of chords from the sequence
      const rowStartIndex = Math.floor(position / 4) * 4
      console.log('Row start index:', rowStartIndex)
      const rowChords = currentSequence.slice(
        rowStartIndex,
        Math.min(rowStartIndex + 4, currentSequence.length)
      )
      console.log('Current row:', rowChords)

      const measureNotes = rowChords.map((chord: Triad, index: number) => {
        const noteNames = chord.midiNotes
          .map(note => midiNoteToName(note))
          .map(note => note.replace('#', '^').replace('b', '_'))
        return `[${noteNames.join('')}]`
      })

      // Pad with rests if we don't have 4 chords
      while (measureNotes.length < 4) {
        measureNotes.push('z')
      }

      abcNotation = `
X:1
M:4/4
L:1/4
K:C
${measureNotes.join('')}|]`.trim()
    }

    console.log('ABC Notation:', abcNotation)

    try {
      // Create a style element for our custom CSS
      const styleEl = document.createElement('style')
      styleEl.textContent = `
        .abcjs-container {
          background: transparent !important;
          box-shadow: none !important;
          width: 100% !important;
          color: #2C1810 !important;
        }
        .abcjs-container svg {
          position: static !important;
          left: auto !important;
          transform: scale(1) !important;
          display: block !important;
          max-width: 100% !important;
          height: auto !important;
          color: #2C1810 !important;
        }
        .abcjs-note:not(.abcjs-note_selected) *, .abcjs-staff-extra *, .abcjs-bar * {
          fill: #2C1810 !important;
          stroke: #2C1810 !important;
        }
        .abcjs-staff * {
          fill: #2C1810 !important;
          stroke: #2C1810 !important;
        }
        .abcjs-note_selected * {
          fill: #90B77D !important;
          stroke: #90B77D !important;
        }
      `
      document.head.appendChild(styleEl)

      // Render the sheet music
      const visualObj = ABCJS.renderAbc(divRef.current, abcNotation, {
        add_classes: true,
        staffwidth: 900,
        scale: 2,
        paddingleft: 130,
        format: {
          alignbars: 4,
          stretchlast: false,
        },
        paddingbottom: 0,
        paddingtop: 0,
        oneSvgPerLine: true,
        clickListener: (abcelem: any, tuneNumber: number, classes: string) => {
          console.log('Click event:', { abcelem, tuneNumber, classes })
          // When a note is clicked, select it
          if (abcelem.svgEl) {
            // Remove previous selections
            const selectedNotes = divRef.current?.querySelectorAll(
              '.abcjs-note_selected'
            )
            selectedNotes?.forEach(note => {
              note.classList.remove('abcjs-note_selected')
            })

            // Add selection to clicked note
            abcelem.svgEl.classList.add('abcjs-note_selected')
          }
        },
        selectTypes: ['note'],
      })

      // Store the visualObj for reference
      visualObjRef.current = visualObj

      console.log('Successfully rendered ABC notation')

      // Clean up the style element when component updates
      return () => {
        document.head.removeChild(styleEl)
      }
    } catch (error) {
      console.error('Error rendering ABC notation:', error)
    }
  }, [activeNotes])

  return (
    <div className="w-full overflow-x-auto">
      <div className="max-w-[900px] mx-auto grid place-items-center">
        <div ref={divRef} className="w-full" />
      </div>
    </div>
  )
}
