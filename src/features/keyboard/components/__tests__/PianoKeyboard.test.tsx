import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { PianoKeyboard } from '../PianoKeyboard';
import { KEYBOARD_CONFIG } from '../../constants';

const mockUseKeyboardState = vi.fn(() => ({
  playedNotes: new Set(),
  handleMouseDown: vi.fn(),
  handleMouseUp: vi.fn(),
  handleMouseEnter: vi.fn(),
  handleMouseLeave: vi.fn(),
}));

vi.mock('../../hooks/useKeyboardState', () => ({
  useKeyboardState: () => mockUseKeyboardState(),
}));

describe('PianoKeyboard', () => {
  it('renders all keys within the MIDI range', () => {
    render(<PianoKeyboard activeNotes={[]} />);
    
    // Get the SVG element first
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // Then find all rect elements within the SVG
    const keys = svg?.querySelectorAll('rect');
    expect(keys?.length).toBeGreaterThan(0);
    
    const totalOctaves = Math.floor((KEYBOARD_CONFIG.midiEnd - KEYBOARD_CONFIG.midiStart) / 12);
    const expectedWhiteKeys = totalOctaves * 7 + 1; // 7 white keys per octave plus final C
    const expectedBlackKeys = totalOctaves * 5; // 5 black keys per octave
    
    expect(keys?.length).toBe(expectedWhiteKeys + expectedBlackKeys);
  });

  it('renders white keys with correct styling', () => {
    render(<PianoKeyboard activeNotes={[]} />);
    
    const svg = document.querySelector('svg');
    const whiteKeys = Array.from(svg?.querySelectorAll('rect') || [])
      .filter(key => key.getAttribute('fill') === 'white');
    
    expect(whiteKeys.length).toBeGreaterThan(0);
    whiteKeys.forEach(key => {
      expect(key).toHaveAttribute('stroke', '#d1d5db');
      expect(key).toHaveAttribute('stroke-width', '1');
      expect(key).toHaveAttribute('rx', '2');
    });
  });

  it('highlights active notes with purple color', () => {
    const activeNotes = [60, 64, 67]; // C major triad
    render(<PianoKeyboard activeNotes={activeNotes} />);
    
    const svg = document.querySelector('svg');
    const purpleKeys = Array.from(svg?.querySelectorAll('rect') || [])
      .filter(key => key.getAttribute('fill') === '#9333ea');
    
    expect(purpleKeys).toHaveLength(activeNotes.length);
  });

  it('renders SVG with correct dimensions and properties', () => {
    render(<PianoKeyboard activeNotes={[]} />);
    
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('preserveAspectRatio', 'xMidYMid meet');
    expect(svg).toHaveAttribute('height', KEYBOARD_CONFIG.whiteKeyHeight.toString());
  });

  it('positions black keys relative to white keys', () => {
    render(<PianoKeyboard activeNotes={[]} />);
    
    const svg = document.querySelector('svg');
    const blackKeys = Array.from(svg?.querySelectorAll('rect') || [])
      .filter(key => !key.getAttribute('fill')?.includes('white') && 
                     !key.getAttribute('fill')?.includes('#9333ea'));
    
    blackKeys.forEach(key => {
      const x = parseFloat(key.getAttribute('x') || '0');
      const width = parseFloat(key.getAttribute('width') || '0');
      expect(x).toBeGreaterThan(0);
      expect(width).toBeLessThan(KEYBOARD_CONFIG.keyWidth);
    });
  });
});
