import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChordChart } from '../ChordChart'
import type { Triad } from '../../../../types'

describe('ChordChart', () => {
  const mockSequence: Triad[] = [
    { chordName: 'C', midiNotes: [60, 64, 67] },
    { chordName: 'G', midiNotes: [55, 59, 62] },
    { chordName: 'Am', midiNotes: [57, 60, 64] },
    { chordName: 'F', midiNotes: [53, 57, 60] },
  ]

  const mockInitialChordNames = ['C', 'G', 'Am', 'F']

  it('renders initial chord names when no sequence', () => {
    render(
      <ChordChart
        sequence={null}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={false}
        initialChordNames={mockInitialChordNames}
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
      />
    )

    mockSequence.forEach(({ chordName }) => {
      expect(screen.getByText(chordName)).toBeInTheDocument()
    })
  })

  it('highlights current position and renders others as not current', () => {
    const currentPosition = 1
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={currentPosition}
        onPositionSelect={() => {}}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
      />
    )

    // Check current chord is highlighted
    const currentChordButton = screen.getByRole('button', {
      name: mockSequence[currentPosition].chordName,
    })
    expect(currentChordButton).toHaveAttribute('data-current', 'true')

    // Check other chords are not highlighted
    mockSequence.forEach(({ chordName }, index) => {
      if (index !== currentPosition) {
        const button = screen.getByRole('button', { name: chordName })
        expect(button).toHaveAttribute('data-current', 'false')
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
      />
    )

    const secondChordButton = screen.getByRole('button', {
      name: mockSequence[1].chordName,
    })
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
      />
    )

    // Should not find any buttons
    const buttons = screen.queryAllByRole('button')
    expect(buttons).toHaveLength(0)

    // Should find all chords as text in divs
    mockSequence.forEach(({ chordName }) => {
      const chord = screen.getByText(chordName)
      expect(chord.parentElement?.tagName).toBe('DIV')
    })
  })

  it('groups chords into rows of 8', () => {
    const longSequence: Triad[] = Array.from({ length: 10 }, (_, i) => ({
      chordName: `Chord${i}`,
      midiNotes: [60 + i],
    }))

    render(
      <ChordChart
        sequence={longSequence}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={true}
        initialChordNames={[]}
      />
    )

    // Should find two rows
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(2)

    // First row should have 8 chords
    expect(rows[0].querySelectorAll('button')).toHaveLength(8)

    // Second row should have 2 chords
    expect(rows[1].querySelectorAll('button')).toHaveLength(2)
  })
})
