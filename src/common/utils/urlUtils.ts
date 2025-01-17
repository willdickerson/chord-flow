import { ChordChart } from '../../features/charts/charts'

export function encodeChartData(data: ChordChart): string {
  const jsonString = JSON.stringify(data)
  return btoa(encodeURIComponent(jsonString))
}

export function decodeChartData(encoded: string): ChordChart {
  try {
    const jsonString = decodeURIComponent(atob(encoded))
    return JSON.parse(jsonString)
  } catch (error) {
    throw new Error('Invalid chart data encoding: ' + error)
  }
}

export function createShareableUrl(chartData: ChordChart): string {
  const encoded = encodeChartData(chartData)
  return `${window.location.origin}/chart/${encoded}`
}

export function parseChordString(chordString: string): string[] {
  return chordString.split(',').map(chord => chord.trim())
}
