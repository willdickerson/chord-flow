import { Piano, KeyboardMusic, Guitar } from 'lucide-react'
import { InstrumentType, audioService } from '../../../services/audioService'
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
        aria-label="Synth"
        aria-pressed={selectedInstrument === 'synth'}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors ${
            selectedInstrument === 'synth'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
      >
        <KeyboardMusic className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('piano')}
        aria-label="Piano"
        aria-pressed={selectedInstrument === 'piano'}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors ${
            selectedInstrument === 'piano'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
      >
        <Piano className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('guitar')}
        aria-label="Guitar"
        aria-pressed={selectedInstrument === 'guitar'}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors ${
            selectedInstrument === 'guitar'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
      >
        <Guitar className="w-4 h-4" />
      </button>
    </div>
  )
}
