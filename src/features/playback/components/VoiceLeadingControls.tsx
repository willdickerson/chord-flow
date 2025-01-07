import React from 'react'

interface VoiceLeadingControlsProps {
  onVoiceLeadingChange: (voices: { bass: boolean; middle: boolean; high: boolean }) => void
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
        newState: newVoices
      })
      setSelectedVoices(newVoices)
      onVoiceLeadingChange(newVoices)
    } else {
      console.log('Prevented deselecting all voices')
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 py-2">
      {/* Bass Voice */}
      <button
        onClick={() => handleVoiceToggle('bass')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
          ${isEnabled 
            ? 'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' 
            : 'opacity-50 cursor-not-allowed'
          }
          ${selectedVoices.bass 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-gray-50 text-gray-500'
          }`}
        disabled={!isEnabled}
        title="Optimize Bass Voice"
      >
        Bass
      </button>

      {/* Middle Voice */}
      <button
        onClick={() => handleVoiceToggle('middle')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
          ${isEnabled 
            ? 'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' 
            : 'opacity-50 cursor-not-allowed'
          }
          ${selectedVoices.middle 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-gray-50 text-gray-500'
          }`}
        disabled={!isEnabled}
        title="Optimize Middle Voice"
      >
        Middle
      </button>

      {/* High Voice */}
      <button
        onClick={() => handleVoiceToggle('high')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
          ${isEnabled 
            ? 'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' 
            : 'opacity-50 cursor-not-allowed'
          }
          ${selectedVoices.high 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-gray-50 text-gray-500'
          }`}
        disabled={!isEnabled}
        title="Optimize High Voice"
      >
        High
      </button>
    </div>
  )
}
