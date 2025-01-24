import React from 'react'

interface TriadControlsProps {
  onTriadTypeChange: (type: 'open' | 'close') => void
  isEnabled: boolean
}

export const TriadControls: React.FC<TriadControlsProps> = ({
  onTriadTypeChange,
  isEnabled,
}) => {
  const [selectedType, setSelectedType] = React.useState<'open' | 'close'>(
    'open'
  )

  const handleTypeToggle = (type: 'open' | 'close') => {
    if (!isEnabled) return
    setSelectedType(type)
    onTriadTypeChange(type)
  }

  return (
    <details className="w-full group">
      <summary className="cursor-pointer p-2 border border-[#846C5B]/20 rounded-md text-sm font-medium group-open:rounded-b-none group-open:border-b-0 group/summary">
        <span className="text-[#2C1810] group-hover/summary:text-[#2C1810]/80 transition-colors">
          Triad Style
        </span>
      </summary>
      <div className="flex flex-col items-stretch gap-3 p-3 border-b border-x border-[#846C5B]/20 rounded-b-md">
        <p className="text-sm text-[#846C5B]">
          Select which type of triads to use when generating chord voicings.
        </p>
        <div className="grid grid-cols-2 w-full gap-2">
          {/* open Triads */}
          <button
            onClick={() => handleTypeToggle('open')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${
                !isEnabled
                  ? selectedType === 'open'
                    ? 'bg-[#E3B448]/30 text-[#2C1810]/50'
                    : 'bg-[#F5E6D3]/50 text-[#846C5B]/50'
                  : selectedType === 'open'
                    ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#C9A558] focus:bg-[#C9A558]'
                    : 'bg-[#F5E6D3] text-[#2C1810] hover:bg-[#E3B448]/10 focus:bg-[#E3B448]/10'
              }
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B448]/50
              ${!isEnabled ? 'cursor-not-allowed pointer-events-none' : ''}`}
            disabled={!isEnabled}
            title="Use open Triads"
          >
            open
          </button>

          {/* Close Triads */}
          <button
            onClick={() => handleTypeToggle('close')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${
                !isEnabled
                  ? selectedType === 'close'
                    ? 'bg-[#E3B448]/30 text-[#2C1810]/50'
                    : 'bg-[#F5E6D3]/50 text-[#846C5B]/50'
                  : selectedType === 'close'
                    ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#C9A558] focus:bg-[#C9A558]'
                    : 'bg-[#F5E6D3] text-[#2C1810] hover:bg-[#E3B448]/10 focus:bg-[#E3B448]/10'
              }
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B448]/50
              ${!isEnabled ? 'cursor-not-allowed pointer-events-none' : ''}`}
            disabled={!isEnabled}
            title="Use Close Triads"
          >
            Close
          </button>
        </div>
      </div>
    </details>
  )
}
