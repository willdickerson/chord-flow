import React, { useState } from 'react'
import { audioService } from '../services/audioService'

export const PlaybackButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    if (isPlaying || isGenerating) return

    try {
      setIsGenerating(true)
      setError(null)
      
      await audioService.initialize()
      
      // Generate path in next tick to allow loading state to render
      await new Promise(resolve => setTimeout(resolve, 0))
      const sequence = audioService.generateGiantStepsSequence()
      
      setIsGenerating(false)
      setIsPlaying(true)
      await audioService.playTriadSequence(sequence)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsPlaying(false)
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleClick}
        disabled={isPlaying || isGenerating}
        className={`px-6 py-3 rounded-lg font-semibold transition-colors relative
          ${
            isPlaying || isGenerating
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
      >
        {isGenerating ? (
          <>
            <span className="opacity-0">Play Giant Steps</span>
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" 
                   style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" 
                   style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" 
                   style={{ animationDelay: '300ms' }}></div>
            </div>
          </>
        ) : isPlaying ? (
          'Playing...'
        ) : (
          'Play Giant Steps'
        )}
      </button>
      
      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}
    </div>
  )
}