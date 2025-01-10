import React, { useState, useEffect } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Clock,
  Repeat,
  TrendingUp,
} from 'lucide-react'
import { usePlaybackState } from '../hooks/usePlaybackState'
import { ChordChartInput } from './ChordChartInput'
import { VoiceLeadingControls } from './VoiceLeadingControls'
import { audioService } from '../../../services/audioService'
import { generateTriads, NOTE_TO_MIDI_BASE } from '../../../utils/chordUtils'
import * as Tone from 'tone'

interface PlaybackControlsProps {
  onNotesChange: (notes: number[]) => void
  onVoiceLeadingChange?: (voices: {
    bass: boolean
    middle: boolean
    high: boolean
  }) => void
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  onNotesChange,
  onVoiceLeadingChange,
}) => {
  const {
    sequence,
    currentPosition,
    isGenerating,
    isPlaying,
    error,
    handlePlayback,
    handleStop,
    handleRestart,
    handlePositionSelect,
    handleVoiceLeadingChange,
    generateSequence,
    updateChordSequence,
  } = usePlaybackState(onNotesChange)

  const initialChordNames = audioService.getInitialChordNames()

  const [volume, setVolume] = useState(25)
  const [previousVolume, setPreviousVolume] = useState(25)
  const [isMuted, setIsMuted] = useState(false)
  const [chordDuration, setChordDuration] = useState(670)
  const [isLooping, setIsLooping] = useState(false)
  const [isArpeggiating, setIsArpeggiating] = useState(false)

  useEffect(() => {
    // Set initial volume and chord duration
    audioService.setVolume(15)
    audioService.setChordDuration(670)
  }, [])

  const handleLoopToggle = () => {
    const newLoopState = !isLooping
    setIsLooping(newLoopState)
    audioService.setLooping(newLoopState)
  }

  const handleArpeggiateToggle = () => {
    const newArpState = !isArpeggiating
    setIsArpeggiating(newArpState)
    audioService.setArpeggiating(newArpState)
  }

  const handleNotesChange = async (
    notes:
      | number[]
      | {
          type: 'pause' | 'play'
          notes?: number[]
          duration?: number
          stayLit?: boolean
          releaseAudio?: boolean
          useArpeggiator?: boolean
        }
  ) => {
    if (Array.isArray(notes)) {
      onNotesChange(notes)
    } else {
      if (notes.type === 'play' && notes.notes) {
        try {
          // Ensure audio context is started (required by browsers)
          await Tone.start()
          await audioService.initialize()

          const duration = notes.duration || audioService.getChordDuration()
          const useArp =
            notes.useArpeggiator !== undefined
              ? notes.useArpeggiator
              : audioService.isArpeggiating
          console.log('Playing with settings:', {
            isArpeggiating,
            isLooping,
            currentInstrument: audioService.getCurrentInstrument(),
          })

          // Always update visual state
          onNotesChange(notes.notes)

          // Temporarily set arpeggiator state if needed
          const originalArpState = audioService.isArpeggiating
          if (useArp !== originalArpState) {
            audioService.setArpeggiating(useArp)
          }

          try {
            // Play the notes
            await audioService.playTriad(
              notes.notes,
              duration,
              updatedNotes => {
                if (!notes.stayLit) {
                  onNotesChange(updatedNotes)
                }
              }
            )
          } finally {
            // Restore original arpeggiator state
            if (useArp !== originalArpState) {
              audioService.setArpeggiating(originalArpState)
            }
          }
        } catch (err) {
          console.error('Failed to play notes:', err)
          if (!notes.stayLit) {
            onNotesChange([])
          }
        }
      } else if (notes.type === 'pause') {
        onNotesChange([])
      }
    }
  }

  const handleVolumeToggle = () => {
    if (isMuted) {
      setVolume(previousVolume)
      setIsMuted(false)
      audioService.setVolume(previousVolume)
    } else {
      setPreviousVolume(volume)
      setVolume(0)
      setIsMuted(true)
      audioService.setVolume(0)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    audioService.setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    } else {
      setIsMuted(true)
    }
  }

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = parseInt(e.target.value)
    setChordDuration(newDuration)
    audioService.setChordDuration(newDuration)
  }

  const playChord = async (chord: string, index: number) => {
    console.log('PlaybackControls: playChord called', { chord, index });
    try {
      console.log('PlaybackControls: Starting Tone.js');
      await Tone.start();
      await audioService.initialize();
      
      // Get the specific triad from the sequence
      if (!sequence || !sequence[index]) {
        console.warn('PlaybackControls: No sequence or triad found at index', index);
        return;
      }
      
      const triad = sequence[index];
      console.log('PlaybackControls: Using triad from sequence', triad);
      
      // Immediately update the notes
      onNotesChange(triad.midiNotes);
      
      console.log('PlaybackControls: Playing triad with MIDI notes', triad.midiNotes);
      await audioService.playTriad(
        triad.midiNotes,
        audioService.getChordDuration(),
        (updatedNotes) => {
          console.log('PlaybackControls: Notes changed', updatedNotes);
          onNotesChange(updatedNotes);
        }
      );
      console.log('PlaybackControls: Finished playing triad');
    } catch (err) {
      console.error('Failed to play chord:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="space-y-4">
          <ChordChartInput
            sequence={sequence}
            currentPosition={currentPosition}
            onPositionSelect={handlePositionSelect}
            isEnabled={!isGenerating}
            initialChordNames={initialChordNames}
            isPlaying={isPlaying}
            onNotesChange={handleNotesChange}
            audioService={audioService}
            onChordSequenceChange={updateChordSequence}
            onStop={handleStop}
            playChord={playChord}
          />
          <div className="flex gap-3">
            <button
              onClick={handlePlayback}
              disabled={isGenerating}
              aria-label={isGenerating ? 'Loading' : isPlaying ? 'Pause' : 'Play'}
              className={`min-w-12 h-12 flex items-center justify-center
                transition-colors bg-transparent p-0 border-0
                ${
                  isGenerating
                    ? 'text-gray-400'
                    : isPlaying
                      ? 'text-purple-700 hover:text-purple-800'
                      : 'text-gray-600 hover:text-gray-700'
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
              className={`min-w-12 h-12 flex items-center justify-center
                transition-colors bg-transparent p-0 border-0
                ${
                  isGenerating || !sequence
                    ? 'text-gray-400'
                    : 'text-gray-600 hover:text-gray-700 active:text-purple-700'
                }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handleLoopToggle}
              aria-label={isLooping ? 'Disable Loop' : 'Enable Loop'}
              className={`min-w-12 h-12 flex items-center justify-center
                transition-colors bg-transparent p-0 border-0
                ${isLooping ? 'text-purple-700' : 'text-gray-600 hover:text-gray-700'}`}
            >
              <Repeat className="w-4 h-4" />
            </button>

            <button
              onClick={handleArpeggiateToggle}
              aria-label={
                isArpeggiating ? 'Disable Arpeggiator' : 'Enable Arpeggiator'
              }
              className={`min-w-11 h-11 flex items-center justify-center
                transition-colors bg-transparent p-0 border-0
                ${isArpeggiating ? 'text-purple-700' : 'text-gray-600 hover:text-gray-700'}`}
            >
              <TrendingUp className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleVolumeToggle}
                  className="text-gray-500 hover:text-gray-700 p-0 bg-white"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-600 hover:[&::-webkit-slider-thumb]:bg-gray-700"
                  aria-label="Volume"
                />
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={chordDuration}
                  onChange={handleDurationChange}
                  className="w-16 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-600 hover:[&::-webkit-slider-thumb]:bg-gray-700"
                  aria-label="Chord Duration"
                />
              </div>
            </div>
          </div>

          {/* Voice Leading Controls */}
          <VoiceLeadingControls
            isEnabled={!isPlaying}
            onVoiceLeadingChange={voices => {
              // Stop playback and reset state when voice leading changes
              if (isPlaying) {
                handleStop()
              }
              handleVoiceLeadingChange(voices)
            }}
          />
        </div>
      </div>
    </div>
  )
}
