import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChordChart } from '../ChordChart'
import type { Triad } from '../../../../types'

// Mock Tone.js
vi.mock('tone', () => ({
  start: vi.fn(),
  Sampler: vi.fn(),
  PolySynth: vi.fn(),
}))

// Mock audioService
vi.mock('../../../../services/audioService', () => ({
  audioService: {
    initialize: vi.fn(),
    getCurrentInstrument: () => ({
      triggerAttack: vi.fn(),
      triggerRelease: vi.fn(),
    }),
  },
}))

describe('ChordChart', () => {
  const mockSequence: Triad[] = [
    { chordName: 'C', midiNotes: [60, 64, 67] },
    { chordName: 'G', midiNotes: [55, 59, 62] },
    { chordName: 'Am', midiNotes: [57, 60, 64] },
    { chordName: 'F', midiNotes: [53, 57, 60] },
  ]

  const mockInitialChordNames = ['C', 'G', 'Am', 'F']
  const mockOnNotesChange = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders initial chord names when no sequence', () => {
    render(
      <ChordChart
        sequence={null}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={false}
        initialChordNames={mockInitialChordNames}
        isPlaying={false}
        onNotesChange={mockOnNotesChange}
      />
    )

    mockInitialChordNames.forEach(chordName => {
      expect(screen.getByText(chordName)).toBeInTheDocument()
    })
  })

  it('renders sequence chords when available', () => {
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
        isPlaying={false}
        onNotesChange={mockOnNotesChange}
      />
    )

    mockSequence.forEach(({ chordName }) => {
      expect(screen.getByText(chordName)).toBeInTheDocument()
    })
  })

  it('highlights current position', () => {
    const currentPosition = 1
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={currentPosition}
        onPositionSelect={() => {}}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
        isPlaying={false}
        onNotesChange={mockOnNotesChange}
      />
    )

    // Check current chord is highlighted
    const currentChordButton = screen.getByText(mockSequence[currentPosition].chordName)
    expect(currentChordButton).toHaveClass('bg-purple-100', 'text-purple-700')

    // Check other chords are not highlighted
    mockSequence.forEach(({ chordName }, index) => {
      if (index !== currentPosition) {
        const button = screen.getByText(chordName)
        expect(button).toHaveClass('bg-gray-50', 'text-gray-600')
      }
    })
  })

  it('calls onPositionSelect when chord is clicked', async () => {
    const user = userEvent.setup()
    const mockOnPositionSelect = vi.fn()
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={mockOnPositionSelect}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
        isPlaying={false}
        onNotesChange={mockOnNotesChange}
      />
    )

    const secondChordButton = screen.getByText(mockSequence[1].chordName)
    await user.click(secondChordButton)
    expect(mockOnPositionSelect).toHaveBeenCalledWith(1)
  })

  it('renders non-interactive divs when not enabled', () => {
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={false}
        initialChordNames={mockInitialChordNames}
        isPlaying={false}
        onNotesChange={mockOnNotesChange}
      />
    )

    // Should not find any buttons
    const buttons = screen.queryAllByRole('button')
    expect(buttons).toHaveLength(0)

    // Should find divs with chord names
    mockSequence.forEach(({ chordName }) => {
      const div = screen.getByText(chordName)
      expect(div.tagName).toBe('DIV')
    })
  })

  it('groups chords into rows of 8', () => {
    // Create a sequence with 10 chords to test row grouping
    const testSequence: Triad[] = Array.from({ length: 10 }, (_, i) => ({
      chordName: `Chord${i}`,
      midiNotes: [60 + i],
    }))

    render(
      <ChordChart
        sequence={testSequence}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={true}
        initialChordNames={[]}
        isPlaying={false}
        onNotesChange={mockOnNotesChange}
      />
    )

    // Should find two rows
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(2)

    // First row should have 8 chords
    const firstRowChords = rows[0].querySelectorAll('button')
    expect(firstRowChords).toHaveLength(8)

    // Second row should have 2 chords
    const secondRowChords = rows[1].querySelectorAll('button')
    expect(secondRowChords).toHaveLength(2)

    // Verify the chord names are in the correct order
    testSequence.forEach((chord, index) => {
      const rowIndex = Math.floor(index / 8)
      const button = rows[rowIndex].querySelector(`button:nth-child(${(index % 8) + 1})`)
      expect(button).toHaveTextContent(chord.chordName)
    })
  })
})
