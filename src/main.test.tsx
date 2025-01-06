import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'

// Mock react-dom/client
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}))

// Mock App component
vi.mock('./App', () => ({
  default: vi.fn(() => null),
}))

// Mock CSS import
vi.mock('./index.css', () => ({}))

describe('main', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders App component in StrictMode', async () => {
    // Mock document.getElementById
    const mockRoot = document.createElement('div')
    const getElementSpy = vi.spyOn(document, 'getElementById')
    getElementSpy.mockReturnValue(mockRoot)

    // Import and execute main
    await import('./main.tsx')

    // Verify createRoot was called with the root element
    expect(createRoot).toHaveBeenCalledWith(mockRoot)

    // Get the render function that was called
    const root = vi.mocked(createRoot).mock.results[0].value
    const renderCall = root.render.mock.calls[0][0]

    // Verify App is wrapped in StrictMode
    expect(renderCall.type).toBe(StrictMode)
    expect(renderCall.props.children.type).toBe(App)

    // Clean up
    getElementSpy.mockRestore()
  })
})
