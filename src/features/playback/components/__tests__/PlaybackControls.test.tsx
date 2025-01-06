import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlaybackControls } from '../PlaybackControls'
import { usePlaybackState } from '../../hooks/usePlaybackState'

// Mock Tone.js
vi.mock('tone', () => ({
  start: vi.fn(),
  Sampler: vi.fn(),
  PolySynth: vi.fn(),
}))

// Mock the usePlaybackState hook
vi.mock('../../hooks/usePlaybackState')

// Mock audioService
vi.mock('../../../../services/audioService', () => ({
  audioService: {
    getInitialChordNames: () => ['C', 'G', 'Am', 'F'],
    initialize: vi.fn(),
    getCurrentInstrument: () => ({
      triggerAttack: vi.fn(),
      triggerRelease: vi.fn(),
    }),
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

    expect(screen.getByRole('button', { name: 'Loading' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Restart' })).toBeDisabled()
  })

  it('shows pause button when playing', () => {
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: [],
      currentPosition: 0,
      isGenerating: false,
      isPlaying: true,
      error: null,
      handlePlayback: vi.fn(),
      handleRestart: vi.fn(),
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Restart' })).toBeEnabled()
  })

  it('enables restart button when sequence is available', () => {
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: [],
      currentPosition: 0,
      isGenerating: false,
      isPlaying: false,
      error: null,
      handlePlayback: vi.fn(),
      handleRestart: vi.fn(),
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    expect(screen.getByRole('button', { name: 'Restart' })).toBeEnabled()
  })

  it('calls handlePlayback when play/pause button is clicked', async () => {
    const mockHandlePlayback = vi.fn()
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: [],
      currentPosition: 0,
      isGenerating: false,
      isPlaying: false,
      error: null,
      handlePlayback: mockHandlePlayback,
      handleRestart: vi.fn(),
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Play' }))

    expect(mockHandlePlayback).toHaveBeenCalled()
  })

  it('calls handleRestart when restart button is clicked', async () => {
    const mockHandleRestart = vi.fn()
    vi.mocked(usePlaybackState).mockReturnValue({
      sequence: [],
      currentPosition: 0,
      isGenerating: false,
      isPlaying: false,
      error: null,
      handlePlayback: vi.fn(),
      handleRestart: mockHandleRestart,
      handlePositionSelect: vi.fn(),
    })

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Restart' }))

    expect(mockHandleRestart).toHaveBeenCalled()
  })
})
