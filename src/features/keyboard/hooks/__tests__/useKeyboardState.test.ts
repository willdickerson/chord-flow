import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useKeyboardState } from '../useKeyboardState'
import { audioService } from '../../../../services/audioService'

vi.mock('../../../../services/audioService', () => ({
  audioService: {
    initialize: vi.fn().mockResolvedValue(undefined),
    playNote: vi.fn(),
    stopNote: vi.fn(),
  },
}))

describe('useKeyboardState', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initializes with empty played notes', () => {
    const { result } = renderHook(() => useKeyboardState())
    expect(result.current.playedNotes.size).toBe(0)
  })

  it('plays a note on mouse down', async () => {
    const { result } = renderHook(() => useKeyboardState())

    await act(async () => {
      await result.current.handleMouseDown(60)
    })

    expect(result.current.playedNotes.has(60)).toBe(true)
    expect(audioService.playNote).toHaveBeenCalledWith(60)
  })

  it('stops a note on mouse up', async () => {
    const { result } = renderHook(() => useKeyboardState())

    await act(async () => {
      await result.current.handleMouseDown(60)
    })

    act(() => {
      result.current.handleMouseUp(60)
    })

    expect(result.current.playedNotes.has(60)).toBe(false)
    expect(audioService.stopNote).toHaveBeenCalledWith(60)
  })

  it('plays a note on mouse enter when mouse is down', async () => {
    const { result } = renderHook(() => useKeyboardState())

    // First press down on one note
    await act(async () => {
      await result.current.handleMouseDown(60)
    })

    // Clear the mock to only track the next note
    vi.clearAllMocks()

    // Then enter another note while mouse is still down
    await act(async () => {
      await result.current.handleMouseEnter(64)
    })

    expect(result.current.playedNotes.has(64)).toBe(true)
    expect(audioService.playNote).toHaveBeenCalledWith(64)
  })

  it('does not play a note on mouse enter when mouse is up', async () => {
    const { result } = renderHook(() => useKeyboardState())

    // Clear any previous mock calls
    vi.clearAllMocks()

    await act(async () => {
      await result.current.handleMouseEnter(60)
    })

    expect(result.current.playedNotes.has(60)).toBe(false)
    expect(audioService.playNote).not.toHaveBeenCalled()
  })

  it('stops a note on mouse leave', async () => {
    const { result } = renderHook(() => useKeyboardState())

    await act(async () => {
      await result.current.handleMouseDown(60)
    })

    act(() => {
      result.current.handleMouseLeave(60)
    })

    expect(result.current.playedNotes.has(60)).toBe(false)
    expect(audioService.stopNote).toHaveBeenCalledWith(60)
  })
})
