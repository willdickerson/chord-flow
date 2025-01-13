import { useState } from 'react'
import { PianoKeyboard } from '../features/keyboard/PianoKeyboard'
import { PlaybackControls } from '../features/playback/PlaybackControls'
import { InstrumentSelector } from '../features/playback/InstrumentSelector'

function App() {
  const [activeNotes, setActiveNotes] = useState<number[]>([])

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <header className="w-full border-b-2 border-[#2C1810]">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#2C1810] flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" />
            </svg>
            <span className="font-bold tracking-wide">Chord Flow</span>
          </h1>
          <a
            href="https://github.com/willdickerson/chord-flow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm px-2 py-1 rounded-md transition-colors text-[#2C1810] hover:text-[#846C5B]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="M12 .3a12 12 0 0 0-3.789 23.418c.6.113.82-.26.82-.577v-2.234c-3.338.725-4.04-1.418-4.04-1.418-.547-1.386-1.338-1.757-1.338-1.757-1.094-.748.084-.733.084-.733 1.21.084 1.845 1.24 1.845 1.24 1.076 1.852 2.83 1.317 3.515 1.007.108-.8.42-1.317.763-1.62-2.665-.3-5.467-1.334-5.467-5.934 0-1.313.47-2.387 1.24-3.228-.124-.302-.54-1.523.12-3.176 0 0 1.012-.324 3.31 1.23a10.84 10.84 0 0 1 6.018 0c2.3-1.554 3.31-1.23 3.31-1.23.66 1.653.244 2.874.12 3.176.77.84 1.24 1.915 1.24 3.228 0 4.61-2.807 5.633-5.48 5.928.42.36.81 1.1.81 2.22v3.293c0 .31.21.698.82.58A12 12 0 0 0 12 .3" />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto pt-4">
          <PianoKeyboard activeNotes={activeNotes} />
        </div>

        <div className="container mx-auto flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#2C1810] rounded-lg"></div>
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

      {/* Footer */}
      <footer className="w-full border-t-2 border-[#2C1810]">
        <div className="container mx-auto px-4 h-14 flex items-center justify-center gap-1.5 text-[#2C1810]">
          <span>Made by</span>
          <a
            href="https://github.com/willdickerson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C1810] hover:text-[#846C5B] transition-colors"
          >
            @willdickerson
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
