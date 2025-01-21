import { Info, X } from 'lucide-react'
import { useState } from 'react'

export const InfoModal = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="min-w-8 h-8 flex items-center justify-center rounded-md bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448] transition-colors"
        aria-label="Information"
      >
        <Info size={16} />
      </button>

      {showModal && (
        <div className="fixed -top-4 -right-4 -bottom-4 -left-4 bg-[#2C1810]/50 flex items-center justify-center z-[9999] p-4">
          <div className="relative w-full max-w-2xl">
            <div className="relative bg-[#F5E6D3] rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-[#2C1810]">About Chord Flow</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="min-w-8 h-8 flex items-center justify-center rounded-md bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-6 overflow-y-auto max-h-[70vh]">
                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">What is Chord Flow?</h3>
                  <p className="text-sm text-[#846C5B]">
                    Chord Flow is an interactive music practice tool that helps you explore and understand chord progressions. 
                    It combines a virtual piano keyboard with intelligent voice leading to create smooth, natural-sounding chord transitions.
                  </p>
                </section>

                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">Features</h3>
                  <ul className="text-sm text-[#846C5B] list-disc list-inside space-y-2">
                    <li>Interactive piano keyboard with multiple instrument sounds</li>
                    <li>Pre-loaded chord progressions from famous jazz standards</li>
                    <li>Smart voice leading for smooth chord transitions</li>
                    <li>MIDI export capability</li>
                    <li>Shareable chord charts via URL</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">How to Use</h3>
                  <ul className="text-sm text-[#846C5B] list-disc list-inside space-y-2">
                    <li>Click on chord names to hear them played</li>
                    <li>Use the keyboard to play notes manually</li>
                    <li>Choose different instruments to practice with various sounds</li>
                    <li>Edit mode lets you create and modify chord progressions</li>
                    <li>Share your progressions with others using the export feature</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-medium text-[#2C1810] mb-2">Practice Tips</h3>
                  <ul className="text-sm text-[#846C5B] list-disc list-inside space-y-2">
                    <li>Start with simple progressions and gradually increase complexity</li>
                    <li>Listen to how voice leading creates smooth transitions between chords</li>
                    <li>Try different instruments to hear how the same progression sounds with various timbres</li>
                    <li>Use the keyboard to play along with the chord progressions</li>
                    <li>Practice with different rhythms and tempos</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
