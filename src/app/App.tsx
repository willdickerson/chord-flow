import { useState } from 'react'
import { PianoKeyboard } from '../common/components/PianoKeyboard'
import { PlaybackControls } from '../features/playback/PlaybackControls'
import { InstrumentSelector } from '../common/components/InstrumentSelector'

function App() {
  const [activeNotes, setActiveNotes] = useState<number[]>([])

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <header className="w-full border-b border-[#846C5B]/20">
        <div className="container mx-auto px-4 h-14 flex items-center">
          <h1 className="text-xl font-semibold">Chord Flow</h1>
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
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#2C1810] rounded-lg">
          </div>
          <main className="relative w-full p-8 bg-[#F5E6D3] rounded-lg">
            <div className="space-y-6">
              <div className="space-y-6">
                <InstrumentSelector />
                <PlaybackControls onNotesChange={setActiveNotes} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
