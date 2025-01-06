import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, fireEvent, act } from '@testing-library/react'
import { PianoKeyboard } from '../PianoKeyboard'
import { audioService } from '../../services/audioService'

// Mock audioService
vi.mock('../../services/audioService', () => ({
  audioService: {
    initialize: vi.fn().mockResolvedValue(undefined),
    playNote: vi.fn(),
    stopNote: vi.fn(),
  },
}))

describe('PianoKeyboard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders piano keyboard with correct number of keys', () => {
    const { container } = render(<PianoKeyboard activeNotes={[]} />)

    // Count white keys (7 per octave plus final C)
    const whiteKeys = container.querySelectorAll('rect[fill="white"]')
    const totalOctaves = Math.floor((108 - 24) / 12) // MIDI_END - MIDI_START
    expect(whiteKeys).toHaveLength(totalOctaves * 7 + 1)

    // Count black keys (5 per octave)
    const blackKeys = container.querySelectorAll('rect[fill="#1f2937"]')
    expect(blackKeys).toHaveLength(totalOctaves * 5)
  })

  it('highlights active notes', () => {
    const activeNotes = [60, 64, 67] // C4, E4, G4
    const { container } = render(<PianoKeyboard activeNotes={activeNotes} />)

    // Count highlighted keys
    const highlightedKeys = container.querySelectorAll('rect[fill="#9333ea"]')
    expect(highlightedKeys).toHaveLength(3)
  })

  it('initializes audio on mount', () => {
    render(<PianoKeyboard activeNotes={[]} />)
    expect(audioService.initialize).toHaveBeenCalled()
  })

  it('plays note on mouse down', async () => {
    const { container } = render(<PianoKeyboard activeNotes={[]} />)
    const firstWhiteKey = container.querySelector('rect[fill="white"]')!

    await act(async () => {
      fireEvent.mouseDown(firstWhiteKey)
    })

    expect(audioService.playNote).toHaveBeenCalled()
  })

  it('stops note on mouse up', async () => {
    const { container } = render(<PianoKeyboard activeNotes={[]} />)
    const firstWhiteKey = container.querySelector('rect[fill="white"]')!

    await act(async () => {
      fireEvent.mouseDown(firstWhiteKey)
      fireEvent.mouseUp(firstWhiteKey)
    })

    expect(audioService.stopNote).toHaveBeenCalled()
  })

  it('plays note on mouse enter while mouse is down', async () => {
    const { container } = render(<PianoKeyboard activeNotes={[]} />)
    const keys = container.querySelectorAll('rect[fill="white"]')
    const [firstKey, secondKey] = [keys[0], keys[1]]

    // First simulate mousedown on first key
    await act(async () => {
      fireEvent.mouseDown(firstKey)
      // Wait for the async playNote to complete
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Then simulate mouseenter on second key
    await act(async () => {
      fireEvent.mouseEnter(secondKey)
      // Wait for the async playNote to complete
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(audioService.playNote).toHaveBeenCalledTimes(2)
  })

  it('does not play note on mouse enter when mouse is up', async () => {
    const { container } = render(<PianoKeyboard activeNotes={[]} />)
    const keys = container.querySelectorAll('rect[fill="white"]')
    const secondKey = keys[1]

    await act(async () => {
      fireEvent.mouseEnter(secondKey)
    })

    expect(audioService.playNote).not.toHaveBeenCalled()
  })

  it('stops note on mouse leave', async () => {
    const { container } = render(<PianoKeyboard activeNotes={[]} />)
    const firstWhiteKey = container.querySelector('rect[fill="white"]')!

    await act(async () => {
      fireEvent.mouseDown(firstWhiteKey)
      fireEvent.mouseLeave(firstWhiteKey)
    })

    expect(audioService.stopNote).toHaveBeenCalled()
  })

  it('handles global mouse up event', async () => {
    const { container } = render(<PianoKeyboard activeNotes={[]} />)
    const firstWhiteKey = container.querySelector('rect[fill="white"]')!

    await act(async () => {
      fireEvent.mouseDown(firstWhiteKey)
      // Simulate global mouse up
      fireEvent.mouseUp(window)
    })

    // Try to play a note by entering another key
    const secondKey = container.querySelectorAll('rect[fill="white"]')[1]
    await act(async () => {
      fireEvent.mouseEnter(secondKey)
    })

    // Should not play note since mouse is up
    expect(audioService.playNote).toHaveBeenCalledTimes(1)
  })

  it('handles errors when playing notes', async () => {
    const mockError = new Error('Audio error')
    const consoleSpy = vi.spyOn(console, 'error')

    // Mock initialize to succeed but playNote to fail
    vi.mocked(audioService.initialize).mockResolvedValueOnce(undefined)
    vi.mocked(audioService.playNote).mockImplementationOnce(() => {
      throw mockError
    })

    const { container } = render(<PianoKeyboard activeNotes={[]} />)
    const firstWhiteKey = container.querySelector('rect[fill="white"]')!

    await act(async () => {
      fireEvent.mouseDown(firstWhiteKey)
      // Wait for all promises to resolve/reject
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(consoleSpy).toHaveBeenCalledWith('Error playing note:', mockError)
    consoleSpy.mockRestore()
  })
})
