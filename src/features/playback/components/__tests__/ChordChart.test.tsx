import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChordChart } from '../ChordChart';

describe('ChordChart', () => {
  const mockSequence = [
    { chordName: 'C', notes: [60, 64, 67] },
    { chordName: 'G', notes: [55, 59, 62] },
    { chordName: 'Am', notes: [57, 60, 64] },
    { chordName: 'F', notes: [53, 57, 60] },
  ];

  const mockInitialChordNames = ['C', 'G', 'Am', 'F'];

  it('renders initial chord names when no sequence', () => {
    render(
      <ChordChart
        sequence={null}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={false}
        initialChordNames={mockInitialChordNames}
      />
    );

    mockInitialChordNames.forEach(chordName => {
      expect(screen.getByText(chordName)).toBeInTheDocument();
    });
  });

  it('renders sequence chords when available', () => {
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
      />
    );

    mockSequence.forEach(({ chordName }) => {
      expect(screen.getByText(chordName)).toBeInTheDocument();
    });
  });

  it('highlights current position', () => {
    const currentPosition = 1;
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={currentPosition}
        onPositionSelect={() => {}}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
      />
    );

    const currentChord = screen.getByText(mockSequence[currentPosition].chordName);
    expect(currentChord.parentElement).toHaveAttribute('data-current', 'true');
  });

  it('calls onPositionSelect when chord is clicked', () => {
    const mockOnPositionSelect = vi.fn();
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={mockOnPositionSelect}
        isEnabled={true}
        initialChordNames={mockInitialChordNames}
      />
    );

    const secondChord = screen.getByText(mockSequence[1].chordName);
    fireEvent.click(secondChord);
    expect(mockOnPositionSelect).toHaveBeenCalledWith(1);
  });

  it('disables chord selection when not enabled', () => {
    render(
      <ChordChart
        sequence={mockSequence}
        currentPosition={0}
        onPositionSelect={() => {}}
        isEnabled={false}
        initialChordNames={mockInitialChordNames}
      />
    );

    mockSequence.forEach(({ chordName }) => {
      const chord = screen.getByText(chordName);
      expect(chord.parentElement).not.toHaveAttribute('onClick');
    });
  });
});
