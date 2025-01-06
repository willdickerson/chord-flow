import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { usePlaybackState } from '../usePlaybackState'
import { audioService } from '../../../../services/audioService'

// Mock audioService
vi.mock('../../../../services/audioService', () => ({
  audioService: {
    generateChordProgression: vi.fn(),
    playChord: vi.fn(),
    stopPlayback: vi.fn(),
  },
}))

describe('usePlaybackState', () => {
  const mockOnNotesChange = vi.fn()
  const mockSequence = [
    { chordName: 'C', notes: [60, 64, 67] },
    { chordName: 'G', notes: [55, 59, 62] },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(audioService.generateChordProgression).mockResolvedValue(
      mockSequence
    )
  })

  it('initializes with default state', () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    expect(result.current.sequence).toBeNull()
    expect(result.current.currentPosition).toBe(0)
    expect(result.current.isGenerating).toBe(false)
    expect(result.current.isPlaying).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('handles playback start', async () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    await act(async () => {
      await result.current.handlePlayback()
    })

    expect(result.current.sequence).toEqual(mockSequence)
    expect(result.current.isPlaying).toBe(true)
    expect(audioService.playChord).toHaveBeenCalledWith(mockSequence[0].notes)
  })

  it('handles playback pause', async () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    await act(async () => {
      await result.current.handlePlayback() // Start playing
      result.current.handlePlayback() // Pause
    })

    expect(result.current.isPlaying).toBe(false)
    expect(audioService.stopPlayback).toHaveBeenCalled()
  })

  it('handles restart', async () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    await act(async () => {
      await result.current.handlePlayback()
      result.current.handleRestart()
    })

    expect(result.current.currentPosition).toBe(0)
    expect(result.current.isPlaying).toBe(false)
    expect(audioService.stopPlayback).toHaveBeenCalled()
  })

  it('handles position selection', async () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    await act(async () => {
      await result.current.handlePlayback()
      result.current.handlePositionSelect(1)
    })

    expect(result.current.currentPosition).toBe(1)
    expect(audioService.playChord).toHaveBeenCalledWith(mockSequence[1].notes)
  })

  it('handles generation error', async () => {
    const errorMessage = 'Generation failed'
    vi.mocked(audioService.generateChordProgression).mockRejectedValue(
      new Error(errorMessage)
    )

    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    await act(async () => {
      await result.current.handlePlayback()
    })

    expect(result.current.error).toBe(errorMessage)
    expect(result.current.isGenerating).toBe(false)
  })
})
