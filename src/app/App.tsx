import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PianoKeyboard } from '../features/keyboard/PianoKeyboard'
import { PlaybackControls } from '../features/playback/PlaybackControls'
import { InstrumentSelector } from '../features/playback/InstrumentSelector'
import { useParams, useNavigate } from 'react-router-dom'
import { decodeChartData } from '../common/utils/urlUtils'
import { audioService } from '../services/audioService'
import { InfoModal } from '../features/info/InfoModal'
import { SheetMusic } from '../features/playback/SheetMusic'
import {
  DisplayControls,
  DisplayOption,
} from '../features/playback/DisplayControls'

function ChartRoute() {
  const { encodedData } = useParams()
  const navigate = useNavigate()
  const [activeNotes, setActiveNotes] = useState<number[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [activeDisplay, setActiveDisplay] = useState<DisplayOption>('keyboard')
  const [currentChords, setCurrentChords] = useState<string[]>([])
  const [initialChartData] = useState(() => {
    if (encodedData) {
      try {
        const data = decodeChartData(encodedData)
        audioService.setCurrentChordNames(data.chords)
        setCurrentChords(data.chords)
        return data
      } catch (error) {
        console.error('Failed to decode chart data:', error)
      }
    }
    return null
  })

  return (
    <div className="flex-1">
      <div className="container mx-auto pt-4">
        <DisplayControls
          activeDisplay={activeDisplay}
          onChange={setActiveDisplay}
          isEditing={isEditing}
        />
      </div>

      <div className="container mx-auto pt-4 relative">
        <div
          className={`absolute w-full transition-opacity duration-200 ${
            activeDisplay === 'keyboard' || isEditing
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <PianoKeyboard activeNotes={activeNotes} />
        </div>

        <div
          className={`absolute w-full transition-opacity duration-200 ${
            activeDisplay === 'notation' && !isEditing
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex justify-center">
            <SheetMusic
              activeNotes={activeNotes}
              currentChords={currentChords}
            />
          </div>
        </div>

        {/* Invisible div to maintain height */}
        <div className="invisible">
          <PianoKeyboard activeNotes={[]} />
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#2C1810] rounded-lg"></div>
          <main className="relative w-full p-8 bg-[#F5E6D3] rounded-lg">
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <InstrumentSelector />
                  <div className="flex-none">
                    <InfoModal />
                  </div>
                </div>
                <PlaybackControls
                  onNotesChange={setActiveNotes}
                  initialChordNames={initialChartData?.chords}
                  title={initialChartData?.title}
                  composer={initialChartData?.composer}
                  onChartChange={chartData => {
                    setCurrentChords(chartData?.chords ?? [])
                    if (chartData === null) {
                      setActiveDisplay('keyboard')
                      return
                    }
                    if (chartData) {
                      navigate('/')
                    }
                  }}
                  onEditingChange={isEditing => {
                    setIsEditing(isEditing)
                    if (isEditing) {
                      setActiveDisplay('keyboard')
                    }
                  }}
                  isEditing={isEditing}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col">
        {/* Header */}
        <header className="w-full border-b-2 border-[#2C1810]">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <a
              href="/"
              className="text-xl font-semibold text-[#2C1810] flex items-center gap-2 hover:text-[#846C5B] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" />
              </svg>
              <span className="font-bold tracking-wide">Chord Flow</span>
            </a>
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

        <Routes>
          <Route path="/chart/:encodedData" element={<ChartRoute />} />
          <Route path="/" element={<ChartRoute />} />
        </Routes>

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
    </Router>
  )
}

export default App
