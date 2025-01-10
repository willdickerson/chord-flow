import { useState, useRef, useCallback, useEffect } from 'react'
import { audioService } from '../../../services/audioService'
import { Triad } from '../../../types'

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
        audioService.generateGiantStepsSequence(voiceLeadingState)
      console.log('Generated new sequence with voice leading settings:', {
        voices: voiceLeadingState,
        sequence: newSequence,
      })
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

  const updateChordSequence = useCallback((chordNames: string[]) => {
    audioService.setCurrentChordNames(chordNames)
    generateSequence()
  }, [generateSequence])

  // Only generate sequence when needed, not on mount
  useEffect(() => {
    console.log('Initializing playback state')
  }, [])

  const handlePlayback = async () => {
    if (isGenerating) return

    try {
      // Initialize audio before starting playback
      await audioService.initialize()

      if (!isPlaying) {
        // Check if we have a sequence
        if (!sequence || sequence.length === 0) {
          console.log('No sequence available, generating one...')
          const newSequence = await generateSequence()
          if (!newSequence) {
            console.error('Failed to generate sequence')
            setError('Failed to generate sequence')
            return
          }
          setSequence(newSequence)
        }

        console.log('Starting sequence from position:', currentPosition)
        // Set playing state before starting playback
        setIsPlaying(true)

        // Use the current sequence value
        const currentSequence = sequence || (await generateSequence())
        if (!currentSequence) return

        audioService.startPlayback(
          currentSequence,
          currentPosition,
          () => {
            setIsPlaying(false)
            if (!audioService.shouldStop) {
              setCurrentPosition(0)
              displayedNotesRef.current = []
              onNotesChange([])
            }
          },
          notes => {
            displayedNotesRef.current = notes
            onNotesChange(notes)
            setCurrentPosition(audioService.getCurrentPosition())
          }
        )
      } else {
        audioService.stopPlayback()
        setIsPlaying(false)
      }
    } catch (error) {
      console.error('Playback error:', error)
      const errorMessage =
        error instanceof Error ? error.message : 'Generation failed'
      setError(errorMessage)
      setIsPlaying(false)
    }
  }

  const handleRestart = useCallback(() => {
    if (isGenerating || !sequence) return

    audioService.restart()
    setIsPlaying(false)
    setCurrentPosition(0)
    displayedNotesRef.current = []
    onNotesChange([])
  }, [isGenerating, sequence, onNotesChange])

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
      console.log('Updating voice leading state:', voices)
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

  const handleStop = useCallback(() => {
    audioService.stopPlayback()
    setIsPlaying(false)
    onNotesChange([])
  }, [onNotesChange])

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
