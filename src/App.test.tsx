import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import App from './App'

// Mock child components
const mockPianoKeyboard = vi.fn()
vi.mock('./features/keyboard/components/PianoKeyboard', () => ({
  PianoKeyboard: (props: any) => {
    mockPianoKeyboard(props)
    return <div data-testid="piano-keyboard">Mock Piano</div>
  },
}))

vi.mock('./features/playback/components/PlaybackControls', () => ({
  PlaybackControls: vi.fn().mockImplementation(({ onNotesChange }) => (
    <div data-testid="playback-controls" onClick={() => onNotesChange([60, 64, 67])}>
      Mock PlaybackControls
    </div>
  )),
}))

vi.mock('./features/instruments/components/InstrumentSelector', () => ({
  InstrumentSelector: vi.fn().mockImplementation(() => (
    <div data-testid="instrument-selector">Mock InstrumentSelector</div>
  )),
}))

describe('App', () => {
  beforeEach(() => {
    mockPianoKeyboard.mockClear()
  })

  it('renders header with app title', () => {
    render(<App />)
    expect(screen.getByText('Chord Flow')).toBeInTheDocument()
  })

  it('renders main content with title and description', () => {
    render(<App />)
    expect(screen.getByText('Giant Steps Voice Leading')).toBeInTheDocument()
    expect(
      screen.getByText("Optimal voice leading triads for Coltrane's Giant Steps.")
    ).toBeInTheDocument()
  })

  it('renders all main components', () => {
    render(<App />)
    expect(screen.getByTestId('piano-keyboard')).toBeInTheDocument()
    expect(screen.getByTestId('playback-controls')).toBeInTheDocument()
    expect(screen.getByTestId('instrument-selector')).toBeInTheDocument()
  })

  it('updates activeNotes state when PlaybackControls triggers onNotesChange', async () => {
    render(<App />)
    
    // Initially no active notes
    expect(mockPianoKeyboard).toHaveBeenLastCalledWith(
      expect.objectContaining({ activeNotes: [] })
    )

    // Click playback controls to trigger onNotesChange
    await act(async () => {
      fireEvent.click(screen.getByTestId('playback-controls'))
    })

    // Should update PianoKeyboard with new notes
    expect(mockPianoKeyboard).toHaveBeenLastCalledWith(
      expect.objectContaining({ activeNotes: [60, 64, 67] })
    )
  })
})
