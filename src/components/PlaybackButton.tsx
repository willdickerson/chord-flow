import { useState, useRef, useCallback } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { audioService } from '../services/audioService'
import { Triad } from '../types'
import { ChordChart } from './ChordChart'

interface PlaybackControlsProps {
  onNotesChange: (notes: number[]) => void;
}

export const PlaybackControls = ({ onNotesChange }: PlaybackControlsProps) => {
  const [sequence, setSequence] = useState<Triad[] | null>(null)
  const [currentPosition, setCurrentPosition] = useState<number>(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const displayedNotesRef = useRef<number[]>([]);
  const initialChordNames = audioService.getInitialChordNames();

  const generateSequence = async () => {
    try {
      setIsGenerating(true)
      setError(null)
      await audioService.initialize()
      
      // Generate path in next tick to allow loading state to render
      await new Promise(resolve => setTimeout(resolve, 0))
      const newSequence = audioService.generateGiantStepsSequence()
      setSequence(newSequence)
      setCurrentPosition(0)
      displayedNotesRef.current = [];
      return newSequence
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      return null
    } finally {
      setIsGenerating(false)
    }
  }

  const handlePlayback = async () => {
    if (isGenerating) return
    
    try {
      setError(null)
      
      if (isPlaying) {
        audioService.stopPlayback();
        setIsPlaying(false);
        // Keep displaying whatever notes were last shown
        onNotesChange(displayedNotesRef.current);
        return
      }

      let currentSequence = sequence
      if (!currentSequence) {
        currentSequence = await generateSequence()
        if (!currentSequence) return
      }
      
      setIsPlaying(true);
      
      await audioService.playTriadSequence(
        currentSequence,
        (notes) => {
          displayedNotesRef.current = notes;
          onNotesChange(notes);
        },
        currentPosition,
        (position) => {
          setCurrentPosition(position);
        }
      );
      
      setIsPlaying(false);
      if (!audioService.shouldStop) {
        // Sequence completed naturally - reset everything to start
        displayedNotesRef.current = [];
        onNotesChange([]);
        setCurrentPosition(0);
        audioService.setPosition(0);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setIsPlaying(false)
      onNotesChange(displayedNotesRef.current)
    }
  }

  const handleRestart = useCallback(() => {
    if (isGenerating || !sequence) return

    // Stop any current playback and reset everything
    audioService.restart()
    setIsPlaying(false)
    setCurrentPosition(0)
    displayedNotesRef.current = []
    onNotesChange([])
  }, [isGenerating, sequence, onNotesChange]);

  const handlePositionSelect = (position: number) => {
    if (isGenerating || !sequence) return

    // If playing, just stop
    if (isPlaying) {
      audioService.stopPlayback()
      setIsPlaying(false)
    }

    // Update position
    setCurrentPosition(position)
    audioService.setPosition(position)

    // Show the notes for this chord
    const selectedChord = sequence[position]
    if (selectedChord) {
      displayedNotesRef.current = selectedChord.midiNotes
      onNotesChange(selectedChord.midiNotes)
    }
  }

  return (
    <div className="space-y-4">
      <ChordChart 
        sequence={sequence} 
        currentPosition={currentPosition}
        onPositionSelect={handlePositionSelect}
        isEnabled={!!sequence}
        initialChordNames={initialChordNames}
      />
      
      <div className="flex gap-3">
        <button
          onClick={handlePlayback}
          disabled={isGenerating}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md
            font-medium text-sm transition-colors
            ${isGenerating 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
        >
          {isGenerating ? (
            <>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                     style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                     style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                     style={{ animationDelay: '300ms' }}></div>
              </div>
              <span>Generating</span>
            </>
          ) : (
            <>
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'Pause' : sequence ? 'Play' : 'Generate & Play'}</span>
            </>
          )}
        </button>

        {sequence && (
          <button
            onClick={handleRestart}
            disabled={isGenerating}
            className={`w-12 flex items-center justify-center px-3 py-2 rounded-md
              font-medium text-sm transition-colors
              ${isGenerating 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
          >
            <RotateCcw size={16} />
          </button>
        )}
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
    </div>
  )
}