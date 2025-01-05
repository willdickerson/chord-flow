import { useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { audioService } from '../services/audioService'
import { Triad } from '../types'

export const PlaybackControls = () => {
  const [sequence, setSequence] = useState<Triad[] | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (isGenerating) return
    
    try {
      setIsGenerating(true)
      setError(null)
      await audioService.initialize()
      
      // Generate path in next tick to allow loading state to render
      await new Promise(resolve => setTimeout(resolve, 0))
      const newSequence = audioService.generateGiantStepsSequence()
      setSequence(newSequence)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsGenerating(false)
    }
  }

  const handlePlayback = async () => {
    if (!sequence || isGenerating) return
    
    try {
      setError(null)
      
      if (isPlaying) {
        // TODO: Implement pause functionality
        setIsPlaying(false)
      } else {
        setIsPlaying(true)
        await audioService.playTriadSequence(sequence)
        setIsPlaying(false)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setIsPlaying(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md
            font-medium text-sm transition-colors
            ${isGenerating 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : sequence
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
        >
          {isGenerating ? (
            <>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                     style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                     style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" 
                     style={{ animationDelay: '300ms' }}></div>
              </div>
              <span>Generating</span>
            </>
          ) : sequence ? (
            'Regenerate Path'
          ) : (
            'Generate Path'
          )}
        </button>

        <button
          onClick={handlePlayback}
          disabled={!sequence || isGenerating}
          className={`w-24 flex items-center justify-center gap-2 px-4 py-2 rounded-md
            font-medium text-sm transition-colors
            ${!sequence || isGenerating
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>
      
      {error && (
        <div className="p-3 rounded-md bg-red-50 border border-red-100">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  )
}