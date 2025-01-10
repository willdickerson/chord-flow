import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Triad } from '../../common/types';

export interface ChordChartInputProps {
  sequence: Triad[] | null;
  currentPosition: number;
  onPositionSelect: (position: number) => void;
  isEnabled: boolean;
  initialChordNames?: string[];
  isPlaying: boolean;
  onNotesChange: (notes: number[]) => void;
  audioService: any;
  onChordSequenceChange: (chordSequence: string[]) => void;
  onStop: () => void;
  playChord: (chord: string, index: number) => void;
  onEditingChange?: (isEditing: boolean) => void;
}

export const ChordChartInput: React.FC<ChordChartInputProps> = ({
  sequence,
  currentPosition,
  onPositionSelect,
  isEnabled,
  initialChordNames = [],
  isPlaying,
  onNotesChange,
  audioService,
  onChordSequenceChange,
  onStop,
  playChord,
  onEditingChange,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chartSearchValue, setChartSearchValue] = useState('');
  const [showChartSearch, setShowChartSearch] = useState(false);
  const [selectedChartIndex, setSelectedChartIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [draggedChord, setDraggedChord] = useState<{ id: string; value: string } | null>(null);
  const [dropTarget, setDropTarget] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOverlayRef = useRef<HTMLDivElement>(null);
  const dragSourceRef = useRef(null);
  const dragSourceIndexRef = useRef<number | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const displayedNotesRef = useRef<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const [tempChords, setTempChords] = useState([]);
  const [selectedChordIndex, setSelectedChordIndex] = useState(0);
  const chordListRef = useRef<HTMLDivElement>(null);
  const chartListRef = useRef<HTMLDivElement>(null);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  const charts = [
    {
      title: "Giant Steps",
      composer: "John Coltrane",
      chords: [
        'B', 'D', 'G', 'Bb', 'Eb', 'Eb', 'Am', 'D', 'G', 'Bb', 'Eb', 'F#',
        'B', 'B', 'Fm', 'Bb', 'Eb', 'Eb', 'Am', 'D', 'G', 'Bb', 'Eb', 'F#',
        'B', 'B', 'Fm', 'Bb', 'Eb', 'Eb', 'C#m', 'F#'
      ].map(chord => ({ id: Math.random().toString(), value: chord }))
    },
    {
      title: "Autumn Leaves",
      composer: "Joseph Kosma",
      chords: ['Am7', 'D7', 'Gmaj7', 'Cmaj7', 'F#m7b5', 'B7', 'Em'].map(chord => ({ id: Math.random().toString(), value: chord }))
    },
    {
      title: "All Blues",
      composer: "Miles Davis",
      chords: ['G7', 'G7', 'G7', 'G7', 'C7', 'C7', 'G7', 'G7', 'D7', 'C7', 'G7', 'D7'].map(chord => ({ id: Math.random().toString(), value: chord }))
    },
    {
      title: "Take Five",
      composer: "Paul Desmond",
      chords: ['Ebm', 'Bbm', 'Ebm', 'Bbm', 'Ebm', 'Bbm', 'Ebm', 'Db7'].map(chord => ({ id: Math.random().toString(), value: chord }))
    }
  ];

  const [currentChart, setCurrentChart] = useState(charts[0]);
  const [previousChart, setPreviousChart] = useState(charts[0]);
  const [chords, setChords] = useState(sequence ? sequence.map(t => ({ id: Math.random().toString(), value: t.chordName })) : currentChart.chords);

  useEffect(() => {
    if (sequence) {
      setChords(sequence.map(t => ({ id: Math.random().toString(), value: t.chordName })));
    }
  }, [sequence]);

  useEffect(() => {
    if (currentChart && currentChart.chords.length > 0) {
      setPreviousChart(currentChart);
    }
  }, [currentChart]);

  useEffect(() => {
    if (isEditing && onEditingChange) {
      onEditingChange(true);
    } else if (!isEditing && onEditingChange) {
      onEditingChange(false);
    }
  }, [isEditing, onEditingChange]);

  const handleChordClick = async (chord: string, index: number) => {
    console.log('ChordChartInput: handleChordClick called', { chord, index, isEditing });
    if (isEditing) return;

    // Update position immediately
    console.log('ChordChartInput: Updating position to', index);
    onPositionSelect(index);

    // If playing, stop first
    if (isPlaying) {
      console.log('ChordChartInput: Stopping playback');
      onStop();
    }

    // Play the clicked chord
    console.log('ChordChartInput: Playing chord', chord);
    await playChord(chord, index);
  };

  const handleChartChange = (newChords: typeof chords) => {
    setChords(newChords);
    if (!isPlaying) {
      onChordSequenceChange(newChords.map(c => c.value));
    }
  };

  const handleEditStart = () => {
    setPreviousChart({...currentChart, chords: [...chords]});
    setIsEditing(true);
    onNotesChange([]); // Clear keyboard lights
  };

  const handleEditCancel = () => {
    if (previousChart) {
      setCurrentChart(previousChart);
      setChords(previousChart.chords);
      onChordSequenceChange(previousChart.chords.map(c => c.value));
    }
    setIsEditing(false);
    onPositionSelect(0);
  };

  const handleEditSave = () => {
    const updatedChart = { ...currentChart, chords };
    // TODO: Save chart changes
    setIsEditing(false);
    setCurrentPosition(null);
  };

  const handleNewChart = () => {
    setPreviousChart({...currentChart, chords: [...chords]}); // Save current state before creating new
    const newChart = {
      title: "Untitled Chart",
      composer: "Unknown",
      chords: []
    };
    setCurrentChart(newChart);
    setChords([]);
    onChordSequenceChange([]);
    setIsEditing(true);
    setInputValue('');
  };

  const handleDeleteChord = (index: number) => {
    if (isPlaying) return;
    const newChords = [...chords];
    newChords.splice(index, 1);
    handleChartChange(newChords);
  };

  const generateValidChords = () => {
    const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const modifiers = ['', '#', 'b'];
    const types = ['', 'm', 'maj7', '7', '7b5', 'maj7b5', 'm7', 'm7b5', 'm7#5', 'maj7#5', 'dim', 'dim7'];
    
    return notes.flatMap(note => 
      modifiers.flatMap(mod => 
        types.map(type => note + mod + type)
      )
    );
  };

  const [validChords] = useState(generateValidChords());
  const [showChordSuggestions, setShowChordSuggestions] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle chord suggestions dropdown
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowChordSuggestions(false);
      }

      // Handle switch chart dropdown
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setShowChartSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (chordListRef.current) {
      const selectedElement = chordListRef.current.children[selectedChordIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedChordIndex]);

  useEffect(() => {
    if (chartListRef.current) {
      const selectedElement = chartListRef.current.children[selectedChartIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedChartIndex]);

  const handleChordKeyDown = (e: React.KeyboardEvent) => {
    const filteredChords = validChords.filter((chord) =>
      chord.toLowerCase().includes(inputValue.toLowerCase())
    );

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedChordIndex((prev) => 
          prev < filteredChords.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedChordIndex((prev) => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredChords.length > 0) {
          handleAddChord(filteredChords[selectedChordIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setShowChordSuggestions(false);
        break;
    }
  };

  const handleChartKeyDown = (e: React.KeyboardEvent) => {
    const filteredCharts = charts.filter((chart) =>
      chart.title.toLowerCase().includes(chartSearchValue.toLowerCase())
    );

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedChartIndex((prev) => 
          prev < filteredCharts.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedChartIndex((prev) => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCharts.length > 0) {
          const selectedChart = filteredCharts[selectedChartIndex];
          setPreviousChart({...currentChart, chords: [...chords]});
          setCurrentChart(selectedChart);
          setChords(selectedChart.chords);
          if (currentPosition > 0) {
            onPositionSelect(0);
          }
          onNotesChange([]);
          onChordSequenceChange(selectedChart.chords.map(chord => chord.value));
          setShowChartSearch(false);
          setSelectedChartIndex(0);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setShowChartSearch(false);
        break;
    }
  };

  const handleAddChord = (chord: string) => {
    if (isPlaying) return;
    const newChord = { id: Math.random().toString(), value: chord };
    handleChartChange([...chords, newChord]);
    setInputValue('');
    setShowChordSuggestions(false);
  };

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    if (e.button !== 0 || !isEditing) return;
    
    // Don't initiate drag if clicking the delete button
    if (e.target.closest('button')) {
      return;
    }

    e.preventDefault();
    dragSourceRef.current = e.currentTarget;
    dragSourceIndexRef.current = index;
    
    // Create drag overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed pointer-events-none z-50 opacity-80';
    overlay.style.width = `${e.currentTarget.offsetWidth}px`;
    overlay.innerHTML = e.currentTarget.innerHTML;
    overlay.style.transform = 'translate(-50%, -50%)';
    overlay.style.background = 'rgb(237 233 254)'; // purple-50
    overlay.style.padding = '0.375rem 0.75rem';
    overlay.style.borderRadius = '0.375rem';
    overlay.style.fontSize = '0.875rem';
    overlay.style.lineHeight = '1.25rem';
    overlay.style.textAlign = 'center';
    overlay.style.fontWeight = '500';
    document.body.appendChild(overlay);
    dragOverlayRef.current = overlay;

    // Position overlay at cursor
    overlay.style.left = `${e.clientX}px`;
    overlay.style.top = `${e.clientY}px`;

    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || dragSourceIndexRef.current === null) return;

    // Update overlay position
    if (dragOverlayRef.current) {
      dragOverlayRef.current.style.left = `${e.clientX}px`;
      dragOverlayRef.current.style.top = `${e.clientY}px`;
    }

    const chordElements = Array.from(document.querySelectorAll('[data-chord-index]'));
    const sourceIndex = dragSourceIndexRef.current;

    // Find the chord element we're hovering over
    const targetElement = chordElements.find(element => {
      const rect = element.getBoundingClientRect();
      return e.clientX >= rect.left && e.clientX <= rect.right &&
             e.clientY >= rect.top && e.clientY <= rect.bottom;
    });

    if (targetElement) {
      const targetIndex = parseInt(targetElement.getAttribute('data-chord-index') || '-1');
      if (targetIndex !== -1 && targetIndex !== sourceIndex) {
        setDropTarget(targetIndex);
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging && dropTarget !== null && dragSourceIndexRef.current !== null) {
      const sourceIndex = dragSourceIndexRef.current;
      const newChords = [...chords];
      const [movedChord] = newChords.splice(sourceIndex, 1);
      newChords.splice(dropTarget, 0, movedChord);
      handleChartChange(newChords);
    }

    // Remove overlay
    if (dragOverlayRef.current) {
      document.body.removeChild(dragOverlayRef.current);
      dragOverlayRef.current = null;
    }

    setIsDragging(false);
    setDropTarget(null);
    dragSourceRef.current = null;
    dragSourceIndexRef.current = null;
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dropTarget, chords]);

  return (
    <div 
      className={`space-y-4 max-w-full ${isDragging ? 'cursor-grabbing' : ''}`}
    >
      <div className="flex justify-center">
        <div className="w-[656px] flex items-center">
          <div className="flex-1 relative">
            <button
              ref={buttonRef}
              onClick={(e) => {
                if (!isPlaying && !isEditing) {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowChartSearch(!showChartSearch);
                }
              }}
              disabled={isPlaying || isEditing}
              className={`text-left ${isPlaying || isEditing ? 'pointer-events-none' : 'cursor-pointer hover:text-purple-700'}`}
            >
              <h2 className="text-lg font-medium text-gray-900">
                {currentChart.title === "Untitled Chart" ? "Chord Chart" : currentChart.title}
              </h2>
              {currentChart.title !== "Untitled Chart" && (
                <p className="text-sm text-gray-500">{currentChart.composer}</p>
              )}
            </button>
            {showChartSearch && (
              <div
                ref={searchRef}
                className="absolute left-0 z-10 mt-1 w-64 bg-white rounded-md border border-gray-200"
              >
                <div className="p-2">
                  <input
                    type="text"
                    value={chartSearchValue}
                    onChange={(e) => {
                      setChartSearchValue(e.target.value);
                      setSelectedChartIndex(0);
                    }}
                    onKeyDown={handleChartKeyDown}
                    placeholder="Search charts..."
                    className="w-full px-3 py-1.5 rounded-md text-sm border border-gray-200 focus:outline-none focus:border-purple-300"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto" ref={chartListRef}>
                  {charts
                    .filter((chart) =>
                      chart.title.toLowerCase().includes(chartSearchValue.toLowerCase())
                    )
                    .map((chart, index) => (
                      <div
                        key={chart.title}
                        onClick={() => {
                          setPreviousChart({...currentChart, chords: [...chords]});
                          setCurrentChart(chart);
                          setChords(chart.chords);
                          if (currentPosition > 0) {
                            onPositionSelect(0);
                          }
                          onNotesChange([]);
                          onChordSequenceChange(chart.chords.map(chord => chord.value));
                          setShowChartSearch(false);
                          setSelectedChartIndex(index);
                        }}
                        className={`
                          px-3 py-2 cursor-pointer hover:bg-gray-50
                          ${selectedChartIndex === index ? 'bg-purple-50' : ''}
                        `}
                      >
                        <div className="font-medium">{chart.title}</div>
                        <div className="text-sm text-gray-500">{chart.composer}</div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            {!isEditing && (
              <>
                <button
                  onClick={handleNewChart}
                  disabled={isPlaying}
                  className={`
                    px-1.5 py-1.5 rounded-md text-sm font-medium transition-colors
                    ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-100'}
                    bg-green-50 text-green-700 border border-green-200
                  `}
                >
                  New
                </button>
                <button
                  onClick={handleEditStart}
                  disabled={isPlaying}
                  className={`
                    px-1.5 py-1.5 rounded-md text-sm font-medium transition-colors
                    ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-100'}
                    bg-blue-50 text-blue-700 border border-blue-200
                  `}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 w-[656px]">
          {chords.map(({ id, value }, index) => (
            <div
              key={id}
              data-chord-index={index}
              onMouseDown={(e) => {
                if (isEditing) {
                  handleMouseDown(e, index);
                } else {
                  handleChordClick(value, index);
                }
              }}
              onMouseEnter={(e) => isEditing && handleMouseEnter(e, index)}
              className={`
                w-[80px] px-3 py-1.5 rounded-md text-sm font-medium text-center transition-all duration-100 ease-in-out transform origin-center relative group
                ${!isEditing && index === currentPosition ? 'bg-purple-100' : 'bg-gray-50'}
                ${isEditing ? 'cursor-grab active:cursor-grabbing' : sequence ? 'cursor-pointer' : ''}
                ${dropTarget === index ? 'bg-blue-50 scale-105 translate-x-1' : ''}
                ${isDragging && draggedChord?.id === id ? 'opacity-50 scale-95 bg-blue-100' : ''}
              `}
            >
              {isEditing && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteChord(index);
                  }}
                  onMouseEnter={() => {
                    if (isDragging && dragOverlayRef.current) {
                      document.body.style.cursor = 'pointer';
                    }
                  }}
                  onMouseLeave={() => {
                    if (isDragging && dragOverlayRef.current) {
                      document.body.style.cursor = 'grabbing';
                    }
                  }}
                  className={`
                    absolute top-0 -right-1 text-gray-300 hover:bg-transparent text-xs font-bold bg-transparent 
                    w-3 h-3 flex items-center justify-center leading-none focus:outline-none
                    ${isDragging ? 'pointer-events-none' : ''}
                  `}
                >
                  ×
                </button>
              )}
              {value}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-2">
        {isEditing && (
          <>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setSelectedChordIndex(0);
                  if (e.target.value) {
                    setShowChordSuggestions(true);
                  } else {
                    setShowChordSuggestions(false);
                  }
                }}
                onFocus={() => {
                  if (inputValue) {
                    setShowChordSuggestions(true);
                  }
                }}
                onKeyDown={handleChordKeyDown}
                placeholder="Add chord..."
                className="w-full px-3 py-1.5 rounded-md text-sm border border-gray-200 focus:outline-none focus:border-purple-300"
              />
              {showChordSuggestions && (
                <div
                  ref={suggestionRef}
                  className="absolute left-0 right-0 mt-1 bg-white rounded-md border border-gray-200 z-50"
                >
                  <div className="max-h-48 overflow-y-auto py-1" ref={chordListRef}>
                    {validChords
                      .filter(chord => 
                        !inputValue || chord.toLowerCase().includes(inputValue.toLowerCase())
                      )
                      .map((chord, index) => (
                        <div
                          key={chord}
                          onClick={() => handleAddChord(chord)}
                          className={`
                            px-3 py-1.5 cursor-pointer hover:bg-gray-50 text-sm
                            ${selectedChordIndex === index ? 'bg-purple-50' : ''}
                          `}
                        >
                          {chord}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleEditSave}
              disabled={chords.length < 2}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium
                ${chords.length < 2
                  ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                  : 'bg-green-100 text-green-700 border border-green-200 hover:bg-green-200'}
              `}
            >
              {chords.length === 0 
                ? 'Add chords first' 
                : chords.length === 1 
                ? 'Add at least one more chord' 
                : 'Save'}
            </button>
            <button
              onClick={handleEditCancel}
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};