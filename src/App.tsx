import { InstrumentSelector } from './components/InstrumentSelector'
import { PlaybackControls } from './components/PlaybackButton'
import { PianoKeyboard } from './components/PianoKeyboard'
import { useState } from 'react'

function App() {
  const [activeNotes, setActiveNotes] = useState<number[]>([])

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <header className="w-full border-b border-gray-100">
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
        <main className="w-full max-w-lg rounded-xl shadow-sm border border-gray-100 p-8">
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
              <PlaybackControls onNotesChange={setActiveNotes} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App