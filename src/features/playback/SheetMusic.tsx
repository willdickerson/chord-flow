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
  const visualObjRef = useRef<unknown>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const { sequence, currentPosition } = usePlaybackState(() => {})

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

  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const targetWidth = containerWidth - 40
      const baseWidth = isMobile ? 400 : 900

      const newScale = Math.min(isMobile ? 1.2 : 2, targetWidth / baseWidth)
      const scale = newScale
      const staffwidth = isMobile ? 400 : 900

      if (divRef.current) {
        const visualObj = ABCJS.renderAbc(
          divRef.current,
          `
            X:1
            M:4/4
            L:1/4
            K:C
            z|]`,
          {
            add_classes: true,
            staffwidth,
            scale,
            format: {
              stretchlast: false,
            },
            paddingbottom: 0,
            paddingtop: 0,
            selectionColor: 'transparent',
            dragging: false,
            selectTypes: [],
          }
        )

        // Store the visualObj for reference
        visualObjRef.current = visualObj
      }
    }

    // Calculate scale immediately
    calculateScale()

    return () => {}
  }, [isMobile])

  // Effect to center the staff
  useEffect(() => {
    const centerStaff = () => {
      if (!containerRef.current || !divRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const staffWidth =
        divRef.current.querySelector('.abcjs-staff')?.getBoundingClientRect()
          .width || 0

      // Only add padding if the staff is narrower than the container
      if (staffWidth < containerWidth) {
        // Use different padding ratios for mobile and desktop
        const paddingRatio = isMobile ? 0.4 : 0.5
        const leftPadding = Math.max(
          0,
          (containerWidth - staffWidth) * paddingRatio
        )
        divRef.current.style.paddingLeft = `${leftPadding}px`
      } else {
        divRef.current.style.paddingLeft = '0'
      }
    }

    const timeoutId = setTimeout(centerStaff, 0)

    window.addEventListener('resize', centerStaff)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', centerStaff)
    }
  }, [sequence, currentPosition, isMobile])

  useEffect(() => {
    if (!divRef.current) {
      return
    }

    let abcNotation: string

    const currentSequence = audioService.generateOptimalSequence()
    const position = audioService.getCurrentPosition()

    if (!currentSequence || currentSequence.length === 0) {
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
      const rowStartIndex = Math.floor(position / 4) * 4
      const rowChords = currentSequence.slice(
        rowStartIndex,
        Math.min(rowStartIndex + 4, currentSequence.length)
      )
      const measureNotes = rowChords.map((chord: Triad) => {
        const noteNames = chord.midiNotes.map(note => midiNoteToName(note))
        return `[${noteNames.join('')}]`
      })

      while (measureNotes.length < 4) {
        measureNotes.push('z')
      }

      const accidentalsByNote: { [key: string]: string } = {}
      const measureWithNaturals = measureNotes.map(chord => {
        const notes = chord.slice(1, -1).match(/(\^?[A-Za-g]'*,*)/g) || []

        const processedNotes = notes.map(note => {
          const noteLetter = note.match(/[A-Za-g]/)?.[0] || ''
          const hasSharp = note.startsWith('^')
          const octaveMarks = note.match(/['|,]+/)?.[0] || ''
          const prevAccidental = accidentalsByNote[noteLetter]
          const needsNatural = prevAccidental === '^' && !hasSharp

          accidentalsByNote[noteLetter] = hasSharp ? '^' : ''

          return `${hasSharp ? '^' : needsNatural ? '=' : ''}${noteLetter}${octaveMarks}`
        })

        return `[${processedNotes.join('')}]`
      })

      const totalBars = Math.ceil(currentSequence.length / 4)
      const currentBar = Math.floor(rowStartIndex / 4) + 1

      const barLine = currentBar === totalBars ? '|]' : '|'
      const measureWithBarLines = measureWithNaturals.join('') + barLine

      abcNotation = `
        X:1
        M:4/4
        L:1/4
        K:c
        ${measureWithBarLines}`.trim()
    }

    try {
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
          fill: #A4B494 !important;
          stroke: #A4B494 !important;
        }
      `
      document.head.appendChild(styleEl)

      if (divRef.current) {
        const visualObj = ABCJS.renderAbc(divRef.current, abcNotation, {
          add_classes: true,
          staffwidth: 400,
          scale: 1,
          format: {
            stretchlast: false,
          },
          paddingbottom: 0,
          paddingtop: 0,
          selectionColor: 'transparent',
          dragging: false,
          selectTypes: [],
        })

        visualObjRef.current = visualObj
      }

      return () => {
        document.head.removeChild(styleEl)
      }
    } catch (error) {
      console.error('Error rendering ABC notation:', error)
    }
  }, [activeNotes, isMobile])

  useEffect(() => {
    const updateSelection = () => {
      if (divRef.current) {
        const selectedNotes = divRef.current.querySelectorAll(
          '.abcjs-note_selected'
        )
        selectedNotes.forEach(note => {
          note.classList.remove('abcjs-note_selected')
        })

        if (activeNotes.length > 0) {
          const position = audioService.getCurrentPosition()
          const relativePosition = position % 4

          const notes = divRef.current.querySelectorAll('.abcjs-note')
          if (notes[relativePosition]) {
            notes[relativePosition].classList.add('abcjs-note_selected')
          }
        }
      }
    }

    updateSelection()

    const interval = setInterval(updateSelection, 100)
    return () => clearInterval(interval)
  }, [activeNotes])

  return (
    <div className="container mx-auto px-4">
      <div
        className="relative mx-auto mb-2"
        style={{
          height: '100px',
          maxWidth: '380px',
        }}
      >
        <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#2C1810] rounded-lg"></div>
        <div className="relative w-full h-full bg-[#F5E6D3] rounded-lg p-2">
          <div
            ref={containerRef}
            style={{
              width: '100%',
              height: '90px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              ref={divRef}
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
