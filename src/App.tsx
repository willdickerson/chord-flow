import { PlaybackButton } from './components/PlaybackButton'
import { InstrumentSelector } from './components/InstrumentSelector'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Chord Flow Demo
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Select an instrument and click play to hear the first four chords of Giant Steps
          with optimal voice leading.
        </p>
        <div className="space-y-6">
          <InstrumentSelector />
          <PlaybackButton />
        </div>
      </div>
    </div>
  )
}

export default App