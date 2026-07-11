import React from 'react'

export type DisplayOption = 'keyboard' | 'notation' | 'tablature'

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
  // Keyboard is always available; the score-like views are disabled while
  // editing (the app forces the keyboard view during edits).
  const options: Array<{
    value: DisplayOption
    label: string
    disabledWhileEditing: boolean
  }> = [
    { value: 'keyboard', label: 'Keyboard', disabledWhileEditing: false },
    { value: 'notation', label: 'Notation', disabledWhileEditing: true },
    { value: 'tablature', label: 'Tab', disabledWhileEditing: true },
  ]

  return (
    <div className="flex gap-2 justify-center">
      {options.map(({ value, label, disabledWhileEditing }) => {
        const disabled = disabledWhileEditing && isEditing
        return (
          <button
            key={value}
            onClick={() => {
              if (!disabled) {
                onChange(value)
              }
            }}
            disabled={disabled}
            aria-disabled={disabled}
            className={`py-1.5 px-3 rounded-md text-sm font-medium transition-colors outline-none ${
              activeDisplay === value && !disabled
                ? 'bg-[#A4B494] text-[#2C1810] hover:bg-[#A4B494] focus:bg-[#A4B494] cursor-pointer'
                : 'bg-[#F5E6D3] text-[#2C1810] hover:bg-[#A4B494]/50 focus:bg-[#A4B494]/50 cursor-pointer'
            } ${
              disabled
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : 'hover:bg-[#A4B494] focus:bg-[#A4B494] cursor-pointer'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
