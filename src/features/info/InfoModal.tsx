import { Info, X } from 'lucide-react'
import { useState } from 'react'

export const InfoModal = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Info
        size={16}
        className="text-[#846C5B] hover:text-[#2C1810]/80 transition-colors cursor-pointer"
        onClick={() => setShowModal(true)}
        aria-label="Information"
      />

      {showModal && (
        <div className="fixed -top-4 -right-4 -bottom-4 -left-4 bg-[#2C1810]/50 flex items-center justify-center z-[9999] p-4">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
            <div className="relative bg-[#F5E6D3] rounded-lg p-4 sm:p-6">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 min-w-8 h-8 flex items-center justify-center rounded-md bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="space-y-4 sm:space-y-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh]">
                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">
                    What is Chord Flow?
                  </h3>
                  <p className="text-sm text-[#846C5B]">
                    Chord Flow is an interactive music practice tool for
                    learning jazz harmony. It helps you master chord
                    progressions through visualization and voice leading,
                    showing you the smoothest ways to connect chords on your
                    instrument.
                  </p>
                </section>

                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">Features</h3>
                  <ul className="text-sm text-[#846C5B] list-disc list-inside space-y-1 sm:space-y-2">
                    <li>Configurable arpeggio and triad styles</li>
                    <li>Extensive library of jazz standards</li>
                    <li>MIDI export and shareable chord charts</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">
                    How to Use
                  </h3>
                  <ul className="text-sm text-[#846C5B] list-disc list-inside space-y-1 sm:space-y-2">
                    <li>Choose a song or create your own progression</li>
                    <li>Set your preferred tempo and instrument sound</li>
                    <li>Press play to hear the progression</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">
                    Practice Tips
                  </h3>
                  <ul className="text-sm text-[#846C5B] list-disc list-inside space-y-1 sm:space-y-2">
                    <li>
                      Follow the voice leading for smooth chord transitions
                    </li>
                    <li>Use loop mode to master sequences</li>
                    <li>Try different triad types and styles</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">
                    Mobile Audio Note
                  </h3>
                  <p className="text-sm text-[#846C5B]">
                    For audio playback on mobile devices, make sure your phone
                    is unmuted or use headphones.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
