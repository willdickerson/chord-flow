import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InstrumentSelector } from '../InstrumentSelector'
import { audioService } from '../../../../services/audioService'
import type { InstrumentType } from '../../../../services/audioService'

vi.mock('../../../../services/audioService', () => ({
  audioService: {
    setInstrument: vi.fn(),
  },
}))

describe('InstrumentSelector', () => {
  const instruments: InstrumentType[] = ['synth', 'piano', 'guitar']

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all instrument buttons with correct initial state', () => {
    render(<InstrumentSelector />)

    // All buttons should be present with correct labels
    instruments.forEach(instrument => {
      const button = screen.getByRole('button', {
        name: instrument.charAt(0).toUpperCase() + instrument.slice(1),
      })
      expect(button).toBeInTheDocument()
    })

    // Synth should be initially selected
    const synthButton = screen.getByRole('button', { name: 'Synth' })
    expect(synthButton).toHaveAttribute('aria-pressed', 'true')
    expect(synthButton).toHaveClass('bg-purple-100', 'text-purple-700')

    // Others should be unselected
    const otherButtons = instruments
      .filter(i => i !== 'synth')
      .map(i =>
        screen.getByRole('button', {
          name: i.charAt(0).toUpperCase() + i.slice(1),
        })
      )

    otherButtons.forEach(button => {
      expect(button).toHaveAttribute('aria-pressed', 'false')
      expect(button).toHaveClass('bg-gray-50', 'text-gray-500')
      expect(button).not.toHaveClass('bg-purple-100', 'text-purple-700')
    })
  })

  it('updates selection and calls audioService when clicking instruments', async () => {
    const user = userEvent.setup()
    render(<InstrumentSelector />)

    // Test each instrument
    for (const instrument of instruments) {
      const buttonName =
        instrument.charAt(0).toUpperCase() + instrument.slice(1)
      const button = screen.getByRole('button', { name: buttonName })

      await user.click(button)

      // Verify audioService was called
      expect(audioService.setInstrument).toHaveBeenCalledWith(instrument)

      // Verify selected button state
      expect(button).toHaveAttribute('aria-pressed', 'true')
      expect(button).toHaveClass('bg-purple-100', 'text-purple-700')

      // Verify other buttons are unselected
      const otherButtons = instruments
        .filter(i => i !== instrument)
        .map(i =>
          screen.getByRole('button', {
            name: i.charAt(0).toUpperCase() + i.slice(1),
          })
        )

      otherButtons.forEach(otherButton => {
        expect(otherButton).toHaveAttribute('aria-pressed', 'false')
        expect(otherButton).toHaveClass('bg-gray-50', 'text-gray-500')
        expect(otherButton).not.toHaveClass('bg-purple-100', 'text-purple-700')
      })
    }
  })

  it('maintains selection after clicking the same instrument', async () => {
    const user = userEvent.setup()
    render(<InstrumentSelector />)

    const pianoButton = screen.getByRole('button', { name: 'Piano' })

    // First click to select
    await user.click(pianoButton)
    expect(audioService.setInstrument).toHaveBeenCalledWith('piano')
    expect(pianoButton).toHaveAttribute('aria-pressed', 'true')
    expect(pianoButton).toHaveClass('bg-purple-100', 'text-purple-700')

    // Clear mock to verify next call
    vi.clearAllMocks()

    // Click again
    await user.click(pianoButton)
    expect(audioService.setInstrument).toHaveBeenCalledWith('piano')
    expect(pianoButton).toHaveAttribute('aria-pressed', 'true')
    expect(pianoButton).toHaveClass('bg-purple-100', 'text-purple-700')
  })
})
