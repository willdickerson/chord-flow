import React from 'react'
import {
  ChordMode,
  SeventhVoiceLeadingState,
  VoiceLeadingState,
} from '../../common/types'

type AnyVoiceLeadingState = VoiceLeadingState | SeventhVoiceLeadingState

interface VoiceLeadingControlsProps {
  onVoiceLeadingChange: (voices: AnyVoiceLeadingState) => void
  isEnabled: boolean
  chordMode?: ChordMode
}

const TRIAD_VOICES: Array<{ key: keyof VoiceLeadingState; label: string }> = [
  { key: 'bass', label: 'Bass' },
  { key: 'middle', label: 'Middle' },
  { key: 'high', label: 'High' },
]

const SEVENTH_VOICES: Array<{
  key: keyof SeventhVoiceLeadingState
  label: string
}> = [
  { key: 'bass', label: 'Bass' },
  { key: 'tenor', label: 'Tenor' },
  { key: 'alto', label: 'Alto' },
  { key: 'soprano', label: 'Soprano' },
]

export const VoiceLeadingControls: React.FC<VoiceLeadingControlsProps> = ({
  onVoiceLeadingChange,
  isEnabled,
  chordMode = 'triad',
}) => {
  const initial: AnyVoiceLeadingState =
    chordMode === 'seventh'
      ? { bass: true, tenor: true, alto: true, soprano: true }
      : { bass: true, middle: true, high: true }

  const [selectedVoices, setSelectedVoices] =
    React.useState<AnyVoiceLeadingState>(initial)

  React.useEffect(() => {
    setSelectedVoices(initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chordMode])

  const voices =
    chordMode === 'seventh'
      ? SEVENTH_VOICES
      : (TRIAD_VOICES as Array<{ key: string; label: string }>)

  const handleVoiceToggle = (voice: string) => {
    if (!isEnabled) return
    const newVoices = {
      ...selectedVoices,
      [voice]: !(selectedVoices as unknown as Record<string, boolean>)[voice],
    } as AnyVoiceLeadingState
    if (Object.values(newVoices).some(v => v)) {
      setSelectedVoices(newVoices)
      onVoiceLeadingChange(newVoices)
    }
  }

  const gridCols = voices.length === 4 ? 'grid-cols-4' : 'grid-cols-3'

  return (
    <details className="w-full group">
      <summary className="cursor-pointer p-2 border border-[#846C5B]/20 rounded-md text-sm font-medium group-open:rounded-b-none group-open:border-b-0 group/summary">
        <span className="text-[#2C1810] group-hover/summary:text-[#2C1810]/80 transition-colors">
          Voice Leading
        </span>
      </summary>
      <div className="flex flex-col items-stretch gap-3 p-3 border-b border-x border-[#846C5B]/20 rounded-b-md">
        <p className="text-sm text-[#846C5B]">
          Select which voices to consider when generating voice leading.
        </p>
        <div className={`grid ${gridCols} w-full gap-2`}>
          {voices.map(({ key, label }) => {
            const isSelected = (selectedVoices as unknown as Record<string, boolean>)[key]
            return (
              <button
                key={key}
                onClick={() => handleVoiceToggle(key)}
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
                title={`Optimize ${label} Voice`}
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
