import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { InstrumentSelector } from '../InstrumentSelector'
import { audioService } from '../../services/audioService'

// Mock audioService
vi.mock('../../services/audioService', () => ({
  audioService: {
    setInstrument: vi.fn(),
  },
}))

describe('InstrumentSelector', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all instrument buttons', () => {
    render(<InstrumentSelector />)

    // Should render three buttons
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('starts with synth selected', () => {
    render(<InstrumentSelector />)

    // Find the synth button by its icon's parent
    const synthButton = screen.getAllByRole('button')[0]
    expect(synthButton.className).toContain('bg-purple-100')
  })

  it('changes selected instrument when clicked', () => {
    render(<InstrumentSelector />)

    // Click the piano button (second button)
    const pianoButton = screen.getAllByRole('button')[1]
    fireEvent.click(pianoButton)

    // Piano button should now be highlighted
    expect(pianoButton.className).toContain('bg-purple-100')

    // Synth button should not be highlighted
    const synthButton = screen.getAllByRole('button')[0]
    expect(synthButton.className).not.toContain('bg-purple-100')

    // audioService should be called with 'piano'
    expect(audioService.setInstrument).toHaveBeenCalledWith('piano')
  })

  it('changes selected instrument to guitar', () => {
    render(<InstrumentSelector />)

    // Click the guitar button (third button)
    const guitarButton = screen.getAllByRole('button')[2]
    fireEvent.click(guitarButton)

    // Guitar button should now be highlighted
    expect(guitarButton.className).toContain('bg-purple-100')

    // Synth button should not be highlighted
    const synthButton = screen.getAllByRole('button')[0]
    expect(synthButton.className).not.toContain('bg-purple-100')

    // audioService should be called with 'guitar'
    expect(audioService.setInstrument).toHaveBeenCalledWith('guitar')
  })

  it('maintains selected state after multiple selections', () => {
    render(<InstrumentSelector />)
    const [synthButton, pianoButton, guitarButton] =
      screen.getAllByRole('button')

    // Click piano
    fireEvent.click(pianoButton)
    expect(pianoButton.className).toContain('bg-purple-100')
    expect(synthButton.className).not.toContain('bg-purple-100')
    expect(guitarButton.className).not.toContain('bg-purple-100')

    // Click guitar
    fireEvent.click(guitarButton)
    expect(guitarButton.className).toContain('bg-purple-100')
    expect(synthButton.className).not.toContain('bg-purple-100')
    expect(pianoButton.className).not.toContain('bg-purple-100')

    // Click synth
    fireEvent.click(synthButton)
    expect(synthButton.className).toContain('bg-purple-100')
    expect(pianoButton.className).not.toContain('bg-purple-100')
    expect(guitarButton.className).not.toContain('bg-purple-100')
  })
})
