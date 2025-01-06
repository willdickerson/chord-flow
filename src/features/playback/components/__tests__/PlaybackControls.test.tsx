import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlaybackControls } from '../PlaybackControls'
import { usePlaybackState } from '../../hooks/usePlaybackState'

// Mock the usePlaybackState hook
vi.mock('../../hooks/usePlaybackState')
vi.mock('../../../../services/audioService', () => ({
  audioService: {
    getInitialChordNames: () => ['C', 'G', 'Am', 'F'],
  },
}))

describe('PlaybackControls', () => {
  const mockOnNotesChange = vi.fn()

  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks()
  })

  it('renders play button in initial state', () => {
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: null,
      currentPosition: 0,
      isGenerating: false,
      isPlaying: false,
      error: null,
      handlePlayback: vi.fn(),
      handleRestart: vi.fn(),
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Restart' })).toBeDisabled()
  })

  it('shows loading state while generating', () => {
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: null,
      currentPosition: 0,
      isGenerating: true,
      isPlaying: false,
      error: null,
      handlePlayback: vi.fn(),
      handleRestart: vi.fn(),
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    const loadingButton = screen.getByRole('button', { name: 'Loading' })
    expect(loadingButton).toBeDisabled()
    expect(loadingButton).toHaveClass('bg-gray-100')
  })

  it('shows pause button when playing', async () => {
    const user = userEvent.setup()
    const mockHandlePlayback = vi.fn()
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: [{ chordName: 'C', midiNotes: [60, 64, 67] }],
      currentPosition: 0,
      isGenerating: false,
      isPlaying: true,
      error: null,
      handlePlayback: mockHandlePlayback,
      handleRestart: vi.fn(),
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    const pauseButton = screen.getByRole('button', { name: 'Pause' })
    expect(pauseButton).toBeInTheDocument()
    expect(pauseButton).toHaveClass('bg-purple-100')

    await user.click(pauseButton)
    expect(mockHandlePlayback).toHaveBeenCalled()
  })

  it('enables restart button when sequence exists', async () => {
    const user = userEvent.setup()
    const mockHandleRestart = vi.fn()
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: [{ chordName: 'C', midiNotes: [60, 64, 67] }],
      currentPosition: 0,
      isGenerating: false,
      isPlaying: false,
      error: null,
      handlePlayback: vi.fn(),
      handleRestart: mockHandleRestart,
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    const restartButton = screen.getByRole('button', { name: 'Restart' })
    expect(restartButton).toBeEnabled()

    await user.click(restartButton)
    expect(mockHandleRestart).toHaveBeenCalled()
  })

  it('displays error message when error exists', () => {
    const errorMessage = 'Test error message'
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: null,
      currentPosition: 0,
      isGenerating: false,
      isPlaying: false,
      error: errorMessage,
      handlePlayback: vi.fn(),
      handleRestart: vi.fn(),
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
