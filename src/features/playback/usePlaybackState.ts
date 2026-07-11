import { useState, useRef, useCallback } from 'react'
import { audioService } from '../../services/audioService'
import {
  ChordMode,
  SeventhVoiceLeadingState,
  Triad,
  VoiceLeadingState,
} from '../../common/types'

type AnyVoiceLeadingState = VoiceLeadingState | SeventhVoiceLeadingState

const DEFAULT_TRIAD_VOICES: VoiceLeadingState = {
  bass: true,
  middle: true,
  high: true,
}

const DEFAULT_SEVENTH_VOICES: SeventhVoiceLeadingState = {
  bass: true,
  tenor: true,
  alto: true,
  soprano: true,
}

export const usePlaybackState = (onNotesChange: (notes: number[]) => void) => {
  const [sequence, setSequence] = useState<Triad[] | null>(null)
  const [currentPosition, setCurrentPosition] = useState<number>(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [chordMode, setChordModeState] = useState<ChordMode>('triad')
  const [voiceLeadingState, setVoiceLeadingState] =
    useState<AnyVoiceLeadingState>(DEFAULT_TRIAD_VOICES)
  const displayedNotesRef = useRef<number[]>([])

  const generateSequence = useCallback(
    // setVoiceLeadingState hasn't flushed when callers regenerate right after
    // changing voices, so the new state must be passed in explicitly.
    async (voicesOverride?: AnyVoiceLeadingState) => {
      try {
        setIsGenerating(true)
        setError(null)

        const newSequence = audioService.generateOptimalSequence(
          voicesOverride ?? voiceLeadingState
        )
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
    },
    [voiceLeadingState, onNotesChange]
  )

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
        let currentSequence = sequence
        if (!currentSequence || currentSequence.length === 0) {
          currentSequence = await generateSequence()
          if (!currentSequence) {
            console.error('Failed to generate sequence')
            setError('Failed to generate sequence')
            return
          }
        }

        setIsPlaying(true)

        audioService.startPlayback(
          currentSequence,
          currentPosition,
          () => {
            // Only reached on natural completion (stopPlayback never calls
            // onComplete), so rewind for the next play-through.
            setIsPlaying(false)
            setCurrentPosition(0)
            audioService.setPosition(0)
            displayedNotesRef.current = []
            onNotesChange([])
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
    (voices: AnyVoiceLeadingState) => {
      setVoiceLeadingState(voices)
      if (isPlaying) {
        audioService.stopPlayback()
        setIsPlaying(false)
      }
      setCurrentPosition(0)
      generateSequence(voices)
    },
    [isPlaying, generateSequence]
  )

  const handleChordModeChange = useCallback(
    (mode: ChordMode) => {
      audioService.setChordMode(mode)
      setChordModeState(mode)
      const defaults =
        mode === 'seventh' ? DEFAULT_SEVENTH_VOICES : DEFAULT_TRIAD_VOICES
      setVoiceLeadingState(defaults)
      if (isPlaying) {
        audioService.stopPlayback()
        setIsPlaying(false)
      }
      setCurrentPosition(0)
      generateSequence(defaults)
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
    chordMode,
    handlePlayback,
    handleRestart,
    handlePositionSelect,
    handleVoiceLeadingChange,
    handleChordModeChange,
    handleStop,
    updateChordSequence,
  }
}
