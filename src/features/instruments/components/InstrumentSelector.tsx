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
          transition-colors focus:bg-purple-100 focus:text-purple-700 focus-visible:bg-purple-100 focus-visible:text-purple-700 ${
            selectedInstrument === 'synth'
              ? 'bg-purple-100 text-purple-700 focus:bg-purple-100 focus:text-purple-700 focus-visible:bg-purple-100 focus-visible:text-purple-700'
              : 'bg-gray-50 text-gray-500 hover:bg-purple-100 hover:text-purple-700 active:bg-purple-100 active:text-purple-700'
          }`}
      >
        <KeyboardMusic className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('piano')}
        aria-label="Piano"
        aria-pressed={selectedInstrument === 'piano'}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors focus:bg-purple-100 focus:text-purple-700 focus-visible:bg-purple-100 focus-visible:text-purple-700 ${
            selectedInstrument === 'piano'
              ? 'bg-purple-100 text-purple-700 focus:bg-purple-100 focus:text-purple-700 focus-visible:bg-purple-100 focus-visible:text-purple-700'
              : 'bg-gray-50 text-gray-500 hover:bg-purple-100 hover:text-purple-700 active:bg-purple-100 active:text-purple-700'
          }`}
      >
        <Piano className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleSelect('guitar')}
        aria-label="Guitar"
        aria-pressed={selectedInstrument === 'guitar'}
        className={`min-w-8 h-8 flex items-center justify-center rounded-md
          transition-colors focus:bg-purple-100 focus:text-purple-700 focus-visible:bg-purple-100 focus-visible:text-purple-700 ${
            selectedInstrument === 'guitar'
              ? 'bg-purple-100 text-purple-700 focus:bg-purple-100 focus:text-purple-700 focus-visible:bg-purple-100 focus-visible:text-purple-700'
              : 'bg-gray-50 text-gray-500 hover:bg-purple-100 hover:text-purple-700 active:bg-purple-100 active:text-purple-700'
          }`}
      >
        <Guitar className="w-4 h-4" />
      </button>
    </div>
  )
}
