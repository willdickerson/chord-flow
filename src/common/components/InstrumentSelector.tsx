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
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-100 focus:bg-purple-100'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100 focus:bg-gray-100'
          }`}
      >
        <KeyboardMusic className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('piano')}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors outline-none ${
            selectedInstrument === 'piano'
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-100 focus:bg-purple-100'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100 focus:bg-gray-100'
          }`}
      >
        <Piano className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('guitar')}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors outline-none ${
            selectedInstrument === 'guitar'
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-100 focus:bg-purple-100'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100 focus:bg-gray-100'
          }`}
      >
        <Guitar className="w-4 h-4" />
      </button>
    </div>
  )
}
