import { Music } from 'lucide-react'
import { InstrumentType, audioService } from '../services/audioService'

const instruments: { value: InstrumentType; label: string }[] = [
  { value: 'piano', label: 'Piano' },
  { value: 'synth', label: 'Synth' },
]

export const InstrumentSelector = () => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    audioService.setInstrument(event.target.value as InstrumentType)
  }

  return (
    <div className="flex items-center gap-3">
      <div className="min-w-8 h-8 flex items-center justify-center rounded-md bg-gray-50">
        <Music className="w-4 h-4 text-gray-500" />
      </div>
      <select
        onChange={handleChange}
        className="flex-1 w-full rounded-md border border-gray-200 py-2 px-3 text-sm
                 bg-white text-gray-900 shadow-sm outline-none
                 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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