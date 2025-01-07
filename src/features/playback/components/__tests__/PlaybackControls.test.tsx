import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlaybackControls } from '../PlaybackControls'
import { usePlaybackState } from '../../hooks/usePlaybackState'
import { audioService } from '../../../../services/audioService'

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
    get isArpeggiating() {
      return false
    },
    setArpeggiating: vi.fn(),
    getInitialArpeggiating: () => false,
    getChordDuration: () => 670,
    setChordDuration: vi.fn(),
    setVolume: vi.fn(),
    setLooping: vi.fn(),
    playTriad: vi.fn(),
  },
}))

describe('PlaybackControls', () => {
  const mockOnNotesChange = vi.fn()
  const mockedAudioService = vi.mocked(audioService)

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

  it('toggles arpeggiator when button is clicked', async () => {
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

    const user = userEvent.setup()
    const arpButton = screen.getByRole('button', { name: /Enable Arpeggiator/ })
    
    // Initial state - not arpeggiating
    expect(arpButton).toHaveClass('text-gray-600')
    
    // Click to enable
    await user.click(arpButton)
    expect(arpButton).toHaveClass('text-purple-700')
    
    // Click to disable
    await user.click(arpButton)
    expect(arpButton).toHaveClass('text-gray-600')
  })

  it('initializes with arpeggiator disabled', () => {
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

    const arpButton = screen.getByRole('button', { name: /Enable Arpeggiator/ })
    expect(arpButton).toHaveClass('text-gray-600')
  })

  it('toggles mute when volume button is clicked', async () => {
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

    const user = userEvent.setup()
    const muteButton = screen.getByRole('button', { name: 'Mute' })
    const volumeSlider = screen.getByRole('slider', { name: 'Volume' })

    // Initial state
    expect(volumeSlider).toHaveValue('25')

    // Click to mute
    await user.click(muteButton)
    expect(volumeSlider).toHaveValue('0')
    expect(screen.getByRole('button', { name: 'Unmute' })).toBeInTheDocument()

    // Click to unmute
    await user.click(screen.getByRole('button', { name: 'Unmute' }))
    expect(volumeSlider).toHaveValue('25')
    expect(screen.getByRole('button', { name: 'Mute' })).toBeInTheDocument()
  })

  it('updates volume when slider is changed', async () => {
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

    const volumeSlider = screen.getByRole('slider', { name: 'Volume' })

    // Change volume to 40
    fireEvent.change(volumeSlider, { target: { value: '40' } })
    expect(volumeSlider).toHaveValue('40')
    expect(mockedAudioService.setVolume).toHaveBeenCalledWith(40)
  })

  it('updates chord duration when slider is changed', async () => {
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

    const durationSlider = screen.getByRole('slider', { name: 'Chord Duration' })

    // Initial value should be 670
    expect(durationSlider).toHaveValue('670')

    // Change duration to 1000
    fireEvent.change(durationSlider, { target: { value: '1000' } })
    expect(durationSlider).toHaveValue('1000')
    expect(mockedAudioService.setChordDuration).toHaveBeenCalledWith(1000)
  })

  it('toggles loop when loop button is clicked', async () => {
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

    const user = userEvent.setup()
    const loopButton = screen.getByRole('button', { name: /Enable Loop/ })
    
    // Initial state - not looping
    expect(loopButton).toHaveClass('text-gray-600')
    
    // Click to enable
    await user.click(loopButton)
    expect(loopButton).toHaveClass('text-purple-700')
    
    // Click to disable
    await user.click(loopButton)
    expect(loopButton).toHaveClass('text-gray-600')
  })
})
