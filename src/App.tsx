import { useState } from 'react'
import { PianoKeyboard } from './features/keyboard/components/PianoKeyboard'
import { PlaybackControls } from './features/playback/components/PlaybackControls'
import { InstrumentSelector } from './features/instruments/components/InstrumentSelector'

function App() {
  const [activeNotes, setActiveNotes] = useState<number[]>([])

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <header className="w-full border-b border-gray-200">
        <div className="container mx-auto px-4 h-14 flex items-center">
          <h1 className="text-xl font-semibold text-gray-900">Chord Flow</h1>
        </div>
      </header>

      {/* Piano Keyboard */}
      <div className="w-full">
        <div className="container mx-auto">
          <PianoKeyboard activeNotes={activeNotes} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex items-center justify-center p-4">
        <main className="w-full max-w-lg rounded-xl border border-gray-200 p-8">
          <div className="space-y-6">
            <div className="space-y-6">
              <InstrumentSelector />
              <PlaybackControls onNotesChange={setActiveNotes} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
