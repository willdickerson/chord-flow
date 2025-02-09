import React, { useState, useEffect } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Repeat,
  TrendingUp,
} from 'lucide-react'
import Icon from '@mdi/react'
import { mdiMetronome } from '@mdi/js'
import { usePlaybackState } from './usePlaybackState'
import { ChordChartInput } from '../charts/ChordChartInput'
import { VoiceLeadingControls } from './VoiceLeadingControls'
import { TriadControls } from './TriadControls'
import { ArpeggioControls } from './ArpeggioControls'
import { audioService } from '../../services/audioService'
import * as Tone from 'tone'

interface PlaybackControlsProps {
  onNotesChange: (notes: number[]) => void
  onVoiceLeadingChange?: (voices: {
    bass: boolean
    middle: boolean
    high: boolean
  }) => void
  initialChordNames?: string[]
  title?: string
  composer?: string
  onChartChange?: (
    chartData: { title: string; composer: string; chords: string[] } | null
  ) => void
  onEditingChange?: (isEditing: boolean) => void
  isEditing?: boolean
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  onNotesChange,
  initialChordNames: propInitialChordNames,
  title,
  composer,
  onChartChange,
  onEditingChange,
  isEditing = false,
}) => {
  const {
    sequence,
    currentPosition,
    isGenerating,
    isPlaying,
    handlePlayback,
    handleStop,
    handleRestart,
    handlePositionSelect,
    handleVoiceLeadingChange,
    updateChordSequence,
  } = usePlaybackState(onNotesChange)

  const defaultInitialChordNames = audioService.getInitialChordNames()
  const effectiveInitialChordNames =
    propInitialChordNames || defaultInitialChordNames

  const [volume, setVolume] = useState(100)
  const [previousVolume, setPreviousVolume] = useState(100)
  const [isMuted, setIsMuted] = useState(false)
  const [chordDuration, setChordDuration] = useState(500)
  const [isLooping, setIsLooping] = useState(false)
  const [isArpeggiating, setIsArpeggiating] = useState(true)

  useEffect(() => {
    audioService.setVolume(100)
    audioService.setChordDuration(500)
    audioService.setArpeggiating(true)
  }, [])

  useEffect(() => {
    handleVoiceLeadingChange({
      bass: true,
      middle: true,
      high: true,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          await Tone.start()
          await audioService.initialize()

          const duration = notes.duration || audioService.getChordDuration()
          const useArp =
            notes.useArpeggiator !== undefined
              ? notes.useArpeggiator
              : audioService.isArpeggiating

          onNotesChange(notes.notes)

          const originalArpState = audioService.isArpeggiating
          if (useArp !== originalArpState) {
            audioService.setArpeggiating(useArp)
          }

          try {
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
    const sliderValue = parseInt(e.target.value)
    const newDuration = 5300 - sliderValue
    setChordDuration(newDuration)
    audioService.setChordDuration(newDuration)
  }

  const playChord = async (_chord: string, index: number) => {
    try {
      await Tone.start()
      await audioService.initialize()

      if (!sequence || !sequence[index]) {
        console.warn(
          'PlaybackControls: No sequence or triad found at index',
          index
        )
        return
      }

      const triad = sequence[index]

      onNotesChange(triad.midiNotes)

      await audioService.playTriad(
        triad.midiNotes,
        audioService.getChordDuration(),
        updatedNotes => {
          onNotesChange(updatedNotes)
        }
      )
    } catch (err) {
      console.error('Failed to play chord:', err)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="space-y-4">
          {/* Playback Controls */}
          <div className="flex gap-3">
            <button
              onClick={handlePlayback}
              disabled={isGenerating || isEditing}
              aria-label={
                isGenerating ? 'Loading' : isPlaying ? 'Pause' : 'Play'
              }
              className={`min-w-8 h-8 flex items-center justify-center rounded-md
                transition-colors outline-none
                ${
                  isGenerating || isEditing
                    ? 'bg-[#F5E6D3]/50 text-[#846C5B]/50'
                    : isPlaying
                      ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
                      : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20'
                } ${isEditing ? 'pointer-events-none' : ''}`}
            >
              {isGenerating ? (
                <div className="flex gap-1">
                  <div
                    className="w-1 h-1 bg-[#846C5B]/50 rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-[#846C5B]/50 rounded-full animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-[#846C5B]/50 rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  ></div>
                </div>
              ) : isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              onClick={handleRestart}
              disabled={isGenerating || !sequence || isEditing}
              aria-label="Restart"
              className={`min-w-8 h-8 flex items-center justify-center rounded-md
                transition-colors outline-none
                ${
                  isGenerating || !sequence || isEditing
                    ? 'bg-[#F5E6D3]/50 text-[#846C5B]/50 hover:bg-[#F5E6D3]/50'
                    : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20'
                } ${isEditing ? 'pointer-events-none' : ''}`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleLoopToggle}
              disabled={isEditing}
              aria-label={isLooping ? 'Disable Loop' : 'Enable Loop'}
              className={`min-w-8 h-8 flex items-center justify-center rounded-md
                transition-colors outline-none
                ${
                  isEditing
                    ? 'bg-[#F5E6D3]/50 text-[#846C5B]/50'
                    : isLooping
                      ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
                      : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20'
                } ${isEditing ? 'pointer-events-none' : ''}`}
            >
              <Repeat className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleArpeggiateToggle}
              disabled={isEditing}
              aria-label={
                isArpeggiating ? 'Disable Arpeggiator' : 'Enable Arpeggiator'
              }
              className={`min-w-8 h-8 flex items-center justify-center rounded-md
                transition-colors outline-none
                ${
                  isEditing
                    ? 'bg-[#F5E6D3]/50 text-[#846C5B]/50'
                    : isArpeggiating
                      ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
                      : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20'
                } ${isEditing ? 'pointer-events-none' : ''}`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2 flex-wrap overflow-hidden">
              <div className="flex items-center gap-2 flex-shrink min-w-0">
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink min-w-0">
                  <button
                    onClick={handleVolumeToggle}
                    className="text-[#846C5B] hover:text-[#2C1810]/80 p-0 bg-[#F5E6D3] hover:bg-[#F5E6D3] border-0 flex-shrink-0"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 bg-[#F5E6D3] hover:bg-[#F5E6D3]" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 bg-[#F5E6D3] hover:bg-[#F5E6D3]" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-[3rem] sm:w-[5rem] h-1.5 bg-[#846C5B]/20 rounded-lg appearance-none cursor-pointer accent-[#E3B448] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 sm:[&::-webkit-slider-thumb]:w-4 sm:[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E3B448] [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:shadow-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 sm:[&::-moz-range-thumb]:w-4 sm:[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#E3B448] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-none"
                    style={{ minWidth: 0 }}
                  />
                </div>

                <div className="flex items-center gap-1 sm:gap-2 flex-shrink min-w-0">
                  <Icon
                    path={mdiMetronome}
                    size={0.65}
                    className="text-[#846C5B] flex-shrink-0"
                  />
                  <input
                    type="range"
                    min="300"
                    max="5000"
                    step="10"
                    value={5300 - chordDuration}
                    onChange={handleDurationChange}
                    className="w-[3rem] sm:w-[5rem] h-1.5 bg-[#846C5B]/20 rounded-lg appearance-none cursor-pointer accent-[#E3B448] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 sm:[&::-webkit-slider-thumb]:w-4 sm:[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E3B448] [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:shadow-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 sm:[&::-moz-range-thumb]:w-4 sm:[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#E3B448] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-none"
                    style={{ minWidth: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Voice Leading Controls */}
          <div className="flex flex-col gap-3">
            <VoiceLeadingControls
              isEnabled={!isPlaying}
              onVoiceLeadingChange={voices => {
                if (isPlaying) {
                  handleStop()
                }
                handleVoiceLeadingChange(voices)
              }}
            />
            <TriadControls
              onTriadTypeChange={type => {
                if (isPlaying) {
                  handleStop()
                }
                audioService.setTriadType(type)
                handleVoiceLeadingChange({
                  bass: true,
                  middle: true,
                  high: true,
                })
              }}
              isEnabled={!isPlaying}
            />
            <ArpeggioControls
              onArpeggioTypeChange={type => {
                audioService.setArpeggioType(type)
              }}
              isEnabled={isArpeggiating}
            />
          </div>

          {/* Chord Chart */}
          <ChordChartInput
            sequence={sequence}
            currentPosition={currentPosition}
            onPositionSelect={handlePositionSelect}
            isEnabled={!isGenerating}
            initialChordNames={effectiveInitialChordNames}
            isPlaying={isPlaying}
            onNotesChange={handleNotesChange}
            audioService={audioService}
            onChordSequenceChange={updateChordSequence}
            onStop={handleStop}
            playChord={playChord}
            onEditingChange={onEditingChange}
            title={title}
            composer={composer}
            onChartChange={onChartChange}
            isEditing={isEditing}
          />
        </div>
      </div>
    </div>
  )
}
