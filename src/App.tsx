import { InstrumentSelector } from './components/InstrumentSelector'
import { PlaybackControls } from './components/PlaybackButton'

function App() {
  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center p-4">
      <main className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-gray-900">
              Giant Steps Voice Leading
            </h1>
            <p className="text-sm text-gray-600">
              Experience the first four chords of Coltrane's Giant Steps with optimal voice leading between chord transitions.
            </p>
          </div>
          
          <div className="space-y-6">
            <InstrumentSelector />
            <PlaybackControls />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App