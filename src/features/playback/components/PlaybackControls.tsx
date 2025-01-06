import React from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { usePlaybackState } from '../hooks/usePlaybackState'
import { ChordChart } from './ChordChart'
import { audioService } from '../../../services/audioService'
import * as Tone from 'tone'

interface PlaybackControlsProps {
  onNotesChange: (notes: number[]) => void
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  onNotesChange,
}) => {
  const {
    sequence,
    currentPosition,
    isGenerating,
    isPlaying,
    error,
    handlePlayback,
    handleRestart,
    handlePositionSelect,
  } = usePlaybackState(onNotesChange)

  const initialChordNames = audioService.getInitialChordNames()

  const handleNotesChange = async (
    notes: number[] | { 
      type: 'pause' | 'play'; 
      notes?: number[]; 
      duration?: number; 
      stayLit?: boolean;
      releaseAudio?: boolean;
    }
  ) => {
    console.log('PlaybackControls handleNotesChange:', { notes, isPlaying })
    
    if (Array.isArray(notes)) {
      console.log('Legacy format - updating keyboard state')
      onNotesChange(notes)
      return
    }

    if (notes.type === 'pause') {
      console.log('Pausing playback')
      handlePlayback()
      return
    }

    if (notes.type === 'play' && notes.notes) {
      console.log('Playing notes:', { notes: notes.notes, stayLit: notes.stayLit, releaseAudio: notes.releaseAudio })
      try {
        // Ensure audio context is started (required by browsers)
        console.log('Starting Tone.js...')
        await Tone.start()
        console.log('Initializing audio service...')
        await audioService.initialize()
        
        // Always update visual keyboard state for clicked chords
        console.log('Updating visual keyboard state:', notes.notes)
        onNotesChange(notes.notes)
        
        // Get the current instrument
        const instrument = audioService.getCurrentInstrument()
        console.log('Got instrument:', instrument ? 'yes' : 'no')
        if (!instrument) {
          throw new Error('No instrument loaded')
        }

        // Convert MIDI notes to note names
        const noteNames = notes.notes.map(midi => {
          const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
          const octave = Math.floor(midi / 12) - 1
          const noteIndex = midi % 12
          return `${noteNames[noteIndex]}${octave}`
        })
        console.log('Converted to note names:', noteNames)

        // Play the chord
        console.log('Triggering attack...')
        instrument.triggerAttack(noteNames)
        
        // Release after specified duration if releaseAudio is true
        if (notes.releaseAudio) {
          console.log('Will release audio after duration')
          await new Promise(resolve => setTimeout(resolve, notes.duration || 333))
          console.log('Triggering release...')
          instrument.triggerRelease(noteNames)
          
          // Only clear visual keyboard if not staying lit
          if (!notes.stayLit) {
            console.log('Clearing visual keyboard state')
            onNotesChange([])
          }
        }
      } catch (err) {
        console.error('Failed to play notes:', err)
        if (!isPlaying) {
          onNotesChange([])
        }
      }
    }
  }

  return (
    <div className="space-y-4">
      {error && <div className="text-red-500 text-sm">{error}</div>}

      <div className="flex gap-3">
        <button
          onClick={handlePlayback}
          disabled={isGenerating}
          aria-label={isGenerating ? 'Loading' : isPlaying ? 'Pause' : 'Play'}
          className={`min-w-12 h-12 flex items-center justify-center rounded-md
            transition-colors
            ${
              isGenerating
                ? 'bg-gray-100 text-gray-400'
                : isPlaying
                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {isGenerating ? (
            <div className="flex gap-1">
              <div
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
              ></div>
            </div>
          ) : isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>

        <button
          onClick={handleRestart}
          disabled={isGenerating || !sequence}
          aria-label="Restart"
          className={`min-w-12 h-12 flex items-center justify-center rounded-md
            transition-colors
            ${
              isGenerating || !sequence
                ? 'bg-gray-100 text-gray-400'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-purple-100 active:text-purple-700'
            }`}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <ChordChart
        sequence={sequence}
        currentPosition={currentPosition}
        onPositionSelect={handlePositionSelect}
        isEnabled={!isGenerating && sequence !== null}
        initialChordNames={initialChordNames}
        isPlaying={isPlaying}
        onNotesChange={handleNotesChange}
      />
    </div>
  )
}
