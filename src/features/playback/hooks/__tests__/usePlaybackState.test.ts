import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { usePlaybackState } from '../usePlaybackState'
import { audioService } from '../../../../services/audioService'
import type { Triad } from '../../../../types'

// Mock audioService
vi.mock('../../../../services/audioService', () => ({
  audioService: {
    initialize: vi.fn(),
    generateGiantStepsSequence: vi.fn(),
    playTriadSequence: vi.fn(),
    stopPlayback: vi.fn(),
    setPosition: vi.fn(),
    restart: vi.fn(),
    shouldStop: false,
  },
}))

describe('usePlaybackState', () => {
  const mockOnNotesChange = vi.fn()
  const mockSequence: Triad[] = [
    { chordName: 'C', midiNotes: [60, 64, 67] },
    { chordName: 'G', midiNotes: [55, 59, 62] },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(audioService.generateGiantStepsSequence).mockReturnValue(
      mockSequence
    )
    vi.mocked(audioService.initialize).mockResolvedValue(undefined)
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let resolvePlayback: () => void
    vi.mocked(audioService.playTriadSequence).mockImplementation(
      async (sequence, onNotes, startPosition, onPosition) => {
        onPosition(startPosition)
        onNotes(sequence[startPosition].midiNotes)
        return new Promise<void>(resolve => {
          resolvePlayback = resolve
        })
      }
    )

    // Start playing
    await act(async () => {
      // We need this promise to keep track of the playback state
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const playPromise = result.current.handlePlayback()
      // Wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.sequence).toEqual(mockSequence)
    expect(result.current.isPlaying).toBe(true)
    expect(audioService.initialize).toHaveBeenCalled()
    expect(audioService.generateGiantStepsSequence).toHaveBeenCalled()
    expect(audioService.playTriadSequence).toHaveBeenCalledWith(
      mockSequence,
      expect.any(Function),
      0,
      expect.any(Function)
    )
  })

  it('handles playback pause', async () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let resolvePlayback: () => void
    vi.mocked(audioService.playTriadSequence).mockImplementation(
      async (sequence, onNotes, startPosition, onPosition) => {
        onPosition(startPosition)
        onNotes(sequence[startPosition].midiNotes)
        return new Promise<void>(resolve => {
          resolvePlayback = resolve
        })
      }
    )

    // Start playing
    await act(async () => {
      // We need this promise to keep track of the playback state
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const playPromise = result.current.handlePlayback()
      // Wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.isPlaying).toBe(true)

    // Then pause
    await act(async () => {
      await result.current.handlePlayback()
    })

    expect(result.current.isPlaying).toBe(false)
    expect(audioService.stopPlayback).toHaveBeenCalled()
  })

  it('handles restart', async () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    vi.mocked(audioService.playTriadSequence).mockResolvedValue(undefined)

    // First start playing to get sequence
    await act(async () => {
      await result.current.handlePlayback()
      // Wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Then restart
    await act(async () => {
      result.current.handleRestart()
      // Need to wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.currentPosition).toBe(0)
    expect(result.current.isPlaying).toBe(false)
    expect(audioService.restart).toHaveBeenCalled()
    expect(mockOnNotesChange).toHaveBeenCalledWith([])
  })

  it('handles position selection', async () => {
    const { result } = renderHook(() => usePlaybackState(mockOnNotesChange))

    vi.mocked(audioService.playTriadSequence).mockResolvedValue(undefined)

    // First start playing to get sequence
    await act(async () => {
      await result.current.handlePlayback()
      // Wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Then select position
    await act(async () => {
      result.current.handlePositionSelect(1)
      // Need to wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(result.current.currentPosition).toBe(1)
    expect(audioService.setPosition).toHaveBeenCalledWith(1)
    expect(mockOnNotesChange).toHaveBeenCalledWith(mockSequence[1].midiNotes)
  })

  it('handles generation error', async () => {
    const errorMessage = 'Generation failed'
    vi.mocked(audioService.initialize).mockRejectedValue(
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
