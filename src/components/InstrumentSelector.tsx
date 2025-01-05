import React from 'react'
import { InstrumentType, audioService } from '../services/audioService'

const instruments: { value: InstrumentType; label: string }[] = [
  { value: 'piano', label: 'Piano' },
  { value: 'synth', label: 'Synth' },
]

export const InstrumentSelector: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    audioService.setInstrument(event.target.value as InstrumentType)
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="instrument" className="text-sm font-medium text-gray-700">
        Instrument:
      </label>
      <select
        id="instrument"
        onChange={handleChange}
        className="block w-full rounded-md border-gray-300 shadow-sm 
                 focus:border-blue-500 focus:ring-blue-500 sm:text-sm
                 py-2 px-3 bg-white"
        defaultValue="piano"
      >
        {instruments.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}