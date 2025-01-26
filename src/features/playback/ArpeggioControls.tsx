import React from 'react'

type ArpeggioType = 'ascending' | 'descending' | 'alternating'

interface ArpeggioControlsProps {
  onArpeggioTypeChange: (type: ArpeggioType) => void
  isEnabled: boolean
}

export const ArpeggioControls: React.FC<ArpeggioControlsProps> = ({
  onArpeggioTypeChange,
  isEnabled,
}) => {
  const [selectedType, setSelectedType] =
    React.useState<ArpeggioType>('ascending')

  const handleTypeToggle = (type: ArpeggioType) => {
    if (!isEnabled) return
    setSelectedType(type)
    onArpeggioTypeChange(type)
  }

  return (
    <details className="w-full group">
      <summary className="cursor-pointer p-2 border border-[#846C5B]/20 rounded-md text-sm font-medium group-open:rounded-b-none group-open:border-b-0 group/summary">
        <span className="text-[#2C1810] group-hover/summary:text-[#2C1810]/80 transition-colors">
          Arpeggio Style
        </span>
      </summary>
      <div className="flex flex-col items-stretch gap-3 p-3 border-b border-x border-[#846C5B]/20 rounded-b-md">
        <p className="text-sm text-[#846C5B]">
          Select how notes are played when the arpeggio feature is active.
        </p>
        <div className="grid grid-cols-3 w-full gap-2">
          <button
            onClick={() => handleTypeToggle('ascending')}
            className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium transition-colors outline-none ${
              selectedType === 'ascending' && isEnabled
                ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448] cursor-pointer'
                : isEnabled
                  ? 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20 cursor-pointer'
                  : 'bg-[#F5E6D3] text-[#846C5B]/50 pointer-events-none'
            }`}
          >
            Ascending
          </button>
          <button
            onClick={() => handleTypeToggle('descending')}
            className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium transition-colors outline-none ${
              selectedType === 'descending' && isEnabled
                ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448] cursor-pointer'
                : isEnabled
                  ? 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20 cursor-pointer'
                  : 'bg-[#F5E6D3] text-[#846C5B]/50 pointer-events-none'
            }`}
          >
            Descending
          </button>
          <button
            onClick={() => handleTypeToggle('alternating')}
            className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium transition-colors outline-none ${
              selectedType === 'alternating' && isEnabled
                ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448] cursor-pointer'
                : isEnabled
                  ? 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20 cursor-pointer'
                  : 'bg-[#F5E6D3] text-[#846C5B]/50 pointer-events-none'
            }`}
          >
            Alternating
          </button>
        </div>
      </div>
    </details>
  )
}
