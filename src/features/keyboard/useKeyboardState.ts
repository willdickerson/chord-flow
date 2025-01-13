import { useState, useCallback, useEffect } from 'react'
import { audioService } from '../../services/audioService'

export const useKeyboardState = () => {
  const [playedNotes, setPlayedNotes] = useState<Set<number>>(new Set())
  const [isMouseDown, setIsMouseDown] = useState(false)

  useEffect(() => {
    const initAudio = async () => {
      try {
        await audioService.initialize()
      } catch (err) {
        console.error('Error initializing audio:', err)
      }
    }
    initAudio()
    const handleGlobalMouseUp = () => setIsMouseDown(false)
    window.addEventListener('mouseup', handleGlobalMouseUp)
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp)
  }, [])

  const playNote = useCallback(
    async (midiNote: number) => {
      if (playedNotes.has(midiNote)) return

      try {
        await audioService.playNote(midiNote)
        setPlayedNotes(prev => new Set([...prev, midiNote]))
      } catch (err) {
        console.error('Error playing note:', err)
      }
    },
    [playedNotes]
  )

  const stopNote = useCallback((midiNote: number) => {
    audioService.stopNote(midiNote)
    setPlayedNotes(prev => {
      const next = new Set(prev)
      next.delete(midiNote)
      return next
    })
  }, [])

  const handleMouseDown = async (midiNote: number) => {
    setIsMouseDown(true)
    await playNote(midiNote)
  }

  const handleMouseUp = (midiNote: number) => {
    setIsMouseDown(false)
    stopNote(midiNote)
  }

  const handleMouseEnter = async (midiNote: number) => {
    if (isMouseDown) {
      await playNote(midiNote)
    }
  }

  const handleMouseLeave = (midiNote: number) => {
    stopNote(midiNote)
  }

  return {
    playedNotes,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
  }
}
