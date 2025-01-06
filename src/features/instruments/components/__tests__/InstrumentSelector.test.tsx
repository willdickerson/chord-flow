import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InstrumentSelector } from '../InstrumentSelector';
import { audioService } from '../../../../services/audioService';

// Mock audioService
vi.mock('../../../../services/audioService', () => ({
  audioService: {
    setInstrument: vi.fn(),
  }
}));

describe('InstrumentSelector', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all instrument buttons', () => {
    render(<InstrumentSelector />);
    
    expect(screen.getByRole('button', { name: /synth/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /piano/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /guitar/i })).toBeInTheDocument();
  });

  it('highlights selected instrument', () => {
    render(<InstrumentSelector />);
    
    const synthButton = screen.getByRole('button', { name: /synth/i });
    const pianoButton = screen.getByRole('button', { name: /piano/i });
    
    // Initially synth should be selected
    expect(synthButton).toHaveClass('bg-purple-100');
    expect(pianoButton).not.toHaveClass('bg-purple-100');
    
    // Click piano
    fireEvent.click(pianoButton);
    expect(synthButton).not.toHaveClass('bg-purple-100');
    expect(pianoButton).toHaveClass('bg-purple-100');
  });

  it('calls audioService.setInstrument when instrument is selected', () => {
    render(<InstrumentSelector />);
    
    const pianoButton = screen.getByRole('button', { name: /piano/i });
    fireEvent.click(pianoButton);
    
    expect(audioService.setInstrument).toHaveBeenCalledWith('piano');
  });

  it('applies hover styles to unselected instruments', () => {
    render(<InstrumentSelector />);
    
    const pianoButton = screen.getByRole('button', { name: /piano/i });
    expect(pianoButton).toHaveClass('hover:bg-gray-100');
  });
});
