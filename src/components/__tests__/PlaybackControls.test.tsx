import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { PlaybackControls } from '../PlaybackControls'
import { audioService } from '../../services/audioService'

// Mock audioService
vi.mock('../../services/audioService', () => ({
  audioService: {
    initialize: vi.fn().mockResolvedValue(undefined),
    generateGiantStepsSequence: vi.fn(),
    playTriadSequence: vi.fn(),
    stopPlayback: vi.fn(),
    restart: vi.fn(),
    setPosition: vi.fn(),
    getInitialChordNames: vi
      .fn()
      .mockReturnValue(['Bmaj7', 'D7', 'Gmaj7', 'Bb7']),
    shouldStop: false,
  },
}))

// Mock ChordChart component
vi.mock('../ChordChart', () => ({
  ChordChart: vi.fn().mockImplementation(({ onPositionSelect }) => (
    <div data-testid="chord-chart" onClick={() => onPositionSelect(1)}>
      Mock ChordChart
    </div>
  )),
}))

describe('PlaybackControls', () => {
  const mockOnNotesChange = vi.fn()
  const mockSequence = [
    { chordName: 'Bmaj7', midiNotes: [71, 75, 78] },
    { chordName: 'D7', midiNotes: [62, 66, 69] },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(audioService.generateGiantStepsSequence).mockReturnValue(
      mockSequence
    )
    vi.mocked(audioService.playTriadSequence).mockImplementation(() =>
      Promise.resolve()
    )
  })

  it('renders initial state correctly', () => {
    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)
    expect(screen.getByText(/Generate & Play/)).toBeInTheDocument()
  })

  it('generates sequence when play button is clicked', async () => {
    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    await act(async () => {
      fireEvent.click(screen.getByText(/Generate & Play/))
      // Wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(audioService.initialize).toHaveBeenCalled()
    expect(audioService.generateGiantStepsSequence).toHaveBeenCalled()
    expect(audioService.playTriadSequence).toHaveBeenCalledWith(
      mockSequence,
      expect.any(Function),
      0,
      expect.any(Function)
    )
  })

  it('shows loading state while generating', async () => {
    // Make generateGiantStepsSequence take some time
    vi.mocked(audioService.generateGiantStepsSequence).mockImplementationOnce(
      () => {
        return new Promise(resolve => {
          setTimeout(() => resolve(mockSequence), 100)
        })
      }
    )

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    fireEvent.click(screen.getByText(/Generate & Play/))
    expect(screen.getByText('Generating')).toBeInTheDocument()
  })

  it('handles errors during generation', async () => {
    const error = new Error('Generation failed')
    vi.mocked(audioService.generateGiantStepsSequence).mockImplementationOnce(
      () => {
        throw error
      }
    )

    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    await act(async () => {
      fireEvent.click(screen.getByText(/Generate & Play/))
      // Wait for error state to be set
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    expect(screen.getByText('Generation failed')).toBeInTheDocument()
  })

  it('stops playback when pause is clicked', async () => {
    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    // First generate and start playing
    await act(async () => {
      // Click Generate & Play
      fireEvent.click(screen.getByText(/Generate & Play/))
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Mock playTriadSequence to not resolve immediately so we can see the playing state
    vi.mocked(audioService.playTriadSequence).mockImplementationOnce(
      () => new Promise(() => {}) // Never resolves
    )

    // Click Play to start playback
    await act(async () => {
      fireEvent.click(screen.getByText(/Play/))
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Now we should see the Pause button
    const pauseButton = screen.getByRole('button', { name: /pause/i })
    fireEvent.click(pauseButton)

    expect(audioService.stopPlayback).toHaveBeenCalled()
  })

  it('restarts playback when restart button is clicked', async () => {
    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    // First generate sequence
    await act(async () => {
      fireEvent.click(screen.getByText(/Generate & Play/))
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Find and click restart button (using aria-label)
    const restartButton = screen.getByLabelText('Restart')
    fireEvent.click(restartButton)

    expect(audioService.restart).toHaveBeenCalled()
    expect(mockOnNotesChange).toHaveBeenCalledWith([])
  })

  it('updates position when chord is selected', async () => {
    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    // First generate sequence
    await act(async () => {
      fireEvent.click(screen.getByText(/Generate & Play/))
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Click chord chart (mock will call onPositionSelect(1))
    fireEvent.click(screen.getByTestId('chord-chart'))

    expect(audioService.setPosition).toHaveBeenCalledWith(1)
    expect(mockOnNotesChange).toHaveBeenCalledWith(mockSequence[1].midiNotes)
  })

  it('handles sequence completion', async () => {
    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    // Start playing
    await act(async () => {
      fireEvent.click(screen.getByText(/Generate & Play/))
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Get the callbacks passed to playTriadSequence
    const [, onNotes, , onPosition] = vi.mocked(audioService.playTriadSequence)
      .mock.calls[0]

    // Simulate sequence progress
    onPosition(1)
    onNotes([62, 66, 69])

    expect(mockOnNotesChange).toHaveBeenCalledWith([62, 66, 69])
  })

  it('disables controls while generating', async () => {
    render(<PlaybackControls onNotesChange={mockOnNotesChange} />)

    // Start generating
    fireEvent.click(screen.getByText(/Generate & Play/))

    // Play button should be disabled
    const playButton = screen.getByRole('button', { name: /generating/i })
    expect(playButton).toBeDisabled()
  })
})
