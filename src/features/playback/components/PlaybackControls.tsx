import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { usePlaybackState } from '../hooks/usePlaybackState';
import { ChordChart } from './ChordChart';
import { audioService } from '../../../services/audioService';

interface PlaybackControlsProps {
  onNotesChange: (notes: number[]) => void;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({ onNotesChange }) => {
  const {
    sequence,
    currentPosition,
    isGenerating,
    isPlaying,
    error,
    handlePlayback,
    handleRestart,
    handlePositionSelect,
  } = usePlaybackState(onNotesChange);

  const initialChordNames = audioService.getInitialChordNames();

  return (
    <div className="space-y-4">
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      
      <div className="flex gap-3">
        <button
          onClick={handlePlayback}
          disabled={isGenerating}
          className={`min-w-12 h-12 flex items-center justify-center rounded-md
            transition-colors
            ${isGenerating 
              ? 'bg-gray-100 text-gray-400' 
              : isPlaying
                ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {isGenerating ? (
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                   style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                   style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                   style={{ animationDelay: '300ms' }}></div>
            </div>
          ) : (
            isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />
          )}
        </button>

        <button
          onClick={handleRestart}
          disabled={isGenerating || !sequence}
          className={`min-w-12 h-12 flex items-center justify-center rounded-md
            transition-colors
            ${isGenerating || !sequence
              ? 'bg-gray-100 text-gray-400'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-purple-100 active:text-purple-700'
            }`}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <ChordChart
        sequence={sequence}
        currentPosition={currentPosition}
        onPositionSelect={handlePositionSelect}
        isEnabled={!isGenerating && sequence !== null}
        initialChordNames={initialChordNames}
      />
    </div>
  );
};
