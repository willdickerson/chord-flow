export interface ChordChart {
  title: string
  composer: string
  chords: string[]
}

export const CHORD_CHARTS: ChordChart[] = [
  {
    title: 'Giant Steps',
    composer: 'John Coltrane',
    chords: [
      'B',
      'D',
      'G',
      'Bb',
      'Eb',
      'Eb',
      'Am',
      'D',
      'G',
      'Bb',
      'Eb',
      'F#',
      'B',
      'B',
      'Fm',
      'Bb',
      'Eb',
      'Eb',
      'Am',
      'D',
      'G',
      'G',
      'C#m',
      'F#',
      'B',
      'B',
      'Fm',
      'Bb',
      'Eb',
      'Eb',
      'C#m',
      'F#',
    ],
  },
  {
    title: 'Autumn Leaves',
    composer: 'Joseph Kosma',
    chords: ['Am7', 'D7', 'Gmaj7', 'Cmaj7', 'F#m7b5', 'B7', 'Em'],
  },
  {
    title: 'All Blues',
    composer: 'Miles Davis',
    chords: [
      'G7',
      'G7',
      'G7',
      'G7',
      'C7',
      'C7',
      'G7',
      'G7',
      'D7',
      'C7',
      'G7',
      'D7',
    ],
  },
  {
    title: 'Take Five',
    composer: 'Paul Desmond',
    chords: ['Ebm', 'Bbm', 'Ebm', 'Bbm', 'Ebm', 'Bbm', 'Ebm', 'Db7'],
  },
]

// Helper function to convert a chart to the format expected by ChordChartInput
export function convertChartToInputFormat(chart: ChordChart) {
  return {
    title: chart.title,
    composer: chart.composer,
    chords: chart.chords.map(chord => ({
      id: Math.random().toString(),
      value: chord,
    })),
  }
}
