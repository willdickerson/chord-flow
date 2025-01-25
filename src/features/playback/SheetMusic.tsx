import React, { useEffect, useRef, useState } from 'react'
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const { sequence, currentPosition } = usePlaybackState(notes => {
    // We don't need to handle notes changes here
  })

  // Effect to handle mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  // Effect to calculate the appropriate scale
  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return;
      
      // Base width is 900 (from staffwidth)
      // We want to ensure this fits within the container with some padding
      const containerWidth = containerRef.current.offsetWidth
      const targetWidth = containerWidth - 40 // 20px padding on each side
      const baseWidth = isMobile ? 400 : 900
      
      // Calculate scale that would make the staff fit
      const newScale = Math.min(isMobile ? 1.2 : 2, (targetWidth / baseWidth))
      const scale = newScale
      const staffwidth = isMobile ? 400 : 900

      // Render the ABC notation
      const visualObj = ABCJS.renderAbc(divRef.current, `
X:1
M:4/4
L:1/4
K:C
z|]`, {
        add_classes: true,
        staffwidth,
        scale,
        format: {
          alignbars: 4,
          stretchlast: false,
        },
        paddingbottom: 0,
        paddingtop: 0,
        selectionColor: "transparent",
        dragging: false,
        selectTypes: [],
      })

      // Store the visualObj for reference
      visualObjRef.current = visualObj
    }

    // Calculate scale immediately
    calculateScale()
    
    return () => {
    }
  }, [isMobile])

  // Effect to center the staff
  useEffect(() => {
    const centerStaff = () => {
      if (!containerRef.current || !divRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth
      const staffWidth = divRef.current.querySelector('.abcjs-staff')?.getBoundingClientRect().width || 0
      
      // Only add padding if the staff is narrower than the container
      if (staffWidth < containerWidth) {
        // Use different padding ratios for mobile and desktop
        const paddingRatio = isMobile ? 0.4 : 0.5
        const leftPadding = Math.max(0, (containerWidth - staffWidth) * paddingRatio)
        divRef.current.style.paddingLeft = `${leftPadding}px`
      } else {
        divRef.current.style.paddingLeft = '0'
      }
    }

    // Center after a short delay to ensure the staff has rendered
    const timeoutId = setTimeout(centerStaff, 0)
    
    // Also center on window resize
    window.addEventListener('resize', centerStaff)
    
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', centerStaff)
    }
  }, [sequence, currentPosition, isMobile])

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
[${noteNames.join('')}]|]`.trim()
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
        console.log('Converted notes:', noteNames);
        return `[${noteNames.join('')}]`
      })

      console.log('Measure notes before naturals:', measureNotes);

      // Pad with rests if we don't have 4 chords
      while (measureNotes.length < 4) {
        measureNotes.push('z')
      }

      // Track accidentals in the measure
      const accidentalsByNote: { [key: string]: string } = {}
      const measureWithNaturals = measureNotes.map((chord, index) => {
        // Remove brackets and split into individual notes
        const notes = chord.slice(1, -1).match(/(\^?[A-Za-g]'*,*)/g) || []
        
        const processedNotes = notes.map(note => {
          const noteLetter = note.match(/[A-Za-g]/)?.[0] || ''
          const hasSharp = note.startsWith('^')
          const octaveMarks = note.match(/['|,]+/)?.[0] || ''
          
          // Check if this note had a different accidental before
          const prevAccidental = accidentalsByNote[noteLetter]
          const needsNatural = prevAccidental === '^' && !hasSharp
          
          // Update accidental tracking
          accidentalsByNote[noteLetter] = hasSharp ? '^' : ''
          
          // Construct the note with natural if needed
          return `${hasSharp ? '^' : (needsNatural ? '=' : '')}${noteLetter}${octaveMarks}`
        })
        
        return `[${processedNotes.join('')}]`
      })

      // Get total number of bars in the sequence
      const totalBars = Math.ceil(currentSequence.length / 4)
      const currentBar = Math.floor(rowStartIndex / 4) + 1

      // Add appropriate bar lines
      const barLine = currentBar === totalBars ? '|]' : '|'
      const measureWithBarLines = measureWithNaturals.join('') + barLine

      abcNotation = `
X:1
M:4/4
L:1/4
K:c
${measureWithBarLines}`.trim()
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
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
        .abcjs-container svg {
          position: static !important;
          left: auto !important;
          transform: scale(1) !important;
          display: block !important;
          max-width: 100% !important;
          height: auto !important;
          color: #2C1810 !important;
          pointer-events: none !important;
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
        // staffwidth: isMobile ? 400 : 900,
        // scale: isMobile ? 1.2 : 2,
        staffwidth: 400,
        scale: 1.2,
        format: {
          alignbars: 4,
          stretchlast: false,
        },
        paddingbottom: 0,
        paddingtop: 0,
        selectionColor: "transparent",
        dragging: false,
        selectTypes: [],
      })

      // Store the visualObj for reference
      visualObjRef.current = visualObj

      // console.log('Successfully rendered ABC notation')

      // Clean up the style element when component updates
      return () => {
        document.head.removeChild(styleEl)
      }
    } catch (error) {
      console.error('Error rendering ABC notation:', error)
    }
  }, [activeNotes, isMobile])

  // Effect to update selection when position changes
  useEffect(() => {
    const updateSelection = () => {
      if (divRef.current) {
        // Remove previous selections
        const selectedNotes = divRef.current.querySelectorAll(
          '.abcjs-note_selected'
        )
        selectedNotes.forEach(note => {
          note.classList.remove('abcjs-note_selected')
        })

        // Only add selection if we have active notes
        if (activeNotes.length > 0) {
          const position = audioService.getCurrentPosition()
          const relativePosition = position % 4

          // Find and select the current note
          const notes = divRef.current.querySelectorAll('.abcjs-note')
          if (notes[relativePosition]) {
            notes[relativePosition].classList.add('abcjs-note_selected')
          }
        }
      }
    }

    // Update immediately
    updateSelection()

    // Then update every 100ms
    const interval = setInterval(updateSelection, 100)
    return () => clearInterval(interval)
  }, [activeNotes])

  return (
    <div className="container mx-auto px-4">
      <div className="relative mx-auto mb-2" style={{ 
        height: '180px',
        maxWidth: '480px' // 400px staff + some padding
      }}>
        <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#2C1810] rounded-lg"></div>
        <div className="relative w-full h-full bg-[#F5E6D3] rounded-lg p-2">
          <div 
            ref={containerRef} 
            style={{ 
              width: '100%',
              height: '176px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div 
              ref={divRef}
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
