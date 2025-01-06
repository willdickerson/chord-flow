import { useState, useRef, useCallback } from 'react';
import { audioService } from '../../../services/audioService';
import { Triad } from '../../../types';

export const usePlaybackState = (onNotesChange: (notes: number[]) => void) => {
  const [sequence, setSequence] = useState<Triad[] | null>(null);
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const displayedNotesRef = useRef<number[]>([]);

  const generateSequence = async () => {
    try {
      setIsGenerating(true);
      setError(null);
      await audioService.initialize();
      
      await new Promise(resolve => setTimeout(resolve, 0));
      const newSequence = audioService.generateGiantStepsSequence();
      setSequence(newSequence);
      setCurrentPosition(0);
      displayedNotesRef.current = [];
      return newSequence;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePlayback = async () => {
    if (isGenerating) return;
    
    try {
      setError(null);
      
      if (isPlaying) {
        audioService.stopPlayback();
        setIsPlaying(false);
        onNotesChange(displayedNotesRef.current);
        return;
      }

      let currentSequence = sequence;
      if (!currentSequence) {
        currentSequence = await generateSequence();
        if (!currentSequence) return;
      }
      
      setIsPlaying(true);
      
      await audioService.playTriadSequence(
        currentSequence,
        (notes) => {
          displayedNotesRef.current = notes;
          onNotesChange(notes);
        },
        currentPosition,
        (position) => {
          setCurrentPosition(position);
        }
      );
      
      setIsPlaying(false);
      if (!audioService.shouldStop) {
        displayedNotesRef.current = [];
        onNotesChange([]);
        setCurrentPosition(0);
        audioService.setPosition(0);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsPlaying(false);
      onNotesChange(displayedNotesRef.current);
    }
  };

  const handleRestart = useCallback(() => {
    if (isGenerating || !sequence) return;

    audioService.restart();
    setIsPlaying(false);
    setCurrentPosition(0);
    displayedNotesRef.current = [];
    onNotesChange([]);
  }, [isGenerating, sequence, onNotesChange]);

  const handlePositionSelect = useCallback((position: number) => {
    if (isGenerating || !sequence) return;

    // If playing, stop playback first
    if (isPlaying) {
      audioService.stopPlayback();
      setIsPlaying(false);
    }

    // Update position
    setCurrentPosition(position);
    audioService.setPosition(position);

    // Show the notes for this chord
    const selectedChord = sequence[position];
    if (selectedChord) {
      displayedNotesRef.current = selectedChord.midiNotes;
      onNotesChange(selectedChord.midiNotes);
    }
  }, [isGenerating, sequence, isPlaying, onNotesChange]);

  return {
    sequence,
    currentPosition,
    isGenerating,
    isPlaying,
    error,
    handlePlayback,
    handleRestart,
    handlePositionSelect,
  };
};
