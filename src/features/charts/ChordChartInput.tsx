import React, { useState, useRef, useEffect } from 'react'
import { Triad } from '../../common/types'
import { CHORD_CHARTS, convertChartToInputFormat } from './charts'
import { createShareableUrl } from '../../common/utils/urlUtils'
import { Share, Copy, X } from 'lucide-react'

export interface ChordChartInputProps {
  sequence: Triad[] | null
  currentPosition: number
  onPositionSelect: (position: number) => void
  isEnabled: boolean
  initialChordNames?: string[]
  isPlaying: boolean
  onNotesChange: (notes: number[]) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  audioService: any
  onChordSequenceChange: (chordSequence: string[]) => void
  onStop: () => void
  playChord: (chord: string, index: number) => void
  onEditingChange?: (isEditing: boolean) => void
  title?: string
  composer?: string
  onChartChange?: (
    chartData: { title: string; composer: string; chords: string[] } | null
  ) => void
}

export const ChordChartInput: React.FC<ChordChartInputProps> = ({
  sequence,
  currentPosition,
  onPositionSelect,
  initialChordNames,
  isPlaying,
  onNotesChange,
  onChordSequenceChange,
  onStop,
  playChord,
  onEditingChange,
  title: initialTitle,
  composer: initialComposer,
  onChartChange,
}) => {
  const [inputValue, setInputValue] = useState('')
  const [chartSearchValue, setChartSearchValue] = useState('')
  const [showChartSearch, setShowChartSearch] = useState(false)
  const [selectedChartIndex, setSelectedChartIndex] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [dropTarget, setDropTarget] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragOverlayRef = useRef<HTMLDivElement | null>(null)
  const dragSourceRef = useRef<Element | null>(null)
  const dragSourceIndexRef = useRef<number | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionRef = useRef<HTMLDivElement>(null)
  const [selectedChordIndex, setSelectedChordIndex] = useState(0)
  const chordListRef = useRef<HTMLDivElement>(null)
  const chartListRef = useRef<HTMLDivElement>(null)
  const [showShareModal, setShowShareModal] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  const charts = CHORD_CHARTS.map(chart => convertChartToInputFormat(chart))
  const giantStepsIndex = charts.findIndex(
    chart => chart.title === 'Giant Steps'
  )

  const [currentChart, setCurrentChart] = useState(
    initialTitle && initialComposer
      ? {
          title: initialTitle,
          composer: initialComposer,
          chords:
            initialChordNames?.map(chord => ({
              id: Math.random().toString(),
              value: chord,
            })) || [],
        }
      : giantStepsIndex >= 0
        ? charts[giantStepsIndex]
        : charts[0]
  )
  const [previousChart, setPreviousChart] = useState(
    initialTitle && initialComposer
      ? {
          title: initialTitle,
          composer: initialComposer,
          chords:
            initialChordNames?.map(chord => ({
              id: Math.random().toString(),
              value: chord,
            })) || [],
        }
      : giantStepsIndex >= 0
        ? charts[giantStepsIndex]
        : charts[0]
  )
  const [chords, setChords] = useState(
    sequence
      ? sequence.map(t => ({
          id: Math.random().toString(),
          value: t.chordName,
        }))
      : currentChart.chords
  )

  useEffect(() => {
    if (sequence) {
      setChords(
        sequence.map(t => ({
          id: Math.random().toString(),
          value: t.chordName,
        }))
      )
    }
  }, [sequence])

  useEffect(() => {
    if (currentChart && currentChart.chords.length > 0) {
      setPreviousChart(currentChart)
    }
  }, [currentChart])

  useEffect(() => {
    if (isEditing && onEditingChange) {
      onEditingChange(true)
    } else if (!isEditing && onEditingChange) {
      onEditingChange(false)
    }
  }, [isEditing, onEditingChange])

  useEffect(() => {
    if (initialChordNames && initialTitle && initialComposer) {
      const newChords = initialChordNames.map(chord => ({
        id: Math.random().toString(),
        value: chord,
      }))
      setChords(newChords)
      setCurrentChart({
        title: initialTitle,
        composer: initialComposer,
        chords: newChords,
      })
    }
  }, []) // Only run on mount

  useEffect(() => {
    if (initialChordNames) {
      const newChords = initialChordNames.map(chord => ({
        id: Math.random().toString(),
        value: chord,
      }))
      setChords(newChords)
    }
  }, [initialChordNames])

  const handleChordClick = async (chord: string, index: number) => {
    if (isEditing) return

    onPositionSelect(index)

    if (isPlaying) {
      onStop()
    }

    await playChord(chord, index)
  }

  const handleChartChange = (newChords: typeof chords) => {
    setChords(newChords)
    if (!isPlaying) {
      onChordSequenceChange(newChords.map(c => c.value))
    }
  }

  const handleEditStart = () => {
    setPreviousChart({ ...currentChart, chords: [...chords] })
    setIsEditing(true)
    onNotesChange([])
  }

  const handleEditCancel = () => {
    if (previousChart) {
      setCurrentChart(previousChart)
      setChords(previousChart.chords)
      onChordSequenceChange(previousChart.chords.map(c => c.value))
    }
    setIsEditing(false)
    onPositionSelect(0)
  }

  const handleEditDone = () => {
    if (chords.length < 1) return
    setIsEditing(false)
  }

  const handleNewChart = () => {
    setPreviousChart({ ...currentChart, chords: [...chords] })
    const newChart = {
      title: 'Untitled Chart',
      composer: 'Unknown',
      chords: [],
    }
    setCurrentChart(newChart)
    setChords([])
    onChordSequenceChange([])
    setIsEditing(true)
    setInputValue('')
  }

  const handleDeleteChord = (index: number) => {
    if (isPlaying) return
    const newChords = [...chords]
    newChords.splice(index, 1)
    handleChartChange(newChords)
  }

  const generateValidChords = () => {
    const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const modifiers = ['', '#', 'b']
    const types = [
      '',
      'm',
      'maj7',
      '7',
      '7b5',
      'maj7b5',
      'm7',
      'm7b5',
      'm7#5',
      'maj7#5',
      'dim',
      'dim7',
    ]

    return notes.flatMap(note =>
      modifiers.flatMap(mod => types.map(type => note + mod + type))
    )
  }

  const [validChords] = useState(generateValidChords())
  const [showChordSuggestions, setShowChordSuggestions] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowChordSuggestions(false)
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setShowChartSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (chordListRef.current) {
      const selectedElement = chordListRef.current.children[
        selectedChordIndex
      ] as HTMLElement
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedChordIndex])

  useEffect(() => {
    if (chartListRef.current) {
      const selectedElement = chartListRef.current.children[
        selectedChartIndex
      ] as HTMLElement
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedChartIndex])

  const handleChordKeyDown = (e: React.KeyboardEvent) => {
    const filteredChords = validChords.filter(chord =>
      chord.toLowerCase().includes(inputValue.toLowerCase())
    )

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedChordIndex(prev =>
          prev < filteredChords.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedChordIndex(prev => (prev > 0 ? prev - 1 : prev))
        break
      case 'Enter':
        e.preventDefault()
        if (filteredChords.length > 0) {
          handleAddChord(filteredChords[selectedChordIndex])
        }
        break
      case 'Escape':
        e.preventDefault()
        setShowChordSuggestions(false)
        break
    }
  }

  const handleChartKeyDown = (e: React.KeyboardEvent) => {
    const filteredCharts = charts.filter(
      chart =>
        chart.title.toLowerCase().includes(chartSearchValue.toLowerCase()) ||
        chart.composer.toLowerCase().includes(chartSearchValue.toLowerCase())
    )

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedChartIndex(prev =>
          prev < filteredCharts.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedChartIndex(prev => (prev > 0 ? prev - 1 : prev))
        break
      case 'Enter':
        e.preventDefault()
        if (filteredCharts.length > 0) {
          const selectedChart = filteredCharts[selectedChartIndex]
          setPreviousChart({ ...currentChart, chords: [...chords] })
          setCurrentChart(selectedChart)
          setChords(selectedChart.chords)
          if (currentPosition > 0) {
            onPositionSelect(0)
          }
          onNotesChange([])
          onChordSequenceChange(selectedChart.chords.map(chord => chord.value))
          setShowChartSearch(false)
          setSelectedChartIndex(0)
          setChartSearchValue('')
        }
        break
      case 'Escape':
        e.preventDefault()
        setShowChartSearch(false)
        break
    }
  }

  const handleAddChord = (chord: string) => {
    if (isPlaying) return
    const newChord = { id: Math.random().toString(), value: chord }
    handleChartChange([...chords, newChord])
    setInputValue('')
    setShowChordSuggestions(false)
  }

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (e.button !== 0 || !isEditing) return

    const target = e.target as Element
    if (target.closest('button')) return

    e.preventDefault()
    dragSourceRef.current = e.currentTarget
    dragSourceIndexRef.current = index

    const overlay = document.createElement('div')
    overlay.className = 'fixed pointer-events-none z-50 text-[#2C1810]'
    overlay.style.width = `${e.currentTarget.offsetWidth}px`
    overlay.innerHTML = e.currentTarget.innerHTML
    overlay.style.transform = 'translate(-50%, -50%)'
    overlay.style.background = '#F5E6D3'
    overlay.style.padding = '0.375rem 0.75rem'
    overlay.style.borderRadius = '0.375rem'
    overlay.style.fontSize = '0.875rem'
    overlay.style.lineHeight = '1.25rem'
    overlay.style.textAlign = 'center'
    overlay.style.fontWeight = '500'
    overlay.style.border = '1px solid rgba(132, 108, 91, 0.2)'
    document.body.appendChild(overlay)
    dragOverlayRef.current = overlay

    overlay.style.left = `${e.clientX}px`
    overlay.style.top = `${e.clientY}px`

    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || dragSourceIndexRef.current === null) return

    if (dragOverlayRef.current) {
      dragOverlayRef.current.style.left = `${e.clientX}px`
      dragOverlayRef.current.style.top = `${e.clientY}px`
    }

    const chordElements = Array.from(
      document.querySelectorAll('[data-chord-index]')
    )
    const sourceIndex = dragSourceIndexRef.current

    const targetElement = chordElements.find(element => {
      const rect = element.getBoundingClientRect()
      return (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      )
    })

    if (targetElement) {
      const targetIndex = parseInt(
        targetElement.getAttribute('data-chord-index') || '-1'
      )
      if (targetIndex !== -1 && targetIndex !== sourceIndex) {
        const newChords = [...chords]
        const [movedChord] = newChords.splice(sourceIndex, 1)
        newChords.splice(targetIndex, 0, movedChord)
        handleChartChange(newChords)
        setDropTarget(targetIndex)
        dragSourceIndexRef.current = targetIndex
      }
    }
  }

  const handleMouseUp = () => {
    if (
      isDragging &&
      dropTarget !== null &&
      dragSourceIndexRef.current !== null
    ) {
      const sourceIndex = dragSourceIndexRef.current
      const newChords = [...chords]
      const [movedChord] = newChords.splice(sourceIndex, 1)
      newChords.splice(dropTarget, 0, movedChord)
      handleChartChange(newChords)
    }

    if (dragOverlayRef.current) {
      document.body.removeChild(dragOverlayRef.current)
      dragOverlayRef.current = null
    }

    setIsDragging(false)
    setDropTarget(null)
    dragSourceRef.current = null
    dragSourceIndexRef.current = null
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
    }
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  })

  const handleShare = () => {
    const chartData = {
      title: currentChart.title,
      composer: currentChart.composer,
      chords: chords.map(c => c.value),
    }
    const shareableUrl = createShareableUrl(chartData)
    setShareUrl(shareableUrl)
    setShowShareModal(true)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
  }

  const handleChartSelect = (chart: typeof currentChart, index: number) => {
    setCurrentChart(chart)
    setPreviousChart(chart)
    setChords(chart.chords)
    onChordSequenceChange(chart.chords.map(c => c.value))
    setShowChartSearch(false)
    setSelectedChartIndex(index)
    setChartSearchValue('')
    if (onChartChange) {
      onChartChange({
        title: chart.title,
        composer: chart.composer,
        chords: chart.chords.map(c => c.value),
      })
    }
  }

  return (
    <div className="space-y-4 max-w-full">
      <div className="flex justify-center">
        <div className="w-[656px] flex items-center">
          <div className="flex-1 relative text-center">
            <h2 className="text-lg font-medium text-[#2C1810]">
              {currentChart.title === 'Untitled Chart'
                ? 'Chord Chart'
                : currentChart.title}
            </h2>
            {currentChart.title !== 'Untitled Chart' && (
              <p className="text-sm text-[#846C5B]">{currentChart.composer}</p>
            )}
          </div>
          <button
            onClick={handleShare}
            className="min-w-8 h-8 flex items-center justify-center rounded-md bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20 transition-colors"
            aria-label="Share"
          >
            <Share size={16} />
          </button>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed -top-4 -right-4 -bottom-4 -left-4 bg-black/50 flex items-center justify-center z-[9999] p-4">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 w-full max-w-md mx-auto shadow-xl">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <h3 className="text-lg font-medium mb-3 pr-8">Share Chart</h3>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 p-2 bg-gray-50 rounded border border-gray-200 text-sm overflow-x-auto"
              />
              <button
                onClick={handleCopy}
                className="shrink-0 min-w-8 h-8 flex items-center justify-center rounded-md bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20 transition-colors"
                aria-label="Copy URL"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-2 w-[656px] p-4 border border-[#846C5B]/20 rounded-lg bg-[#F5E6D3]/50">
          {chords.map(({ id, value }, index) => (
            <div
              key={id}
              data-chord-index={index}
              onMouseDown={e => {
                if (isEditing) {
                  handleMouseDown(e, index)
                } else {
                  handleChordClick(value, index)
                }
              }}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium text-center transition-all duration-100 ease-in-out transform origin-center relative group
                ${!isEditing && index === currentPosition ? 'bg-[#A6B39C]' : 'bg-[#F5E6D3]'}
                ${isEditing ? 'cursor-grab active:cursor-grabbing' : sequence ? 'cursor-pointer' : ''}
                ${dragSourceIndexRef.current === index ? 'invisible' : ''}
                text-[#2C1810] border border-[#846C5B]/20
              `}
            >
              {isEditing && (
                <button
                  onClick={e => {
                    e.stopPropagation()
                    handleDeleteChord(index)
                  }}
                  onMouseEnter={() => {
                    if (isDragging && dragOverlayRef.current) {
                      document.body.style.cursor = 'pointer'
                    }
                  }}
                  onMouseLeave={() => {
                    if (isDragging && dragOverlayRef.current) {
                      document.body.style.cursor = 'grabbing'
                    }
                  }}
                  className={`
                    absolute -top-2.5 -right-2.5 w-5 h-5 flex items-center justify-center
                    bg-[#A6B39C] hover:bg-[#95A18C] text-[#F5E6D3] border border-[#F5E6D3] rounded-[50%]
                    leading-[0] p-0 overflow-hidden transition-colors
                    ${isDragging ? 'pointer-events-none' : ''}
                  `}
                >
                  <span className="relative -top-[1px] text-xs leading-[0]">
                    −
                  </span>
                </button>
              )}
              {value}
            </div>
          ))}
        </div>
      </div>

      {!isEditing && (
        <div className="flex justify-center mt-4">
          <div className="w-[656px] flex">
            <div className="flex gap-2">
              <button
                onClick={handleNewChart}
                disabled={isPlaying}
                className={`
                  px-1.5 py-1.5 rounded-md text-sm font-medium
                  ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A6B39C]/20'}
                  bg-[#A6B39C]/10 text-[#2C1810] border border-[#846C5B]/20
                `}
              >
                New
              </button>
              <button
                onClick={handleEditStart}
                disabled={isPlaying}
                className={`
                  px-1.5 py-1.5 rounded-md text-sm font-medium
                  ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A6B39C]/20'}
                  bg-[#A6B39C]/10 text-[#2C1810] border border-[#846C5B]/20
                `}
              >
                Edit
              </button>
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={chartSearchValue}
                  onChange={e => {
                    setChartSearchValue(e.target.value)
                    setSelectedChartIndex(0)
                    if (!showChartSearch) setShowChartSearch(true)
                  }}
                  onFocus={() => setShowChartSearch(true)}
                  onKeyDown={handleChartKeyDown}
                  placeholder="Search Charts"
                  disabled={isPlaying || isEditing}
                  className={`
                    w-48 px-3 py-1.5 rounded-md text-sm font-medium
                    ${isPlaying || isEditing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A6B39C]/10'}
                    bg-[#F5E6D3] text-[#2C1810] border border-[#846C5B]/20
                    focus:outline-none focus:border-[#A6B39C] placeholder-[#846C5B]/60
                  `}
                />
                {showChartSearch && (
                  <div
                    ref={searchRef}
                    className="absolute left-0 z-10 mt-1 w-full bg-[#F5E6D3] rounded-md border border-[#846C5B]/20"
                  >
                    <div
                      className="max-h-48 overflow-y-auto chart-search-scrollbar"
                      ref={chartListRef}
                    >
                      {charts
                        .filter(
                          chart =>
                            chart.title
                              .toLowerCase()
                              .includes(chartSearchValue.toLowerCase()) ||
                            chart.composer
                              .toLowerCase()
                              .includes(chartSearchValue.toLowerCase())
                        )
                        .map((chart, index) => (
                          <div
                            key={chart.title}
                            onClick={() => handleChartSelect(chart, index)}
                            className={`
                              px-3 py-2 cursor-pointer hover:bg-[#A6B39C]/10
                              ${selectedChartIndex === index ? 'bg-[#A6B39C]/20' : ''}
                            `}
                          >
                            <div className="font-medium text-[#2C1810]">
                              {chart.title}
                            </div>
                            <div className="text-sm text-[#846C5B]">
                              {chart.composer}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="flex justify-center mt-4">
          <div className="w-[656px] flex gap-2 sm:px-0 px-4">
            <div className="relative w-64 sm:w-64 w-40">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={e => {
                  setInputValue(e.target.value)
                  setSelectedChordIndex(0)
                  if (e.target.value && !showChordSuggestions) {
                    setShowChordSuggestions(true)
                  }
                }}
                onFocus={() => {
                  if (inputValue) {
                    setShowChordSuggestions(true)
                  }
                }}
                onKeyDown={handleChordKeyDown}
                placeholder="Type a chord (e.g., Am7)"
                className="hidden sm:block w-full px-3 py-1.5 rounded-md text-sm border border-[#846C5B]/20 focus:outline-none focus:border-[#A6B39C] bg-[#F5E6D3] text-[#2C1810] placeholder-[#846C5B]/60"
              />
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={e => {
                  setInputValue(e.target.value)
                  setSelectedChordIndex(0)
                  if (e.target.value && !showChordSuggestions) {
                    setShowChordSuggestions(true)
                  }
                }}
                onFocus={() => {
                  if (inputValue) {
                    setShowChordSuggestions(true)
                  }
                }}
                onKeyDown={handleChordKeyDown}
                placeholder="Type a chord"
                className="block sm:hidden w-full px-3 py-1.5 rounded-md text-sm border border-[#846C5B]/20 focus:outline-none focus:border-[#A6B39C] bg-[#F5E6D3] text-[#2C1810] placeholder-[#846C5B]/60"
              />
              {showChordSuggestions && (
                <div
                  ref={suggestionRef}
                  className="absolute left-0 z-10 mt-1 w-full bg-[#F5E6D3] rounded-md border border-[#846C5B]/20"
                >
                  <div
                    className="max-h-48 overflow-y-auto chart-search-scrollbar"
                    ref={chordListRef}
                  >
                    {validChords
                      .filter(chord =>
                        chord.toLowerCase().includes(inputValue.toLowerCase())
                      )
                      .map((chord, index) => (
                        <div
                          key={chord}
                          onClick={() => handleAddChord(chord)}
                          className={`
                            px-3 py-2 cursor-pointer hover:bg-[#A6B39C]/10
                            ${selectedChordIndex === index ? 'bg-[#A6B39C]/20' : ''}
                          `}
                        >
                          <div className="font-medium text-[#2C1810]">
                            {chord}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleEditDone}
                disabled={chords.length < 1}
                className={`px-3 py-1.5 rounded-md text-sm font-medium bg-[#A6B39C]/10 text-[#2C1810] border border-[#846C5B]/20 ${chords.length < 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A6B39C]/20'}`}
              >
                Done
              </button>
              <button
                onClick={handleEditCancel}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-[#A6B39C]/10 text-[#2C1810] border border-[#846C5B]/20 hover:bg-[#A6B39C]/20"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
