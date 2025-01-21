import { Piano, KeyboardMusic, Guitar, Loader2 } from 'lucide-react'
import { InstrumentType } from '../../services/audioConstants'
import { audioService } from '../../services/audioService'
import { useState, useEffect } from 'react'

export const InstrumentSelector = () => {
  const [selectedInstrument, setSelectedInstrument] =
    useState<InstrumentType>('synth')
  const [loadingStates, setLoadingStates] = useState<
    Record<InstrumentType, boolean>
  >({
    synth: false,
    piano: true,
    guitar: true,
  })
  const [errorStates, setErrorStates] = useState<
    Record<InstrumentType, boolean>
  >({
    synth: false,
    piano: false,
    guitar: false,
  })

  useEffect(() => {
    const initializeAudio = async () => {
      try {
        await audioService.loadSampledInstruments()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setErrorStates({
          synth: false,
          piano: true,
          guitar: true,
        })
      }
    }

    initializeAudio()

    const checkInstrumentStatus = () => {
      setLoadingStates(prev => ({
        ...prev,
        piano: !audioService.isInstrumentReady('piano'),
        guitar: !audioService.isInstrumentReady('guitar'),
      }))
    }

    const interval = setInterval(checkInstrumentStatus, 100)
    return () => clearInterval(interval)
  }, [])

  const handleSelect = async (instrument: InstrumentType) => {
    if (errorStates[instrument] || loadingStates[instrument]) return

    try {
      setSelectedInstrument(instrument)
      audioService.setInstrument(instrument)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorStates(prev => ({ ...prev, [instrument]: true }))
    }
  }

  const getButtonClassName = (instrument: InstrumentType) => {
    const baseClasses =
      'min-w-8 h-8 flex items-center justify-center rounded-md transition-colors outline-none '
    if (errorStates[instrument]) {
      return baseClasses + 'cursor-not-allowed opacity-50 pointer-events-none'
    }
    if (loadingStates[instrument]) {
      return baseClasses + 'bg-[#F5E6D3] text-[#846C5B] cursor-wait opacity-50'
    }
    return (
      baseClasses +
      (selectedInstrument === instrument
        ? 'bg-[#E3B448] text-[#846C5B] hover:bg-[#E3B448] focus:bg-[#E3B448]'
        : 'bg-[#F5E6D3] text-[#846C5B] hover:bg-[#E3B448]/20 focus:bg-[#E3B448]/20')
    )
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => handleSelect('synth')}
        disabled={errorStates.synth || loadingStates.synth}
        className={getButtonClassName('synth')}
      >
        {loadingStates.synth ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <KeyboardMusic className="w-4 h-4" />
        )}
      </button>
      <button
        onClick={() => handleSelect('piano')}
        disabled={errorStates.piano || loadingStates.piano}
        className={getButtonClassName('piano')}
      >
        {loadingStates.piano ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Piano className="w-4 h-4" />
        )}
      </button>
      <button
        onClick={() => handleSelect('guitar')}
        disabled={errorStates.guitar || loadingStates.guitar}
        className={getButtonClassName('guitar')}
      >
        {loadingStates.guitar ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Guitar className="w-4 h-4" />
        )}
      </button>
    </div>
  )
}
