import React from 'react';
import { Triad } from '../types';

interface ChordChartProps {
  sequence: Triad[] | null;
  currentPosition: number;
  onPositionSelect: (position: number) => void;
}

export const ChordChart: React.FC<ChordChartProps> = ({ 
  sequence, 
  currentPosition,
  onPositionSelect,
}) => {
  if (!sequence) return null;

  // Group chords into rows of 8
  const rows = sequence.reduce((acc, triad, index) => {
    const rowIndex = Math.floor(index / 8);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push({ triad, index });
    return acc;
  }, [] as { triad: Triad, index: number }[][]);

  return (
    <div className="space-y-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map(({ triad, index }) => (
            <button
              key={index}
              onClick={() => onPositionSelect(index)}
              className={`w-[60px] px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-center
                ${index === currentPosition
                  ? 'bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200'
                  : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100'
                }`}
            >
              {triad.chordName}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
