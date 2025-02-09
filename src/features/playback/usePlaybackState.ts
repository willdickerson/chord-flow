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
      if (chordNames.length > 0) {
        generateSequence()
      } else {
        setSequence(null)
        setCurrentPosition(0)
        displayedNotesRef.current = []
        onNotesChange([])
      }
    },
    [generateSequence, onNotesChange]
  )

  const handlePlayback = async () => {
    if (isGenerating) return

    try {
      await audioService.initialize()

      if (!isPlaying) {
        if (!sequence || sequence.length === 0) {
          const newSequence = await generateSequence()
          if (!newSequence) {
            console.error('Failed to generate sequence')
            setError('Failed to generate sequence')
            return
          }
          setSequence(newSequence)
        }

        setIsPlaying(true)

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

      if (isPlaying) {
        audioService.stopPlayback()
        setIsPlaying(false)
      }

      setCurrentPosition(position)
      audioService.setPosition(position)

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
      if (isPlaying) {
        audioService.stopPlayback()
        setIsPlaying(false)
      }
      setCurrentPosition(0)
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
