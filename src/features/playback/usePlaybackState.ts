import { useState, useRef, useCallback } from 'react'
import { audioService } from '../../services/audioService'
import { Triad } from '../../common/types'

interface VoiceLeadingState {
  bass: boolean
  middle: boolean
  high: boolean
}

export const usePlaybackState = (onNotesChange: (notes: number[]) => void) => {
  const [sequence, setSequence] = useState<Triad[] | null>(null)
  const [currentPosition, setCurrentPosition] = useState<number>(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [voiceLeadingState, setVoiceLeadingState] = useState<VoiceLeadingState>(
    {
      bass: true,
      middle: true,
      high: true,
    }
  )
  const displayedNotesRef = useRef<number[]>([])

  const generateSequence = useCallback(async () => {
    try {
      setIsGenerating(true)
      setError(null)

      const newSequence =
        audioService.generateOptimalSequence(voiceLeadingState)
      setSequence(newSequence)
      setCurrentPosition(0)
      displayedNotesRef.current = []
      onNotesChange([])
      return newSequence
    } catch (err) {
      console.error('Error generating sequence:', err)
      setError('Failed to generate sequence')
      return null
    } finally {
      setIsGenerating(false)
    }
  }, [voiceLeadingState, onNotesChange])

  const updateChordSequence = useCallback(
    (chordNames: string[]) => {
      audioService.setCurrentChordNames(chordNames)
      generateSequence()
    },
    [generateSequence]
  )

  const handlePlayback = useCallback(async () => {
    if (!sequence) return

    if (isPlaying) {
      audioService.stopPlayback()
      setIsPlaying(false)
      return
    }

    try {
      setIsPlaying(true)
      await audioService.startPlayback(
        sequence,
        currentPosition,
        () => {
          setIsPlaying(false)
          setCurrentPosition(0)
        },
        onNotesChange
      )
    } catch (err) {
      console.error('Error during playback:', err)
      setIsPlaying(false)
    }
  }, [sequence, isPlaying, currentPosition, onNotesChange])

  const handleStop = useCallback(async () => {
    try {
      audioService.stopPlayback()
      setIsPlaying(false)
      setCurrentPosition(0)
    } catch (err) {
      console.error('Error stopping playback:', err)
    }
  }, [])

  const handleRestart = useCallback(async () => {
    try {
      if (sequence) {
        audioService.stopPlayback()
        setIsPlaying(true)
        await audioService.startPlayback(
          sequence,
          0,
          () => {
            setIsPlaying(false)
            setCurrentPosition(0)
          },
          onNotesChange
        )
      }
    } catch (err) {
      console.error('Error restarting playback:', err)
      setIsPlaying(false)
    }
  }, [sequence, onNotesChange])

  const handlePositionSelect = useCallback(
    (position: number) => {
      if (isGenerating || !sequence) return

      // If playing, stop playback first
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
    },
    [isGenerating, sequence, isPlaying, onNotesChange]
  )

  const handleVoiceLeadingChange = useCallback(
    (voices: VoiceLeadingState) => {
      setVoiceLeadingState(voices)
      // Stop any current playback and reset position
      if (isPlaying) {
        audioService.stopPlayback()
        setIsPlaying(false)
      }
      setCurrentPosition(0)
      // Generate new sequence with updated voice leading settings
      generateSequence()
    },
    [isPlaying, generateSequence]
  )

  return {
    sequence,
    currentPosition,
    isGenerating,
    isPlaying,
    error,
    voiceLeadingState,
    handlePlayback,
    handleRestart,
    handlePositionSelect,
    handleVoiceLeadingChange,
    handleStop,
    updateChordSequence,
  }
}
