import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Key } from '../Key';

describe('Key', () => {
  const defaultProps = {
    x: 0,
    y: 0,
    width: 20,
    height: 100,
    isBlack: false,
    isActive: false,
    midiNote: 60,
    onMouseDown: vi.fn(),
    onMouseUp: vi.fn(),
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn(),
  };

  const getKeyElement = () => document.querySelector('rect');

  it('renders white key correctly', () => {
    render(<svg><Key {...defaultProps} /></svg>);
    
    const key = getKeyElement();
    expect(key).toBeInTheDocument();
    expect(key?.classList.toString()).toContain('fill-white');
    expect(key?.classList.toString()).toContain('stroke-gray-300');
  });

  it('renders black key correctly', () => {
    render(<svg><Key {...defaultProps} isBlack={true} /></svg>);
    
    const key = getKeyElement();
    expect(key).toBeInTheDocument();
    expect(key?.classList.toString()).toContain('fill-gray-800');
  });

  it('applies active styles when key is active', () => {
    render(<svg><Key {...defaultProps} isActive={true} /></svg>);
    
    const key = getKeyElement();
    expect(key).toBeInTheDocument();
    expect(key?.classList.toString()).toContain('fill-purple-100');
  });

  it('positions key correctly using x and y coordinates', () => {
    const x = 100;
    const y = 0;
    render(<svg><Key {...defaultProps} x={x} y={y} /></svg>);
    
    const key = getKeyElement();
    expect(key).toBeInTheDocument();
    expect(key).toHaveAttribute('x', x.toString());
    expect(key).toHaveAttribute('y', y.toString());
  });

  it('applies correct dimensions', () => {
    const width = 30;
    const height = 120;
    render(<svg><Key {...defaultProps} width={width} height={height} /></svg>);
    
    const key = getKeyElement();
    expect(key).toBeInTheDocument();
    expect(key).toHaveAttribute('width', width.toString());
    expect(key).toHaveAttribute('height', height.toString());
  });

  it('calls mouse event handlers', () => {
    render(<svg><Key {...defaultProps} /></svg>);
    
    const key = getKeyElement();
    expect(key).toBeInTheDocument();
    
    fireEvent.mouseDown(key as Element);
    expect(defaultProps.onMouseDown).toHaveBeenCalledWith(defaultProps.midiNote);
    
    fireEvent.mouseUp(key as Element);
    expect(defaultProps.onMouseUp).toHaveBeenCalledWith(defaultProps.midiNote);
    
    fireEvent.mouseEnter(key as Element);
    expect(defaultProps.onMouseEnter).toHaveBeenCalledWith(defaultProps.midiNote);
    
    fireEvent.mouseLeave(key as Element);
    expect(defaultProps.onMouseLeave).toHaveBeenCalledWith(defaultProps.midiNote);
  });
});
