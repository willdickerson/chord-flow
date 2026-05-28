import React from 'react'
import { ChordMode } from '../../common/types'

interface ChordModeControlsProps {
  mode: ChordMode
  onModeChange: (mode: ChordMode) => void
  isEnabled: boolean
}

const OPTIONS: Array<{ value: ChordMode; label: string; title: string }> = [
  { value: 'triad', label: 'Triads', title: '3-note chords' },
  { value: 'seventh', label: '7ths', title: '4-note chords' },
]

export const ChordModeControls: React.FC<ChordModeControlsProps> = ({
  mode,
  onModeChange,
  isEnabled,
}) => {
  return (
    <details className="w-full group">
      <summary className="cursor-pointer p-2 border border-[#846C5B]/20 rounded-md text-sm font-medium group-open:rounded-b-none group-open:border-b-0 group/summary">
        <span className="text-[#2C1810] group-hover/summary:text-[#2C1810]/80 transition-colors">
          Chord Mode
        </span>
      </summary>
      <div className="flex flex-col items-stretch gap-3 p-3 border-b border-x border-[#846C5B]/20 rounded-b-md">
        <p className="text-sm text-[#846C5B]">
          Pick whether to voice chords as triads or seventh chords.
        </p>
        <div className="grid grid-cols-2 w-full gap-2">
          {OPTIONS.map(({ value, label, title }) => {
            const isSelected = mode === value
            return (
              <button
                key={value}
                onClick={() => isEnabled && onModeChange(value)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                  ${
                    !isEnabled
                      ? isSelected
                        ? 'bg-[#E3B448]/30 text-[#2C1810]/50'
                        : 'bg-[#F5E6D3]/50 text-[#846C5B]/50'
                      : isSelected
                        ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
                        : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/10 focus:bg-[#E3B448]/10'
                  }
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B448]/50
                  ${!isEnabled ? 'cursor-not-allowed pointer-events-none' : ''}`}
                disabled={!isEnabled}
                title={title}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </details>
  )
}
