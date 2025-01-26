import React from 'react'

export type DisplayOption = 'keyboard' | 'notation' | 'both'

interface DisplayControlsProps {
  activeDisplay: DisplayOption
  onChange: (display: DisplayOption) => void
  isEditing?: boolean
}

export const DisplayControls: React.FC<DisplayControlsProps> = ({
  activeDisplay,
  onChange,
  isEditing = false,
}) => {
  const handleNotationClick = () => {
    if (!isEditing) {
      onChange('notation')
    }
  }

  return (
    <div className="flex gap-2 justify-center">
      <button
        onClick={() => onChange('keyboard')}
        className={`py-1.5 px-3 rounded-md text-sm font-medium transition-colors outline-none ${
          activeDisplay === 'keyboard'
            ? 'bg-[#A4B494] text-[#2C1810] hover:bg-[#A4B494] focus:bg-[#A4B494] cursor-pointer'
            : 'bg-[#F5E6D3] text-[#2C1810] hover:bg-[#A4B494]/50 focus:bg-[#A4B494]/50 cursor-pointer'
        }`}
      >
        Keyboard
      </button>
      <button
        onClick={handleNotationClick}
        disabled={isEditing}
        aria-disabled={isEditing}
        className={`py-1.5 px-3 rounded-md text-sm font-medium transition-colors outline-none ${
          activeDisplay === 'notation' && !isEditing
            ? 'bg-[#A4B494] text-[#2C1810]'
            : 'bg-[#F5E6D3] text-[#2C1810]'
        } ${
          isEditing
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : 'hover:bg-[#A4B494]/50 focus:bg-[#A4B494]/50 cursor-pointer'
        }`}
      >
        Notation
      </button>
    </div>
  )
}
