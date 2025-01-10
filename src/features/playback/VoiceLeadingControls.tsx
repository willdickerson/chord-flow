import React from 'react'

interface VoiceLeadingControlsProps {
  onVoiceLeadingChange: (voices: {
    bass: boolean
    middle: boolean
    high: boolean
  }) => void
  isEnabled: boolean
}

export const VoiceLeadingControls: React.FC<VoiceLeadingControlsProps> = ({
  onVoiceLeadingChange,
  isEnabled,
}) => {
  const [selectedVoices, setSelectedVoices] = React.useState({
    bass: true,
    middle: true,
    high: true,
  })

  const handleVoiceToggle = (voice: 'bass' | 'middle' | 'high') => {
    if (!isEnabled) return

    const newVoices = {
      ...selectedVoices,
      [voice]: !selectedVoices[voice],
    }

    // Ensure at least one voice is always selected
    if (Object.values(newVoices).some(v => v)) {
      console.log('Voice selection changed:', {
        voice,
        oldState: selectedVoices,
        newState: newVoices,
      })
      setSelectedVoices(newVoices)
      onVoiceLeadingChange(newVoices)
    } else {
      console.log('Prevented deselecting all voices')
    }
  }

  return (
    <details className="w-full group">
      <summary className="cursor-pointer p-2 border border-gray-200 rounded-md text-sm font-medium group-open:rounded-b-none group-open:border-b-0 group/summary">
        <span className="text-gray-700 group-hover/summary:text-gray-900 transition-colors">
          Voice Leading Options
        </span>
      </summary>
      <div className="flex flex-col items-stretch gap-3 p-3 border-b border-x border-gray-200 rounded-b-md">
        <p className="text-sm text-gray-600">
          Select which voices to optimize for minimal movement between chords.
        </p>
        <div className="grid grid-cols-3 w-full gap-2">
          {/* Bass Voice */}
          <button
            onClick={() => handleVoiceToggle('bass')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${
                !isEnabled
                  ? selectedVoices.bass
                    ? 'bg-purple-100/50 text-purple-700/50'
                    : 'bg-gray-50/50 text-gray-500/50'
                  : selectedVoices.bass
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-100'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }
              focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200
              ${!isEnabled ? 'cursor-not-allowed' : ''}`}
            disabled={!isEnabled}
            title="Optimize Bass Voice"
          >
            Bass
          </button>

          {/* Middle Voice */}
          <button
            onClick={() => handleVoiceToggle('middle')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${
                !isEnabled
                  ? selectedVoices.middle
                    ? 'bg-purple-100/50 text-purple-700/50'
                    : 'bg-gray-50/50 text-gray-500/50'
                  : selectedVoices.middle
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-100'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }
              focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200
              ${!isEnabled ? 'cursor-not-allowed' : ''}`}
            disabled={!isEnabled}
            title="Optimize Middle Voice"
          >
            Middle
          </button>

          {/* High Voice */}
          <button
            onClick={() => handleVoiceToggle('high')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${
                !isEnabled
                  ? selectedVoices.high
                    ? 'bg-purple-100/50 text-purple-700/50'
                    : 'bg-gray-50/50 text-gray-500/50'
                  : selectedVoices.high
                    ? 'bg-purple-100 text-purple-700 hover:bg-purple-100'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }
              focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200
              ${!isEnabled ? 'cursor-not-allowed' : ''}`}
            disabled={!isEnabled}
            title="Optimize High Voice"
          >
            High
          </button>
        </div>
      </div>
    </details>
  )
}
