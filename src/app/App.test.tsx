import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import App from './App'

// tone's ESM build uses extensionless imports that Node can't resolve, and
// jsdom has no AudioContext — mock it out entirely. Nothing audio-related
// runs in these tests because the components that use it are mocked below.
vi.mock('tone', () => ({}))

// Mock the heavy child components
const mockPianoKeyboard = vi.fn()
vi.mock('../features/keyboard/PianoKeyboard', () => ({
  PianoKeyboard: (props: { activeNotes: number[] }) => {
    mockPianoKeyboard(props)
    return <div data-testid="piano-keyboard">Mock Piano</div>
  },
}))

vi.mock('../features/playback/PlaybackControls', () => ({
  PlaybackControls: ({
    onNotesChange,
  }: {
    onNotesChange: (notes: number[]) => void
  }) => (
    <div
      data-testid="playback-controls"
      onClick={() => onNotesChange([60, 64, 67])}
    >
      Mock PlaybackControls
    </div>
  ),
}))

vi.mock('../features/playback/InstrumentSelector', () => ({
  InstrumentSelector: () => (
    <div data-testid="instrument-selector">Mock InstrumentSelector</div>
  ),
}))

vi.mock('../features/playback/SheetMusic', () => ({
  SheetMusic: () => <div data-testid="sheet-music">Mock SheetMusic</div>,
}))

describe('App', () => {
  beforeEach(() => {
    mockPianoKeyboard.mockClear()
  })

  it('renders header with app title', () => {
    render(<App />)
    expect(screen.getByText('Chord Flow')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('renders all main components', () => {
    render(<App />)
    expect(screen.getAllByTestId('piano-keyboard').length).toBeGreaterThan(0)
    expect(screen.getByTestId('playback-controls')).toBeInTheDocument()
    expect(screen.getByTestId('instrument-selector')).toBeInTheDocument()
  })

  it('renders the footer attribution', () => {
    render(<App />)
    expect(screen.getByText('@willdickerson')).toBeInTheDocument()
  })

  it('updates activeNotes state when PlaybackControls triggers onNotesChange', async () => {
    render(<App />)

    // Initially no active notes
    expect(mockPianoKeyboard).toHaveBeenCalledWith(
      expect.objectContaining({ activeNotes: [] })
    )

    // Click playback controls to trigger onNotesChange
    await act(async () => {
      fireEvent.click(screen.getByTestId('playback-controls'))
    })

    // Should update PianoKeyboard with new notes
    expect(mockPianoKeyboard).toHaveBeenCalledWith(
      expect.objectContaining({ activeNotes: [60, 64, 67] })
    )
  })
})
