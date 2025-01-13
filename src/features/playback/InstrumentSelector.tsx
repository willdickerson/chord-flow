import { Piano, KeyboardMusic, Guitar } from 'lucide-react'
import { InstrumentType, audioService } from '../../services/audioService'
import { useState } from 'react'

export const InstrumentSelector = () => {
  const [selectedInstrument, setSelectedInstrument] =
    useState<InstrumentType>('synth')

  const handleSelect = (instrument: InstrumentType) => {
    setSelectedInstrument(instrument)
    audioService.setInstrument(instrument)
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => handleSelect('synth')}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors outline-none ${
            selectedInstrument === 'synth'
              ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
              : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20'
          }`}
      >
        <KeyboardMusic className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('piano')}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors outline-none ${
            selectedInstrument === 'piano'
              ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
              : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20'
          }`}
      >
        <Piano className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('guitar')}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors outline-none ${
            selectedInstrument === 'guitar'
              ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
              : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20'
          }`}
      >
        <Guitar className="w-4 h-4" />
      </button>
    </div>
  )
}
