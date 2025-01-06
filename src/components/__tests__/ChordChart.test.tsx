import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ChordChart } from '../ChordChart'
import { Triad } from '../../types'

describe('ChordChart', () => {
  const mockSequence: Triad[] = [
    { chordName: 'Bmaj7', midiNotes: [71, 75, 78] },
    { chordName: 'D7', midiNotes: [62, 66, 69] },
    { chordName: 'Gmaj7', midiNotes: [67, 71, 74] },
    { chordName: 'Bb7', midiNotes: [70, 74, 77] },
  ]

  const mockInitialChordNames = ['Bmaj7', 'D7', 'Gmaj7', 'Bb7']

  it('renders sequence chords in a grid', () => {
    const onPositionSelect = vi.fn()
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={onPositionSelect}
        isEnabled={true}
      />
    )

    // Should render all chords from the sequence
    mockSequence.forEach(({ chordName }) => {
      expect(screen.getByText(chordName)).toBeInTheDocument()
    })
  })

  it('renders initial chord names when sequence is null', () => {
    const onPositionSelect = vi.fn()
    render(
      <ChordChart
        sequence={null}
        currentPosition={0}
        onPositionSelect={onPositionSelect}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
      />
    )

    // Should render all initial chord names
    mockInitialChordNames.forEach(chordName => {
      expect(screen.getByText(chordName)).toBeInTheDocument()
    })
  })

  it('highlights current position', () => {
    const onPositionSelect = vi.fn()
    const currentPosition = 1
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={currentPosition}
        onPositionSelect={onPositionSelect}
        isEnabled={true}
      />
    )

    // Current position should have purple background
    const currentChord = screen.getByText(
      mockSequence[currentPosition].chordName
    )
    expect(currentChord.className).toContain('bg-purple-100')
  })

  it('calls onPositionSelect when chord is clicked', () => {
    const onPositionSelect = vi.fn()
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={onPositionSelect}
        isEnabled={true}
      />
    )

    // Click the second chord
    fireEvent.click(screen.getByText(mockSequence[1].chordName))
    expect(onPositionSelect).toHaveBeenCalledWith(1)
  })

  it('disables chord selection when isEnabled is false', () => {
    const onPositionSelect = vi.fn()
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={onPositionSelect}
        isEnabled={false}
      />
    )

    // Chords should be rendered as divs, not buttons
    mockSequence.forEach(({ chordName }) => {
      const chord = screen.getByText(chordName)
      expect(chord.tagName).toBe('DIV')
    })
  })

  it('groups chords into rows of 8', () => {
    const longSequence: Triad[] = Array(10)
      .fill(null)
      .map((_, i) => ({
        chordName: `Chord${i}`,
        midiNotes: [60 + i, 64 + i, 67 + i],
      }))

    render(
      <ChordChart
        sequence={longSequence}
        currentPosition={0}
        onPositionSelect={vi.fn()}
        isEnabled={true}
      />
    )

    // Should create two rows
    const rows = screen.getAllByRole('button')
    expect(rows).toHaveLength(10)

    // First row should have 8 chords, second row should have 2
    const rowDivs = screen
      .getAllByRole('generic')
      .filter(div => div.className.includes('flex gap-2'))
    expect(rowDivs).toHaveLength(2)
  })
})
