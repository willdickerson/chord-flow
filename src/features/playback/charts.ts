export interface ChordChart {
  title: string
  composer: string
  chords: string[]
}

export const CHORD_CHARTS: ChordChart[] = [
  {
      title: '9.20 Special',
      composer: 'Earl Warren',
      chords: ["D9", "Fm6", "D9", "Fm6", "C", "C7", "B7", "Bb7", "A7", "D9", "G7", "Ab7", "G7", "", "C7", "C7", "F6", "F6", "D7", "D7", "G7", "G7", "D9", "Fm6", "D9", "Fm6", "C", "C7", "B7", "Bb7", "A7", "D9", "G7", "C6"],
  },
  {
      title: '26-2',
      composer: 'John Coltrane',
      chords: ["Fmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Cm7", "F7", "Bbmaj7", "Db7", "Gbmaj7", "A7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Cm7", "F7", "Bbmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Fmaj7", "Cm7", "F7", "Em7", "A7", "Dmaj7", "F7", "Bbmaj7", "Ebm7", "Ab7", "Dbmaj7", "Gm7", "C7", "Fmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Cm7", "F7", "Bbmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Fmaj7"],
  },
  {
      title: '52nd Street Theme',
      composer: 'Thelonious Monk',
      chords: ["C", "Am7", "Dm7", "G7", "C", "Am7", "Dm7", "G7", "C", "Am7", "Dm7", "G7", "C", "G7", "C", "C7", "C7", "F6", "F6", "D7", "D7", "G7", "G7", "C", "Am7", "Dm7", "G7", "C", "Am7", "Dm7", "G7", "C", "Am7", "Dm7", "G7", "C", "G7", "C"],
  },
  {
      title: '500 Miles High',
      composer: 'Chick Corea',
      chords: ["Em7", "Em7", "Gm7", "Gm7", "Bbmaj7", "Bbmaj7", "Bm7b5", "E7#9", "Am7", "Am7", "F#m7b5", "F#m7b5", "Fm7", "Fm7", "Cm7", "Cm7", "B7#9", "B7#9", "Cm7", "Cm7", "Abmaj7", "Abmaj7"],
  },
  {
      title: '502 Blues',
      composer: 'Jimmy Rowles',
      chords: ["Am7", "Dbmaj7", "Bm7b5", "E7#9", "Am7", "Dbmaj7", "Bm7b5", "E7#9", "Cm7", "F7b9", "Bbmaj7", "Abm7", "Db7", "F#m7b5", "B7b9", "Emaj7#5", "Emaj7#5", "E7"],
  },
  {
      title: 'A Ballad',
      composer: 'Gerry Mulligan',
      chords: ["Dm7", "G7", "Cmaj7", "Am7", "C#m7", "F#7#9", "Bmaj7", "Em7", "A7b9#5", "F#m7", "B7b9", "Em7", "A7", "Dmaj7", "B7b13", "Em7", "Gm6", "F#m7", "Fdim7", "Em7", "A7", "Fm7", "Bb7", "Gm7", "Gbdim7", "Fm7", "Bb7b9", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "Em7", "Ebm7", "Ab7b9", "Dbmaj7", "", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Am7", "C#m7", "F#7#9", "Bmaj7", "Em7", "A7b9#5", "F#m7", "B7b9", "Em7", "A7", "F#m7", "B7b9", "Em7", "Gm6", "F#m7", "Fdim7", "Em7", "A7", "Dmaj7", "Dm7", "G7", "Em7", "A7#9", "A7#9", "Ab7#9", "", "", "", "G7", "Cmaj9"],
  },
  {
      title: 'A Beautiful Friendship',
      composer: 'Donald Kahn',
      chords: ["Cmaj7", "Gb7#11", "Fmaj7", "Em7b5", "A7b9", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "D7", "G7#5", "Cmaj7", "Gb7#11", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "C6", "A7", "D7", "G7"],
  },
  {
      title: 'A Blossom Fell',
      composer: 'Barnes-Cornelius',
      chords: ["Bb6", "Bdim", "Cm7", "F7", "F7#5", "Bb6", "Bbmaj7", "Dbdim", "Cm7", "F7", "Cm7", "F7", "Bb6", "Bdim", "F7", "F7", "Bb6", "Bdim", "Cm7", "F7", "F7#5", "Bb6", "Bb7#5", "Ebmaj7", "Bbmaj7", "Cm7", "Bb6", "Bb7#5", "Ebmaj7", "Ebm6", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Bb6", "", "Cm7", "F7"],
  },
  {
      title: 'A Certain Smile',
      composer: 'Fain-Webster',
      chords: ["Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "Bbm6", "Fmaj7", "Dm7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'A Child Is Born',
      composer: 'Roland Hanna',
      chords: ["Bbmaj7", "Ebm", "Bbmaj7", "Ebm", "Bbmaj7", "Ebm", "Am7b5", "D7#9", "Gm7", "D7#5", "Gm7", "D7#5", "Gm7", "C7", "F7sus", "F7", "Bbmaj7", "Ebm", "Bbmaj7", "Ebm", "Bbmaj7", "D7alt", "Ebmaj7", "Ab7", "Bb", "Gb6", "Gm7", "C7", "F7sus", "F7"],
  },
  {
      title: 'A Felicidade',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Em7", "B7b9", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Bm7b5", "E7b9", "Am7", "Am7", "", "Gm7", "C7", "Fmaj7", "Dm7", "Am7", "D7", "Am7", "Bm7b5", "E7b9", "Am7", "G7", "Cmaj7", "F7", "Cmaj7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "G7", "Am7", "Am7", "D7", "Dm7", "Am7", "Bm7b5", "E7b9", "Am7", "Am7"],
  },
  {
      title: 'A Fine Romance',
      composer: 'Jerome Kern',
      chords: ["C6", "C#dim7", "Dm6", "D#dim7", "Em7", "Am7", "Dm7", "G7", "C6", "Ebdim7", "Dm7", "G7", "Em7", "A7", "D7", "G7", "C6", "C#dim7", "Dm6", "D#dim7", "Em7", "Am7", "Dm7", "G7", "C6", "C7", "Fmaj7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'A Flower Is A Lovesome Thing',
      composer: 'Billy Strayhorn',
      chords: ["B7#11", "B7#11", "B7#11", "B7#11", "Bb7b13", "Eb7", "Ab7b13", "Db7", "Dmaj7", "", "Eb7", "D", "Db6", "Ebm7b5", "Ab7#5", "Dbmaj7", "Em7b5", "A7b9", "Dmaj7", "Dmaj7", "G#m7b5", "Dmaj7", "Ab7#11", "G7#11", "Gbmaj7", "Ab7#11", "B7#11", "B7#11", "B7#11", "B7#11", "Bb7b13", "Eb7", "Ab7b13", "Db7", "Dmaj7", "", "Eb7", "D", "Db6"],
  },
  {
      title: 'A Foggy Day',
      composer: 'George Gershwin',
      chords: ["Fmaj7", "Bb69", "Fmaj7", "Bb69", "Fmaj7", "E7", "Am", "D13", "Gm7", "C7", "Fmaj7", "Am", "Am6", "Am7", "D13b9", "Am9", "D9", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Fmaj7", "D7b9", "Gm7", "C7", "F6", "Ab7", "G7", "C7", "", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "D7", "G7", "C7"],
  },
  {
      title: 'A Ghost Of A Chance',
      composer: 'Victor Young',
      chords: ["Cmaj7", "Db7#11", "Gm7", "C7", "Fm7", "Bb7", "Em7", "Ebdim7", "Dm7", "G7", "E7", "A7", "Dm7", "G7", "Dm7", "G7#5", "Cmaj7", "G7", "Cmaj7", "Am7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "G7#5", "Cmaj7", "Db7#11", "Gm7", "C7", "Fm7", "Bb7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7"],
  },
  {
      title: 'A Kiss To Build A Dream On',
      composer: 'Kalmar-Ruby-Hammerstein',
      chords: ["Cmaj7", "Dm7", "Em7", "Ebdim7", "Dm7", "A7b9", "Dm7", "G7", "Dm7", "A7b9", "Dm7", "G7", "C6", "D7", "G7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Dm7b5", "G7", "Cm7", "Cm7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Dm7", "Em7", "Ebdim7", "Dm7", "A7b9", "Dm7", "G7", "Dm7", "A7b9", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'A Little Tear',
      composer: 'Deodato-Valle',
      chords: ["Eb9", "Ebm7", "Dbmaj7", "Dbmaj7", "Ebm7", "Ebm7", "Dbmaj7", "Bb7b5b9", "Eb9", "Ebm7", "Dbmaj7", "Dbmaj7", "Ebm7", "Ebm7", "Dbmaj7", "Dbmaj7", "Fm9", "Fm9", "Ebmaj7", "Ebmaj7", "Fm9", "Fm9", "B7sus", "Fmaj7", "Eb9sus", "Eb9", "Ab9sus", "Ab9", "Fm7b5", "Bb7b9sus", "Bb7b9#5", "Ebm7", "Ab9sus", "Ab9", "Dbmaj7", "Ab9sus"],
  },
  {
      title: 'A Lovely Way To Spend An Evening',
      composer: 'Jimmy McHugh',
      chords: ["Bbmaj7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Eb9", "Am7", "Dm7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "C7", "", "Cm7", "F7", "Bbmaj7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "Fmaj7", "Cm7", "F7"],
  },
  {
      title: 'A Night In Tunisia',
      composer: 'Dizzy Gillespie',
      chords: ["Eb7", "Dm6", "Eb7", "Dm6", "Eb7", "Dm6", "Em7b5", "A7b9", "Dm", "Am7b5", "D7b9", "Gm7", "Gm7", "Gm7b5", "C7b9", "Fmaj7", "Em7b5", "A7b9", "Eb7", "Dm6", "Eb7", "Dm6", "Eb7", "Dm6", "Em7b5", "A7b9", "Dm", "Em7b5", "Em7b5", "Eb7#11", "Eb7#11", "Dm7", "Dm7", "G7#11", "G7#11", "Gm", "Gm7", "Gb7#9", "Gb7#9", "Fmaj7", "Fmaj7", "Em7b5", "A7b9"],
  },
  {
      title: 'A Nightingale Sang In Berkeley Square',
      composer: 'Manning Sherwin',
      chords: ["Ebmaj7", "Cm7", "Gm7", "", "Bbm7", "Eb7", "Abmaj7", "", "Dm7b5", "G7", "Cm", "Abm6", "Ebmaj7", "Fm7", "Ebmaj7", "", "Abm7", "Db7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "Bbdim7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "Em7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Gm7", "", "Bbm7", "Eb7", "Abmaj7", "", "Dm7b5", "G7", "Cm", "Abm6", "Ebmaj7", "Fm7", "Ebmaj7", "", "Abm7", "Db7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'A Pretty Girl Is Like A Melody',
      composer: 'Irving Berlin',
      chords: ["A7", "Bb13", "A7", "Am9", "D7", "F#", "G", "F#", "G", "Gmaj9", "Gmaj9", "Dm7", "G7", "C6", "F9", "Gmaj7", "A7", "A7", "D9", "D9", "C9", "B7", "Bb7", "A7", "Bb13", "A7", "Am9", "D7", "F#", "G", "Dm7", "G7", "Cmaj7", "E7", "Am7", "C#m7", "F#7", "B7", "Bm7", "E7", "Am7", "Am7", "Eb13", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'A Shade Of Jade',
      composer: 'Joe Henderson',
      chords: ["Cm7", "Cm7", "Cm7", "Cm7", "Dbmaj7#11", "Dbmaj7#11", "Ebmaj7#11", "Emaj7#11", "Dmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Gbmaj7", "Gbmaj7", "F13b9", "F13b9", "Bbm", "Bbm", "Gm7b5", "C7#9", "Fmaj7", "Dm7", "Dm7", "Bbm7", "Ebmaj7", "Ebmaj7", "Gbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dm7b5", "Abmaj7", "Abmaj7", "G7b9", "Cm7", "Cm7", "Cm7", "Cm7", "Dbmaj7#11", "Dbmaj7#11", "Ebmaj7#11", "Emaj7#11", "Dmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11"],
  },
  {
      title: 'A Sleepin\' Bee',
      composer: 'Harold Arlen',
      chords: ["Abmaj7", "Eb7sus", "Abmaj7", "Eb7sus", "Abmaj7", "D7", "Dbmaj7", "Gb7sus", "Abmaj7", "Db7", "C7", "F7", "Bbm7", "E7", "Eb7", "Db7", "C9", "C7b9", "F13", "F7b13", "Bb13", "Bb7b13", "Eb9", "Eb7b9", "Ab13", "Ab7b13", "Db7", "Bbm7", "Cm7", "Db6", "Ddim", "Eb7sus", "Eb7", "Abmaj7", "Eb7sus", "Abmaj7", "Eb7sus", "Abmaj7", "D7", "Dbmaj7", "Gb7sus", "Abmaj7", "Db7", "C7", "F7", "Bbm7", "E7", "Eb7", "Db7", "C9", "C7b9", "F13", "F7b13", "Bb13", "Bb7b13", "Eb9", "Eb7b9", "Abmaj7", "Dbmaj7", "C7", "F7", "Bb7", "Eb7", "C7", "F7", "Bb7", "Eb7sus", "Eb7", "Ab6", "Bmaj7", "Emaj7", "Amaj7"],
  },
  {
      title: 'A Smooth One',
      composer: 'Benny Goodman',
      chords: ["Bdim7", "Bb6", "F6", "F6", "Bdim7", "Bb6", "F6", "F6", "Bdim7", "Bb6", "F6", "F6", "G7", "C7", "F6", "Bb6", "Bdim7", "F6", "Cm7", "F7", "Bb6", "Bdim7", "F6", "D7b9", "Gm7b5", "C7", "Bdim7", "Bb6", "F6", "F6", "Bdim7", "Bb6", "F6", "F6", "Bdim7", "Bb6", "F6", "F6", "G7", "C7", "F6"],
  },
  {
      title: 'A Sound For Sore Ears',
      composer: 'Jimmy Heath',
      chords: ["Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "G7sus", "G7sus", "G7sus", "G7sus", "G7sus", "G7sus", "G7sus", "G7sus", "Bm7", "E7", "Amaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Fmaj7", "Dmaj7", "Bmaj7"],
  },
  {
      title: 'A Sunday Kind Of Love',
      composer: 'Belle-Prima-Leonard-Rhodes',
      chords: ["Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "", "Bbmaj7", "Bbm7", "Fmaj7", "D7", "Gm7", "C7", "F6", "Dm7", "Gm7", "Db7", "C7", "", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "F7", "Bbmaj7", "G7", "G7", "Gm7", "C7", "", "Db7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "", "Bbmaj7", "Bbm7", "Fmaj7", "D7", "Gm7", "C7", "F6", "Eb7", "F6"],
  },
  {
      title: 'A Taste Of Honey',
      composer: 'Marlow-Scott',
      chords: ["Dm", "Dm", "Dm7", "G7", "Dm", "Dm", "Dm7", "G7", "Dm", "Dm", "Bbmaj7", "Am7", "Dm", "Dm", "Dm7", "G7", "Dm7", "G7", "Bbmaj7", "Am7", "Dm", "Em7b5", "A7b9"],
  },
  {
      title: 'A Time For Love',
      composer: 'Johnny Mandel',
      chords: ["Fmaj7", "Eb7", "F6", "G7", "Gm7", "Gm7", "Em7", "A7", "Em7b5", "A7b9", "Dm7", "Eb7", "F7", "G7", "Gm7", "Gm7", "Em7", "A7", "Em7b5", "A7b13", "Dm7", "A7", "Dm7", "G7", "C6", "E7b13", "Am7", "A7b13", "Dm7", "Cm6", "Bm7b5", "E7", "C#m7", "F#m7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "Gm7", "Em7", "A7", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "C7", "F6", "C7sus"],
  },
  {
      title: 'A Tisket A Tasket',
      composer: 'Traditional',
      chords: ["Ebmaj7", "Ebmaj7", "Ebmaj7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Ab6", "Abm6", "Ebmaj7", "Eb7", "Ab6", "Abm6", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7"],
  },
  {
      title: 'A Weaver Of Dreams',
      composer: 'Victor Young',
      chords: ["Cmaj7", "Cmaj7", "Bm7b5", "E7b9", "Am7", "Am7", "Gm7", "C7", "Fmaj7", "Bb7#11", "Em7", "A7", "D7", "D7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Bm7b5", "E7b9", "Am7", "Am7", "Gm7", "C7", "Fmaj7", "Bb7#11", "Em7", "Ebm7", "Ab7", "Dm7", "G7", "Cmaj7", "Dm7", "G7"],
  },
  {
      title: 'Ablution',
      composer: 'Lennie Tristano',
      chords: ["Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "G7", "Cmaj7", "Cmaj7", "Cm7", "Fm7", "Bb7", "Eb7", "Abmaj7", "D7", "Gmaj7#11", "Gmaj7#11", "Am7", "D7b9", "Gmaj7", "Gmaj7", "F#m7", "B7#9", "Emaj7", "C7#5", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Gb7", "Cm7", "Bdim7", "Bbm7", "Amaj7", "Ab6", "C7b9"],
  },
  {
      title: 'Ac-Cent-Tchu-Ate The Positive',
      composer: 'Harold Arlen',
      chords: ["F", "Faug", "F6", "Fmaj7", "Gm7", "C7", "F", "Faug", "F6", "Fmaj7", "Gm7", "C7", "F6", "C7", "F6", "F7", "Bbmaj7", "", "Gm7", "C7", "F6", "C7", "F6", "D7b9", "G7#5", "C7", "F", "Faug", "F6", "Fmaj7", "Gm7", "C7", "F", "Faug", "F6", "Fmaj7", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'Across The Alley From The Alamo',
      composer: 'Joe Greene',
      chords: ["Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "C7", "C7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "Fmaj7", "F7", "Bbmaj7", "Bbm7", "Fmaj7", "A7", "Dm7", "G7", "C7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "C7", "C7", "Gm7", "C7", "Fmaj7"],
  },
  {
      title: 'Adam\'s Apple',
      composer: 'Wayne Shorter',
      chords: ["Ab7", "Ab7", "Ab7", "Ab7", "Ab7", "Ab7", "Ab7", "Ab7", "Gb7", "Gb7", "Gb7", "Gb7", "Ab7", "Ab7", "Ab7", "Ab7", "Abm7", "Db7", "Bbm7", "Eb7#9", "Ab7", "Ab7", "Ab7", "Ab7"],
  },
  {
      title: 'Affirmation',
      composer: 'José Feliciano',
      chords: ["Em9", "Em9", "Bm9", "Bm9", "Em9", "Em9", "Bm9", "Bm9", "Bm9", "Am7", "D7", "Gmaj9", "Gmaj9", "E9", "E9", "A9sus", "A9sus", "Bbmaj9", "Bbmaj9", "Bbmaj9", "Bbmaj9", "Bbmaj9", "Bbmaj9", "A9sus", "A9sus", "Bm9", "Bm9", "Bm9", "Bm9"],
  },
  {
      title: 'African Flower',
      composer: 'Duke Ellington',
      chords: ["Ebm7", "Ebm7", "Ebm7", "Ebm7", "Abm7", "Gbm7", "Ebm7", "Ebm7", "Bbm7b5", "Bbm7b5", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Abm7", "Gbm7", "Ebm7", "Ebm7", "Bbm7", "Bbm7", "Ebm7", "Ebm7", "Gbmaj7", "Gbmaj7", "B7", "B7", "Gbmaj7", "Gbmaj7", "Gb7#11", "Gb7#11", "Ab7", "Abm7", "Gbm7", "Ebm7", "Dm7", "Bb7b5", "Ebm7", "Ebm7"],
  },
  {
      title: 'African Queen, The',
      composer: 'Horace Silver',
      chords: ["Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Bb7", "A7", "Ab7", "G7", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9", "Cm9", "Db9"],
  },
  {
      title: 'Afro Blue',
      composer: 'Mongo Santamaria',
      chords: ["Fm7", "Fm7", "Db7#9", "C7#9", "Fm7", "Fm7", "Fm7", "Db7#9", "C7#9", "Fm7", "Eb", "Eb", "Db", "Eb", "Fm7", "Eb", "Eb", "Db", "Eb", "Fm7"],
  },
  {
      title: 'Afro Centric',
      composer: 'Joe Henderson',
      chords: ["Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Cm7", "Cm7", "Cm7", "Cm7", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Fm7", "Gbmaj7#11", "Fm7", "Gbmaj7#11", "Gm7b5", "Cmaj7#11"],
  },
  {
      title: 'After You',
      composer: 'Cole Porter',
      chords: ["Cmaj7", "G7b9", "Cmaj7", "G7#5", "Cmaj7", "E7#5", "Am7", "D7", "Dm7", "G7b9", "Cmaj7", "G7b9", "Cmaj7", "G7#5", "Cmaj7", "E7#5", "Am7", "D7", "Gmaj7", "D7b9", "Gm7", "C7", "Fmaj7", "C7b9", "F6", "Fm7", "Bb7", "Dm7b5", "G7b9", "Cmaj7", "G7b9", "Cmaj7", "A7", "Dm7", "Fm6", "Em7", "Am7", "D7", "G7", "C6", "C6"],
  },
  {
      title: 'After You\'ve Gone',
      composer: 'Henry Creamer',
      chords: ["Ebmaj7", "Ebmaj7", "Ebm6", "Ab7", "Bbmaj7", "Bbmaj7", "Dm7", "G7", "C7", "C7", "F7", "F7", "Bb6", "Bb6", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm6", "Ab7", "Bbmaj7", "Bbmaj7", "Dm7", "G7", "Cm7", "G7", "Cm7", "Ebm", "Ab7", "Bbmaj7", "Am7", "D7", "Gm7", "Gm7", "Edim7", "Bb6", "G7", "Cm7", "F7", "Bb6", "Bb6", "Fm7", "Bb7"],
  },
  {
      title: 'Afternoon In Paris',
      composer: 'John Lewis',
      chords: ["Cmaj7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Dm7", "G7#9", "Cmaj7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "", "Dm7", "G7", "Cmaj7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Dm7", "G7#9", "Cmaj7", "Dm7", "G7"],
  },
  {
      title: 'Again',
      composer: 'Lionel Newman',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Bm7", "E7b9", "Am7b5", "D7b9", "B7#5", "E7b9", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Bm7", "E7b9", "Am7b5", "D7b9", "Gmaj7", "Dm7", "G7", "Cmaj7", "F9sus", "G6", "Gmaj7", "Dm7", "G7", "Cmaj7", "F9sus", "Bm7", "E7b9", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Bm7", "E7b9", "Am7b5", "D7b9#5", "Gmaj7", "Gmaj7"],
  },
  {
      title: 'Agua De Beber',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Dm7", "E7#9", "A7b13", "Dm7", "E7#9", "A7b13", "Dm7", "Bbmaj7", "Dm7", "Dm7", "E7b9", "A7alt", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "E7", "Eb7", "Dm7", "Dbdim7", "F7", "E7#9", "E7b9", "A7sus", "Dm7", "D7b9", "G7", "Gm7", "Dm7", "D7b9", "G7", "Gm7", "Dm7", "A7b13", "Dm7", "E7#9", "A7b13", "Dm7", "E7#9", "A7b13", "Dm7", "Bbmaj7", "Dm7", "Dm7"],
  },
  {
      title: 'Ahmid-6',
      composer: 'Pat Metheny',
      chords: ["Dm7", "C#m7", "Dm7", "C#m7", "F#m7", "B7", "Em7", "A7", "G", "F", "Em", "Dm7", "Cmaj7", "B7", "Bbmaj7#11", "Am7b5", "D7b9", "F#m7b5", "B7b9", "Em7b5", "A7b9", "Dm7", "Em7", "Fm7", "Bb7", "Eb9sus", "Eb9sus", "Abmaj9", "Abmaj9", "Ab7sus", "Ab7sus", "Dbmaj13", "Dbmaj13", "Dm7b5", "G7b9", "Cm7", "F7", "Fm7", "Bb7", "Gm7b5", "C7#9", "Fm7", "F#m7", "Gm7", "Cm7", "F#m7", "B7", "Em7", "A7sus", "A7sus", "A7sus", "A7sus", "Dm7", "C#m7", "Dm7", "C#m7", "F#m7", "B7", "Em7", "A7", "Am7", "Am7", "D7", "Gmaj7", "Bb7", "Ebmaj7", "B7", "Emaj7", "G7", "Cmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Fmaj7", "Fmaj7", "Em7", "Em7", "Fmaj7", "Fmaj7", "Em7", "Em7"],
  },
  {
      title: 'Ain\'t Misbehavin\'',
      composer: 'Fats Waller',
      chords: ["C6", "A7", "Dm7", "G7", "C6", "C7", "F6", "Fm6", "C6", "A7", "Dm7", "G7", "E7", "A7", "D7", "G7", "Am", "F7", "D7", "A7", "G6", "E7", "Am7", "D7", "G6", "A7", "D7", "G7", "C6", "A7", "Dm7", "G7", "C6", "C7", "F6", "Fm6", "C6", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Ain\'t She Sweet',
      composer: 'Milton Ager',
      chords: ["Eb6", "Edim7", "Fm7", "Bb7", "Eb6", "Edim7", "Fm7", "Bb7", "Eb6", "G7", "C7", "F7", "Bb7", "Eb6", "Bb7", "Ab7", "Ab7", "Eb6", "Eb7", "Ab7", "Ab7", "Eb6", "Fm7", "Bb7", "Eb6", "Edim7", "Fm7", "B7", "Eb6", "Edim7", "Fm7", "Bb7", "Eb6", "G7", "C7", "F7", "Bb7", "Eb6"],
  },
  {
      title: 'Airegin',
      composer: 'Sonny Rollins',
      chords: ["Fm", "C7b5#9", "Fm", "F7", "Bbm", "F7b5#9", "Bbm", "Bbm", "Dbmaj7", "Dm7", "G7", "Cmaj7", "C#m7", "F#7", "Bmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9", "Fm", "C7b5#9", "Fm", "F7", "Bbm", "F7b5#9", "Bbm", "Bbm", "Dbmaj7", "Dm7", "G7", "Cm7b5", "F7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9"],
  },
  {
      title: 'Airmail Special',
      composer: 'Charlie Christian',
      chords: ["C6", "Am7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C", "C7", "F", "F#dim7", "C", "C", "Cdim7", "Cdim7", "Cdim7", "Cdim7", "Cdim7", "Bdim7", "Bbdim7", "Ab7", "G7", "C6", "Am7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C", "C7", "F", "F#dim7", "C", "C"],
  },
  {
      title: 'Aisha',
      composer: 'McCoy Tyner',
      chords: ["Am9", "Gm9", "Am9", "Fm9", "Fm7", "Bb7", "Gm7", "C7", "Am7", "D7b9", "G7", "C7", "Fm", "E7", "Amaj7", "D7#11", "Amaj7", "D7#11", "Dbmaj7", "Gb7#11", "Dbmaj7", "Gb7#11", "Bmaj7", "E7#11", "Bmaj7", "E7#11", "Ebmaj7", "Gbmaj7", "Amaj7", "", "Bm7", "E7", "Am9", "Gm9", "Am9", "Fm9", "Fm7", "Bb7", "Gm7", "C7", "Am7", "D7b9", "G7", "C7", "Fm", "E7", "Gm7", "C7", "Fm7", "Bb7", "Ebm7", "Ab7", "Gb13", ""],
  },
  {
      title: 'Alexander\'s Ragtime Band',
      composer: 'Irving Berlin',
      chords: ["F6", "F6", "G7", "C7", "F6", "Bb6", "Bb6", "Bb6", "Bb6", "F6", "F6", "F6", "F6", "G7", "G7", "C7", "Gm7", "C7", "F6", "F6", "G7", "C7", "F6", "Bb6", "Bb6", "Bb6", "Bb6", "F6", "F7", "Bb6", "Bdim7", "F6", "F6", "C7", "F6"],
  },
  {
      title: 'Alfie',
      composer: 'Burt Bacharach',
      chords: ["Bbmaj7", "F7sus", "Bbmaj7", "Dm7", "G7", "Cm7", "Dm7", "Gm7", "Cm7", "F7sus", "Bbdim7", "F7sus", "F7", "F7#5", "", "Am7", "Bbm", "C7", "Am7", "C7sus", "Am7", "Bbm", "C7", "F7sus", "F6", "F7", "Bbmaj7", "F7sus", "Em7b5", "Eb7", "Dm7", "Gm7", "Em7b5", "Eb7", "Dm7", "Gm7", "C7#11", "Cm7", "F7sus", "Bbdim7", "F7sus", "Bdim7", "Cm9", "Bdim7", "Bbmaj7"],
  },
  {
      title: 'Alfie\'s Theme',
      composer: 'Sonny Rollins',
      chords: ["Bbm7", "Bbm7", "Gm7b5", "Gbmaj7", "Bbm7", "Gm7b5", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Gm7b5", "Edim7", "Bbm7", "Gm7b5", "Cm7b5", "F7", "Bbm7", "", "Bbm7", "Ab7", "Gb7", "F7b9", "Bbm7", "Ab7", "Gb7", "F7b9", "Bbm7", "Ab7", "Gb7", "F7b9", "Bbm7", "Ab7", "Gb7", "F7b9", "Bbm7", "Bbm7", "Gm7b5", "Gbmaj7", "Bbm7", "Gm7b5", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Gm7b5", "Edim7", "Bbm7", "Gm7b5", "Cm7b5", "F7", "Bbm7", ""],
  },
  {
      title: 'Alice In Wonderland',
      composer: 'Sammy Fain',
      chords: ["Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Eb7#11", "Dm7", "G7", "Em7", "Am7", "Dm7", "G7", "Em7", "A7", "D7", "G7", "Em7", "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "A7", "Dm7", "G7"],
  },
  {
      title: 'All About Ronnie',
      composer: 'Joe Greene',
      chords: ["Eb7#11", "Eb7#11", "Bb6", "F9sus", "Bb6", "Cm9", "F9sus", "F7b9", "Bb6", "F9sus", "Bb6", "Ebmaj9", "Dm7b5", "G7b9", "Cm7", "G7b13", "Cm7", "Em7b5", "A7b9", "Cm7", "F9sus", "Eb7#11", "Eb7#11", "Bb6", "F9sus", "Bb6", "Cm9", "F9sus", "F7b9", "Am7b5", "D7b13", "Ebmaj7", "Ab7", "Bb6", "G7b9", "C7b13", "F7b13", "Bb6", "C7#11", "F9sus"],
  },
  {
      title: 'All Alone',
      composer: 'Irving Berlin',
      chords: ["F", "F", "C7", "C7", "F", "C7#5", "F", "F", "Em7b5", "A7b9", "Dm", "Dm", "A", "E7", "A", "Gm7", "C7", "Cm7", "F7", "Bb", "Bb", "G7", "G7", "C7", "C7#5", "F", "Cm7", "F7", "Bbmaj7", "Eb7", "F", "C7", "F", "Gm7", "C7"],
  },
  {
      title: 'All At Once You Love Her',
      composer: 'Rodgers-Hammerstein',
      chords: ["Fmaj7", "Fmaj7", "Dm7", "Gm7", "C7", "Gm7", "C7", "Fdim7", "F6", "C7", "Bbmaj7", "Bbmaj7", "Fmaj7", "Dm7", "G7sus", "G7sus", "G7", "C7", "Fmaj7", "Fmaj7", "Dm7", "Gm7", "C7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Fmaj7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'All Blues',
      composer: 'Miles Davis',
      chords: ["G7", "G7", "G7", "G7", "G7", "G7", "G7", "G7", "C7", "C7", "C7", "C7", "G7", "G7", "G7", "G7", "D7#9", "D7#9", "Eb7#9", "D7#9", "G7", "G7", "G7", "G7"],
  },
  {
      title: 'All By Myself',
      composer: 'Irving Berlin',
      chords: ["Cmaj7", "Cmaj7", "D7", "D7", "G7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Cmaj7", "F#m7b5", "B7", "E7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Cmaj7", "D7", "D7", "G7", "G7", "E7", "E7", "Fmaj7", "F#dim7", "Cmaj7", "A7", "D7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'All God\'s Chillun Got Rhythm',
      composer: 'Kahn-Kaper',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7b5", "D7b9", "Bm7b5", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "A7", "Dm7", "G7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7b5", "D7b9", "Bm7b5", "E7", "Am7", "D7", "Gm7", "C7", "Eb7", "D7", "Gm7", "C7", "F6", "", "F6", ""],
  },
  {
      title: 'All My Tomorrows',
      composer: 'Jimmy Van-Heusen',
      chords: ["Am7", "Am7b5", "D7b9", "Bm7", "Bbdim7", "", "Am7", "Bm7", "E7b9", "Am7", "D7b9", "Bm7", "E7b9", "Am7", "Cm6", "F7", "Bm7", "Bbdim7", "", "Am7", "Bm7", "E7b9", "Am7", "D7b9", "Dm7", "G7", "Cmaj7", "Cm7", "F7", "Bm7", "E7", "F#m7b5", "B7b9", "Em7", "Am7", "D7", "B7#9", "E7b9", "Am7", "", "Bm7", "E7", "Am7", "Cm6", "F7", "Bm7", "Bbdim7", "", "Am7", "Bm7", "E7b9", "Am7", "D7b9", "Bm7", "E7b9", "Am7", "Cm6", "D7", "G6", "Bm7", "E7b9"],
  },
  {
      title: 'All Of A Sudden My Heart Sings',
      composer: 'Herpin-Jamblan-Rome',
      chords: ["C", "C", "G7", "G7", "C", "C7", "F", "Fm", "C", "F", "F", "G7", "G7", "C", "C", "Am", "Am", "Em", "Em", "F", "F", "Em", "Am", "Dm", "Fm", "C", "Am", "D7", "G7", "C", "Fm", "C", "G7"],
  },
  {
      title: 'All Of Me',
      composer: 'Gerald Marks',
      chords: ["Cmaj7", "Cmaj7", "E7", "E7", "A7", "A7", "Dm7", "Dm7", "E7", "E7", "Am7", "Am7", "D7", "D7", "Dm7", "G7", "Cmaj7", "Cmaj7", "E7", "E7", "A7", "A7", "Dm7", "Dm7", "Fmaj7", "Fm6", "Em7", "A7", "Dm7", "G7", "C6", "Ebdim7", "Dm7", "G7"],
  },
  {
      title: 'All Of You',
      composer: 'Cole Porter',
      chords: ["Abm6", "Ebmaj7", "Fm7b5", "Bb7", "Abm6", "Ebmaj7", "Fm7b5", "Bb7", "Eb6", "Gbdim7", "Fm7", "Bb7", "Ebmaj7", "D7", "Db7", "C7", "Fm7", "Bb7", "Abm6", "Ebmaj7", "Fm7b5", "Bb7", "Abm6", "Ebmaj7", "Gm7", "C7", "Abmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Eb6"],
  },
  {
      title: 'All Or Nothing At All',
      composer: 'Arthur Altman',
      chords: ["Am", "Am", "Am7", "Am6", "Am", "Am", "", "Bb7", "Bb7", "Gm7", "Gm7", "", "Dm7", "D#dim7", "Dm7", "Db7#11", "Cmaj7", "Bm7b5", "E7b9", "Abmaj7", "Abmaj7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Gm7b5", "C7b9", "Fm7", "Fm7", "Db7", "C7", "Bm7b5", "E7b9", "E7", "Am7", "Fm6", "Cmaj7", "E7b9"],
  },
  {
      title: 'All The Things You Are',
      composer: 'Jerome Kern',
      chords: ["Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "F#m7b5", "B7b9", "Emaj7", "C7b13", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Dbm", "Cm7", "Bdim7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9"],
  },
  {
      title: 'All The Way',
      composer: 'Jimmy Van-Heusen',
      chords: ["Ebmaj7", "G7b9", "Cm7", "F7", "Bb7", "Fm7", "Dbm6", "Bb7", "Eb6", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Bb7", "G7b9", "Cm7", "Abmaj7", "Bb7", "Bdim7", "Cm7", "Abm6", "Bb7", "Ebmaj7", "G7b9", "Cm7", "F7", "Bb7", "Fm7", "Dbm6", "Bb7", "Eb6", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Bb7", "G7b9", "Cm7", "Abm6", "Ebmaj7", "Db7#11", "C7b9", "Am7b5", "Bb7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'All Through The Day',
      composer: 'Kern-Hammerstein',
      chords: ["Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "G7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Dm7", "G7", "C7", "F6", "F7", "Gm7", "C7", "Gm7", "C7", "Gm7", "G7", "Gm7", "C7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "F6", "Bbm6", "F6", "C7"],
  },
  {
      title: 'All Through The Night',
      composer: 'Cole Porter',
      chords: ["Fmaj7", "Em7b5", "A7b9", "Dm7", "Db7", "Cm7", "F7b9", "Bbmaj7", "Bbm7", "Eb7b9", "Abmaj7", "Abmaj7", "Am7b5", "D7b9", "Gm7b5", "C7b9", "F6", "D7b9", "Gm7", "C7b9", "Fm7", "Dm7b5", "Gm7b5", "C7b9", "Ebm7", "Ab7", "Db6", "Db6", "Gm7b5", "C7b9", "Fm7", "Fm7", "Dm7b5", "G7b9", "Gm7b5", "C7b9", "Fmaj7", "Em7b5", "A7b9", "Dm7", "Db7", "Cm7", "F7b9", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7b9", "F6", "D7#9", "Gm7", "C7b9"],
  },
  {
      title: 'All Too Soon',
      composer: 'Duke Ellington',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "Bb7", "Em7", "A7#9", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C6", "G7#5", "C7", "Gm7", "C7#5", "Fmaj7", "B7", "Bb7", "A7b9", "D7", "G7#5", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "Bb7", "Em7", "A7#9", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Almost Like Being In Love',
      composer: 'Frederick Loewe',
      chords: ["Dbmaj7", "Eb7", "Abmaj7", "Cm7", "F7", "Bbm7", "Eb7", "Ab6", "Ebm7", "Ab7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Gm7", "C7", "", "Dbmaj7", "Eb7", "Abmaj7", "Cm7", "F7", "Bbm7", "Bdim7", "Ab6", "Bdim7", "Bbm7", "Eb7", "Ab6", "Ebm7", "Ab7"],
  },
  {
      title: 'Alone Together',
      composer: 'Arthur Schwartz',
      chords: ["Dm6", "Em7b5", "A7b9", "Dm6", "Em7b5", "A7b9", "Dm6", "Am7b5", "D7b9", "Gm7", "Gm7", "Bm7", "E7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dmaj7", "Dmaj7", "", "Am7b5", "D7b9", "Gm6", "Gm6", "Gm7b5", "C7b9", "Fmaj7", "Em7b5", "A7b9", "Dm6", "Em7b5", "A7b9", "Dm6", "Em7b5", "A7b9", "Dm6", "Bm7b5", "Bb7", "A7b9", "Dm6", "Em7b5", "A7b9"],
  },
  {
      title: 'Alone Too Long',
      composer: 'Arthur Schwartz',
      chords: ["G6", "G6", "G#dim7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "G6", "Em7", "Am7", "D7", "Em", "Em", "Em", "Em", "C7", "B7", "Em6", "Em6", "Em", "Em", "A7", "Am7", "D7", "G6", "G6", "G#dim7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'Along Came Betty',
      composer: 'Benny Golson',
      chords: ["Bbm7", "Bm7", "E7", "Bbm7", "Bm7", "E7", "Amaj7", "Ab7", "Gmaj7", "Gb7", "F#m7", "Gm7", "C7", "F#m7", "Gm7", "C7", "Fmaj7", "A7b9", "Dm7", "G7", "Cm7", "F7", "Am7b5", "D7b9", "Gm7", "Gm7", "Em7b5", "A7b9", "Fm7", "Bb7", "Bbm7", "Bm7", "E7", "Bbm7", "Bm7", "E7", "Cm7b5", "F7b13", "Bbm7b5", "Eb7#9", "Abmaj7", "Bm7", "E7"],
  },
  {
      title: 'Always',
      composer: 'Irving Berlin',
      chords: ["Fmaj7", "F6", "Fmaj7", "F6", "Gm7", "C7", "Fmaj7", "C7", "Fmaj7", "F6", "Amaj7", "F#m7", "Bm7", "E7", "A7", "C7", "Fmaj7", "F6", "Fmaj7", "F7", "E7", "Eb7", "", "D7", "D7", "Gm7", "Gm7", "Gm7", "Eb7", "Fmaj7", "G7", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'Always And Forever',
      composer: 'Pat Metheny',
      chords: ["Am", "Dm6", "Am", "Dm6", "Dm11", "Am9", "", "Dm7", "Em7", "Fmaj7", "", "G9", "E7", "Am9", "Abmaj7", "Cmaj9", "F#m7b5", "Fmaj7", "Eb69", "D9", "G7sus", "Cmaj7", "Fm6", "E", "Am9", "", "Dm9", "Em7", "Fm7", "Bb7", "Ebmaj7", "Bb", "Dbmaj7", "Cm7", "Ab", "Fm7", "Gm7", "Am7b5", "D7b5", "Gmaj7", "Bm7b5", "E7", "", "Am9", "", "Dm7", "Em7", "Fmaj7", "", "G9", "E7", "Am9", "Abmaj7", "Cmaj9", "F#m7b5", "Fmaj7", "Eb69", "D9", "F", "Cmaj7", "Fm6", "Cmaj7", "Fm6", "Cmaj7", "Fm6", "Cmaj7", "Fm6", "G#dim", "Am9"],
  },
  {
      title: 'Am I Blue?',
      composer: 'Harry Akst',
      chords: ["Fmaj7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "G7", "C7", "F6", "D7", "Gm7", "C7", "Am7", "Am7", "Bm7b5", "E7b13", "Bm7b5", "E7b13", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "G7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Among My Souvenirs',
      composer: 'Horatio Nicholls',
      chords: ["Ebmaj7", "C7b9", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "Gb7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "G7", "Cm7", "F7", "Bb7#5", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "Gb7", "Fm7", "Bb7", "Eb6"],
  },
  {
      title: 'Ana Maria',
      composer: 'Wayne Shorter',
      chords: ["Gmaj7", "Ebmaj7", "G7sus", "Ebmaj7", "Dbmaj7", "Gbmaj7#11", "Abm7", "Bb", "Gm7", "C7sus", "D", "C7sus", "Ab", "Bb", "Ab", "G7b9sus", "Ebmaj7", "Gmaj7", "G7sus", "Eb", "E7alt", "Eb7sus", "Dmaj7", "F7#5", "Bbm7", "Abm7", "Bb", "Gm7", "C7sus", "Bbmaj7", "Am7", "Fm7", "Bb7sus", "Bb7sus", "Db7sus", "Db7sus", "Bm7", "Bm7", "Ebm7", "Ebm7", "Dmaj7", "F7#5", "Bbm7", "Abm7", "Bb", "Gm7", "C7sus", "Bbmaj7", "Am7", "Fm7", "Em7", "G7b9sus", "Ebmaj7"],
  },
  {
      title: 'And On The Third Day',
      composer: 'Michael Gibbs',
      chords: ["D7", "D7", "D7", "D7", "D7", "D7", "D7", "D7", "D7", "D7", "Cmaj7", "Cmaj7", "D7", "D7", "E7", "E7", "E7", "E7", "Dmaj7#11", "Dmaj7#11", "E7", "E7", "Gb7", "Gb7", "Gbm7b5", "E7", "E7", "E7b5", "E7b5", "D7", "D7", "D7", "D7"],
  },
  {
      title: 'And The Angels Sing',
      composer: 'Ziggy Elman',
      chords: ["Eb6", "Fm7", "Bb7", "Ebmaj7", "Eb9", "Fm7", "C7b13", "F9", "Bb7", "Eb6", "Cm7", "Fm7", "Bb13", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ebdim7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ebdim7", "Eb7", "Bbm7", "Eb7", "Ab6", "", "Fm7", "C7", "F9", "Bb7", "Eb6", "Cm7", "Fm7", "Bb13", "Eb6", "Cm7", "Fm7", "Bb13", "Eb6", "Fm7", "Bb7", "G7", "C7", "", "Bdim", "Cm", "Fm7", "Fm7b5", "Db9", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Angel Eyes',
      composer: 'Matt Dennis',
      chords: ["Cm", "", "D7", "Db7", "Cm", "Ab7", "Cm", "Am7b5", "Dm7b5", "G7b9", "Cm", "", "D7", "Db7", "Cm", "A7alt", "Ab7", "G7b9", "Cm", "", "", "", "Bbm7", "Eb7", "Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "Am7", "D7", "Gmaj7", "C#m7", "F#7", "Dm7", "G7", "Cm", "", "D7", "Db7", "Cm", "Ab7", "Cm", "Am7b5", "Dm7b5", "G7b9", "Cm", "", "D7", "Db7", "Cm", "A7alt", "Ab7", "G7b9", "Cm", "", "", ""],
  },
  {
      title: 'Anthropology',
      composer: 'Charlie Parker',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Anything Goes',
      composer: 'Cole Porter',
      chords: ["Cm", "Ab", "Cm", "Cm", "Db", "Db", "G7", "G7", "C7", "C7", "C7", "Fm", "G7", "Cm", "G", "D7", "G7", "C6", "", "C6", "", "C6", "", "C7", "", "F6", "Bb9", "", "C6", "Am7", "Dm7", "G7", "Emaj7", "C#7b9", "F#m7", "B7", "E7", "B7", "Em7", "A9", "Dm9", "G7", "", "C6", "", "C6", "", "C6", "", "C7", "", "F6", "Em7", "Dm7", "G9sus", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'April',
      composer: 'Lennie Tristano',
      chords: ["Gmaj7", "Gmaj7", "C7", "C7", "C7", "C7", "C7", "C7", "Eb7", "D7", "Bm7b5", "E7b9", "Am7", "Abmaj7", "Gmaj7", "Gmaj7", "Cm7", "Cm7", "C#dim7", "Bbmaj7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Dm7", "Dm7", "Am7", "D7#5", "Gmaj7", "Gmaj7", "F#m7", "B7", "Emaj7", "Eb7", "D7", "Gmaj7", "Gmaj7", "C7", "C7", "C7", "C7", "C7", "C7", "Eb7", "D7", "Bm7b5", "E7b9", "Am7", "Abmaj7", "Gmaj7", "Gmaj7"],
  },
  {
      title: 'April In Paris',
      composer: 'Vernon Duke',
      chords: ["G7b9sus", "Cmaj7", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bm7b5", "E7", "Am", "Am", "F#m7b5", "B7b9", "Bm7", "E7", "Em7b5", "A7b9", "F#m7b5", "Fdim7", "C", "Ebdim7", "Dm7b5", "G7b9", "C6", "Bm7b5", "E7", "Am", "Am", "F#m7b5", "B7b9", "Emaj7", "", "Dm7", "G7", "G7b9sus", "Cmaj7", "Em7b5", "A7b9", "D7", "Dm7b5", "G7", "C6", "C6"],
  },
  {
      title: 'April Joy',
      composer: 'Pat Metheny',
      chords: ["Bbmaj7", "Bbmaj7", "Am7", "Am7", "Bbmaj7", "Bbmaj7", "A", "A", "Bbmaj7", "Am7", "Bbmaj7", "Am7", "Dadd9", "Dadd9", "Dm", "Bbmaj7#11", "Am7", "Am7", "Bbmaj7", "Bb", "Fmaj7", "Bbmaj7", "Bbmaj7", "Am7", "Bbmaj7", "Bb", "Fmaj7", "Bbmaj7", "Em7b5", "A7b9sus", "D7sus", "D7sus"],
  },
  {
      title: 'April Skies',
      composer: 'Buddy Collette',
      chords: ["Gmaj7", "Am7", "Bm7", "C7", "Gm7", "C7", "Gm7", "C7", "Am7", "D7", "Bm7", "E7b9", "Am7", "D7", "Gmaj7", "Gmaj7", "Cm7", "F7", "Bbmaj7", "Dm7", "Db7", "Cm7", "F7alt", "Bbmaj7", "Bbmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "F#m7", "B7", "Emaj7", "Am7", "D7"],
  },
  {
      title: 'Aren\'t You Glad You\'re You',
      composer: 'Jimmy Van-Heusen',
      chords: ["Fmaj7", "Fmaj7", "Bb6", "Bdim7", "C7", "F6", "C7", "F6", "D7", "G7", "C", "C7", "Fmaj7", "Fmaj7", "Bb6", "Bdim7", "Amaj7", "E7", "Amaj7", "Bm7", "E7", "Amaj7", "F#m7", "Bm7", "E7", "Amaj7", "C7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bb6", "Bdim7", "C7", "F6", "C7", "F6", "D7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Armageddon',
      composer: 'Wayne Shorter',
      chords: ["", "E7#11", "Eb7", "Db7#11", "Gb", "F7#5", "Bbm7", "E7#11", "Eb7", "Db7#11", "Gb", "F7#5", "Bbm7", "Gb13", "Bbm7", "Gb13", "Bbm7", "Gb13", "Bbm7", "Gb13", "Eb7", "E7#11", "Eb7", "Gb13", "Bbm7", "Abm7", "Db7", "Eb7", "Gb13", "Bbm7", "Gb13", "Bbm7", "B7#11", "Bbm7", "Gb13", "Bbm7", "B7"],
  },
  {
      title: 'Armando\'s Rhumba',
      composer: 'Chick Corea',
      chords: ["Cm7", "D7b9", "G7b13", "Cm7", "Cm7", "D7b9", "G7b13", "Cm7", "C7b9", "Fm7", "D7b9", "Gm7", "Abdim7", "D7b9", "Bb7sus", "Bb7sus", "Bb7b9sus", "Bb7b9sus", "", "Eb6", "", "", "", "G7b13"],
  },
  {
      title: 'As Long As I Live',
      composer: 'Harold Arlen',
      chords: ["Fmaj7", "Em7b5", "A7b9", "D7", "D7", "G7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Fmaj7", "A7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "D7", "D7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "F6", "C7"],
  },
  {
      title: 'As Time Goes By',
      composer: 'Herman Hupfeld',
      chords: ["Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7#5", "Ebmaj7", "", "F7", "F#dim7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Gm7", "C7b9", "Abmaj7", "C7b9", "Fm7", "F#dim7", "Cm7", "F7", "Fm7", "C7b9", "Fm7", "", "Bb7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7#5", "Ebmaj7", "", "F7", "F#dim7", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "C7b9"],
  },
  {
      title: 'Ask Me Now',
      composer: 'Thelonious Monk',
      chords: ["Gm7", "C7", "F#m7", "B7", "Fm7", "Bb7", "Em7", "A7", "Ebm7", "Ab7#5", "B7#11", "Bb7", "Eb7", "D7", "Dbmaj7", "Eb7", "Ebm7", "Ab7", "B7", "Bb7", "A7", "Ab7", "Ebm7", "Ab7", "Dbmaj7", "Ebm7", "D7#11", "Dbmaj7", "Eb7", "Eb7", "Ebm7", "Ab7", "Gb7#11", "Gm7", "C7", "F#m7", "B7", "Fm7", "Bb7", "Em7", "A7", "Ebm7", "Ab7#5", "B7#11", "Bb7", "Eb7", "D7", "Dbmaj7", "Eb7", "Ebm7", "Ab7#5", "Dbmaj7"],
  },
  {
      title: 'At Last',
      composer: 'Harry Warren',
      chords: ["C6", "Am7", "Dm7", "G7b13", "Cmaj7", "Am7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Ab7", "G7", "Dm7", "G7", "Cmaj7", "Am7", "F#m7b5", "B7b9", "Em7", "Am7", "D7", "Gmaj7", "E7b9", "Am7", "D7b9", "Dm7", "G7", "C6", "Am7", "Dm7", "G7b13", "Cmaj7", "Am7", "Dm7", "G7#9", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'At Long Last Love',
      composer: 'Cole Porter',
      chords: ["C6", "Am7", "Dm7", "G9", "C6", "Am7", "Dm7", "G9", "C6", "Dm7", "Em7", "A7b9", "Dm7", "Em7", "A7", "Dm7", "Em7", "A9", "Dm7", "G7", "Dm7", "Dm7", "G9", "C6", "", "C6", "", "C6", "G13", "C6", "Am7", "Dm7", "G9", "C6", "Dm7", "G13", "C13", "", "Gm7", "C9", "F6", "", "F6", "", "Fmaj7", "Bb9", "Em7", "A7", "Dm7", "G7", "C6", "Dm7", "G13"],
  },
  {
      title: 'Au Privave',
      composer: 'Charlie Parker',
      chords: ["F7", "Bb7", "F7", "Cm7", "F7", "Bb7", "Bdim7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Autumn In New York',
      composer: 'Vernon Duke',
      chords: ["Gm7", "Am7", "Bb6", "C7", "Fmaj7", "Gm7", "Am7", "D7b9", "Gm7", "Am7", "Bb6", "C7", "Am7b5", "D7b9", "Gm7", "Bbm7", "Eb7", "Abmaj7", "Eb7", "Abmaj7", "G7b9", "Cm7", "Am7b5", "Dm7b5", "G7b9", "Cmaj7", "Am7", "D7", "Gm7", "Am7", "Bb6", "C7", "Fmaj7", "Gm7", "Am7", "", "D7", "Db7", "Cm7", "Dm7", "Ebm6", "F7b13", "Bbm6", "Abm7", "Gm7b5", "C7", "Fm7", "C7b9", "Fm7", "", "Ebm7", "Ab7", "Dbmaj7", "Ab7", "Dbmaj7", "Db7", "Gm7", "Am7", "Bbm6", "C7b9", "Fm", "Fm", "D7b9"],
  },
  {
      title: 'Autumn Leaves',
      composer: 'Joseph Kosma',
      chords: ["Cm7", "F7", "Bbmaj7", "Ebmaj7", "Am7b5", "D7b13", "Gm6", "Gm6", "Am7b5", "D7b13", "Gm6", "Gm6", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Am7b5", "D7b13", "Gm7", "Gb7", "Fm7", "E7", "Am7b5", "D7b13", "Gm6", "Gm6"],
  },
  {
      title: 'Autumn Nocturne',
      composer: 'Gannon-Myrow',
      chords: ["C69", "A7b9", "Dm9", "G7b9", "Am", "Am", "D7", "Fm6", "Cmaj7", "D9", "Dm7", "G13", "Bb9", "A7", "D9", "G7#5", "Emaj7", "F9", "Emaj7", "F9", "Emaj7", "F9", "Emaj7", "Am7", "D7", "", "Gmaj7", "Ab9", "Gmaj7", "Ab9", "Gmaj7", "Eb7", "Dm9", "G7#5", "C69", "A7b9", "Dm9", "G7b9", "Am", "Am", "F#m7b5", "Fm6", "Em7", "A7#5", "D9", "G7#5", "C69", "Db7", "Dm7", "Db7", "Em7", "Eb7", "Abmaj7", "Db9", "C69", "C69"],
  },
  {
      title: 'Avalon',
      composer: 'Jolson-Sylva-Rose',
      chords: ["Cm7", "Cm7", "F7", "F7", "Bb6", "Bb6", "Bb6", "G7", "Cm7", "Cm7", "F7", "F7", "Bb6", "Bb6", "Bb6", "Bb6", "Dm7", "Dm7", "G7", "G7", "Cm7", "Cm7", "Ebm7", "Ab7", "Bb6", "Bb6", "G7", "G7", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'Ba-lue Bolivar Ba-lues-are',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Ab7", "Eb7", "Gm7b5", "C7b5b9", "Cm7", "F7", "Bb7b5", "Bb7"],
  },
  {
      title: 'Baby, Won\'t You Please Come Home',
      composer: 'Warfield-Williams',
      chords: ["G", "B7", "E7", "A7", "A7", "B7", "Em", "A7", "D7", "G", "B7", "E7", "C7", "B7", "C", "C#dim7", "G", "E7", "A7", "D7", "G6", "D7"],
  },
  {
      title: 'Backstage Sally',
      composer: 'Wayne Shorter',
      chords: ["Fm6", "D7#9", "G7#5", "C7#9", "Ebm7", "Ab7", "Cm7", "F7", "Bbm6", "Ab7", "G7#5", "Gb7", "Fm7", "Bb7", "Ebm7", "Ab7", "D7b9", "G7", "C7#9", "F7", "Bb7#9", "Eb7", "Gm7b5", "C7#5", "Fm6", "D7#9", "G7#5", "C7#9", "Fm7", "Ab7", "Db", "Gb7"],
  },
  {
      title: 'Bags and Trane',
      composer: 'Milt Jackson',
      chords: ["Cm7", "Fm7", "Cm7", "Cm7", "Fm7", "Fm7", "Cm7", "Cm7", "Ab7", "G7", "Cm7", "Cm7"],
  },
  {
      title: 'Bags\' Groove',
      composer: 'Milt Jackson',
      chords: ["F7", "Bb7", "F7", "F7", "Bb7", "Bb7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Balance, The',
      composer: 'Dave Holland',
      chords: ["Gm7", "Em11", "Fm7", "Gm7", "Em11", "Fm7", "Am7b5", "D7b9", "Fm7", "Em7b5", "A7", "", "Dm11", "Dbmaj7#11", "Dm11", "Dbmaj7#11"],
  },
  {
      title: 'Ballad For Very Tired And Very Sad Lotus Eaters',
      composer: 'Billy Strayhorn',
      chords: ["Bbm7b9", "Eb13b9", "Abdim7", "Abmaj7", "Bbm7", "Eb13", "Ebm7", "D9#11", "Dbmaj7", "Bb9", "E7", "Bbm7", "Abdim7", "Bbm7", "Eb7", "Dbmaj7", "Fm7", "Gbmaj7", "Adim7", "Abm6", "Gdim7", "F#m7", "B7", "Emaj7", "G#m7", "Amaj7", "Cdim7", "Emaj7", "Bm7b5", "Bbm7", "Eb7", "Bbm7b9", "Eb13b9", "Abdim7", "Abmaj7", "Bbm7", "Eb13", "Ebm7", "Ab7b9", "Dbmaj7", "Bb9", "E7", "Bbm7", "Eb7sus", "Ab69", "Eb7sus"],
  },
  {
      title: 'Ballade',
      composer: 'Charlie Parker',
      chords: ["Fmaj7", "Em7b5", "A7b9", "D7", "D7", "G7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "D7", "D7", "G7", "Gm7", "C7", "F6", "F6", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Fmaj7", "", "Em7b5", "A7", "Dm7", "Dm7", "G7", "Gm7", "D7#9", "Gm7", "C7#9", "Fmaj7", "Em7b5", "A7b9", "D7", "D7", "G7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Baltimore Oriole',
      composer: 'Hoagy Carmichael',
      chords: ["Gm7", "Gm7", "C9", "Cm6", "Gm7", "Dm7", "G7b9", "Cm7", "F7", "Ab7", "Gm7", "C9", "Cm7", "Am7b5", "D7#9", "Gm7", "Gm7", "C9", "Am7b5", "Eb7", "D7b9", "Am7b5", "D7b9", "Gm7", "Gm7", "C9", "Cm6", "Gm7", "Dm7", "G7b9", "Cm7", "F7", "Ab7", "Gm7", "C9", "Cm7", "Am7b5", "D7#9", "Gm7", "Gm7", "C9", "Am7b5", "Eb7", "D7b9", "Gm7", "Gm7", "Em7b5", "Eb7", "Gm7", "Gm7", "Em7b5", "Eb7", "Gm7", "Am7b5", "D7b9"],
  },
  {
      title: 'Barbados',
      composer: 'Charlie Parker',
      chords: ["F7", "Bb7", "F7", "F7", "Bb7", "Bdim7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Barbara',
      composer: 'Horace Silver',
      chords: ["Bb7b5b9", "Bb7b5b9", "Ab7b5b9", "Ab7b5b9", "Bb7b5b9", "Bb7b5b9", "Eb7sus", "Eb7sus", "Abm7", "Db7b5b9", "Gbmaj7", "Gbmaj7", "Fm7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7b9"],
  },
  {
      title: 'Bark For Barksdale',
      composer: 'Gerry Mulligan',
      chords: ["F", "F", "Gm7", "C7", "F", "Bb7", "G7", "C7", "F", "Bb", "Bb", "Cm7", "F7", "Bb", "Eb7", "C7", "F7", "Bb", "C7", "F", "F", "Gm7", "C7", "F", "Bb7", "G7", "C7", "F", "Bm7b5", "Bbm7", "Bbm7", "A7", "Ab7", "G7", "G7", "C7", "F", "F"],
  },
  {
      title: 'Basin Street Blues',
      composer: 'Spencer Williams',
      chords: ["Bb", "Cm7", "C#dim", "Bb", "Bb", "Cm7", "C#dim", "Bb", "Bb", "Dbm7", "Cm7", "F7", "Bb", "Dbm7", "Cm7", "F7", "Bb", "Bb7", "Eb6", "Ebm6", "Bb", "F7", "Bbmaj7", "D7", "G7", "G7", "C7", "F7", "Bbmaj7", "C#dim7", "Cm7", "F7", "Bbmaj7", "D7", "G7", "G7", "C7", "F7", "Bbmaj7", "Eb6", "Bb", "F7"],
  },
  {
      title: 'Bat, The',
      composer: 'Pat Metheny',
      chords: ["G", "D", "Em", "A7", "D", "D", "Am7", "D7", "G", "D", "Em", "A7sus", "D", "D", "Am", "", "Db", "Db", "Bb13b9", "", "Ebm7", "Ebm7", "C#m7", "F#7", "Cm7b5", "Cm7b5", "Bmaj7", "Db", "Gb", "Ebm7", "D13", "Db13", "C13b9", "Fm7", "Fm7b5", "Bb7#5", "Ebmaj7", "Ebmaj7", "Bb", "Bb", "Ab", "Ab", "Abm", "Abm", "Eb", "Eb", "Eb", "Eb", "Ab", "Ab", "Am7b5", "D7", "Ab", "Eb", "Ab", "Eb", "Ab", "Eb"],
  },
  {
      title: 'Baubles, Bangles and Beads',
      composer: 'Borodin-Wright-Forrest',
      chords: ["Bbm7", "Eb7", "Cm7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Dm7", "G7", "Em7", "Am7", "Dm7", "G7", "Cmaj7", "Cmaj7", "F#m7", "B7", "Emaj7", "Emaj7", "Bbm7", "Eb7", "Cm7", "F7", "Bbm7", "Eb7", "Cm7", "F7", "Bbm7", "Eb7", "Gb7", "F7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7"],
  },
  {
      title: 'Be Careful It\'s My Heart',
      composer: 'Irving Berlin',
      chords: ["Gm7", "C7", "Gm7", "C7", "F6", "Gm7", "G#dim7", "F", "Gm7", "C7", "Gm7", "C7", "F6", "Gm7", "G#dim7", "F", "Fmaj7", "E7#5", "Eb7", "D7", "Gm7b5", "C7", "Fmaj7", "Ebm7", "Ab7", "G7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "Gm7", "G#dim7", "F", "Gm7", "C7", "Gm7", "C7", "Am7", "D7", "Gm7", "Eb9#11", "Fmaj7", "Dm7", "G7", "Gm7", "C7sus", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Be My Love',
      composer: 'Nikolaus Brodszky',
      chords: ["Gsus", "G", "Gmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "C#m7b5", "C7b5", "Bm7", "E7b9", "Ddim7", "Am7", "Am7", "Bbdim7", "Bm7", "Bm7", "Em7", "A7", "Am7", "D7", "Gsus", "G", "Gmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "C#m7b5", "C7b5", "Bm7", "E7b9", "Ddim7", "Am7", "Am7", "Bbdim7", "Bm7", "Em7", "Am7", "D7", "F7#11", "E7b13", "Am7", "D7", "G6", "G6"],
  },
  {
      title: 'Be-Bop',
      composer: 'Dizzy Gillespie',
      chords: ["Fm", "Gm7b5", "Fm", "Bbm6", "Fm", "Gm7b5", "C7b9", "Fm", "Gm7b5", "Fm", "Bbm6", "Fm", "Gm7b5", "C7", "Fm", "", "Fm7", "Bb7#9", "Ebmaj7", "Ebmaj7", "Ebm7", "Ab7#9", "Dbmaj7", "Gm7b5", "C7b9", "Fm", "Gm7b5", "Fm", "Bbm6", "Fm", "Gm7b5", "C7b9", "Fm", "Gm7b5", "Fm", "Bbm6", "Fm", "Gm7b5", "C7", "Fm", ""],
  },
  {
      title: 'Beatrice',
      composer: 'Sam Rivers',
      chords: ["Fmaj7", "Gbmaj7#11", "Fmaj7", "Ebmaj7#11", "Dm7", "Ebmaj7#11", "Dm7", "Cm7", "Bbm7", "Am7", "Bbmaj7", "Em7b5", "A7b9", "Dm7", "Gm7", "Gbmaj7#11", "Fm7", "Gbmaj7#11"],
  },
  {
      title: 'Beautiful Love',
      composer: 'Victor Young',
      chords: ["Em7b5", "A7b9", "Dm", "Dm", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm", "Gm7", "Bb7", "A7b9", "Dm", "G7#11", "Em7b5", "A7b9"],
  },
  {
      title: 'Beauty And The Beast',
      composer: 'Wayne Shorter',
      chords: ["F13", "F13", "F13", "F13", "F13", "F13", "F13", "F13", "E7#9", "Am7", "B7#5#9", "E7#9", "Am7", "Gm7", "C7#9", "Fm7", "Ebm7", "Ab13", "Dbmaj9", "C7alt", "F13", "F13", "F13", "F13", "E7#9", "F13", "F13", "F13", "F13"],
  },
  {
      title: 'Begin The Beguine',
      composer: 'Cole Porter',
      chords: ["C", "C6", "Cmaj7", "C6", "C", "C6", "C#dim", "Dm7", "G7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "G7", "Cmaj7", "C6", "Cm7", "F7", "Bb6", "Bb6", "Bbm7", "Eb7", "Abmaj7", "Ab6", "Adim7", "Adim7", "G6", "Ab7", "G6", "Ab7", "Dm7", "G7", "C", "C6", "Cmaj7", "C6", "C", "C7", "Dm7", "G7", "Dm7b5", "Dm7b5", "Dm7b5", "Dm7b5", "Dm7", "G7", "Cmaj7", "C6", "C", "C6", "Cmaj7", "C6", "C", "C6", "G7", "G7", "Fmaj7", "Fmaj7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "C6"],
  },
  {
      title: 'Bein\' Green',
      composer: 'Joe Raposo',
      chords: ["Bbmaj7", "A7#5", "Dm7b5", "G7sus", "G7b9", "Cm7", "F7sus", "F7", "Bbmaj7", "Bb", "Ab", "Gb", "F7", "Abmaj7", "Dbmaj7", "Bbmaj7", "Bbmaj7", "Gm", "Gm", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "A7#5", "Dm7b5", "G7sus", "G7b9", "Cm7", "F7sus", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Bemsha Swing',
      composer: 'Thelonious Monk',
      chords: ["C", "A7", "Ab7", "Db7", "C", "Eb7", "D7", "Db7", "C", "A7", "Ab7", "Db7", "C", "Bb7", "Ab7", "Gb7", "F", "D7", "Db7", "Gb7", "F", "Ab7", "G7", "Db7", "C", "A7", "Ab7", "Db7", "C", "Dbmaj7", "Dbmaj7"],
  },
  {
      title: 'Benny\'s Tune',
      composer: 'Lionel Loueke',
      chords: ["Gbm6", "Db", "Gbm6", "Db", "Bmaj7#11", "Bbm7", "F", "Ab7sus", "Eb", "Gb13", "Db", "B7#11", "Gm7b5", "Gbm6", "Db", "Bmaj7#11", "Amaj7#5", "D", "Gbm6", "Db", "Gbm6", "Db", "Gbm6", "Db", "E6", "Eb7#9", "Dmaj7#11"],
  },
  {
      title: 'Bernie\'s Tune',
      composer: 'Bernie Miller',
      chords: ["Dm7", "Dm7", "Bb7#11", "Bb7#11", "Em7b5", "A7b9", "Dm7", "Em7b5", "A7b9", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Em7b5", "A7b9", "Dm7", "Dm7", "Bb7#11", "Bb7#11", "Em7b5", "A7b9", "Dm7", "Dm7", ""],
  },
  {
      title: 'Besame Mucho',
      composer: 'Consuelo Velazques',
      chords: ["Dm6", "Dm6", "Gm6", "Gm6", "Gm6", "D7b9", "Em7b5", "A7b9", "Dm6", "Dm6", "Am7b5", "D7b9", "Gm6", "Gm6", "Dm6", "Bm7b5", "E7b9", "A7b9", "Dm6", "Dm6", "Gm6", "Dm6", "Em7b5", "A7b9", "Dm6", "D7b9", "Gm6", "Dm6", "E7", "Bb7b9", "A7b9", "Dm6", "Dm6", "Gm6", "Gm6", "Gm6", "D7b9", "Em7b5", "A7b9", "Dm6", "Dm6", "Am7b5", "D7b9", "Gm6", "Gm6", "Dm6", "Bm7b5", "E7b9", "A7b9", "Dm6", "Dm6"],
  },
  {
      title: 'Bess You Is My Woman',
      composer: 'George Gershwin',
      chords: ["Bb6", "Gm7", "Cm7", "F7#9", "Bbmaj7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "Gm7", "Em7b5", "Eb7", "Dm7", "Ab7", "Dbmaj7", "F7", "Bb6", "Gm7", "Cm7", "F7#9", "Bbmaj7", "Gm7", "Em7b5", "A7", "D6", "Dm7", "G7", "Dmaj7", "G#m7b5", "C#7b9", "F#6", "B7", "C#7#5", "F#6", "D#m7", "Cm7b5", "F7b9", "D6", "A7sus", "A7#5", "D6", "A7sus", "A7#5", "D6", "D9", "Gmaj9", "C7", "D6", "G7", "D7", "G7", "D6", "Abdim", "Em", "D", "Bb7#5", "Bb7#5", "B7", "B7#5", "Em7b5", "A7", "D6", "Abm7b5", "A7", "F#m7", "D7", "Gmaj7", "Bbm6", "D6", "D7", "Gmaj7", "Em7", "A7", "A7#5", "D6"],
  },
  {
      title: 'Bessie\'s Blues',
      composer: 'John Coltrane',
      chords: ["Eb7", "Ab7", "Eb7", "Eb7", "Ab7", "Ab7", "Eb7", "Eb7", "Bb7", "Ab7", "Eb7", "Bb7"],
  },
  {
      title: 'Best Is Yet To Come (Page 1), The',
      composer: 'Cy Coleman',
      chords: ["Abmaj7", "Ab7", "Ab6", "", "Abaug", "Ab", "Abmaj7", "Ab7", "Ab6", "", "Abaug", "Ab", "Abmaj7", "Ab7", "Ab6", "", "Abaug", "Ab", "F7", "F7", "Bbm7", "Eb7", "Ab6", "Dm7b5", "G7", "Cmaj7", "C7", "C6", "", "Caug", "C", "Cmaj7", "C7", "C6", "", "Caug", "C", "Cmaj7", "C7", "C6", "", "Caug", "C", "A7", "A7", "Dm7", "G7", "Dm7", "G7", "C6", "Dm7", "D#dim7", "C6", "Dm7", "G7", "Dm7", "G7", "C6", "Bbm7", "Eb7", "Abmaj7", "Ab7", "Ab6", "", "Abaug", "Ab", "F7", "F7", "Bb7", "Eb7", "Ab6", "Ab6"],
  },
  {
      title: 'Best Is Yet To Come (Page 2), The',
      composer: 'Cy Coleman',
      chords: ["Fm", "Db7", "Fm6", "Db7", "Fm", "Db7", "Fm6", "Eb7", "Ab7", "D7#11", "Db7", "Eb7b9", "Ab13", "G7b9b13", "C7b9", "Fm6", "Db9", "Fm6", "Db9", "Fm6", "Db9", "Bb7sus", "Bb7", "Ebm7", "Fm7", "Gb6", "Ab7", "Db6", "Ebm7", "Edim7", "Db6", "Ebm7", "Fm7", "Gb6", "Ab7", "Db6", "E13", "Amaj7", "A7", "A6", "", "Aaug", "A", "F#7", "F#7", "B7", "E7", "A6", "A6"],
  },
  {
      title: 'Best Thing For You Is Me, The',
      composer: 'Irving Berlin',
      chords: ["F#m7", "B7b13", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Abmaj7", "Abmaj7", "Bbm7", "Eb7", "Edim7", "Fm7", "Fm7", "Dm7", "G7", "F#m7", "B7b13", "Em7", "A7", "Dm7", "G7", "Cmaj7", "C", "Am7", "Am7", "F#m7b5", "Fm6", "C", "A7", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'Best Things In Life Are Free, The',
      composer: 'DeSylva-Brown-Henderson',
      chords: ["C6", "C6", "Cmaj7", "Cmaj7", "C6", "C6", "Ebdim7", "Dm7", "G7", "Dm7", "Dm7", "Dm7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "C#dim7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Am7", "D7", "Dm7", "G7", "C6", "C6", "Em7", "A7", "Dm7", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'Better Days Ahead',
      composer: 'Pat Metheny',
      chords: ["E", "B69", "G", "Dmaj9", "Ab9#11", "Gmaj7", "Em7", "F#m7", "Bm7", "", "Am7", "D7", "D7", "Abm7", "Db7b9", "", "Gbmaj7", "Fm7b5", "Bb7b9", "Ebm7", "Ab7", "Abm7", "Db7b9", "Gbmaj7", "C13", "Bmaj7", "Bbm7", "Ebm7", "Dbm7", "Cm7b5", "Db", "F#maj7", "Dmaj7", "E", "Dmaj7", "F#maj7", "Dmaj7", "E", "Gmaj7#11", "Ebm7", "Ab13", "Abm7", "Db7b9", "Gmaj7#11", "F#maj7", "Dmaj7", "E", "Dmaj7", "F#maj7", "Dmaj7", "E", "Dmaj7", "F#maj7", "Gmaj7#11", "Ebm7", "Ab7", "Abm7", "Db7b9", "Bbm7", "Eb7", "Bm7", "E7", "Bbm7", "Eb7", "Abm7", "Db7b9", "Gmaj7#11"],
  },
  {
      title: 'Better Git It In Your Soul',
      composer: 'Charles Mingus',
      chords: ["F7", "Bb7", "F7", "Bb7", "F7", "Bb7", "Gm7", "C7", "F7", "C7", "Gm7", "C7", "Bb7", "F7", "Bb7", "F7", "Bb7", "Am7", "D7", "Gm7", "C7", "F7", "Bb7", "F7", "Bb7", "F7", "Bb7", "Gm7", "C7", "F7", "C7", "F7"],
  },
  {
      title: 'Better Than Anything',
      composer: 'Loughborough-Wheat',
      chords: ["D69", "C69", "D69", "C69", "D69", "C69", "Bm7", "Bb7", "Am7", "D7#9", "G69", "F69", "G69", "F69", "D69", "C69", "D69", "C69", "Ab7#11", "G7", "F#7", "F7", "E7", "Ebmaj7", "D69", "C69", "D69", "C69"],
  },
  {
      title: 'Between The Devil And The Deep Blue Sea',
      composer: 'Harold Arlen',
      chords: ["Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Gm7", "C7", "F6", "C7", "Amaj7", "F#m7", "Bm7", "E7", "Amaj7", "F#m7", "Bm7", "E7", "Cmaj7", "Am7", "Fm6", "Ab7", "G7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'Bewitched',
      composer: 'Richard Rodgers',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "C7#5", "Fmaj7", "F#dim7", "C6", "Am7", "Dm7", "", "G7", "A7", "Dm7", "G7", "Dm6", "Dm6", "Am7", "Am7", "Dm7", "G7", "Dm7", "G7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "C7#5", "Fmaj7", "F#dim7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Beyond The Blue Horizon',
      composer: 'Whiting-Harding',
      chords: ["Bbmaj7", "Bbmaj7", "Ab7#11", "Ab7#11", "Bbmaj7", "Bbmaj7", "G7", "G7", "Cm7", "Ebm6", "Bbmaj7", "G7", "C7", "C7", "Cm7", "F7#5", "Bbmaj7", "Bbmaj7", "Ab7#11", "Ab7#11", "Bbmaj7", "Ddim7", "G7", "G7", "Cm7", "Ebm6", "Bbmaj7", "Gm7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Beyond The Sea',
      composer: 'Charles Trenet',
      chords: ["F6", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "A7", "Dm7", "C7", "F6", "Dm7", "Bb6", "D7", "Gm7", "C7", "Dm7", "Bbmaj7", "G7", "C7", "A6", "F#m7", "Bm7", "E7", "A6", "F#m7", "Bm7", "E7", "A6", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "A7", "Dm7", "C7", "F6", "Dm7", "Bb6", "D7", "Gm7", "C7", "Dm7", "Bb7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Bidin\' My Time',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "C7b13", "Fm7", "Bb7", "Ebmaj7", "C7b13", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Abm7", "Ebmaj7", "Fm7", "Bb7", "", "Eb6", "G7", "Cmaj7", "G7", "Cmaj7", "Dm7", "G7", "Cmaj7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "C7b13", "Fm7", "Bb7", "Ebmaj7", "C7b13", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Abm7", "Ebmaj7", "Bb7", "Ebmaj7"],
  },
  {
      title: 'Big Nick',
      composer: 'John Coltrane',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "G", "G7", "C", "C#dim7", "G", "E7", "Am7", "D7"],
  },
  {
      title: 'Bill Bailey, Won\'t You Please Come Home',
      composer: 'Hughie Cannon',
      chords: ["G", "G", "G", "G", "G", "G", "Abdim7", "Am7", "D7", "D7", "D7", "D7", "D7", "D7", "D7", "G", "Am7", "D7", "G", "G", "G", "G", "Dm7", "G7", "C", "C", "C", "C#dim7", "G", "E7", "A7", "D7", "G", "Am7", "D7"],
  },
  {
      title: 'Bill\'s Hit Tune',
      composer: 'Bill Evans',
      chords: ["Dm7b5", "Dm7b5", "G7b9", "Cm7", "Abmaj7", "Dm7b5", "Dm7b5", "G7b9", "Cm7", "C7#9", "Fm7", "Bb7sus", "Bb7", "Ebmaj7", "Abmaj7", "Dm7b5", "G7sus", "G13", "Cmaj7#5", "Fmaj7#11", "Bm7b5", "E7b9", "Am7", "Am7", "F#m7b5", "B7b9", "Em7", "Em7", "C#m7b5", "F#7b9", "Bm7", "Bm7", "G#m7b5", "C#7b9", "F#maj7", "F#7", "Ebm7", "Em7", "A7b9", "Dm", "Dm7b5", "Dm7b5", "G7b9", "Cm7", "Cm7"],
  },
  {
      title: 'Billie\'s Bounce',
      composer: 'Charlie Parker',
      chords: ["F7", "Bb7", "F7", "Cm7", "F7", "Bb7", "Bdim7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Billy Boy',
      composer: 'Traditional',
      chords: ["Cmaj7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Fmaj7", "Fm6", "Cmaj7", "Bm7b5", "E7b9", "Am7", "D7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7", "G7", "Cmaj7", "Dm7", "G7"],
  },
  {
      title: 'Birk\'s Works',
      composer: 'Dizzy Gillespie',
      chords: ["Fm6", "Gm7b5", "C7b9", "Fm6", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Fm6", "Fm6", "Abm7", "Db7", "Gm7b5", "C7b9", "Fm6", "Fm6"],
  },
  {
      title: 'Birth Of The Blues, The',
      composer: 'Ray Henderson',
      chords: ["Cmaj7", "C#dim7", "Dm7", "G7", "Cmaj7", "E7", "Fmaj7", "F#dim7", "G7", "Dm7", "G7", "C6", "Ebdim7", "Dm7", "Db7", "E7", "E7", "E7", "E7", "A7", "A7", "D7", "Dm7", "Db7", "Cmaj7", "C#dim7", "Dm7", "G7", "Cmaj7", "E7", "Fmaj7", "F#dim7", "G7", "Dm7", "G7", "C6", "Ebdim7", "Dm7", "G7"],
  },
  {
      title: 'Black And Blue',
      composer: 'Fats Waller',
      chords: ["Am7", "Dm7", "Am7", "D7", "Db7", "C6", "A7", "Dm7", "G7", "Cmaj7", "Bm7b5", "E7b9", "Ab7", "Ab7", "C6", "Dm7", "Em7", "C6", "Ab7", "Ab7", "C6", "F7", "Bm7b5", "E7b9", "Am7", "Dm7", "Am7", "D7", "Db7", "C6", "A7", "Dm7", "G7", "C6", "F7", "C6", "", "", ""],
  },
  {
      title: 'Black And Tan Fantasy',
      composer: 'Ellington-Miley',
      chords: ["Bbm", "Bbm", "Bbm", "Bbm", "Ebm6", "Ebm6", "Bbm", "Bbm", "F7b9", "F7b9", "Bbm", "Ebm6", "Bbm", "Gb7", "Gb7", "Bb6", "Dm7", "Dbdim7", "Eb", "Ebm", "Dm7", "G7", "Cm7", "F7", "Bb", "Gaug", "C7", "F7", "Bb7", "Eb7", "Ab7", "Db7"],
  },
  {
      title: 'Black Butterfly',
      composer: 'Ellington-Carruthers-Mills',
      chords: ["Gm7", "C7", "F6", "Fmaj7", "", "Em7b5", "Eb7", "D7", "", "Eb7", "D7", "G7", "Gb7", "F7", "Bb7", "Eb7", "D7", "Db7", "C7", "F6", "F#dim7", "Am7b5", "D7", "G7", "C7", "F7", "Bb7", "Db", "", "F6", "Bbm", "F", "", "A7", "", "Em7b5", "A7", "Dm7", "Dm6", "Bbmaj7", "Bbmaj7", "Gm7", "C7", "Fmaj7", "F7", "Eb7", "D7b9", "G7", "C7", "F7", "Bdim7", "Am7", "D7", "Gm7", "C7", "Fmaj7"],
  },
  {
      title: 'Black Coffee',
      composer: 'Burke-Webster',
      chords: ["C7#9", "Db7#9", "C7#9", "Db7#9", "C7#9", "Db7#9", "C7#9", "Db7#9", "F7", "F7", "C7#9", "Db7#9", "C7#9", "A7b5b9", "Dm7", "G7sus", "C7#9", "Db7#9", "C7#9", "Db7#9", "Fm7", "Bb7", "Cm6", "Dm7b5", "G7alt", "Cmaj7", "Ebm7", "Ab7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Dm7", "G7b9", "C7#9", "Db7#9", "C7#9", "Db7#9", "C7#9", "Db7#9", "C7#9", "Db7#9", "F7", "F7", "C7#9", "Db7#9", "C7#9", "A7b5b9", "Dm7", "G7sus", "C7#9", "Db7#9", "C7#9", "Db7#9"],
  },
  {
      title: 'Black Narcissus',
      composer: 'Joe Henderson',
      chords: ["Abm7", "Bbm7", "Abm7", "Bbm7", "Abm7", "Bbm7", "Abm7", "Bmaj7#11", "F#m7", "G#m7", "F#m7", "G#m7", "F#m7", "G#m7", "F#m7", "Amaj7#11", "Ebmaj7#11", "Fmaj7#11", "Bbmaj7#11", "Cmaj7#11", "Ebmaj7#11", "Fmaj7#11", "Bbmaj7#11", "Gmaj7#11", "Abmaj7#11", "Bb", "Cmaj7#11"],
  },
  {
      title: 'Black Nile',
      composer: 'Wayne Shorter',
      chords: ["Fm7", "Gbmaj7", "Ebm7", "Fm7", "Dm7", "Bb7", "Ebmaj7", "Em7b5", "A7b9", "A7b9", "Dm6", "Eb7", "Dm6", "Cm7", "F7#5", "Bbmaj7", "A7b13", "Dm6", "Eb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "A7b9", "Dm6", "Eb7", "Dm6", "Cm7", "F7", "Bbmaj7", "A7b13", "Dm6", "Eb7"],
  },
  {
      title: 'Blackberry Winter',
      composer: 'Alec Wilder',
      chords: ["Fmaj7", "Am7", "Dm7", "", "Gm7", "C7", "Fmaj7", "Gm7", "Am7", "Bbmaj7", "Am7", "Dm7", "Gm7", "C7sus", "F6", "Dm7", "Gm7", "C7", "Cm7", "F7", "Dm7", "Gm7", "Cm7", "F7", "Bbmaj7", "Am", "Am", "Am7", "Am6", "Bm7b5", "E7b9", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Am7", "Dm7", "", "Gm7", "C7", "Fmaj7", "Gm7", "Am7", "Bbmaj7", "Am7", "Dm7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Blame It On My Youth',
      composer: 'Oscar Levant',
      chords: ["Ebmaj7", "Fm7", "Gm7", "Cm7", "Fm7", "Edim7", "Fm7", "Bb7", "Fm7", "Edim7", "Fm7", "Bb7", "Gm7", "", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Bb7", "Gm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Dm7b5", "G7b13", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Gm7", "Cm7", "Fm7", "Edim7", "Fm7", "Bb7", "Fm7", "Edim7", "Fm7", "Bb7", "Gm7", "", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Gm7", "Cm7", "Fm7", "Fm7", "Db7", "C7b13", "Fm7", "Edim7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Blood Count',
      composer: 'Billy Strayhorn',
      chords: ["F7#11", "Bb7#9", "Eb7#9#11", "Bbm7", "Eb7", "Dm", "Dmaug", "Dm6", "Am7", "D7", "F7#11", "Bb7#9", "Eb7#9#11", "Bbm7", "A7", "Dmaj7", "Dmaj7#5", "D6", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm6", "Gm7", "C7", "Fmaj7", "E7", "A7#11", "Bb7#11", "B7#11", "C7#11", "F7#11", "Bb7#9", "Eb7#9#11", "Bbm7", "Eb7", "Dmaj7", "Dmaj7#5", "D6", "Am7", "D7", "Gmaj7", "C7", "F#m7", "Bm7", "E7", "A7sus", "F", "E", "Eb", "Dmaj7", "F", "E", "Eb"],
  },
  {
      title: 'Bloomdido',
      composer: 'Charlie Parker',
      chords: ["Bb7", "Cm7", "F7", "Bb7", "Bb7", "Eb7", "Ebm7", "Bb7", "C#m7", "Cm7", "F7", "Bb7", "Cm7", "F7"],
  },
  {
      title: 'Blue (And Broken Hearted)',
      composer: 'Leslie-Handman-Clarke',
      chords: ["Bbmaj7", "Bbmaj7", "Dbdim7", "Dbdim7", "D7#5", "D7#5", "G7#5", "G7", "Cm7", "Cm7", "Ebm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7"],
  },
  {
      title: 'Blue And Sentimental',
      composer: 'Livingstone-David-Basie',
      chords: ["Eb", "Db7", "C9", "Gb9", "F9", "Bb13", "F9", "Bb13", "Gm7", "C7", "Fm7", "Bb7", "Eb", "Db7", "C9", "Gb9", "F9", "Bb13", "F9", "Bb13", "Eb9", "", "Bbm7", "Eb9", "Ab6", "Adim7", "Eb6", "Bb7", "Eb9", "", "Ab6", "Adim7", "Eb6", "C7", "Fm7", "Bb7", "Eb", "Db7", "C9", "Gb9", "F9", "Bb13", "F9", "Bb13", "Eb9", "D9", "Db9", "C9", "F9", "Bb13", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'Blue Bossa',
      composer: 'Kenny Dorham',
      chords: ["Cm7", "Cm7", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9"],
  },
  {
      title: 'Blue Champagne',
      composer: 'Watts-Ryerson-Eaton',
      chords: ["F6", "Abdim7", "Gm7", "C7", "F6", "Dm7", "Db7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "F6", "Gm7", "C7", "Dm", "Dm", "Dm7", "G7", "Fmaj7", "", "Gm7", "C7", "Fmaj7", "", "Em7b5", "A7", "Dm7", "Dm", "Dm7", "G7", "Fmaj7", "G9", "Db7", "C7", "F6", "Abdim7", "Gm7", "C7", "F6", "Dm7", "Db7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Blue Daniel',
      composer: 'Frank Rosolino',
      chords: ["D6", "C7", "Bm7", "E7", "Bm7", "E7", "Bm7", "E7", "Gm7", "C7", "Dmaj7", "C7", "Em7", "A7", "D6", "C7", "Bm7", "E7", "A7", "Dmaj7"],
  },
  {
      title: 'Blue In Green',
      composer: 'Miles Davis, Bill Evans',
      chords: ["Gm6", "A7#9", "Dm7", "Db7", "Cm7", "F7", "Bbmaj7#11", "A7#9", "Dm6", "E7b13", "Am7", "Dm7", "Gm6", "A7#9", "Dm6", "Dm6"],
  },
  {
      title: 'Blue Lou',
      composer: 'Irving Mills',
      chords: ["Cm7b5", "F7", "Cm7b5", "F7", "Bbmaj7", "Ebmaj7", "Cm7", "F7", "Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7", "Cm7", "F7", "Cm7b5", "F7", "Cm7b5", "F7", "Bbmaj7", "Ebmaj7", "C7", "F7", "Bbmaj7"],
  },
  {
      title: 'Blue Monk',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "F7", "F7", "Bb7", "Bb7"],
  },
  {
      title: 'Blue Moon',
      composer: 'Richard Rodgers',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Db7", "C7", "B7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "A7#11", "Abm7", "Db7", "Gbmaj7", "Bb", "F7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Db7", "C7", "B7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Blue Room, The',
      composer: 'Richard Rodgers',
      chords: ["F6", "Dm7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "F6", "Bb7#11", "Am7", "Abdim7", "Gm7", "Gm7", "Em7b5", "A7#9", "Dm7", "G7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "F6", "Abdim", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'Blue Silver',
      composer: 'Horace Silver',
      chords: ["Em11", "Ebm11", "Fm7b5", "Db9", "Fm7b5", "Bb7b9", "C#m7", "F#7", "Bmaj7", "", "Fm7b5", "Gb13", "Ab13", "Bb7#5", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Bbm7b5", "Eb7b9", "Abm7", "Fm7b5", "Bb7b9", "Ebm7", "Am7", "D7b9", "Gmaj7", "Fm7b5", "Gb13", "Ab13", "Bb7#5", "Em11", "Ebm11", "Fm7b5", "Db9", "Fm7b5", "Bb7b9", "C#m7", "F#7", "Bmaj7", "", "Fm7b5", "Gb13", "Ab13", "Bb7#5", "Ebm11", "Ebm11", "Ebm11", "Ebm11"],
  },
  {
      title: 'Blue Skies',
      composer: 'Irving Berlin',
      chords: ["Am", "Am", "Am7", "Am6", "Cmaj7", "A7", "Dm7", "G7", "C6", "Bm7b5", "E7b9", "Cmaj7", "Fm6", "Cmaj7", "Fm6", "Cmaj7", "G7", "C6", "Cmaj7", "Fm6", "Cmaj7", "Fm6", "Cmaj7", "Bm7b5", "E7b9", "Am", "Am", "Am7", "Am6", "Cmaj7", "A7", "Dm7", "G7", "C6", "Bm7b5", "E7b9"],
  },
  {
      title: 'Blue Sphere',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "F7", "F7", "Bb7", "Bb7"],
  },
  {
      title: 'Blue Turning Grey Over You',
      composer: 'Fats Waller',
      chords: ["Bb6", "Em7b5", "A7", "Dm7b5", "G7", "C7", "F7", "Bb6", "Bdim7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Cm7b5", "F7", "Bb6", "Bb7", "Eb6", "G7", "Cm7", "C7", "F6", "Fdim7", "Cm7", "F7", "Bb6", "Em7b5", "A7", "Dm7b5", "G7", "C7", "F7", "Bb6", "Ebm7", "Bb6", "F7"],
  },
  {
      title: 'Blueberry Hill',
      composer: 'Lewis-Stock-Rose',
      chords: ["Ab", "Ab", "Eb", "Eb", "Bb7", "Bb7", "Eb", "Eb7", "Eb", "Cm", "Fm7", "Bb7", "Eb", "Bb7", "Eb", "D7b9", "Gm", "Am7b5", "D7", "G", "Bb7", "Eb7", "Ab", "Ab", "Eb", "Eb", "Bb7", "Bb7", "Eb", "Db7", "Eb", ""],
  },
  {
      title: 'Bluehawk',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "F7", "F7", "Bb7", "Bb7"],
  },
  {
      title: 'Blues Five Spot',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Ab7", "Bb7", "Bb7", "F7", "F7", "Bb7", "Bb7"],
  },
  {
      title: 'Blues For Alice',
      composer: 'Charlie Parker',
      chords: ["Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Cm7", "F7", "Bb7", "Bbm7", "Eb7", "Am7", "D7", "Abm7", "Db7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Blues For Wood',
      composer: 'Woody Shaw',
      chords: ["Fm7", "Fm7", "Fm7", "Fm7", "Db7", "Db7", "Fm7", "Fm7", "Db7", "Bbmaj7", "Gm7b5", "C7#9", "Fm7"],
  },
  {
      title: 'Blues In The Closet',
      composer: 'Oscar Pettiford',
      chords: ["Ab7", "Ab7", "Ab7", "Ab7", "Db7", "Db7", "Ab7", "Ab7", "Bbm7", "Eb7", "Ab7", "Ab7"],
  },
  {
      title: 'Blues In The Night',
      composer: 'Harold Arlen',
      chords: ["G7", "C7", "G7", "G7", "C7", "C7", "G7", "G7", "D7", "Eb7", "D7", "G7", "C7", "G7", "C7", "F7", "Bb7", "Eb7", "Bb7", "A7", "D7", "Db7", "D7", "A7", "Db7", "C7", "Eb7", "D7", "G6"],
  },
  {
      title: 'Blues March',
      composer: 'Benny Golson',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Ab7", "Db7", "Gb7", "Gm7b5", "Ab7", "A7", "Bb7", "Cm7b5", "F7", "Bb7", "Db7", "Gb7", "B7", "Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "E7", "Eb7", "Edim7", "Bb7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Bb7", "G7", "Cm7", "F7", "Bb7", "Db7", "Gb7", "B7"],
  },
  {
      title: 'Bluesette',
      composer: 'Toots Thielemans',
      chords: ["Bbmaj7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "C#m7", "F#7", "Bmaj7", "Bmaj7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7"],
  },
  {
      title: 'Body And Soul',
      composer: 'Johnny Green',
      chords: ["Ebm7", "Bb7b13", "Ebm7", "Ab7", "Dbmaj7", "Gb7", "Fm7", "Edim7", "Ebm7", "Ebm7", "Cm7b5", "F7b9", "Bbm7", "", "Ebm7", "Ab7", "Db6", "Gb7", "Fm7b5", "Bb7", "Dmaj7", "Em7", "Dmaj7", "", "Gm7", "C7", "F#m7", "Bm7", "Em7", "A7", "Dmaj7", "Dm7", "G7", "Em7", "Ebdim7", "Dm7", "G7", "C7", "B7", "Bb7", "", "Ebm7", "Bb7b13", "Ebm7", "Ab7", "Dbmaj7", "Gb7", "Fm7", "Edim7", "Ebm7", "Ebm7", "Cm7b5", "F7b9", "Bbm7", "", "Ebm7", "Ab7", "Db6", "Gb7", "Fm7b5", "Bb7"],
  },
  {
      title: 'Bohemia After Dark',
      composer: 'Oscar Pettiford',
      chords: ["Gm7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "D7b9", "Gm7", "C7sus", "C7sus", "C7sus", "C7sus", "C7sus", "C7sus", "C7sus", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "Gm7"],
  },
  {
      title: 'Bolivia',
      composer: 'Cedar Walton',
      chords: ["G7", "G7", "G7", "G7", "G7", "G7", "G7", "G7", "", "Ebmaj7", "", "A13", "Dmaj7", "Ab13b9", "Gmaj7", "F#7b13", "Bm7", "Cmaj7#11", "Bm7", "Bm7", "G#m7b5", "Gm7", "C7", "Fmaj7", "B7b9", "Bbmaj7", "A7#9", "G7", "G7", "G7", "G7", "G7", "G7", "G7", "G7", ""],
  },
  {
      title: 'Boo Boo\'s Birthday',
      composer: 'Thelonious Monk',
      chords: ["Cmaj7", "B7", "E7b9", "E7b9", "F7#11", "E7#11", "Eb7#11", "D7#11", "Dbmaj7#11", "Db7", "Gm7", "Db7", "Gb7", "Fmaj7", "Cmaj7", "Fmaj7#11", "Cmaj7"],
  },
  {
      title: 'Booker\'s Waltz',
      composer: 'Booker Little',
      chords: ["Abmaj7", "Eb7", "Gm7b5", "C7b9", "Fm7", "Db7", "Bb7", "Db7#11", "Abmaj7", "B7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "A7#11", "A7#11"],
  },
  {
      title: 'Boplicity',
      composer: 'Cleo Henry',
      chords: ["Gm7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Cm7", "F7#5", "Bbmaj7", "Gm7", "Gm7", "C7sus", "Fmaj7#11", "Cm7", "F7#5", "Cm7", "B7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7#5", "Bbm7", "A7", "Abmaj7", "Abm7", "Gm7", "C7", "Gm7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Cm7", "F7#5", "Bbmaj7", "Gm7", "Gm7", "C7sus", "Fmaj7#11"],
  },
  {
      title: 'Born To Be Blue',
      composer: 'Wells-Torme',
      chords: ["C7", "Db7#11", "C7", "Gb7#11", "F7", "Eb7", "Abmaj7", "G7#5", "Cm7", "Db7#11", "Cm7", "F7", "Fm7", "D7#5#9", "Dm7b5", "G7", "Abm7", "Db7", "Abm7", "Db7", "Abm7", "Db7", "Gbmaj7", "C#m7", "F#7", "Bmaj7", "G#m7", "Fm7", "Bb7", "Ebmaj7", "", "Dm7b5", "G7", "C7", "Db7#11", "C7", "Gb7#11", "F7", "Eb7", "Abmaj7", "G7#5", "Cm7", "Db7#11", "Cm7", "F7", "Fm7", "", "Ab7", "G7", "C6", "Db7#11"],
  },
  {
      title: 'Bossa Antigua',
      composer: 'Paul Desmond',
      chords: ["Bbm7", "Eb7", "Cm7", "Fm7", "Bbm7", "Eb7", "Cm7", "F7", "Bbm7", "Eb7", "Cm7", "Fm7", "Bbm7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Em7", "Am7", "Dm7", "G7", "Cm7", "F7", "Bbm7", "Eb7", "Cm7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7"],
  },
  {
      title: 'Boulevard Of Broken Dreams, The',
      composer: 'Dubin-Warren',
      chords: ["Dm", "Em7b5", "Dm", "Dm", "Em7b5", "A7", "Em7b5", "A7", "Dm", "Gm", "Dm", "A7", "Am7b5", "D7b9", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "A7", "Dm", "Em7b5", "Dm", "Dm", "Em7b5", "A7", "Em7b5", "A7", "Dm", "Gm", "Dm", "A7"],
  },
  {
      title: 'Bouncin\' With Bud',
      composer: 'Bud Powell',
      chords: ["Bbmaj7", "Bbmaj7", "B7#11", "B7#11", "Bb6", "Cm7", "Dm7", "Ebm7", "Dm7", "G7", "Cm7", "D7", "Gm7", "C#dim7", "Cm7", "F7", "Bb6", "F7", "Gm", "Gm", "Am7b5", "D7#9", "G7#11", "F#7", "Cm7", "F7alt", "Bb6", "Cm7", "Dm7", "Ebm7", "Dm7", "G7", "Cm7", "D7", "Gm7", "C#dim7", "Cm7", "F7", "Bb6", "D7", "Gm", "D7", "Gm", "Bdim7", "Cm7", "G7b9", "Cm7", "F7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'Bourbon Street Parade',
      composer: 'Paul Barbarin',
      chords: ["Ab", "Ab", "Ab", "Ab", "Ab", "Ab", "Eb7", "Eb7", "Eb7", "Eb7", "Eb7", "Eb7", "Eb7", "Eb7", "Ab", "Ab", "Ab", "Ab", "Ab", "Ab", "Ab", "Ab", "Db", "Db", "Db", "Ddim7", "Ab", "F7", "Bb7", "Eb7", "Ab", "Ab"],
  },
  {
      title: 'Boy Next Door, The',
      composer: 'Martin-Blane',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "Gm7", "C7", "C7", "Cm7", "F7", "Bbmaj7", "Gm7", "Em7b5", "A7b9", "Dm7", "Db7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "Gm7", "C7", "C7", "Bbmaj7", "Bbmaj7", "C7", "C7", "Gb7", "F7", "Bbmaj7", "Bbmaj7"],
  },
  {
      title: 'Brazil (Aquarela Do Brasil)',
      composer: 'Ary Barroso',
      chords: ["D6", "D6", "D6", "D6", "Dm6", "Dm6", "Dm6", "Dm6", "D6", "D6", "D6", "D6", "B7b13", "B7b13", "Em7", "A7", "Em7", "A7", "Em7", "A7", "Em7", "A7", "Dmaj7", "Dmaj7", "Em7", "A7", "Dmaj7", "Dmaj7", "Em7", "A7", "Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Em7", "Em7", "Em7", "Em7", "Em7", "Em7", "A7", "A7", "Dmaj7", "Dmaj7", "Em7", "A7", "Dmaj7", "D7", "Db7", "C7", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "B7b9", "Em", "Emb6", "Em6", "Emb6", "Em7", "Em7", "C7", "C7", "F#m7", "F#m7", "Bm7", "Bm7", "E7", "E7", "Em7", "A7", "Dmaj7", "Dmaj7", "Em7", "A7", "Dmaj7", "Dmaj7", "Em7", "A7", "Dmaj7", "Dmaj7", "Em7", "A7"],
  },
  {
      title: 'Brazilian Like',
      composer: 'Michel Petrucciani',
      chords: ["Bbm7", "Db7", "Gdim7", "Gbdim7", "Bbm7", "Bbm7", "C7b9", "F7b9", "Bbm7", "G7", "C7", "C7", "Cm7", "F7", "Gbmaj7", "Db", "Ebm7", "Dbmaj7", "C7b9", "F7b9", "Bbm7", "Bb7b9", "Ebm7", "Ab7", "D7", "Dbmaj7", "G7#11", "Gb7", "C7#9", "F7b9", "Bbm7", "Bbm7", "Bbm7", "Bbm7"],
  },
  {
      title: 'Brazilian Suite',
      composer: 'Michel Petrucciani',
      chords: ["Abm7", "Ebm7", "Abm7", "Ebm7", "Abm7", "Abm7", "Emaj7#11", "Ebm7", "Dbm7", "Eb7b9", "D7b5", "Db7", "Cmaj7#5", "B7", "Bb7b9", "Eb7#9", "Abm7", "Eb7b9", "Abm7", "B7", "Fm7b5", "Bb7", "Em7", "A7", "Dmaj7", "Ebm7", "Ab7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Dbmaj7", "Bbm7", "Ebmaj7#11", "Eb7", "Abm7", "Abm7", "Ebmaj7#11", "Ebm7", "Dbm7", "Eb7b9", "Abm7", "Ebm7", "Abm7", "Ebm7", "Dbmaj7", "Dbmaj7"],
  },
  {
      title: 'Breeze And I, The',
      composer: 'Ernesto Lecuona',
      chords: ["Eb6", "Eb6", "Eb6", "Eb6", "Dbm7", "Dbm7", "Eb6", "Eb6", "Bb7", "Fm7", "Fm7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "C7b9", "Fm7", "Fm7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Eb6", "Eb6", "Bb7", "Eb6", "Eb6", "Bb7"],
  },
  {
      title: 'Bright Boy',
      composer: 'John Bright',
      chords: ["Ebmaj7", "Em7", "A7b5", "Abmaj7", "Abm7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "E7b5", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Em7", "A7b5", "Abmaj7", "Abm7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Abm7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7#11"],
  },
  {
      title: 'Bright Mississippi',
      composer: 'Thelonious Monk',
      chords: ["F7", "F7", "F7", "F7", "Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Eb7", "Eb7", "Abmaj7", "Abmaj7", "Gm7b5", "C7"],
  },
  {
      title: 'Bright Size Life',
      composer: 'Pat Metheny',
      chords: ["Gmaj7", "Gmaj7", "Bbmaj7#11", "Bbmaj7#11", "D", "D", "Bbmaj7", "Bbmaj7", "Gmaj7", "Gmaj7", "Bbmaj7#11", "Bbmaj7#11", "D", "D", "G", "D", "G", "G", "F", "F", "A7", "A7", "D", "D", "Gmaj7", "Gmaj7", "Bbmaj7#11", "Bbmaj7#11", "D", "D", "A7", "Dmaj7"],
  },
  {
      title: 'Brilliant Corners',
      composer: 'Thelonious Monk',
      chords: ["Bbmaj7", "Db7", "Db7", "Bbmaj7", "Db7", "Db7", "Gb7", "F7#11", "", "Bb", "D7", "Db7", "", "Gb7", "F7#11", "Bb", "Ab7", "Gb7", "F7#11", "Bb", "D7", "Db7", "", "Gb7", "F7#11", "Bb", "Bb", "Am7", "D7", "Dm7", "G7", "Gb7", "", "B7", "E7", "Em7", "A7", "Ab7", "G7", "Gb7", "F7", "Bb", "D7", "Db7", "", "Gb7", "F7#11", "Bb", "Ab7", "Gb7", "F7#11", "Bb", "D7", "Db7", "", "Gb7", "F7#11", "Bb"],
  },
  {
      title: 'Broadway',
      composer: 'William-Henri-Woode',
      chords: ["Bbmaj7", "Bbmaj7", "Eb7", "Eb7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Eb7", "Eb7", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'Brother Can You Spare A Dime',
      composer: 'Yarburg-Gorney',
      chords: ["Cm", "Fm", "Cm", "Fm7", "Bb7", "Eb", "D7", "D7", "G7b9", "Cm", "Cm", "G7", "C7", "F7", "Bb7", "Ebmaj7", "A7#11", "Ab6", "G7", "Cm", "Bbm7", "Eb7", "", "Ab7", "G7", "Cm", "Dm7b5", "G7", "", "C7", "Gm7b5", "C7b9", "Gm7b5", "C7", "F7", "Cm7", "F7", "Cm7", "F7", "Ab7", "G7b9", "Cm", "Cm", "G7", "C7", "F7", "Bb7", "Ebmaj7", "A7#11", "Ab6", "G7", "Cm", "Bbm7", "Eb7", "", "Ab7", "G7", "Cm"],
  },
  {
      title: 'Brotherhood Of Man',
      composer: 'Frank Loesser',
      chords: ["Eb7", "Eb7", "Eb7", "Eb7", "Eb7", "Gm7", "C7", "F7", "Bb7", "Eb7", "Eb7", "Ab7", "Adim7", "Eb", "C7", "Fm7", "Bb7", "Eb7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Bud Powell',
      composer: 'Chick Corea',
      chords: ["Fmaj7", "Bm7b5", "Bb7", "Am7", "D7b9", "Gm7", "Bbm7", "Eb7", "Dm7", "G7", "G#dim7", "Am7", "D7", "Gm7", "", "Db7", "C7", "B7", "", "Bb7", "A7", "Ab7", "Db", "C7#5", "", "F7b9", "F7b9", "Bbm", "Bbmb6", "Bbm6", "Bbmb6", "Gm7b5", "C7b9", "Em7", "A7b9", "C#m7", "F#7b9", "Bmaj7", "Cmaj7", "Bmaj7", "Cmaj7", "Bmaj7", "Cmaj7", "Bbm7", "Eb7", "Am7", "D7", "Abm7", "Dbm7", "Gm7", "C7", "Fmaj7", "Bm7b5", "Bb7", "Am7", "D7b9", "Gm7", "Bbm7", "Eb7", "Dm7", "G7", "G#dim7", "Am7", "D7", "Gm7", "", "Db7", "C7", "B7", "", "Bb7", "A7", "Ab7", "Db", "C7#5", "", "F7#11"],
  },
  {
      title: 'Budo',
      composer: 'Davis-Powell',
      chords: ["Abmaj7", "", "Cm7", "", "F7", "", "Bbm7", "Eb7", "Abmaj7", "Ab7#5", "Db7", "Ddim7", "Cm7b5", "F7", "Bbm7", "Eb7", "Abmaj7", "Cm7", "F#m7", "B7", "Bbmaj7", "Cm7", "Dm7", "G7", "Dbm7", "Gb7", "Cm7", "F7", "Bm7", "E7", "Bbm7", "Eb7", "Abmaj7", "", "Cm7", "", "F7", "", "Bbm7", "Eb7", "Abmaj7", "Ab7#5", "Db7", "Ddim7", "Cm7b5", "F7", "Bbm7", "Eb7", "Abmaj7"],
  },
  {
      title: 'Bunko',
      composer: 'Lennie Niehaus',
      chords: ["Fmaj7", "F#dim7", "Gm7", "C7b9", "Am7", "D7#9", "Gm7", "C7", "F6", "F7", "Bbmaj7", "Bdim7", "F6", "", "G7", "C7", "F6", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7b9", "Am7", "D7#9", "Gm7", "C7", "F6", "F7", "Bbmaj7", "Bdim7", "F6", "", "G7", "C7", "F6"],
  },
  {
      title: 'But Beautiful',
      composer: 'Jimmy Van-Heusen',
      chords: ["Gmaj7", "", "Bm7b5", "E7b9", "Am7", "C#m7b5", "F#7b9", "Gmaj7", "", "Bm7b5", "E7b9", "A7", "A7", "D7", "D7", "Bm7", "Em7", "Am7", "D7", "Gmaj7", "", "Em7", "A7", "Am7", "D7", "Gmaj7", "", "Bm7b5", "E7b9", "Am7", "C#m7b5", "F#7b9", "Gmaj7", "", "Bm7b5", "E7b9", "A7", "A7", "D7", "D7", "Bm7", "Em7", "Am7", "", "F#m7b5", "B7", "Em7", "F7", "Bm7", "E7", "Am7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'But Not For Me',
      composer: 'George Gershwin',
      chords: ["F7", "", "Bb7", "", "Ebmaj7", "Ab7", "Gm7", "C7", "F7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Cm7", "Fm7", "Fm7", "Fm7", "Bb7", "F7", "", "Bb7", "", "Ebmaj7", "Ab7", "Gm7", "C7", "F7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Ab7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Eb6"],
  },
  {
      title: 'Butch And Butch',
      composer: 'Oliver Nelson',
      chords: ["C#m7b5", "Cm7", "Bm7", "E7", "Am7", "Am7", "C#m7b5", "F#7b9", "Bm7", "Db6", "D7sus", "D7sus", "Gmaj7", "G#dim7", "Am7", "Bbdim7", "Bm7", "G6", "Dm7", "G7", "Cmaj7", "C#m7", "F#7", "Cm7", "F7", "Bm7", "E7", "D7sus", "D7sus", "G6", "Bb7", "A7", "Ab7"],
  },
  {
      title: 'Butterfly',
      composer: 'Herbie Hancock',
      chords: ["Fm7", "Fm7", "Am7", "Fm7", "Fm7", "Am7", "Fm11", "Fm11", "Am11", "Fm11", "Fm11", "Dm11", "", "Bb7", "", "", "", "Abmaj7", "Abmaj7#5", "Abmaj7", "Bb13", "Eb13sus", "Eb13sus", "Eb7#5#9", "Eb7#5#9", "Ab13sus", "Ab13sus", "Ab13sus", "C7", "", "", "Fm7", "Fm7", "Am7", "Fm7", "Fm7", "Am7", "Fm11", "Fm11", "Fm11", "Fm11", "Bb13", "Bb13", "Bb13", "Bb13", "Amaj7#11"],
  },
  {
      title: 'Butterfly Dreams',
      composer: 'Stanley Clarke',
      chords: ["Bmaj7", "Abm7", "Gbm9", "B9", "Am7", "D7", "Abmaj7", "B7b5b9", "Cmaj7", "Abmaj7", "Fmaj7", "Em9", "Em9", "Em9", "Em9", "Ebm7", "Ebm7", "Dmaj7", "Dmaj7", "Bmaj7", "Bmaj7", "Bmaj7", "Bmaj7", "Fm7", "Fm7", "Fm7", "Fm7", "Dbm7", "Dbm7", "Dbm7", "Dbm7"],
  },
  {
      title: 'By Myself',
      composer: 'Arthur Schwartz',
      chords: ["Em7b5", "Em7b5", "A7b9", "A7b9", "Em7b5", "Em7b5", "A7b9", "A7b9", "Cm7", "F7", "Bbmaj7", "Eb7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bm7b5", "Bm7b5", "E7b9", "E7b9", "Am7b5", "Am7b5", "D7b9", "D7b9", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Bye Bye Baby',
      composer: 'Jule Styne',
      chords: ["Bbmaj7", "F7#5", "Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "Gm7", "C7", "F7", "Bbmaj7", "D7", "G7", "Bb7", "Ebmaj7", "G7", "Cm7", "F7", "Edim7", "F7", "F7#5", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "F7#5", "Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "Gm7", "Am7", "D7", "Gm7", "Gbdim7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Bye Bye Blackbird',
      composer: 'Ray Henderson',
      chords: ["Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Gm7", "D7", "Gm7", "C7", "Gm7", "C7", "F6", "F6", "F7", "E7", "Eb7", "D7b9", "Gm7", "Gm7", "Db7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Am7b5", "D7b9", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Bye Bye Blues',
      composer: 'Hamm-Bennett-Lown-Gray',
      chords: ["C", "C", "Ab7", "Ab7", "C", "C", "A7", "A7", "D7", "D7", "G7", "G7", "C", "Cdim7", "Dm7", "G7", "C", "C", "Ab7", "Ab7", "C", "C", "A7", "A7", "D7", "D7", "G7", "G7", "C", "Ab7", "C", "C"],
  },
  {
      title: 'Bye-Ya',
      composer: 'Thelonious Monk',
      chords: ["Db7", "Ab6", "Db7", "Ab6", "Gb7#11", "Ab6", "E7", "B7#11", "Db6", "D6", "Eb6", "", "A6", "A6", "Ab6", "Ab6", "Bm7", "E7", "Bbm7", "Eb7", "Am7", "D7", "Db7", "Ab6", "Db7", "Ab6", "Gb7#11", "Ab6", "E7", "B7#11", "Db6", "D6", "Eb6", ""],
  },
  {
      title: 'C-Jam Blues',
      composer: 'Duke Ellington',
      chords: ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "C7", "G7", "G7", "C7", "C7"],
  },
  {
      title: 'C.T.A.',
      composer: 'Jimmy Heath',
      chords: ["Bb7", "Ab7", "Gb7", "F7", "Bb7", "Ab7", "Gb7", "F7", "Bb6", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "D7#9", "D7#9", "G7", "G7", "C7#9", "C7#9", "F7", "F7", "Bb7", "Ab7", "Gb7", "F7", "Bb7", "Ab7", "Gb7", "F7", "Bb6", "G7", "Cm7", "F7", "Bb6", "F7", "Bb6"],
  },
  {
      title: 'C\'est Si Bon',
      composer: 'Henri Betti',
      chords: ["Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Eb7", "D7", "G7b9", "Gbmaj7", "Ebm7", "Abm7", "Db7", "Gbmaj7", "Gbmaj7", "Gm7", "C7", "Cm7", "F7", "", "Dm7", "Dbm7", "Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Dm7b5", "G7b9", "Cm7", "Ebm6", "Dm7", "G7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Cabaret',
      composer: 'Kander-Ebb',
      chords: ["Ebmaj7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Adim7", "Gm7", "C7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Abm6", "Abm6", "Ebmaj7", "Ebmaj7", "Cm", "Cm", "Cm7", "F7", "Bb7", "Bb7", "Fm7", "Bb7sus", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Cabin in the Sky',
      composer: 'Vernon Duke',
      chords: ["Gmaj7", "G#dim7", "Am7", "Bbdim7", "Bm7b5", "Bb9#11", "Am", "Am", "Am7", "Adim7", "Bm7", "Bb7", "Am7", "Ab7", "F#m7", "F13", "Em6", "C#m7b5", "F#m7", "B9", "Emaj7", "Em", "Em", "Em7", "A7", "D7", "Cmaj7", "Bm7", "Am7", "Gmaj7", "G#dim7", "Am7", "Bbdim7", "Bm7b5", "Bb9#11", "Am", "Am", "Am7", "Ab7", "G6", "G6"],
  },
  {
      title: 'Call Me',
      composer: 'Tony Hatch',
      chords: ["Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Ebmaj7", "Cm7", "Ebmaj7", "Cm7", "Gmaj7", "Gmaj7", "Am7", "D7", "Am7", "D7", "Gmaj7", "C7", "Bm7", "E7#9", "Am7", "D7", "Am7", "D7", "Bm7", "E7#9", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Ebmaj7", "Cm7", "Ebmaj7", "Cm7", "Gmaj7", "Gmaj7"],
  },
  {
      title: 'Call Me Irresponsible',
      composer: 'Jimmy Van-Heusen',
      chords: ["F", "F6", "F#dim7", "Gm7", "Gm6", "G#dim7", "Fmaj7", "A7b13", "D7b13", "D7b13", "Gm7", "C7", "Am7b5", "D7b13", "Dm7", "G7", "Gm7", "C7"],
  },
  {
      title: 'Can\'t Help Lovin\' Dat Man',
      composer: 'Jerome Kern',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "", "Bbm7", "Eb7", "Ab6", "Db7", "Gm7", "Cm7", "B7", "Bb7", "Eb6", "Edim7", "Fm7", "Bb7", "Ab6", "Adim7", "Ebmaj7", "F7", "Ebmaj7", "G7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "", "Bbm7", "Eb7", "Ab6", "Db7", "Gm7", "Cm7", "B7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Can\'t We Be Friends',
      composer: 'Swift-James',
      chords: ["F7", "Bb7", "Ebmaj7", "B7", "Cm7", "Gm", "Gbm", "", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Ab7", "Adim7", "Eb6", "Eb6", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "F7", "Bb7", "Ebmaj7", "B7", "Cm7", "", "Gm", "Gbm", "Fm7", "Bb7", "Ebmaj7", "Edim7"],
  },
  {
      title: 'Candy',
      composer: 'David-Whitney-Kramer',
      chords: ["Ebmaj7", "Ebm6", "Dm7", "Dbdim7", "Cm7", "F7", "Bb6", "Fm7", "Bb7", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "Cm7", "F7", "Bb7", "Ebmaj7", "Ebm6", "Dm7", "Dbdim7", "Cm7", "F7", "Bb6", "Eb7", "Bb6"],
  },
  {
      title: 'Cantaloupe Island',
      composer: 'Herbie Hancock',
      chords: ["Fm11", "Fm11", "Fm11", "Fm11", "Db7#11", "Db7#11", "Db7#11", "Db7#11", "Dm11", "Dm11", "Dm11", "Dm11", "Fm11", "Fm11", "Fm11", "Fm11"],
  },
  {
      title: 'Captain Marvel',
      composer: 'Chick Corea',
      chords: ["Em7", "Em7", "Bm7", "Bm7", "F#m7", "F#m7", "Bbm7", "Bbm7", "Gm7b5", "C7b9", "Dbmaj7", "Gbmaj7#11", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Ebmaj7#11", "Ebmaj7#11", "Bbmaj7", "Db7", "Cm7", "F7", "F#dim", "Gm7", "Gm7", "Abmaj7", "Abmaj7", "Dm7", "Ebmaj7", "Em7b5", "Ebmaj7", "Dm7", "Db7#11", "Cm7", "Cm7", "Gm", "F", "Eb", "F", "Gm7", "F", "Eb", "F", "Gm7", "Gm7", "Fm", "Fm", "Dm7", "Dm7", "Fmaj7", "Fmaj7", "Ebmaj7", "Ebmaj7", "Em", "Em", "Em", "Cm7", "Cm7", "Cm7", "", "", "F", "Gm", ""],
  },
  {
      title: 'Caravan',
      composer: 'Duke Ellington',
      chords: ["C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "C7b9", "Fm", "Fm", "Fm", "Fm", "F7", "F7", "F7", "F7", "Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Eb7", "Eb7", "Ab6", "Ab6", "G7", "Db7"],
  },
  {
      title: 'Catch Me',
      composer: 'Joe Pass',
      chords: ["Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "A7#9", "Dm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "A7#9", "Dm7"],
  },
  {
      title: 'Celia',
      composer: 'Bud Powell',
      chords: ["Bbmaj7", "B7", "Bbmaj7", "B7", "Bbmaj7", "Cm7b5", "Dm7", "Ebm7", "Ab7", "Dm7", "Dbm7", "Cm7", "B7", "Bbmaj7", "Cm7b5", "F7", "Am7b5", "D7b9", "Gm7", "Gm7", "C7", "C7", "Cm7b5", "F7b5", "Bbmaj7", "Cm7b5", "Dm7", "Ebm7", "Ab7", "Dm7", "Dbm7", "Cm7", "B7", "Bbmaj7", "Bbmaj7", "Eb6", "Ebm7", "Ab7", "Dm7", "G7", "Cm7", "B7", "Bbmaj7", "Cm7", "F7"],
  },
  {
      title: 'Central Park West',
      composer: 'John Coltrane',
      chords: ["Bmaj7", "", "Em7", "A7", "Dmaj7", "", "Bbm7", "Eb7", "Abmaj7", "", "Gm7", "C7", "Fmaj7", "", "C#m7", "F#7", "Bmaj7", "", "Em7", "A7", "Dmaj7", "", "C#m7", "F#7", "Bmaj7", "C#m7", "Bmaj7", "C#m7", "", "C#m7", "F#7"],
  },
  {
      title: 'Ceora',
      composer: 'Lee Morgan',
      chords: ["Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dm7", "G7", "Cm7", "F7#9", "Bbm7", "Eb7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dm7", "G7", "Cm7", "F7#9", "Bbm7", "Eb7", "Cm7b5", "F7#9", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7"],
  },
  {
      title: 'Chameleon',
      composer: 'Herbie Hancock',
      chords: ["Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7"],
  },
  {
      title: 'Change Partners',
      composer: 'Irving Berlin',
      chords: ["Fmaj7", "Fmaj7", "Abdim7", "Abdim7", "Gm7", "C7", "Bbm7", "Eb7", "Fmaj7", "Abdim7", "Gm7", "C7", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Abmaj7", "Abmaj7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Abdim7", "Abdim7", "Gm7", "C7", "Bbm7", "Eb7", "Fmaj7", "E7", "Eb7#11", "D7b9", "Gm7", "C7sus", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Charleston',
      composer: 'James Johnson',
      chords: ["Bb", "D7", "G7", "G7", "C7", "F7", "Bb", "Dbdim7", "Cm7", "F7", "Bb", "D7", "G7", "Edim7", "Dm7", "A7", "D", "F7", "Bb", "D7", "G7", "G7", "C7", "F7", "Bb", "Dbdim7", "Cm7", "F7", "Bb7", "Bb7", "Eb7", "Ebm7", "Bb", "Gm7", "Cm7", "F7", "Bb", "Cm7", "F7"],
  },
  {
      title: 'Chase, The',
      composer: 'Dexter Gordon',
      chords: ["Bb6", "Bb6", "Eb7", "Eb7", "Bb6", "Ebm7", "Ab7", "Cm7", "F7", "Bb6", "Fm7", "Bb7", "Fm7", "Bb7", "Gm7", "Cm7", "Gm7", "Cm7", "Abm7", "Db7", "Abm7", "Db7", "Gm7", "Cm7", "F#m7", "B7", "Bb6", "Bb6", "Eb7", "Eb7", "Bb6", "Ebm7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Chasin\' The Trane',
      composer: 'John Coltrane',
      chords: ["F7", "Bb7", "F7", "F7", "Bb7", "Bb7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "F7"],
  },
  {
      title: 'Cheek To Cheek',
      composer: 'Irving Berlin',
      chords: ["Cmaj7", "C#dim7", "Dm7", "G7", "Cmaj7", "C#dim7", "Dm7", "G7", "Cmaj7", "Dm7", "Ebdim7", "Em7", "Bb7#11", "A7", "D7", "G7", "Dm7", "Em7", "F7", "Bb7#11", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "C6", "A7", "Dm7", "G7", "C6", "A7", "Dm7", "G7", "C6", "A7", "Dm7", "G7", "C6", "Cm7", "Cm7", "Ebm7", "Ab7", "Dm7b5", "G7", "G#dim7", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Cheers',
      composer: 'Howard McGhee',
      chords: ["Bb6", "Eb7", "Bb6", "Gb7", "Dm7", "G7", "Cm7", "F7", "Bb6", "C7b9", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "C7", "C7", "F7", "F7#5", "Bb6", "Eb7", "Bb6", "Gb7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Cheese Cake',
      composer: 'Dexter Gordon',
      chords: ["Cm69", "Dm7b5", "G7b13", "Cm69", "Cm69", "", "Fm69", "Gm7b5", "C7b13", "Fm69", "Fm69", "Dm7b5", "G7b13", "Fm7", "Bb7", "Ebm7", "Ab7", "Dm7b5", "G7b13", "Cm69", "Dm7b5", "G7b9", "Gm7", "C7", "Fm7", "Bb7", "Ebm7", "Ab7", "Dm7b5", "G7b9"],
  },
  {
      title: 'Cheetah',
      composer: 'Kenny Burrell',
      chords: ["Bbmaj7", "Cm7", "C#dim7", "Dm7", "G7#9", "C7", "F7", "Bb7", "Eb", "Edim7", "Bb", "G7", "C7", "F7", "Am7", "D7", "G7", "G7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Cm7", "C#dim7", "Dm7", "G7#9", "C7", "F7", "Bb7", "Eb", "Edim7", "Bb", "G7", "C7", "F7", "C7", "F7", "Bb6", ""],
  },
  {
      title: 'Chega De Saudade (No More Blues)',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Gm9", "C7", "Fmaj9", "Bbmaj7", "Bdim7", "Em", "A7", "Dm7", "A7", "Dm", "Dm7", "E7b9", "E7b9", "Em7b5", "A7b9", "Dm", "Em7b5", "A7", "Dm", "Bm7b5", "E7", "Am", "Am", "Bbmaj7", "Bbmaj7", "Em7b5", "A7b9", "Dm", "Dm7", "E7b9", "E7b9", "Em7b5", "A7b9", "Dm", "D7b9", "Gm", "A7b9", "Dm", "Dm7", "E7b9", "A7b9", "Dm", "Em7", "A7", "Dmaj7", "B7", "Em7", "Em7", "A7sus", "A7", "Ddim7", "Dmaj7", "F#m7", "Fdim7", "Em7", "Em7", "E7", "E7", "Em7b5", "A7", "Dmaj7", "Bm7", "E7", "E7", "F#7", "F#7", "Bm7", "Bbm7", "Am7", "D7", "Gmaj7", "Gm7", "F#m7", "B7", "E7", "A7", "F#m7", "B7", "E7", "A7", "D6", "A7"],
  },
  {
      title: 'Chelsea Bridge',
      composer: 'Billy Strayhorn',
      chords: ["Bbm", "Abm", "Bbm", "Abm", "Bb7", "Ebm7", "Ab7", "Db6", "Db6", "C7", "B7", "", "F#m7", "B7", "Emaj7", "C#m7", "F#m7", "B7alt", "Bm7", "E7", "Amaj7", "", "Am", "D7", "Gmaj7", "Gm7", "C7", "Db7", "C7", "B7", "", "Bbm", "Abm", "Bbm", "Abm", "Bb7", "Ebm7", "Ab7", "Db6", "Db6", "C7", "B7", ""],
  },
  {
      title: 'Cherokee',
      composer: 'Ray Noble',
      chords: ["Bb6", "Bb6", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ab7", "Ab7", "Bb6", "Bb6", "C7", "C7", "Cm7", "G7b9", "Cm7", "F7#5", "C#m7", "F#7", "Bmaj7", "Bmaj7", "Bm7", "E7", "Amaj7", "Amaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Cm7", "F7#5"],
  },
  {
      title: 'Cheryl',
      composer: 'Charlie Parker',
      chords: ["C7", "Dm7", "G7", "C7", "Gm7", "C7", "F7", "F7", "C7", "Em7b5", "A7", "Dm7b5", "G7", "C7", "", "F6", "F#dim", "C7", "", "G7", "C7"],
  },
  {
      title: 'Chicago',
      composer: 'Fred Fisher',
      chords: ["Cmaj7", "Dm7", "Em7", "A7", "Dm7", "G7", "Dm7", "A7#5", "Dm7", "G7", "Cmaj7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Dm7", "Em7", "A7", "D7", "D7", "A7b9", "Dm7", "G7", "Dm7", "G7", "Bb7", "A7", "Ab7", "G7", "Cmaj7", "Dm7", "Em7", "A7", "Dm7", "G7", "Dm7", "A7#5", "Bm7b5", "E7b9", "Am7", "Ab7", "Gm7", "Gb7", "Fmaj7", "Bb9", "Em7", "A7", "Dm7", "G7", "C6", "A7", "Dm7", "G7"],
  },
  {
      title: 'Chicken, The',
      composer: 'Pee-Wee Ellis',
      chords: ["Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "D7", "G7", "C7", "C7", "C7", "Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Eb7"],
  },
  {
      title: 'Children Of The Night',
      composer: 'Wayne Shorter',
      chords: ["Cm11", "Cm11", "Abmaj7", "Abmaj7", "Cm11", "Cm11", "Abmaj7", "Abmaj7", "Emaj7", "Ebm7", "Ab7", "Dbmaj7", "Cm7", "F7", "Bbmaj7", "Abmaj7", "Gm7", "Gb7", "Fm7", "Bb7", "Ebmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Ebm7b5", "Ebm7b5", "Ebm7b5", "Cm7b5", "F7", "Bbm7", "Dbm7", "Gb7", "Emaj7", "Eb7"],
  },
  {
      title: 'Chucho',
      composer: 'Paquito D\'Rivera',
      chords: ["Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "D7#9", "Gm", "Gm7", "Em7b5", "A7b9", "Dm", "Dbm", "Cm7", "F7", "Bb7", "Em7b5", "A7b9", "Dm", "A7#9"],
  },
  {
      title: 'Close Enough For Love',
      composer: 'Mandel-Williams',
      chords: ["Fm7", "D7#5#9", "G7b5#9", "C7b9", "Fm7", "Bb7", "Eb7", "Ab7", "Dbmaj7", "Bbm7", "G7", "C7", "F7", "Bb7", "Eb7", "Ab7", "Dbmaj7", "G7", "Gm7b5", "C7b13", "Fm6", "D7#5#9", "G7b9", "C7b9", "Bbm7", "E7#11", "Eb9sus", "Eb7b9", "Abmaj7", "Fm7", "Dm7b5", "G7b9#5", "Em7", "A7", "Dm7", "G7", "C7", "G7b9", "Gm7b5", "C7b13", "Fm7", "D7#5#9", "G7b5#9", "C7b9", "Fm7", "Bb7", "Eb7", "Ab7", "Dbmaj7", "Bbm7", "G7", "C7", "F7", "Bb7", "Eb7", "Ab7", "Dbmaj7", "G7", "Gm7b5", "C7b13", "Fm6", "Fm6"],
  },
  {
      title: 'Close Your Eyes',
      composer: 'Bernice Petkere',
      chords: ["Fm7b5", "Bb7b9", "Fm7b5", "Bb7b9", "Ebm6", "Cm7b5", "Fm7b5", "Bb7b9", "Ebm6", "Ebm6", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab7", "Ab7", "B7", "Bb7b9", "Fm7b5", "Bb7b9", "Fm7b5", "Bb7b9", "Ebm6", "Cm7b5", "Fm7b5", "Bb7b9", "Ebm6", "Ebm6"],
  },
  {
      title: 'Cold Duck Time',
      composer: 'Eddie Harris',
      chords: ["F7", "Bb7", "F7", "Bb7", "F7", "Bb7", "F7", "Bb7", "Dbmaj7", "Ebadd9", "F7", "", ""],
  },
  {
      title: 'Come Back To Me',
      composer: 'Alan Lerner, Burton Lane',
      chords: ["Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "Am7", "D7", "Am7", "Bm7b5", "E7", "Am7", "Bm7b5", "E7", "Am7", "D7", "Gm7", "C7", "Gm7", "C7", "Am7b5", "D7", "Gm7", "C7", "Fmaj7", "Am7", "D7"],
  },
  {
      title: 'Come Fly With Me',
      composer: 'Jimmy Van-Heusen',
      chords: ["Cmaj7", "C6", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "C6", "Gm7", "C7", "Fmaj7", "Bb7", "Cmaj7", "C6", "F7", "E7", "A7b9", "D7", "G7", "Ab", "Abaug", "Dbmaj7", "Db6", "Bbm7", "Eb7", "Ab6", "Bbm7", "Eb7sus", "Ab", "Abaug", "Ab6", "Gmaj7", "Gmaj7", "Em7", "Am7", "D7", "G7", "G7sus", "G7", "G7b9", "F7", "Em7b5", "Bb7", "A7b9", "D7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Come Rain Or Come Shine',
      composer: 'Harold Arlen',
      chords: ["Fmaj7", "Em7b5", "A7b9", "Dm7", "Dm7", "G7", "C7", "Fmaj7", "Cm7", "F7", "Bbm7", "Fm7", "Bbm7", "Gm7", "C7", "Bm7b5", "E7b9", "Am7b5", "D7b9", "Am7b5", "D7b9", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "Dm7", "Bm7", "E7", "A7", "A7", "D7", "D7", "G7", "Bb7", "A7b9", "Dm", "Bm7b5", "Em7b5", "A7b9", "Dm6", "Gm7", "C7"],
  },
  {
      title: 'Come Sunday',
      composer: 'Duke Ellington',
      chords: ["F7", "Eb7#11", "F7", "Gb7", "G7", "Cm7", "F7", "Bb", "Eb6", "Bbdim7", "Bb6", "D7", "Eb7", "D7", "Gm7", "C7", "F7", "Cm7", "F7", "", "Ab7", "G7", "C9", "F7#5", "F7", "Eb7#11", "F7", "Gb7", "G7", "Cm7", "F7", "Bb", "Eb6", "Bbdim7", "Bb6"],
  },
  {
      title: 'Comes Love',
      composer: 'Brown-Stept-Tobias',
      chords: ["Gm6", "Gm6", "D7b13", "D7b13", "Am7b5", "D7b9", "Gm6", "Am7b5", "D7b9", "G7b13", "G7b13", "Cm7", "G7b9", "Cm7", "F7", "F7", "Bb6", "D7b13", "Gm6", "Gm6", "D7b13", "D7b13", "Am7b5", "D7b9", "Gm6", "Am7b5", "D7b9"],
  },
  {
      title: 'Comrade Conrad',
      composer: 'Bill Evans',
      chords: ["Bbm7", "Eb7sus", "Eb9#5", "Abmaj7", "Dbmaj7", "Gm7b5", "C7#5#9", "Fm7", "Fm7", "Dbmaj7", "C7b9#5", "Fm7", "Fm7", "Dm7b5", "G7#5#9", "Cm7", "Cm7", "Fm7", "Bb7#5", "Ebmaj7", "Abmaj7", "Dm7b5", "G7#5#9", "Cm7", "Cm7", "Abmaj7", "G7b9#5", "Cm7", "Cm7", "Am7b5", "D7#5#9", "Gm7", "Gm7"],
  },
  {
      title: 'Con Alma',
      composer: 'Dizzy Gillespie',
      chords: ["Emaj7", "G#7", "C#m7", "B7", "Bb7", "Ebmaj7", "", "Ebm7", "Ab7", "Dbmaj7", "F7", "Bbm7", "Ab7", "G7", "Cmaj7", "Cm7b5", "F7b9", "F#m7", "B7", "Emaj7", "Emaj7", "Fm7", "Bb7", "Emaj7", "G#7", "C#m7", "B7", "Bb7", "Ebmaj7", "", "Ebm7", "Ab7", "Dbmaj7", "F7", "Bbm7", "Ab7", "G7", "Cmaj7"],
  },
  {
      title: 'Conception',
      composer: 'George Shearing',
      chords: ["Ebm7b5", "Ab7b9", "Dbmaj7", "Bm7", "Amaj7", "Abmaj7", "Abm7", "Db7", "Gb7", "F7", "Bb7", "A7", "Ab7", "G7", "F#m7", "B7", "Emaj7", "Amaj7", "Ebm7", "Ab7", "Dbmaj7", "F#m7", "B7alt", "Emaj7", "F#m7", "Abm7", "Db7", "Gm7", "C7", "F#m7", "B7", "Em7", "A7", "Ebm7b5", "Ab7b9", "Dbmaj7", "Bm7", "Amaj7", "Abmaj7", "Abm7", "Db7", "Gb7", "F7", "Bb7", "A7", "Ab7", "G7", "F#m7", "B7", "Emaj7", "Amaj7", "Ebm7", "Ab7", "Dbmaj7"],
  },
  {
      title: 'Conference Of The Birds',
      composer: 'Dave Holland',
      chords: ["Dm", "Dm", "F", "F", "Bb", "Bb", "Eb", "Eb", "Dm", "Dm", "F", "F", "Bb", "Bb", "Eb", "Eb", "Dm", "Dm", "F", "F", "Bb", "Bb", "Eb", "Eb", "Dm", "Dm", "F", "F", "Bb", "Bb", "Eb", "Eb", "Dm", "Dm", "Dm", "G", "G", "G", ""],
  },
  {
      title: 'Confirmation',
      composer: 'Charlie Parker',
      chords: ["Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Cm7", "F7", "Bb7", "Am7", "D7", "G7", "C7b9", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Ebm7", "Ab7", "Dbmaj7", "Gm7", "C7alt", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Cm7", "F7", "Bb7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "C7"],
  },
  {
      title: 'Contemplation',
      composer: 'McCoy Tyner',
      chords: ["Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "G7b9", "G7b9", "G7b9", "G7b9"],
  },
  {
      title: 'Continuum',
      composer: 'Jaco Pastorius',
      chords: ["Emaj7", "Emaj7", "Emaj7", "Emaj7", "Emaj7", "Amaj7", "Amaj7", "Emaj7"],
  },
  {
      title: 'Cool One, The',
      composer: 'Benny Golson',
      chords: ["Bm7", "E7", "Bm7", "E7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Gmaj7", "Bm7b5", "E7b9", "C#m7b5", "Am7b5", "D7#9", "Gmaj7", "C7", "Bm7", "E7", "Bm7", "E7", "Am7", "D7", "Am7", "D7"],
  },
  {
      title: 'Copenhagen',
      composer: 'Davis-Melrose',
      chords: ["Ebmaj7", "Ebm6", "Bb", "G7", "C7", "F7", "Bb", "Bb", "Bb7", "Bb", "Cm", "Dm", "Bb", "Gb", "Bb", "F7", "Bb", "Bb", "F7", "Bb", "Cm", "Dm", "Bb", "Gb", "Bb", "F7", "Bb", "Bb", "Bb7", "Ebmaj7", "Ebm6", "Bb", "G7", "C7", "F7", "Bb", "Bb", "Bb7"],
  },
  {
      title: 'Coral',
      composer: 'Keith Jarrett',
      chords: ["Cm7", "F7", "D", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Bmaj7", "F#maj7", "G#m7", "Bmaj7", "Gbmaj9#11", "Gb7sus", "Fm11", "Dm7b5", "G7b9", ""],
  },
  {
      title: 'Corcovado',
      composer: 'Antonio-Carlos Jobim',
      chords: ["D7", "D7", "Abdim7", "Abdim7", "Gm7", "C7", "Fdim7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Em7", "A7b13", "D7", "D7", "Dm7", "Abdim7", "D7", "D7", "Abdim7", "Abdim7", "Gm7", "C7", "Fdim7", "Fmaj7", "Fmaj7", "Fm7", "Bb7#11", "Em7", "Am7", "Dm7", "G7", "Em7", "A7b13", "Dm7", "G7", "C6"],
  },
  {
      title: 'Core, The',
      composer: 'Freddie Hubbard',
      chords: ["Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Gb7", "Fm7", "Emaj7#11", "Emaj7#11"],
  },
  {
      title: 'Cottage For Sale',
      composer: 'Willard Robison',
      chords: ["Eb6", "G7", "C7b9", "Fm7", "Abm6", "Gm7", "C7", "Fm7", "Abm6", "F7", "Bb7", "Eb6", "Bb7", "G7b13", "G7b13", "C7", "C7", "F7", "F7", "Fm7", "Bb7", "Eb6", "G7", "C7b9", "Fm7", "Abm6", "Gm7", "C7", "Fm7", "Abm6", "F7", "Bb7", "Eb6"],
  },
  {
      title: 'Cotton Tail',
      composer: 'Duke Ellington',
      chords: ["Bb6", "Gm7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Bb7", "Eb6", "Edim7", "Bb6", "Gm7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Bb7", "Eb6", "Edim7", "Bb6", "Gm7", "F7", "Bb6"],
  },
  {
      title: 'Could It Be You',
      composer: 'Cole Porter',
      chords: ["Bbmaj7", "Cm7", "F7", "Bbmaj7", "Gm7", "Gbm7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "C7", "Fmaj7", "A7b9", "Dm7", "G7", "Am7b5", "D7b9", "Gm7", "C7", "F7", "Cm7", "F7"],
  },
  {
      title: 'Countdown',
      composer: 'John Coltrane',
      chords: ["Em7", "F7", "Bbmaj7", "Db7", "Gbmaj7", "A7", "Dmaj7", "Dm7", "Eb7", "Abmaj7", "B7", "Emaj7", "G7", "Cmaj7", "Cm7", "Db7", "Gbmaj7", "A7", "Dmaj7", "F7", "Bbmaj7", "Em7", "F7", "Bbmaj7", "A7", "Em7", "F7", "Bbmaj7", "Db7", "Gbmaj7", "F7", "Bbmaj7", "A7", "Dmaj7", "Bbmaj7", "Gbmaj7", "Dmaj7", "Bbmaj7", "Gbmaj7", "Dmaj7"],
  },
  {
      title: 'Country',
      composer: 'Keith Jarrett',
      chords: ["Ab", "Bb", "Eb", "Eb7", "Ab", "Bb", "G", "Cm", "Cm", "Eb7", "Ab", "Bb", "G", "Cm", "F7", "F#dim7", "Eb", "Ab", "Bb7", "Eb", "Eb", "Ab", "Fm7", "Gm7", "Cm7", "G7b9", "Ab", "F7sus", "F#dim7", "Eb", "Bb7sus", "Dm11", "G7", "Cm", "Eb7", "Ab", "", "Eb", "Ab", "Bb7", "Eb", "Eb"],
  },
  {
      title: 'Cousin Mary',
      composer: 'John Coltrane',
      chords: ["Ab7", "Ab7", "Ab7", "Ab7", "Db7", "Db7", "Ab7", "Ab7", "D7", "Db7", "Ab7", "Ab7"],
  },
  {
      title: 'Crazy He Calls Me',
      composer: 'Carl Sigman',
      chords: ["Fmaj7", "Gm7", "Am7", "Gm7", "Fmaj7", "Bb7#11", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "D9#5", "Gm7", "C7b9", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Dm7", "G7", "C6", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Gm7", "Am7", "Gm7", "Fmaj7", "Bb7#11", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "C7sus"],
  },
  {
      title: 'Crazy Rhythm',
      composer: 'Wolfe-Kahn-Meyer',
      chords: ["F6", "F6", "F6", "D7", "Gm7", "C7b9", "F6", "D7b9", "Gm7", "C7b9", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "A7#5", "D9", "G7#5", "C9", "F6", "F6", "G7", "G7", "Gm7", "C7", "F6", "D7b9", "Gm7", "C7b9"],
  },
  {
      title: 'Creole Love Call',
      composer: 'Duke Ellington',
      chords: ["Bbmaj7", "Bbmaj7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Bbmaj7", "F7", "Cm7", "F7", "Bb6", "Ebmaj7", "Bb6", "Bb7", "F7", "Bb7", "Bb7", "Eb7", "Eb7", "Edim7", "Bb7", "G7", "Cm7", "F7", "Bb7", "Bb7"],
  },
  {
      title: 'Crepuscule With Nellie',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Ab7", "Db7", "Gb7", "Cm7", "F7b9", "Bm7", "E7", "Bbm7", "Eb7", "Abadd9", "Gb7#11", "Abm7", "Ab6", "Bm7", "", "Bbm7", "Eb7", "Ab", "Bbm", "Cm", "Db", "Eb7sus", "Eb7", "Fm7", "Cm7", "Bbm7", "Eb7", "Abm", "Ab6", "Db", "", "D", "Eb", "Eb7", "Gb", "G", "Ab", "A", "Bb", "Bb7", "Eb7", "Ab7", "Db7", "Gb7", "Cm7", "F7b9", "Bm7", "E7", "Bbm7", "Eb7", "Abadd9", "Gb7#11", "Abm6", "Ab6", "A", "Bb", "B", "C7"],
  },
  {
      title: 'Crisis',
      composer: 'Freddie Hubbard',
      chords: ["B7sus", "B7sus", "B7sus", "B7sus", "B7sus", "B7sus", "Db7", "Db7", "Cmaj7", "Cmaj7", "B7", "B7", "Bb7", "Bb7", "A7", "F#7#9", "Bm", "F#7#9", "Bm", "F#7#9", "G7", "C#m7b5", "F#7#9", "Bm7", "E7", "Am7", "D7", "Abm7", "Db7", "Ebm7", "D7", "C#m7b5", "F#7#9", "Bm", "F#7#9"],
  },
  {
      title: 'Criss Cross',
      composer: 'Thelonious Monk',
      chords: ["Gm6", "Gm6", "Gb7#9", "Bb13", "Dm7", "G7#11", "Gb13", "Gb13", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Gm6", "Gm6", "Gb7#9", "Bb13", "Dm7", "G7#11", "Gb13", "Gb13"],
  },
  {
      title: 'Cry Me A River',
      composer: 'Arthur Hamilton',
      chords: ["Cm", "Cmb6", "Cm6", "Cm7", "Fm7", "Bb7", "Ebmaj7", "G7b9", "Gm7b5", "C7b9", "F9", "Fm7", "Bb7sus", "Eb6", "G7b13", "Gm", "Cm6", "D7b9", "Gm", "Em7b5", "Eb7#11", "D7b9", "Gm", "Em7b5", "Am7b5", "D7b9", "Gmaj7", "Dm7", "G7", "Cm", "Cmb6", "Cm6", "Cm7", "Fm7", "Bb7", "Ebmaj7", "G7b9", "Gm7b5", "C7b9", "F9", "Fm7", "Bb7sus", "Eb6", "G7b13"],
  },
  {
      title: 'Crystal Silence',
      composer: 'Chick Corea',
      chords: ["Am7", "Em7", "Fmaj7#11", "Bm7", "Bbmaj7#11", "Am9", "Bm", "C", "D7", "E7", "Am7", "Bbmaj7#11", "Dmaj7", "Am7", "Bbmaj7", "Fm7", "Cmaj7", "Gm7", "B7b13", "E7sus", "E7#9", "Am7", "Em7", "Fmaj7#11", "Bm7", "Bbmaj7#11", "Am9", "Bm", "C", "D7", "E7", "Am7", "Bbmaj7#11"],
  },
  {
      title: 'Cute',
      composer: 'Neal Hefti',
      chords: ["Bb6", "", "Am7", "Ab7", "Gm7", "", "C7", "F6", "", "", "Bb6", "", "Am7", "Ab7", "Gm7", "", "C7", "F7", "", "", "Bb6", "Am7", "Gm7", "Bbm", "", "F", "Bb6", "A7", "Dm7", "", "Dm6", "", "Dm", "Bm7b5", "Bm7", "", "E7", "A", "", "", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "Dm7", "Bm7b5", "E7b9", "Amaj7", "Am7b5", "Ab7"],
  },
  {
      title: 'Cyclic Episode',
      composer: 'Sam Rivers',
      chords: ["Bbm7", "Dbm7", "Em7", "Gm7", "Cm7", "D7#9", "Gm7", "A7b9", "Dm7", "Bm7", "Abm7", "Fm7", "Dm7", "Eb", "Ebm7", "Gbm7"],
  },
  {
      title: 'Cynthia\'s In Love',
      composer: 'Owens-White-Gish',
      chords: ["Fm7", "Bb13", "Bb7b9", "Eb6", "Abm6", "Gm9", "Gbdim7", "Fm7", "Bb7sus", "Gm7", "C7b9", "Abmaj7", "Am7b5", "D7", "Gm7", "C13", "Fm7", "F#m7", "B13", "Fm7", "Bb13", "Db9", "C9", "Fm7", "Bb13", "Bb7b9", "Eb6", "Abm6", "Gm9", "Gbdim7", "Fm7", "B9#5", "Bb7sus", "Bb7b9", "Eb69", "Eb69"],
  },
  {
      title: 'Daahoud',
      composer: 'Clifford Brown',
      chords: ["Ebm7", "Ab7", "Dbm7", "Gb7", "Bmaj7", "Fm7", "Bb7", "Ebm7", "", "B7", "Bb7", "Ebmaj7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Abm7", "Db7", "Gbmaj7", "Fm7", "Bb7", "Ebm7", "Ab7", "Dbm7", "Gb7", "Bmaj7", "Fm7", "Bb7", "Ebm7", "", "B7", "Bb7", "Ebmaj7", "Ebmaj7", "", "Gbmaj7", "Ebm7", "Ab7", "Cm7b5", "B7", "Bb7"],
  },
  {
      title: 'Dance Cadaverous',
      composer: 'Wayne Shorter',
      chords: ["Abmaj7", "Abmaj7", "Abmaj7", "Abmaj7", "A7sus", "A7sus", "A7b9#5", "A7b9#5", "Bm", "Bm", "Cm", "Cm", "C#m7b5", "C#m7b5", "F#7b9", "F#7b9", "Bm", "Bm", "Cm", "Cm", "C#m7", "C#m7", "F#7sus", "F#7", "Gmaj7", "Gmaj7", "C13#11", "C13#11", "C7alt", "C7alt", "Abm11", "Abm11", "Fm7b5", "Fm7b5", "Bb7#5#9", "Bb7#5#9", "Bbm7", "Bbm7", "C#m7b5", "F#7b9", "Bm", "Bm", "Cm", "Cm", "C#m7b5", "C#m7b5", "F#7b9", "F#7b9", "Bm", "Bm", "Am7", "D7", "Gmaj7#5", "Gmaj7#5", "Em7", "Em7", "C#m7b5", "C#m7b5", "C13#11", "C13#11", "C7alt", "C7alt", "Abm11", "Abm11", "G7sus", "G7sus", "C#m7b5", "F#7b9", "Cmaj7#11", "Cmaj7#11", "Cmaj7#11", "Cmaj7#11"],
  },
  {
      title: 'Dance Of The Infidels',
      composer: 'Bud Powell',
      chords: ["Fmaj7", "Fm7", "Bb7", "Am7", "Gm7", "F#m7", "B7", "Fm7", "Bb7", "Am7", "D7", "Abm7", "Db7", "Gm7", "Dbm7", "Gb7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Am7", "Gm7", "F#m7", "B7", "Fm7", "Bb7", "Am7", "D7", "Abm7", "Db7", "Gm7", "Dbm7", "Gb7", "Fmaj7", "Fmaj7"],
  },
  {
      title: 'Dancing In The Dark',
      composer: 'Arthur Schwartz',
      chords: ["Cmaj7", "Cmaj7", "Cdim7", "Cdim7", "Dm7", "Dm7", "Dm7b5", "G7b9", "Cmaj7", "Cm7", "Em7b5", "A7b9", "Dm7b5", "Dm7b5", "Dm7b5", "Ab9", "G7b9", "Cmaj7", "Cmaj7", "Cdim7", "Cdim7", "Dm7", "Dm7", "Dm7b5", "Dm7b5", "G7b9", "Cmaj7", "Cm7", "Eb7", "Db7", "C6", "Dm7b5", "G7sus", "C6", "Dm7", "G7"],
  },
  {
      title: 'Dancing On The Ceiling',
      composer: 'Richard Rodgers',
      chords: ["Fmaj7", "Cm7", "F7", "Bb6", "Bdim7", "Fmaj7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "C7", "Bb6", "Eb7", "Fmaj7", "Cm7", "F7", "Bb6", "Eb7", "Am7", "D7", "Gm7", "F7", "Fmaj7", "Cm7", "F7", "Bb6", "Bdim7", "Fmaj7", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Danny Boy',
      composer: 'Traditional',
      chords: ["C", "C", "C7", "F", "F", "C", "Am7", "Dm7", "G7", "C", "C", "F", "D7", "C", "Am", "Dm7", "G7", "C", "Dm7", "G7", "C", "Dm7", "G7", "C", "Dm7", "G7", "Am", "F", "A7", "Dm7", "G7", "C", "C7", "F", "F#dim7", "C", "Am", "F", "F#dim7", "C", "Am", "Dm7", "G7", "C", "Dm7", "G7"],
  },
  {
      title: 'Darn That Dream',
      composer: 'Jimmy Van-Heusen',
      chords: ["G6", "", "Bbm7", "Eb7", "Am7", "B7#11", "Em", "Em", "A7", "Cm7", "Bm7b5", "E7", "Am7", "F7", "Bm7", "Bbm7", "Am7", "D7", "Bm7", "Bb7", "Am7", "D7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Gm7", "", "F#m7", "B7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Gm", "", "", "", "Am7", "D7", "Bbm7", "Eb7", "Am7", "D7", "G6", "", "Bbm7", "Eb7", "Am7", "B7#11", "Em", "Em", "A7", "Cm7", "Bm7b5", "E7", "Am7", "F7", "Bm7", "Bbm7", "Am7", "D7", "G6", "", "Am7", "D7"],
  },
  {
      title: 'Dat Dere',
      composer: 'Bobby Timmons',
      chords: ["Cm7", "Cm7", "Am7b5", "Abmaj7", "Am7b5", "D7#9", "Dm7b5", "G7b9", "Cm7", "Cm7", "Am7b5", "Abmaj7", "Dm7b5", "G7b13", "Cm7", "G7b13", "Dm7b5", "G7", "Cm7", "Cm", "Am7b5", "D7", "Gm7", "", "Am7b5", "D7#9", "Dm7b5", "G7b9", "Dm7b5", "G7", "Cm7", "Cm", "Am7b5", "D7", "Gm7", "", "Dm7b5", "G7b13", "Cm7", "G7b13", "Cm7", "Cm7", "Am7b5", "Abmaj7", "Am7b5", "D7#9", "Dm7b5", "G7b9", "Cm7", "Cm7", "Am7b5", "Abmaj7", "Dm7b5", "G7b13", "Cm7", "G7b13"],
  },
  {
      title: 'Day By Day',
      composer: 'Cahn-Stordahl-Weston',
      chords: ["Am7", "Am7", "Am7", "D7", "Gmaj7", "C7", "Bm7", "E9#5", "Am7", "B7", "Em7", "A7", "Em7", "A7", "Am7", "Bm7", "E9#5", "Am7", "Am7", "Am7", "D7", "Gmaj7", "C7", "Bm7b5", "E7b9", "Am7", "Cm7", "F7", "Gmaj7", "F7#11", "E7", "Am7", "D7", "Gmaj7", "Bm7", "E9#5"],
  },
  {
      title: 'Day Dream',
      composer: 'Strayhorn-Ellington',
      chords: ["Fmaj7", "F7", "Bb7#5", "A7b13", "Dm7", "F7", "Bbm6", "C7b13", "Fm7", "Fm7", "Db7", "C7", "G7", "Gb7", "Bbmaj7", "", "Bm7", "E7", "Amaj7", "", "Bbm7", "Eb7", "Abmaj7", "", "Am7", "D7", "Gmaj7", "Gm7", "C7b9", "Fmaj7", "Ab7", "G7", "Gm7", "C7#5", "Fmaj7", "F7", "Bb7#5", "A7b13", "Dm7", "F7", "Bbm6", "C7b13", "Fm7", "Fm7", "Db7", "C7", "Fmaj7", "Fmaj7"],
  },
  {
      title: 'Day Dreaming',
      composer: 'Jerome Kern',
      chords: ["Bbmaj7", "Cm7", "Dm7", "C#dim7", "Cm7", "Ddim7", "Cm7", "F7#9", "Bbmaj7", "Ebmaj7", "D7#11", "Ab9", "G7b9", "Cm7", "F7", "", "Bbmaj7", "Bb7", "Gm7", "Gm7", "Em7b5", "Eb7", "D7#5", "Gm7", "Gm7", "Em7b5", "Eb9", "Dm7", "C#dim7", "Cm7", "F7sus"],
  },
  {
      title: 'Day In, Day Out',
      composer: 'Rube Bloom',
      chords: ["C6", "C6", "Dm7", "G7", "C6", "Dm7", "D#dim7", "C6", "Em7", "Ebdim7", "Dm6", "G7", "Dm7", "G7", "Dm7", "G7", "Em7", "A7b9", "Dm7", "G7", "D7", "Fm6", "Em7", "A7", "D7", "G7", "Cmaj7", "F7", "Em7", "A7", "D7", "Fm6", "Em7", "A7b9", "Dm7", "G7", "C6", "A7#5", "Dm7", "G7#5"],
  },
  {
      title: 'Day Waves',
      composer: 'Chick Corea',
      chords: ["Dm7", "Bb", "Gm6", "Em7", "Fmaj7#11", "G7", "Am", "Dm7", "E7#9", "F", "F#m7b5", "G7sus", "G7sus", "Eb7#11", "Eb7#11", "F#m7b5", "Fm", "C", "B7", "G", "A", "F", "Ab7sus", "Ab7", "Bbm", "Bbm", "Edim", "Ebmaj7", "Edim", "Ebmaj7"],
  },
  {
      title: 'Daybreak',
      composer: 'Adamson-Grofe',
      chords: ["Ebmaj7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Abmaj7", "B7", "Bb7", "Ebmaj7", "Ebm7", "Ab7", "Bbmaj7", "Em7", "A7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Abmaj7", "B7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Days And Nights Waiting',
      composer: 'Keith Jarrett',
      chords: ["Cm7", "F7", "Bbmaj7", "A7", "F#m7", "Bm7", "Em7", "A7", "Dmaj7", "Cm7", "F7", "Ebm7", "Ab7", "Cm7", "F7", "Dm7", "G7", "Dbm7", "Gb7", "Cm7", "F7", "Bbmaj7", "A7", "F#m7", "Bm7", "Em7", "A7", "Dmaj7"],
  },
  {
      title: 'Days Of Wine And Roses',
      composer: 'Henry Mancini',
      chords: ["Fmaj7", "Eb7#11", "Am7", "D7b13", "Gm7", "Gm7", "Eb7#11", "Eb7#11", "Am7", "Dm7", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Eb7#11", "Am7", "D7b13", "Gm7", "Gm7", "Eb9", "Eb9", "Am7", "Dm7", "Dm7", "Bm7b5", "E7b9", "Am7", "Dm7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Dear Lord',
      composer: 'John Coltrane',
      chords: ["Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Em7", "Em7", "Em7", "Em7", "Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Bm", "Bm", "Bm7", "Bm6", "Bm", "Bm", "Bm7", "Bm6", "Em7", "Em7", "A7sus", "A7sus", "A7sus", "A7sus", "A7#5", "A7#5", "Dmaj7", "Bm7", "Em7", "A7", "Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Em7", "Em7", "Em7", "Em7", "Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "F#m7", "F#m7", "Gmaj7", "Gmaj7", "Em7", "F#m7", "Gmaj7", "A7sus", "Bbmaj7", "Bbmaj7", "Dmaj7", "Dmaj7"],
  },
  {
      title: 'Dear Old Stockholm',
      composer: 'Traditional',
      chords: ["Dm", "Em7b5", "A7b9", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Dm7", "Dm6", "Dm7", "Dm6", "Fmaj7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm", "C7sus", "C7sus", "C7sus", "C7sus", "C7sus", "C7sus", "C7sus", "A7b9", "Dm", "Dm"],
  },
  {
      title: 'Dearly Beloved',
      composer: 'Jerome Kern',
      chords: ["Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "Em7", "Am7", "Ebm7", "Ab7", "Ebm7", "Ab7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "C6", "Am7", "D7", "D7", "Dm7", "G7", "C6", "Em7", "A7"],
  },
  {
      title: 'Decision',
      composer: 'Sonny Rollins',
      chords: ["Fm6", "Gm7b5", "C7b9", "Fm6", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Cm7b5", "F7b9", "Bbm7", "Gm7b5", "C7b9", "Fm6", "Gm7b5", "C7b9", "Fm6", "Gm7b5", "C7b9"],
  },
  {
      title: 'Dedicated To You',
      composer: 'Cahn-Chaplin-Zaret',
      chords: ["Bbmaj7", "Eb7", "", "Bbmaj7", "Dm7", "G7", "Cm7b5", "F7b9", "Bbmaj7", "", "Am7", "D7", "Gm7", "C7", "Cm7", "", "F7#5", "", "Dmaj7", "Bm7", "E7b9", "Em7", "A7", "Dmaj7", "", "Gm7", "C7", "Fmaj7", "D7b9", "Gm7", "C7b9", "Cm7", "F7#5", "", "Bbmaj7", "Eb7", "", "Bbmaj7", "Dm7", "G7", "Cm7b5", "F7b9", "Bbmaj7", "", "Am7", "D7", "Gm7", "C7", "Cm7", "F7", "Bb6", "", "Cm7", "F7"],
  },
  {
      title: 'Deed I Do',
      composer: 'Hirsch-Rose',
      chords: ["C6", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "Fmaj7", "Fmaj7", "Bm7", "E7", "A7", "A7", "D7", "Dm7", "G7", "C6", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Deep Purple',
      composer: 'Peter De-Rose',
      chords: ["Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "Am7b5", "D7", "Em7", "Fdim7", "D7", "Gm7", "Bbm6", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "Am7b5", "D7", "Em7", "Fdim7", "D7", "Gm7", "Bbm6", "Am7", "Abdim7", "Gm7", "C7", "F6", "D7", "Gm7", "C7"],
  },
  {
      title: 'Del Sasser',
      composer: 'Sam Jones',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Cm7", "Cm7", "Am7b5", "Abm", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Eb6", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Gm7", "C7"],
  },
  {
      title: 'Desafinado',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Fmaj7", "Fmaj7", "G7#11", "G7#11", "Gm7", "C7", "Am7b5", "D7b9", "Gm7", "A7b9", "D7", "D7b9", "G7b9", "G7b9", "Gbmaj7", "Gbmaj7", "Fmaj7", "Fmaj7", "G7#11", "G7#11", "Gm7", "C7", "Am7b5", "D7b9", "Gm7", "Bbm6", "Fmaj7", "E7#9", "Amaj7", "Bbdim7", "Bm7", "E7", "Amaj7", "Bbdim7", "Bm7", "E7", "Amaj7", "F#m7", "Bm7", "E7", "Cmaj7", "C#dim7", "Dm7", "G7", "Gm7", "Ebm6", "G7", "C7b9", "Fmaj7", "Fmaj7", "G7#11", "G7#11", "Gm7", "C7", "Am7b5", "D7b9", "Gm7", "Bbm6", "Fmaj7", "Dm7", "G7", "G7", "Eb7", "Eb7", "G7", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'Desafinado (Original)',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Emaj7", "Emaj7", "F#7#11", "F#7#11", "F#m7", "B7", "G#m7b5", "C#7b9", "F#m7", "G#7b9", "C#7", "C#7b9", "F#7b9", "F#7b9", "Fmaj7", "Fmaj7", "Emaj7", "Emaj7", "F#7#11", "F#7#11", "F#m7", "B7", "G#m7b5", "C#7b9", "F#m7", "G#7b9", "C#m7", "D#7#9", "G#maj7", "G7", "F#7", "F7", "G#maj7", "Adim7", "A#m7", "D#7", "G#maj7", "G#m7", "A#m7", "D#7", "Bmaj7", "Cdim7", "C#m7", "F#7", "F#m7", "Dm6", "F#7", "B7b9", "Emaj7", "Emaj7", "F#7#11", "F#7#11", "F#m7", "B7", "G#m7b5", "C#7b9", "Amaj7", "Am6", "Emaj7", "C#m7", "F#7", "F#7", "Fmaj7", "Fmaj7", "F#7", "F#m", "B7", "E6", "B7"],
  },
  {
      title: 'Detour Ahead',
      composer: 'Herb Ellis',
      chords: ["Cmaj7", "F#7b9", "B7alt", "F", "Em7", "Am7", "", "D7", "", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Cmaj7", "Am7", "Ab7", "G7", "Em", "B7alt", "Emaj7", "F#m7b5", "B7b9", "Em", "B7alt", "Emaj7", "Db7", "Cmaj7", "F#7b9", "B7alt", "F", "Em7", "Am7", "", "D7", "", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Cmaj7", "E7#9", "Am7", "Eb7", "D7", "G7", "Cmaj7", "G7#5"],
  },
  {
      title: 'Devil May Care',
      composer: 'Dorough-Kirk',
      chords: ["Gm", "Em7b5", "Am7b5", "D7b9", "Gm", "Em7b5", "Am7b5", "D7b9", "Gm", "Em7b5", "Eb7#11", "D7b9", "Gm", "Em7b5", "Am7b5", "D7b9", "Gm", "Gm7", "Edim7", "Bbdim7", "Am7b5", "D7b9#5", "Gm", "Gm", "Db9", "Cm7", "F7", "Bbmaj7", "Eb7#11", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Am7b5", "D7b9", "Gmaj7", "Eb7", "D7", "Gm", "Em7b5", "Am7b5", "D7b9", "Gm", "Em7b5", "Am7b5", "D7b9", "Gm", "Gm7", "Em7b5", "Eb7#11", "Eb7#11", "Am7b5", "D7b5#9", "Gm", "", "Gm", ""],
  },
  {
      title: 'Dewey Square',
      composer: 'Charlie Parker',
      chords: ["Ebmaj7", "Abm7", "Eb7", "Db7", "C7", "F7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "C7", "F7", "F7", "Fm7", "Bb7", "Ebmaj7", "Abm7", "Eb7", "Db7", "C7", "F7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Dexterity',
      composer: 'Charlie Parker',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Diane',
      composer: 'Rapee-pollack',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "C7", "Fm7", "Bb7", "Am7b5", "D7b13", "Gmaj7", "Am7", "D7", "Gmaj7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "C7", "Fm7", "Bb7", "Am7b5", "D7b13", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Eb6"],
  },
  {
      title: 'Dienda',
      composer: 'Kenny Kirkland',
      chords: ["Gm11", "Fadd9", "Gbmaj7#11", "Gm11", "Fadd9", "F", "F", "F", "F", "Bbm", "Dm9", "G13#11", "Gbmaj9#11", "Fm11", "Cadd9", "F", "Dm11", "Bbmaj7", "A9sus", "Fm9", "Bb", "Bb", "Fm9", "Fm9", "Dm7b5", "E", "C6", "C7alt", "Fm9", "Db13#11", "Dm9", "Dm9", "Gb", "Bbm", "Fm11", "Gm11", "Gbmaj7#11", "Bbmaj7#5", "Bbmaj7#11", "C", "Dbmaj7", "Gm11", "Fadd9", "Gbmaj7#11", "Gm11", "Fadd9", "F", "F", "Gm11", "Fadd9", "Gbmaj7#11", "Gm11", "Fadd9", "F", "F"],
  },
  {
      title: 'Dig',
      composer: 'Miles Davis',
      chords: ["F7", "F7", "F7", "F7", "Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Eb7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9"],
  },
  {
      title: 'Dinah',
      composer: 'Harry Akst',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Cmaj7", "G", "Em7", "Am7", "D7", "G6", "Bbdim7", "Am7", "D7", "Em", "Em", "Em", "A7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Cmaj7", "G", "Em7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'Dindi',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Ebmaj7", "Dbmaj7", "Ebmaj7", "Dbmaj7", "Cmaj7", "Am9", "Dm9", "G13", "Ebmaj7", "Dbmaj7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm", "Eb6", "Bbm7", "Gm", "Ebm6", "Gm", "Ebm6", "Gm7", "C7b9", "Fm", "C#m6", "Fm", "C#m6", "Fm7", "Bb7b9", "Ebmaj7", "Dbmaj7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm", "Eb6", "Db7"],
  },
  {
      title: 'Diverse',
      composer: 'Charlie Parker',
      chords: ["Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Bbm6", "Fm7b5", "Bb7b9", "Ebm7", "Ebm7", "Em7b5", "Ab7b9", "Dbmaj7", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9"],
  },
  {
      title: 'Django',
      composer: 'John Lewis',
      chords: ["Fm", "Bbm", "C7b9", "Fm", "F7b9", "Bbm", "Eb7b9", "Ab6", "Dbmaj7", "Gm7b5", "G7b9", "C7b13", "Fm", "Bbm", "C7b9", "Fm", "Fm7", "Dm7b5", "G7b9", "C7b9", "F7b9", "Bbm7", "Eb7", "Ab7", "Db7", "G7b9", "C7b9", "F7b9", "Bbm6", "F7b9", "Bbm6", "F7b9", "Bbm6", "F7b9", "Bbdim7", "F7b9", "Bbm7", "Gm7b5", "C7b9", "F7b9", "Bb7", "Ebm7", "Ab7", "Db7", "Gb7", "Gb7", "Db7", "Db7", "Gb7", "Gb7", "Db7", "C7b9"],
  },
  {
      title: 'Do It Again',
      composer: 'Gershwin-De Sylva',
      chords: ["F6", "F6", "F6", "F6", "F6", "Faug", "F", "Dm", "G7", "G7", "", "C7", "D7", "Gm7", "C7", "Bb", "", "F", "Cm6", "D7", "G7", "G7", "C7", "C7"],
  },
  {
      title: 'Do Nothin\' Til You Hear From Me',
      composer: 'Duke Ellington',
      chords: ["Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Ab7#11", "Bbmaj7", "G7#5", "C7", "F7", "Bbmaj7", "Cm7", "F7", "Gbmaj7", "Gbmaj7", "Gbmaj7", "Gb7", "Bbmaj7", "Dm7", "G7", "C7", "F7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Ab7#11", "Bbmaj7", "G7#5", "C7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Do You Know What It Means?',
      composer: 'Louis Alter',
      chords: ["Cmaj7", "G7#5", "Cmaj7", "Am7", "Em7", "Am7", "D7", "F6", "F#dim7", "C6", "A7b9", "Dm7", "Ab7", "G7", "Bbm7", "Eb7", "Ab6", "Adim7", "Bbm7", "Eb7", "Ab6", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Dm7", "G7#5", "Cmaj7", "G7#5", "Cmaj7", "Am7", "Em7", "Am7", "D7", "F6", "F#dim7", "C6", "A7b9", "Dm7", "G7", "C6"],
  },
  {
      title: 'Dolores',
      composer: 'Wayne Shorter',
      chords: ["Dm7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "Gm7", "Am7b5", "D7#9", "Dbmaj7", "Dbmaj7", "Gm7", "Gm7", "D7", "Gm7", "Gm7", "D7", "Gm7", "A7", "Dm7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "Gm7", "Am7b5", "D7#9", "Dbmaj7", "Dbmaj7"],
  },
  {
      title: 'Dolphin Dance',
      composer: 'Herbie Hancock',
      chords: ["Ebmaj7", "Dbmaj7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "Abmaj7#11", "Cm7", "Am7", "D7", "Gmaj7", "Abm7", "Fm7", "Fm7", "G7#5", "Cm7", "Cm7", "Am7", "D7", "Gmaj7", "G7sus", "A", "Ebmaj7#11", "F7sus", "D", "F7sus", "Em7", "A7", "Eb7", "Am7", "D7", "Bm7", "E7", "Dm7", "C#m7", "F#7", "Dmaj7", "Cmaj7", "Dmaj7", "Cmaj7", "Dbmaj7", "Bb13b9", "Abmaj7#5", "G7#5"],
  },
  {
      title: 'Dolphin, The',
      composer: 'Luiz Eca',
      chords: ["F#maj7", "G7#11", "F#maj7", "E7", "Amaj7", "B7", "Ab7alt", "Db7alt", "Cmaj7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "A7sus", "Dmaj7", "F7b13", "Bbm9", "Bbm", "Bbm", "Bbm7", "Bbm6", "A7b9#9", "Dmaj7", "Em7", "A7", "C#m7b5", "F#7b13", "Bm7b5", "E7b9", "Dm7", "G7", "Bm7", "E7b9sus", "C#m7b5", "F#7alt", "B7alt", "E7alt", "Amaj7", "B7", "G#7alt", "C#7alt", "F#7", "B7", "Emaj7", "C7", "Emaj7", "C7", "Bmaj7", "Emaj7"],
  },
  {
      title: 'Domingo',
      composer: 'Benny Golson',
      chords: ["Cm", "Cm", "G7", "G7", "Bbm6", "Bbm6", "F", "Abm6", "Cm", "Cm", "D7", "Dm7b5", "G7b9", "Cm", "Eb7", "Ab7", "G7b9", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Am7b5", "D7b9", "Gm7", "Ab7", "Dm7b5", "G7b9"],
  },
  {
      title: 'Don\'t Be That Way',
      composer: 'Edgar Sampson',
      chords: ["Db6", "Bbm7", "Ebm7", "Ab7#5", "Db6", "Bbm7", "Ebm7", "Ab7#5", "Fm7", "Bb7", "Ebm7", "Ab9#5", "Db6", "Bbm7", "Ebm7", "Ab7#5", "C9", "C9", "F9", "F9", "Bb9", "Bb9", "Eb9", "Ab7#5", "Db6", "Bbm7", "Ebm7", "Ab7#5", "Db6", "Bbm7", "Ebm7", "Ab7#5", "Fm7", "Bb7", "Ebm7", "Ab7#5", "Db6", "Bbm7", "Ebm7", "Ab7#5"],
  },
  {
      title: 'Don\'t Blame Me',
      composer: 'Jimmy McHugh',
      chords: ["Cmaj7", "Em7b5", "A7b13", "Dm7b5", "G13b9", "Cmaj7", "Am7", "Dm7b5", "G13b9", "Em7b5", "A7b13", "Dm7", "G7", "Cmaj7", "G7", "Fmaj7", "E7", "Am7", "Am7", "D7", "D7", "Dm7", "Ab7#11", "G7", "Cmaj7", "Em7b5", "A7b13", "Dm7b5", "G13b9", "Cmaj7", "Am7", "Dm7b5", "G13b9", "Em7b5", "A7b13", "Dm7", "G7", "C6", "G7"],
  },
  {
      title: 'Don\'t Explain',
      composer: 'Billie Holiday',
      chords: ["Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Eb7#11", "Db7#11", "", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm", "Gm7", "C7", "Fmaj7", "Bbmaj7", "Em7b5", "Bb7", "A7b9", "Dm", "Gm7", "C7", "Fmaj7", "Bbmaj7", "Em7b5", "Bb7", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Eb7#11", "Db7#11", "", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9"],
  },
  {
      title: 'Don\'t Fence Me In',
      composer: 'Cole Porter',
      chords: ["F", "Fmaj7", "F6", "Fmaj7", "F6", "D7b13", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "Fmaj7", "F7", "F7#5", "Bb6", "Bbmaj7", "Eb9", "F", "D7b9", "Bbm6", "Fmaj7", "C7", "F6", "F7#5", "Bbmaj7", "Bbmaj7", "F", "C7", "F7", "Bbmaj7", "Bbmaj7", "F", "F#dim7", "Gm7", "C7", "Fmaj7", "F7", "F7#5", "Bb6", "Bbmaj7", "Eb9", "F", "D7", "Bbm6", "Fmaj7", "C7", "F6", "", "Gm7", "C7"],
  },
  {
      title: 'Don\'t Get Around Much Anymore',
      composer: 'Duke Ellington',
      chords: ["C6", "C6", "A7", "A7", "D7", "G7", "C6", "G7", "F6", "F#dim7", "Cmaj7", "C7", "F6", "F#m7b5", "B7b9", "Em7", "Ebdim7", "Dm7", "G7", "C6", "C6", "A7", "A7", "D7", "G7", "C6", "G7"],
  },
  {
      title: 'Don\'t Go To Strangers',
      composer: 'Kent-Mason-Evans',
      chords: ["Bbmaj7", "Eb7#11", "Bbmaj7", "Dm7", "G7b9", "Cm7b5", "F7b9", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "Gm7", "C7", "Gm7", "C7", "C7", "F7", "Bbmaj7", "Eb7#11", "Bbmaj7", "Dm7", "G7b9", "Cm7b5", "F7b9", "Bb6", "F7", "Bb6"],
  },
  {
      title: 'Don\'t Know Why',
      composer: 'Jesse Harris',
      chords: ["Bbmaj7", "Bb7", "Ebmaj9", "D9", "Gm7", "C7", "F7sus", "Bb", "Bbmaj7", "Bb7", "Ebmaj9", "D9", "Gm7", "C7", "F7sus", "Bb", "Bbmaj7", "Bb7", "Ebmaj9", "D9", "Gm7", "C7", "F7sus", "Bb", "Bbmaj7", "Bb7", "Ebmaj9", "D9", "Gm7", "C7", "F7sus", "Bb", "Bbmaj7", "Bb7", "Ebmaj9", "D9", "Gm7", "C7", "F7sus", "Bb", "Gm7", "C7", "F7", "F7", "Gm7", "C7", "F7", "F7", "Bb", "F7", "Bbmaj7", "Bb7", "Ebmaj9", "D9", "Gm7", "C7", "F7sus", "Bb", "Bbmaj7", "Bb7", "Ebmaj9", "D9", "Gm7", "C7", "F7sus", "Bb", "Gm7", "C7", "F7sus", "", "Bb", "Bb7", "Gm7", "C7", "F7sus", "Bb"],
  },
  {
      title: 'Don\'t Misunderstand',
      composer: 'Gordon Parks',
      chords: ["Fmaj7", "E7sus", "E7alt", "Ebmaj7", "D7sus", "D7b9", "G7", "C7", "Am7", "D7", "G7", "C7", "Gm", "Em7b5", "A7b9", "Dm", "Dm", "Bm7b5", "Bb7", "Am7", "Abdim7", "Gm7", "C7b9", "Fmaj7", "E7sus", "E7alt", "Ebmaj7", "D7sus", "D7b9", "G7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Don\'t Take Your Love From Me',
      composer: 'Henry Nemo',
      chords: ["Cmaj7", "Dm7", "Em7", "Ebdim7", "G7", "G7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Cmaj7", "C", "Ebdim7", "Dm7", "A7b13", "Dm7", "Dm7", "A7b13", "Ab7#11", "G7", "Em7", "Ebm7", "Dm7", "G7", "Cmaj7", "Dm7", "Em7", "Ebdim7", "G7", "G7", "Dm7", "G7", "Dm7", "G7", "C6", "Dm7", "D#dim7", "", "C6", "C7", "Fmaj7", "Bb7", "Cmaj7", "Em7b5", "A7b13", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Don\'t Worry \'Bout Me',
      composer: 'Rube Bloom',
      chords: ["Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Bbm7", "Eb7", "Ab6", "Cm7", "Bdim7", "Bbm7", "Dbm6", "Gb9", "Gb9", "", "Gm7b5", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Dbmaj7", "Gb9", "Cm7", "F7", "Bbm7", "Eb7", "Ab6", "Cm7", "F7b9"],
  },
  {
      title: 'Donna Lee',
      composer: 'Charlie Parker',
      chords: ["Abmaj7", "F7", "Bb7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Gb7", "Abmaj7", "F7", "Bb7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "F7", "Bb7", "Bb7", "Gm7b5", "C7b9", "Fm", "C7b9", "Fm", "C7b9", "Fm", "Bdim7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7"],
  },
  {
      title: 'Down By The Riverside',
      composer: 'Traditional',
      chords: ["F", "F", "F", "F", "C7", "C7", "F", "F", "F", "F", "F", "F", "C7", "C7", "F", "F", "Bb", "Bb", "F", "F", "C7", "C7", "F", "F7", "Bb", "Bb", "F", "F", "C7", "C7", "F", "F"],
  },
  {
      title: 'Down For Double',
      composer: 'Freddie Green',
      chords: ["Bb6", "G7", "C7", "F7", "Bb6", "G7", "C7", "F7", "Bb6", "G7", "C7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb7", "Bb7", "Eb6", "Eb6", "C7", "C7", "F7", "F7", "Bb6", "G7", "C7", "F7", "Bb6", "G7", "C7", "F7", "Bb6", "G7", "C7", "F7", "Bb6", "", "Bb6", ""],
  },
  {
      title: 'Down In The Depths',
      composer: 'Cole Porter',
      chords: ["Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Bm7", "E7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "G6", "Em7", "Am7", "D7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Cmaj7", "F#m7b5", "B7b9", "E7", "A7", "Am7b5", "D7b9", "Gmaj7", "Gmaj7", "Bm7b5", "E7b9", "Am7", "Cm6", "F7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'Doxy',
      composer: 'Sonny Rollins',
      chords: ["Bb7", "D7", "G7", "C7", "F7", "Bb7", "Bb7", "D7", "G7", "C7", "F7", "Bb7", "Bb7", "Eb7", "Edim7", "Bb7", "D7", "G7", "C7", "F7", "Bb7", "F7"],
  },
  {
      title: 'Dream',
      composer: 'Johnny Mercer',
      chords: ["Bb", "Bb", "Em7", "A7", "Bb6", "Bb6", "Dm7", "G7", "Cm7", "Ebm6", "Bbmaj7", "Bbmaj7", "C7", "C7", "Cm7", "F7", "Bb", "Bb", "Em7", "A7", "Bb6", "Bb6", "Dm7", "G7", "Cm7", "Ebm6", "Bbmaj7", "A7", "D7", "G7#9", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Dream A Little Dream Of Me',
      composer: 'Schwendt-Andre-Kahn',
      chords: ["G6", "Eb7", "D7", "G6", "E7b9", "Am7", "Cm6", "F9", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "", "Eb7", "D7", "G6", "", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Am7", "D7", "G6", "Eb7", "D7", "G6", "E7b9", "Am7", "Cm6", "F9", "Gmaj7", "", "Eb7", "D7", "G6", "D7"],
  },
  {
      title: 'Dream Dancing',
      composer: 'Cole Porter',
      chords: ["E7#5", "E7#5", "Amaj7", "Amaj7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "Bb9", "Em7", "A7", "Ebm7", "Ab7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Fmaj7", "Bb7", "Cmaj7", "G7", "C6", "D7", "Am7b5", "D7b9", "Dm7", "G7sus", "Cmaj7", "Gb7#11", "Fmaj7", "Em7", "A7", "Ebm7", "Ab7", "Dm7", "G7", "Ebm7", "Ab7", "Dm7", "G7", "Ebm7", "Ab7", "Dm7", "G9sus", "C6", "C6"],
  },
  {
      title: 'Dreamsville',
      composer: 'Henry Mancini',
      chords: ["Cmaj7", "Gm7", "Cmaj7", "Gm7", "F#7", "Cm7", "F7", "Dm7", "Ebm7", "Em7", "A7", "Dm7", "G7", "F#m7b5", "B7b13", "Em7", "A7", "F#m7", "Bm7", "Cm7", "F7", "G#m7b5", "C#7b9", "F#m7b5", "B7b9", "Em7b5", "A7b9", "Dm7", "G7", "Cmaj7", "Gm7", "Cmaj7", "Gm7", "F#7", "Cm7", "F7", "Dm7", "Ebm7", "Dm7", "Db7#11", "Cmaj7"],
  },
  {
      title: 'Driftin\'',
      composer: 'Herbie Hancock',
      chords: ["Eb7", "G7", "Ab7", "G7", "Cm7", "Bbm7", "Am7b5", "Ab7", "Gm7", "C7", "Fm7", "Bb7b9", "Ab7", "Ab7", "Eb7", "Eb7", "", "Cm7", "Cm", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "G7", "Ab7", "G7", "Cm7", "Bbm7", "Am7b5", "Ab7", "Gm7", "C7", "Fm7", "Bb7", "Eb", "Bb7", "Eb", "C7", "Fm7", "Bb7", "Eb7", "C7"],
  },
  {
      title: 'Duke Ellington\'s Sound Of Love',
      composer: 'Charles Mingus',
      chords: ["D7#9", "Dbmaj9", "Ab13b9", "Dbmaj9", "F7#5#9", "Bb7b9#5", "Ab7b9#5", "Dbmaj7", "F7#11", "Ebm9", "Ab13b9", "E", "Eb6", "Dmaj7", "Ab7#11", "Dbmaj9", "F#m7b5", "F#dim7", "Emaj7", "E6", "Em7b5", "A7#11", "Dmaj7", "Dm7", "G7", "Cmaj7", "", "G7", "Am7", "A13#11", "", "Bbm7", "Eb13", "Abmaj7", "F7b9", "Bb7b9#11", "Eb9#11", "Abmaj7", "D9", "Dbmaj9", "Gb13#11", "Fm11", "Bb7#11", "Ebm7b5", "Ab13b9", "E", "Eb6", "Dmaj7", "Ab7b9#11", "Dbmaj9", "D13#11"],
  },
  {
      title: 'Duke, The',
      composer: 'Dave Brubeck',
      chords: ["Cmaj7", "Fmaj7", "Em7", "Am7", "B7", "", "Em7", "Am7", "Dm7", "", "Fm7", "Bb7", "Ebmaj7", "Dbmaj7", "Cm7", "Bm7", "Bbm7", "Eb7", "Abmaj7", "", "D7", "Db7", "Cmaj7", "", "Fmaj7", "E7", "D7", "Cmaj7", "Bbm7", "Abmaj7", "G7b9", "Fm7", "Dm7b5", "G7", "Cm7", "", "Cm7b5", "F7", "Bbm7", "", "Ab", "Bbm7", "Ab6", "Gm7b5", "Fm7", "Ebsus", "Db7#11", "", "Cmaj7", "Fmaj7", "Em7", "Am7", "B7", "", "Em7", "Am7", "Dm7", "", "Fm7", "Bb7", "Ebmaj7", "Dbmaj7", "Cm7", "Bm7", "Bbm7", "Eb7", "Abmaj7", "", "D7", "Db7", "Cmaj7", ""],
  },
  {
      title: 'E.S.P.',
      composer: 'Wayne Shorter',
      chords: ["E7alt", "E7alt", "Fmaj7", "Fmaj7", "E7alt", "E7alt", "Ebmaj7#11", "Ebmaj7#11", "D7alt", "Eb7#11", "E7alt", "Fmaj7", "Ebmaj7", "Dm7", "G7", "Gm7", "Gb7"],
  },
  {
      title: 'Early Autumn',
      composer: 'Burns-Herman',
      chords: ["Cmaj7", "B7b9", "Bbmaj7", "A7#9", "Abmaj7", "G7#9", "Cmaj7", "A7#9", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Cm7", "F7", "Bbmaj7", "Eb7", "D", "Db7", "C7", "B7", "Bb7", "A", "Ab7", "G7", "Cmaj7", "B7b9", "Bbmaj7", "A7#9", "Abmaj7", "G7#9", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'East Of The Sun',
      composer: 'Brooks Bowman',
      chords: ["Gmaj7", "Gmaj7", "Bm7", "E7", "Am7", "Am7", "Cm7", "F7", "Am7", "D7", "F#m7b5", "B7b13", "Em7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Gmaj7", "Bm7", "E7", "Am7", "Am7", "Cm7", "F7", "Am", "Am7", "F#m7b5", "B7b9", "Em7", "A7", "Am7", "F7", "Bm7", "Bbm7", "Eb7", "Am7", "D7", "G6", "G6"],
  },
  {
      title: 'East St. Louis Toodle-oo',
      composer: 'Ellington-Milley',
      chords: ["Cm", "Cm", "Fm6", "Fm6", "Cm", "Cm", "Fm6", "Fm6", "Cm", "Cm", "Fm6", "G7b9", "Cm", "Ab7", "G7b9", "Cm", "Cm", "Fm6", "Fm6", "Cm", "Cm", "Fm6", "Fm6", "Cm", "Cm", "Fm6", "G7b9", "Cm", "Bdim7", "Bbm7", "Eb7", "Ab6", "Bbm7", "Eb7", "Ab6", "Abm6", "Eb6", "Gm7", "C7", "B7", "Bb7", "A7", "", "Ab7", "G7", "Cm", "Cm", "Fm6", "Fm6", "Cm", "Cm", "Fm6", "Fm6", "Cm", "Cm", "Fm6", "G7b9", "Cm", "G7b9"],
  },
  {
      title: 'Easter Parade',
      composer: 'Irving Berlin',
      chords: ["Bbmaj7", "F7", "Bb7", "Ebmaj7", "Cm7", "C#dim7", "Bbmaj7", "F7", "Bbmaj7", "Gm7", "C7", "Cm7", "F7", "Bb7", "Bb7", "Eb6", "Eb6", "Gm7", "C7", "F6", "Eb6", "Dm7", "F7", "Bbmaj7", "F7", "Bb7", "Ebmaj7", "Cm7", "C#dim7", "Bbmaj7", "F7", "Bbmaj7", "Gm7", "C7", "F7", "Bb6", "", "Cm7", "F7"],
  },
  {
      title: 'Easy Does It',
      composer: 'Oliver-Young',
      chords: ["C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Ebdim7", "Dm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "Dm7", "Dm7", "G7", "C6", "A7", "Ab7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "G7", "C6"],
  },
  {
      title: 'Easy Living',
      composer: 'Ralph Rainger',
      chords: ["Fmaj7", "F#dim7", "Gm7", "G#dim7", "Fmaj7", "", "Cm7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Fm7", "Bb7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Bbm7", "Bbm7", "Gm7", "C7", "C7#5", "Fmaj7", "F#dim7", "Gm7", "G#dim7", "Fmaj7", "", "Cm7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Easy Street',
      composer: 'Alan Jones',
      chords: ["Ebmaj7", "C7", "Fm7", "G7b13", "Cm7", "", "Bbm7", "Eb7", "Abm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "F7", "Fm7", "Bb7#5", "Ebmaj7", "C7", "Fm7", "G7b13", "Cm7", "", "Bbm7", "Eb7", "Abm7", "Bb7", "Gm7", "C7", "B7", "Bb7#5", "Ebmaj7", "Ab7", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'Easy To Love',
      composer: 'Cole Porter',
      chords: ["Am7", "Bm7b5", "E7b9", "Am7", "D7", "Gmaj7", "C7", "Bm7", "E7b9", "Am7", "D7", "Gmaj7", "C7", "Bm7", "E7b9", "Am7", "D7", "Gmaj7", "C7", "Bm7", "E7b9", "Am7", "Bm7b5", "E7b9", "Am7", "D7", "Gmaj7", "C7", "Bm7", "E7b9", "Am7", "Cm6", "F7", "Gmaj7", "C7", "Bm7", "Bbdim7", "Am7", "D7", "G6", "Bm7", "E7b9"],
  },
  {
      title: 'Ecaroh',
      composer: 'Horace Silver',
      chords: ["Bb7#5#9", "Eb7#9", "Bb7#5#9", "Eb7#9", "Bb7#5#9", "Eb7#9", "Bb7#5#9", "Eb7#9", "B7#5#9", "E7#9", "B7#5#9", "E7#9", "B7#5#9", "E7#9", "B7#5#9", "E7#9", "Amaj7", "Amaj7", "D7#11", "D7#11", "Dbmaj7", "Dm7", "G7#5#9", "Cmaj7", "Cm7", "F7#5#9", "F#7#9", "G7#9", "E7#9", "F7#9", "D7", "Eb7", "C7", "Db7", "Bb7#9", "Bb7#9", "B7#9", "Ab7#9", "A7#9", "F#7", "G7", "E7", "F7", "D7#9", "Dbmaj7", "Gb7#11", "Dbmaj7", "G7#11", "Gbmaj7", "Gm7", "C7", "F#m7", "B7", "Emaj7", "", "Ebm7", "Ab7", "Abm7", "Db7#9", "Gbmaj7", "A7b5", "Bb7b5", "Ebm7", "Bm7", "E7b9", "Amaj7", "Ab7alt"],
  },
  {
      title: 'Eclypso',
      composer: 'Tommy Flanagan',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "Fm7", "Bb7", "Gm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "C7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Cm7", "F7", "Fm7", "Bb7", "C7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "Fm7", "Bb7", "Gm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "C7"],
  },
  {
      title: 'Eiderdown',
      composer: 'Steve Swallow',
      chords: ["B7alt", "B7alt", "Em7", "Em7", "Cm7", "Cm7", "Gm7", "Gm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Em7b5", "Ebm6", "Dm7", "G7#9", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "B7alt", "B7alt", "Em7", "Em7", "Cm7", "Cm7", "Gm7", "Gm7"],
  },
  {
      title: 'Eighty One',
      composer: 'Ron Carter',
      chords: ["F7sus", "Bb7sus", "F7sus", "F7sus", "Bb7sus", "Bb7sus", "F7sus", "F7sus", "C7sus", "Bb7sus", "F7sus", "F7sus"],
  },
  {
      title: 'El Cajon',
      composer: 'Johnny Mandel',
      chords: ["D7", "", "G7", "C7", "C7", "Cm7", "", "F7", "Bb7sus", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Dm7b5", "G7b9", "C7", "C7", "Cm7", "F7", "Eb7", "D7", "", "G7", "C7", "C7", "Cm7", "", "F7", "Bb7sus", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Dm7b5", "G7b9", "C7", "F7", "Bb6", "F7", "Eb7"],
  },
  {
      title: 'El Gaucho',
      composer: 'Wayne Shorter',
      chords: ["Fmaj7", "Ebmaj7", "Dm7", "Bb7", "B7", "E7#5#9", "Fm7", "Gbmaj7", "Fm7", "Gbmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Cm7", "Dm7", "G7", "Cm7", "Dm7", "Em7", "Em7", "Em7", "Em7", "Em7"],
  },
  {
      title: 'Elora',
      composer: 'J.J. Johnson',
      chords: ["Cm7", "F7", "Bbmaj7", "Ebmaj7", "Dm7", "Db7", "Cm7", "G7b9", "Cm7", "F7", "Bbmaj7", "Dm7b5", "Db7", "Ebmaj7", "Ebm7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Dm7", "Db7", "Cm7", "G7b9", "Cm7", "F7", "Bbmaj7", "Dm7b5", "Db7"],
  },
  {
      title: 'Embraceable You',
      composer: 'George Gershwin',
      chords: ["Gmaj7", "Bbdim7", "Am7", "D7", "Am7", "Cm6", "Gmaj7", "F#m7b5", "B7b9", "Em", "Em", "C#m7b5", "F#7#5", "Bm7", "Em7", "A7", "Dmaj7", "Bm7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Bbdim7", "Am7", "D7", "Am7", "Cm6", "Gmaj7", "Dm7", "G7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "C#m7b5", "Cm6", "Bm7", "E7", "Am7b5", "D7b9", "Gmaj7", "Am7", "D7"],
  },
  {
      title: 'Emily',
      composer: 'Johnny Mandel',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "G7", "Cmaj7", "F7", "Emaj7", "C#m7", "F#m7", "B7b9", "Em7", "A7", "Am7", "D7#5", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "G7", "Cmaj7", "B7", "Em7", "F#7b13", "Bm7", "E7", "Am7", "D7", "Bm7b5", "E7b9", "C#m7b5", "Cm6", "Bm7", "E7b9", "Am7", "D7", "Gmaj7", "D7"],
  },
  {
      title: 'End Of A Love Affair, The',
      composer: 'Edward Redding',
      chords: ["Gm7", "C7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Ab7", "Ebm7", "Ab7", "Dbmaj7", "", "Gm7", "C7", "Fmaj7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Ab7", "Ebm7", "Ab7", "Dbmaj7", "", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bbm6", "Eb7", "Fmaj7", "Abdim7", "Gm7", "F#dim7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Epilogue',
      composer: 'Bill Evans',
      chords: ["Eb", "Eb", "Cm", "C", "Abmaj7", "Eb", "Bb", "Eb", "G7", "", "Cm", "Cm", "Abmaj7", "Gm7", "Csus", "Csus", "Abmaj7", "Abmaj7", "Eb", "Cm7", "Eb", "Gadd9", "Csus", "Csus"],
  },
  {
      title: 'Epistrophy',
      composer: 'Thelonious Monk, Kenny Clarke',
      chords: ["Db7", "D7", "Db7", "D7", "Db7", "D7", "Db7", "D7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Db7", "D7", "Db7", "D7", "Db7", "D7", "Db7", "D7", "F#m6", "F#m6", "F#m6", "F#m6", "B7", "B7", "Db7", "D7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Eb7", "E7", "Db7", "D7", "Db7", "D7", "Db7", "D7", "Db7", "D7"],
  },
  {
      title: 'Equinox',
      composer: 'John Coltrane',
      chords: ["C#m7", "C#m7", "C#m7", "C#m7", "F#m7", "F#m7", "C#m7", "C#m7", "A7#11", "G#7", "C#m7", "C#m7"],
  },
  {
      title: 'Eronel',
      composer: 'Thelonious Monk',
      chords: ["Gmaj7", "Gmaj7", "Bm7", "E7b5", "Bbm", "Bbm", "Eb7#11", "Am7", "Cm7", "F7", "Am7", "Ab7", "G6", "Ab6", "Dm7", "G7#11", "Dm7", "Db9", "G7", "C7", "Cm7", "F7", "Bm7", "Bb7", "Ebmaj7", "Ab7#11", "Gmaj7", "Gmaj7", "Bm7", "E7b5", "Bbm", "Bbm", "Eb7#11", "Am7", "Cm7", "F7", "Am7", "Ab7", "Gmaj7"],
  },
  {
      title: 'Estate',
      composer: 'Bruno Martino',
      chords: ["Bm7", "Bm7", "Em7", "F#7b9", "Bm7", "Bm7", "Em7", "A7", "D7sus", "D7", "Gmaj7", "Gmaj7", "F#7", "F#7#5", "Bmaj7", "Bmaj7", "Fm7b5", "Bb7b9", "Ebm7", "Ab7b9", "Em7", "A7", "D7sus", "D7", "Gmaj7", "Gmaj7", "F#7", "F#7#5"],
  },
  {
      title: 'Eternal Triangle',
      composer: 'Sonny Stitt',
      chords: ["Bbmaj7", "Gm7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "Bm7", "E7", "Bbm7", "Eb7", "Am7", "D7", "Abm7", "Db7", "Gm7", "C7", "F#m7", "B7", "Bbmaj7", "Gm7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bbm7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", ""],
  },
  {
      title: 'Every Time We Say Goodbye',
      composer: 'Cole Porter',
      chords: ["Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Gm7", "Gb7", "Bmaj7", "Emaj7#11", "Bbm7", "Eb7", "Abm7", "Db7", "Ebmaj7", "Gbdim7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gm7", "C7", "Gb7#11", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Gm7", "Gb7", "Bmaj7", "Emaj7#11", "Bbm7", "Eb7", "Abm7", "Db7", "Gm7", "Gbdim7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abm6", "G7", "C7", "Fm7", "Bb7", "Eb6", "Eb6", "Eb6", "Eb6"],
  },
  {
      title: 'Everybody\'s Song But My Own',
      composer: 'Kenny Wheeler',
      chords: ["Fm9", "G7b13", "Cm11", "Ebmaj7", "Am7b5", "D7#9", "Gm11", "Bmaj7", "Dmaj9", "Em7", "Dmaj9", "Em7", "Dmaj9", "C#m7b5", "F#7b9", "Bm11", "Bm9", "G#m7b5", "C#7b9", "F#maj7#11", "Gm11", "Fmaj9", "F#m11", "Fm9", "G7b13", "Cm11", "Ebmaj7", "Am7b5", "D7#9", "Gm11", "Bbmaj7", "Em7b5", "A7#5#9", "Dm11", "Dbmaj7#11", "Cm11", "F#m9", "B13#11", "Bbmaj9", "Bmaj7", "Bbmaj9", "Bmaj7", "Emaj7#11", "Ebm11"],
  },
  {
      title: 'Everything Happens To Me',
      composer: 'Matt Dennis',
      chords: ["Cm7", "F7", "Dm7", "Dbdim7", "Cm7", "F7", "Dm7b5", "G7", "Bdim7", "Cm7", "Ebm7", "Ab7", "Dm7", "G7", "Cm7", "F7", "Dm7", "G7", "Fm7", "Bb7#9", "Ebmaj7", "Cm7", "Fm7", "Bb7b9", "Ebmaj7", "Em7", "A7#9", "Dmaj7", "Gm7", "C7", "Cm7", "F7", "Cm7", "F7", "Dm7", "Dbdim7", "Cm7", "F7", "Dm7b5", "G7", "Bdim7", "Cm7", "Ebm7", "Ab7", "Dm7", "G7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Everything I Have Is Yours',
      composer: 'Burton Lane',
      chords: ["Cmaj7", "Ebm7", "Ab7", "Dm7", "G7", "Dm7", "G7#5", "Cmaj7", "Ebm7", "Ab7", "Dm7", "G7", "Bm7b5", "E7b9", "Am", "Am", "Am7", "D7", "Em7", "A7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Ebm7", "Ab7", "Dm7", "G7", "Dm7", "G7#5", "Cmaj7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am", "Am", "Am7", "D7", "Fm6", "Cmaj7", "Ebm7", "Ab7", "Dm7", "G7", "C6", "", "Dm7", "G7"],
  },
  {
      title: 'Everything I Love',
      composer: 'Cole Porter',
      chords: ["Fmaj7", "B7#11", "Bbmaj7", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "Ab7", "Gm7", "Am7", "D7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "C7", "Fmaj7", "B7#11", "Bbmaj7", "Am7", "D7", "Bm7b5", "E7b9", "A7", "A7", "Dm7", "Dbm7", "Cm7", "F7", "Bbmaj7", "D7#5", "Gm7", "G#dim7", "Am7", "D7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Everything I\'ve Got Belongs To You',
      composer: 'Rodgers-Hart',
      chords: ["Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Cm7", "F7", "Bbmaj7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Bb7", "Eb6", "Bb7", "B", "F#7", "B", "F#7", "B", "Eb", "D7", "Gm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Cm7", "F7", "Bbmaj7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Bb7", "Eb6", "Eb6"],
  },
  {
      title: 'Evidence',
      composer: 'Thelonious Monk',
      chords: ["Ebmaj7", "Gm7", "C7b5b9", "Fm7", "Bb7b5b9", "A7", "Abm7", "Db7", "Fm7", "F7#9#11", "Bbm7", "Eb7#11", "Abmaj7", "Db7", "Cm7", "G7#11", "F13#11", "Bb7b5b9", "Ebmaj7", "Gm7", "C7b5b9", "Fm7", "Bb7b5b9", "A7", "Abm7", "Db7", "Fm7", "F7#9#11"],
  },
  {
      title: 'Exactly Like You',
      composer: 'Jimmy McHugh',
      chords: ["C6", "C6", "D7", "D7", "G7", "G7", "C6", "Dm7", "G7", "Fmaj7", "Bb7", "C6", "Am7", "Dm7", "Fm6", "G7", "Em7", "Ebdim7", "Dm7", "G7", "C6", "C6", "D7", "D7", "G7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Eye of the Hurricane',
      composer: 'Herbie Hancock',
      chords: ["Fm6", "Bb6", "Eb7sus", "Ab7sus", "Dbmaj7", "C7", "", "Gbm7", "Bbm", "", "Eb7#9", "Eb7#9", "Eb7#9", "Eb7#9", "", "Fm7", "Fm7", "Fm6", "Bb6", "Eb7sus", "Ab7sus", "Dbmaj7", "C7", "", "Amaj7#11", "Cmaj7", "", "Eb7#9", "Eb7#9", "Eb7#9", "Eb7#9", "", "", "Fm7", "Fm7"],
  },
  {
      title: 'Fall',
      composer: 'Wayne Shorter',
      chords: ["F#7sus", "B13b9", "E7sus", "Ebmaj7#11", "F#7sus", "B13b9", "E7sus", "Ebmaj7#11", "Dmaj7", "D13b9", "Gm7", "Bm7", "Abmaj7#11", "F#7sus", "B13b9", "Em7", "Cmaj7", "Em7", "Cmaj7"],
  },
  {
      title: 'Falling Grace',
      composer: 'Steve Swallow',
      chords: ["Abmaj7", "Abmaj7", "D7", "Gm7", "Fm7", "Bb7", "Ebmaj7", "D7", "Gm7", "C7", "Fmaj7", "F#m7b5", "B7b13", "Em7", "Am7", "D7", "Gmaj7", "Cm7", "C#dim7", "Bbmaj7", "Ebmaj7", "Em7b5", "A7b13", "Dm7", "Dbm7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Abmaj7", "Dbmaj7"],
  },
  {
      title: 'Falling In Love Again',
      composer: 'Frederick Hollander',
      chords: ["Cmaj7", "C7", "Fmaj7", "Dm7b5", "Cmaj7", "Em7b5", "A7", "Dm7", "G7", "C6", "Dm7", "G7", "E7", "Bm7b5", "E7", "Am7", "Am7", "D7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "Dm7b5", "Cmaj7", "Em7b5", "A7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Falling In Love With Love',
      composer: 'Richard Rodgers',
      chords: ["Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Cm7", "Cm7", "F7", "F7", "Cm7", "Cm7", "F7", "F7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Am7b5", "Am7b5", "D7b9", "D7b9", "Gm7", "Gm7", "C7", "C7", "Cm7", "Cm7", "F7", "F7"],
  },
  {
      title: 'Farmer\'s Trust',
      composer: 'Pat Metheny',
      chords: ["Gmaj7", "Bm7", "G", "G", "", "C#m7", "F#7b9", "F#7b9", "", "F#7b9", "", "Bm", "Bm", "Am7", "D7sus", "D7", "", "F", "G", "F", "", "Cadd9", "Gsus", "G", "G7", "", "Csus", "C", "C", "", "Em7", "", "C", "C", "Ab", "Bb", "Bb", "", "Db", "", "Eb", "Db", "Abadd9", "G7#5#9", "Gb69", "Gm7b5", "", "C7b9", "C7b9", "Fm9", "Cm9", "Gm11", "Abmaj7", "", "Ab7", "Ab7", "Csus", "", "C", "C", "Abmaj7", "", "Bb", "Bb", "Csus", "C", "C", "D", "", "Csus", "", "C", "C", "Abmaj7", "", "Bb", "Bb", "Csus", "", "C", "C", "C"],
  },
  {
      title: 'Fascinating Rhythm',
      composer: 'George Gershwin',
      chords: ["Fm", "Fm", "Dm7b5", "Db7", "Fm", "Bdim7", "Bb7", "", "Fm", "C7", "Fm", "Fm", "Dm7b5", "Db7", "Fm", "C7b13", "F6", "Cm", "Cm", "Am7b5", "Ab7", "Cm", "F#dim7", "F7", "", "Cm", "G7", "Cm", "Cm", "Am7b5", "Fm", "G7", "C7", "C7", "", "C7", "", "C7", "", "C7", "", "F7", "", "F7", "", "F7", "", "F7", "", "Bb6", "Gm7", "C7", "F6", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "C7"],
  },
  {
      title: 'Fascination',
      composer: 'Fernando-Dante Marchetti',
      chords: ["C6", "Ebdim7", "Cmaj7", "Cmaj7", "Cmaj7", "Ebdim7", "Dm7", "G7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Ab7", "G7", "C6", "Ebdim7", "Cmaj7", "Cmaj7", "Cmaj7", "Ebdim7", "Dm7", "G7", "Dm7", "Dm7", "G7", "G7", "Dm7", "G7", "C6", "G7sus"],
  },
  {
      title: 'Favela',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Gm7", "F", "Gm7", "F", "Gm7", "F", "Gm7", "Gm7", "Cm7", "F7", "Bbmaj7", "Bb7", "Em7b5", "Ebm6", "Gm7", "Dm7", "Gm7", "Gm7", "Cm7", "Gm7", "Cm7", "Gm7", "Cm7", "Gm7", "Eb7#9", "D7#9", "C7#9", "Gm7", "F", "Gm7", "F", "Gm7", "F", "Gm7", "Gm7", "Cm7", "F7", "Bbmaj7", "Bb7", "Em7b5", "Ebm6", "Gm7", "Dm7", "Gm7", "Gm7"],
  },
  {
      title: 'Fee-Fi-Fo-Fum',
      composer: 'Wayne Shorter',
      chords: ["Eb7", "D7#9", "Gm7", "Abmaj7", "Bmaj7", "D7", "Dm7", "G7", "Eb7", "D7#9", "Gm7", "Abmaj7", "C7", "F7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bbm7", "Eb7", "Am7", "D7", "Eb7", "D7#9", "Gm7", "Abmaj7", "Bmaj7", "D7", "Dm7", "G7", "Eb7", "D7#9", "Dbmaj7", "C7", "Bmaj7", "Bmaj7"],
  },
  {
      title: 'Feel Like Makin\' Love',
      composer: 'Eugene McDaniels',
      chords: ["Fm7", "Bb7sus", "Ebmaj7", "Db7", "C7", "Fm7", "Bb7sus", "Ebmaj7", "A7#11", "Abmaj7", "Gm7", "Fm7", "Cm7", "Abmaj7", "Gm7", "Db7", "Cm7", "", "Eb7", "E7", "F7"],
  },
  {
      title: 'Feels So Good',
      composer: 'Chuck Mangione',
      chords: ["F", "C", "Dm7", "Gm7", "C7", "C7", "Am7", "Dm7", "Gm7", "Em7b5", "A7#9", "Dm7", "Ebmaj9", "Dm7", "Ebmaj9", "F", "Ebmaj9", "Dm7", "Dm", "Bbmaj7", "F", "Gm7", "Gm", "Am", "Bb", "Bdim", "C7sus", "F", "D7", "Gm7", "C7", "F", "D7", "Gm7", "C9sus"],
  },
  {
      title: 'Fever',
      composer: 'Davenport-Cooley',
      chords: ["Am", "Am", "Am", "Am", "Am", "Am", "E7", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "E7", "Am", "E7", "Am", "E7", "Am", "E7", "Am", "E7", "Am"],
  },
  {
      title: 'Fine And Dandy',
      composer: 'Kay Swift',
      chords: ["Fmaj7", "Abdim7", "Gm7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "F7", "F7", "Bb7", "Bb7", "Eb7", "Eb7", "Ab7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Fine And Mellow',
      composer: 'Billie Holiday',
      chords: ["F7", "Bb7", "F7", "F7", "Bb7", "Bb7", "F7", "F7", "C7", "Db7", "C7", "F7", "C7"],
  },
  {
      title: 'Firm Roots',
      composer: 'Cedar Walton',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Fm7", "Gm7", "Am7", "Bbm7", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "F7sus", "F7sus", "F7sus", "F7sus"],
  },
  {
      title: 'Five Brothers',
      composer: 'Gerry Mulligan',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Cmaj7", "Eb7", "Dm7", "G7", "Emaj7", "Fm7", "Bb7", "Ebmaj7", "Em7", "A7", "Dmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dm7", "Db7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Dm7", "Db7", "Cmaj7"],
  },
  {
      title: 'Flamenco Sketches',
      composer: 'Davis-Evans',
      chords: ["Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "D", "Ebmaj7", "D", "Ebmaj7", "D", "Ebmaj7", "D", "Ebmaj7", "D", "Ebmaj7", "D", "Ebmaj7", "D", "Ebmaj7", "D", "Ebmaj7", "Gm7", "Gm7", "Gm7", "Gm7"],
  },
  {
      title: 'Flamingo',
      composer: 'Ted Grouya',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Fm7", "Bb7", "Db7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Bbm7", "Eb7", "Abmaj7", "Adim7", "Bbm7", "Eb7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fm7", "Bb7", "Db7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Flat Foot Floogee',
      composer: 'Gaillard-Stuart-Green',
      chords: ["F6", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "F7", "Bb", "Bdim7", "F", "C7", "F6", "C7", "F7", "F7", "Bb6", "Bb6", "G7", "G7", "C6", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "F7", "Bb", "Bdim7", "F", "C7", "F6", "C7"],
  },
  {
      title: 'Flintstones',
      composer: 'Hoyt Curtain',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Bb7", "Eb7", "Ab7", "Bb6", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Bb7", "Eb7", "Ab7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Fly Me To The Moon',
      composer: 'Bart Howard',
      chords: ["Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "A7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Bm7b5", "E7b9", "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C6", "Bm7b5", "E7b9"],
  },
  {
      title: 'Flying Home',
      composer: 'Goodman-Hampton',
      chords: ["Eb", "Eb", "Cm7", "", "B7", "Bb7", "Eb", "Eb", "Cm7", "", "B7", "Bb7", "Eb", "Eb", "Cm7", "", "B7", "Bb7", "Eb6", "Bb7", "Eb7", "Eb7", "Ab7", "Ab7", "F7", "F7", "Bb7", "Bb7", "Eb", "Eb", "Cm7", "", "B7", "Bb7", "Eb", "Eb", "Cm7", "", "B7", "Bb7", "Eb", "Eb", "Cm7", "", "B7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'Folks Who Live On The Hill, The',
      composer: 'Jerome Kern',
      chords: ["Cmaj7", "C#dim7", "Dm7", "G7", "Em7", "Ebdim7", "Dm7", "Am7", "G7", "Am7", "Dm7", "G7", "E7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "Em7", "F#m7b5", "B7b9", "Em", "Em", "Em7", "", "A7", "D7", "G6", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "C#dim7", "Dm7", "G7", "Em7", "Ebdim7", "Dm7", "Am7", "G7", "Am7", "Dm7", "G7", "E7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Fools Rush In',
      composer: 'Rube Bloom',
      chords: ["Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "A7b9", "Dm7", "G7", "C6", "Am7", "D7#11", "D7#11", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7", "Fm6", "Cmaj7", "Am7", "Dm7", "G7", "C6", "Em7", "A7"],
  },
  {
      title: 'Footprints',
      composer: 'Wayne Shorter',
      chords: ["Cm11", "Cm11", "Cm11", "Cm11", "Cm11", "Cm11", "Cm11", "Cm11", "Fm11", "Fm11", "Fm11", "Fm11", "Cm11", "Cm11", "Cm11", "Cm11", "F#m7b5", "F7#11", "E7alt", "A7alt", "Cm11", "Cm11", "Cm11", "Cm11"],
  },
  {
      title: 'For All We Know',
      composer: 'Fred Coots',
      chords: ["Eb6", "F7", "Fm7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7b5", "C7b13", "Fm7", "Abm7", "Db7", "Ebmaj7", "Gbdim7", "Fm7", "Bb7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "F7", "Fm7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7b5", "C7b13", "Fm7", "Abm7", "Db7", "Ebmaj7", "Am7", "D7", "G7", "Db7#11", "C7sus", "C7", "Fm7", "B7#11", "Bb7sus", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'For Heaven\'s Sake',
      composer: 'Edwards-Meyer-Bretton',
      chords: ["Bbm7", "Eb7", "Am7", "Dm7", "Gm7b5", "C7b9", "Fmaj7", "F7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7sus", "F6", "Ebm7", "Ab7", "Dbmaj7", "Bb7", "Ebm7", "Ab7", "Dbmaj7", "Fm6", "Dm7b5", "Gm7b5", "C7", "Fm7", "", "Bbm7", "Bbm7", "Gm7", "C7", "Bbm7", "Eb7", "Am7", "Dm7", "Gm7b5", "C7b9", "Fmaj7", "F7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7sus", "F6"],
  },
  {
      title: 'For Jan',
      composer: 'Kenny Wheeler',
      chords: ["Bbmaj7#11", "E7alt", "A7b9b13", "Dm9", "E7b9b13", "E7b9b13", "Am7", "Fmaj7#11", "Bbmaj7#11", "E7alt", "A7b9b13", "Ab7#5", "C", "E7b13", "Am7", "B7#5#9", "Em11", "Dm11", "Cm11", "Bbmaj7#11", "E7alt", "E7alt", "Amaj7", "Amaj7"],
  },
  {
      title: 'For Minors Only',
      composer: 'Jimmy Heath',
      chords: ["Cm7", "G7b9", "Cm7", "G7b9", "Cm7", "G7b9", "Cm7", "C7b13", "Fm7", "C7b9", "Fm7", "C7b9", "Fm7", "C7b9", "Fm7", "C7b9", "Dm7", "G7", "Ebm7", "Ab7", "Dm7", "G7", "Cm7", "Cm7", "Ab7", "G7b13", "Cm7", "G7#11"],
  },
  {
      title: 'For Once In My Life',
      composer: 'Orlando Murden',
      chords: ["Bb", "Bbaug", "Bb6", "Bdim7", "Cm", "G7", "Cm", "G7", "Cm", "Cmb6", "Cm6", "F7", "Bb6", "F7", "Bb6", "D7", "Gm", "Gm", "Fm7", "Bb7#5", "Eb6", "Gm7", "Cm7", "F7", "Dm7", "Gm7", "C7", "F7#5", "Bb", "Bbaug", "Bb6", "Bdim7", "Cm", "G7", "Cm", "G7", "Cm", "Cmb6", "Cm6", "F7", "Bb6", "F7", "Bb6", "D7", "Gm", "Gm", "Fm7", "Bb7#5", "Eb6", "C7#11", "Bb", "Gm7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'For Sentimental Reasons',
      composer: 'William Best',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "A7", "D7", "G7", "C7", "Bbmaj7", "", "Bm7b5", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "D7", "Gm7", "C7"],
  },
  {
      title: 'For You, For Me, For Evermore',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab6", "Cm7", "F7", "B7", "Bb7#5", "Bb7", "Ebmaj7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Bbm7", "Eb7", "Ab6", "Db7", "Ebmaj7", "", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "F7", "Fm7", "Eb6", "Bb7", "Eb6", "F7", "Bb7"],
  },
  {
      title: 'Forest Flower',
      composer: 'Charles Lloyd',
      chords: ["Amaj7", "Amaj7", "Gmaj7", "Gmaj7", "Cmaj7", "Cmaj7", "Bbmaj7", "Bbmaj7", "Dbm7", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7", "Cm7", "B7#9", "Bbmaj7", "Bbmaj7", "Cm7", "Bb7", "Ebmaj7", "Ebmaj7", "Bb7", "Ab7#11", "Gbmaj7", "Gbmaj7", "Gbm7", "Am7", "Cm7", "Ebm7", "C6", "C6"],
  },
  {
      title: 'Forever Sonny',
      composer: 'Jimmy Heath',
      chords: ["Gm7", "Em7b5", "Eb7", "Dm7", "Gm7", "Cm7", "F7#5", "Bb7", "Eb7", "Ab7", "Dm7", "Gm7", "Cm7", "D7#9", "D7#9", "D7#9", "G7", "G7", "C7#9", "C7#9", "F7", "F7", "D7#9", "Gm7", "Em7b5", "Eb7", "Dm7", "Gm7", "Cm7", "F7#5", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bbmaj7", "D7#9"],
  },
  {
      title: 'Four',
      composer: 'Miles Davis',
      chords: ["Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Fm7", "Fm7", "Abm7", "Db7", "Ebmaj7", "F#m7", "B7", "Fm7", "Bb7", "Ebmaj7", "F#m7", "B7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Fm7", "Fm7", "Abm7", "Db7", "Ebmaj7", "F#m7", "B7", "Fm7", "Bb7", "Gm7", "Gbm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7"],
  },
  {
      title: 'Four Brothers',
      composer: 'Jimmy Giuffre',
      chords: ["Bb7", "Bbm7", "Eb7#5", "Abmaj7", "F7", "Bbm7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "F7", "C#m7", "F#7", "Bmaj7", "Em7", "A7", "Dmaj7", "Dm7", "G7", "Cmaj7", "C#dim7", "Dm7", "G7", "Cm7", "F7", "Bb7", "Bbm7", "Eb7#5", "Abmaj7", "F7", "Bbm7", "Cm7", "F7", "Bbm7", "Eb7", "Ab6"],
  },
  {
      title: 'Four In One',
      composer: 'Thelonious Monk',
      chords: ["Eb6", "G7", "C7", "C7", "F7", "Bb7", "Eb6", "Eb6", "", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bm7", "E7", "Eb7", "Cm7", "F7", "E7", "E7", "B7", "Fm7", "Bb7", "Eb6", "G7", "C7", "C7", "F7", "Bb7", "Eb6", "Eb6", ""],
  },
  {
      title: 'Four On Six',
      composer: 'Wes Montgomery',
      chords: ["Gm7", "Gm7", "Gm7", "Gm7", "Cm7", "F7", "Bbm7", "Eb7", "Am7", "D7", "Ebm7", "Ab7", "Gm7", "Gm7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Eb7", "D7", "Gm7", "Am7b5", "D7b9"],
  },
  {
      title: 'Fran Dance',
      composer: 'Miles Davis',
      chords: ["Bb7", "Ab7", "G7sus", "C7", "F7", "F7", "Cm7", "F7", "Bb6", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Bb6", "Bb6", "Bb7", "Ab7", "G7sus", "C7", "F7", "F7", "Cm7", "F7", "Bb6", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'Freckle Face',
      composer: 'Sammy Nestico',
      chords: ["Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Fm7", "Bb7", "Eb6", "D7", "Gm7", "C9", "Cm7", "Fm7", "Dbdim7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7b9", "Dm7b5", "G7b9", "Cm7", "Ebm7", "Dm7", "Dbdim7", "Cm7", "F7", "Bb6", "Bbdim7", "Bb6", "Dbdim7"],
  },
  {
      title: 'Freddie Freeloader',
      composer: 'Miles Davis',
      chords: ["Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "F7", "Eb7", "Ab7", "Ab7"],
  },
  {
      title: 'Freight Train',
      composer: 'Tommy Flanagan',
      chords: ["Abmaj7", "Gm7b5", "C7b9", "Fm7", "Em7", "Ebm7", "Ab7", "Dbmaj7", "Dbm7", "Gb7", "Cm7", "F7", "Bm7", "E7", "Bbm7", "Eb7", "Cm7", "F7", "Bbm7", "Eb7"],
  },
  {
      title: 'Frenesi',
      composer: 'Alberto Dominguez',
      chords: ["Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Cmaj7", "Db9#11", "Cmaj7", "Cmaj7", "Cmaj7", "Bbm7", "Eb7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7"],
  },
  {
      title: 'Friday The 13th',
      composer: 'Thelonious Monk',
      chords: ["Gmaj7", "F7", "Eb7", "D7", "Gmaj7", "F7", "Eb7", "D7", "Gmaj7", "F7", "Eb7", "D7", "Gmaj7", "F7", "Eb7", "D7"],
  },
  {
      title: 'Frim Fram Sauce, The',
      composer: 'Joe Richardel',
      chords: ["Bb6", "Bb6", "C7", "C7", "Eb6", "Edim7", "Bb", "G7", "C7", "F7", "Bb6", "F7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Gm7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7", "Cm7", "F7", "Bb6", "Bb6", "C7", "C7", "Eb6", "Edim7", "Bb", "G7", "C7", "F7", "Bb6", "F7"],
  },
  {
      title: 'From This Moment On',
      composer: 'Cole Porter',
      chords: ["Fm6", "Fm6", "Gm7b5", "C7b9", "Db", "Fm7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Gb7#11", "Gb7#11", "Abmaj7", "Abmaj7", "Gm7b5", "C7b9", "Dbmaj7", "Dbmaj7", "Dbm7", "Gb7", "Ab6", "Ab6", "Cm7", "F7", "Eb6", "C7b9", "Fm7", "Bb7", "Bbm7", "Eb7", "Db7", "C7#9", "Abmaj7", "Db7", "Cm7", "F7", "Bbm7", "Eb7", "Ab6", "Ab6"],
  },
  {
      title: 'Full House',
      composer: 'Wes Montgomery',
      chords: ["Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "C7#9", "Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "Fm9", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gbmaj7", "Bmaj7", "Gm7b5", "C7b5b9", "Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "C7#9", "Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "Bb13", "Fm9", "Fm9"],
  },
  {
      title: 'Funk In Deep Freeze',
      composer: 'Hank Mobley',
      chords: ["Fm7", "Db7", "Gm7b5", "C7b9", "Fm7", "B7", "Bb7", "Eb7", "Ab7", "Db7", "Gm7b5", "C7b9", "Cm7", "F7b9", "Bbmaj7", "Bbmaj7", "Ebm7", "Ab7", "Dbmaj7", "C7b9", "Fm7", "Db7", "Gm7b5", "C7b9", "Fm7", "B7", "Bb7", "Eb7", "Ab7", "Db7", "Gm7b5", "C7b9", "Fm69"],
  },
  {
      title: 'Funkallero',
      composer: 'Bill Evans',
      chords: ["D7", "G7b13", "Cm", "Cm", "D7", "G7b13", "Cm", "Cm", "Bbm7", "Eb7", "Abmaj7", "Db7", "Cm7", "D7", "G7b13", "Cm", "Cm"],
  },
  {
      title: 'Gallop\'s Gallop',
      composer: 'Thelonious Monk',
      chords: ["D7sus", "D7", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Bbm7", "Eb7", "Bbm7b5", "Eb7", "Abmaj7", "Bbm7b5", "Bm7", "E7", "Bbm7", "Eb7", "Ab7sus", "Ab7", "Dbmaj7", "Dbmaj7", "Bbm7b5", "Bbm7b5", "Eb7", "Eb7", "Eb7", "Eb7", "D7sus", "D7", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Bbm7", "Eb7", "Bbm7b5", "Eb7", "Abmaj7", "Cm7b5", "B7", "E", "A7", "", "Abmaj7"],
  },
  {
      title: 'Gary\'s Notebook',
      composer: 'Lee Morgan',
      chords: ["Cm7", "Db7#11", "Cm7", "Db7#11", "Cm7", "Db7#11", "Cm7", "Db7#11", "Cm7", "Db7#11", "Cm7", "Db7#11", "Fm6", "Gb7#11", "Fm6", "Fm6", "Cm7", "Db7#11", "Cm7", "Cm7", "Ebm7", "Ab7", "Dm7", "G7#9", "Cm7", "Db7#11", "Cm7", "Db7#11"],
  },
  {
      title: 'Gee Baby, Ain\'t I Good To You',
      composer: 'Don Redman',
      chords: ["C7", "Ab7", "G7", "C7", "F7", "Bb7", "Eb6", "G7", "C7", "Ab7", "G7", "C7", "F7", "Bb7", "Eb6", "Eb7", "Ab6", "Adim7", "Eb6", "Eb7", "Ab6", "Adim7", "Dm7b5", "G7", "C7", "Ab7", "G7", "C7", "F7", "Bb7", "Eb6", "", "Ab7", "G7"],
  },
  {
      title: 'Gentle Rain, The',
      composer: 'Luiz Bonfa',
      chords: ["Am6", "Am6", "E7b9", "E7b9", "Gm6", "", "C7", "", "F6", "F6", "F#m7b5", "B7b9", "Em7b5", "A7b9", "Dm7b5", "Bm7b5", "E7b9", "Am6", "Bb7#11"],
  },
  {
      title: 'Gentle Wind And Falling Tear',
      composer: 'Gary Burton',
      chords: ["Fm7", "C7#9", "Fm7", "B13", "Dmaj7", "Fmaj7", "Ebmaj7", "", "Em7b5", "A7", "Dm7", "C7", "Fmaj7", "", "F13", "A7", "Ab6", "G7", "Gbmaj7#11", "Fm7", "Bbm7", "Abmaj7", "Gbmaj7", "Fm7", "Bbm7", "Gb6", "Ebm7", "Cm7", "Dbmaj7", "B7#11", "Bbm7", "Eb7", "Abm7", "Db7", "Gm7b5", "C7#9"],
  },
  {
      title: 'Georgia On My Mind',
      composer: 'Hoagy Carmichael',
      chords: ["Fmaj7", "Em7b5", "A7b9", "Dm", "Dm", "G", "", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7#5", "Dm", "A7b9", "Dm", "Bb7", "Dm", "A7b9", "Dm", "G7", "Dm", "A7b9", "Dm", "", "Bm7b5", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm", "Dm", "G", "", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Get Happy',
      composer: 'Harold Arlen',
      chords: ["F6", "Dm7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "F7", "Bb6", "Bdim7", "F6", "C7", "F6", "F7", "Bb6", "Gm7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Bb7", "Eb6", "Edim7", "Bb6", "F7", "Bb6", "Cm7", "F7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "Cm7", "F7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "F7", "Bb6", "Bdim7", "F6", "C7", "F6", "C7"],
  },
  {
      title: 'Get Me To The Church On Time',
      composer: 'Alan Lerner',
      chords: ["G6", "G6", "G6", "G6", "G6", "G6", "G6", "G6", "Am7", "D7", "Am7", "D7", "Am7", "D7", "G6", "G6", "Cmaj7", "Cmaj7", "Gmaj7", "Gmaj7", "A7", "A7", "Am7", "D7", "Am7", "D7", "Bm7", "E7", "Am7", "Cm7", "F7", "Bm7", "E7#9", "Am7", "D7", "Bm7", "E7#9", "Am7", "D7", "G6", "G6"],
  },
  {
      title: 'Get Out Of Town',
      composer: 'Cole Porter',
      chords: ["Gm", "Gm", "Gm6", "Gm6", "Gm6", "Gm6", "Dm7b5", "G7b9", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "Em7b5", "A7b9", "Am7b5", "D7b9", "Gm", "Gm", "Gm6", "Gm6", "Gm6", "Gm6", "Dm7b5", "G7b9", "Cm7", "Ebm7", "Ab7", "Bbmaj7", "Eb7", "Dm7b5", "G7b9", "Cm7", "Cm7b5", "F7b9", "Bb6", "Am7b5", "D7b9"],
  },
  {
      title: 'Giant Steps',
      composer: 'John Coltrane',
      chords: ["Bmaj7", "D7", "Gmaj7", "Bb7", "Ebmaj7", "Am7", "D7", "Gmaj7", "Bb7", "Ebmaj7", "F#7", "Bmaj7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "Gmaj7", "C#m7", "F#7", "Bmaj7", "Fm7", "Bb7", "Ebmaj7", "C#m7", "F#7"],
  },
  {
      title: 'Girl From Ipanema, The',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Fmaj7", "Fmaj7", "G7#11", "G7#11", "Gm7", "Gb7#11", "Fmaj7", "Gb7", "F#maj7", "F#maj7", "B7", "B7", "F#m7", "F#m7", "D7", "D7", "Gm7", "Gm7", "Eb7", "Eb7", "Am7", "D7b5b9", "Gm7", "C7b5b9", "Fmaj7", "Fmaj7", "G7#11", "G7#11", "Gm7", "Gb7#11", "Fmaj7", "Gb7"],
  },
  {
      title: 'Girl Talk',
      composer: 'Neal Hefti',
      chords: ["Fmaj7", "B7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "Am7", "Bb6", "C7", "Fm7", "Bbm7", "G7b9#11", "C7", "Am7", "D7", "Am7b5", "Bbm7", "Cm6", "D7", "G7sus", "G7", "C7", "Bbm7", "Am7", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Give Me The Simple Life',
      composer: 'Rube Bloom',
      chords: ["Fm7", "Bb7", "Gm7", "C7", "Dm7b5", "G7b13", "Cm7", "Cm7", "Am7b5", "Abm6", "Eb6", "Gbdim7", "Fm7", "C7", "F7", "C7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "F7", "Bb7", "Fm7", "Bb7", "Gm7", "C7", "Dm7b5", "G7b13", "Cm7", "Cm7", "Am7b5", "Abm6", "Eb6", "Gbdim7", "Fm7", "Bb7", "Eb6", "C7"],
  },
  {
      title: 'Glad To Be Unhappy',
      composer: 'Rodgers-Hart',
      chords: ["Gm7", "Eb7", "C7", "C7", "Gm7", "Eb7", "C7", "F6", "F7", "Bbmaj7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "Bbmaj7", "Bm7", "E7", "", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "Eb7", "C7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Gloria\'s Step',
      composer: 'Scott LaFaro',
      chords: ["Fmaj7", "Ebmaj7", "Dmaj7", "Dbmaj7", "C7#9", "Fm7", "Fmaj7", "Ebmaj7", "Dmaj7", "Dbmaj7", "C7#9", "Fm7", "Em7", "Fmaj7", "Am7", "Em7b5", "Gm7b5", "Dm7b5", "Fm7b5", "Bbm7b5", "Eb7#5#9", "Eb7#5#9"],
  },
  {
      title: 'Glory Of Love, The',
      composer: 'Billy Hill',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "G7", "Cmaj7", "Cm6", "Bm7", "Em7", "Am7", "D7", "G6", "Em7", "Am7", "D7", "Cmaj7", "Cmaj7", "Gmaj7", "Gdim7", "Gmaj7", "G7", "Cm7", "Cm7", "A7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "G7", "Cmaj7", "Cm6", "Bm7", "Em7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'God Bless The Child',
      composer: 'Herzog-Holiday',
      chords: ["Eb", "Eb7", "Ab6", "", "Eb", "Eb7", "Ab6", "", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Abm6", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7", "Cm", "Cm", "Cm7", "Cm6", "Gm7", "Dm7b5", "G7b9", "Cm", "Cm", "Cm7", "Cm6", "Gm7", "C7", "Fm7", "Bb7", "Eb", "Eb7", "Ab6", "", "Eb", "Eb7", "Ab6", "", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Abm6", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Godchild',
      composer: 'George Wallington',
      chords: ["Abmaj7", "Bbm7", "Bdim7", "Ebm7", "Ab7", "Dbm7", "Gb7", "Cm7", "Bm7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Cmaj7", "Dm7", "G7", "Cmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Bdim7", "Ebm7", "Ab7", "Dbm7", "Gb7", "Cm7", "Bm7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7"],
  },
  {
      title: 'Golden Earring',
      composer: 'Jay Livingston',
      chords: ["Cm", "G7", "Cm", "Cm7", "Am7b5", "Ab7", "Dm7b5", "G7b9", "Cm", "D7", "G7", "Ab7", "G7b9", "Cm", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Am7b5", "Ab7", "G7sus", "G7", "Cm", "G7", "Cm", "Cm7", "Am7b5", "Ab7", "G7b9", "Cm", "D7", "G7", "Ab7", "G7b9", "Cm"],
  },
  {
      title: 'Gone With The Wind',
      composer: 'Allie Wrubel',
      chords: ["Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "G6", "E7", "Am7", "D7", "Gmaj7", "Gm", "F#dim7", "Fm7", "Bb7", "Ebmaj7", "D7#5", "Db7", "C7b9", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "G6", "E7", "Am7", "D7", "Gmaj7", "Fm7", "Cm7", "Fm7", "Bb7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Gm7b5", "C7"],
  },
  {
      title: 'Good Bait',
      composer: 'Tadd Dameron',
      chords: ["Bb6", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bbmaj7", "Bb7", "Ebmaj7", "Ab7", "Dm", "Db7", "Cm", "B7", "Bb6", "F7alt", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Db7", "Gm", "Gb7", "Fm", "E7", "Eb6", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bbmaj7", "Bb7", "Ebmaj7", "Ab7", "Dm", "Db7", "Cm", "B7", "Bb6", "F7alt"],
  },
  {
      title: 'Good Life, The',
      composer: 'Sacha Distel',
      chords: ["Abmaj7", "Abmaj7", "Gm7b5", "C7#9", "Fm7", "Fm6", "Cm11", "F9", "Bbm7", "Gb7", "Abmaj7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Gm7b5", "C7#9", "Fm7", "Fm7", "Cm11", "F9", "Bbm7", "Gb7", "Abmaj7", "F7b9", "Bbm7", "Eb7sus", "Eb7b9", "Ab6", "Bbm7", "Eb7"],
  },
  {
      title: 'Good Morning Heartache',
      composer: 'Drake-Fisher-Higginbotham',
      chords: ["Cm", "Cmb6", "Cm6", "Cm7", "Fmaj7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "Bbm", "Am7", "Abm7", "Gm7", "C7#9", "F6", "Em7b5", "A7#9", "Dm6", "Em7", "A7", "Dmaj7", "Dm7", "G7#9", "Cmaj7", "Dbm7", "Gb7", "Cm7", "F7", "Cm", "Cmb6", "Cm6", "Cm7", "Fmaj7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "Bbm", "Am7", "Abm7", "Gm7", "C7#9", "F6"],
  },
  {
      title: 'Goodbye',
      composer: 'Gordon Jenkins',
      chords: ["Ab7#11", "Ab7#11", "G7b13", "Ab7#11", "G7b13", "Cm7", "Cm7", "Am7b5", "Ab7#11", "Cm7", "Ab7", "G7b9", "Cm7", "Dm7b5", "Ab7#11", "G7b13", "Db7#11", "Cmaj7", "Dm7b5", "G7b9", "Dm7", "G7", "C6", "C6", "Fm7", "Bb7", "Ebmaj7", "Dm7b5", "G7b9"],
  },
  {
      title: 'Goodbye Pork Pie Hat',
      composer: 'Charles Mingus',
      chords: ["Eb7#9", "B13", "Emaj9", "A7#11", "Db9sus", "B13", "Db9sus", "Eb7", "Abm7", "B13", "Fm7b5", "Bb7#5#9", "C13#11", "F13", "B7", "Emaj7", "A13", "Ab7", "Bb7", "Db7", "Eb7#9", "B7", "Emaj7#11", "A9#11", "Ebm", "Abm7", "Ebm", "Abm7", "Ebm", "Abm7", "Ebm", "A7#5", "Abm", "Abm6", "B7", "Bb7b13", "Ebm", "Ab7", "Ebm", "Ab7", "Cm7b5", "F7#5#9", "F#m7", "", "Bm7", "Bb7", "Ebm", "Ab7", "Ebm", "Ab7", "Emaj7#11", "A7#11", "Eb7#9", "Emaj7", "Ebm"],
  },
  {
      title: 'Got A Match?',
      composer: 'Chick Corea',
      chords: ["Dm7", "A7", "Dm7", "G7", "Gm7", "D7", "Gm7", "C7", "Em7", "A7", "Fm7", "Bb7", "Ebmaj7", "Em7", "A7", "Dm7", "Em7b5", "A7#9", "Dm7", "A7"],
  },
  {
      title: 'Grand Central',
      composer: 'John Coltrane',
      chords: ["Fm7", "Bbm7", "Eb7", "Abm7", "Db7", "F#m7", "B7", "Bbm7", "B7#11", "Bbm7", "B7#11", "F#m7", "B7", "F#m7", "B7", "F#m7", "B7", "F#m7", "B7", "F#m7", "B7", "F#m7", "B7", "Bbm7", "E7", "Amaj7", "C7", "Fm7", "Bbm7", "Eb7", "Abm7", "Db7", "F#m7", "B7", "Bbm7", "B7#11", "Bbm7", "B7#11", "Bbm7", "B7#11", "Bbm7", "Bbm7"],
  },
  {
      title: 'Gravy Waltz, The',
      composer: 'Ray Brown',
      chords: ["C", "F", "Dm7", "G7", "C", "C", "F", "Dm7", "G7", "C", "F7", "C", "C7", "F7", "C", "C7", "F7", "C", "A7", "D7", "G7", "C", "F", "Dm7", "G7", "C", "C", "F", "Dm7", "G7", "C"],
  },
  {
      title: 'Green Chimneys',
      composer: 'Thelonious Monk',
      chords: ["Abm", "Abm", "Abm", "Abm", "Abm", "Abm", "Abm", "Abm", "F#7", "F#7", "B7", "F#7", "F#7", "B7", "F#7", "F#7", "B7", "F#7", "F#7", "B7", "Abm", "Abm", "Abm", "Abm", "Abm", "Abm", "Abm", "Abm"],
  },
  {
      title: 'Gregory Is Here',
      composer: 'Horace Silver',
      chords: ["B9#11", "B9#11", "Cm11", "Cm11", "B9#11", "B9#11", "Cm11", "Cm11", "Am7b5", "D7b9", "Gm7", "C7", "Cm11", "B7#9", "Bbmaj7", "Bbmaj7", "Ebm7", "Ab7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Cm11", "", "B9#11", "B9#11", "Cm11", "Cm11", "B9#11", "B9#11", "Cm11", "Cm11", "Am7b5", "D7b9", "Gm7", "C7", "Cm11", "B7#9", "Bbmaj7", "Bbmaj7"],
  },
  {
      title: 'Groovin\' High',
      composer: 'Dizzy Gillespie',
      chords: ["Ebmaj7", "Ebmaj7", "Am7", "D7", "Ebmaj7", "Ebmaj7", "Gm7", "C7", "F7", "F7", "Fm7", "Bb7", "Gm7", "F#m7", "Fm7", "Bb7"],
  },
  {
      title: 'H & H',
      composer: 'Pat Metheny',
      chords: ["B", "E", "A", "Ab", "Db", "G", "Csus", "C", "D", "", "E", "", "A", "D", "D", "G", "F#", "B", "C", "F", "C", "G", "D", "G", "Ab", "Eb", "D", "A", "D", "A", "F#", "B7", "E7", "B7", "F#m7", "B7", "E7", "Fdim7", "B7", "D#m7", "G#7", "C#m7", "F#7", "B7", "G#7", "C#m7", "F#7", "D", "A", "D", "A", "D"],
  },
  {
      title: 'Hackensack',
      composer: 'Thelonious Monk',
      chords: ["F6", "Bb7", "F6", "Am7", "D7", "Gm7", "C7", "F6", "C7", "Bb7", "Bdim7", "F6", "Am7", "D7", "G7", "G7", "C7", "Db7", "F6", "Bb7", "F6", "Am7", "D7", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'Half Nelson',
      composer: 'Miles Davis',
      chords: ["Cmaj7", "Cmaj7", "Fm7", "Bb7", "Cmaj7", "Cmaj7", "Bm7", "E7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Ebmaj7", "Abmaj7", "Dbmaj7"],
  },
  {
      title: 'Hallelujah I Love Her So',
      composer: 'Ray Charles',
      chords: ["Bb", "Bb", "Eb", "", "Edim", "F7", "Bb", "Bb", "Eb", "", "Edim", "F7", "Bb", "Bb7", "Eb", "Edim7", "Bb", "D7", "Gm", "Eb7", "C7", "F7sus", "Bb", "Eb6", "Edim7", "Bb", "Bb7", "Eb9", "Db9", "C7", "F7", "Bb", "Bb", "Eb", "Edim", "F7", "", "Bb", "Bb", "Eb", "Edim", "F7", "", "Bb", "Bb7", "Eb", "Edim7", "Bb", "D7", "Gm", "Eb7", "C7", "F7", "Bb"],
  },
  {
      title: 'Hallucinations',
      composer: 'Bud Powell',
      chords: ["F6", "Bb7", "A7", "D7", "G7", "C7", "F6", "F7", "Bb7", "Bdim7", "F7", "D7", "Gm7", "C7", "F6", "C7", "Dm7", "G7", "Cm7", "F7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "D7", "Bb6", "C7", "F6", "D7", "Gm7", "C7", "F6", "Bb7", "A7", "D7", "G7", "C7", "F6", "F7", "Bb7", "Bdim7", "F7", "D7", "Gm7", "C7", "F6", "Bm7b5", "E7", "Am7b5", "D7", "Gm7b5", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Happiness Is A Thing Called Joe',
      composer: 'Harold Arlen',
      chords: ["F6", "Gm7", "Am7", "Gm7", "F6", "Gm7", "Am7", "Gm7", "F6", "Gm7", "Am7", "D7", "Gm7", "C7", "C7", "C7", "C7", "C7", "Fmaj7", "Bm7", "E7", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "Am7", "Gm7", "F6", "Gm7", "Am7", "Gm7", "F6", "Db7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbm7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Happy Little Sunbeam',
      composer: 'Russ Freeman',
      chords: ["Gm7", "C7", "F6", "F6", "Abm7", "Gm7", "C7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Eb6", "Dm7", "G7", "Cmaj7", "Dm7", "G7", "Cmaj7", "Abm7", "Gm7", "C7", "F6", "F6", "Abm7", "Gm7", "C7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Gm7", "C7", "Eb7b5", "D7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Happy Talk',
      composer: 'Rodgers-Hammerstein II',
      chords: ["F6", "Faug", "Bb6", "G7", "C7sus", "Gm7", "C7", "F6", "F6", "F7", "Bb6", "Eb7", "F6", "D7b13", "Dm7", "G7", "Gm7", "C7", "F6", "Gm7", "C7sus", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Gm7", "Gm7", "C", "Bb", "D#dim7", "C7", "F6", "Faug", "Bb6", "G7", "C7sus", "Gm7", "C7", "F6", "F6", "F7", "Bb6", "Eb7", "F6", "D7b13", "Dm7", "G7", "Gm7", "C7", "F6", "Gm7", "C7sus"],
  },
  {
      title: 'Harlem Nocturne',
      composer: 'Hagen-Rogers',
      chords: ["Gm", "Gm7", "Cm7", "Cm7", "Cm", "A7alt", "Eb7", "D7", "", "Gm6", "Gm6", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb9", "Db9", "B9", "A9", "G9", "C9", "F7", "", "Gm", "Gm7", "Cm7", "Cm7", "Cm", "A7alt", "", "Eb7", "D7", "Gm6", "Gm6"],
  },
  {
      title: 'Haunted Heart',
      composer: 'Arthur Schwartz',
      chords: ["Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Gm7", "C7b13", "Fm7", "Bb7", "Fm7", "F#dim7", "Gm7", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Gm7", "C7b13", "Bbm7", "Eb7", "Ab6", "Adim7", "Eb6", "Cm7", "Am7b5", "D7b13", "Gm7b5", "C7b9", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Have You Met Miss Jones?',
      composer: 'Richard Rodgers',
      chords: ["Fmaj7", "D7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "Bbmaj7", "Abm7", "Db7", "Gbmaj7", "Em7", "A7", "Dmaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'He\'s A Tramp',
      composer: 'Lee-Burke',
      chords: ["Am7", "D7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Gb7", "F7", "E7", "A7", "D7", "G6", "G7", "G7", "Cmaj7", "Cmaj7", "A7", "A7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Gb7", "F7", "E7", "A7", "D7", "G6"],
  },
  {
      title: 'Heart And Soul',
      composer: 'Hoagy Carmichael',
      chords: ["F6", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Bbmaj7", "A7", "D7", "G7", "C7", "F7", "Bb7", "A7", "Bbmaj7", "A7", "D7", "G7", "C7", "F7", "Bb7", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "A7", "D7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Heat Wave',
      composer: 'Irving Berlin',
      chords: ["Gmaj7", "Am7", "Bm7", "Am7", "Gmaj7", "Am7", "Bm7", "Am7", "Gmaj7", "G7", "Cmaj7", "F7", "Em7", "A7", "D7", "G6", "G6", "", "Cmaj7", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "D7", "G6", "D7sus", "D7", "Gmaj7", "Am7", "Bm7", "Am7", "Gmaj7", "Am7", "Bm7", "Am7", "Gmaj7", "G7", "Cmaj7", "F7", "Em7", "A7", "D7", "G6", "G6", ""],
  },
  {
      title: 'Heaven',
      composer: 'Duke Ellington',
      chords: ["Bbmaj7", "Bbmaj7", "G7b5", "G7b5", "C7#11", "C7#11", "F7#5", "F7#5", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Em7b5", "A7", "Dm7", "C7", "B7", "Bbmaj7", "Bbmaj7", "G7", "G7", "C7", "C7", "F7", "Bbmaj7", "Bbmaj7"],
  },
  {
      title: 'Hello',
      composer: 'Milt Jackson',
      chords: ["Am7", "", "Bm7", "E7", "Am7", "D7", "Gmaj7", "C7", "Bm7", "Em7", "Am7", "", "Bm7", "", "Am7", "D7b9", "Gmaj7", "Am7", "Bm7", "Em7", "Cmaj7", "G", "", "F#m7b5", "B7", "Em7", "Dm7", "G7", "Cmaj7", "G", "", "F#m7b5", "B7", "Em7", "A7", "Am7", "", "Bm7", "E7", "Am7", "", "Bm7", "E7", "Am7", "D7", "Gmaj7", "C7", "Bm7", "Em7", "Am7", "Bm7", "Am7", "D7", "Gmaj7", "Cm6", "Bm7", "E7"],
  },
  {
      title: 'Hello Dolly',
      composer: 'Jerry Herman',
      chords: ["C", "C", "Am", "Am", "Cmaj7", "Abdim7", "Dm7", "G7", "Dm", "Dmaug", "Dm6", "Dmaug", "Dm", "G7", "Em7", "Ebdim7", "Dm7", "G7", "C", "C", "Am", "Am", "Gm7", "C7", "F", "E7", "Am", "Em", "Am", "Em", "D7", "G7", "C6", "Ebdim7", "Dm7", "G7", "D7", "G7", "D7", "G7", "C", "C", "F", "F#dim", "C", "G7", "C6", ""],
  },
  {
      title: 'Hello Young Lovers',
      composer: 'Richard Rogers',
      chords: ["Cmaj7", "Dm7", "Em7", "Dm7", "Cmaj7", "C#dim7", "Dm7", "G7", "Dm7b5", "G7", "Ebmaj7", "G7", "Dm7", "G7", "C6", "G7", "F6", "Gm7", "Am7", "Gm7", "Fmaj7", "Gm7", "Fmaj7", "Fmaj7", "Bm7b5", "E7", "Am7", "D7", "Dm7", "A7b13", "Dm7", "G7", "Cmaj7", "Dm7", "Em7", "Dm7", "Cmaj7", "C#dim7", "Dm7", "G7", "Dm7b5", "G7", "Ebmaj7", "G7", "Dm7", "G7", "Gm7", "C7", "F6", "Fm7", "E7", "A7", "Dm7", "Ab7", "G7", "C6", "C6"],
  },
  {
      title: 'Here\'s That Rainy Day',
      composer: 'Jimmy Van-Heusen',
      chords: ["Gm", "Gm", "Fm6", "Bb7", "Ebmaj7", "Abmaj7", "Am7", "D7", "Gmaj7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Gm", "Gm", "Fm6", "Bb7", "Ebmaj7", "Abmaj7", "Am7", "D7", "Gmaj7", "Dm7", "G7", "Cmaj7", "Am7", "D7", "Bm7", "Em7", "A7", "Am7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'Here\'s That Sunny Day',
      composer: 'Barney Kessel',
      chords: ["A", "A", "D", "D", "Amaj7", "Amaj7", "Dmaj7", "Dmaj7", "Amaj7", "Amaj7", "Cmaj7", "Cmaj7", "Fmaj7", "Fmaj7", "Bbmaj7", "Bbmaj7", "Bm7", "E7", "Cm7", "F7", "", "Bbmaj7", "Bbmaj7", "E7b9", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bb7", "Bb7", "Bm7b5", "E7#5", "Amaj7", "Amaj7", "Dmaj7", "Dmaj7", "Amaj7", "Amaj7", "Cmaj7", "Cmaj7", "Fmaj7", "Fmaj7", "Bbmaj7", "Bbmaj7", "Bm7", "E7", "C#m7", "F#7", "Bm7", "E7", "Bm7", "E7", "Cm7", "F7", "Bm7", "E7", "C#m7", "C7", "Bm7", "E7", "C#m", "C7", "Bm7", "E7", "Amaj7", "Amaj7"],
  },
  {
      title: 'Here\'s To Life',
      composer: 'Artie Butler',
      chords: ["Fm7", "Bb7sus", "Bb9", "Ebmaj7", "Abmaj9", "Dm7b5", "G7b9#5", "Cm7", "Cm7", "Fm7", "Bb7sus", "Bb9", "Ebmaj7", "Abmaj9", "Dm7b5", "G7b9#5", "Cmaj7", "Cmaj7", "Abmaj7", "Dm7b5", "Cmaj7", "C7", "Abmaj7", "Dm7b5", "C7sus", "C7sus", "Abmaj7", "Bb9", "Bdim7", "Cm7", "Fm7", "Bb7sus", "Bb9", "Cm7", "Cm7", "Abmaj7", "Bb9", "Bdim7", "Bbm7", "A7b5", "Abmaj7", "Bb9", "Bdim7", "Cm7", "Fm7", "Bb7sus", "Cm9", "Cm9"],
  },
  {
      title: 'Here\'s To My Lady',
      composer: 'Bloom-Mercer',
      chords: ["Ebmaj7", "Fm7", "Gm7", "Db7", "Cm7", "B7#9", "Bbm7", "Eb7", "Abmaj7", "Gm7", "Fm7", "Fm7", "Dm7b5", "Db7#11", "Ebmaj7", "Db7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Db7", "Cm7", "Cm", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Cm7", "F7", "Fm7", "Bb7sus", "Bb7b9", "Ebmaj7", "Fm7", "Gm7", "G7#5", "Abmaj7", "Bbm7", "Cm7", "Db7", "Gm7", "Gb7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7sus"],
  },
  {
      title: 'Hey There',
      composer: 'Alder-Ross',
      chords: ["Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "C7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Am7", "D7", "G6", "Em7", "Am7", "D7", "G6", "Em7", "Am7", "D7", "G7", "C7", "Fm7", "Db7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Am7b5", "D7", "Gm7", "Gm7b5", "C7b9", "Fm7", "Abm6", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Heyoke',
      composer: 'Kenny Wheeler',
      chords: ["Fmaj7", "Fmaj7", "Bm7", "C#7", "F#m7", "F#m7", "Bbm7", "Amaj7", "Abmaj7", "Abmaj7", "Bmaj7", "Bmaj7", "Dmaj7", "Gmaj7", "Fmaj7", "Amaj7", "Dbmaj7", "Gbmaj7"],
  },
  {
      title: 'Hideaway',
      composer: 'David Sanborn',
      chords: ["Ab7sus", "Ab7", "Ab7sus", "Ab7", "Gb7sus", "Gb7", "Gb7sus", "Gb7", "Ab7sus", "Ab7", "Ab7sus", "Ab7", "Gb7sus", "Gb7", "Gb7", "G7", "Ab7sus", "Ab7", "B7", "Db7", "E7", "Eb7", "Ab7sus", "Ab7", "B7", "Db7", "Eb7", "D7", "Db7", "Db7", "E7", "Ab7sus", "Ab7", "Ab7", "Db7", "Ab7", "", "Db7", "C7", "B7", "Bb7", "E7", "", "F#7", "Db7", "Ab7sus", "Ab7", "Db7", "E7", "Eb7", "Ab7sus", "Ab7", "Db7", "Eb7", "D7", "Db7", "Db7", "E7", "Ab7sus", "Ab7", "", "Db7", "Ab7", "Db7", "C7", "B7", "Bb7", "E9", "E9", "E6", "E9", "E9"],
  },
  {
      title: 'High Fly',
      composer: 'Randy Weston',
      chords: ["Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Cm7", "F7", "Bb7", "B7", "Cm7b5", "F7b9", "Dm7", "G7b9", "Cm7b5", "F7b9", "Em7", "A7", "Ebm7", "Ab7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Cm7", "F7", "Bb7", "B7"],
  },
  {
      title: 'High Hopes',
      composer: 'Jimmy Van-Heusen',
      chords: ["F", "F#dim7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F", "Bb", "C7", "F6", "F6", "F#dim7", "Gm7", "G#dim7", "Gm7", "C7", "F", "F7", "Bbmaj7", "Bbmaj7", "Bdim7", "F", "F", "Dm7", "G7", "G7", "C7", "C7", "F", "F7", "Bb", "Bdim7", "F", "F#dim7", "Gm7", "C7", "F", "F#dim7", "Gm7", "C7", "F", "F#dim7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Hocus-Pocus',
      composer: 'Lee Morgan',
      chords: ["Fmaj7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Ab7", "Gm7", "Gb7", "Fmaj7", "Ab7", "Dbmaj7", "Gb7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "G7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Ab7", "Gm7", "Gb7", "Fmaj7", "Ab7", "Dbmaj7", "Gb7"],
  },
  {
      title: 'Home At Last',
      composer: 'Hank Mobley',
      chords: ["Bbmaj7", "Bbmaj7", "Am7b5", "D7#9", "Gm7", "Gm7", "Fm7", "Bb7", "Ebmaj7", "Ab7#11", "Bbmaj7", "Bbmaj7", "Em7b5", "A7#9", "Dm7", "G7#9", "Cm7", "F7", "Gbmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "F7#5", "Bbm7", "Bbm7", "Bbm7", "Bbm7"],
  },
  {
      title: 'Home Cookin\'',
      composer: 'Horace Silver',
      chords: ["F6", "Gm7", "Am7", "Dm7", "G7", "Am7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Bbm7", "Eb7", "Ab6", "Bbm7", "Eb7", "Ab6", "Dm7", "G7", "C6", "Dm7", "G7", "C6", "", "F6", "Gm7", "Am7", "Dm7", "Gm7", "Am7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Homecoming',
      composer: 'Dave Holland',
      chords: ["Eb", "Eb", "Eb", "Eb", "Eb", "Eb", "B", "F#", "C#", "D#", "Bb", "Eb", "Ab", "Bb", "Eb", "E", "F#", "Db", "Ab", "Ab", "Eb", "Ab", "Bb", "Eb", "B", "F#", "C#", "D#", "Bb", "Eb", "Ab", "Bb", "Eb", "B", "C#", "Bb", "Eb"],
  },
  {
      title: 'Honeysuckle Rose',
      composer: 'Fats Waller',
      chords: ["Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "F7", "Bb6", "C7", "F6", "Bb7", "Am7", "D7", "F7", "F7", "Bb6", "Bb6", "G7", "G7", "C7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "F7", "Bb6", "C7", "F6", "Bb7", "Am7", "D7"],
  },
  {
      title: 'Horace-Scope',
      composer: 'Horace Silver',
      chords: ["Dbmaj7", "Em7", "A7", "Ebm7", "Abm7", "Db7", "Dbm7", "Ab7#5", "G13", "G13", "Gb13", "Fm7", "Bbm7", "Ebm7", "Ab7#5", "Db7#9", "Bb7b5#9", "A7", "Ab7#5#9", "Dbmaj7", "Em7", "A7", "Ebm7", "Abm7", "Db7", "Dbm7", "Ab7#5", "G13", "Gb13", "Fm7", "Bbm7", "Ebm7", "Ab7#5", "Db7#9", "Bb7b5#9", "A7", "Ab7#5#9", "Gbm7", "Bb7b5#9", "A7", "Gbm7", "Db7#9"],
  },
  {
      title: 'Hot House',
      composer: 'Tadd Dameron',
      chords: ["Gm7b5", "C7b9", "Fm", "Fm", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7", "Cm7", "F7b9", "Bbmaj7", "Bbmaj7", "Ab7b9", "Ab7b9", "G7b9", "G7b9", "Gm7b5", "C7b9", "Fm", "Fm", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7"],
  },
  {
      title: 'House Of Jade',
      composer: 'Wayne Shorter',
      chords: ["Dm7b5", "Dbmaj7", "Cm7", "Db7#11", "Eb7", "F7", "Db7", "Cm7", "Dm7b5", "Dbmaj7", "Cm7", "F7", "Eb7", "D9sus", "Db7", "Cm7", "Eb13sus", "Eb13sus", "Eb13sus", "Eb13sus", "D13sus", "D13sus", "Em7", "Eb7#11", "Dm7b5", "Dbmaj7", "Cm7", "Db7#11", "Eb7", "F7", "Db7", "Cm7", "Dm7b5", "Dbmaj7", "Cm7", "F7", "Eb7", "D9sus", "Db7", "Cm7"],
  },
  {
      title: 'How About You',
      composer: 'Burton Lane',
      chords: ["Fmaj7", "Bb7", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abdim7", "Am7b5", "D7b13", "Gm7", "Bbm6", "Eb7", "Am7", "Dm7", "Bm7b5", "E7b9", "Amaj7", "F#m7", "Bm7", "E7", "Amaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abdim7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "A7", "", "Bb7", "", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'How Are Things In Glocca Morra',
      composer: 'Burton Lane',
      chords: ["Fmaj7", "Am7", "D7#9", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "Gm7", "C7sus", "Fmaj7", "Am7", "D7#9", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "F6", "Cm7", "F7", "", "Bbmaj7", "", "Gm7", "C7", "Fmaj7", "F7", "Bbmaj7", "", "Gm7", "C7", "Fmaj7", "F7", "Bbmaj7", "Gm7", "C7", "Fmaj7", "Eb7#11", "D7b9", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'How Deep Is The Ocean',
      composer: 'Irving Berlin',
      chords: ["Cm7", "Dm7b5", "G7b9", "Cm7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "Gb7", "Fm7", "Bb7", "Eb7", "Eb7", "Ab7", "Ab7", "B7", "B7", "Bb7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Cm7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "Gb7", "Fm7", "Bb7", "Ebmaj7", "Gm7b5", "C7b9", "Fm7", "Abm7", "Db7", "Ebmaj7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "G7b9"],
  },
  {
      title: 'How High The Moon',
      composer: 'Morgan Lewis',
      chords: ["Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gmaj7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Gmaj7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'How Insensitive',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Dm", "Dm", "C#dim7", "C#dim7", "Cm6", "Cm6", "G7", "G7", "Bbmaj7", "Bbmaj7", "Ebmaj7#11", "Ebmaj7#11", "Em7b5", "A7b9", "Dm", "Dm", "Db7", "Cm6", "Cm6", "Bdim7", "Bdim7", "Bbmaj7", "Em7b5", "A7b9", "Dm", "Dm", "Db7", "Cm7", "F7", "Bm7", "E7b9", "Bbmaj7", "A7b9", "Dm", "Dm"],
  },
  {
      title: 'How Little We Know',
      composer: 'Hoagy Carmichael',
      chords: ["Fmaj7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bbm7", "Eb7", "Fmaj7", "Am7", "Abm7", "Gm7", "C7", "Fmaj7", "Dm7", "Am7", "Abmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bbm7", "Eb7", "Cm7", "F7", "Bbmaj7", "Eb7", "F6", "Abdim7", "Gm7", "C7sus", "F6", "D7", "Gm7", "C7"],
  },
  {
      title: 'How Long Has This Been Going On?',
      composer: 'George Gershwin',
      chords: ["C7", "Cdim7", "C7", "F7", "Bb7", "Eb7", "Fmaj7", "Abdim7", "Gm7", "", "C7", "F7", "Bbmaj7", "C7b13", "Fmaj7", "Bbmaj7", "Eb7", "Bbmaj7", "Eb7", "Bbmaj7", "Eb7", "Bbmaj7", "", "Bm7b5", "E7", "Am7", "E7b9", "Am7", "E7b9", "Am7", "E7b9", "Am7", "Ab7", "C7", "Cdim7", "C7", "F7", "Bb7", "Eb7", "Fmaj7", "Abdim7", "Gm7", "", "C7", "F7", "Bbmaj7", "C7b13", "F6"],
  },
  {
      title: 'How My Heart Sings',
      composer: 'Earl Zindars',
      chords: ["Em7", "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Abdim7", "Am7", "F#m7b5", "Emaj7", "G#m7", "C#7", "F#m7", "B7", "Dmaj7", "Amaj7", "Dmaj7", "Amaj7", "Cmaj7", "Gmaj7", "Cmaj7", "Cmaj7", "B7", "Am7", "Abdim7", "Am7", "D7", "Em7", "Am7", "Ab7", "G7", "C6", "Gm7", "F#m7b5", "B7b9"],
  },
  {
      title: 'Humpty Dumpty',
      composer: 'Chick Corea',
      chords: ["Ebmaj7", "Dmaj7", "Gbmaj7", "Fmaj7", "A7alt", "Bbmaj7", "Bbm7", "Bbm7", "Bbm7", "Bbm7", "Dm7", "Bm7", "Abm7", "Abm7", "Fm7", "Abm7", "Gbmaj7", "Bb7#5"],
  },
  {
      title: 'Hungaria',
      composer: 'Django Reinhardt',
      chords: ["G69", "G69", "Ab69", "Ab69", "G69", "G69", "E7", "E7", "A7", "A7", "D7", "D7", "G", "Bbdim7", "Am7", "D7", "G69", "G69", "Ab69", "Ab69", "G69", "G69", "E7", "E7", "Am7", "Cm6", "G", "Bbdim7", "Am7", "D7", "G69", "G69"],
  },
  {
      title: 'I Ain\'t Got Nobody',
      composer: 'Graham-Williams',
      chords: ["G7", "G7", "F#7", "F7", "E7", "A7", "A7", "G", "Em", "Am7", "D7", "G6", "Em7", "Am7", "D7", "G7", "G7", "F#7", "F7", "E7", "A7", "A7", "A7", "A7", "D7", "D7", "G7", "G7", "C6", "C6", "E7", "E7", "A7", "D7", "G7", "G7", "F#7", "F7", "E7", "A7", "A7", "G", "Em", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'I Believe In You',
      composer: 'Frank Loesser',
      chords: ["Am7", "Am", "Am7", "Am6", "Bm7", "C7#11", "Bm7", "E7", "Am7", "Am", "Am7", "Am6", "Bmaj7", "C#m7", "F#7", "Bmaj7", "E7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "G6", "E7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Gm7", "C7", "Am7", "D7", "Bm7", "E7"],
  },
  {
      title: 'I Can\'t Believe That You\'re In Love With Me',
      composer: 'Jimmy McHugh',
      chords: ["F6", "Bb7", "Cmaj7", "D7", "G7", "G7", "Cmaj7", "Gm7", "C7", "F6", "Bb7", "Cmaj7", "D7", "G7", "G7", "C6", "F7", "C6", "E7", "E7", "A7", "A7", "D7", "D7", "G7", "G7", "C7", "F6", "Bb7", "Cmaj7", "D7", "G7", "G7", "Cmaj7", "Gm7", "C7"],
  },
  {
      title: 'I Can\'t Get Started',
      composer: 'Vernon Duke',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Bm7", "E7", "Bbm7", "Eb7", "Am7", "D7", "Abm7", "Db7", "Cmaj7", "Am7", "Dm7", "G7", "E7", "A7", "D7", "G7", "Em7", "A7", "Em7", "A7", "Dmaj7", "", "Em7", "A7", "Dmaj7", "Dm7", "G7", "Dm7", "G7", "Em7", "Ebdim7", "Dm7", "G7sus", "Cmaj7", "Am7", "Dm7", "G7", "Bm7", "E7", "Bbm7", "Eb7", "Am7", "D7", "Abm7", "Db7", "Cmaj7", "A7#5", "Dm7", "G7", "C6", "A7", "D7", "G7"],
  },
  {
      title: 'I Can\'t Give You Anything But Love',
      composer: 'Jimmy McHugh',
      chords: ["Fmaj7", "C7", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", "C7", "Am7", "Abdim7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "G7", "G7", "Gm7", "C7", "Fmaj7", "C7", "Am7", "Abdim7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Eb7", "Fmaj7", "D7", "Gm7", "C7", "F6", "D7", "Gm7", "C7"],
  },
  {
      title: 'I Concentrate On You',
      composer: 'Cole Porter',
      chords: ["Ebmaj7", "Ebmaj7", "Ab7#11", "Ab7#11", "Ebm7", "Ebm7", "Abm6", "Abm6", "Fm7b5", "Bb7b9", "Ebm7", "Gb7", "B7", "Bb7b13", "Eb6", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ab7#11", "Ab7#11", "Ebm7", "Dbm7", "Gb7", "Bmaj7", "Bmaj7", "Abm7", "Db7", "Gbmaj7", "C7", "F7", "Bb7", "Eb6", "Eb6", "Eb7", "Abmaj7", "Abm6", "Ebmaj7", "Eb", "C7", "Fm7", "Bb7", "Ebmaj7", "Eb", "Eb7", "Abmaj7", "Db7", "Gbmaj7", "Gbmaj7", "Cm7b5", "F7", "Bb7", "Bb7", "Eb6", "Gm7", "Am7b5", "Am7b5", "Abmaj7", "Gm7", "Db7#11", "Db7#11", "Db7#11", "C7#5", "Fm7", "Fm7", "B7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'I Could Have Danced All Night',
      composer: 'Frederick Loewe',
      chords: ["C", "Cmaj7", "Cmaj7", "C6", "Cmaj7", "A7", "Dm7", "G7", "Dm7", "Dm", "Dm", "Dm7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "F#m7", "B7", "Emaj7", "F#m7", "B7", "Emaj7", "Am7", "D7", "Gmaj7", "Am7", "D7", "G7", "Dm7", "G7", "C", "Cmaj7", "Fmaj7", "Fmaj7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'I Could Write A Book',
      composer: 'Richard Rodgers',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Dm7", "Em7", "A7#9", "Dm7", "Bm7b5", "E7b9", "Am7", "Ab7", "G7", "F#m7b5", "B7b9", "Em7", "A7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Dm7", "Em7", "A7#9", "Dm7", "Bm7b5", "E7b9", "Am7", "Ab7", "Gm7b5", "C7b9", "Fmaj7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'I Cover The Waterfront',
      composer: 'Johnny Green',
      chords: ["Em7", "A7", "Am7", "D7", "Gmaj7", "Cmaj7", "Bm7", "Bbdim7", "Am7", "D7sus", "D7", "Gmaj7", "Bm7b5", "E7b9", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Bm7", "E7", "Amaj7", "F#m7", "Bm7", "E7", "Am7", "D7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Cmaj7", "Bm7", "Bbdim7", "Am7", "D7sus", "D7", "Gmaj7", "Bm7b5", "E7b9"],
  },
  {
      title: 'I Cried For You',
      composer: 'Freed-Arnheim-Lyman',
      chords: ["Fmaj7", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "F6", "C7#5", "F6", "Fmaj7", "Am7", "D7", "Gm7", "C7", "C7", "C7", "G#dim7", "C7", "Gb7b5", "Fmaj7", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "Bb7", "A7", "A7", "D7", "D7", "D7", "D7", "G7", "G7", "G7", "C7", "Fmaj7", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I Didn\'t Know About You',
      composer: 'Duke Ellington',
      chords: ["Gm7", "C7", "Fmaj7", "F6", "Bb7", "A7", "Eb9", "D7b9", "G7#11", "Gm7", "C7", "Am7", "Eb7", "D7b9", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "Eb7#11", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Am7", "D7b5", "Gm7", "C7", "Fmaj7", "F6", "Bb7", "A7", "Eb9", "D7b9", "G7#11", "Gm7", "C7", "F6", "Gm7", "Am7", "D7b9"],
  },
  {
      title: 'I Didn\'t Know What Time It Was',
      composer: 'Richard Rodgers',
      chords: ["F#m7b5", "B7b9", "Em7", "A7", "F#m7b5", "B7b9", "Em7", "A7", "Am7", "D7", "Em7", "Em7", "Cmaj7", "Bm7", "Am7", "Gm7", "Gmaj7", "F#m7b5", "B7b9", "F#m7b5", "B7b9", "Em7", "Dm7", "Cmaj7", "", "Gmaj7", "Em7", "A7", "Am7", "Gm7", "F#m7b5", "B7b9", "Em7", "A7", "F#m7b5", "B7b9", "Em7", "A7", "Am7", "D7", "Em7", "Em7", "Cmaj7", "Bm7", "Cm7", "F7", "Bm7", "E7", "Am7", "D7", "G6", "G6"],
  },
  {
      title: 'I Don\'t Know Enough About You',
      composer: 'Peggy Lee',
      chords: ["D7", "G7", "C7", "B7", "Bb7", "A7", "D7", "G7", "C69", "Ab7", "G7", "Bm7", "E7", "A7", "A7", "D7", "D7", "G7", "G7", "D7", "G7", "C7", "B7", "Bb7", "A7", "D7", "Em7", "A7", "D7", "G7", "C6"],
  },
  {
      title: 'I Don\'t Want To Miss Mississippi',
      composer: 'Serger Ellis',
      chords: ["G", "G", "G7", "G7", "C", "C", "Cm", "Cm", "G", "Am7", "D7", "G", "E7", "A7", "A7", "D7", "D7#5", "Am7", "D7", "G", "Em7", "Am7", "D7", "G", "Em7", "Am7", "D7", "G", "Em7", "A7", "A7", "D7", "D7#5"],
  },
  {
      title: 'I Fall In Love Too Easily',
      composer: 'Jule Styne',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Dm7b5", "G7#9", "Cm", "A7b5", "Dm7b5", "G7#9", "Cm7", "Cm7", "Am7b5", "D7b9", "Dm7b5", "G7b9", "Am7b5", "D7alt", "G7b9", "Gm7b5", "C7b9", "Fm7", "C7b9", "Fm7", "", "Abm7", "Db7", "G7alt", "C7b9", "Fm7", "Bb7", "Eb6", "C7b9"],
  },
  {
      title: 'I Feel Pretty',
      composer: 'Bernstein-Sondheim',
      chords: ["F", "Caug", "F", "Caug", "F", "Caug", "F", "Gm7", "C7", "Dm", "Dm", "Gm7", "C", "C7", "F", "F", "", "Eb", "C", "F", "", "Eb", "F", "Caug", "Bb", "Bb", "", "F7", "F", "Bb", "F7", "Bb", "", "Bb", "F", "Bb", "Bb", "", "F7", "Bb", "F", "F", "Am", "E7", "Am", "Fm6", "C7", "C7", "", "Gm7", "Gm7", "C7", "", "Bb", "C9", "C9", "Caug", "C7", "Gm7", "C7", "", "Dm", "Dm", "Gm7", "C7", "F", "F", "", "Eb", "C", "F", "F"],
  },
  {
      title: 'I Found A New Baby',
      composer: 'Palmer-Williams',
      chords: ["Dm7", "Em7b5", "A7", "Dm7", "D7", "G7", "C7", "Fmaj7", "Em7b5", "A7", "E7", "A7", "Dm7", "Dm7", "D7", "G7", "C7", "Em7b5", "A7", "Dm7", "Em7b5", "A7", "Dm7", "D7", "G7", "C7", "Fmaj7", "Fmaj7"],
  },
  {
      title: 'I Get A Kick Out Of You',
      composer: 'Cole Porter',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Gm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Gm7", "C7b9", "Fm7", "Bb7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Eb6", "Gm7", "C7b9", "Bbm7", "Eb7", "Bbm7", "Eb7", "Gm7b5", "Gm7b5", "C7b9", "C7b9", "Fm6", "Dm7b5", "Gm7b5", "C7b9", "F7", "F7", "Fm7", "Bb7"],
  },
  {
      title: 'I Get Along Without You',
      composer: 'Hoagy Carmichael',
      chords: ["Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Dm7", "Dbdim7", "Cm7", "F7", "Cm7", "F7", "Cm7", "B7#5", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Dm7", "Dbdim7", "Cm7", "F7", "Cm7", "G7b13", "Cm7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Eb6", "Eb", "Cm7", "F7", "Bbmaj7", "Eb6", "D7", "Ab7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Dm7", "Dbdim7", "Cm7", "F7", "Cm7", "F7", "Cm7", "B7#5", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'I Got It Bad',
      composer: 'Duke Ellington',
      chords: ["Gdim", "Gmaj7", "B7b13", "Em7", "A7", "Em7", "A7", "Am7", "B7", "E7", "A7", "D7", "G6", "Em7", "Am7", "D7", "Cmaj7", "Cmaj7", "F7", "F7", "Gmaj7", "Bm7", "E7", "Am7", "D7", "Gdim", "Gmaj7", "B7b13", "Em7", "A7", "Em7", "A7", "Am7", "B7", "E7", "A7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'I Got Rhythm',
      composer: 'George Gershwin',
      chords: ["Bb6", "Gm7", "Cm7", "F7", "Dm7", "Gm7", "Cm7", "F7", "Bb7", "Bb7", "Eb7", "Edim7", "Bb6", "F7", "Bb6", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Dm7", "Gm7", "Cm7", "F7", "Bb7", "Bb7", "Eb7", "Edim7", "Bb6", "F7", "Bb6", "F7", "Bb6", "Eb9", "Dm7", "G7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'I Got The Sun In The Morning',
      composer: 'Irving Berlin',
      chords: ["C7b5", "F6", "C7b5", "F6", "C7b5", "F6", "F6", "F7", "Bbmaj7", "Eb9", "Gm7", "F6", "Bbmaj7", "Eb9", "Gm7", "F6", "Em7", "A7", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "C7b5", "F6", "C7b5", "F6", "C7b5", "F6", "F6", "F7", "Bbmaj7", "Eb9", "Gm7", "F6", "Bbmaj7", "Eb9", "Gm7", "F6", "Bbmaj7", "A7b9#5", "Abdim7", "Gm7", "Gm7", "C7b9", "F6", "", "Gm7", "C7"],
  },
  {
      title: 'I Gotta Right To Sing The Blues',
      composer: 'Harold Arlen',
      chords: ["Gm7", "C7", "Gm7", "C7", "Cm7", "F7#5", "F7#5", "Fm7", "Bb7", "Fm7", "Bb7", "Dm7b5", "", "G7", "", "Gm7", "C7", "Gm7", "C7", "Cm7", "F7", "Cm7", "F7", "Bb6", "Cm7", "Dbdim7", "Bb6", "Eb6", "Edim7", "Bb6", "G7", "Gm7", "C7", "Gm7", "C7", "Cm7", "F7#5", "F7#5", "Fm7", "Bb7", "Fm7", "Bb7", "Dm7b5", "", "G7", "", "Gm7", "C7", "Gm7", "C7", "Ab7", "Ab7", "Gm7", "C7", "Cm7", "F7b9", "Bb6", "Dm7", "G7"],
  },
  {
      title: 'I Guess I\'ll Hang My Tears Out To Dry',
      composer: 'Jule Styne',
      chords: ["Em7", "Ebm7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "C7", "F6", "Em7", "A7", "Em7", "A7", "Dm7", "Ab7#11", "G7", "Em7", "Ebm7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "G7", "C", "C", "Am", "Am", "F#m7b5", "B7", "Em7", "Ebm7", "Dm7", "G7sus", "C6", "C6"],
  },
  {
      title: 'I Guess I\'ll Have To Change My Plan',
      composer: 'Arthur Schwartz',
      chords: ["Cmaj7", "G7", "Cmaj7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Dm7", "G7", "Em7", "Am7", "D13", "Dm7", "G7", "Cmaj7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "F6", "Fm6", "Em7", "Ebdim7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "G7", "Bb7", "A7", "D7", "G7", "C6", "G7"],
  },
  {
      title: 'I Hadn\'t Anyone Till You',
      composer: 'Ray Noble',
      chords: ["Gm7", "C7", "Gm7", "C7", "F6", "Gm7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "G7", "G7", "Gm7", "C7", "G7", "Em7b5", "A7", "", "Dm", "Dm", "Dm7", "", "Dm6", "Bb7", "Amaj7", "F#m7", "Bm7", "E7", "A7", "D7", "G7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "Gm7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "G7", "G7", "Bbmaj7", "Eb7", "Fmaj7", "E7", "Am7b5", "D7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'I Have Dreamed',
      composer: 'Rodgers-Hammerstein',
      chords: ["F6", "Gm7", "F", "Gm7", "F6", "Gm7", "Gm7", "C9", "G6", "Am7", "G", "Gm7", "C7", "F6", "Dm7", "G7", "C", "Bm7", "E7", "A6", "Bm7", "A", "Bm7", "A6", "Bm7", "Gm6", "C7", "F6", "Em7", "A7", "Dm7", "G7", "F6", "Bb", "A7", "Dm7", "G7", "Am7", "Abdim7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I Hear A Rhapsody',
      composer: 'Fragos-Baker-Gasparre',
      chords: ["Cm7", "", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7b5", "C7b9", "Fm7", "Abm7", "Bm7", "Bb7", "Ebmaj7", "Dm7b5", "G9#5", "Gm7", "Am7b5", "D7b9", "Gm7", "Cm7", "F7", "Bbmaj7", "Fm7", "Dm7b5", "G7b9", "G9#5", "Cm7", "", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7b5", "C7b9", "Fm7", "Abm7", "Bm7", "Bb7", "Ebmaj7", "Dm7b5", "G9#5"],
  },
  {
      title: 'I Hear Music',
      composer: 'Burton Lane',
      chords: ["Am7b5", "D7#5", "G9", "C7", "Am7b5", "D7#5", "G9", "C7", "F7", "Bb6", "F7", "Bb6", "C7", "F", "C7", "F", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "C7", "Am7b5", "D7#5", "G9", "C7", "Am7b5", "D7#5", "G9", "C7", "F7", "Bb6", "F7", "Bb6", "C7", "F", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I Left My Heart In San Francisco',
      composer: 'George Cory',
      chords: ["C6", "G7", "Em7", "Ebdim7", "Dm7", "G7", "Dm", "Dm", "Dm7", "G7", "Cmaj7", "G7", "Cmaj7", "", "Dm7", "D#dim", "Cmaj7", "G7", "Cmaj7", "B7", "Em7", "B7", "Em7", "A7", "Am7", "D7", "Dm7", "G7", "C6", "G7", "Em7", "Ebdim7", "Dm7", "G7", "Dm7", "G7", "Bm7", "E7", "A7b13", "A7b13", "D7", "D7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'I Let A Song Go Out Of My Heart',
      composer: 'Duke Ellington',
      chords: ["Eb6", "Ab7", "Ebmaj7", "Cm7", "Gm7", "C7", "Gm7", "C7", "Fm", "Gm7", "Fm7", "F#dim", "Ebmaj7", "Ab7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Eb6", "G7", "Cm7", "Abm7", "Db7", "Gb7", "", "B7", "Bb7#5", "Eb6", "Ab7", "Ebmaj7", "Cm7", "Gm7", "C7", "Gm7", "C7", "Fm", "Gm7", "Fm7", "F#dim", "Ebmaj7", "Ab7", "Ebmaj7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'I Like The Likes Of You',
      composer: 'Vernon Duke',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "F7", "Bb7", "Eb6", "Fm7", "Bb7", "Abmaj7", "Abmaj7", "Eb6", "Eb6", "F7", "F7", "Fm7", "Bb7", "Fm7", "Bb7#5", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "F7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'I Love Being Here With You',
      composer: 'Bill Schluger, Peggy Lee',
      chords: ["Bb", "Fm7", "Bb7", "Eb7", "Edim7", "Bb", "Ab7", "G7", "Cm7", "F7", "Bb", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bb", "Fm7", "Bb7", "Eb7", "Edim7", "Bb", "Ab7", "G7", "Cm7", "F7", "Bb"],
  },
  {
      title: 'I Love Paris',
      composer: 'Cole Porter',
      chords: ["Cm6", "Cm6", "Cm6", "Cm6", "Cm6", "Cm6", "Dm7b5", "G7b13", "Dm7b5", "G7b13", "Dm7b5", "G7b13", "Dm7b5", "G7b13", "Cm6", "Cm6", "G7", "C6", "C6", "C6", "C6", "C6", "Em7", "Ebdim7", "Dm7", "G7", "F6", "F6", "Em7", "A7", "Dm7", "G7", "C6", "Dm7b5", "G7b9"],
  },
  {
      title: 'I Love You',
      composer: 'Cole Porter',
      chords: ["Gm7b5", "C7b9", "Fmaj7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Gm7b5", "C7b9", "Fmaj7", "Bm7", "E7", "Amaj7", "Bm7", "E7", "Amaj7", "Amaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Gm7b5", "C7b9", "Fmaj7", "Am7b5", "D7b9", "G7", "C7", "F6", "F6"],
  },
  {
      title: 'I Loves You Porgy',
      composer: 'George Gershwin',
      chords: ["Fmaj7", "", "Cm7", "F7", "Bbmaj7", "Dm7", "Gm7", "C7sus", "Fmaj7", "A7b13", "Dm7", "G7", "Gm7", "C7sus", "F6", "C7sus", "Am6", "F#m7b5", "Bm7b5", "E7b13", "Am6", "F#m7b5", "Ab7#5", "G7", "Cm6", "Am7b5", "Dm7b5", "G7b13", "Cm6", "Ab7", "G7#5", "C7#9", "G7#5", "C7#9", "G7#5", "C7sus", "Fmaj7", "", "Cm7", "F7", "Bbmaj7", "Dm7", "Gm7", "C7sus", "Fmaj7", "A7b13", "Dm7", "G7", "Gm7", "C7sus", "F6", "C7sus"],
  },
  {
      title: 'I May Be Wrong',
      composer: 'Henry Sullivan',
      chords: ["Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "Bb7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'I Mean You',
      composer: 'Thelonious Monk',
      chords: ["Eb7", "Eb7", "Eb7", "Eb7", "F6", "F6", "Db7", "D7", "Gm7", "C7", "F6", "F6", "Eb7", "Eb7", "F6", "F6", "Db7", "Db7", "Gb7", "Gb7", "F6", "F6", "Db7", "D7", "Gm7", "C7", "F6", "F6", "F6", "F6", "Eb7", "Eb7", "Eb7", "Eb7"],
  },
  {
      title: 'I Only Have Eyes For You',
      composer: 'Harry Warren',
      chords: ["Dm7", "G7", "Dm7", "G7", "Cmaj7", "Cmaj7", "F7", "Em7", "Ebm7", "Ab7", "Dm7", "G7", "G7", "Em7", "A7", "Dm7b5", "G7", "Em7", "Ebm7", "Ab7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "F7", "Bb7#11", "A7b9", "Dm7", "G7", "C6", "Em7", "A7b9"],
  },
  {
      title: 'I Remember Clifford',
      composer: 'Benny Golson',
      chords: ["Abmaj7", "Bb7b9", "G7b9", "G7b9", "Cm7", "Bbm7", "Abm7", "Gbm7", "Fm7", "Bb7", "Ebmaj7", "G7", "Abmaj7", "Adim7", "Bb7", "Bdim7", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Em7b5", "A7b9", "Fm7", "Bb7b9", "Dm7b5", "G7b9", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "G7", "Abmaj7", "Adim7", "Bb7", "Bdim7", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7b5", "C7b9", "Fm7", "Bb7alt", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'I Remember You',
      composer: 'Victor Schertzinger',
      chords: ["Fmaj7", "Bm7", "E7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "Bbmaj7", "Em7", "A7", "Dmaj7", "Em7", "A7", "Dmaj7", "Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Bm7", "E7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Am7", "D7", "Bm7b5", "Bb7", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I See Your Face Before Me',
      composer: 'Arthur Schwartz',
      chords: ["Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "C7", "Fm7", "Bb7", "Fm", "Fm", "Fm7", "Bb7", "Fm7", "Bb7sus", "Ebmaj7", "Gm7", "C7b9", "Fm7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7", "Am7b5", "D7b9", "Gm7", "C7b9", "Fm7", "Bb7#5", "Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "C7", "Fm7", "Bb7", "Fm", "Fm", "Fm7", "Bb7", "Fm7", "Bb7sus", "Ebmaj7", "", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm6", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'I Should Care',
      composer: 'Cahn-Stordahl-Weston',
      chords: ["Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Em7b5", "A7b9", "Dm7", "Fm7", "Bb7", "Cmaj7", "Bm7b5", "E7b9", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Am7", "D7", "Dm7", "G7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Em7b5", "A7b9", "Dm7", "Fm7", "Bb7", "Cmaj7", "Bm7b5", "E7b9", "Am7", "D7", "", "Dm7", "G7", "C6", "F7", "Em7", "A7"],
  },
  {
      title: 'I Surrender Dear',
      composer: 'Harry Barris',
      chords: ["Dm7", "Em7b5", "A7b9", "Dm7", "E7", "Am7", "D7", "Cmaj7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "A7", "E7", "Am7", "E7", "Am7", "E7", "Am7", "D7", "Dm7", "G7", "Dm7", "F7", "Em7b5", "A7b9", "Dm7", "E7", "Am7", "D7", "Cmaj7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "A7"],
  },
  {
      title: 'I Think Of You',
      composer: 'Elliot-Marcotte',
      chords: ["Ab", "Gdim7", "Ab", "Abdim7", "Gdim7", "Ab6", "F7b9", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "Gdim7", "Dbm", "Ab7b9", "Dbm", "Ab7b9", "Dbm", "Dbm", "Dbm6", "Dbmb6", "Abmaj7", "F7b9#5", "Bm7", "E7", "Bbm7", "Eb7", "Ab", "Gdim7", "Ab", "Abdim7", "Gdim7", "Ab6", "F7b9", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "Gdim7"],
  },
  {
      title: 'I Thought About You',
      composer: 'Jimmy Van-Heusen',
      chords: ["Bm7b5", "Bb7#11", "A7", "D7b13", "G7", "Ab7", "G7", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm7", "Db7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Fmaj7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Bm7b5", "E7b9", "Am7", "Ab7", "Gm7", "C7", "Bm7b5", "Bb7#11", "A7", "D7b13", "G7", "Ab7", "G7", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm7", "Db7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Fmaj7", "Dm7", "Bm7b5", "Bb7#11", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I Used To Be Color Blind',
      composer: 'Irving Berlin',
      chords: ["Ebmaj7", "Ebmaj7", "Am7b5", "Abm6", "Gm7", "Am7", "D7", "G7sus", "G7", "Gm7", "F#dim7", "Gm7", "C7", "Fm7", "Bb9", "Ebmaj7", "Dm7b5", "G7#5", "Cm7", "Cm7", "Am7b5", "Ab9#11", "Gbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7b5", "Abm6", "Gm7", "Gm7b5", "C7b9", "Fm7", "C7#5", "Fm7", "Abmaj7", "Abm6", "Db9", "Cm7", "Cm7", "Am7b5", "", "Ab7", "Ab7", "F13", "Bb13", "Ebmaj7", "Eb6", "Fm7", "Bb7sus"],
  },
  {
      title: 'I Want To Be Happy',
      composer: 'Vincent Youmans',
      chords: ["Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "D7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'I Want To Talk About You',
      composer: 'Billy Eckstine',
      chords: ["Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Db7", "C7", "B7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Eb", "Ab", "Eb", "Fm", "Eb", "Fm", "Eb", "Ab", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "Fm7", "Bb7"],
  },
  {
      title: 'I Was Doing All Right',
      composer: 'George Gershwin',
      chords: ["Gmaj7", "Abdim7", "Am7", "D7", "Gmaj7", "Abdim7", "Am7", "D7", "G7", "Cmaj7", "Cm6", "Gmaj7", "D7", "Gmaj7", "", "Am7", "D7", "E6", "E6", "A7", "A7", "E6", "C#m7", "B6", "F#m7", "G#m7", "Am7", "Bbdim7", "Gmaj7", "Abdim7", "Am7", "D7", "Gmaj7", "Abdim7", "Am7", "D7", "G7", "Cmaj7", "Cm6", "Gmaj7", "D7", "Am7", "D7", "G6", "E7", "Am7", "D7"],
  },
  {
      title: 'I Will Wait For You',
      composer: 'Michel Legrand',
      chords: ["Dm7", "Dm7", "D7b9", "Gm7", "Gm7", "Db7", "C7sus", "C7", "C7b9", "Bb", "Fmaj7", "Em7b5", "A7b9", "Dm7", "Dm7", "D7b9", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm", "Bm7b5", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9"],
  },
  {
      title: 'I Wish I Knew',
      composer: 'Harry Warren',
      chords: ["Am7", "D7", "Am7", "D7", "Gmaj7", "C7", "Gmaj7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Gmaj7", "B7b13", "Em7", "A7", "D7", "Am7", "Bm7", "E7", "Am7", "D7", "Am7", "D7", "Gmaj7", "C7", "Gmaj7", "Bm7", "E7", "Am7", "D7", "Bm7b5", "E7b13", "Am7", "D7", "G6", "Bm7", "E7b9"],
  },
  {
      title: 'I Wish I Knew How It Would Feel To Be Free',
      composer: 'Billy Taylor',
      chords: ["F", "A7", "Dm", "F7", "Bb", "C7sus", "F", "F", "Bb", "F", "C", "G7", "C7", "F", "A7", "Dm", "F7", "Bb", "C7sus", "F", "Bdim7", "F", "A7", "Dm", "Bdim7", "F", "C7sus", "F"],
  },
  {
      title: 'I Wish I Were In Love Again',
      composer: 'Richard Rodgers',
      chords: ["Gmaj7", "C7#11", "Gmaj7", "C7#11", "Gmaj7", "C7#11", "Bm7", "Em7", "Am7", "D7", "C#m7b5", "Cm6", "G6", "E7#5", "A7", "D7", "G6", "G7", "C#m7b5", "Cm6", "G6", "E7#5", "A7", "D7", "Gmaj7", "C7#11", "Gmaj7", "C7#11", "Gmaj7", "B7", "Em7", "Am7", "D7", "G6", "D7"],
  },
  {
      title: 'I Wish You Love',
      composer: 'Charles Trenet',
      chords: ["Ebm", "Ebm", "Ebm7", "Ebm6", "Fm7b5", "Bb7b13", "Ebm", "Ebm", "Ebm7", "Ebm6", "Fm7b5", "Bb7b9", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "Gbdim7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "C7", "Abmaj7", "Abm7", "Db7", "Eb6", "Ab7", "Gm7", "C7", "Fm7", "Cm7", "F7", "Fm7", "Bb7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "Gbdim7", "Fm7", "Bb7", "Eb6", "Ab7", "Gm7", "C7"],
  },
  {
      title: 'I\'ll Be Around',
      composer: 'Alec Wilder',
      chords: ["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "G#dim7", "F", "G7", "Cmaj7", "Am7", "Dm7", "G7", "C6", "Eb7", "Abmaj7", "", "Dm7", "G7", "Db7", "Gm7", "C7", "Db7", "Gm7", "C7", "", "Fmaj7", "Ab7", "Dm7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "G#dim7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "C6", "Eb7", "Abmaj7", "", "Dm7", "G7"],
  },
  {
      title: 'I\'ll Be Seeing You',
      composer: 'Sammy Fain',
      chords: ["Ebmaj7", "G7b13", "Fm7", "C7b13", "Fm7", "C7b13", "Fm7", "Bb7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Fm7", "Fm7", "Fm7", "Bb7#5", "Ebmaj7", "Bb7#5", "Ebmaj7", "G7b13", "Fm7", "C7b13", "Fm7", "C7b13", "Fm7", "Bb7", "Gm7b5", "C7b9", "", "Abmaj7", "G7b9", "Cm7", "F7", "Fm7", "Abm6", "Bb7b9", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'I\'ll Close My Eyes',
      composer: 'Reid-Kaye',
      chords: ["Fmaj7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Cm7", "F7", "", "Bbmaj7", "Bbm7", "Eb7", "Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "D7", "Gm7", "C7"],
  },
  {
      title: 'I\'ll Get By (As Long As I Have You)',
      composer: 'Ahlert-Turk',
      chords: ["C6", "C6", "G7b9", "Cmaj7", "Bm7", "E7", "E7#5", "F6", "F6", "A7", "Dm7", "D7", "D7", "G7", "G7", "Ebdim7", "G7", "G7", "G7", "G7#5", "Em7", "Eb7", "Dm7", "G7", "C6", "C6", "G7b9", "Cmaj7", "Bm7", "E7", "E7#5", "F6", "F6", "A7", "Dm7", "Bm7", "E7", "Am7", "A7", "A7", "Dm7", "G7", "G13b9", "C6", "Dm7", "G7"],
  },
  {
      title: 'I\'ll Never Be The Same',
      composer: 'Khan-Malneck-Signorelli',
      chords: ["Db7", "C7", "Db7", "C7", "Fmaj7", "Gm7", "Am7", "D7", "Db7", "C7", "Db7", "C7", "Fmaj7", "Dm7", "Db7", "Cm7", "F7", "Cm7", "F7sus", "Cm7", "F7", "Bbmaj7", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Db7", "C7", "Db7", "C7", "Fmaj7", "Dm7", "Db7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Gm7", "Bbm6", "Am7b5", "D7", "Db7", "C7", "Db7", "C7", "F6", "D7", "Gm7", "C7"],
  },
  {
      title: 'I\'ll Never Smile Again',
      composer: 'Ruth Lowe',
      chords: ["Fm7", "B9#11", "Bb7sus", "Bb7b9", "Ebmaj7", "Gm7", "Gbdim7", "Fm7", "B9#11", "Bb7b9", "Eb6", "Ab9", "Gm7", "Gb7b5", "Fm7", "Bb7b9", "Eb6", "Fm7", "Bb7#5", "Ebmaj7", "D9", "Gmaj7", "D7", "G", "Gbdim7", "Fm7", "Bb7", "Bb7", "Gm7", "Gbdim", "Fm7", "B9#11", "Bb7sus", "Bb7b9", "Ebmaj7", "Gm7", "Gbdim7", "Fm7", "B9#11", "Bb7b9", "Ebmaj7", "Eb6", "Bbm6", "A7#11", "Abmaj7", "Db7", "Ebmaj7", "C9", "Fm7", "Fm7", "Bb7b9", "Eb6", "Gm7", "Gbdim7"],
  },
  {
      title: 'I\'ll Only Miss Her When I Think Of Her',
      composer: 'Cahn-VanHeusen',
      chords: ["Am7", "D7", "Gmaj7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "Eb7", "Dm7", "G7", "Cmaj7", "E7", "Am7", "Bbdim7", "G", "Cm6", "G", "Em7", "A7", "Am7", "Bm7b5", "E7#5", "Am7", "D7", "Gmaj7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "Eb7", "Dm7", "G7", "Cmaj7", "E7", "Am7", "Bbdim7", "G", "Cm6", "G", "Cm", "Bm7", "E7b9", "Am7", "F7#11", "Bm7", "Bb7", "Ebmaj7", "Ab7#11", "Gmaj7", "Gmaj7"],
  },
  {
      title: 'I\'ll Remember April',
      composer: 'Raye-DePaul',
      chords: ["Gmaj7", "G6", "Gmaj7", "G6", "Gm7", "Gm6", "Gm7", "Gm6", "Am7b5", "D7b9", "Bm7b5", "E7b9", "Am7", "D7", "Gmaj7", "Gmaj7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "F#m7", "B7", "Emaj7", "Am7", "D7"],
  },
  {
      title: 'I\'ll See You In My Dreams',
      composer: 'Jones-Kahn',
      chords: ["Bb6", "Bb6", "Bbm6", "Bbm6", "F6", "E7", "F6", "F6", "", "D7", "D7", "D7", "D7", "G7", "G7", "Gm7", "C7"],
  },
  {
      title: 'I\'ll Take Romance',
      composer: 'Ben Oakland',
      chords: ["F6", "Dm7", "Gm7", "C7", "C7", "Am7", "Ab7", "Dbmaj7", "Gb7", "A7alt", "D7b9", "Gm7", "C7", "F6", "Ab7", "Gm7", "C7", "Ebm7", "Ab7", "Dbmaj7", "Bb7", "Ebm7", "Ab7", "Dbmaj7", "Db6", "C#m7", "F#7", "Bmaj7", "Emaj7", "Am7", "D7", "Gm7", "C7", "F6", "F6", "Gm7", "C7"],
  },
  {
      title: 'I\'m A Fool To Want You',
      composer: 'Herron-Sinatra-Wolf',
      chords: ["Em6", "Bm7b5", "E7b9", "Am6", "F#m7b5", "B7b9", "Em7", "Am7", "C7#11", "B9", "B7b13", "Am", "Am", "Am7", "D7", "Gmaj7", "Bm7", "E7b9", "Am", "Am", "Am7", "D7", "Gmaj7", "Gmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "Gm7", "C7", "F#m7b5", "B7b13", "Em6", "Bm7b5", "E7b9", "Am6", "F#m7b5", "B7b9", "Em7", "Am7", "F#m7b5", "B7b9", "Em6"],
  },
  {
      title: 'I\'m All Smiles',
      composer: 'Leonard-Martin',
      chords: ["D7#9", "Gm7", "C#7#9", "B6", "C6", "Am7", "D7", "Bm7", "E7", "C#m7", "F#7", "Bmaj7", "G#m7", "Em7", "A7", "Dmaj7", "Dmaj7", "Gbmaj7", "Ab7", "Fm7", "Bb7", "Gm7b5", "C7b5", "Fmaj7", "Bbmaj7", "Em7", "A7", "Dmaj7", "Dmaj7", "Gmaj7", "F#m7", "B7", "Bb7", "A7", "D7#9", "Gm7", "C#7#9", "B6", "C6", "Am7", "D7", "Bm7", "E7", "C#m7", "F#7", "Bmaj7", "G#m7", "Em7", "A7", "Dmaj7", "D7", "F#", "G7", "E7", "A7", "A7", "F#m7", "Bm7", "Em7", "A7", "A7", "F#7", "Bm7", "Em7", "A7", "Dmaj7", "Dmaj7"],
  },
  {
      title: 'I\'m Always Chasing Rainbows',
      composer: 'Harry Carroll',
      chords: ["Gmaj7", "Gmaj7", "Cm6", "Gmaj7", "Gmaj7", "F#dim7", "Gmaj7", "Cm6", "Gmaj7", "Am7", "D7", "E7", "Bm7b5", "E7", "Am7", "E7", "Am7", "A7", "A7", "Am7", "D7", "G7", "G7", "C6", "C6", "E7", "E7", "A7", "D7", "Am7", "Ab7", "", "Gmaj7", "Gmaj7", "Cm6", "Gmaj7", "E7", "Am7", "D7", "D7b9", "G6", "Am7", "D7"],
  },
  {
      title: 'I\'m An Old Cowhand',
      composer: 'Johnny Mercer',
      chords: ["Fm7", "Bb7", "Eb6", "Eb6", "Fm7", "Bb7", "Eb6", "Eb6", "Cm", "Gm", "Cm", "Gm", "Am7b5", "D7b9", "Gm", "C7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Eb6", "C7"],
  },
  {
      title: 'I\'m Beginning To See The Light',
      composer: 'Hodges-James-Ellington',
      chords: ["D7", "G7", "C6", "A7", "D7", "G7", "Ebm7", "Ab7", "D7", "G7", "C7", "Bb7", "A7", "", "D7", "G7", "C6", "E7", "E7", "Eb7", "Eb7", "D7", "D7", "Ab7", "G7", "D7", "G7", "C6", "A7", "D7", "G7", "Ebm7", "Ab7", "D7", "G7", "C7", "Bb7", "A7", "", "D7", "G7", "C6"],
  },
  {
      title: 'I\'m Confessin\' (That I Love You)',
      composer: 'Daugherty-Neiberg-Reynolds',
      chords: ["Gmaj7", "D7#5", "Gmaj7", "D7#5", "Gmaj7", "Bm7", "E7", "Em7", "A7", "Am7", "D7", "G6", "Am7", "D7", "Dm7", "G7", "Cmaj7", "G7#5", "C6", "B7", "Em7", "A7", "Am7", "D7", "Am7", "D7", "Gmaj7", "D7#5", "Gmaj7", "D7#5", "Gmaj7", "Bm7", "E7", "Em7", "A7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'I\'m Getting Sentimental Over You',
      composer: 'George Bassman',
      chords: ["Fmaj7", "Bm7b5", "E7b9", "Am7b5", "D7b9", "G7", "C7", "F6", "D7", "Gm7", "C7", "Am7", "F#m7b5", "B7", "E7b9", "Bm7", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7b5", "D7b9", "G7", "C7", "Am7", "D7", "G7", "C7b13", "F6", "Gm7", "C7"],
  },
  {
      title: 'I\'m Glad There Is You',
      composer: 'Jimmy Dorsey',
      chords: ["Fmaj7", "Fmaj7", "Fm7", "Fm7", "Gm7", "C7", "Fmaj7", "D7b9", "Gm7", "C7", "Fmaj7", "Gm7", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", "D7b9", "Gm7", "C7", "", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Fm7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I\'m Gonna Laugh You Right Out Of My Life',
      composer: 'Cy Coleman',
      chords: ["Fmaj7", "Abdim7", "Gm7", "C7sus", "Bdim7", "Am7", "Ab7", "Dmaj7", "Gm7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7sus", "Bbdim7", "Am7", "Cm7", "F7b9", "Bbmaj7", "Em7b5", "A7b9", "Dm7", "G7sus", "G7b9", "Cmaj7", "Dm7", "Em7b5", "A7b9", "Dm7", "G7sus", "G7", "Gm7", "Am7", "Bb6", "C7", "Fmaj7", "Abdim7", "Gm7", "C7sus", "Bbdim7", "Am7", "Cm7", "F7b9", "Bbmaj7", "Bb6", "Em7b5", "A7b9", "Dm7", "Dm7", "Bm7b5", "Bbm6", "F6", "Am7", "D7b9", "Gm7", "C7sus", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I\'m Gonna Sit Right Down and Write Myself A Letter',
      composer: 'Fred Ahlert',
      chords: ["Gmaj7", "Abdim7", "Am7", "D7", "Gmaj7", "Gmaj7", "D7", "Gmaj7", "Gmaj7", "Gmaj7", "B7", "C", "E7", "Am7", "Am7", "D7", "Gmaj7", "Dm7", "E7", "A7", "A7", "D7", "D7"],
  },
  {
      title: 'I\'m In The Mood For Love',
      composer: 'Jimmy McHugh',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "G7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "Am7b5", "D7", "Dm7b5", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "Ebdim7", "Dm7", "G7", "C6"],
  },
  {
      title: 'I\'m Just A Lucky So-And-So',
      composer: 'Duke Ellington',
      chords: ["G6", "Cmaj7", "G6", "Dm7", "G7", "C7", "A7", "Am7", "D7", "G6", "E7#9", "Am7", "D7", "C7", "Gmaj7", "C7", "Gmaj7", "F#m7b5", "B7", "Em7", "Am7", "Am7", "D7", "G6", "Cmaj7", "G6", "Dm7", "G7", "C7", "A7", "Am7", "D7", "G6", "E7#9", "Am7", "D7"],
  },
  {
      title: 'I\'m Old Fashioned',
      composer: 'Jerome Kern',
      chords: ["F6", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Bb6", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Dm7", "G7", "Gm7", "Gm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Bm7", "E7", "Amaj7", "Bm7", "C#m7", "D7", "E7", "F#dim7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "Dm7", "Bm7b5", "Bbm6", "Am7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'I\'m Putting All My Eggs In One Basket',
      composer: 'Irving Berlin',
      chords: ["Cmaj7", "Cmaj7", "Gm7", "C7", "F6", "Fm6", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "F6", "F6", "Abmaj7", "Abmaj7", "Eb7", "Eb7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Gm7", "C7", "F6", "Fm6", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'I\'m Sitting On Top Of The World',
      composer: 'Louis-Henderson-Young',
      chords: ["Fmaj7", "F7", "Bbmaj7", "Fmaj7", "Gm7", "Am7", "Dm7", "G7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Bbmaj7", "E7", "Fmaj7", "Fmaj7", "A7", "Dm", "Dm", "Dm7", "Dm6", "G7", "Gm7", "C7", "Fmaj7", "F7", "Bbmaj7", "Fmaj7", "Gm7", "Am7", "Dm7", "G7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'I\'m Through With Love',
      composer: 'Kahn-Malneck-Livingston',
      chords: ["Fmaj7", "Abdim7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "D7b9", "Gm7", "D7b9", "Gm7", "C7b9", "Am7", "D7", "Gm7", "C7", "Am", "Amb6", "Am6", "Amb6", "Am", "Amb6", "Am6", "D7", "C6", "Am7", "Dm7", "G7", "Gm7", "D7b9", "Gm7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "D7b9", "Gm7", "D7b9", "Gm7", "C7b9", "F6"],
  },
  {
      title: 'I\'ve Found A New Baby',
      composer: 'Palmer-Williams',
      chords: ["Cm7", "Ab7", "G7", "Cm7", "C7", "F7", "Bb7", "Eb6", "Ab7", "G7", "G7", "G7", "Cm7", "Cm7", "F7", "F7", "Bb7", "G7", "Cm7", "Ab7", "G7", "Cm7", "C7", "F7", "Bb7", "Eb6", "Ab7", "G7"],
  },
  {
      title: 'I\'ve Got A Crush On You',
      composer: 'George Gershwin',
      chords: ["Bbmaj7", "Dbdim7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Dm7", "Gm7", "C7", "C7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "", "Ebm7", "Ab7", "Dm7", "Gm7", "C7", "Bb", "Gm7", "C7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'I\'ve Got My Love To Keep Me Warm',
      composer: 'Irving Berlin',
      chords: ["Eb6", "Gbdim7", "Fm7", "Bb7", "Am7b5", "D7b9", "Am7b5", "D7b9", "D7b9", "Fm7", "Bb7", "Fm7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Gm7", "Am7b5", "D7b13", "Gm7", "C7", "Fm7", "G7", "C7", "Fm7", "Bb7", "Eb6", "Gbdim7", "Fm7", "Bb7", "Am7b5", "D7b9", "Am7b5", "D7b9", "D7b9", "Fm7", "Bb7", "Fm7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'I\'ve Got The World On A String',
      composer: 'Harold Arlen',
      chords: ["F6", "Eb7", "D7", "", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abm7", "Gm7", "C7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "A7", "A7", "D7", "D7", "G7", "G7", "Gm7", "C7", "F6", "Eb7", "D7", "", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abm7", "Gm7", "C7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'I\'ve Got You Under My Skin',
      composer: 'Cole Porter',
      chords: ["Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7b5", "Bb7b9", "Ebmaj7", "Ebmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Fm7", "Bb7sus", "Ebmaj7", "C7b9", "Fm7", "Bb7sus", "Ebmaj7", "G7b9", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Gm7b5", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7"],
  },
  {
      title: 'I\'ve Grown Accustomed To Her Face',
      composer: 'Frederick Loewe',
      chords: ["Ebmaj7", "Ab7#11", "Gm7", "Cm7", "Fm7", "Bb7", "Am7b5", "D7b9", "Gm7", "C7b9", "Fm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ab7#11", "Gm7", "Cm7", "Fm7", "Bb7", "Am7b5", "D7b9", "Gm7", "Cm7", "Fm7", "Bb7", "Db7#11", "C7#5#9", "F7", "Abm6", "Gm7", "C7b9", "Fm7", "Fm7", "Eb6", "Bb7"],
  },
  {
      title: 'I\'ve Heard That Song Before',
      composer: 'Jule Styne',
      chords: ["Cmaj7", "C6", "C6", "Bm7", "E7", "E7", "A7", "A7", "D7", "D7", "Dm7", "G7", "Dm7", "G7", "C6", "G7#5", "C6", "Am7", "D7", "Dm7", "G7", "Cmaj7", "C6", "C6", "Bm7", "E7", "E7", "A7", "A7", "Dm7", "A7", "Dm7", "F6", "Bb7", "C6", "B7", "Bbmaj7", "A7", "Dm7", "Ab7#11", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'I\'ve Never Been In Love Before',
      composer: 'Frank Loesser',
      chords: ["Bb6", "Gm7", "Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Ebmaj7", "Cm7", "F7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "Gm7", "Em7b5", "A7", "Dmaj7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'I\'ve Told Eve\'ry Little Star',
      composer: 'Jerome Kern',
      chords: ["F6", "Dm7", "Gm7", "C7", "A7b9", "Dm7", "Bbm7", "Eb7", "Am7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Cmaj7", "Dm7", "G7", "Cmaj7", "Cdim7", "Bm7b5", "E7b9", "Am7", "Dm7", "G7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "A7b9", "Dm7", "Bbm7", "Eb7", "Am7", "Dm7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Idle Moments',
      composer: 'Grant Green',
      chords: ["Cm", "Cm", "Cm7", "Cm6", "Cm", "Cm", "Cm7", "Cm6", "Cm", "Cm", "Cm7", "Cm6", "Dm7b5", "G7b9", "Cm", "Cm", "Cm7", "Cm6", "Dm7b5", "G7b9", "Cm7", "Fm6", "G7b9", "Abmaj7", "Fm6", "G7b9", "Ab7#11", "Dm7b5", "G7b9", "Cm", "G7b9"],
  },
  {
      title: 'If Ever I Would Leave You',
      composer: 'Frederick Loewe',
      chords: ["Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "F7", "Dm7", "G7", "Cm7", "G7", "Cm7", "F7", "Dmaj7", "Bm7", "Em7", "A7", "Dmaj7", "Bm7", "Em7", "A7", "F#maj7", "Bmaj7", "A7", "Dmaj7", "F7", "Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Dm7", "Dbdim7", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'If I Could Be With You',
      composer: 'James Johnson',
      chords: ["Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Eb6", "Eb6", "C7", "F7", "Bb7", "Bb", "G7", "C7", "F7", "Bb6", "F7", "Bb7", "Fm7", "Bb7", "Bb7#5", "Eb6", "G7", "C7", "F7", "Bb7", "Eb6", "C7", "F7", "Bb7", "Fm7", "Bb7", "Bb7#5", "Eb6", "G7", "C7", "Ab6", "Adim7", "Eb6", "C7", "F7", "Bb7", "Eb6"],
  },
  {
      title: 'If I Didn\'t Care',
      composer: 'Jack Lawrence',
      chords: ["Bb6", "F7#5", "Bb6", "Bb6", "F7#5", "Bb6", "C7", "C7#5", "C7", "C7", "C7#5", "C7", "D7", "D7", "Gm7", "Gm7", "C7", "C7", "Cm7", "Ebm6", "F7", "Bb6", "F7#5", "Bb6", "Bb6", "F7#5", "Bb6", "C7", "Gm7", "C7", "Gm7", "C7", "C7", "Am7b5", "D7b13", "G7", "G7", "C7", "Cm7", "F7b9", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'If I Had You',
      composer: 'Campbell-Connelly-Shapiro',
      chords: ["Bbmaj7", "Bb7", "Ebmaj7", "Ebm6", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Dm7", "Em7b5", "A7b9", "Dm7", "Em7b5", "A7b9", "Dm7", "Bm7b5", "Em7b5", "A7b9", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Bb7", "Ebmaj7", "Ebm6", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7"],
  },
  {
      title: 'If I Knew Then (What I Know Now)',
      composer: 'Jurgens-Howard',
      chords: ["Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Abmaj7", "Db7#11", "Ebmaj7", "F7", "Fm7", "Bb7", "Eb6", "C7"],
  },
  {
      title: 'If I Loved You',
      composer: 'Richard Rodgers',
      chords: ["C6", "Cdim7", "C6", "Bm7", "E7", "F6", "G7", "Em7", "A7", "Dm7", "G7", "Am7", "Dm7", "Bm7b5", "E7b9", "Am7", "Dm7", "Bbmaj7", "D7", "G7", "C6", "Cdim7", "C6", "Bm7", "E7", "F6", "G7", "Em7b5", "A7b9", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'If I Ruled The World',
      composer: 'Leslie Bricusse',
      chords: ["Ebmaj7", "Ebmaj7", "Ebmaj7", "Bbm7", "Eb7", "Dm7", "Dm7", "G7", "G7", "Cm7", "Cm", "Cm7", "F7", "Ebmaj7", "Db7", "C7b9", "Fm7", "Bb7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "C6", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "G7", "Cm7", "Cm7", "Am7", "Fm7", "Bb7", "Ebmaj7", "Gm7b5", "C7b9", "C7b9", "Fm7", "Fm7", "Fm7", "Bb7", "Ebmaj7", "Gm7b5", "C7b9", "C7b9", "Fm7", "Gm7", "C9", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'If I Should Lose You',
      composer: 'Ralph Rainger',
      chords: ["Gm7", "Am7b5", "D7b9", "Gm7", "", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Cm7", "F7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Am7b5", "D7b9"],
  },
  {
      title: 'If I Were A Bell',
      composer: 'Frank Loesser',
      chords: ["G7", "C7", "Fmaj7", "Fmaj7", "Am7b5", "D7", "G7", "C7", "F6", "F7", "Bb6", "C7", "F6", "Em7b5", "A7", "Dm7", "Dm7", "Bm7b5", "E7", "Amaj7", "Gm7", "C7", "G7", "C7", "Fmaj7", "Fmaj7", "Am7b5", "D7", "G7", "C7", "F6", "F7", "Bb6", "Bdim7", "F6", "Bb7", "Am7b5", "D7", "Gm7", "C7", "F6", "Am7b5", "D7"],
  },
  {
      title: 'If There Is Someone Lovelier',
      composer: 'Dietz-Schwartz',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Bm7b5", "E7b9", "Am7", "D7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "C6", "Gm7", "C7", "Fmaj7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "C7", "Bm7b5", "E7b9", "Am7", "Am7", "D7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'If You Could See Me Now',
      composer: 'Tadd Dameron',
      chords: ["Ebmaj7", "Ab7", "Ebmaj7", "Abm7", "Db7", "Gm7", "F#m7", "B7", "", "Fm7", "Bb7", "Db7#11", "C7", "Fm7", "Bb7", "Am7", "D7", "Gmaj7", "E7", "Am7", "D7", "Bm7", "E7", "Am7", "", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Ebmaj7", "Abm7", "Db7", "Gm7", "F#m7", "B7", "", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'If You Ever Should Leave',
      composer: 'Cahn-Chaplin',
      chords: ["C", "C", "A7", "A7", "D7", "D7", "G7", "G7", "C7", "C7", "F", "F", "D7", "D7", "G7", "G7", "C", "C", "A7", "A7", "D7", "G7", "C", "", "C", ""],
  },
  {
      title: 'If You Never Come To Me (Inutil Paisagem)',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Cmaj7", "Bmaj7", "Bbmaj7#11", "A7b9", "Dm7", "Dm7", "Fm7", "Bb7", "E13", "E7b13", "A9", "A7b9", "D7#9", "G7", "C7", "F7", "Cmaj7", "Db7#11"],
  },
  {
      title: 'Ill Wind',
      composer: 'Harold Arlen',
      chords: ["Bb6", "Am7b5", "D7#11", "Dm7", "G7", "Ebm7", "Ab7", "Dm7", "G7", "Cm7b5", "F7b9", "Bb6", "G7#9", "Cm7", "F7#9", "Bbmaj7", "G7", "Cm7", "F7", "D7", "Em7", "Fdim7", "D7", "G7", "Am7", "Bbdim7", "G7", "D7", "Em7", "Fdim7", "D7", "G7", "Cm7b5", "F7b13", "Bb6", "Am7b5", "D7#11", "Dm7", "G7", "Ebm7", "Ab7", "Dm7", "G7", "Cm7b5", "F7b9", "Bb6", "Ebm7", "Ab7", "Bbmaj7", "Bbmaj7", "Ab7", "Bbmaj7", "Cm7", "F7"],
  },
  {
      title: 'Imagination',
      composer: 'Jimmy Van-Heusen',
      chords: ["Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7b5", "C7b9", "Fm7", "C7b13", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Abmaj7", "Fm7", "Am7b5", "D7b9", "Gm7", "C7", "A7b9", "Dm7", "Gm7", "Cm7", "F7", "Fm7", "Bb7", "Bb7#5", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7b5", "C7b9", "Fm7", "C7b13", "Fm7", "Bb7", "Db7#11", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Impressions',
      composer: 'John Coltrane',
      chords: ["Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11"],
  },
  {
      title: 'In A Little Spanish Town',
      composer: 'Wayne-Lewis-Young',
      chords: ["Gmaj7", "Gmaj7", "Am7", "D7", "D7", "D7", "G6", "Am7", "D7", "Gmaj7", "Bbdim7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Am7", "D7", "B7b9", "B7b9", "E7", "E7", "E7", "E7", "A7", "Bbdim7", "Gmaj7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'In A Mellow Tone (In A Mellotone)',
      composer: 'Duke Ellington',
      chords: ["Bb7", "Eb7", "Ab6", "Ab6", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Db6", "Gb7", "Ab6", "F7", "Bb7", "Bb7", "Eb7", "F7", "Bb7", "Eb7", "Ab6", "Ab6", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Db7", "Ddim7", "Ab6", "F7", "Bb7", "Eb7", "Ab6", "F7"],
  },
  {
      title: 'In a Sentimental Mood',
      composer: 'Duke Ellington',
      chords: ["Dm", "Dm", "Dm7", "Dm6", "Gm", "Gm", "Gm7", "", "Em7b5", "A7", "Dm", "D7", "Gm7", "C7b9", "Fmaj7", "", "Em7b5", "A7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Db6", "Bb7#5", "Eb7", "Ab7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Gm7", "C7", "Dm", "Dm", "Dm7", "Dm6", "Gm", "Gm", "Gm7", "", "Em7b5", "A7", "Dm", "D7", "Gm7", "C7b9", "F6", "", "Em7b5", "A7"],
  },
  {
      title: 'In A Shanty In Old Shanty Town',
      composer: 'Little-Siras',
      chords: ["Fmaj7", "A7", "D7", "D7", "G7", "Gb7", "G7", "G7", "C7", "C7", "F6", "F6", "D7", "G7", "G7", "Gm7", "C7", "Fmaj7", "A7", "D7", "D7", "G7", "Gb7", "G7", "G7", "Bb6", "Bbm6", "Fmaj7", "A7", "D7", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'In A Silent Way',
      composer: 'Josef Zawinul',
      chords: ["E", "D6", "D6", "Fmaj7#11", "E", "E", "G#m7", "Amaj7", "G#m7", "G#m7", "Dmaj7", "Dmaj7", "D", "C#m7", "", "Bm7", "E7", "C#m7", "C", "A", "A", "Dmaj9", "B", "B", "Bm6", "Bm7", "Bm7", "C", "C#m7", "E", "G#m7", "Amaj7", "G#m7", "G#m7", "Dmaj7", "Dmaj7", "D", "C#m7", "", "Bm7", "E7", "C#m7", "C", "A", "A", "Dmaj9", "C#m11"],
  },
  {
      title: 'In Her Family',
      composer: 'Pat Metheny',
      chords: ["G#m9", "Dmaj7", "Emaj9#11", "D#m7", "C#m7", "Emaj9", "F#", "Emaj9", "C#m7", "G#m9", "F#", "Aadd9", "E", "Bbmaj7#11", "E", "Bbmaj7#11", "E", "Bbmaj7#11", "E", "Cmaj7", "D", "Bbmaj7", "C", "Abmaj7", "E", "F#m7", "F#m7", "Ebm9", "Bbm11", "Dm9", "Am11", "C#m9", "G#m9", "Emaj7#11", "Emaj7#11", "E", "Bbmaj7#11", "E", "E"],
  },
  {
      title: 'In Love In Vain',
      composer: 'Leo Robin Jerome Kern',
      chords: ["Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Am7b5", "D7b9", "Gm7", "C7", "C7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Dm7b5", "G7b9", "Ebmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'In Pursuit Of The 27th Man',
      composer: 'Horace Silver',
      chords: ["C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "Gb7", "G7#9", "Cm7", "Cm7", "Gb7", "G7#9", "Ab7", "G7#9", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus", "C7b9sus"],
  },
  {
      title: 'In The Cool, Cool, Cool Of The Evening',
      composer: 'Hoagy Carmichael',
      chords: ["D6", "G6", "D6", "G6", "D6", "G6", "D6", "Eb6", "Ab6", "Eb6", "Ab6", "Eb6", "Ab6", "Eb6", "F7", "Bb6", "F7", "Bb6", "G7", "C6", "G7", "C7", "F6", "F6", "F6", "F#dim7", "Gm7", "C7", "C7", "C7", "C7b9", "F6", "C7", "F6", "F6", "F7", "Bbmaj7", "Bb6", "Eb7", "F6", "D7", "Gm7", "C7", "F6"],
  },
  {
      title: 'In The Middle Of A Kiss',
      composer: 'Sam Coslow',
      chords: ["Am7", "C7", "F7", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7", "Dm7", "A7", "Dm7", "Am7", "D7", "Dm7", "G7", "C6", "G7", "Cmaj7", "Am7", "Am7b5", "D7", "Dm7", "G7", "Bm7b5", "E7b9", "Am7", "C7", "F7", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7", "Dm7", "Db7", "C7sus", "C7", "Fmaj7", "Fm6", "Fm7", "Bb7", "Cmaj7", "Bb7", "A7", "Dm7", "A7", "Dm7", "G7", "C6", "E7b13"],
  },
  {
      title: 'In The Still Of The Night',
      composer: 'Cole Porter',
      chords: ["Fmaj7", "Fmaj7", "Bb7", "Bb7", "Fmaj7", "Fmaj7", "Bb7", "Bb7", "Gm7", "Gm7", "C7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bb7", "Bb7", "Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Am7", "D7", "D7", "Am7", "D7", "Gm7", "C7", "F6", "A7#5", "Bb7#11", "Bb7#11", "Gm7", "C7", "Fmaj7", "Fmaj7", "F6", "A7#5", "Bb7#11", "Bb7#11", "Gm7", "C7", "Am7b5", "Am7b5", "D7", "D7", "Gm7", "Gm7", "Bbm6", "Bbm6", "Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Gm7", "C7", "F6", "F6", "Abdim7", "Abdim7", "Gm7", "Gm7", "C7", "C7", "Fmaj7", "D7", "Gm7", "C7"],
  },
  {
      title: 'In The Wee Small Hours Of The Morning',
      composer: 'Mann-Hilliard',
      chords: ["Cmaj7", "C7", "C6", "Caug", "Cmaj7", "Caug", "Dm7", "G7", "Dm7", "G7", "Em7b5", "A7", "F#m7b5", "B7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "C7", "C6", "Caug", "Cmaj7", "Em7b5", "A7", "Dm7", "D#dim7", "Em7", "A7", "Dm7", "Ab7#11", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'In Walked Bud',
      composer: 'Thelonious Monk',
      chords: ["Fm", "Fm", "Fm7", "Bb7", "Eb7", "Ab6", "F7", "Bbm7", "Eb7", "Ab6", "Gm7b5", "C7b9", "Fm7", "Fm7", "Db7", "Db7", "Fm7", "Fm7", "Db7", "Db7", "Fm", "Fm", "Fm7", "Bb7", "Eb7", "Ab6", "F7", "Bbm7", "Eb7", "Ab6", "Gm7b5", "C7b9"],
  },
  {
      title: 'In Your Own Sweet Way',
      composer: 'Dave Brubeck',
      chords: ["Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7", "Bb7", "Ebmaj7", "Abm7", "Db7", "Gbmaj7", "Bmaj7", "F7alt", "B7", "Bb7", "Eb6", "Em7", "A7", "Dmaj7", "Em7", "A7", "Dmaj7", "Dm7", "G7", "Em7", "A7", "Dm7b5", "Ab7", "G7", "Cm7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7", "Bb7", "Ebmaj7", "Abm7", "Db7", "Gbmaj7", "Bmaj7", "F7alt", "B7", "Bb7", "Eb6", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus"],
  },
  {
      title: 'Incentive',
      composer: 'Horace Silver',
      chords: ["Dm7b5", "G13b9", "Cm7b5", "F13b9", "Bbm7b5", "Eb13b9", "Am7", "D9", "Dbmaj7", "C13b9", "Fm7", "Fm7", "Dm11", "G7", "Cmaj7", "Am7", "Dm7", "G13", "C69", "Bbm7", "Eb9"],
  },
  {
      title: 'Inch Worm, The',
      composer: 'Frank Loesser',
      chords: ["Fmaj7", "Ebmaj7", "Fmaj7", "Ebmaj7", "Fmaj7", "Fmaj7", "F7", "", "Bbmaj7", "Bbmaj7", "Bbm6", "", "Fmaj7", "Fmaj7", "G7", "", "Gm7", "Gm7", "C7", "", "Fmaj7", "Ebmaj7", "Fmaj7", "Ebmaj7", "Fmaj7", "Bbmaj7", "Bbmaj7", "Bbm6", "", "F6", "F6", "C7", "", "F6", "F13", "Eb13", "F13"],
  },
  {
      title: 'Indian Summer',
      composer: ' Victor-Aldubin-Herbert',
      chords: ["Gmaj7", "D7#5", "Gmaj7", "D7#5", "Gmaj7", "C7#11", "Bm7", "Bbdim7", "Am7", "D7", "Am7", "F#m7b5", "B7b9", "Em7", "Em7", "A7", "A7", "Am7", "D7", "Gmaj7", "D7#5", "Gmaj7", "D7#5", "Gmaj7", "C7#11", "Bm7", "Bbdim7", "Am7", "D7", "Gmaj7", "Bm7", "Em7", "Eb7", "Bbm7", "Eb7", "Bm7", "Bb7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'Indiana (Back Home Again In)',
      composer: 'James Hanley',
      chords: ["Fmaj7", "Eb7", "D7", "G7", "G7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Fmaj7", "D7", "G7", "G7", "Gm7", "C7", "Fmaj7", "Eb7", "D7", "G7", "G7", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7", "Dm", "Dm7", "Bdim7", "Am7", "D7", "Gm7", "C7", "F6", "F#dim7", "Gm7", "C7"],
  },
  {
      title: 'Infant Eyes',
      composer: 'Wayne Shorter',
      chords: ["Gm7", "Fm7", "Ebmaj7", "A13b9", "Gbmaj7", "F7sus", "Ebm7", "Bb7sus", "Bb7alt", "Ebmaj7", "Emaj7", "Ebmaj7#11", "Emaj7", "Bmaj7", "Bb7sus", "Abm7", "Eb7sus", "D7b9", "Gm7", "Fm7", "Ebmaj7", "A13b9", "Gbmaj7", "F7sus", "Ebm7", "Bb7sus", "Bb7sus"],
  },
  {
      title: 'Inner Urge',
      composer: 'Joe Henderson',
      chords: ["F#m7b5", "F#m7b5", "F#m7b5", "F#m7b5", "Fmaj7#11", "Fmaj7#11", "Fmaj7#11", "Fmaj7#11", "Ebmaj7#11", "Ebmaj7#11", "Ebmaj7#11", "Ebmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Dbmaj7#11", "Emaj7#11", "Dbmaj7#11", "Dmaj7#11", "Bmaj7#11", "Cmaj7", "Amaj7", "Bb7", "Gmaj7"],
  },
  {
      title: 'Interplay',
      composer: 'Bill Evans',
      chords: ["Fm6", "Fm6", "Fm6", "Fm6", "F7b9", "Bbm7", "Bbm7", "Fm6", "Fm6", "Db7", "C7b9", "Fm6", "Gm7b5", "C7b9"],
  },
  {
      title: 'Intrepid Fox, The',
      composer: 'Freddie Hubbard',
      chords: ["Cm7", "", "", "Cm7", "Cm7", "Cm7", "Cm7", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "A7sus", "", "F#7sus", "Eb7sus", "C7sus", "", "A7sus", "F#7sus", "F7sus", "F7sus", "F7sus", "F7sus", "Bb7sus", "Db7sus", "Eb7sus", "Bb7sus", "Db7sus", "Eb7sus", "F7sus", "Bb7sus", "Db7sus", "Eb7sus", "F7sus", "G7sus", "A7sus", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bmaj7#11", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "F7sus", "F7sus", "F7sus", "F7sus", "F7sus", "F7sus"],
  },
  {
      title: 'Invitation',
      composer: 'Bronislau Kaper',
      chords: ["Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "F7", "Bb7", "Bb7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ab7", "Db7#11", "Db7#11", "C#m7", "F#7", "F#7alt", "Bm7", "Bm7", "Bm7", "E7", "E7alt", "Am7", "Am7", "Am7", "D7", "D7alt", "Gm7", "Gm7", "Eb7#11", "Eb7#11", "D7b9", "G7alt", "B7#11", "B7#11", "Fm7b5", "Bb7#9", "Ebm", "Ebm"],
  },
  {
      title: 'Iris',
      composer: 'Wayne Shorter',
      chords: ["Fm11", "Fm11", "Emaj7#11", "Gbmaj7#11", "Bb7#5", "Db7#11", "Abmaj7#5", "Abmaj7#5", "Cm7", "Cm7", "Db7#11", "Cm7", "Db7#11", "Dbmb6", "Db7#11", "Db7#11"],
  },
  {
      title: 'Irresistable You',
      composer: 'Gene DePaul',
      chords: ["Gm7", "C7", "Fmaj7", "Gm7", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", "Gm7", "Am7", "Bbmaj7", "", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "Abdim7"],
  },
  {
      title: 'Is That So?',
      composer: 'Duke Pearson',
      chords: ["Fm7", "Ebm9", "Bmaj7", "C#m9", "Amaj7", "Dmaj7", "Gmaj7", "Gb7#5", "F13", "E7b9", "Ebmaj7", "Am7", "D7", "Gmaj7", "Cm7", "F7", "Bbmaj7", "A7#5", "Ab13", "G7b9", "Gbmaj7", "Ebm7", "Dbm7", "Amaj7", "Bm9", "Gmaj7", "Cmaj7", "Fmaj7", "E7#5", "Eb13", "D7b9", "Dbmaj7", "Gm7", "C7", "Abm7", "Db7", "Am7", "D7", "Ebmaj7", "Cm7", "Bbm9", "Gbmaj7", "Abm9", "Emaj7", "Amaj7", "Dmaj7", "Fmaj7#11"],
  },
  {
      title: 'Is You Is Or Is You Ain\'t (Ma\' Baby)',
      composer: 'Austin-Jordan',
      chords: ["Fm7", "Fm7", "Db7", "C7", "Fm7", "Fm7", "Db7", "C7", "Bb7", "Bb7", "Eb7", "Db7", "C7", "Fm7", "Fm7", "Db7", "C7", "Fm7", "B7#11", "Bb7", "Eb7", "Ab6", "Gm7b5", "C7b9", "Fm7", "Fm7", "Db7", "C7", "Fm7", "B7#11", "Bb7", "Eb7", "Ab6", "Ebm7", "Ab7", "Db7", "Ddim7", "Abmaj7", "Abmaj7", "Ebm7", "Ab7", "Db7", "Gb7", "Cm7", "F7", "Bbm7", "", "Gm7b5", "C7", "Fm7", "Fm7", "Db7", "C7", "Fm7", "B7#11", "Bb7", "Eb7", "Cm7", "F7", "Bb7", "Eb7", "Ab6", "Db7", "C7"],
  },
  {
      title: 'Isfahan',
      composer: 'Strayhorn-Ellington',
      chords: ["Dbmaj7", "Bbmaj7", "Bb7#5", "Eb9", "Eb9", "Amaj7", "Ab13b9", "Dbmaj7", "Dbmaj7", "Gm7b5", "C7b9", "Fm6", "Am7b5", "D7b9", "Gm6", "Gm7b5", "C7b9", "Fmaj7", "Emaj7", "Ebmaj7", "Dmaj7", "Dbmaj7", "Bbmaj7", "Bb7#5", "Eb9", "Eb9", "Amaj7", "Ab13b9", "Db7#11", "Db7#11", "Gbmaj7", "C7#9", "F7#11", "Bb7", "Eb13", "Ab13b9", "Ab9#5", "Db6", "Ebm7", "Ab7"],
  },
  {
      title: 'Island Birdie',
      composer: 'McCoy Tyner',
      chords: ["Eb6", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7", "Dm7b5", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "Ab7sus", "Ab7", "Ab7", "F#m7", "B7", "F#m7", "B7", "Ab7sus", "Ab7", "Ab7", "Fm7", "Bb7", "F#m7", "B7", "Ab7sus", "Bb7sus", "Bb7", ""],
  },
  {
      title: 'Isn\'t It A Pity',
      composer: 'George Gershwin',
      chords: ["Cmaj7", "Am7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "G7", "Cmaj7", "", "Gm7", "C7", "F", "Em7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Em7", "C#7b13", "F#m7b5", "B7b9", "Em7", "A7", "D7sus", "Gmaj7", "Em7", "Am7", "D7", "G7sus", "F7#11", "Db7#11", "Cmaj7", "Am7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "G7", "Cmaj7", "", "Gm7", "C7", "F", "Em7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Isn\'t It Romantic?',
      composer: 'Richard Rodgers',
      chords: ["Eb6", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Bb7", "G7", "Cm", "G7", "Bbm7", "Eb7", "Abmaj7", "C7", "Fm", "", "Dm7b5", "G7", "Cm", "F7", "Bb7alt", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Fm", "Fm", "Dm7b5", "G7b9", "Cm", "Cm", "Cm", "Abm6", "Gm7", "Gb7", "Fm7", "Bb7", "Eb6", "Abm6", "Eb6"],
  },
  {
      title: 'Isn\'t This A Lovely Day (To Be Caught In The Rain)',
      composer: 'Irving Berlin',
      chords: ["Ebmaj7", "Ebm6", "F7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm6", "F7", "Bbmaj7", "Bbmaj7", "Dm7", "Dbdim7", "Cm7", "Bdim7", "Cm7", "F7", "Bbmaj7", "A7#5", "Ab7", "Db7", "Cm7", "F7", "Ebmaj7", "Ebm6", "F7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm6", "F7", "Bbmaj7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "C7", "Ebmaj7", "Ebm6", "F7", "Bb6", "Dbdim7", "Cm7", "F7"],
  },
  {
      title: 'Isotope',
      composer: 'Joe Henderson',
      chords: ["C7", "A7", "Eb7", "D7", "G7", "C7", "G7", "C7", "F7", "Bb7", "C7", "A7sus", "Ab7sus", "Dm7", "G7", "C7", "A7", "Gb7", "Eb7", "C7", "C7", "C7", "C7", "F7", "Bb7", "C7", "A7", "Ab7", "G7", "C7", "A7", "Gb7", "Eb7"],
  },
  {
      title: 'Israel',
      composer: 'John Carisi',
      chords: ["Dm", "Dmb6", "Dm6", "D7#9", "Gm", "Gm", "Gm7", "Gm6", "Dm7", "Em7", "Fmaj7", "Bb7", "A7b9", "Dm", "F7", "Bb7", "A7b13"],
  },
  {
      title: 'It Ain\'t Necessarily So',
      composer: 'George Gershwin',
      chords: ["Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "C7", "Db7", "C7", "Db7", "A7b9#5", "D7#9", "Gm7", "C7", "Bbm7", "Eb7", "Abmaj7", "Am7", "D7", "Gmaj7", "Gm7", "C7", "Fmaj7", "A7", "D7b13", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "C7", "Db7", "C7", "Db7", "A7b9#5", "D7#9", "Gm7", "C7"],
  },
  {
      title: 'It Could Happen To You',
      composer: 'Jimmy Van-Heusen',
      chords: ["Ebmaj7", "Edim7", "", "Fm7", "F#dim7", "", "Ebmaj7", "Abmaj7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "F7", "Fm7", "", "Bb7", "", "Ebmaj7", "Edim7", "", "Fm7", "F#dim7", "", "Ebmaj7", "Abmaj7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'It Don\'t Mean A Thing',
      composer: 'Duke Ellington',
      chords: ["Gm", "Gm", "Gm", "C7", "Eb7", "D7", "Gm", "C7", "C#dim7", "Bb6", "D7b5", "Fm7", "Bb7", "Eb6", "Eb6", "Gm7", "C7", "F7", "D7", "Gm", "Gm", "Gm", "C7", "Eb7", "D7", "Gm", "C7", "C#dim7", "Bb6", "Bb6"],
  },
  {
      title: 'It Had To Be You',
      composer: 'Isham Jones',
      chords: ["Gmaj7", "D7#5", "Gmaj7", "F7", "E7", "Bm7", "E7", "A7", "Em7", "A7", "Em7", "A7", "Em7", "A7", "D7", "F#m7b5", "B7b9", "Em7", "B7b9", "Em7", "Bb7#11", "A7", "Em7", "A7", "Am7", "D7", "D7#5", "Gmaj7", "D7#5", "Gmaj7", "F7", "E7", "Bm7", "E7", "A7", "Em7", "A7", "Em7", "A7", "Em7", "A7", "", "Dm7", "G7", "Cmaj7", "F7", "Gmaj7", "B7b9", "Em7", "Bbdim7", "D7", "Abdim7", "D7", "D7", "G6", "E7", "Am7", "D7"],
  },
  {
      title: 'It Might As Well Be Spring',
      composer: 'Richard Rodgers',
      chords: ["Gmaj7", "Am7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Gmaj7", "Dm7", "G7", "Cmaj7", "C#m7b5", "F#7b9", "Bm7", "E7", "Am7", "D7", "Bm7", "Em7", "Am7", "D7", "Cmaj7", "Am7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Bm7b5", "E7", "Am7", "Am7", "F#m7b5", "B7b9", "Em7", "A7", "Am7", "D7", "Bm7", "E7", "A7", "A7", "Cm7", "F7", "Gmaj7", "Gmaj7", "Em7", "Em7", "C#m7b5", "Cm6", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Gmaj7", "Am7", "D7"],
  },
  {
      title: 'It Never Entered My Mind',
      composer: 'Richard Rodgers',
      chords: ["F", "Faug", "F6", "Faug", "Fmaj7", "", "Gm7", "", "Am7", "Gm7", "Fmaj7", "Bb7", "Fmaj7", "D7", "G7sus", "G7", "Gm7", "C7", "Fmaj7", "", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "Am7", "", "Bm7b5", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Faug", "F6", "Faug", "Fmaj7", "", "Gm7", "", "Am7", "Gm7", "Fmaj7", "Bb7", "Am7b5", "D7b9", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "", "Gm7", "C7"],
  },
  {
      title: 'It Only Happens When I Dance With You',
      composer: 'Irving Berlin',
      chords: ["Cmaj7", "C#dim7", "Dm7", "G7", "Cmaj7", "C#dim7", "Dm7b5", "G7", "Fmaj7", "Fm6", "Cmaj7", "Cmaj7", "Em7", "A7b9", "Dm7", "G7b9"],
  },
  {
      title: 'It Was So Good While It Lasted',
      composer: 'Poll-Ackers',
      chords: ["Cmaj7", "B7", "Em7b5", "A7b9", "Dm7", "Dm7", "Bb7", "Am7", "Am7", "F#m7b5", "D7", "Am7", "D7", "Ab7#11", "G7", "Emaj7", "Fdim7", "F#m7", "B7", "G#m7", "Gdim7", "F#m7", "B7", "Gmaj7", "G#dim7", "Am7", "D7", "Dm7", "G7sus", "G7", "Cmaj7", "B7", "Em7b5", "A7b9", "Dm7", "Dm7", "Bb7", "Am7", "Am7", "F#m7b5", "D7", "Dm7", "G7", "C6", "G7sus"],
  },
  {
      title: 'It\'s A Big Wide Wonderful World',
      composer: 'John Rox',
      chords: ["Dbmaj7", "Dbmaj7", "Dbmaj7", "G7b9", "Cm7", "Cm7", "F7", "F7", "Bbm7", "Bbm7", "Eb7", "Eb7", "Abmaj7", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Bbm7", "Ebm7", "Cm7", "Cm7", "Fm7", "Fm7", "Bbm7", "Bbm7", "Eb7", "Eb7", "Abmaj7", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Dbmaj7", "G7b9", "Cm7", "Cm7", "F7", "F7", "Bbm7", "Bbm7", "Eb7", "Eb7", "Ab6", "Ab6", "Ebm7", "Ab7"],
  },
  {
      title: 'It\'s A Blue World',
      composer: 'Wright-Forrest',
      chords: ["Gm9", "Gm9", "C7#5", "Fmaj9", "Fmaj9", "Cm9", "Cm9", "F7#5", "Bbmaj9", "Bbmaj9", "Bbmaj9", "Bbm9", "C7b9", "Fmaj7", "F7", "Bbm7", "Db7", "C7", "Bbm6", "C7", "Gm9", "Gm9", "C7#5", "Fmaj9", "Fmaj9", "Cm9", "Cm9", "F7#5", "Bbmaj9", "Bbmaj9", "Bbmaj9", "Bbm9", "Eb7", "Fmaj7", "Gm7", "Am7b5", "D7", "G7", "Gm7", "C7", "F6", "Am7b5", "D7"],
  },
  {
      title: 'It\'s A Dance',
      composer: 'Michel Petrucciani',
      chords: ["Ebmaj7", "A7#5", "G7#5", "Bm7", "E7", "Gmaj7", "A7", "Am7", "D7", "Gmaj7", "F#7", "Bm7", "E7", "Fm7", "Bb7", "Ebmaj7", "Eb7", "D7", "Ebmaj7", "A7#5", "G7#5", "Bm7", "E7", "Gmaj7", "A7", "Am7", "D7", "Gmaj7", "F#7", "Bm7", "E7", "Em7", "A7", "Dmaj7", "Fm7", "Bb7", "Ebmaj7", "G7b9", "Cm7", "F7", "Fm7", "B7", "Bmaj7", "F#7", "Bmaj7", "F#7", "Bmaj7", "F#7", "Ebmaj7", "Bb7", "Em7", "A7", "Dm7", "Dm7"],
  },
  {
      title: 'It\'s A Good Day',
      composer: 'Peggy Lee',
      chords: ["C6", "C6", "C6", "C6", "Dm7", "G7", "C6", "C6", "C6", "C6", "C6", "C6", "Dm7", "G7", "C6", "C6", "C7", "C7", "F", "F", "D7", "D7", "G7", "G7", "C6", "Dbdim7", "G7", "D#dim7", "Em", "Ebdim7", "Dm7", "Dbdim7", "C6", "C6", "C6", "C6", "Dm7", "G7", "C6", "C6", "C6", "C6", "C6", "C6", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'It\'s A Lovely Day Today',
      composer: 'Irving Berlin',
      chords: ["Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "D7b9", "Gm7", "C7", "F7b9"],
  },
  {
      title: 'It\'s A Raggy Waltz',
      composer: 'Dave Brubeck',
      chords: ["G7", "G7", "C7", "", "C7", "Gdim7", "G7", "G7", "C7", "C7", "", "C#dim7", "C#dim7", "G7", "G", "E7", "E7", "", "A7b9", "D7b9", "G", "G7", "C", "", "G", "Cmaj7", "Bm7", "Em7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Em7", "Eb7", "D7", "G", "D7", "Gdim7", "Gdim7", "", "G7", "G7", "C7", "C7", "", "C#dim7", "C#dim7", "G7", "G", "E7", "E7", "", "A7b9", "D7b9", "G", "G7", "C", "", "G"],
  },
  {
      title: 'It\'s All Right With Me',
      composer: 'Cole Porter',
      chords: ["Cm", "Cm", "Cm7", "Cm6", "Cm7", "Cm7", "Fm7", "Fm7", "F#dim7", "F#dim7", "Gm7b5", "C7b9", "F7", "F7", "Dm7b5", "G7b9", "Bbm6", "Bbm6", "Ebdim7", "Ebdim7", "Abdim7", "Ab", "Ebmaj7", "Ebmaj7", "Bbm6", "Bbm6", "Ebdim7", "Ebdim7", "Abdim7", "Ab", "Dm7b5", "G7b9", "F7", "F7", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Adim7", "Bb7sus", "Bb7", "Eb6", "G7b9"],
  },
  {
      title: 'It\'s Been A Long Long Time',
      composer: 'Jule Styne',
      chords: ["F", "Fmaj7", "F6", "F6", "F#dim7", "C7", "Gm7", "D7", "Gm7", "C7", "Gm7", "C7#5", "Fmaj7", "Fmaj7", "Am7b5", "D7b9", "Gm7", "Bbm6", "Db7", "C7", "F", "Fmaj7", "Am7", "D7", "Gm7", "Gb7", "F6", "", "Gm7", "C7"],
  },
  {
      title: 'It\'s De-lovely',
      composer: 'Cole Porter',
      chords: ["F", "Faug", "F6", "Fmaj7", "F6", "F#dim7", "Gm7", "Am7b5", "D7b9", "Gm", "Gmb6", "Gm6", "C7", "Gm7", "G#dim7", "F6", "Gm7", "C7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "", "Cm7", "C#m7", "Dm7", "Cm7", "Bbmaj7", "", "Bbm6", "Bbm6", "C7", "C7sus", "C7", "F", "Faug", "F6", "Fmaj7", "F", "Fmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'It\'s Easy To Remember',
      composer: 'Richard Rodgers',
      chords: ["Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Cm7", "F7", "Fm7", "Bb7", "Gm7", "C7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gbmaj7", "Cm7", "F7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Cm7", "F7", "Fm7", "Bb7", "Eb6"],
  },
  {
      title: 'It\'s Impossible',
      composer: 'Armando Manzanero',
      chords: ["G", "G6", "Gmaj7", "G6", "F#m7b5", "B7", "Em7", "Dm7", "G7sus", "Bm7b5", "E7", "Am7", "F9", "Gmaj7", "E7", "Am7", "A7", "D7", "Am7", "D7"],
  },
  {
      title: 'It\'s Just Talk',
      composer: 'Pat Metheny',
      chords: ["C#m9", "C#m9", "C9#11", "C9#11", "C#m9", "C#m9", "C9#11", "C9#11", "C#m9", "C#m9", "C9#11", "C9#11", "F#m7", "F#m7", "Gadd9", "G", "", "A", "C#m9", "C#m9", "C#m9", "C9#11", "C9#11", "F#m9", "E", "Amaj7", "C", "C", "Gmaj9", "Bb9", "Ebmaj9", "Amaj7", "E69", "E69", "Gmaj7", "Dmaj9", "Amaj7", "Emaj9", "Bmaj7", "F#maj9", "F#m9", "Amaj7"],
  },
  {
      title: 'It\'s Magic',
      composer: 'Jule Styne',
      chords: ["Bbmaj7", "Ebmaj7", "Bb", "Dbdim7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "F7sus", "F7", "Bbmaj7", "Eb7", "Dm7", "Dbdim7", "Cm7", "F7", "Gm7", "C7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Bb", "Dbdim7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Dm7b5", "G7b9", "Cm7", "Ebm7", "Ab7", "Bb6", "Gm7", "Cm7", "F7", "Dm7", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7b9"],
  },
  {
      title: 'It\'s Only a Paper Moon',
      composer: 'Harold Arlen',
      chords: ["Gmaj7", "E7", "Am7", "D7", "Am7", "D7", "Gmaj7", "", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Am7b5", "D7", "G6", "", "Am7", "D7", "Cmaj7", "C#dim7", "Gmaj7", "E7", "Am7", "D7", "G6", "G7", "Cmaj7", "C#dim7", "Gmaj7", "Bm7b5", "E7b9", "Am7", "D7", "Gmaj7", "E7", "Am7", "D7", "Am7", "D7", "Gmaj7", "", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Am7b5", "D7", "G6", "", "Am7", "D7"],
  },
  {
      title: 'It\'s The Talk Of The Town',
      composer: 'Jerry Livingston',
      chords: ["Fmaj7", "Abdim7", "Gm7", "C7", "Fmaj7", "F7#5", "Bbmaj7", "Eb7", "Fmaj7", "E7", "Eb7", "D7", "G7", "Gm7", "C7", "Gm7", "D7", "Gm7", "D7", "Gm7", "Am7b5", "D7b9", "G7", "Dm7", "G7", "D7", "Dm7", "G7", "C7#5", "Fmaj7", "Abdim7", "Gm7", "C7", "Fmaj7", "F7#5", "Bbmaj7", "Eb7", "Fmaj7", "E7", "Eb7", "D7", "G7", "C7", "F6", "C7"],
  },
  {
      title: 'It\'s You Or No One',
      composer: 'Jule Styne',
      chords: ["Gm7", "C7", "Fmaj7", "Bb7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "D7", "Gm7", "C7", "Am7b5", "D7b9", "Bm7b5", "Bbm7", "Eb7", "Am7", "Dm7", "Abm7", "Db7", "Gm7", "C7", "F6", "Am7", "D7"],
  },
  {
      title: 'Jackie-ing',
      composer: 'Thelonious Monk',
      chords: ["Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Cm11", "F9sus", "F9sus", "Bbmaj7#11", "Bbmaj7#11", "G7b9", "F7", "C7", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11"],
  },
  {
      title: 'Jaco',
      composer: 'Pat Metheny',
      chords: ["Gsus", "Gsus", "Eb", "Eb", "Cm7", "", "", "", "Cm7", "", "", "", "Dbmaj7", "Db9", "Cm7", "Cm7", "Cm7", "Dbmaj7", "Db9", "Cm7", "Abmaj7", "Ab7", "Gm7", "C7", "Abmaj7", "Gm7", "Cm7", "Dbmaj7", "Cm7", "Ab7", "D7#9", "G7#5", "Cm7", "Cm7", "Abmaj9", "Dbmaj7", "G7#5"],
  },
  {
      title: 'James',
      composer: 'Pat Metheny',
      chords: ["D#6", "B", "G", "A", "C6", "Cdim7", "G", "Gm", "D", "Fmaj7", "D", "Gadd9", "", "G", "A", "Dmaj7", "Gmaj7", "A", "Bm7", "Gmaj7", "F#m7", "Gmaj7", "F#m7", "Dmaj7", "Gmaj7", "C#m7b5", "F#7", "Bm7", "", "Gmaj7", "F#m7", "Gmaj7", "F#m7", "Gmaj7", "G", "D", "", "G", "A", "A", "F#7", "Bm", "A", "D", "C#", "F#m", "E", "A", "A", "D", "Bm7", "Em7", "A", "Gmaj7", "A", "Dmaj7", "Gmaj7", "A", "Bm7", "Gmaj7", "F#m7", "Gmaj7", "F#m7", "D7", "G7", "C#m7b5", "F#7", "Bm7", "", "Gmaj7", "F#m7", "Gmaj7", "F#m7", "Gmaj7", "G", "D", "", "G", "A", "G", "G", "Bm7", "D7", "G", "F#m", "G", "F#m", "Gmaj7", "G", "D"],
  },
  {
      title: 'Jazz Folk',
      composer: 'John Abercrombie',
      chords: ["Cmaj7", "Fmaj7", "Am7", "Ab7#11", "G7sus", "G7", "C7sus", "C7", "Fmaj7", "Fm7", "Em7", "A7b9", "Dm7", "G7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7", "Dm7", "G7", "Em7", "B7#9", "Em7", "B7#9", "Em7", "B7#9", "Em", "Eb7#11", "Dm", "Gm7b5", "Dbmaj7", "Bbm7", "Ebm7", "G7sus", "G7"],
  },
  {
      title: 'Je Ne Sais Pas',
      composer: 'Hampton-Jones',
      chords: ["Fmaj7", "", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Fmaj7", "D7", "Bbmaj7", "Bdim7", "Fmaj7", "D7b9", "Gm7", "C7", "F6", "Bb6", "Bdim7", "F6", "F7", "Bb6", "Bdim7", "Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Fmaj7", "D7", "Bbmaj7", "Bdim7", "Fmaj7", "D7b9", "Gm7", "C7", "F6"],
  },
  {
      title: 'Jeannie\'s Song',
      composer: 'Marchel Ivery',
      chords: ["Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bb9", "Am7", "Abdim7", "", "Gm7", "C7", "Fmaj7", "Em7", "A7", "Dmaj7", "A7", "Dm7", "G7"],
  },
  {
      title: 'Jeannine',
      composer: 'Duke Pearson',
      chords: ["Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "F#m7", "B7", "Emaj7", "A7", "Bbm7", "Eb7#9", "Abmaj7", "Eb7#9", "Dbmaj7", "Gm7b5", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "Abm7", "F#m7", "B7", "Emaj7", "A7", "Bbm7", "Eb7#9", "Abmaj7", "Eb7b9"],
  },
  {
      title: 'Jeepers Creepers',
      composer: 'Harry Warren',
      chords: ["Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Cm7", "F7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Bb6", "Gm7", "Cm7", "F7", "Ab7", "G7", "Cm7", "F7", "Bb6", "G7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Jersey Bounce',
      composer: 'Plater-Bradshaw-Johnson',
      chords: ["F6", "F6", "G7", "G7", "Gm7", "C7", "F6", "Abdim7", "Gm7", "C7", "F7", "F7", "Eb7", "Eb7", "Db7", "Db7", "C7", "C7#5", "F6", "F6", "G7", "G7", "Gm7", "C7", "F6", "Db7", "F6"],
  },
  {
      title: 'Jinrikisha',
      composer: 'Joe Henderson',
      chords: ["Dbmaj7#11", "Dbmaj7#11", "C9sus", "C9sus", "Bbm6", "Bbm6", "Abmaj7", "Abmaj7", "Gbmaj7#11", "Gbmaj7#11", "Fm7", "Gb13", "Fm7", "Gb13", "Gm7b5", "C7#9"],
  },
  {
      title: 'Jitterbug Waltz',
      composer: 'Fats Waller',
      chords: ["Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ab7", "Ab7", "Ab7", "Ab7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Gm7", "C7", "Gm7", "C7", "F7", "F7", "F7", "F7", "Abm7", "Abm7", "Db7#11", "Db7#11", "F7", "F7", "Bb7", "Bb7", "Gm7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Jody Grind, The',
      composer: 'Horace Silver',
      chords: ["Bbm7", "Bbm7", "Bbm7", "Bbm7", "Eb7", "Eb7", "Bbm7", "Bbm7", "A13", "B13", "Bbm7", "Bbm7"],
  },
  {
      title: 'Joker, The',
      composer: 'Lee Morgan',
      chords: ["Eb6", "C7#9", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7#9", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "C7#9", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Fm7", "Bb7", "Eb6"],
  },
  {
      title: 'Jordu',
      composer: 'Duke Jordan',
      chords: ["D7", "G7", "Cm6", "F7", "Bb7", "Ebmaj7", "D7", "G7", "Cm6", "Ab7", "Ab7", "G7", "C7", "F7", "Bb7", "Eb7", "Ab7", "Dbmaj7", "F7", "Bb7", "Eb7", "Ab7", "Db7", "Gb7", "Bmaj7", "D7", "G7", "Cm6", "F7", "Bb7", "Ebmaj7", "D7", "G7", "Cm6", "Ab7", "Ab7"],
  },
  {
      title: 'Joshua',
      composer: 'Victor Feldman',
      chords: ["Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm7", "Cm7", "Bbm7", "Cm7", "Dm7", "Dm7", "Fmaj7", "Fm7", "Bb7#5#9", "Ebmaj7", "Ebm7", "Ab7#5#9", "Dbmaj7", "G7#5#9", "Cm7", "Bbm7", "E7#5#9", "A7b9#5", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm7", "Cm7", "Bbm7", "Cm7", "Dm7", "Dm7"],
  },
  {
      title: 'Joy Spring',
      composer: 'Clifford Brown',
      chords: ["Fmaj7", "Gm7", "C7", "Fmaj7", "Bbm7", "Eb7", "Am7", "Ab7", "Gm7", "C7", "Fmaj7", "Abm7", "Db7", "Gbmaj7", "Abm7", "Db7", "Gbmaj7", "Bm7", "E7", "Bbm7", "A7", "Abm7", "Db7", "Gbmaj7", "Am7", "D7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Bbm7", "Eb7", "Am7", "Ab7", "Gm7", "C7", "Fmaj7", "Gm7", "C7"],
  },
  {
      title: 'Juju',
      composer: 'Wayne Shorter',
      chords: ["B7#5", "B7#5", "B7#5", "B7#5", "B7#5", "B7#5", "B7#5", "B7#5", "Bb7#5", "Bb7#5", "A7", "A7", "Abmaj7", "Abmaj7", "Em7", "Em7", "Fmaj7", "Fmaj7", "Bm7", "Bm7", "Fmaj7", "Fmaj7", "Bm7", "Bm7"],
  },
  {
      title: 'Jumpin With Symphony Sid',
      composer: 'Lester Young',
      chords: ["Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "F7", "Eb7", "Bb7", "Bb7"],
  },
  {
      title: 'Just A Gigolo',
      composer: 'Leonello Casucci',
      chords: ["F", "Fmaj7", "F", "Abdim7", "Gm7", "D7", "Gm", "Gm7", "C7", "F", "F7", "Eb7", "D7", "Gm7", "Bbm7", "Eb7", "Am7", "D7", "Gm7", "C7", "F", "C7"],
  },
  {
      title: 'Just A-Sittin\' And A-Rockin',
      composer: 'Ellington-Strayhorn-Gaines',
      chords: ["Ab", "Ab7", "Db", "Ab6", "Db", "Ab", "Bbm7", "Eb7", "Ab6", "", "Db", "Ab", "Db", "Ddim7", "Db", "Ddim7", "Ab", "Fm7", "Bbm7", "Eb7", "Ab6", "", "Cm", "Cmaug", "Cm6", "Cmb6", "Cm", "Cmaug", "Dm7", "G7", "C", "Caug", "C6", "C#dim7", "Dm7", "G7", "Bbm7", "Eb7", "Ab", "Ab7", "Db", "Ab6", "Db", "Ab", "Bbm7", "Eb7", "Ab6", "", "Db", "Ab", "Db", "Ddim7", "Db", "Ddim7", "Ab", "Fm7", "Bbm7", "Eb7", "Ab6", ""],
  },
  {
      title: 'Just Friends',
      composer: 'John Klenner',
      chords: ["Cmaj7", "Cmaj7", "Cm7", "F7", "Gmaj7", "Gmaj7", "Bbm7", "Eb7", "Am7", "D7", "Gmaj7", "Em7", "A7", "A7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Cm7", "F7", "Gmaj7", "Gmaj7", "Bbm7", "Eb7", "Am7", "D7", "F#m7b5", "B7b9", "Em7", "A7", "Am7", "D7", "G6", "Dm7", "G7"],
  },
  {
      title: 'Just In Time',
      composer: 'Jule Styne',
      chords: ["Bbmaj7", "Bbmaj7", "Am7b5", "D7b9", "G7", "G7", "C7", "C7", "F7", "F7", "Bb7", "Bb7", "Ebmaj7", "Ebmaj7", "Abmaj7", "Am7b5", "D7b9", "Gm7", "Gm", "Gm", "C7", "C#dim7", "Bb6", "Bb6", "Ab7", "G7", "C7", "F7", "Dm7", "Gm7", "C7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Just In Tune',
      composer: 'John Abercrombie',
      chords: ["D7sus", "D7sus", "Dm7b5", "G7b9", "Cm7", "Cm7", "Am7", "Am7", "", "Dm", "Bb", "Dm", "Bb", "Dm", "Dm", "Bbmaj7", "Bm7b5", "E7b9"],
  },
  {
      title: 'Just One More Chance',
      composer: 'Johnston-Coslow',
      chords: ["Gmaj7", "Gmaj7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Eb7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Am7b5", "D7", "Gmaj7", "Bm7b5", "E7", "Am7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Gmaj7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "G6", "Eb7", "D7", "", "G6"],
  },
  {
      title: 'Just One Of Those Things',
      composer: 'Cole Porter',
      chords: ["Dm6", "Dm6", "Em7b5", "A7b9", "F7", "F7", "Bm7b5", "Bbm6", "Am7", "Ab7", "Gm7", "C7", "F6", "D7", "Gm7", "Gm7", "Em7b5", "A7b9", "Eb6", "Edim7", "Fm7", "Bb7", "Eb6", "Eb6", "Dm7", "G7", "C6", "Am7", "F#m7b5", "Fm6", "Em7", "Eb7", "Gm7", "C7", "Em7b5", "A7b9", "F6", "F6", "Em7b5", "A7b9"],
  },
  {
      title: 'Just Squeeze Me',
      composer: 'Duke Ellington',
      chords: ["Fmaj7", "Gm7", "Am7", "C7", "Fmaj7", "Bbmaj7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "F7", "F7", "Bb6", "Bb6", "G7", "G7", "Gm7", "C7", "Fmaj7", "Gm7", "Am7", "C7", "Fmaj7", "Bbmaj7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Just You, Just Me',
      composer: 'Jesse Greer',
      chords: ["C6", "A7", "Dm7", "G7", "C6", "C7", "Fmaj7", "Bb7", "C6", "G7", "C6", "G7", "Gm7", "C7", "F6", "Bb7", "C6", "E7", "Am7", "D7", "G7", "C6", "A7", "Dm7", "G7", "C6", "C7", "Fmaj7", "Bb7", "C6", "G7", "C", "G7"],
  },
  {
      title: 'Kary\'s Trance',
      composer: 'Lee Konitz',
      chords: ["Am6", "Am6", "Dm6", "Dm6", "Bm7b5", "E7b9", "Am6", "Am6", "G7", "G7", "Cmaj7", "Cmaj7", "B7", "B7", "E7", "E7", "Am6", "Am6", "Dm6", "Dm6", "Bm7b5", "E7b9", "Am6", "Am6"],
  },
  {
      title: 'Katrina Ballerina',
      composer: 'Woody Shaw',
      chords: ["Gm7", "F7", "Ebmaj7", "F7", "Abmaj7#11", "Gbmaj7#11", "Gbm7", "Abm7", "D7#9", "", "D7#9", "Abmaj7", "Bb7", "Abmaj7", "Bb7", "Abmaj7", "Bb7", "Abmaj7", "Bb7", "Amaj7", "B7", "Amaj7", "B7", "Dm11", "Cm11", "Cm11", "Bbm11", "Bbm11", "Abm11", "D7#9", "Gm7", "F7", "Ebmaj7", "F7", "Abmaj7#11", "Gbmaj7#11", "Am7b5", "D7#9", "Gm7", "Bb7#11", "Bb7#11", "Bb7#11", "Bb7#11", "Bb7#11", "Bb7#11", "Bb7#11", "D7#9"],
  },
  {
      title: 'Keepin\' Myself For You',
      composer: 'Vincent Youmans',
      chords: ["Ebmaj7", "Edim7", "F7", "Bb7", "Am7b5", "Abm7", "Gm7b5", "C7b9", "Fm7", "Abm6", "Bb7sus", "Bb7", "Eb6", "Gbdim7", "Fm7", "Bb7", "Emaj7", "C#m7", "F#m7", "B7", "Emaj7", "", "C#m7", "C#m", "Bb7", "Ebmaj7", "", "Cm7", "Cm", "Am7b5", "D7", "Gm7", "Gb7", "Fm7", "E7", "Ebmaj7", "Edim7", "F7", "Bb7", "Am7b5", "Abm7", "Gm7b5", "C7b9", "Fm7", "Abm6", "Fm7", "Bb7sus", "Eb6", "C7b9", "Fm7", "Bb7"],
  },
  {
      title: 'Kicker, The',
      composer: 'Joe Henderson',
      chords: ["Bb7", "Bb7", "Bb7", "Bb7", "Ebm7", "Ab7", "Dbmaj7", "Gbmaj7", "Cm7b5", "F7", "Bbm7", "F7#9"],
  },
  {
      title: 'Kids Are Pretty People',
      composer: 'Thad Jones',
      chords: ["Dm7", "A7#9", "Dm7", "", "Cm7", "F7", "Bb7", "A7#9", "Dm7", "G7", "Fmaj7", "A7", "Dm7", "Dm7", "Bm7b5", "E7#9", "A7#9", "Dm7", "A7#9", "Dm7", "", "Cm7", "F7", "Bb7", "A7#9", "Dm7", "G7", "Fmaj7", "A7", "Dm7", "Bm7b5", "F", "C7sus", "F6", "A7", "Dm7", "Bbmaj7", "Gm7", "Ebmaj7", "Cm7", "F7", "Bbmaj7", "Eb7", "F", "Eb", "F", "A7#9", "Dm7", "A7#9", "Dm7", "", "Cm7", "F7", "Bb7", "A7#9", "Dm7", "G7", "C7", "F7", "Bb7", "Eb7", "Em7b5", "A7#9", "Dm7", "", "Em7b5", "A7"],
  },
  {
      title: 'Ko Ko',
      composer: 'Charlie Parker',
      chords: ["Bb6", "Bb6", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ab7", "Ab7", "Bb6", "Bb6", "C7", "C7", "Cm7", "G7b9", "Cm7", "F7#5", "C#m7", "F#7", "Bmaj7", "Bmaj7", "Bm7", "E7", "Amaj7", "Amaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Cm7", "F7#5"],
  },
  {
      title: 'L.O.V.E.',
      composer: 'Gabler-Kaempfert',
      chords: ["G6", "Gmaj7", "Am7", "D7", "D7", "D7", "Gmaj7", "G6", "G7", "G7", "Cmaj7", "Cmaj7", "A7", "A7", "D7sus", "D7", "G6", "Gmaj7", "Am7", "D7", "D7", "D7", "Gmaj7", "G6", "G7", "G7", "Cmaj7", "C#dim7", "G6", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'La Fiesta',
      composer: 'Chick Corea',
      chords: ["E", "F", "G", "F", "E", "E", "F", "G", "F", "E", "E", "F", "G", "F", "E", "E", "F", "G", "F", "E", "Amaj7", "Dmaj7", "Amaj7", "Dmaj7", "Amaj7", "Dmaj7", "Amaj7", "Dmaj7", "Amaj7", "C#7", "Dmaj7", "D#m7b5", "Amaj7", "Fdim7", "F#m7", "B7", "E7", "Amaj7", "Dmaj7", "C#m7", "F#7", "B7", "E7", "Amaj7", "Bm", "Amaj7", "Dm", "Em", "F", "G", "F", "E", "F", "G", "F", "Amaj7", "Dmaj7", "Amaj7", "Dmaj7", "Amaj7", "Dmaj7", "Amaj7", "Dmaj7"],
  },
  {
      title: 'La Vie En Rose',
      composer: 'Guglielmi-Piaf-David',
      chords: ["C", "C6", "Cmaj7", "C6", "C", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "C", "C#dim", "Dm7", "G7", "C", "C6", "Cmaj7", "C6", "C", "C7", "F", "Fm", "C", "D7", "Dm7", "G7", "C", "C6", "Cmaj7", "C6", "Dm7", "G7", "C6"],
  },
  {
      title: 'Ladies In Mercedes',
      composer: 'Steve Swallow',
      chords: ["Gmaj7", "Gmaj7", "C7#11", "C7#11", "Bm7", "Bm7", "E7", "E7", "Db7b13", "Db7b13", "Gbm7", "Gbm7", "Ebm7b5", "Ebm7b5", "Ab7b9", "Ab7b9", "Dbmaj7", "Dbmaj7", "Gb7#11", "Gb7#11", "Fm7", "Fm7", "Bb7", "Bb7", "G7b13", "G7b13", "Cm7", "Cm7", "Am7b5", "Am7b5", "D7b9", "D7b9", "Gmaj7", "Gmaj7", "C7#11", "C7#11"],
  },
  {
      title: 'Lady Bird',
      composer: 'Tadd Dameron',
      chords: ["Cmaj7", "Cmaj7", "Fm7", "Bb7", "Cmaj7", "Cmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Ebmaj7", "Abmaj7", "Dbmaj7"],
  },
  {
      title: 'Lady is a Tramp, The',
      composer: 'Richard Rodgers',
      chords: ["Cmaj7", "Eb7", "Dm7", "G7", "Cmaj7", "Eb7", "Dm7", "G7", "C7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "A7", "Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Eb7", "Dm7", "Bm7b5", "E7b9", "Am7", "D7", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'Lady Sings The Blues',
      composer: 'Nichols-Holiday',
      chords: ["Fm", "Fmaug", "Fm6", "Fm7", "Fmaj7", "Bbmaj7", "Fmaj7", "Eb7", "D7", "", "Gm7", "C7b9", "F7", "F7", "F7", "F7", "G7", "G7", "G7", "G7sus", "C7b9", "Fm", "Fmaug", "Fm6", "Fm7", "Fmaj7", "Bbmaj7", "Fmaj7", "Eb7", "D7", "", "Gm7", "C7b9", "Fm6"],
  },
  {
      title: 'Lady\'s In Love With You, The',
      composer: 'Burton Lane',
      chords: ["A7", "A7", "Am7", "D7", "G6", "G6", "D7#5", "G6", "G6", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Cm6", "D7", "A7", "A7", "Am7", "D7", "Am7", "D7", "G6", "G6"],
  },
  {
      title: 'Lakes',
      composer: 'Pat Metheny',
      chords: ["D", "A", "G", "A", "D", "", "A", "Bm", "Bm", "D", "E", "G", "Dmaj7", "F#7", "F#7", "Bm7", "Em", "", "G", "A", "Dmaj7", "Em9", "G", "Bb", "A", "", "Bbdim", "Bm", "Bm", "D", "D", "", "A", "Am7", "Gmaj7", "F#", "C#m7", "C9", "Bm", "D9", "Gmaj7", "F#m7", "Fmaj7", "Em9", "F#m7", "F#", "E7#9", "Eb", "D", "C", "Bb", "A7", "", "D9", "D", "Em9", "", "F#m7", "G", "A7sus", "D", "A", "G", "A", "Dmaj7", "C7sus", "Fmaj7", "Ab7sus", "Dbmaj7", "B7sus", "Emaj7", "D7sus", "Gmaj7", "F7sus", "Bbmaj7", "Db7sus", "Gbmaj7", "G7sus", "Cmaj7", "A7sus"],
  },
  {
      title: 'Lament',
      composer: 'J.J. Johnson',
      chords: ["Fm", "Ebm7", "Ab7", "Dbmaj7", "Gm7b5", "C7b9", "Fmaj7", "Dm7", "Gm7", "Em7b5", "A7b9", "Dm", "", "Dm", "Bb", "Am7", "Dm7", "Gm7", "Em7b5", "A7b9", "Dm", "Ebm7", "Ab7", "Dbmaj7", "Gm7b5", "C7b9", "Fm", "Ebm7", "Ab7", "Dbmaj7", "Gm7b5", "C7", "Fmaj7", "Dm7", "Gm7", "Em7b5", "A7b9", "Dm", "", "Dm", "Bb", "Am7", "Dm7", "Bm7b5", "Bbm7", "Eb7", "Fmaj7", "Dm7", "Db7", "C7", "Fmaj7", "Gm7b5", "C7b9"],
  },
  {
      title: 'Lamp Is Low, The',
      composer: 'DeRose-Shefter',
      chords: ["Dm7", "G7", "Dm7", "G7", "C6", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "C6", "F7", "C6", "C6", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bb7", "Bb7", "Dm7", "G7", "Dm7", "G7", "Em7", "A7b13", "Dm7b5", "G7b9", "C6", "Em7", "A7"],
  },
  {
      title: 'Last Night When We Were Young',
      composer: 'Harold Arlen',
      chords: ["Gmaj7", "C7", "Bm7", "E7b13", "A7", "Am7", "D7#9", "Dm7", "G7", "Am7b5", "D7b9", "Gmaj7", "G#dim7", "Am7", "D7", "Dm7", "B7", "E7", "A7", "Bb7", "A7b9", "Dm7", "B7", "Em7b5", "A7b9", "Eb7", "D7", "D7", "", "Gmaj7", "C7", "Bm7", "E7", "Dm7", "B7", "E7", "A7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'Last Time I Saw Paris, The',
      composer: 'Henry Mancini',
      chords: ["Ab6", "Ab6", "Ab6", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab6", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "C7", "Fmaj7", "Bbm7", "Eb7", "Ab6", "Ab6", "Ab6", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab6"],
  },
  {
      title: 'Last Train Home',
      composer: 'Pat Metheny',
      chords: ["Bb", "C", "Ab", "Bb", "Bb", "Dm", "Dm7", "Gm", "Eb", "F7sus", "F7sus", "F7", "Gm", "D7", "Gm", "Ebmaj7", "Ebmaj7", "Dm7", "Gm7", "Dm7", "Gm7", "Gm7", "Eb6", "Eb6", "Eb6", "F", "Bb", "F", "F", "Gm7", "F", "F", "Bb", "F", "F", "Gm7", "F", "F"],
  },
  {
      title: 'Laura',
      composer: 'David Raksin',
      chords: ["Am9", "D7b9", "G6", "G6", "Gm9", "C7b9", "Fmaj7", "Fmaj7", "Fm7", "Bb7sus", "Bb7b9", "Ebmaj7", "Cm7", "Am7b5", "D7b5", "D7b5", "D7", "Gmaj7", "E7b13", "Am9", "D7b9", "G6", "G6", "Gm9", "C7b9", "Fmaj7", "Fmaj7", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cmaj7", "F7", "Em7", "Am7", "D7b9", "G7", "C6", "Bm7b5", "E7b9"],
  },
  {
      title: 'Laurie',
      composer: 'Bill Evans',
      chords: ["Bbmaj7", "E7b9sus", "E7#5#9", "Am7", "Am7", "D7#5", "Gm7b9", "C7#5#9", "Cm7", "Cm7", "F7#5", "Fm9", "Bb7#5#9", "Ebm7", "Ab7#9", "Dm7b5", "Db7sus", "Db7", "C7sus", "C7", "B7sus", "B9#11"],
  },
  {
      title: 'Lazy Afternoon',
      composer: 'Latouche-Moross',
      chords: ["Am7", "A7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Dm7", "D7", "Dm7", "G9", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Bm7b5", "E7", "Am7", "A7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "A6", "Bm7", "E7"],
  },
  {
      title: 'Lazy Bird',
      composer: 'John Coltrane',
      chords: ["Am7", "D7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "Gmaj7", "Abm7", "Db7", "Bm7", "E7", "Amaj7", "Bbm7", "Eb7", "Am7", "D7", "Gmaj7", "Abm7", "Db7", "Am7", "D7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "F7#11", "Eb7", "Am7", "D7b9", "Gmaj7", "C7b9", "Fmaj7", "Bb7b9", "Eb7", "Abmaj7", "Db7#11"],
  },
  {
      title: 'Lazy River',
      composer: 'Hoagy Carmichael',
      chords: ["D7", "D7", "Db7", "C7", "F#dim", "G7", "G7", "Ab7", "G7", "", "C7", "C7", "Db7", "C7", "", "F6", "C7", "F6", "D7", "D7", "Db7", "C7", "F#dim", "G7", "G7", "Ab7", "G7", "", "Bb6", "Bdim7", "F6", "D7", "G7", "C7", "F6", "D7", "G7", "C7", "F6", "A7"],
  },
  {
      title: 'Lazybones',
      composer: 'Carmichael-Mercer',
      chords: ["Cmaj7", "F7", "Cmaj7", "F7", "Cmaj7", "", "F7", "G7", "C6", "C7", "A7", "Dm7", "Ab7b5", "G7", "C6", "G7", "F6", "F6", "Cmaj7", "G7", "Cmaj7", "F7", "Eb7", "D7", "G7", "D7", "Dm7", "G7", "Cmaj7", "F7", "Cmaj7", "F7", "Cmaj7", "", "F7", "G7", "C6", "C7", "A7", "Dm7", "Ab7b5", "G7", "C6", "", "Dm7", "G7"],
  },
  {
      title: 'Leaving',
      composer: 'Richie Beirach',
      chords: ["Ebmaj7#11", "D7b9", "Gmb6", "Gmb6", "Gbmaj7#5", "F7b9", "D7b9", "Gmb6", "Gmb6", "Cm7", "Ab7sus", "Bbmaj7", "Fmaj7", "Ab7#11", "G7b9", "Cm", "Gbmaj7#11", "Bmaj7#11", "D", "D7alt"],
  },
  {
      title: 'Leila',
      composer: 'Wes Montgomery',
      chords: ["Gm7", "C7", "Am7", "D7b9", "Gm7", "C7", "Fmaj7", "Bbm7", "Eb7b9", "Abmaj7", "Dbmaj7", "Gm7", "C7b9", "Fmaj7", "D7", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Dm7", "G7", "Cmaj7", "Dm7", "G7", "Gm7", "C7b9", "Gm7", "C7b9", "Am7", "D7b9", "Gm7", "C7b9", "Fmaj7", "Bbm7", "Eb7b9", "Abmaj7", "Dbmaj7", "Gm7", "C7b9", "Fmaj7"],
  },
  {
      title: 'Lennie-Bird',
      composer: 'Lennie Tristano',
      chords: ["Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Eb6", "A7b9", "D7b9", "D7b9", "Bm7", "Em7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7"],
  },
  {
      title: 'Lennie\'s Pennies',
      composer: 'Lennie Tristano',
      chords: ["Cm6", "Cm6", "D7", "G7", "Cm6", "Cm6", "D7", "G7", "Gm7b5", "C7b9", "Fm6", "Fm6", "Cm6", "D7", "Dm7b5", "G7", "Cm6", "Cm6", "D7", "G7", "C7b9", "C7b9", "Fm6", "Fm6", "Fm6", "Dm7b5", "Cm6", "A7", "Dm7b5", "G7b9", "Cm6", "Cm6"],
  },
  {
      title: 'Let There Be Love',
      composer: 'Rand-Grant',
      chords: ["Ebmaj7", "Abmaj7", "Gm7b5", "C7", "Fm7b5", "Bb7", "Ebmaj7", "Ab7", "Gm7", "F#dim7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "F#dim7", "Fm7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7b5", "C7", "Fm7b5", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "C9", "C9", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Let There Be You',
      composer: 'Young-Cavanaugh',
      chords: ["Cmaj7", "F#dim7", "Dm7", "G7", "G7", "G7#5", "C", "C", "B7", "Bb7", "A7", "Dm7", "D7", "Dm7", "G7", "Fmaj7", "F#dim7", "Cmaj7", "A7", "Dm7", "G7", "C", "G", "Am7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "F#dim7", "Dm7", "G7", "G7", "G7#5", "C", "C", "B7", "Bb7", "A7", "Dm7", "D7", "G7", "Dm7", "G7", "Cmaj7"],
  },
  {
      title: 'Let\'s Call The Whole Thing Off',
      composer: 'George Gershwin',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Cm6", "Bm7", "Em7", "A7", "D7", "C#m7b5", "F#7", "Bm7", "E7b9", "Am7", "D7sus", "D7", "C#m7b5", "F#7", "Bm7", "E7b9", "Am7", "D7sus", "D7", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Cm6", "Gmaj7", "D7", "B7", "E7", "Am7", "D7", "G6", "D7sus"],
  },
  {
      title: 'Let\'s Call This',
      composer: 'Thelonious Monk',
      chords: ["D9sus", "D9sus", "D9sus", "D9sus", "D9sus", "D9sus", "F#7", "F7", "E7", "Eb7", "D7", "G7", "G7", "C7", "C7", "A7", "A7", "Bm7", "Bb7", "Am7", "Ab7", "D9sus", "D9sus", "D9sus", "D9sus", "D9sus", "D9sus", "F#7", "F7", "E7", "G6"],
  },
  {
      title: 'Let\'s Cool One',
      composer: 'Thelonious Monk',
      chords: ["Ebmaj7", "Fm7", "Bb7", "Eb", "D7", "Db7", "G7", "C7b9#11", "F7", "Bb7", "Eb6", "Eb6", "", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "F7", "F7", "Bb7sus", "Bb7sus", "Ebmaj7", "Fm7", "Bb7", "Eb", "D7", "Db7", "G7", "C7b9#11", "F7", "Bb7", "Eb6", "Eb6", ""],
  },
  {
      title: 'Let\'s Do It (Let\'s Fall In Love)',
      composer: 'Cole Porter',
      chords: ["Bb6", "Bdim7", "Cm7", "F7", "Bb6", "Bb7", "Eb6", "Ebm6", "Dm7", "G7b9", "Cm7", "F7", "D7#5", "G7b9", "C9", "F7#5", "Gm6", "Cm7", "Cm6", "Dm7", "Fm7", "Bb7b9", "Eb6", "Ebm7", "Ab7", "Db6", "Cm7", "F7#5", "Bb6", "Bdim7", "Cm7", "F7", "Bb6", "Bb7", "Eb7", "Bb6", "Gm7", "Cm7", "F7b9", "Bb6", "G7#5", "Cm7", "F7#5"],
  },
  {
      title: 'Let\'s Face The Music And Dance',
      composer: 'Irving Berlin',
      chords: ["Cm", "Cm", "Dm7b5", "G7b9", "Cm", "Cm", "Dm7b5", "G7b9", "Cmaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Cm", "Dm7b5", "G7b9", "Cm", "Cm", "Cm", "Cm6", "Cm", "Cm7", "G7", "Ab7", "Dm7", "Dm7", "G7", "G7", "C6", "C7", "Fmaj7", "Bb7", "C6", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "G7", "G7b9", "Am7", "Bb7", "Dm7", "G7", "C6", "G7b9"],
  },
  {
      title: 'Let\'s Fall In Love',
      composer: 'Harold Arlen',
      chords: ["C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "Em7", "Am7", "Dm7", "G7", "E7", "A7", "D7", "G7", "Am", "Am", "Am7", "D7", "Am7", "D7", "D#dim7", "Em7", "Am7", "Dm7", "G7", "Em7", "A7b9", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "Em7", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Let\'s Get Away From It All',
      composer: 'Dennis-Adair',
      chords: ["Ebmaj7", "Bb7b9", "Ebmaj7", "Eb7", "Abmaj7", "F#dim7", "Gm7", "C7", "Fm7", "Bb7", "Db7", "C7", "F7", "Fm7", "Bb7", "Abmaj7", "Am7b5", "D7", "", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7b9", "Ebmaj7", "Eb7", "Abmaj7", "F#dim7", "Gm7", "C7", "Fm7", "Bb7", "Db7", "C7", "Fm7", "E7", "Eb6"],
  },
  {
      title: 'Let\'s Get Lost',
      composer: 'Jimmy McHugh',
      chords: ["Cmaj7", "F#m7b5", "Cmaj7", "F#m7b5", "B7b9", "Em7b5", "A7b13", "Em7b5", "A7b13", "", "Dm7", "G7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "A7", "D7", "Dm7", "G7"],
  },
  {
      title: 'Li\'l Darling',
      composer: 'Neal Hefti',
      chords: ["G7", "Gm7", "C7b9", "Am7", "D7b9", "G7", "Gm7", "C7b9", "F7", "F7#5", "Bb6", "Bbm6", "F6", "F7", "Bb6", "Bbm6", "Am7b5", "D7b9", "G7", "Dm7", "G7", "Gm7", "C7", "Am7b5", "D7b9", "G7", "Gm7", "C7b9", "Am7", "D7b9", "G7", "Gm7", "C7b9", "F7", "F7#5", "Bb6", "Bbm6", "F6", "F7", "Bb6", "Bbm6", "Am7b5", "D7b9", "G7", "Gm7", "C7", "F6", "Am7b5", "D7b9"],
  },
  {
      title: 'Light Blue',
      composer: 'Thelonious Monk',
      chords: ["Fmaj7", "", "G7", "C7", "Fmaj7", "", "F7", "Bb7", "Cmaj7", "D9", "G7#11", "Fmaj7", "", "F7#11", "Gb7", "Fmaj7", "", "F#m7", "Fm7", "Cmaj7", "D9", "G7#11", "Dbmaj7#11", ""],
  },
  {
      title: 'Ligia',
      composer: 'Antonio-Carlos Jobim',
      chords: ["C#m7", "F#7#5", "D#m7", "Ddim7", "C#m7b5", "F#7sus", "F#7", "A#m7", "D#7", "Emaj7", "Fdim7", "Bmaj7", "G#m7", "Fm7", "Bb7", "D#maj7", "G#7#5", "C#m7", "C7sus", "C7sus"],
  },
  {
      title: 'Like A Lover',
      composer: 'Dori Caymmi-Nelson Motta',
      chords: ["Cmaj7", "G7sus", "Cmaj7", "D", "Bm7", "Em7", "A7sus", "A7", "Dmaj7", "G7", "Fmaj7", "G", "Cmaj7", "G7sus", "Cmaj7", "G7sus", "Cmaj7", "Fm6", "Cmaj7", "D", "D", "Bm7", "B7b9", "Em7", "F#m7b5", "B7b9", "Em7", "Am7", "Gm7", "D", "G7sus", "G7sus"],
  },
  {
      title: 'Like Someone In Love',
      composer: 'Jimmy Van-Heusen',
      chords: ["Ebmaj7", "G7", "Cm7", "Cm7", "Am7b5", "Ab7", "Gm7", "C7", "Fm7", "Am7", "D7", "Ebmaj7", "Bbm7", "Eb7", "", "Abmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Cm7", "F7", "Fm7", "Bb7#5"],
  },
  {
      title: 'Like Sonny',
      composer: 'John Coltrane',
      chords: ["Dm7", "Dm7", "Fm7", "Fm7", "Abm7", "Abm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7", "Am7", "Fm7", "Fm7", "C#m7", "C#m7", "F#7", "Bmaj7", "Ebm7", "Ab7", "Dm7", "Dm7", "Fm7", "Fm7", "Abm7", "Abm7", "Bb7", "Ebmaj7", "Ebmaj7"],
  },
  {
      title: 'Lily of The Valley',
      composer: 'Traditional',
      chords: ["F", "F", "C7", "F", "F", "F", "C7", "F", "F", "Bb7", "Gm7", "C7", "F", "Bb7", "F6", "Dm7", "G7", "C7"],
  },
  {
      title: 'Limbo',
      composer: 'Wayne Shorter',
      chords: ["Ebm7", "Gb7sus", "Cmaj7", "F7sus", "Bb7sus", "Dmaj7", "G", "G", "Abmaj7", "Gbmaj7", "Gb7sus", "Gmaj7#11", "Gbmaj7#11", "Fmaj7#11", "Emaj7#11", "C#m7", "A7", "Ebm7", "D7#11"],
  },
  {
      title: 'Limehouse Blues',
      composer: 'Braham-Furber',
      chords: ["Db7", "Db7", "Db7", "Db7", "Bb7", "Bb7", "Bb7", "Bb7", "Ab6", "Ab6", "C7", "Fm7", "Bb7", "Bb7", "Bbm7", "Eb7", "D7", "Db7", "Db7", "Db7", "Db7", "Bb7", "Bb7", "Bb7", "Bb7", "Ab6", "F7", "Bbm7", "Dbm6", "Ab6", "Bdim7", "Bbm7", "Eb7", "Ab6", "Ab6"],
  },
  {
      title: 'Line For Lyons',
      composer: 'Gerry Mulligan',
      chords: ["G6", "G7b9", "Cm7", "F7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "E7", "Am7", "D7", "G6", "E7", "Am7", "D7", "Cmaj7", "C#m7b5", "F#7b9", "Bm7", "E7b9", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "G6", "G7b9", "Cm7", "F7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "E7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'Linger Awhile',
      composer: 'Vincent Rose',
      chords: ["F6", "F6", "C7", "F7", "F7", "Db7", "C7", "C7", "Cdim7", "C7", "C7", "C7", "C7", "Gm7", "C7", "C7#5#9", "Fmaj7", "Fmaj7", "Fdim7", "Fmaj7", "Fmaj7", "C7", "Dm7", "Dm7", "A7", "A7", "D7", "D7", "G7", "Gm7", "C7", "F6", "F6", "C7", "F7", "F7", "Db7", "C7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Litha',
      composer: 'Chick Corea',
      chords: ["Dmaj7", "C#m7", "Bmaj7", "Bbm7", "Abmaj7", "Gm7", "Fmaj7#11", "Fmaj7#11", "Fmaj7#11", "Fmaj7#11", "Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "F7sus", "F7sus", "F7sus", "F7sus", "B7#9", "B7#9", "B7#9", "B7#9", "Em7", "Em7", "Em7", "Em7", "Em7", "Em7", "Em7", "Em7", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Bb7sus", "Am7", "Am7", "Am7", "Am7", "Am7", "Am7", "Am7", "Am7", "Eb7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Eb7sus"],
  },
  {
      title: 'Little B\'s Poem',
      composer: 'Bobby Hutcherson',
      chords: ["Gbmaj7#11", "Fm7", "Gbmaj7#11", "Fm7", "Ebm7", "Dbmaj7", "Ebm7", "C7b9", "Fm7", "F#m7", "B7", "Emaj7", "Fm7", "Bb7", "Ebmaj7", "Db7#11", "C7", "C7", "C7", "", "Fm7", "Fm", "Fm", ""],
  },
  {
      title: 'Little Boat (O Barquinho)',
      composer: 'Roberto Menescal',
      chords: ["Bbmaj7", "Bbmaj7", "Em7", "A7", "Em7", "A7", "Abmaj7", "Abmaj7", "Dm7", "G7", "Dm7", "G7", "Gbmaj7", "Gbmaj7", "Cm7", "F7", "Cm7", "F7", "Dm7", "G7b9", "Cm7", "F7b9"],
  },
  {
      title: 'Little Chicago Fire',
      composer: 'Frank Foster',
      chords: ["Bb69", "G7#9", "Cm9", "F13", "Bbmaj7", "Db9", "Gbmaj7", "F13", "Bb9", "E13", "Eb69", "Ebm7", "Dm7", "G7", "Cm7", "F7#5#9", "Am7", "Ebm7", "Ab13", "G13", "", "Ab13", "G13", "G13", "G7b9#5", "Gm7", "Dbm7", "Gb13", "F13", "", "Gb13", "F13", "F13", "F7b9", "Bb69", "G7#5", "Cm9", "F13b9", "Bbmaj7", "Db9", "Gbmaj7", "F7b9#5", "Bm7", "E9", "Eb69", "Ebm7", "Dm7", "G7#9", "Cm7", "F9", "Bb69", ""],
  },
  {
      title: 'Little Girl Blue',
      composer: 'Richard Rodgers',
      chords: ["Gm7", "C7#11", "Fmaj7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Em7", "A7", "Dm", "Dm", "Dm7", "G7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "F6", "Dm7", "Gm7", "G#dim7", "Am7", "D7", "Gm7", "C7", "F6", "F6", "", "C7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Em7", "A7", "Eb7#11", "D7", "Db7#11", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Little Niles',
      composer: 'Randy Weston',
      chords: ["Gm", "Gm6", "Eb7", "D7b9", "Gm", "Gm6", "Eb7", "D7b9", "Gm", "Gmb6", "Gm6", "Gmb6", "B7b5", "E7", "A7b5", "D7b9", "Ddim7", "Ddim7", "Ddim7", "Ddim7", "Ebdim7", "Ebdim7", "Ebdim7", "Ebdim7", "Gm", "Gm6", "Eb7", "D7b9", "Gm", "Gm6", "Eb7", "D7b9", "Gm", "Gmb6", "Gm6", "Gmb6", "B7b5", "E7", "A7b5", "D7b9"],
  },
  {
      title: 'Little Peace In C For You',
      composer: 'Michel Petrucciani',
      chords: ["Cmaj7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7b5", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7b5", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "Cmaj7", "E7", "E7", "A7", "A7", "D7", "D7", "G7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7b5", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "Cmaj7"],
  },
  {
      title: 'Little Rootie Tootie',
      composer: 'Thelonious Monk',
      chords: ["Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "Ab7", "Dbmaj7", "Ddim7", "Ab", "F7", "Bbm7", "Eb7", "Am7", "Ab7", "Dbmaj7", "Dm7", "G7", "Gm7b5", "C7", "F7#11", "Fm7", "Bb7", "Dbm7", "Gb7", "Bm7", "", "E9", "Eb9", "Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "Ab7", "Dbmaj7", "Ddim7", "Ab6", "Eb7", "Ab6"],
  },
  {
      title: 'Little Sunflower',
      composer: 'Freddie Hubbard',
      chords: ["Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7"],
  },
  {
      title: 'Little Waltz',
      composer: 'Ron Carter',
      chords: ["Fm", "C7", "Ebm6", "Dbmaj7", "G7", "C7", "Fm7", "C7", "Fm", "C7", "Ebm6", "Dbmaj7", "G7", "C7", "Fm7", "C7", "Fm", "Fm", "Dm7b5", "G7", "C7", "F7", "Bbm7", "Eb7", "Ab", "G7", "C7", "Fm", "C7", "Ebm6", "Dbmaj7", "G7", "C7", "F6", "F6"],
  },
  {
      title: 'Little Willie Leaps',
      composer: 'Charlie Parker',
      chords: ["Fmaj7", "Gm7", "C7", "Am7", "D7b9", "Gm7", "C7b9", "Fmaj7", "Gm7", "C7", "Am7", "D7b9", "Bm7", "E7b9", "Am7", "D7", "Gm7", "C7", "F6", "Em7", "A7", "Dm7", "G7", "Gm7", "C7"],
  },
  {
      title: 'Liza',
      composer: 'George Gershwin',
      chords: ["Eb6", "Fm7", "F#dim7", "Eb7", "Abmaj7", "Adim7", "Bbm7", "Eb7", "Ab6", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Cm7", "Abmaj7", "Cm7", "Bbm7", "Eb7", "Ab6", "Gm7b5", "C7b9", "Fm7", "B7", "Bb7", "Eb6", "Fm7", "F#dim7", "Eb7", "Abmaj7", "Adim7", "Bbm7", "Eb7", "Ab6", "Gm7", "C7", "Fm7", "Bb7", "Eb6"],
  },
  {
      title: 'Locomotion',
      composer: 'John Coltrane',
      chords: ["Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Cm7", "F7", "Bb7", "Bb7", "Ab7", "Ab7", "G7", "G7", "Gb7", "Gb7", "F7", "F7", "Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Cm7", "F7", "Bb7", "Bb7", "Bb7b5", "Bb7b5", "Ab7b5", "Ab7b5", "Gb7b5", "Gb7b5", "D7b5", "D7b5", "C7b5", "C7b5", "B7", "B7", "B7", "B7"],
  },
  {
      title: 'Lone Jack (Page 1)',
      composer: 'Pat Metheny',
      chords: ["Bbm7", "Bbm7", "Gbmaj7", "Gbmaj7", "Bbm7", "Bbm7", "Gbmaj7", "Gbmaj7", "Bbm7", "Bbm7", "Gbmaj7", "Gbmaj7", "F7#9", "F7#9", "Ab", "Bbm7", "Bbm7", "Ebm7", "Ebm7", "Dbmaj7", "Dbmaj7", "Bmaj7", "Bmaj7", "Bbm7", "Bbm7", "Ab7sus", "Ab7sus", "Gbmaj7#11", "Gbmaj7#11", "F7#9", "F7#9", "Ab", "Bbm7", "Bbm7", "Bbm7", "Bbm7", "Db", "Eb", "Gb6", "F6", "Db", "Eb", "Bb", "Ab", "D", "E", "G", "A", "C", "D", "F", "G", "Ab", "Ab"],
  },
  {
      title: 'Lone Jack (Page 2 - Solos)',
      composer: 'Pat Metheny',
      chords: ["Bbm7", "Bbm7", "Gbmaj7", "Gbmaj7", "Bbm7", "Bbm7", "Gbmaj7", "Gbmaj7", "Bbm7", "Bbm7", "Gbmaj7", "Gbmaj7", "F7#9", "F7#9", "Ab", "Bbm7", "Bbm7", "Ebm7", "Ebm7", "F7b9", "F7b9", "Gbmaj7", "Gbmaj7", "Gm7b5", "Gm7b5", "C7sus", "C7", "Db7sus", "Db7", "Eb7sus", "Eb7", "F7sus", "F7"],
  },
  {
      title: 'Lonely Dreams',
      composer: 'Terry Gibbs',
      chords: ["G7b5", "Dbm7", "Gb7", "G7b5", "Dbm7", "Gb7", "Cm7", "F7", "B7b5", "Bbmaj7", "Am7b5", "D7", "Am7", "", "Bm7b5", "E7", "Am7", "", "Bm7b5", "E7", "Am7", "", "Bm7b5", "E7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Am7b5", "Ab7b5", "G7b5", "Dbm7", "Gb7", "G7b5", "Dbm7", "Gb7", "Cm7", "F7", "B7b5", "Bbmaj7", "Bbmaj7"],
  },
  {
      title: 'Lonesome Road, The',
      composer: 'Austin-Shilkret',
      chords: ["Eb6", "Eb7", "Abm6", "Abm6", "Eb", "Bb7", "Eb", "Adim7", "Fm7", "Bb7", "Am7b5", "D7b9", "Gm7", "Gm7", "Am7b5", "D7b9", "Gm7", "Gb7", "Fm7", "Bb7", "Eb6", "Eb7", "Abm6", "Abm6", "Eb", "Bb7", "Eb", "Eb"],
  },
  {
      title: 'Long Ago And Far Away',
      composer: 'Jerome Kern',
      chords: ["F6", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Ab6", "Fm7", "Bbm7", "Eb7", "Abmaj7", "G7", "Cmaj7", "Am7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bbm6", "Eb7", "F6", "Abdim7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Lonnie\'s Lament',
      composer: 'John Coltrane',
      chords: ["Cm7", "Dm7", "Ebmaj7", "Dm7", "Cm7", "Dm7", "Ebmaj7", "Dm7", "Cm7", "Dm7", "Ebmaj7", "Dm7", "Cm7", "Dm7", "Ebmaj7", "Dm7", "Cm7", "Bb7", "Ebmaj7", "Abmaj7", "Ab7", "A7", "Ab7", "G7b9", "Cm7", "Dm7", "Ebmaj7", "G7#9", "Cm7", "Dm7", "Ebmaj7", "Dm7"],
  },
  {
      title: 'Look For The Silver Lining',
      composer: 'Jerome Kern',
      chords: ["Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Gm7", "Ab7", "Gm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Cm7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Look Of Love, The',
      composer: 'Burt Bacharach',
      chords: ["Gm7", "Gm6", "Gmb6", "Gm6", "Bbmaj7", "Bbmaj7", "D7sus", "D7b9", "Gm7", "G7sus", "G7", "Ebmaj7", "Ebm6", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "D7sus", "D7b9", "Bbmaj7", "Cm7", "Bbmaj7", "Cm7", "Cm7", "Bbmaj7", "Cm7", "Cm7", "F6", "E", "Eb", "D", "Bb", "Db6", "Ebmaj7", "Ebmaj7", "Bbmaj7", "Bbm7", "F7b9sus", "Bbmaj7"],
  },
  {
      title: 'Look To The Rainbow',
      composer: 'Burton Lane',
      chords: ["Eb6", "Abmaj7", "Gm7", "Fm7", "Bb7", "Eb6", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Bb7", "Bb7", "Ab6", "Eb6", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Am7b5", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ab6", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Eb6", "Fm7", "Bb7", "Ebmaj7", "Ab6", "Gm7", "C7", "Fm7", "Bb7", "Eb6"],
  },
  {
      title: 'Look To The Sky',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Ebmaj7", "Ebmaj7", "Gm7", "C7b9", "Fm7", "Fm7", "Abm7", "Db7", "Gm7", "Gbdim7", "Fm7", "Bb7#5", "Ebmaj7", "Gm7", "C7b9", "Fm7", "Emaj7#11", "Ebmaj7", "Abm7", "Db7b9", "Gbmaj7", "Emaj7#11", "Ebmaj7", "Ebmaj7"],
  },
  {
      title: 'Looking Up',
      composer: 'Michel Petrucciani',
      chords: ["Amaj7", "A7", "Dmaj7", "G7", "Amaj7", "A7", "Dmaj7", "C#7", "F#m7", "B7", "Emaj7", "C#7", "D#m7", "D#m7", "G#7", "G#7", "C#m7", "C#m7", "Amaj7", "B7", "C#m7", "G7#11", "F#7", "G#7"],
  },
  {
      title: 'Loop, The',
      composer: 'Chick Corea',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "C#dim7", "Dm7", "Dm7", "Bm7b5", "Bbm", "Bbmaj7", "Abdim7", "Gm7", "A7b9", "Dm7", "E7b9", "Am7", "D7", "Gm7", "C7", "Bbmaj7", "Bdim7", "F", "Bbm7", "Dm7", "Bbm7", "F", "Bdim7", "Bbmaj7", "Eb7", "Am7", "D7", "Abm7", "Db7", "Gm7", "C7"],
  },
  {
      title: 'Love For Sale',
      composer: 'Cole Porter',
      chords: ["Ebmaj7", "Ebmaj7", "Bbm7", "Bbm7", "Ebmaj7", "Ebmaj7", "Bbm7", "Bbm7", "Ebm7", "Ab7", "Dbmaj7", "Gb7", "Cm7b5", "F7b13", "Bbm6", "Bbm6", "Ebm7", "Ab7", "Dbmaj7", "Bb7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Bb7", "B7", "Bb7", "Ebm6", "Ebm6", "Gm7b5", "C7b9", "Gm7b5", "C7b9", "F#m7", "B7", "Fm7b5", "Bb7"],
  },
  {
      title: 'Love Is Just Around The Corner',
      composer: 'Lewis Gensler',
      chords: ["G7", "C7", "Fmaj7", "D7", "G7", "C7", "Fmaj7", "D7", "G7", "C7", "Am7", "D7", "G7", "C7", "F6", "D7", "Em7", "A7", "Dm7", "Em7", "A7", "Dm7", "G7", "Gdim7", "G7", "Gdim7", "G7", "C7", "G7", "C7", "Fmaj7", "D7", "G7", "C7", "Fmaj7", "D7", "G7", "C7", "Am7", "D7", "G7", "C7", "F6", "D7"],
  },
  {
      title: 'Love Is The Sweetest Thing',
      composer: 'Ray Noble',
      chords: ["D6", "Bm7", "Em7", "A7", "D6", "Bm7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Em7", "Bm7", "E7", "Em7", "A7", "Bm7", "F#m7", "B7", "Em7", "A7", "Dmaj7", "C#m7b5", "F#7", "Bm7", "E7", "Em7", "A7", "D6", "Bm7", "Em7", "A7", "D6", "Bm7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Em7", "Bm7", "", "E7", "A7", "D6"],
  },
  {
      title: 'Love Me Or Leave Me',
      composer: 'Walter Donaldson',
      chords: ["Fm7", "G7", "C7", "Fm7", "G7", "C7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Ab6", "Gm7b5", "C7b9", "Cm7", "F7", "Bbm7", "F7b9", "Bbm7", "Bbm7", "Eb7", "Cm7", "Bdim7", "Bbm7", "C7b9", "Fm7", "G7", "C7", "Fm7", "G7", "C7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Ab6", "Gm7b5", "C7b9"],
  },
  {
      title: 'Love Nest, The',
      composer: 'Louis Hirsch',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Bb7", "Bb7", "Ebmaj7", "C7", "Fm7", "C7", "Fm7", "F7", "Bb7sus", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Bb7", "Bb7", "Gm7b5", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Love Vibrations',
      composer: 'Horace Silver',
      chords: ["Dm7b5", "Db7b5", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "A7", "Ab7", "D7b9", "Gm", "Gmaug", "Gm6", "Gm7", "C7", "Fm7", "Gm7", "C7", "Fm7", "Bb7", "Dm7b5", "Db7b5", "Cm7", "F7", "F#dim7", "Gm7", "C7b9", "Fm7", "Bb7", "Db6", "D6", "Eb6"],
  },
  {
      title: 'Love Walked In',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "Cm7", "F7", "Bb7sus", "Bb7", "Ebmaj7", "Cm7", "F7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "C7", "Fm7", "Abm7", "Db7", "Gm7", "C7", "F7", "Bb7", "Ebmaj7", "Cm7", "F7", "Bb7sus", "Bb7", "Ebmaj7", "Cm7", "F7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "A7", "D7b13", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Lover',
      composer: 'Richard Rodgers',
      chords: ["Ebmaj7", "Ebmaj7", "Am7", "D7", "Abm7", "Db7", "Gm7", "C7", "F#m7", "B7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Bbmaj7", "Gm7", "Cm7", "F7", "Gm7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Lover Man',
      composer: 'Davis-Ramirez-Sherman',
      chords: ["Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "F7", "Bb7", "Abm7", "Db7", "Gm7", "C7", "Fmaj7", "", "Em7b5", "A7", "Am", "Am", "Am7", "D7", "Gmaj7", "Am7", "Bm7", "", "Am7", "D7", "Gm", "Gm", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "F7", "Bb7", "Abm7", "Db7", "Gm7", "C7", "Fmaj7", "", "", ""],
  },
  {
      title: 'Lover, Come Back To Me',
      composer: 'Sigmund Romberg',
      chords: ["Eb6", "Eb6", "Dm7b5", "G7b9", "Cm7", "Cm7", "F7", "F#dim7", "Eb6", "Cm7", "F7", "Bb7", "Eb6", "Eb6", "Ab6", "Adim7", "Eb6", "Cm7", "Fm7", "Bb7", "Cm7", "Cm7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Ab7", "G7b9", "Cm7", "Cm7", "Dm7b5", "G7b9", "Cm7", "F7", "F7", "Fm7", "Bb7", "Ab6", "Adim7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Lucky Southern',
      composer: 'Keith Jarrett',
      chords: ["Dmaj7", "Dmaj7#5", "D6", "Dmaj7#5", "Dmaj7", "Dmaj7", "E7", "E7", "Gmaj7", "Bb7", "A7", "Dmaj7", "Dmaj7", "Ebmaj7#11", "Dmaj7", "Dmaj7", "E7", "E7", "Gmaj7", "Bb7", "A7", "Dmaj7", "Dmaj7", "F#m7", "F#m7", "Em7", "Em7", "F#m7", "F#m7", "Am7", "D7", "Gmaj7", "Gm7", "D", "Fdim7", "Em7", "Bb7", "A7", "Dmaj7", "Dmaj7", "Ebmaj7#11"],
  },
  {
      title: 'Lullaby In Rhythm',
      composer: 'Goodman-Hirsch',
      chords: ["Fmaj7", "Fmaj7", "Gdim7", "Fmaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "C7", "Fmaj7", "C7", "Bbm7", "Eb7", "Fmaj7", "Em7b5", "A7", "Dm7", "G7", "C7", "Db7", "C7", "Fmaj7", "Fmaj7", "Gdim7", "Fmaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Lullaby Of Birdland',
      composer: 'George Shearing',
      chords: ["Fm", "Dm7b5", "G7", "C7", "Fm", "Bbm7", "Eb7", "Cm7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "C7b9", "Fm", "Dm7b5", "G7", "C7", "Fm", "Bbm7", "Eb7", "Cm7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Eb7", "Ab6", "", "Gm7b5", "C7"],
  },
  {
      title: 'Lullaby Of The Leaves',
      composer: 'Bernice Petkere',
      chords: ["Cm", "Am7b5", "D7", "G7b13", "Gm7", "C7", "Fm7", "Fm7", "Dm7b5", "G7b13", "Cm", "Ab7", "G7b9", "Ab7", "Ab7", "Cmaj7", "Cmaj7", "Ab7", "Ab7", "C6", "A7", "Dm7b5", "G7b13", "Cm", "Am7b5", "D7", "G7b13", "Gm7", "C7", "Fm7", "Fm7", "Dm7b5", "G7b13", "Cm", "Dm7b5", "G7b9"],
  },
  {
      title: 'Lulu\'s Back In Town',
      composer: 'Harry Warren',
      chords: ["C7", "F7", "Bb7", "Ebmaj7", "C7", "F7", "Bb7", "Eb7", "Abmaj7", "Adim7", "Gm7", "C7", "F7", "Bb7", "Eb6", "Abmaj7", "Adim7", "Eb6", "Eb7", "Abmaj7", "Adim7", "Eb6", "Cm7", "Am7b5", "D7b9", "Gm7b5", "C7", "F7b9", "F7", "Bb7", "C7", "F7", "Bb7", "Ebmaj7", "C7", "F7", "Bb7", "Eb7", "Abmaj7", "Adim7", "Gm7", "C7", "F7", "Bb7", "Eb6"],
  },
  {
      title: 'Lush Life',
      composer: 'Billy Strayhorn',
      chords: ["Db6", "B9", "Dbmaj7", "B9", "Dbmaj7", "B9", "Db", "Ebm7", "Fm7", "Gbm7", "Abm7", "D13#11", "Fm7", "D9#11", "Dbm6", "D13#11", "Fm6", "Fm6", "Fm6", "Gm7b5", "C7", "Fm6", "Fm6", "Fm6", "Ab13", "B9#11", "Bb9", "Ebm7", "A7#11", "Ebm7", "D7#11", "Dbmaj7", "D7#11", "Dbmaj7", "D7#11", "Db6", "", "F#m7", "B7", "Emaj7", "D7#11", "Dbmaj7", "D7#11", "Dbmaj7", "D7#11", "Db6", "", "Db7", "C7", "Fmaj7", "A7", "Abmaj7", "Eb7b9", "Abmaj7", "", "Em7", "A7", "Dmaj7", "", "Dm7", "G7", "Cmaj7", "Ab7", "Dbmaj7", "D7#11", "Dbmaj7", "D7#11", "Db6", "", "C7", "B7", "Fm7", "Bb7", "F#m7", "B7", "A7#5", "Ab7", "Dbmaj7", "Gb7", "Fm7", "Bb7", "F#m7", "B7", "A7#5", "Ab7", "Ab7", "A7", "Bb7", "B7", "C7", "D7", "Db", "Ab7", "Dbmaj7", "D7#11", "Dbmaj7", "D7#11"],
  },
  {
      title: 'Lyresto',
      composer: 'Kenny Burrell',
      chords: ["Ebmaj7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "C7", "Abm7", "Db7", "", "Gm7", "F#m7", "B7", "Fm7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Ma Belle Hélène',
      composer: 'Kenny Wheeler',
      chords: ["Ab", "Ab", "E", "E", "C", "C", "Ab", "Ab", "G", "G", "Eb", "Eb", "B", "B", "G", "G", "F#", "Bb", "D", "C", "Gb", "Gb", "Gb", "Gb", "A", "A", "F", "F", "C#", "C#", "A", "A", "Ab", "Ab", "E", "E", "C", "C", "Ab", "Ab", "G", "B", "D#", "C#", "G", "Bb", "Dm11", "Dm11"],
  },
  {
      title: 'Mack The Knife',
      composer: 'Weill-Brecht',
      chords: ["Bb6", "Bb6", "Cm7", "Cm7", "F7", "F7", "Bb6", "Bb6", "Gm7", "Gm7", "Cm7", "Cm7", "Cm7", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'Mahjong',
      composer: 'Wayne Shorter',
      chords: ["Fm11", "Eb69", "Fm11", "Eb69", "Fm11", "Eb69", "Fm11", "Eb69", "Fm11", "Eb69", "Fm11", "Eb69", "Dbmaj9", "Eb69", "Dbmaj9", "Eb69", "Dbmaj9", "Eb69", "Dbmaj9", "Eb69", "D7#9", "Ebm7", "Ab7", "Dbmaj9", "Dbm7", "Gb7", "Fm11", "Eb69", "Fm11", "Eb69", "Fm11", "Eb69", "Fm11", "Eb69"],
  },
  {
      title: 'Maiden Voyage',
      composer: 'Herbie Hancock',
      chords: ["D9sus", "D9sus", "D9sus", "D9sus", "F9sus", "F9sus", "F9sus", "F9sus", "Eb9sus", "Eb9sus", "Eb9sus", "Eb9sus", "C#m9", "C#m9", "C#m9", "C#m9", "D9sus", "D9sus", "D9sus", "D9sus", "F9sus", "F9sus", "F9sus", "F9sus"],
  },
  {
      title: 'Make Someone Happy',
      composer: 'Jule Styne',
      chords: ["Eb", "Ebaug", "Eb6", "Eb", "Ebaug", "Eb6", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab", "Abaug", "Ab6", "Abm7", "Db7", "Ebmaj7", "Gm7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Making Whoopee',
      composer: 'Walter Donaldson',
      chords: ["Gmaj7", "G#dim7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "F7", "Gmaj7", "Em7", "Eb7", "D7", "G6", "Em7", "Am7", "D7", "Bm7b5", "E7b9", "Am7", "Cm7", "F7", "Gmaj7", "Bm7b5", "E7b9", "Am7", "Cm7", "F7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "G#dim7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "F7", "Gmaj7", "Em7", "Eb7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'Mambo Inn',
      composer: 'Bauza-Sampson-Woodlen',
      chords: ["Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "D7b13", "Bbm7", "Eb7", "Abmaj7", "Eb", "Fm7", "Fm7", "Dm7", "G7", "Gm7", "Am7", "D7b13", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Man I Love, The',
      composer: 'George Gershwin',
      chords: ["Eb6", "Ebm7", "Gm7b5", "C7b9", "Fm7b5", "Bb7", "G7", "C7", "F7", "Bb7", "Cm6", "Am7b5", "D7b13", "G7b9", "Cm6", "G7b9", "Cm6", "Am7b5", "D7b13", "G7b9", "Cm7", "Gb7", "Fm7", "Bb7", "Eb6", "Ebm7", "Gm7b5", "C7b9", "Fm7b5", "Bb7", "Eb6", "Ab7", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'Man That Got Away, The',
      composer: 'Harold Arlen',
      chords: ["F6", "F6", "Gm7", "C7", "Bb7", "B7", "C7", "", "F6", "F6", "A7b13", "D7b13", "D7b13", "Gm7", "C7", "Am7b5", "D7b9", "Gm7", "C7", "Fmaj7", "C7", "F6", "F6", "Gm7", "C7", "Bb7", "B7", "C7", "", "F6", "F6", "Am7", "D7", "Gm7", "C7", "F6", "D7b13", "Gm7", "C7sus", "F6", "F6", "D7b9b13", "D7b9b13", "G7", "C7", "F6", "F6", "Db7", "C7", "Bbmaj7", "Bdim7", "F6", "D7b9", "Gm7", "C7sus", "F6", "Gm7", "C7"],
  },
  {
      title: 'Manha De Carnaval (Black Orpheus)',
      composer: 'Luiz Bonfa',
      chords: ["Am", "Bm7b5", "E7b9", "Am", "Bm7b5", "E7b9", "Am", "Dm7", "G7", "Cmaj7", "A7b9", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am", "Bm7b5", "E7b9", "Am", "Bm7b5", "E7b9", "Am", "Am", "Em7b5", "A7b9", "Dm", "Dm", "Dm7", "Dm7", "Bm7b5", "E7b9", "Am", "Am7", "Fmaj7", "Bm7b5", "E7b9", "Am", "Bm7b5", "E7b9", "Am", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "Em7", "Am"],
  },
  {
      title: 'Manhattan',
      composer: 'Richard Rodgers',
      chords: ["Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abdim7", "Gm7", "C7", "Bb7#11", "Am7", "D7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "Dm7", "G7", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abdim7", "Gm7", "C7", "Bb7#11", "Am7b5", "D7b9", "Gm7", "Bbm7", "Eb7", "Fmaj7", "Dm7", "G7", "G#dim7", "Am7", "D7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Manoir De Mes Rêves (Django\'s Castle)',
      composer: 'Django Reinhardt',
      chords: ["Ebmaj7", "Ebmaj7", "Bb7b9", "Ebmaj7", "Ebmaj7", "Bb7b9", "Ebmaj7", "Ebmaj7", "Bb7b9", "Eb7", "Eb7", "Eb7b9", "Abmaj7", "Abmaj7", "Adim7", "Ebmaj7", "Ebmaj7", "Cm7", "F7", "B7", "B7", "Bb7b9"],
  },
  {
      title: 'Manteca',
      composer: 'Dizzy Gillespie',
      chords: ["Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Ab7", "Db7", "", "Gb7", "F7", "Abm7", "D7b9", "Gbmaj7", "B7#11", "Bb7", "Eb7", "Abmaj7", "Abmaj7", "Abm7", "Db7", "Gbmaj7", "F#m7b5", "B7b9", "Fm7b5", "Bb7b9", "Cm7b5", "F7b9", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Bb7", "Ab7", "Db7", "", "Gb7", "F7"],
  },
  {
      title: 'Mas Que Nada',
      composer: 'Jorge Ben',
      chords: ["Fm7", "Bb7", "Fm7", "Bb7", "Bbm7", "Eb7", "Fm7", "C7sus", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "", "Cm", "Bm", "Bbm7", "Eb7", "Fm7", "C7sus", "Fm7", "C7#9", "Fm7", "C7#9", "Fm7", "C7#9", "Fm7", "C7#5", "Fm7", "Bb7", "Fm7", "Bb7", "Bbm7", "Eb7", "Ab6", "Ab6", "Bb7", "Eb7", "C7#9", "Fm7", "C7#9", "Fm7", "C7#9", "Fm7", "C7#9", "Fm7", "C7#5", "Fm7", "Bb7", "Fm7", "Bb7"],
  },
  {
      title: 'Masquerade Is Over, The',
      composer: 'Allie Wrubel',
      chords: ["Ebmaj7", "Dm7b5", "G7b9", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "", "", "", "Gm7", "C7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7sus", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Maybe I Should Change My Ways',
      composer: 'Duke Ellington',
      chords: ["Cm7b5", "F13b9", "Bbmaj7", "Eb13", "D7b13", "G9", "C13", "B13", "Bb13", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebm6", "Ab7", "Bbmaj7", "Dm7", "Db7#11", "Cm7b5", "G7", "", "C7", "F7", "Bbmaj7", "Bbmaj7"],
  },
  {
      title: 'Maybe September',
      composer: 'Percy Faith',
      chords: ["Am", "Am", "Bm7b5", "E7b9", "Am7", "Am7", "G7sus", "G7", "Cmaj7", "", "Bm7b5", "E7", "Am7", "Bm7b5", "Bm7b5", "E7b9", "E7b9", "E7b9", "E7b9", "", "Cmaj7", "", "Bm7b5", "E7", "Am7", "D7", "F7#11", "F7#11", "E7b9", "Bm7b5", "E7b9", "Am", "Bm7b5", "E7b9"],
  },
  {
      title: 'Maze, The',
      composer: 'Herbie Hancock',
      chords: ["Em7", "A", "Em7", "A", "Em7", "A", "Em7", "A", "Am7", "Gm7", "F#m7b5", "F13", "Em7", "A7", "Em7", "A7", "Am7", "Gm7", "F#m7b5", "B7b9", "Fmaj7"],
  },
  {
      title: 'Mc Jolt',
      composer: 'Richie Beirach',
      chords: ["Em7", "Em7", "Ebm7", "Ebm7", "Bmaj7#11", "Bbm11", "D7sus", "D7#9", "Gm7", "A7b9b13", "Dm7", "F7sus", "Abm11", "Bb7b9b13", "Ebm7", "Gb7sus", "Abm11", "Bb7b9b13", "Ebm7", "Gb7sus"],
  },
  {
      title: 'Mean To Me',
      composer: 'Turk-Ahlert',
      chords: ["Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "C7", "F6", "Dm7", "G7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "C7", "F6", "Dm7", "F6", "", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bb6", "Eb7", "D7", "Gm7", "Eb7", "D7", "G7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "C7", "F6", "Dm7", "G7", "C7"],
  },
  {
      title: 'Meaning Of The Blues, The',
      composer: 'Worth-Troup',
      chords: ["Dm", "Dmaug", "Dm6", "D7#9", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm", "Dmaug", "Dm6", "D7#9", "Gm7", "Bbm6", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Dm7", "G7", "Gm7", "Bb7", "A7b9", "Dm", "Dmaug", "Dm6", "D7#9", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm", "Dmaug", "Dm6", "D7#9", "Gm7", "Bbm6", "C7", "Cm7", "F7sus", "F7", "Bbmaj7", "Bbm6", "Eb7", "Dm7", "G7", "Dm7", "G7", "Gm7", "", "Bb7", "A7", "Dm"],
  },
  {
      title: 'Meditation',
      composer: 'Antonio-Carlos Jobim',
      chords: ["C6", "C6", "B7sus", "B7", "C6", "C6", "Em7", "A7b13", "Dm7", "Dm7", "Fm6", "Fm6", "Em7", "A7b13", "Dm7", "G7#5", "Fmaj7", "Fmaj7", "Fm6", "Fm6", "Em7", "Ebdim7", "Dm7", "G7#5", "Em7", "A7b13", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Memories Of Tomorrow',
      composer: 'Keith Jarrett',
      chords: ["Am", "Am", "Am7", "Em7", "F", "C", "G9sus", "C", "D", "F", "C", "Ebmaj7", "A7", "Abmaj7", "Gm", "Fm7", "Bb9sus", "C", "E7sus", "E7", "Am", "Fm", "Cmaj7", "D", "Fmaj7", "Fm", "C", "G9sus", "C", "E7sus", "E7"],
  },
  {
      title: 'Memories Of You',
      composer: 'Eubie Blake',
      chords: ["Ebmaj7", "Edim7", "Fm7", "F#dim7", "Ebmaj7", "Cm7", "Am7b5", "Abm6", "Ebmaj7", "D7", "Db7", "C7", "F7", "Bb7", "Eb6", "", "Fm7", "Bb7", "Cm7", "Ab7", "Cm7", "F7", "G7b13", "Cm7", "F7sus", "F7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "F#dim7", "Ebmaj7", "Cm7", "Am7b5", "Abm6", "Ebmaj7", "D7", "Db7", "C7", "F7", "Bb7", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'Mercy Mercy Mercy',
      composer: 'Joe Zawinul',
      chords: ["Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Eb7", "Bb", "Eb", "Bb7", "Eb", "Bb", "Eb", "Bb7", "Eb", "Bb", "", "Bb", "Eb", "F7sus", "Bb", "", "Bb", "Eb", "F7sus", "Cm7", "Dm7", "Gm", "F", "Gm", "F", "Gm"],
  },
  {
      title: 'Midnight Blue',
      composer: 'Kenny Burrell',
      chords: ["Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7", "Gm7b5", "C7#9", "Fm7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Bbm7", "Abm7", "C7#9", "Fm", "Fm", "C7#9", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7b5", "C7b9", "Fm7", "Fm7", "Bbm7", "Bbm7", "Db7", "C7#9", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "Gm7"],
  },
  {
      title: 'Midnight Mood',
      composer: 'Joe Zawinul',
      chords: ["Dbmaj7", "Ebm7b5", "Dbmaj7", "Ebm7b5", "Dbmaj7", "Ebm7b5", "Dbmaj7", "G7b5b9", "Gbmaj7", "C7#9", "Fm7", "Bbm7", "Ebm7", "Ebm7", "Abm7", "Abm7", "", "G7b5b9", "G7b5b9", "Gbmaj7", "C7#9", "Fm7", "Bb7#9", "Ebm7", "Ab7", "Dbmaj7", "Ebm7b5"],
  },
  {
      title: 'Midnight Sun',
      composer: 'Hampton-Burke-Mercer',
      chords: ["Cmaj7", "C6", "Cmaj7", "Cm7", "F9#11", "F9#11", "", "Bbmaj7", "Bb6", "Bbmaj7", "Bbm7", "Eb9#11", "Eb9#11", "", "Abmaj7", "Ab6", "Abmaj7", "Abm7", "Db9#11", "Db9#11", "Cmaj7", "Dm7", "G7", "Emaj7", "Em7", "A7", "Dmaj7", "Em7", "Eb7", "Dmaj7", "Dm7", "G7", "Em7", "Eb7", "Dm7", "Db7", "Cmaj7", "C6", "Cmaj7", "Cm7", "F9#11", "F9#11", "", "Bbmaj7", "Bb6", "Bbmaj7", "Bbm7", "Eb9#11", "Eb9#11", "", "Abmaj7", "Ab6", "Abmaj7", "Abm7", "Db9#11", "Db9#11", "Cmaj7", "Dm7", "G7"],
  },
  {
      title: 'Milano',
      composer: 'John Lewis',
      chords: ["Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "C7", "F#7", "Fmaj7", "", "Dm7", "G7", "Em7", "A7b9", "Dm7", "G7", "Cmaj7", "A7b9", "Fmaj7", "Fm6", "Em7", "Am7", "Dm7", "G7", "C7", "", "Gm7", "C7#5", "Fmaj7", "Fm6", "Em7", "Am7", "Fm7b5", "B7b9", "Em7", "A7b9", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "C7", "F#7", "Fmaj7", "", "Dm7", "G7", "Em7", "A7b9", "Dm7", "G7b9", "C6", "A7#5", "Em7", "A7#5", "Dm7", "G7b9", "C6"],
  },
  {
      title: 'Miles Ahead',
      composer: 'Miles Davis',
      chords: ["Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Dm7", "Gm7", "Gm7", "Gm7", "Fmaj7", "Fmaj7", "Bbmaj7", "B7", "E7", "Am", "Am", "F#m7b5", "F7", "Em7b5", "A7", "Dm7", "Dm7", "Cmaj7", "Cmaj7", "Dm7", "Gm7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b13", "Em7b5", "A7", "Dm7", "G7", "D7", "G7", "A7", "Dm7", "Dm7", "G7sus", "Bbmaj7", "Db7", "Cmaj7", "Cmaj7"],
  },
  {
      title: 'Milestones (New)',
      composer: 'Miles Davis',
      chords: ["Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Am", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7"],
  },
  {
      title: 'Milestones (Old)',
      composer: 'Miles Davis',
      chords: ["Fmaj7", "Bbm7", "Eb7", "Abmaj7", "Dbm7", "Gb7", "Cm7", "F7", "Bbmaj7", "G7b13", "Cm7", "F7", "Bbmaj7", "Eb7", "Abm7", "Db7", "Cm7", "C#m7", "Bm7", "E7", "Cm7", "F7", "Bbmaj7", "Amaj7", "Am7", "D7", "Gmaj7", "Bm7", "E7b9", "Am7", "D7", "Bbm7", "Eb7", "Bm7", "E7", "Cm7", "F7", "Bbmaj7", "Eb7", "Abm7", "Db7", "Cm7", "C#m7", "Bm7", "E7", "Cm7", "F7", "Bbmaj7"],
  },
  {
      title: 'Mimi',
      composer: 'Richard Rogers',
      chords: ["Gmaj7", "G6", "Am7", "D7", "Gmaj7", "G6", "Am11", "D7", "Gmaj7", "G6", "Am7", "D7", "Gmaj7", "G6", "Dm7", "G7", "Cmaj7", "C6", "Cdim7", "Cdim7", "Em7", "Em7", "Edim7", "Edim7", "Gmaj7", "G6", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'Mimosa',
      composer: 'George Benson',
      chords: ["Fm9", "Fmaj9", "Fm9", "Fmaj9", "Fm9", "Bb13", "Db7#11", "C7b9", "Fm9", "Bb13", "Db7#11", "C7b9", "Fmaj7", "Dm7", "Gm7", "C7", "A7", "Dm7", "Gm7", "C7", "Fm9", "Fmaj9", "Fm9", "Fmaj9"],
  },
  {
      title: 'Minoat',
      composer: 'Mal Waldron',
      chords: ["F7#11", "Fm9", "Bb7b9", "Abmaj7#11", "G7b13", "Cm7", "Baug", "Dm7b5", "G7b13", "Cm69", "C7b9", "Fm", "Abm7", "Db9", "Gbmaj7", "C7b9", "B9", "Abaug", "Am7b5", "Cm7", "F7", "Ab7#11", "Abm6", "Gm11", "C7", "F7#11", "Fm9", "Bb7b9", "Abmaj7#11", "G7b13", "Cm7", "Baug", "Dm7b5", "G7b13", "Cm69", "C7b9"],
  },
  {
      title: 'Minor Mishap',
      composer: 'Tommy Flanagan',
      chords: ["Bbm7", "C7#9", "F7b9", "Bbm7", "C7b9b13", "F7b9", "Bbm7", "Ebm7", "Bbm7", "Gm7b5", "C7b9", "Fm7", "G7#9", "C7b9", "Fm7", "G7b9b13", "C7b9", "Fm7", "Bbm7", "Fm7", "G7b9", "C7#9", "Fm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "C7alt", "F7", "Bbm7", "C7#9", "F7b9", "Bbm7", "C7b9b13", "F7b9", "Bbm7", "Ebm7", "Bbm7", "C7b13", "F7#9", "Bbm7", "F7"],
  },
  {
      title: 'Minor Mood',
      composer: 'Clifford Brown',
      chords: ["Fm7", "Bbm6", "C7b13", "Fm7", "Bb7", "Bbm7", "Bbm7", "Eb7", "Gm7b5", "C7b13", "Fm7", "Fm7", "Db7", "Db7", "C7b13", "Fm", "C7b5#9", "Fm7", "Gm7b5", "C7b13", "Fm7", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "C7b13", "C7b13", "Gm7b5", "Abmaj7", "Gm7b5", "C7b13", "Fm", "Fm"],
  },
  {
      title: 'Minor Strain',
      composer: 'Bobby Timmons',
      chords: ["Dm11", "Dm11", "Dm11", "Dm11", "Cm11", "Cm11", "Cm11", "Cm11", "Gm7", "Gm7", "Bbm7", "Eb7", "Am7", "Am7", "D7", "G", "Am7", "Bbdim", "Bm7"],
  },
  {
      title: 'Minority',
      composer: 'Gigi Gryce',
      chords: ["Fm", "Fm6", "Gm9", "C13", "Fm", "Fm6", "Cm9", "F13", "Bbm9", "Eb13", "Abm9", "Db13", "F#m9", "B13", "Gm9", "C7b13"],
  },
  {
      title: 'Mirror, Mirror',
      composer: 'Chick Corea',
      chords: ["Cmaj7", "E7alt", "Fmaj7", "A7alt", "Dmaj7", "F#7alt", "Gmaj7", "B7alt", "Cmaj7", "B7#11", "Bmaj7", "Am7", "F7", "F#dim7", "C", "C7b9", "Bmaj7", "Eb7alt", "Emaj7", "Ab7alt", "Gmaj7", "Emaj7", "Dbmaj7#11", "Bb7", "A7alt", "Dm7", "G7", "G#dim7", "Am7", "D7#11", "Fm11", "G7"],
  },
  {
      title: 'Misterioso',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Cm7", "F7", "Bb7", "Bb7b5"],
  },
  {
      title: 'Misty',
      composer: 'Erroll Garner',
      chords: ["Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7b9", "Abmaj7", "Abmaj7", "Am7", "D7", "F7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Miyako',
      composer: 'Wayne Shorter',
      chords: ["A7", "A7", "F#7sus", "F#7sus", "Em7", "Ebm7", "Dm7", "G7#11", "Cmaj7", "Am7", "Gm7", "Fmaj7", "E7#9", "Amaj7", "Am7", "Abm7", "G7#11", "F#m7b5", "B7b9", "Em7b5", "A7b9", "Dm7", "Cm7", "Bm7", "E7", "Bbm7", "Eb7", "Bm7", "E7b9"],
  },
  {
      title: 'Moment\'s Notice',
      composer: 'John Coltrane',
      chords: ["Em7", "A7", "Fm7", "Bb7", "Ebmaj7", "Abm7", "Db7", "Dm7", "G7", "Ebm7", "Ab7", "Dbmaj7", "Dm7", "G7", "Cm7", "B7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gm7", "C7", "Abm7", "Db7", "Gb6", "Fm7", "Bb7"],
  },
  {
      title: 'Moments To Remember',
      composer: 'Robert Allen',
      chords: ["Gmaj7", "G6", "Gmaj7", "G6", "G", "G7#5", "C", "Am", "D7", "D7", "Gdim7", "G", "Gdim7", "G", "C", "G", "D7", "G", "G7", "C", "G", "Em", "A7", "Am7", "D7", "Gmaj7", "G6", "Gmaj7", "G6", "G", "G7#5", "C", "Am", "D7", "D7", "Cm", "G", "Cm", "G"],
  },
  {
      title: 'Mona Lisa',
      composer: 'Livingston-Evans',
      chords: ["Eb6", "Eb6", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Eb6", "Eb6", "Ebmaj7", "Eb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Adim7", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "", "Fm7", "Bb7", "Eb6", "Fm7b5", "Bb7b9", "Eb6", "Eb6"],
  },
  {
      title: 'Monk\'s Dream',
      composer: 'Thelonious Monk',
      chords: ["Cmaj7", "F7", "Bb7#11", "Cmaj7", "F7", "Bb7#11", "Cmaj7", "F7", "Bm7", "Bb7#11", "A7#11", "Ab7#11", "G7#11", "C7", "C7", "C7", "C7", "C7", "C7", "C7", "C7", "Cmaj7", "F7", "Bb7#11", "Cmaj7", "F7", "Bb7#11", "Cmaj7", "F7", "Bm7", "Bb7#11", "A7#11", "Ab7#11", "G7#11"],
  },
  {
      title: 'Monk\'s Mood',
      composer: 'Thelonious Monk',
      chords: ["Fm7", "", "Bb7", "C", "Cmaj7", "Dm7b5", "G7b9#11", "Dbmaj7#11", "Bb7", "A7b13", "E7b9", "Eb7#9", "D7sus", "E7sus", "Dm7", "Bb7b9#11", "Gm7", "C13b9", "Gm7", "F#m7", "F#m7", "B13b9", "E6", "Am7b5", "Ab7", "G7sus", "Abdim7", "Am7b5", "F13", "Fm7", "Bbmb6", "Dm7", "Bb7b9#11", "Fm7", "", "Bb7", "C", "Cmaj7", "Dm7b5", "G7b9#11", "Dbmaj7", "Bb7", "A7b13", "E7b9", "Eb7#9", "Ab7#5", "G7", "Dbmaj7#11"],
  },
  {
      title: 'Mood Indigo',
      composer: 'Duke Ellington',
      chords: ["Abmaj7", "Bb7", "Ebm7", "Eb7#5", "Abmaj7", "Abmaj7", "Bb7", "E7", "Eb7", "Abmaj7", "Ab7", "Db6", "Gb7", "Abmaj7", "Bb7", "Ebm7", "Eb7#5", "Abmaj7", "Abmaj7", "F7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Eb7", "Abmaj7", "F7", "Bb7", "E7", "Eb7", "Abmaj7", "Ab7", "Db6", "Gb7", "Abmaj7", "F7", "Bb7", "Bbm7", "Eb7", "Ab6", "Eb7"],
  },
  {
      title: 'Moon And Sand',
      composer: 'Wilder-Palitz',
      chords: ["Dm7", "Bbmaj7", "Abmaj7", "Bb7sus", "Ebmaj7", "A7", "Abmaj7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Em7b5", "A7b13", "Dm7", "G7b9", "Cm7", "F7b9", "Bbmaj7", "Gm7", "Em7b5", "A7", "Dm7", "Bbmaj7", "Abmaj7", "Bb7sus", "Ebmaj7", "A7", "Abmaj7", "Am7", "D7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "Em7b5", "A7", "Dm7", "Dm7"],
  },
  {
      title: 'Moon Mist',
      composer: 'Ellington-Mercer',
      chords: ["Dm7", "Dm7", "Bm7b5", "Bb7", "Am7", "Eb7", "D7", "G7sus", "G7", "C7sus", "C7", "Am7", "D7", "Gm7", "A7b9", "Fmaj7", "Bb", "Fmaj7", "Bb", "Fmaj7", "Gm7b5", "Fmaj7", "C7sus", "Fmaj7", "Bb", "Fmaj7", "Dm7", "G7", "G7", "Em7b5", "A7b9", "Dm7", "Dm7", "Bm7b5", "Bb7", "Am7", "Eb7", "D7", "G7sus", "G7", "C7sus", "C7", "Fmaj7", "Dm7", "Em7b5", "A7b9", "Fmaj7", "Bb7", "Eb7", "Ab7", "Db7", "Gb7", "Fmaj7"],
  },
  {
      title: 'Moon Rays',
      composer: 'Horace Silver',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "F#m7", "B7", "Fm7", "Bb7", "Am7b5", "Abm7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Bbm7", "Eb7", "Am7", "D7", "C#m7b5", "Cm7", "Bm7b5", "E7b9", "Am7", "D7b9", "Gm7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Moon River',
      composer: 'Henry Mancini',
      chords: ["Cmaj7", "Am7", "Fmaj7#11", "Cmaj7", "Fmaj7#11", "Cmaj7", "Bm7b5", "E7b9", "Am", "Am7", "Fmaj7", "Bb7#11", "Am", "Am", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "G7"],
  },
  {
      title: 'Moonchild',
      composer: 'Keith Jarrett',
      chords: ["C#m7", "", "F#7", "Gdim", "G#m7", "Em7", "C#m7", "G#m7", "Dm7", "E7b9", "Am7", "", "Fm7", "Bb7", "Am7", "Em11", "Em7"],
  },
  {
      title: 'Moondance',
      composer: 'Van Morrison',
      chords: ["Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "E7b13", "Am7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "E7b13", "Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Am7", "Bm7", "Am", "G", "F", "Em", "Dm", "E7b13", "Am"],
  },
  {
      title: 'Moonglow',
      composer: 'Hudson-Lange-Mills',
      chords: ["Cmaj7", "F7#11", "G6", "A7", "Am7", "D7", "G6", "Eb7", "Am7", "Eb7", "G6", "", "G7", "G7", "Gb7", "F7", "", "E7", "E7", "A7", "A7", "D7", "Eb7", "D7", "G7", "Cmaj7", "F7#11", "G6", "A7", "Am7", "D7", "G6", "Eb7", "Am7", "Eb7", "G6", ""],
  },
  {
      title: 'Moonlight Becomes You',
      composer: 'Jimmy Van-Heusen',
      chords: ["Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "A7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "F#dim7", "Gm7", "C7", "Fmaj7", "A7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "C7", "A7", "D7", "G7", "C7", "F6", "F6"],
  },
  {
      title: 'Moonlight In Vermont',
      composer: 'Karl Suessdorf',
      chords: ["Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Db7", "Fm7", "Bb7sus", "Eb6", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Bb7b9", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Db7", "Fm7", "Bb7sus", "Eb6", "F7", "", "Bb7", "E7", "Eb6"],
  },
  {
      title: 'Moonlight Saving Time',
      composer: 'Irving Kahal',
      chords: ["Fmaj7", "Abdim7", "Gm7", "C7", "F6", "C7", "Am7", "Abdim7", "Gm7", "C7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F7", "Cm7", "F7", "Bb6", "F7", "Bb7", "", "A7", "Ab7", "G7", "Dm7", "G7", "C7", "G7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "F6", "C7", "Am7", "Abdim7", "Gm7", "F#dim7", "C7", "C7", "G7", "C7", "F6", "", "Gm7", "C7"],
  },
  {
      title: 'Moonlight Serenade',
      composer: 'Miller-Parish',
      chords: ["F6", "Abdim7", "Gm7", "C7", "C7#5", "Fmaj7", "F6", "Fmaj7", "F6", "Fmaj7", "F7", "D7b9", "Bbm6", "Am7", "D7", "Gm7b5", "Gm7", "C7", "C7b9#5", "Fmaj7", "Gm7", "C7", "", "Bbmaj7", "Eb7", "A7b9#5", "D7b9", "D7b9", "D7", "Bm7b5", "E7b9", "Am7b5", "D7b9", "Gm7", "C7b9", "Fmaj7", "Abdim7", "Gm7", "C7", "C7#5", "Fmaj7", "F6", "Fmaj7", "F6", "Fmaj7", "F7", "D7b9", "Bbm6", "Am7", "D7", "Gm7b5", "Gm7", "C7", "C7#5", "Fmaj7"],
  },
  {
      title: 'Moontrane, The',
      composer: 'Woody Shaw',
      chords: ["Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Gmaj7#11", "Fmaj7#11", "Ebmaj7#11", "Db7#5#9", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7", "Bbmaj7", "Am7", "Am7", "Cm7", "Dm7", "Eb7#9", "Fm7", "Dmaj7#11", "Cm7", "F7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "Fm7", "Bbm7", "Abm7", "C#m7", "Bm7", "Bm7", "Bbmaj7", "Bbmaj7", "Am7", "Am7", "Cm7", "Dm7", "Eb7#9", "Fm7", "Dmaj7#11", "Dmaj7#11"],
  },
  {
      title: 'Moose The Mooche',
      composer: 'Charlie Parker',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'More I See You, The',
      composer: 'Harry Warren',
      chords: ["Eb6", "Fm7", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "Fm7", "Gm7", "C7b9", "Fm7", "Bb7", "Ebm7", "C#m7", "F#7", "Bmaj7", "Fm7b5", "Bb7b13", "Ebm7", "F7", "Fm7", "Bb7sus", "Eb6", "Fm7", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "Fm7", "Gm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "Gm7", "C7", "F7", "Ebmaj7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'More Than You Know',
      composer: 'Vincent Youmans',
      chords: ["C6", "G7#5", "Gm7", "C7", "Fmaj7", "", "Em7", "A7", "Dm7", "Fm6", "G7", "Ab7#11", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C6", "G7#5", "Gm7", "C7", "Fmaj7", "", "Em7", "A7", "Dm7", "Fm6", "Em7", "A7", "Dm7", "G7", "C6", "F#m7b5", "B7b13", "Em7", "C#m7b5", "F#m7b5", "B7#9", "Em7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Dm7", "G7", "C6", "G7#5", "Gm7", "C7", "Fmaj7", "", "Em7", "A7", "Dm7", "Fm6", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Morgan The Pirate',
      composer: 'Lee Morgan',
      chords: ["Eb69", "Ab69", "Eb69", "Dbmaj7", "Bmaj7", "Bb7", "Eb69", "Bb7#9", "Eb", "E", "Eb", "D", "Eb", "E", "Eb", "Dm7b5", "G7#9", "Cm7", "G7#9", "Cm7", "F7", "F7", "B7", "Bb7", "Bb7", "Eb69", "Ab69", "Eb69", "Dbmaj7", "Bmaj7", "Bb7", "Eb69", "Bb7#9"],
  },
  {
      title: 'Morning',
      composer: 'Clare Fischer',
      chords: ["Bm7", "E7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Dm7", "G7", "Em7", "A7", "Bm7", "E7", "Am7", "D7", "Dm7", "Dm7", "C6", "C6", "Dm7", "Dm7", "E7", "E7", "Bm7", "E7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Dm7", "G7", "Em7", "A7", "Bm7", "E7", "Am7"],
  },
  {
      title: 'Most Beautiful Girl In The World, The',
      composer: 'Rodgers-Hart',
      chords: ["Fmaj7", "Fmaj7", "Fdim7", "Fdim7", "Fmaj7", "Fdim7", "Fmaj7", "Abdim7", "Gm7", "C7", "Gm6", "C7", "Fmaj7", "Am7", "Gm7", "C7", "Dm7", "G7", "Gm7", "C7", "Dm7", "G7", "Gm7", "C7", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Cm7", "Cm7", "Am7b5", "D7", "Dm7", "G7", "Gm7", "Gm7", "F6", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Mountain Greenery',
      composer: 'Richard Rodgers',
      chords: ["C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "D7", "Em7", "A7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "D7", "G7", "Gm7", "C7", "F6", "Gm7", "C7", "F6", "Bb7", "Am7", "D7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Move',
      composer: 'Denzil Best',
      chords: ["Bb6", "Eb7", "Bb6", "Bdim7", "Cm7", "F7", "Bb6", "Bb6", "Fm7", "Bb7", "Eb6", "Eb6", "C7", "C7", "Cm7", "F7", "Bb6", "Eb7", "Bb6", "Bdim7", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'Mr. P.C.',
      composer: 'John Coltrane',
      chords: ["Cm7", "Cm7", "Cm7", "Cm7", "Fm7", "Fm7", "Cm7", "Cm7", "Ab7", "G7b13", "Cm7", "Cm7"],
  },
  {
      title: 'My Baby Just Cares For Me',
      composer: 'Walter Donaldson',
      chords: ["Amaj7", "Bm7", "E7", "Amaj7", "Bm7", "E7", "Amaj7", "Bm7", "E7", "Bm7", "E7", "G#m7b5", "C#7b9", "F#m7", "F#m7", "B7", "B7", "Bm7", "E7", "Amaj7", "Bm7", "E7", "Amaj7", "Bm7", "E7", "Amaj7", "Bm7", "E7", "Dmaj7", "Dmaj7", "Dmaj7", "E7", "Amaj7", "G7", "F#7", "Bm7", "E7", "A6", "A6"],
  },
  {
      title: 'My Buddy',
      composer: 'Walter Donaldson',
      chords: ["Gmaj7", "G#dim7", "Am7", "D7", "G6", "Bbdim7", "Am7", "D7", "G6", "G6", "G7", "E7", "E7", "Am7", "A7", "Am7", "D7"],
  },
  {
      title: 'My Favorite Things',
      composer: 'Richard Rodgers',
      chords: ["Em7", "F#m7", "Em7", "F#m7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Am7", "D7", "Gmaj7", "Cmaj7", "Gmaj7", "Cmaj7", "F#m7b5", "B7b9", "Emaj7", "F#m7", "Emaj7", "F#m7", "Amaj7", "Amaj7", "Amaj7", "Amaj7", "Am7", "D7", "Gmaj7", "Cmaj7", "Gmaj7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "F#m7b5", "B7b9", "Em7", "Em7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "A7", "A7", "Gmaj7", "Cmaj7", "Cmaj7", "D7", "G6", "Cmaj7", "G6", "Cmaj7", "Gmaj7", "Cmaj7", "F#m7b5", "B7b9"],
  },
  {
      title: 'My Foolish Heart',
      composer: 'Victor Young',
      chords: ["Bbmaj7", "Ebmaj7", "Dm7", "G7", "Cm7", "Em7", "A7b9", "Bbmaj7", "D7#9", "Gm7", "", "Cm7", "Cm7", "F7b9", "Bbmaj7", "Fm7", "Bb7", "Eb6", "Am7b5", "D7b9", "Gm7", "D7b13", "Gm7", "C7", "Cm7", "G7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Dm7", "G7", "Cm7", "Em7", "A7b9", "Bbmaj7", "D7b9", "Gm7", "", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "Ebm7", "Ab7", "Bbmaj7", "Ebmaj7", "Ab7", "G7", "Cm7", "G7", "C7", "F7", "Bbmaj7", "G7", "Cm7", "F7sus"],
  },
  {
      title: 'My Funny Valentine',
      composer: 'Richard Rodgers',
      chords: ["Cm6", "Dm7b5", "G7b9", "Cm7", "F7", "Abmaj7", "Fm7", "Dm7b5", "G7b9", "Cm6", "Dm7b5", "G7b9", "Cm7", "F7", "Abmaj7", "Fm7", "Fm7b5", "Bb7", "Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "G7b9", "Cm7", "B7", "Bbm7", "A7", "Abmaj7", "Dm7b5", "G7b9", "Cm6", "Dm7b5", "G7b9", "Cm7", "F7", "Abmaj7", "Dm7b5", "G7b9", "Cm7", "B7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bb7", "Eb6", "Dm7b5", "G7b9"],
  },
  {
      title: 'My Heart Belongs To Daddy',
      composer: 'Cole Porter',
      chords: ["Cm6", "Cm6", "Cm6", "Fm6", "G7b9", "Dm7b5", "G7b13", "Dm7b5", "G7b13", "Cm6", "Cm6", "Cm6", "Cm6", "G7b9", "G7b9", "G7b9", "G7b9", "Cmaj7", "Cmaj7", "Cmaj7", "C7", "Fmaj7", "Fm6", "C6", "Dm7b5", "G7b13", "Cm6", "", "Dm7b5", "G7"],
  },
  {
      title: 'My Heart Stood Still',
      composer: 'Richard Rodgers',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "F7", "Bb6", "Eb7", "Am7", "D7b13", "Gm7", "C7", "Am7", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "G7b9", "Cmaj7", "Dm7b5", "G7", "Db7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "F7", "Bb6", "Eb7", "Am7", "D7b13", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'My Ideal',
      composer: 'Richard Whiting',
      chords: ["Eb6", "C9#5", "Fm7", "Db7", "C9#5", "F7", "Fm7", "Bb7", "Dm7b5", "G7b9", "Cm7", "F7", "B7", "Bb7", "Eb6", "C9#5", "Fm7", "Db7", "C9#5", "F7", "Fm7", "Abm6", "Eb", "Ab7", "Gm7", "C7", "B7", "Bb7", "Eb6"],
  },
  {
      title: 'My Last Affair',
      composer: 'Haven Johnson',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "Ebdim7", "Dm7", "G7", "D7", "G7", "C6", "Am7", "Dm7", "G7", "Fmaj7", "Gm7", "Fdim7", "Am7", "Fmaj7", "", "Fdim", "Gm", "Fmaj7", "Cmaj7", "Dm7", "Em7", "Am7", "Ab7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "Ebdim7", "Dm7", "G7", "D7", "G7", "C6", "Eb7", "Abmaj7", "G7"],
  },
  {
      title: 'My Little Brown Book',
      composer: 'Billy Strayhorn',
      chords: ["Bb6", "F7#5", "Bb7", "Ebmaj7", "Ebm6", "Ab7", "Bb", "Bbaug", "Cm7", "F7", "Dm7", "Db7", "Cm7", "F7#5", "Dbmaj7", "Bb7b9", "Ebm7", "Ab7b9", "Dbmaj7", "Edim7", "Ebm7", "Ab7#5", "Dbmaj7", "Bb7b9", "Ebm7", "Ab7b9", "Dbmaj7", "Gm7b5", "Gb7#11", "F7sus", "Bb6", "F7#5", "Bb7", "Ebmaj7", "Ebm6", "Ab7", "Bb", "Bbaug", "Cm7", "F7", "Bbmaj7", "", "C#m7", "F#7", "Bmaj7", "Cm7b5", "F7", "Bbmaj7"],
  },
  {
      title: 'My Little Suede Shoes',
      composer: 'Charlie Parker',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7"],
  },
  {
      title: 'My Lucky Star',
      composer: 'DeSylva-Brown-Henderson',
      chords: ["F6", "C7#5", "F6", "C7#5", "C7#5", "Fmaj7", "Am7", "D7b9", "Gm7", "C7", "Gm7", "Gm", "Gm7", "Gm", "Gm", "Gm7", "Dm7", "G7", "C7sus", "C7", "F6", "C7#5", "F6", "C7#5", "C7#5", "Am7b5", "D7", "Ab9", "Gm7", "D7", "Gm7", "Gm7", "Eb7#11", "Dm7", "G7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'My Man\'s Gone Now',
      composer: 'George Gershwin',
      chords: ["Em9", "Fmaj9", "Em9", "B13", "E7#9", "Am9", "B7b9sus", "B7#5#9", "Em9", "Fmaj9#11", "Em9", "B7#5#9", "Bb13", "Bb7#5", "Ebmaj7", "B13", "B9#5", "Em9", "C#13", "C#9#5", "F#m9", "Am9", "B7b9#5", "Em9", "Fmaj7#11", "Em9", "B7#5#9"],
  },
  {
      title: 'My Melancholy Baby',
      composer: 'Burnett-Norton',
      chords: ["Bbmaj7", "Bbmaj7", "Ab7", "G7", "Cm7", "G9#5", "Cm7", "G9#5", "Cm7", "Cm7", "F7", "Gbdim7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Ab7", "G7", "Cm7", "G9#5", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Bb7", "G7", "Cm7", "F7", "Bb6", "Bdim7", "Cm7", "F7"],
  },
  {
      title: 'My Old Flame',
      composer: 'Johnson-Coslow',
      chords: ["Fmaj7", "Am7b5", "D7b9", "Gm7", "Bbm7", "Eb7", "Fmaj7", "", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Gb7", "F7", "Bb7", "Bbm7", "Eb7", "Gm7b5", "C7", "Fm7", "", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Am7b5", "D7b9", "Gm7", "Bbm7", "Eb7", "Fmaj7", "", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "F6"],
  },
  {
      title: 'My One And Only Love',
      composer: 'Wood-Mellin',
      chords: ["Cmaj7", "Am7", "Dm7", "", "G7", "G#dim", "Am7", "Fmaj7", "Em7", "A7", "Dm7", "", "G7", "G#dim", "Am7", "D7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Em7", "", "F#m7b5", "B7b9", "Em7", "", "F#m7b5", "B7b9", "Em", "Em", "Em7", "A7", "Dm7", "A7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "", "G7", "G#dim", "Am7", "Fmaj7", "Em7", "A7", "Dm7", "", "G7", "G#dim", "Am7", "D7", "Dm7", "G7", "C6", "G7"],
  },
  {
      title: 'My Romance',
      composer: 'Richard Rodgers',
      chords: ["Cmaj7", "Fmaj7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "E7", "Am7", "E7", "Am7", "A7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "Bb7", "Cmaj7", "C7", "Fmaj7", "Bb7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "Bb7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "E7", "Am7", "E7", "Am7", "A7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "A7", "Dm7", "Dm7", "Bm7b5", "E7b9", "Am7", "Ab7", "Cmaj7", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'My Secret Love',
      composer: 'Roger Vogel',
      chords: ["Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Ebmaj7", "C7#9", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Ebmaj7", "Ebmaj7", "Gm7b5", "C7#9", "Fm7", "Bb7", "Eb6", "Eb6"],
  },
  {
      title: 'My Shining Hour',
      composer: 'Harold Arlen',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Bm7b5", "E7b9", "Am", "Am", "Bm7b5", "E7b9", "Am7", "D7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "C6", "Ebdim7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Cmaj7", "Dm7", "Em7", "Ebdim7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'My Ship',
      composer: 'Kurt Weill',
      chords: ["Fmaj7", "D7", "G7", "C7", "Fmaj7", "D7", "Bm7b5", "Bb7", "Am7", "D7", "Gm7", "A7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "Bbm6", "Fmaj7", "", "Bm7b5", "E7", "Am7", "Dm7", "Am7", "Dm7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "D7", "G7", "C7", "Fmaj7", "D7", "Bm7b5", "Bb7", "Am7", "D7", "Gm7", "A7", "Dm7", "C7", "F", "F#dim", "Gm7", "C7", "Fmaj7", "Dm7", "Bbmaj7", "Eb7", "Am7", "Ab7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'My Song',
      composer: 'Keith Jarrett',
      chords: ["C", "C", "Dbmaj7", "Dm7", "G7sus", "C", "C", "Dm", "Dm", "G7sus", "G7", "F#m7b5", "F#7b5", "Fmaj7", "F", "Dm7", "D#dim", "Em7", "Am7", "Dm7", "C", "Fm7", "G7b9", "Eb", "Eb", "Cm7", "D7#9", "G7b9", "Abmaj7", "Am", "Am", "D7b9", "Gm7", "C7b9#11", "C", "Db", "Bbm7", "Bbm7", "G7b9b13", "Am7", "Bb", "F", "G7sus", "G7", "C", "C", "Dbmaj7", "Dm7", "G7sus"],
  },
  {
      title: 'My Way',
      composer: 'Revaux-Francois-Thibaud-Anka',
      chords: ["C", "Cmaj7", "C7", "A7", "Dm7", "Dm7", "G7", "F", "C", "C", "Cmaj7", "Gm7", "C7", "Fmaj7", "Fm7", "Cmaj7", "Am7", "Dm7", "G7", "F", "C", "C", "Cmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fmaj7", "Dm7", "G7", "Em7", "Am7", "Dm7", "G7", "F", "C", ""],
  },
  {
      title: 'Nacada',
      composer: 'Pat Metheny',
      chords: ["Gmaj9", "Em9", "Ebmaj7#11", "B7#5#9", "Em9", "A13", "Abmaj9", "Db9#11", "Cm7b5", "F7#9", "Emaj9", "A13", "Dmaj7", "Bm7", "Bbmaj7", "Eb9#11", "Am7", "D7", "Dmaj7", "Bm7", "Bbmaj7", "Eb9#11", "Dmaj7"],
  },
  {
      title: 'Naima',
      composer: 'John Coltrane',
      chords: ["Bbm7", "Ebm9", "Amaj7", "Gmaj7", "Abmaj7", "Bmaj7", "Bb13b9", "Bmaj7", "Bb13b9", "E7#11", "Bmaj7", "Abmaj7", "Gb13", "Bbm7", "Ebm9", "Amaj7", "Gmaj7", "Abmaj7", "Amaj7", "Gmaj7", "Abmaj7", "Amaj7", "Gmaj7", "Abmaj7", "Amaj7", "Gmaj7", "Abmaj7", "Dbmaj7", "Abmaj7", "Dbmaj7", "Abmaj7", "Dbmaj7", "Abmaj7"],
  },
  {
      title: 'Nancy (With The Laughing Face)',
      composer: 'Jimmy Van-Heusen',
      chords: ["Fm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "Gbdim7", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cm7", "F7", "Fm7", "C7b9", "Cm6", "Dm7b5", "G7b9", "Cm6", "F7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "", "Dm7b5", "G7", "Cm7", "F7", "Bb7sus", "C7b9", "Fm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "Gbdim7", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cm7", "", "F7", "Bb7", "Eb6", "", "Gm7", "C7"],
  },
  {
      title: 'Nardis',
      composer: 'Miles Davis',
      chords: ["Em7", "Fmaj7", "B7", "Cmaj7", "Am7", "Fmaj7", "Emaj7", "Em7", "Am7", "Fmaj7", "Am7", "Fmaj7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Em7", "Fmaj7", "B7", "Cmaj7", "Am7", "Fmaj7", "Emaj7", "Em7"],
  },
  {
      title: 'Nascimento',
      composer: 'Barry Harris',
      chords: ["Gmaj7", "C7", "Gmaj7", "C7", "Bmaj7", "Bmaj7", "Fm7b5", "Bb7", "Ebm7", "Ebm7", "Cm7b5", "F7", "Bbmaj7", "Am7b5", "D7", "Gmaj7", "F#m7b5", "B7", "Emaj7", "Ebm7b5", "Ab7", "Dbmaj7", "F#7", "Gmaj7", "C7", "Gmaj7", "C7", "Gmaj7", "C7", "Gmaj7", "C7"],
  },
  {
      title: 'Nature Boy',
      composer: 'Eden Ahbez',
      chords: ["Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "Dm", "Dm7", "Dm6", "Gm6", "Dm", "Em7b5", "A7b9", "A7b9", "Dm", "Dm", "E7b9", "E7b9", "A7b9", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "Dm", "Dm7", "Dm6", "Gm6", "Dm", "Em7b5", "A7b9", "A7b9", "Dm", "Bm7b5", "E7b9", "A7b9", "Dm", "Em7b5", "A7b9"],
  },
  {
      title: 'Nearness Of You, The',
      composer: 'Hoagy Carmichael',
      chords: ["Fmaj7", "Cm7", "F7", "Bbmaj7", "Bbdim7", "", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Am7b5", "D7b9", "G7", "Gm7", "C7", "Am7b5", "D7b9", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Nefertiti',
      composer: 'Wayne Shorter',
      chords: ["Abmaj7", "Dbmaj7", "Gm7b5", "C7b9", "Bmaj7", "Bmaj7#11", "Bbm7b5", "Eb7b9#11", "Emaj7", "A9sus", "D7alt", "Gb9sus", "E9sus", "Eb7#11", "Bbm", "Eb7#11"],
  },
  {
      title: 'Never Let Me Go',
      composer: 'Jay Livingston',
      chords: ["Gm7", "C7sus", "C7b13", "Fm7", "Bb7sus", "Bb7", "Ebmaj7", "D7sus", "D7", "Dbmaj7", "C7sus", "C7", "Cm7", "F7sus", "F13b9", "Bbm", "Eb7sus", "Eb7", "Abmaj7", "Dm7b5", "G7b9", "Cmaj7", "Dm7", "Em7", "D7b9", "Gm7", "C7sus", "C7b13", "Fm7", "Bb7sus", "Bb7", "Ebmaj7", "D7sus", "D7", "Gm", "Gm", "C7", "Cm7", "F7", "Ebm", "Bb6", "Am7b5", "D7b9"],
  },
  {
      title: 'Never Will I Marry',
      composer: 'Frank Loesser',
      chords: ["Ebmaj7", "Ebmaj7", "Dm7", "Dm7", "Ebmaj7", "Ebmaj7", "Dm7", "Ebmaj7", "Abmaj7", "Abmaj7", "Am7", "D7", "Gm7", "Em7", "A7", "Dmaj7", "B7", "Em7", "A7", "Dmaj7", "Bb7", "Ebmaj7", "Ebmaj7", "Dm7", "Gm7", "Cm7", "Cm7", "F7sus", "Bbmaj7"],
  },
  {
      title: 'Nevertheless',
      composer: 'Kalmar-Ruby',
      chords: ["Bb6", "Dbdim7", "Cm6", "F7", "Dm7b5", "G7b13", "Cm7", "G7", "C7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bb6", "Dbdim7", "Cm6", "F7", "Dm7b5", "G7b13", "Cm7", "G7", "C7", "F7", "Bbmaj7", "Bbmaj7", "Gm", "F#m", "", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Gm7", "C7", "Gm7", "C7", "Cm7", "F7", "Bb6", "Dbdim7", "Cm6", "F7", "Dm7b5", "G7b13", "Cm7", "G7", "C7", "F7", "Bbmaj7", "Cm7", "F7"],
  },
  {
      title: 'New Picture',
      composer: 'Jimmy Heath',
      chords: ["Bbmaj7", "Bbmaj7", "Ebm", "Ebm", "Bbmaj7", "Bbmaj7", "Ebm", "Ebm", "Bbmaj7", "G7#9", "Gb7", "F7", "Ebdim7", "Dm7", "G7", "Cm7", "F7", "Dm7b5", "G7#9", "Cm7", "F7", "Em7b5", "Em7b5", "A7#9", "A7#9", "Dmaj7", "B7#9", "Em7", "Fm7", "Ebmaj7#11", "Ebmaj7#11", "D7#9", "D7#9", "Gmaj7", "Abmaj7", "Dbmaj7", "Fmaj7", "Gbmaj7", "Bmaj7", "Ebmaj7", "Emaj7", "Amaj7", "Dbmaj7", "Cm7b5", "F7", "Bbmaj7", "Bbmaj7", "Ebm", "Ebm", "Bbmaj7", "Bbmaj7", "Ebm", "Ebm"],
  },
  {
      title: 'New York, New York',
      composer: 'John Kander',
      chords: ["F", "F", "Gm7", "C7", "F", "F", "Gm7", "C7", "Bb", "Bbm", "F", "F", "Am7", "D7", "Gm7", "C7", "F", "F", "Gm7", "C7", "F", "F", "Cm7", "F7", "Bb", "Bbm", "F", "D7", "Gm7", "Am7", "Bb", "C7", "F", "F", "Gm7", "C7"],
  },
  {
      title: 'Nica\'s Dream',
      composer: 'Horace Silver',
      chords: ["Bbm", "Bbm", "Abm", "Abm", "Bbm", "Bbm", "Abm7", "Db7", "Abm7", "Db7", "Gbmaj7", "C7#5#9", "F7#5", "F7#5", "Bbm", "Bbm", "Ab7sus", "Ab7sus", "Fm7b5", "Bb7#5", "Eb7", "Ab7", "Dbmaj7", "Em7", "A7", "Ab7sus", "Ab7sus", "Fm7b5", "Bb7#5", "Eb7", "Ab7", "Dbmaj7", "Cm7b5", "F7b9", "Bbm", "Abm", "Gb7", "C7#5#9", "F7#5", "F7#5", "Bbm", "", ""],
  },
  {
      title: 'Nice \'n Easy',
      composer: 'Spence-Bergman-Keith',
      chords: ["C", "Caug", "C6", "C7", "Dm7", "A7b13", "", "Dm7", "G7", "Am7", "Am", "Am", "Fmaj7", "Em7", "Em7b5", "A7#9", "Ab7#11", "Dm7", "G7", "C", "Caug", "C6", "C7", "Fmaj7", "E7b9", "Am7", "D7", "D#dim7", "Em7", "Am7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Nice Work If You Can Get It',
      composer: 'George Gershwin',
      chords: ["B7#5", "E7", "A7#5", "D7", "G7", "C7", "A7", "A#dim7", "Bm7", "Em7", "Am7", "D7", "Am7", "D7sus", "G6", "C7", "Em7", "C7", "Em7", "A7b13", "Dm", "Em7b5", "A7b9", "Am7", "D7#5", "B7#5", "E7", "A7#5", "D7", "G7", "C7", "A7", "A#dim7", "Bm7", "Em7", "Am7", "D7", "B7#5", "E7", "Am7", "D7sus", "G6", "C7"],
  },
  {
      title: 'Nicolette',
      composer: 'Kenny Wheeler',
      chords: ["Em9", "Bb7#5#9", "Ebm9", "Bbmaj7#11", "Gmaj7#11", "Gdim7", "A#dim7", "Bm11", "E7#9#11", "Em11", "Em11", "C#m7b5", "Gdim7", "G#m7b5", "C#7#5#9", "F#m11", "Amaj7#11", "C#maj7#11", "F#maj7#11", "Bmaj7#11", "Dmaj7#11", "Em9", "Bb7#5#9", "Ebm9", "Bbmaj7#11", "Gmaj7#11", "Gdim7", "A#dim7", "Bm11", "E7b9#11", "E13#11", "Em11", "Bbmaj7#11", "Bbmaj7#11", "Ebmaj7#11", "D9sus", "Bm7"],
  },
  {
      title: 'Night And Day',
      composer: 'Cole Porter',
      chords: ["Abmaj7", "G7", "Cmaj7", "Cmaj7", "Abmaj7", "G7", "Cmaj7", "Cmaj7", "F#m7b5", "Fm7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Ebmaj7", "Ebmaj7", "Cmaj7", "Cmaj7", "Ebmaj7", "Ebmaj7", "Cmaj7", "Cmaj7", "F#m7b5", "Fm7", "Em7", "Ebdim7", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'Night Dreamer',
      composer: 'Wayne Shorter',
      chords: ["Gmaj7", "Bb7", "Ebmaj7", "D7#5#9", "Gmaj7", "Bb7", "Ebmaj7", "D7#5#9", "Gmaj7", "Bb7", "Ebmaj7", "D7#5#9", "Ebm7", "Ab9", "E13sus", "E13sus", "F13sus", "F13sus", "Gmaj7", "Bb7", "Ebmaj7", "D7#5#9", "Gmaj7", "Bb7", "Ebmaj7", "D7#5#9"],
  },
  {
      title: 'Night Has A Thousand Eyes, The',
      composer: 'Jerry-Brainin',
      chords: ["Gmaj7", "Gmaj7", "D7sus", "D7sus", "Gmaj7", "Gmaj7", "D7sus", "D7", "Dm7", "G7", "Cmaj7", "F7", "Gmaj7", "D7sus", "G", "D7sus", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Am7", "D7sus", "Gmaj7", "Em7", "Gmaj7", "D7sus", "Gmaj7", "D7sus"],
  },
  {
      title: 'Night We Called It A Day, The',
      composer: 'Matt Dennis',
      chords: ["Am7b5", "D7b9", "Gmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "C#7", "C7", "Bm7", "Bb7", "Am7", "Ab7#11", "Gmaj7", "Dm7", "G7", "Cmaj7", "B7#9", "Em7", "F#m7b5", "B7b13", "Em7", "Em7b5", "A7b9", "Am7", "D7", "Am7b5", "D7b9", "Gmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "Em7", "C#m7b5", "Cm7", "Bm7", "Bb7", "Am7", "Ab7", "Gmaj7"],
  },
  {
      title: 'No Moe',
      composer: 'Sonny Rollins',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'No Moon At All',
      composer: 'David Mann',
      chords: ["Dm6", "A7b9", "D7", "G6", "Em7b5", "Dm", "", "Bb7", "A7", "Dm6", "Bb7", "A7b9", "D7", "D7", "G7", "G7", "C7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm6", "A7b9", "D7", "G6", "Em7b5", "Dm", "", "Bb7", "A7", "Dm6", "Bb7", "A7b9"],
  },
  {
      title: 'No Splice',
      composer: 'Lee Konitz',
      chords: ["Gm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7b9", "Eb7", "D7b9", "Gm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Edim7", "Bbmaj7", "F#dim7", "Gm7", "Eb7", "D7b9", "Gm7", "Am7b5", "D7b9"],
  },
  {
      title: 'Nobody Else But Me',
      composer: 'Jerome Kern',
      chords: ["Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "C#m7", "F#7", "Bmaj7", "F#m7", "B7", "Emaj7", "Fdim7", "Bmaj7", "Eb7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "E7", "Am7", "Ab7", "Gm7", "C7", "", "Fmaj7", "Fm7", "Bb7", "Cmaj7", "A7", "D7", "Db7", "Cmaj7", "C#dim7", "Dm7", "D#dim7", "Dm7", "Ab7", "G7", "C6", "", "C6", ""],
  },
  {
      title: 'Nobody Knows You When You\'re Down And Out',
      composer: 'Jimmy Cox',
      chords: ["F", "A7", "D7", "Gm7", "D7b9", "Gm7", "D7", "Gm7", "Gm7", "Bb7", "Bdim7", "F7", "Eb7", "D7", "D7", "G7", "Db7#5", "C7", "F", "A7", "D7", "Gm7", "D7b9", "Gm7", "D7", "Gm7", "Gm7", "Bb7", "Bdim7", "F7", "Eb7", "D7", "D7", "G7", "Db7", "C7", "F6", "C7"],
  },
  {
      title: 'Nostalgia In Times Square',
      composer: 'Charles Mingus',
      chords: ["F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "Abm7", "Db7", "Abm7", "Db7", "F7", "Eb7", "F7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Bbm7", "Eb7", "F7"],
  },
  {
      title: 'Nothing Personal',
      composer: 'Don Grolnick',
      chords: ["Gm", "Gm", "Gm", "Gm", "Gm", "Gm", "Gm", "Gm", "Gm", "Gm", "Gm", "Gm", "C7", "C7", "C7", "C7", "Gm", "Gm", "Gm", "F7", "E7", "Eb7", "Eb7", "D7", "D7", "Gm", "Gm", "Gm", "Gm"],
  },
  {
      title: 'Now\'s The Time',
      composer: 'Charlie Parker',
      chords: ["F7", "Bb7", "F7", "Cm7", "F7", "Bb7", "Bdim7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Nuages',
      composer: 'Django Reinhardt',
      chords: ["Bbm6", "D7", "G6", "G6", "Bbm6", "D7", "G6", "D7", "G6", "B7", "B7", "Em6", "Em6", "A7", "Ab7", "A7", "D7", "D7", "Bbm6", "D7", "G6", "G6", "Ab7", "G7", "C", "C", "Cm6", "Cm6", "G6", "G6", "Bbm6", "D7", "G6", "D7", "G6"],
  },
  {
      title: 'Nutty',
      composer: 'Thelonious Monk',
      chords: ["Bbmaj7", "Bdim7", "Cm7", "C#dim7", "Bbmaj7", "", "Cm7", "F7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "", "Fm7", "Bb7", "Bb7b9", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Cm7", "B7b5", "Bbmaj7", "Bdim7", "Cm7", "C#dim7", "Bbmaj7", "", "Cm7", "F7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "", "F7", "Bb", "Bbmaj7"],
  },
  {
      title: 'Nutville',
      composer: 'Horace Silver',
      chords: ["Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Fm7", "Fm7", "Fm7", "Db7", "Cm7", "Cm7", "Cm7", "Cm7", "Ab7", "G7", "Gb7", "F7", "Ab7", "G7b13", "Cm7", "Cm7", "Cm7", "Bbm", "Abm7", "G7#9", "Cm7"],
  },
  {
      title: 'O Grande Amor',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Am", "Abdim7", "Gm7", "C7", "Bm7b5", "E7b9", "Am", "A7b9", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bbmaj7", "Bbmaj7", "Bm7b5", "E7b9", "Am", "Abdim7", "Gm7", "C7", "Bm7b5", "E7b9", "Em7b5", "A7b9", "Dm7", "Ebdim7", "C", "Fmaj7", "Bbmaj7", "Bm7b5", "E7b9", "Am", "E7b9"],
  },
  {
      title: 'Odd Couple, The',
      composer: 'Neal Hefti',
      chords: ["Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F7", "B7#11", "Bbmaj7", "Em7", "A7b13", "Dm7", "G7", "Bbmaj7", "A7b13", "Dm7", "G7", "Em7b5", "A7b13"],
  },
  {
      title: 'Off Minor',
      composer: 'Thelonious Monk',
      chords: ["Gm6", "Db7", "Gb7", "Bm7", "Bb7", "Ebmaj7", "D7", "Gm6", "Bb13#11", "D13#11", "D13#11", "Dbmaj7", "D7", "Bbm7", "Eb7#11", "Bm7", "E7b9", "Em7", "A7sus", "A7", "D13#11", "D13#11", "Gm6", "Db7", "Gb7", "Bm7", "Bb7", "Ebmaj7", "D7", "Gm6", "Bb13#11", "D13#11", "D13#11"],
  },
  {
      title: 'Oh, Lady Be Good',
      composer: 'George Gershwin',
      chords: ["Gmaj7", "C7", "Gmaj7", "C7", "Bm7", "E7", "Am7", "D7", "G6", "Em7", "Am7", "D7", "Cmaj7", "C#dim7", "Gmaj7", "F#m7b5", "B7b9", "Em7", "A7", "Am7", "D7", "Gmaj7", "C7", "Gmaj7", "C7", "Bm7", "E7", "Am7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'Oh, What A Beautiful Mornin\'',
      composer: 'Richard Rodgers',
      chords: ["Eb6", "Bb7", "Eb6", "Bb7", "Eb6", "Bb7", "Cm7", "B7", "Ebmaj7", "Bb7", "Eb6", "Ab6", "Eb6", "Cm7", "C#dim7", "Bb7", "Eb6", "Eb6", "Gm7b5", "C7b9", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Eb6", "Abmaj7#11", "Adim7", "Eb6", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'Oh! Look At Me Now',
      composer: 'DeVries-Bushkin',
      chords: ["Eb7", "Bb7", "Eb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "Db7", "C7", "F7", "F7", "B7", "Bb7", "Eb7", "D7", "Db7", "C7", "B7", "Bb7", "", "Gm7", "Eb7", "D7", "Gm7", "D7", "Gm7", "C7", "Fm7", "Db7", "C7", "Fm7", "Bb7", "Eb7", "Bb7", "Eb7", "Abmaj7", "Abm7", "Db7", "Ebmaj7", "Db7", "C7", "F7", "F7", "Bb7", "Ebmaj7", "Ebmaj7"],
  },
  {
      title: 'Ol\' Man River',
      composer: 'Jerome Kern',
      chords: ["Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "Fm7", "Eb", "Ab", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Gm7", "Fm7", "Eb6", "F7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Old Cape Cod',
      composer: 'Rothrock-Vakus-Jeffrey',
      chords: ["Eb6", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "C7", "F7", "Fm7", "Bb7", "Abmaj7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Adim7", "Eb", "Db6", "C7", "", "Fm7", "F7", "Bb7", "Bb7#5", "Eb6", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "C7", "F7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Old Country, The',
      composer: 'Adderley-Lewis',
      chords: ["Dm7b5", "Dm7b5", "G7#9", "G7#9", "Cm7", "F9", "Bb13", "Eb7#9", "Ab13", "Db7#9", "Cm7", "G7b13", "Cm7", "Fm7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "Abmaj7", "D7", "Dm7b5", "G7b9", "Cm7"],
  },
  {
      title: 'Old Devil Moon',
      composer: 'Burton Lane',
      chords: ["F6", "Eb6", "F6", "Eb6", "F6", "Eb6", "F7sus", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Abm7", "Db7", "Gbmaj7", "C7", "F6", "Eb6", "F6", "Eb6", "Dmaj7", "Dmaj7", "Dm7", "G7", "Gm7", "C7"],
  },
  {
      title: 'Old Folks',
      composer: 'Willard Robison',
      chords: ["Em7b5", "A7b13", "Dm7", "Db7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7b5", "D7b9", "Gm7", "C7", "Am7b5", "D7b9", "G7", "Gm7", "C7", "Fm7", "Bb7", "Fmaj7", "C7#5", "Cm7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "", "Em7b5", "A7", "Dm7", "G7", "Gm7", "C7", "Fm7", "Bb7", "Em7b5", "A7b13", "Dm7", "Db7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am7b5", "D7b9", "Gm7", "C7", "Am7b5", "D7b9", "G7", "C7", "F6"],
  },
  {
      title: 'Oleo',
      composer: 'Sonny Rollins',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Oliloqui Valley',
      composer: 'Herbie Hancock',
      chords: ["F7sus", "F7sus", "F7sus", "F7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Em", "", "Em", "", "Em", "", "Em", ""],
  },
  {
      title: 'On A Clear Day',
      composer: 'Burton Lane',
      chords: ["Gmaj7", "Gmaj7", "C7#11", "C7#11", "Gmaj7", "Gmaj7", "Bm7", "E7b9", "Am7", "Am7", "F7#11", "F7#11", "Bm7", "Bbdim7", "Am7", "D7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "A7", "Am7", "D7", "Gmaj7", "Gmaj7", "Bm7", "E7b9", "Am7", "Bm7", "Cmaj7", "Bm7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'On A Misty Night',
      composer: 'Tadd Dameron',
      chords: ["Ebmaj7", "Dbmaj7", "Bmaj7", "Bbm7", "Abmaj7", "Gb7", "Fm7", "E7", "Ebmaj7", "Gm7", "Cm7", "", "Gm7", "Gbm7", "Fm7", "Bb7", "Abm7", "Db7#11", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Bm7", "E7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "C#m7", "F#7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "Cm7", "", "Gm7", "Gbm7", "Fm7", "Bb7", "Abm7", "Db7#11", "Bb7", "Eb6", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'On A Slow Boat To China',
      composer: 'Frank Loesser',
      chords: ["Bbmaj7", "G7", "Cm7", "A7", "Bbmaj7", "D7b9", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "A7", "Bbmaj7", "G7", "C7", "C7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "A7", "Bbmaj7", "D7b9", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "Ab7#11", "Bbmaj7", "G7b13", "C7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'On Broadway',
      composer: 'Mann-Weil-Stoller-Leiber',
      chords: ["F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "Bb7", "Ab7", "Bb7", "Ab7", "Bb7", "Ab7", "Bb7", "C7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7"],
  },
  {
      title: 'On Green Dolphin Street',
      composer: 'Bronislau Kaper',
      chords: ["Ebmaj7", "Ebmaj7", "Ebm7", "Ebm7", "F7", "Emaj7", "Ebmaj7", "C7", "Fm7", "Bb7alt", "Ebmaj7", "Ebmaj7", "Abm7", "Db7alt", "Gbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm7", "Ebm7", "F7", "Emaj7", "Ebmaj7", "C7", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'On The Street Where You Live',
      composer: 'Frederick Loewe',
      chords: ["Bbmaj7", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Cm7", "Ab7#11", "Bb6", "Gm6", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Am7", "D7", "Ebmaj7", "Ebmaj7", "Ebm6", "Ab7", "Bb6", "Bb6", "Gb7", "Bb", "Em7b5", "A7sus", "A7", "D", "A7", "C7", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Dbdim7", "Cm7", "F7", "Cm7", "Ab7#11", "Bb6", "Gm6", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'On The Sunny Side Of The Street',
      composer: 'Jimmy McHugh',
      chords: ["C6", "E7", "Fmaj7", "C6", "E7b9", "Am7", "D7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Am7", "D7", "Dm7", "G7", "C6", "E7", "Fmaj7", "C6", "E7b9", "Am7", "D7", "Dm7", "G7", "C6", "G7"],
  },
  {
      title: 'On The Trail',
      composer: 'Ferde Grofe',
      chords: ["Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Am7", "D7", "Gm7", "C7", "Abm7", "Db7", "Abm7", "Db7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Once I Loved',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Gm7", "C7#5", "Fmaj7", "F#dim7", "Gm7", "G#dim7", "Am7", "Am7", "Fm7", "Bb7#5", "Ebmaj7", "Ebmaj7", "Em7b5", "A7b9", "Dmaj7", "D7b9"],
  },
  {
      title: 'Once In A While',
      composer: 'Michael Edwards',
      chords: ["Ebmaj7", "Ab7", "Ebmaj7", "Gm7", "D7b13", "Gm7", "C7", "Fm7", "C7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Ebmaj7", "Gm7", "D7b13", "Gm7", "C7", "Fm7", "C7", "Fm7", "Bb7", "Eb6", "Abm6", "Eb6", "", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "Bbdim7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "G6", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Ebmaj7", "Gm7", "D7b13", "Gm7", "C7", "Fm7", "C7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Once Upon A Summertime (La Valse Des Lilas)',
      composer: 'Legrand-Barclay-Marnay-Mercer',
      chords: ["Fm7", "Abmaj7", "Gm7b5", "C7b9", "Fm7", "Dm7b5", "G7b13", "C7b9", "Cm7", "F7", "Bb6", "Eb7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Cm7", "F7", "Bb6", "Eb7", "Fmaj7", "Dm7", "G7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7b9"],
  },
  {
      title: 'One By One',
      composer: 'Wayne Shorter',
      chords: ["Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Am7b5", "D7b13", "Gm7", "", "", "", "Cm7", "F7", "Bbmaj7", "A7#9", "Ab7", "Gm7", "Bb7", "Em7b5", "D7b13", "Gm7", "E7#9", "A7#9", "Dm7", "Bm7b5", "Em7b5", "A7b9", "Dm7", "Bb7", "A7#9", "Ab7", "Gm7", "Bb7", "Em7b5", "D7b13", "Gm7", "Am7b5", "D7b13", "Gm7", "", "", "", "Cm7", "F7", "Bbmaj7", "A7#9", "Ab7", "Gm7", "Bb7", "Em7b5", "D7b13", "Gm7"],
  },
  {
      title: 'One Finger Snap',
      composer: 'Herbie Hancock',
      chords: ["C7sus", "C7sus", "C7sus", "C7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Eb7sus", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "Gm7b5", "C7alt", "Fm7b5", "Bb7alt", "Ebmaj7", "Ebmaj7", "Dm7b5", "G7alt"],
  },
  {
      title: 'One Foot In The Gutter',
      composer: 'Clark Terry',
      chords: ["F7", "F7", "Bb7", "Bdim", "F", "Am7b5", "D7b13", "G7", "C7", "C7", "C7", "F", "Gm7", "F7", "Bb6", "Bdim7", "E7", "Am7", "D7", "Gm7", "C7", "F7", "F7", "Bb7", "Bdim7", "F", "D7", "Gm7", "C7", "F", "Bb", "F", "C7"],
  },
  {
      title: 'One For My Baby',
      composer: 'Harold Arlen',
      chords: ["Ebmaj7", "Fm7", "Ebmaj7", "Fm7", "Ebmaj7", "Fm7", "Ebmaj7", "Fm7", "Ebmaj7", "Fm7", "Ebmaj7", "Fm7", "Ebmaj7", "Bbm7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Db7", "Ebmaj7", "Fm7", "Gm7", "C7#9", "G7#5", "C7#9", "Fm7", "Gm7", "Ab", "Ab", "Eb6", "Am7b5", "D7b9", "Gmaj7", "Am7", "Gmaj7", "Am7", "Gmaj7", "Am7", "Gmaj7", "Am7", "Gmaj7", "Am7", "Gmaj7", "Am7", "Gmaj7", "Dm7", "Dm7", "G7", "Cmaj7", "Cmaj7", "F7", "Gmaj7", "Am7", "Bm7", "E7#9", "B7#5", "E7#9", "Am7", "Bm7", "C", "C", "G6", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "B7", "E7", "A7", "C", "G6", "G7", "Gm7", "C7", "Gm7", "C7", "A7", "Eb7", "D7#5", "B7", "E7b9", "Am7", "D7", "G6", "G7", "C7", "C#dim7", "Am7", "D7", "G6"],
  },
  {
      title: 'One I Love (Belongs To Somebody Else), The',
      composer: 'Isham Jones',
      chords: ["G6", "G6", "Em7", "A7", "A7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Gmaj7", "Gmaj7", "Bm7", "Bbdim7", "Am7", "D7", "Em7", "A7", "Em7", "A7", "Am7", "D7", "G6", "G6", "Em7", "A7", "A7", "Am7", "D7", "Am7", "D7", "Bm7", "E7b13", "Am7", "F7", "Bm7", "E7b13", "Am7", "D7", "G6", "G6"],
  },
  {
      title: 'One Morning In May',
      composer: 'Hoagy Carmichael',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Bm7", "E7b9", "Am7", "D7", "Gmaj7", "Dm7", "G7", "Cmaj7", "Cm", "Bm7", "E7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Gmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Cm7", "F7", "Bbmaj7", "Em7", "A7", "F#m7", "B7", "Em7", "A7", "Am7", "D7"],
  },
  {
      title: 'One Note Samba',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Dm7", "Db7", "Cm7", "B7#11", "Dm7", "Db7", "Cm7", "B7#11", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Dm7", "Db7", "Cm7", "B7#11", "Bb6", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "C#m7", "F#7", "Bmaj7", "Cm7b5", "F7", "Dm7", "Db7", "Cm7", "B7#11", "Dm7", "Db7", "Cm7", "B7#11", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Db6", "C7", "Bmaj7", "Bb6"],
  },
  {
      title: 'Only Trust Your Heart',
      composer: 'Benny Carter',
      chords: ["Fmaj7#11", "B7#9", "Em7", "Am7", "Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Am7", "Dm7", "Dm7", "Bm7b5", "E7b13", "Am7", "Gm7", "C7", "Fmaj7#11", "B7#9", "Em7", "Am7", "Dm7", "G7", "Bb7#11", "A7", "Dm7", "Fm7", "Bb7", "Cmaj7", "Em7", "A7b9", "Ab7#11", "Fmaj7", "G7b9", "C6", "Gm7", "C7"],
  },
  {
      title: 'Onmo',
      composer: 'Kenny Wheeler',
      chords: ["Dbmaj7", "Dbmaj7", "Abmaj7#11", "Abmaj7#11", "Cm", "Cm", "A7alt", "Abmaj7#11", "F", "F#7alt", "Bm", "D", "Gmaj7#11", "Em", "Cmaj7#11", "Ab7alt"],
  },
  {
      title: 'Opener, The',
      composer: 'Bill Evans',
      chords: ["Cmaj7", "C7", "Bm7b5", "E7alt", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7alt", "Am7", "D7", "Gm9", "C7alt", "Fmaj7", "Bb9", "C6", "E7alt", "Am7", "E7alt", "Am7", "D9", "Dm7", "G7", "Abm7b5", "Db9", "Em7", "A13", "Dm7", "G9", "Em7", "Ebdim7", "Dm7", "G9", "Cmaj7", "Cmaj7"],
  },
  {
      title: 'Opus De Funk',
      composer: 'Horace Silver',
      chords: ["Bb", "Bb", "Bb", "Bb7", "Eb7", "Edim7", "Bb", "Dm7", "G7", "Cm7", "C7", "F7", "Bb7", "Bb7"],
  },
  {
      title: 'Orange Colored Sky',
      composer: 'DeLugg-Stein',
      chords: ["Bb6", "Bdim7", "Cm7", "C#dim7", "Bb", "Ab7#11", "G9", "Cm7", "C#dim7", "Bb", "G7b13", "Cm7", "F7", "Dm", "G7", "Cm", "F7", "Ebmaj7", "Bb7#5#9", "Am7b5", "D7b9", "Gm", "Gm", "Gmb6", "Gm6", "Gm7", "F7", "Cm7", "F7", "Bb6", "Bdim7", "Cm7", "C#dim7", "Bb", "Ab7#11", "G9", "Cm7", "C#dim7", "Bb", "G7b13", "Cm7", "F7", "Bbmaj7"],
  },
  {
      title: 'Ornithology',
      composer: 'Charlie Parker',
      chords: ["Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Eb7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Bm7", "Em7", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Eb7", "Am7b5", "D7b9", "Gmaj7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'Our Delight',
      composer: 'Tad Dameron',
      chords: ["Bb7", "A7", "Abmaj7", "F7", "Bb7", "Bbm7", "Eb7", "Ab6", "F7", "Ebm7", "Am7", "D7", "Dbmaj7", "Dbmaj7", "Dbm7", "Gb7", "Cm7", "F7", "Bm7", "E7", "Bbm7", "Eb7", "Bb7", "A7", "Abmaj7", "F7", "Bb7", "Bbm7", "Eb7", "Ab6", "Cm7", "F7"],
  },
  {
      title: 'Our Love is Here to Stay',
      composer: 'George Gershwin',
      chords: ["G7", "Gm7", "C7", "F6", "Bb7", "Am7", "D7", "G7", "Gm7", "C7", "Eb7", "D7", "Bm7", "E7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "Em7b5", "A7", "Dm7", "G7", "Gm7", "C7", "D7", "G7", "Gm7", "C7", "F6", "Bb7", "Am7", "D7", "G7", "Gm7", "C7", "Eb7", "D7", "Bm7", "E7", "Am7", "D7", "Gm7", "C7", "Eb7", "D7", "Gm7", "G#dim7", "Am7", "D7", "Gm7", "C7", "F6", "D7"],
  },
  {
      title: 'Out Of Nowhere',
      composer: 'Johnny Green',
      chords: ["Gmaj7", "Gmaj7", "Bbm7", "Eb7", "Gmaj7", "Gmaj7", "Bm7", "E7b9", "Am7", "E7b9", "Am7", "Am7", "Eb7", "Eb7", "Am7", "D7", "Gmaj7", "Gmaj7", "Bbm7", "Eb7", "Gmaj7", "Gmaj7", "Bm7", "E7b9", "Am7", "E7b9", "Am7", "Cm6", "Bm7", "Bbdim7", "Am7", "D7", "G6", "Am7", "D7"],
  },
  {
      title: 'Out Of This World',
      composer: 'Harold Arlen',
      chords: ["Bbm", "Ebm7", "Eb7", "Ebm7", "Bbm", "Ebm7", "Eb7sus", "Eb7", "Ebm7", "Ebm6", "Abm7", "Ab7", "Eb6", "Edim7", "Fm7", "Bb7#5", "Cm6", "Cm6", "Cm6", "Cm6", "Cm6", "Cdim7", "Ab7#11", "G7", "Cm", "Cmb6", "Cm6", "Ab7", "Cm6", "Ab7", "G7", "G7", "C7", "F7", "Bb7"],
  },
  {
      title: 'Over The Rainbow (Somewhere)',
      composer: 'Harold Arlen',
      chords: ["Eb6", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Eb6", "Edim7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Dm7", "G7", "Cm7", "Cm7", "F7sus", "F7", "Fm7", "Bb7sus", "Fm7", "Bb7sus", "Fm7", "Bb7", "Eb6", "Cm7", "Gm7", "Ebmaj7", "Abmaj7", "Adim7", "Gm7", "C7", "Fm7", "Db7", "Gm7", "C7b9", "F7", "Bb7", "Eb6", "Bb7", "Eb6", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Am7b5", "D7b9", "Gm7", "Gbdim7", "Fm7", "Bb7", "Eb6", "Cm7", "Gm7", "Ebmaj7", "Abmaj7", "Adim7", "Gm7", "C7", "Fm7", "Db7", "Gm7", "C7b9", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'P.S. I Love You',
      composer: 'Gordon Jenkins',
      chords: ["Eb6", "Gm7", "C7", "Fm7", "Bb7", "Gm7b5", "C7b9", "F7", "Fm7", "Bb7", "Eb6", "F7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Cm7", "F7", "Bb7", "C7#5", "F7", "Bb7", "Eb6", "Gm7", "C7", "Fm7", "Bb7", "Gm7b5", "C7b9", "F7", "Fm7", "Bb7", "Eb6", "Db7", "Eb6"],
  },
  {
      title: 'Palo Alto',
      composer: 'Lee Konitz',
      chords: ["Fmaj7", "Fmaj7", "D7b9", "D7b9", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7#11", "Bbmaj7#11", "G7b9", "G7b9", "Cm7", "F7", "Bb6", "C7#9", "Fmaj7", "Fmaj7", "Em7b5", "A7b9", "G7#11", "G7#11", "Gm7", "C7", "Fmaj7", "Fmaj7", "D7#11", "D7#11", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Pannonica',
      composer: 'Thelonious Monk',
      chords: ["Cmaj7", "Ebm7", "Ab7", "Dm7", "Bb7", "Ebmaj7", "A7#11", "Ab7", "Db7", "Gbmaj7", "F7#5", "Ebm7", "", "Ab7", "G7", "Dbmaj7", "Gm7", "C7", "Cm7", "F7", "Gb7", "Bmaj7", "Dm7", "G7b13", "Cmaj7", "", "Gm7", "C7", "Bm7", "E7", "A7", "", "D7", "G7", "Cmaj7", "Ebm7", "Ab7", "Dm7", "Bb7", "Ebmaj7", "A7#11", "Ab7", "Db7", "Gbmaj7", "F7#5", "Ebm7", "", "Ab7", "G7", "D7", "", "Dm7", "G7", "Dbmaj7"],
  },
  {
      title: 'Paper Doll',
      composer: 'Johnny Black',
      chords: ["Fmaj7", "D7", "G7", "C7", "F6", "F", "Fm", "C", "A7", "G7", "C7", "Gm7", "C7", "F6", "Gm7", "C7", "A7", "Bb", "Bdim7", "F", "A7", "D7", "D7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Parisian Thoroughfare',
      composer: 'Bud Powell',
      chords: ["Fmaj7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Amaj7", "Bm7", "E7", "Amaj7", "Am7", "D7", "Gmaj7", "Dm7", "G7", "Gm7", "C7b5", "Fmaj7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Gm7", "C7"],
  },
  {
      title: 'Parker\'s Mood',
      composer: 'Charlie Parker',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Cm7", "F7", "Bb7", "F7"],
  },
  {
      title: 'Party\'s Over, The',
      composer: 'Styne-Comden-Green',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7", "C7", "Fm7", "Abm6", "Db7", "Ebmaj7", "Ebmaj7", "Dm7", "G7", "C7", "F7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Gm7b5", "C7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Passion Dance',
      composer: 'McCoy Tyner',
      chords: ["F7sus", "F7sus", "F7sus", "F7sus", "F7sus", "F7sus", "F7sus", "F7sus", "Bb7b13sus", "Bb7b13sus", "Bb7b13sus", "Bb7b13sus", "Bb7b13sus", "Bb7b13sus", "Bb7b13sus", "Bb7b13sus", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Db", "C7#9", "C7#9"],
  },
  {
      title: 'Passion Flower',
      composer: 'Billy Strayhorn',
      chords: ["F#9b5", "F9b5", "F#9b5", "F9b5", "E7b13", "Eb13", "D9", "D7b9", "G69", "G69", "Dbmaj7", "C9#11", "B9#11", "Bb7b9#5", "A9#5", "Ab7b9", "Dbmaj7", "Bb7", "Eb7", "Ab7", "Db7", "F#9b5", "F9b5", "F#9b5", "F9b5", "E7b13", "Eb13", "D9", "D7b9", "G69", "G69"],
  },
  {
      title: 'Passport',
      composer: 'Charlie Parker',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Peace',
      composer: 'Horace Silver',
      chords: ["Am7b5", "D7b9", "Gm7", "C7", "Bmaj7", "", "Cm7b5", "F7", "Bbmaj7", "Bm7", "E7", "Amaj7", "F#m7", "Ebm7b5", "Ab7", "Dbmaj7", "C7alt", "B7#11", "Bbmaj7"],
  },
  {
      title: 'Peacocks, The',
      composer: 'Jimmy Rowles',
      chords: ["Bbm", "Bbm", "Bbm7", "Bbm6", "Bbm", "F#m7", "Fm7", "Bb13", "Ebm7", "Ebm7", "C7#9", "F7#9", "Bbm", "F7b9", "Cm7b5", "F7", "Bbm", "Cm7b5", "F7", "Bbm", "Bbm", "Ebm7b5", "Ab7", "Dbm", "Eb7#11", "Cm7b5", "F7b9", "Bbm", "Bbm", "Bbm7", "Bbm6", "Bbm", "F#m7", "Fm7", "Bb13", "Ebm7", "Ebm7", "C7#9", "F7#9", "Bbm", "F7b9"],
  },
  {
      title: 'Pee Wee',
      composer: 'Tony Williams',
      chords: ["Dbmaj7", "Eb", "F", "Dm7", "Amaj7", "Bbmaj7", "Bmaj7", "Bmaj7", "G7sus", "G7alt", "F7sus", "Dbmaj7#11", "Gbmaj7", "G7sus", "G7alt", "Ebmaj7", "Dbmaj7", "Gbmaj7#11", "", "Db7sus", "F", "F", "F"],
  },
  {
      title: 'Peel Me A Grape',
      composer: 'Dave Frishberg',
      chords: ["Dm7", "Eb7", "Dm7", "Eb7", "Dm7", "C7", "Bb7", "A7b9", "Dm7", "Eb7", "Dm7", "", "Cm7", "F7", "Bb7", "Bdim7", "F7#9", "F7#9", "Bb7", "Bdim7", "F7#9", "F7#9", "Bb7", "Bdim7", "F7#9", "F7#9", "E7", "A7b9", "Dm7", "C7", "Bb7", "A7b9", "D7b9", "D7b9", "Gm", "D7b9", "Gm7", "C7", "B7", "E7b9", "B7", "E7b9", "Bb7", "A7b9"],
  },
  {
      title: 'Peggy\'s Blue Skylight',
      composer: 'Charles Mingus',
      chords: ["Gm7b5", "C7b13", "Fm", "Fm", "Bbm7", "Eb7b13", "Abmaj7", "D7#5", "Db7sus", "C7#9", "B13", "Bb7", "Ebm7", "Ab13", "Dbmaj7", "Dbmaj7", "Abm7", "Db7", "Gm7", "C7", "Fmaj7", "Fm7b5", "Bb7b9", "Ebmaj7", "Abmaj7", "D7", "Db7sus", "C7#9", "B13", "Bb7", "Ebm7", "Ab13", "Dbmaj7", "Dbmaj7"],
  },
  {
      title: 'Pennies From Heaven',
      composer: 'Arthur Johnston',
      chords: ["C6", "Fmaj7", "Em7", "Ebdim7", "Dm7", "G7", "C6", "Fmaj7", "Em7", "Ebdim7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "D7", "D7", "G7", "G7", "C6", "Fmaj7", "Em7", "Ebdim7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Dm7", "Bb7#11", "Em7", "A7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Pensativa',
      composer: 'Clare Fischer',
      chords: ["Gbmaj7", "G7#11", "Gbmaj7", "G7#11", "Gbmaj7", "Eb7#9", "Dmaj7", "Ab7", "Gmaj7#11", "F#m7", "B7", "Em7", "A7", "Dmaj7", "Abm7", "G7", "Gbmaj7", "F7", "", "Cmaj7", "Am7", "Fmaj7", "E7#9", "Dm7", "G7", "Cmaj7", "Bm7", "Bb7", "Amaj7", "Amaj7", "F#m7", "Bm7", "E7b9", "Amaj7", "Amaj7", "Dm7", "G7"],
  },
  {
      title: 'Pent Up House',
      composer: 'Sonny Rollins',
      chords: ["Am7", "D7", "Gmaj7", "Gmaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Dm7", "G7", "Cm7", "F7", "Am7", "D7", "Gmaj7", "Gmaj7"],
  },
  {
      title: 'Penthouse Serenade',
      composer: 'Jason-Burton',
      chords: ["Fmaj7", "Abdim7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "Abdim7", "Gm7", "C7", "Gm7", "F#dim7", "Gm7", "C7", "Fmaj7", "A7", "Dm7", "G7", "Dm7", "G7", "C7", "Gm7", "C7", "Fmaj7", "Abdim7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "F6", "Eb7", "F6"],
  },
  {
      title: 'People',
      composer: 'Jule Styne',
      chords: ["Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7b9", "Eb", "Bbmaj7", "Am7", "D7", "Gm", "Gm", "C7#11", "C7#11", "Gm7b5", "C7", "Fmaj7", "F6", "G", "Bbm6", "F", "Abdim7", "Gm7", "C7", "E", "F6", "F6", "", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7b9", "Eb", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Ebm7", "Bb6", "Fm7", "Bb7b9", "Ebmaj7", "Ebmaj7", "F7", "Bb", "Em7b5", "A7", "Bb", "Gm7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Fm7", "Bb7", "", "Ebmaj7", "Ab9#11", "Eb", "Cm7", "Cm7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'People Will Say We\'re In Love',
      composer: 'Richard Rodgers',
      chords: ["C6", "G7", "Cmaj7", "Dm7", "G7", "C6", "A7", "Dm7", "G7", "Dm7", "G7", "C6", "Am7", "D7", "D7", "Dm7", "G7b9", "Cmaj7", "C#dim7", "Dm7", "G7", "Cm7", "F7", "Cm7", "F7b9", "Bbmaj7", "Bbmaj7", "Bm7b5", "E7", "A7", "D7", "G7", "C6", "Am7", "D7", "D7", "Dm7", "Db7", "C6", "C6", ""],
  },
  {
      title: 'Perdido',
      composer: 'Juan Tizol',
      chords: ["Cm7", "F7", "Bb6", "Dm7", "G7", "Cm7", "F7", "Bb6", "Dm7", "G7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Cm7", "F7", "Bb6", "Dm7", "G7", "Cm7", "F7", "Bb6", "Dm7", "G7"],
  },
  {
      title: 'Perhaps',
      composer: 'Charlie Parker',
      chords: ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "Em7", "Ab7b9", "Dm7", "G7", "C7", "Dm7", "G7", "Dm7", "G7", "C7"],
  },
  {
      title: 'Perhaps, Perhaps, Perhaps',
      composer: 'Farres-Davis',
      chords: ["Em7", "Am7", "B7", "Em7", "Am7", "B7", "Em7", "C7", "B7", "Em7", "Am7", "Em7", "B7", "B7", "E6", "E6", "B7", "B7", "E6", "E6", "Em7", "Am7", "B7", "Em7", "Am7", "B7", "Em7", "C7", "B7", "Em7", "Am7", "Em"],
  },
  {
      title: 'Peri\'s Scope',
      composer: 'Bill Evans',
      chords: ["Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "E7#5", "E7#5", "Fmaj7", "G7", "Em7", "A7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "B7#11", "Bb7", "A7#5", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7", "G7", "Cmaj7", "Cmaj7", "A7#5"],
  },
  {
      title: 'Petit Fleur',
      composer: 'Sidney Bechet',
      chords: ["D7b9", "D7b9", "Gm", "Gm", "A7b9", "A7b9", "D7b9", "D7b9", "D7b9", "D7b9", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Am7b5", "D7b9", "Gm", "Gm", "A7b9", "A7b9", "D7b9", "D7b9", "D7b9", "D7b9", "Gm", "Gm", "Am7b5", "D7b13", "Gm", "D7b9", "Gm", "G7b9", "G7b9", "Cm", "Cm", "F7", "F7", "Bb6", "Am7b5", "D7b9", "D7b9", "Gm", "Gm", "A7#9", "D7b9", "Gm", "D7b9", "Gm"],
  },
  {
      title: 'Pfrancing (No Blues)',
      composer: 'Miles Davis',
      chords: ["F7", "Bb7", "F7", "Cm7", "F7", "Bb7", "Bdim7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Phase Dance',
      composer: 'Pat Metheny',
      chords: ["Bm9", "Bm9", "Bm9", "Bm9", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "A13sus", "A13sus", "A13sus", "A13sus", "G69", "G69", "G69", "G69", "Bm9", "Bm9", "Bm9", "Bm9", "Bbmaj9#11", "Bbmaj9#11", "Bbmaj9#11", "Bbmaj9#11"],
  },
  {
      title: 'Pick Yourself Up',
      composer: 'Jerome Kern',
      chords: ["Gm7", "C7", "Fmaj7", "Bbmaj7", "Em7b5", "A7b9", "Dm7", "G7", "C7sus", "C7", "Am7", "D7", "Gm7", "C7", "F6", "Am7", "D7", "Gmaj7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "A7", "D7sus", "D7", "Bm7", "E7", "Am7", "D7", "G6", "Abmaj7", "Abmaj7", "Ebm7", "Ab7", "Cmaj7", "Cmaj7", "Am7", "D7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "Em7b5", "A7b9", "Dm7", "G7", "C7sus", "C7", "Am7", "D7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Ping Pong',
      composer: 'Wayne Shorter',
      chords: ["Bb13", "B13", "Bb13", "B13", "Bb13", "B13", "Bb13", "B13", "Bb13", "B13", "Bb13", "B13", "Dbmaj7", "Cm7", "F7#5", "Bbmaj7", "Abmaj7", "G7b9", "Gbmaj7", "Fm7", "Bb7", "Ebmaj7", "D7b9#5", "Dbmaj7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Gbmaj7#11", "Fm7", "Bb7", "F#m7", "B7"],
  },
  {
      title: 'Pink Panther, The',
      composer: 'Henry Mancini',
      chords: ["Em", "Em", "C7#11", "C7#11", "Em", "Em", "F7#11", "F7#11", "Em", "Em", "C7#11", "C7#11", "Em", "C7#11", "B7#9", "Em", "Em"],
  },
  {
      title: 'Pinocchio',
      composer: 'Wayne Shorter',
      chords: ["Gbmaj7#11", "Gbmaj7#11", "Am9", "Dbm69", "Dbm69", "Am9", "Dmaj7#5", "Bm", "Gm", "Gm", "Gm6", "Ebmaj7", "Bm9", "Gbmaj7#11", "Gbmaj7#11", "C#m9", "Em9", "Ebmaj7#5", "F#13", "F#m9", "F#m9"],
  },
  {
      title: 'Played Twice',
      composer: 'Thelonious Monk',
      chords: ["Cmaj7", "Db7", "Db7", "A7", "Cmaj7", "Db7", "Gm7", "C7", "F7sus", "F7sus", "F7sus", "F7sus", "Cmaj7", "Db7", "Db13", "C13", "A7", "Dmaj7"],
  },
  {
      title: 'Poinciana',
      composer: 'Nat Simon',
      chords: ["A7sus", "A7sus", "A7sus", "A7sus", "A7sus", "A7sus", "D6", "D6", "D6", "D6", "Am", "Am", "Gm7", "Em7b5", "A7b9", "D6", "D6", "Gm7", "Gm7", "Amaj7", "Amaj7", "Gm7", "Gm7", "A7sus", "A7sus", "D6", "D6", "Am", "Am", "Gm7", "Em7b5", "A7b9", "D6", "A7sus"],
  },
  {
      title: 'Polkadots And Moonbeams',
      composer: 'Jimmy Van-Heusen',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "", "Em7b5", "A7", "Dm7", "Db7", "F", "", "Am7", "Abm7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "Amaj7", "A#dim7", "Bm7", "E7", "Amaj7", "F#m7", "Bm7", "E7", "Amaj7", "A#dim7", "Bm7", "E7", "A7", "D7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "", "Em7b5", "A7", "Dm7", "Db7", "F", "", "Am7", "Abm7", "Gm7", "C7", "F6", "", "Gm7", "C7"],
  },
  {
      title: 'Poor Butterfly',
      composer: 'Raymon Hubbell',
      chords: ["Bbm7", "Eb7sus", "Eb7b9", "Abdim7", "Abmaj7", "C7#5#9", "C7#5#9", "F7", "Cm7", "F7", "Bbm7", "Eb7", "Gm7b5", "C7b13", "Fm7", "Bb7", "Bb7", "Bbm7", "Cm7b5", "F7b9", "Bbm7", "Eb7sus", "Eb7b9", "Abdim7", "Abmaj7", "C7#5#9", "C7#5#9", "F7", "Cm7", "F7", "Bbm7", "Dbm7", "Gb7", "Cm7", "Db7#11", "Cm7", "Bdim7", "Bbm7", "Eb7", "Ab6", "Db7", "Cm7", "F7"],
  },
  {
      title: 'Popsicle Toes',
      composer: 'Michael Franks',
      chords: ["Am", "Am7", "F#m7b5", "F7#11", "Am", "Am", "F#m7b5", "F7#11", "Am", "Am7", "F#m7b5", "F7#11", "E7#9", "E7#9", "A7", "A7", "D7", "D7", "A7", "B7", "E7#9", "E7#9", "A7", "A7", "D7", "D7", "A7", "E7", "D7", "A7", "Am7", "D7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Abm7", "Db7"],
  },
  {
      title: 'Portrait Of Jennie',
      composer: 'Burdge-Robinson',
      chords: ["Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gm7", "Cm7", "Fm7", "Bb7", "Gm7", "Cm7", "Fm7", "Bb7", "Gmaj7", "Cm7", "F7", "Bbmaj7", "Dm7b5", "G7b9", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gm7", "Cm7", "Fm7", "Bb7", "Fm7", "Bb7b9", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'Preacher, The',
      composer: 'Horace Silver',
      chords: ["F6", "F6", "Bb9", "Bdim7", "F6", "F6", "F6", "G7", "C7", "F6", "F7", "Bb6", "A7", "Bbmaj7", "Bdim7", "F", "D7", "Gm7", "C7", "F6"],
  },
  {
      title: 'Prelude To A Kiss',
      composer: 'Duke Ellington',
      chords: ["D9", "G9", "C7", "Fmaj7", "B9", "E9", "A7", "Dm7", "Dm7", "", "G7", "G#dim", "Am7", "D13", "Dm7", "G7b9", "Cmaj7", "", "Em7", "A7", "Emaj7", "C#m7", "F#m7b5", "B7", "G#m7", "Gdim7", "F#m7", "B7", "Emaj7", "C#m7", "F#m7b5", "B7", "E7", "A7", "Dm7", "Ebm7", "Em7", "Eb7", "D9", "G9", "C7", "Fmaj7", "B9", "E9", "A7", "Dm7", "Dm7", "", "G7", "G#dim", "Am7", "D13", "Dm7", "G7b9", "Cmaj7", "", "Em7", "A7"],
  },
  {
      title: 'Pretend',
      composer: 'Douglas-Parman-Lavere',
      chords: ["Cmaj7", "Cmaj7", "Dm7", "Dm7", "G7", "G7", "Cmaj7", "G7sus", "Em7", "Dm7", "G7", "C6", "C6", "F#m7b5", "B7b9", "Em7", "Ebdim7", "Dm7", "G7sus", "Cmaj7", "Cmaj7", "Dm7", "Dm7", "G7", "G7", "Cmaj7", "Dm7", "G7sus"],
  },
  {
      title: 'Prince Of Darkness',
      composer: 'Wayne Shorter',
      chords: ["Cm7", "Cm7", "Gm11", "Gm11", "Bbm9", "Bbm9", "Gm11", "Gm11", "Gbmaj7", "Gbmaj7", "Bbmaj7#5", "Bmaj7#11", "Bb7", "Ebm7", "Gm11", "Gm11", "Gm9", "Gm9", "Bb7", "Ebm7", "Gm9"],
  },
  {
      title: 'Prism',
      composer: 'Keith Jarrett',
      chords: ["Gm", "Gmb6", "Em7b5", "C#m7b5", "F#7b9", "Bm7", "Dm7", "A13b9", "Gm", "Dm7", "D7b9", "Cm7", "Gm7", "Em7b5", "E7b9", "Am", "E7b9", "Fmaj7", "Cmaj7", "Cm7", "Gm7", "F#m7", "Bm7", "E7b9", "F#m7", "F#m7b5", "F#13b9", "B9sus", "B7b9sus", "B7#5", "B", "Gmaj7#5", "F#m7b5", "Cmaj7", "Bm7", "E7b9", "F#m7b5", "Fmaj7", "E13b9", "", "D", "E", "Cmaj7#5", "F9sus", "F9sus", "Fmaj7#11", "Cmaj7", "A", "A", "Bb", "B", "C"],
  },
  {
      title: 'Progression',
      composer: 'Lee Konitz',
      chords: ["Fmaj7", "Gbmaj7", "Db7#5", "D7", "Db7", "Gbmaj7#11", "C7", "G7", "C7", "Fmaj7", "Gbmaj7", "B7", "A7", "D7", "G7", "Gbmaj7", "Gm7", "G7", "Cm7", "F7", "Bbm7", "Eb7", "Fmaj7#11", "A7", "Dm7", "G7#11", "Gm7", "C7", "Fmaj7", "Gbmaj7", "B7", "A7", "D7", "G7", "Gbmaj7", "Gm7", "C7", "Fmaj7"],
  },
  {
      title: 'Punjab',
      composer: 'Joe Henderson',
      chords: ["G", "A", "Bmaj7", "", "Cmaj7#11", "G", "A", "Bmaj7", "", "Cmaj7#11", "Dmaj13", "Dmaj13", "Bb13b9", "Bmaj7", "G13", "Abmaj7", "Fm7b9", "Bb7", "Emaj9#11", "Emaj9#11", "Emaj9#11", "Emaj9#11", "Eb7b9", "Abmaj7", "G13", "Gb13", "Bmaj7", "E9", "F9", "F9sus", "F9sus", "Gmaj7", "Amaj7", "Bmaj7", "Cmaj7#11"],
  },
  {
      title: 'Pure Imagination',
      composer: 'Anthony Newley',
      chords: ["Fm7", "Bb9sus", "Ebmaj7", "", "Fm7", "F#dim", "Gm7", "C7#9", "Fm7", "Bb9sus", "Ebdim7", "Ebmaj7", "Gm7", "C7#9", "Abmaj7", "Gm7", "C7b9", "Fm7", "Bb9sus", "Ebmaj7", "Am7b5", "D7b13", "Gm7", "C7", "F7", "Fm7", "Bb7sus", "Fm7", "Bb9sus", "Ebmaj7", "", "Fm7", "F#dim", "Gm7", "C7#9", "Fm7", "Bb9sus", "Gmaj7", "Db7", "D7", "Eb69", "Eb69"],
  },
  {
      title: 'Put On A Happy Face',
      composer: 'Charles Strouse',
      chords: ["Eb6", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "D7", "G7", "C7", "F7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "D7", "G7", "C7", "F7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Adim7", "Eb6", "Cm7", "Fm7", "Bb7", "G7", "C7", "F7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Puttin\' On The Ritz',
      composer: 'Irvin Berlin',
      chords: ["F", "Abdim7", "Gm7", "C7", "F", "Abdim7", "Gm7", "C7", "Ab", "Bdim7", "Bbm7", "Eb7", "Ab", "Bdim7", "Bbm7", "Eb7", "C6", "Dbdim7", "Dm7", "G7", "C6", "Dbdim7", "Dm7", "G7", "Am7", "D7", "G7", "C7", "Fm", "Fm", "Fm", "Fm", "C7b9", "C7b9", "Fm", "Fm", "Db7", "C7", "Bbm7", "F7", "Bbm7", "Eb7", "Ab", "Eb7", "Ab", "Db7", "C7", "Fm", "Fm", "Fm", "Fm", "C7b9", "C7b9", "Fm", "Fm", "Db7", "C7"],
  },
  {
      title: 'Quasimodo',
      composer: 'Charlie Parker',
      chords: ["Ebmaj7", "D7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "G7", "Cm7", "Cm7", "Am7", "D7", "Gm7", "C7", "F7", "Bb6", "Cm7", "F7", "Fm7", "C7", "Fm7", "Bb7", "Ebmaj7", "D7", "Fm7", "Bb7", "Fm7", "Bb7", "Bbm7", "F7b13", "Bbm7", "Eb7", "Abmaj7", "Dm7", "G7", "Cm7", "Am7b5", "Abm7", "Gm7", "C7", "Fm7", "Abm7", "Gm7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Questar',
      composer: 'Keith Jarrett',
      chords: ["Bbmaj7", "Bmaj7", "Bbmaj7", "Ebmaj7", "Bbmaj7", "Bb69", "Bmaj7", "C", "Bbmaj7", "Bbdim7", "Bbmaj7", "Bbdim7", "Bbmaj7", "Ebmaj7", "F", "Ebmaj7", "Bmaj7", "C", "Bmaj7", "Bbmaj7", "Am7", "Ab7", "Gm7", "F#maj7#5", "Em7b5", "Am7", "C#", "Abmaj7", "G9sus", "E", "B", "G9sus", "G9sus", "Abmaj7#11", "Abmaj7#11", "Bbmaj7#11", "Am7", "Abmaj7", "G7sus", "G7sus"],
  },
  {
      title: 'Question And Answer',
      composer: 'Pat Metheny',
      chords: ["Dm", "Dmb6", "Dm6", "Dm7", "Gm7", "Am7", "Bbmaj7", "C7sus", "Dm", "Dmb6", "Dm6", "Cm7", "F7", "B7#5#9", "Bb7#11", "A7#5#9", "Dm", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "Ab13", "Dbmaj7", "E13", "Amaj7", "C13", "Fmaj7", "A7b9", "Dm", "Dmb6", "Dm6", "Dm7", "Gm7", "Am7", "Bbmaj7", "C7sus", "Dm", "Dmb6", "Dm6", "Cm7", "F7", "B7#5#9", "Bb7#11", "A7#5#9", "Dm"],
  },
  {
      title: 'Quiet Now',
      composer: 'Denny Zeitlin',
      chords: ["Am7", "Fmaj7", "E7", "Am7", "Dm7", "G7", "Cmaj7", "", "Bb7#11", "A7#5", "Dm7b5", "", "G7", "E7", "Am7", "D7#11", "Ebmaj7", "Abmaj7", "Db9", "Bm7", "Gmaj7", "F#7", "Bm7", "Em7", "A7", "Dmaj7", "", "C7#11", "B7#5", "Em7b5", "", "A7", "F#7", "Bm7", "E7#11", "F#m7", "Bm7", "Em7", "A7", "Am7", "D7#11", "Gmaj7", "C9", "Bm7", "Bb7", "Abmaj7", "Db7", "Cm7", "B7", "A7", "D7", "C#m7", "C7", "F#m9", "E7", "Am7", "Fmaj7", "E7", "Am7", "Dm7", "G7", "Cmaj7", "", "Bb7#11", "A7#5", "Dm7b5", "", "G7", "E7", "Am7", "D7#11", "Em7", "Am7", "Dm7", "Gsus", "Em7", "Am7", "F", "Bb", "Em7", "Eb", "Ab", "Db", "Cmaj9", "", "", ""],
  },
  {
      title: 'Radio',
      composer: 'Steve Swallow',
      chords: ["Fmaj7", "E7#9", "Am7", "D9#11", "Dm9", "B7#5", "Em7", "A7", "F#m7b5", "B7#5", "Em7", "C9", "Dmaj7", "F#7", "Bm7", "E7", "Em7", "F#7", "Bm7", "E7", "Bb7#11", "Eb9", "Ab9", "G7#5", "F#7#11", "B9", "E9sus", "Eb7#5#9", "Abm9", "E9", "Abm9", "E9", "Dm7b5", "G7", "Cm7", "D7#5", "Gm7", "C7", "Bb7#11", "Eb9", "Dmaj7#11", "Db9#11"],
  },
  {
      title: 'Rainbow Connection, The',
      composer: 'Williams-Ascher',
      chords: ["Gmaj7", "Em7", "Am7", "D7sus", "Gmaj7", "Em7", "Cmaj7", "D7sus", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Bm7", "Bm7", "E7sus", "E7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'Raincheck',
      composer: 'Billy Strayhorn',
      chords: ["Fmaj7", "Gm7", "G#dim7", "F", "Bb6", "Am7", "G7", "C7", "Fmaj7", "Gm7", "G#dim7", "F", "Bb6", "F6", "Gm7", "C7", "", "Fmaj7", "Gm7", "G#dim7", "F", "Bb6", "Am7", "Bm7", "E7", "C#m7", "F#m7", "Bm7", "E7", "Eb7", "D7", "Db7", "C7"],
  },
  {
      title: 'Re: Person I Knew',
      composer: 'Bill Evans',
      chords: ["C69", "Caug", "F#aug", "Bbmaj7", "Fm7", "Fm7", "Cm9", "Cm9", "Fm", "Cm11", "Fm7", "Bbmaj7#5", "Fm", "Bbmaj7", "Fm7", "Db"],
  },
  {
      title: 'Recado Bossa Nova',
      composer: 'Djalma Ferreira',
      chords: ["Gm", "Gm", "D7b9", "D7b9", "Dm7b5", "G7b9", "Cm", "Cm", "Am7b5", "D7b9", "Gm", "Gm", "A7b9", "A7b9", "D7b9", "D7b9", "G7b9", "G7b9", "Cm", "Cm", "A7b9", "A7b9", "Dm", "D7b9"],
  },
  {
      title: 'Recordame',
      composer: 'Joe Henderson',
      chords: ["Am", "Am", "Am", "Am", "Cm", "Cm", "Cm", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "C7", "Fmaj7", "E7#9"],
  },
  {
      title: 'Red Clay',
      composer: 'Freddie Hubbard',
      chords: ["C#m11", "Bm11", "D7sus", "E7sus", "F#7sus", "G#7sus", "C#m7", "Bm7", "E7", "Amaj7", "D#m7b5", "G#7b9"],
  },
  {
      title: 'Red Top',
      composer: 'Lionel Hampton',
      chords: ["F7", "F7", "F7", "F7", "Bb7", "Bb7", "F6", "Gm7", "Am7", "D7b9", "Gm7", "C7", "F7", "Ab7", "Gm7", "C7sus"],
  },
  {
      title: 'Reflections',
      composer: 'Thelonious Monk',
      chords: ["Ab", "Gb7", "F7", "E7", "Bbm7", "Eb7b9", "Abmaj7", "", "Bbm7", "Bm7", "Cm7", "F7b9", "Gm7b5", "Bbm7", "Eb7b9", "Abmaj7", "Adim7", "Bbm7", "F7", "Bbm7", "A7", "Bbm7", "Eb7b9", "Ab7", "Db7", "Gm7", "C7b13", "Fm", "Fm7", "Fm7", "Bb7b9", "Bbm7", "Bbm7", "Eb7b9", "Ab", "Gb7", "F7", "E7", "Bbm7", "Eb7b9", "Abmaj7", "", "Bbm7", "Bm7", "Cm7", "F7b9", "Gm7b5", "Bbm7", "Eb7b9", "Abmaj7", "Gb7", "Abmaj7"],
  },
  {
      title: 'Reincarnation Of A Lovebird',
      composer: 'Charles Mingus',
      chords: ["F#m", "Dmaj7", "G#7", "C#7#5", "F#m", "D9#11", "G#7", "C#7#5", "F#m", "D7#9", "Bm7", "Eb13", "G#7#5#9", "C#7#5", "F#m", "G#m7b5", "C#7", "F#m", "Dmaj7", "G#7", "C#7", "F#m", "D9#11", "G#7", "C#7#5", "F#m", "D7#9", "Bm7", "Ebmaj7", "G#7", "C#7#9", "F#m", "F#m", "F#m7", "B7", "F#m7", "B7", "Emaj7", "A9#11", "Emaj7", "A9#11", "Am7", "D7", "Gmaj7", "C7", "Bm7b5", "Bb7", "Am7", "D7b9", "G#7", "C#7", "F#m", "Dmaj7", "G#7", "C#7#5", "F#m", "D9#11", "G#7", "C#7#5", "F#m", "D7#9", "Bm7", "Eb13", "G#7#5#9", "C#7#5", "F#m", "G#m7b5", "C#7", "Bm7", "Ebmaj7", "G#7", "C#7#5#9", "F#m", "G#m7b5", "C#7"],
  },
  {
      title: 'Relaxin\' At Camarillo',
      composer: 'Charlie Parker',
      chords: ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7"],
  },
  {
      title: 'Remember',
      composer: 'Irving Berlin',
      chords: ["Bbmaj7", "Eb7", "Dm7", "G7", "Gm7", "C7b9", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "Fmaj7", "Em7b5", "A7b13", "Bbmaj7", "Eb7", "Dm7", "G7", "Gm7", "C7b9", "Fmaj7", "Cm7", "F7"],
  },
  {
      title: 'Rhythm-a-ning',
      composer: 'Thelonious Monk',
      chords: ["Bb", "G7", "Cm7", "F7", "Bb", "G7", "Cm7", "F7", "Bb7", "Bb7", "Eb7", "Edim7", "Bb7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bb", "G7", "Cm7", "F7", "Bb", "G7", "Cm7", "F7", "Bb7", "Bb7", "Eb7", "Edim7", "Bb7", "G7", "Cm7", "F7"],
  },
  {
      title: 'Road Song',
      composer: 'Wes Montgomery',
      chords: ["Gm7", "Gm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Ebmaj7", "Em7b5", "Cm7", "D7#9", "Gm7", "Cm7", "F7", "Bbmaj7", "Bm7", "E7", "Bbm7", "Eb7", "Abmaj7", "Am7", "D7", "Gm7", "Gm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Ebmaj7", "Em7b5", "Cm7", "D7#9", "Gm7"],
  },
  {
      title: 'Robbin\'s Nest',
      composer: 'Thompson-Jacquet',
      chords: ["C6", "C6", "Ab7", "Ab7", "Em7", "Ebdim7", "Dm7", "G7", "C6", "Ebdim7", "Dm7", "G7", "E7", "E7", "A7b9", "A7b9", "D7", "D7", "G7b13", "Dm7", "G7", "C6", "C6", "Ab7", "Ab7", "Em7", "Ebdim7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Rockin\' Chair',
      composer: 'Hoagy Carmichael',
      chords: ["Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "F7", "Bb7", "Ebmaj7", "Cm7", "Am7b5", "D7b9", "Gm7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "Ab7", "Ab7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "Cm7", "F7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Room 608',
      composer: 'Horace Silver',
      chords: ["Cm7", "Dm7", "Cm7", "F7#9#11", "D7#9#11", "Db7#9#11", "C7#9#11", "F6", "F7#5#9", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "Edim7", "Bb6", "G7", "Cm7", "F7", "Fm7b5", "Bb7#9", "Ebmaj7", "Ebmaj7", "Abm7b5", "Db7#9", "Gbmaj7", "F7#9", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "Edim7", "Bbmaj7", "G7", "Cm7", "F7"],
  },
  {
      title: 'Rose Room',
      composer: 'Art Hickman',
      chords: ["Bb7", "Eb7", "Ab6", "Ab6", "Ebm7", "Ab7", "Db6", "Db6", "Dbm7", "Gb7", "Abmaj7", "F7", "Bb7", "Bb7", "Bbm7", "Eb7", "Bb7", "Eb7", "Ab6", "Ab6", "Ebm7", "Ab7", "Db6", "Db6", "Dbm7", "Gb7", "Abmaj7", "F7", "Bb7", "Eb7", "Ab6", "G7b9", "Gb7", "F7"],
  },
  {
      title: 'Rosetta',
      composer: 'Earl Hines',
      chords: ["F6", "E7", "Eb7", "D7", "G7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "E7", "Eb7", "D7", "G7", "C7", "F6", "Bm7b5", "E7", "Am", "Bm7b5", "E7", "Am", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7", "F6", "E7", "Eb7", "D7", "G7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Round Midnight',
      composer: 'Thelonious Monk',
      chords: ["Am7b5", "D7#9", "Gm7b5", "C7#9", "Fm7b5", "Bb7#9", "Ebm7", "", "Ab7", "Db7", "Gb7", "B7", "Bb7#5", "", "Ebm7", "Ebm7", "Cdim7", "", "Abm7", "Db7", "Ebm6", "Bm7", "E7", "Bbm7", "Eb7", "Abm7", "Db7", "Ebm7", "Ab7", "Cm7b5", "B7#11", "Bb7", "Cm7b5", "B7#11", "Bb7#11", "Cm7b5", "B7#11", "Bb7#11", "Abm7", "", "Fm7", "Bb7", "Cm7b5", "F7", "Db9", "", "B9", "", "Abm7", "", "Fm7", "Bb7", "Cm7b5", "F7", "Cm7b5", "F7", "F#m7", "B7", "F#m7", "B7", "Bm7", "E7", "Fm7", "Bb7", "Eb", "Ab", "Db", "Gb", "Bb7b5b9", "", "Ebmaj7#11"],
  },
  {
      title: 'Route 66',
      composer: 'Bobby Troup',
      chords: ["F7", "Bb7", "F7", "Cm7", "F7", "Bb7", "Bb7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Ruby, My Dear',
      composer: 'Thelonious Monk',
      chords: ["Fm9", "Bb7b9", "Ebmaj7", "", "", "", "", "", "Gm7", "C7b9", "Fmaj7", "", "", "", "Bbm7", "Eb7b9", "Abmaj7", "", "", "", "Bbm7", "E13", "Bm7", "Bb7b5", "Bb7#5", "", "Amaj7", "Bm7", "E13b9", "A69", "Bb6", "Bdim7", "Bdim7", "", "Cm7", "Cm", "Cm7", "", "Cm", "Dm7", "Ebm7", "Ab7b5", "Eb7#9", "Fm9", "Bb7b9", "Ebmaj7", "", "", "", "", "", "Gm7", "C7b9", "Fmaj7", "", "", "", "Bbm7", "Eb7b9", "Abmaj7", "", "", "", "Bbm7", "E13", "Gb69", "B7b9", "Bb7b9", "Bb7b9", "Bb7b9", "A7b5", "Ab7b5", "Db69"],
  },
  {
      title: 'S.O.S.',
      composer: 'Wes Montgomery',
      chords: ["Cm7", "Bbm7", "Eb7", "Abmaj7", "Dm7b5", "G7#5", "Cm7", "Eb7", "Abmaj7", "G7#5", "Cmaj7", "G7", "Cm7", "Bbm7", "Eb7", "Abmaj7", "Dm7b5", "G7#5", "Cm7", "Eb7", "Abmaj7", "G7#5", "Cmaj7", "Cmaj7", "Gm7", "C7", "Fm7", "Bb7", "Bb7b5", "A7b9", "Ab7b5", "G7#5", "Cm7", "Bbm7", "Eb7", "Abmaj7", "Dm7b5", "G7#5", "Cm7", "Eb7", "Abmaj7", "G7#5", "Cmaj7", "G7b5", "Bb7#9", "Ebmaj7", "G7#9", "Cmaj7", "", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "G7b5", "G7b5"],
  },
  {
      title: 'S\' Wonderful',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "Ebmaj7", "Edim7", "Edim7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "Em7", "Am7", "D7", "G7", "C7", "F7", "Bb7", "Bb7b9", "Ebmaj7", "Ebmaj7", "Gbdim7", "Gbdim7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'S\'posin\'',
      composer: 'Paul Denniker',
      chords: ["Bbmaj7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Am7b5", "D7#9", "Gm7", "Gm7", "C7", "C7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Cm7", "F7", "Bbmaj7", "Fm7", "Bb7", "Eb6", "Ab7", "Gm7", "Em7b5", "Eb7", "D7", "Gm7", "Bbmaj7", "G7#9", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Saga Of Harrison Crabfeathers, The',
      composer: 'Steve Kuhn',
      chords: ["Em7", "Em7", "Em7", "Em7", "Cmaj7#11", "Cmaj7#11", "Cmaj7#11", "Cmaj7#11", "Am7", "Am7", "Am7", "Am7", "Em7", "Em7", "Em7", "Em7", "Dm7", "Dm7", "Dm7", "Dm7", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Gm7", "Gm7", "Gm7", "Gm7", "Dm7", "Dm7", "Dm7", "Dm7", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Cm7", "Cm7", "Cm7", "Cm7", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Abmaj7#11", "Fm7", "Fm7", "Fm7", "Fm7", "Cm7", "Cm7", "Cm7", "Cm7"],
  },
  {
      title: 'Sail Away',
      composer: 'Tom Harrell',
      chords: ["Em7", "A7alt", "Dm11", "G7b9sus", "Fdim7", "Am7", "D", "G7b9sus", "Em7", "Bbm7", "Eb9", "Dm11", "G7b9sus", "Fdim7", "Am7", "Fm11", "Bb7b9sus", "Gm7", "C7b5b9", "Fm11", "Bb7b9sus", "Abdim7", "Cm7", "Am11", "D7b5b9", "Gmaj7", "Dm7", "A", "A", "B7", "Emaj7#5", "Amaj7", "D#m11", "G#sus", "Bsus", "Eb9sus", "Eb7b5b9", "E9sus", "E9sus", "E7", "Amaj7", "F#m7", "C", "Bb", "Ab", "G7", "Em7", "A7alt", "Dm11", "G7b9sus", "C69", "Am7", "F#m7", "B7#5#9", "Cadd9", "A7alt", "Dm11", "Gsus", "G7", "Cmaj7", "G13sus", "Cmaj7", "G13sus", "Cmaj7", "G13sus", "Cmaj7", "G13sus", "F", "D", "Em", "E", "F", "Bb", "G", "Cm9"],
  },
  {
      title: 'Salt Peanuts',
      composer: 'Dizzy Gillespie',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Samba De Orfeu',
      composer: 'Luiz Bonfa',
      chords: ["Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7", "F7#11", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Bb7#11", "A7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Dm7", "G7"],
  },
  {
      title: 'San Francisco Holiday',
      composer: 'Thelonious Monk',
      chords: ["Am7b5", "D7b9", "Gm7b5", "C7b9", "Bb7#5#9", "Fm9", "Bb13b9", "Am7b5", "D7b9", "Gm7b5", "C7b9", "Bb7#5#9", "Bb7b9#11", "Cm7b5", "Cm7b5", "F7b9", "Cm7b5", "F7b9", "Cm7b5", "F7b9", "Cm7b5", "Cm7b5", "F7b9", "Cm7b5", "F7b9", "Cm7b5", "F7b9", "Am7b5", "D7b9", "Gm7b5", "C7b9", "Bb7#5#9", "Fm9", "Bb13b9", "Am7b5", "D7b9", "Gm7b5", "C7b9", "Bb7#5#9", "", "B7"],
  },
  {
      title: 'Sandu',
      composer: 'Clifford Brown',
      chords: ["Eb7", "Ab7", "Eb7", "Eb7", "Ab7", "Ab7", "Eb7", "Gm7", "C7", "Fm7", "Bb7", "Eb7", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'Satellite',
      composer: 'John Coltrane',
      chords: ["Gmaj7", "Bb7", "Ebmaj7", "F#7", "Bmaj7", "D7", "Gm7", "C7", "Fmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "Am7b5", "D7b9", "Gmaj7", "Fm7", "Bb7", "Ebmaj7", "Gb7", "Bmaj7", "D7", "Gmaj7", "Bb7", "Ebmaj7", "F#7", "Bmaj7", "D7", "Gm7", "C7", "Fmaj7", "Ab7", "Dbmaj7", "E7", "Amaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Gmaj7", "Cm7", "F7", "D7sus", "D7sus", "D7sus", "D7sus", "D7sus", "D7sus", "D7sus", "D7sus"],
  },
  {
      title: 'Satin Doll',
      composer: 'Strayhorn-Ellington',
      chords: ["Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Em7", "A7", "Am7", "D7", "Abm7", "Db7", "Cmaj7", "F7", "Em7", "A7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Am7", "D7", "Am7", "D7", "G7", "G7", "Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Em7", "A7", "Am7", "D7", "Abm7", "Db7", "Cmaj7", "F7", "Em7", "A7"],
  },
  {
      title: 'Save Your Love For Me',
      composer: 'Buddy Johnson',
      chords: ["D6", "Am7", "D6", "B7#5#9", "Em7", "D", "Gmaj7", "A7sus", "Gm7", "G7sus", "Bbmaj7", "Eb7#11", "Em7", "Em7", "A13b9", "D", "Am7", "D6", "B7#5#9", "Em7", "Em7", "Gm7", "C7#11", "Em7", "Em7", "A13b9", "D6", "A7#5#9", "D6", "Fm7", "Bb7", "Fm7", "Bb7", "D6", "Em7", "F#m7", "Em7", "D6", "", "Bb7", "Bb7", "Dmaj7", "F7", "Em7", "Eb7#11", "Em7", "Em7", "Gm7", "C7#11", "Em7", "Em7", "C7#11", "B7#5#9", "Em7", "Gm7", "C7#11", "Em7", "A7#5#9", "D6", "Am7", "D6", "Am7"],
  },
  {
      title: 'Say It (Over And Over Again)',
      composer: 'Frank Loesser',
      chords: ["Ebmaj7", "C7", "Fm7", "Bb7", "Eb6", "C7#9", "Fm7", "", "Dm7b5", "G7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Cmaj7", "Dm7b5", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "Am7", "D7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Eb6", "C7#9", "Fm7", "", "Dm7b5", "G7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7"],
  },
  {
      title: 'Say the Brother\'s Name',
      composer: 'Pat Metheny',
      chords: ["Bbmaj7", "Bbmaj7", "Am7", "Ebmaj7#11", "Dm", "Dm", "Bbmaj7", "F", "Abmaj7", "Abmaj7", "Ab7", "Dbmaj7", "Cm7", "Gb", "Fm", "Ebm11", "Gbmaj7#11", "E69", "Amaj7", "Dmaj7#11", "C#m7", "Bm7", "Gmaj7#11", "F#m7", "Gmaj7", "Gmaj7", "F#m7", "Gmaj7", "Gmaj7", "Em7", "Em7", "D", "Bbmaj7", "Am7", "D", "D", "Bbmaj7", "Bb", "Bb", "F6", "B7#11", "B7#11", "B7#11", "B7#11", "Dm9", "Dm9", "Ebmaj7#11", "Em11", "F9", "Bbmaj7", "Ebmaj7", "Em9", "F9"],
  },
  {
      title: 'Scene',
      composer: 'Tom Harrell',
      chords: ["Cm7", "Fm7", "Bbm7", "Ebm7", "Abm7", "Dbm7", "F#m7", "Bm7", "Amaj7", "Gmaj7#11", "Dmaj7#11", "Bm7", "Abm7", "Gmaj7", "F#m7", "Fmaj7", "Cmaj7", "Cmaj7", "A", "A", "Cm7", "Fm7", "Bbm7", "Ebm7", "Abm7", "Dbm7", "F#m7", "Bm7", "Amaj7", "Dm7", "Cmaj7", "Bm7", "Cm7", "Bbmaj7", "Am7", "Am7", "Gmaj7", "Gmaj7"],
  },
  {
      title: 'Scotch And Soda',
      composer: 'Dave Guard',
      chords: ["Abmaj7", "Db7", "Eb6", "Gm7", "C7", "F7", "Fm7", "Bb7", "G7", "G7", "Abmaj7", "Abmaj7", "Eb6", "Fm7", "Eb6", "F7", "F7", "Bb7", "Fm7", "Bb7", "Abmaj7", "Db7", "Eb6", "Gm7", "C7", "F7", "Fm7", "Bb7", "Eb6", "Eb6", ""],
  },
  {
      title: 'Scrapple From The Apple',
      composer: 'Charlie Parker',
      chords: ["Gm7", "C7", "Gm7", "C7", "Fmaj7", "F7", "Bbmaj7", "Bdim7", "Fmaj7", "Gm7", "Am7", "D7", "A7", "A7", "D7", "D7", "G7", "G7", "C7", "C7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "F7", "Bbmaj7", "Bdim7", "Fmaj7", "Gm7", "Am7", "D7"],
  },
  {
      title: 'Sea Journey',
      composer: 'Chick Corea',
      chords: ["Amb6", "Am", "Amb6", "Am", "Amb6", "Am", "Amb6", "Am", "Dm11", "Em11", "Am11", "Am11", "G7sus", "G7sus", "F#m7b5", "F#m7b5", "Fmaj7", "Fmaj7", "E7sus", "E7b9", "Amb6", "Am", "Amb6", "Am", "Dm7", "Cmaj7#5", "Fmaj7", "E7#9", "Fmaj7", "Fmaj7", "E7#9", "E7#9", "Fmaj7", "Fmaj7", "Em7", "A7", "Dmaj7", "C#m7", "Bm7b5", "E7b9", "Amb6", "Am"],
  },
  {
      title: 'Search For Peace',
      composer: 'McCoy Tyner',
      chords: ["Am7b5", "D7b9", "G13sus", "Am7b5", "D7b9", "G13sus", "Gm11", "C7b9", "Fm7", "Bb13b9", "Ebm7", "Ab13b9", "C#m7", "E7", "C13", "Ab13", "C13", "Ab13", "C13", "Ab13", "Am7", "D7", "Gm9", "Abmaj7", "Gm9", "Abmaj7", "Gm9", "Abmaj7", "G13sus", "G13", "Am7b5", "D7b9", "G13sus", "Am7b5", "D7b9", "G13sus", "Gm11", "C7b9", "Fm7", "Bb13b9", "Ebm7", "Ab13b9", "C#m7", "E7", "C13"],
  },
  {
      title: 'Second Star To The Right, The',
      composer: 'Sammy Fain',
      chords: ["Eb", "G7", "Cm", "Gm", "Ab", "Bb7", "Eb", "C7", "Fm7", "Bb7", "Eb", "Ab", "Bbm7", "Ab", "Bbm7", "Eb7", "Ab", "G7", "Cm", "Fm7", "Bb7", "Eb", "G7", "Cm", "Gm", "Ab", "Bb7", "Eb", "C7", "Fm7", "Bb7", "Eb", "Bb7"],
  },
  {
      title: 'Second Time Around, The',
      composer: 'Jimmy Van-Heusen',
      chords: ["Cmaj7", "", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "", "C6", "", "Bm7b5", "", "E7b9", "Am7", "", "C7", "", "Fmaj7", "Fmaj7", "Am7", "D7", "Dm7", "G7"],
  },
  {
      title: 'Secret Love',
      composer: 'Sammy Fain',
      chords: ["Ebmaj7", "Bb7sus", "Ebmaj7", "Bb7sus", "Eb7", "Ab7", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6", "Bb7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Bb7sus", "Gm7b5", "C7b9", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'Segment',
      composer: 'Charlie Parker',
      chords: ["Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Bbm6", "Fm7b5", "Bb7b9", "Ebm7", "Ebm7", "Em7b5", "Ab7b9", "Dbmaj7", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9", "Bbm6", "Cm7b5", "F7b9"],
  },
  {
      title: 'Sentimental Journey',
      composer: 'Brown-Green-Homer',
      chords: ["C6", "C6", "C6", "", "D7", "G7", "C6", "C7", "F7", "F#dim7", "C6", "A7", "D7", "G7", "C6", "", "F6", "F6", "C6", "C6", "D7", "D7", "G7", "G7", "C6", "C6", "C6", "", "D7", "G7", "C6", "C7", "F7", "F#dim7", "C6", "A7", "D7", "G7", "C6", ""],
  },
  {
      title: 'September In The Rain',
      composer: 'Harry Warren',
      chords: ["Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Db7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Cm7", "F7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Db7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7"],
  },
  {
      title: 'September Song',
      composer: 'Kurt Weill',
      chords: ["F7", "Fm7", "Bb7", "Cmaj7", "Dm7", "Em7", "Am7", "D7sus", "D7", "G7sus", "G7", "Cmaj7", "G7sus", "Cmaj7", "Fm6", "Fm6", "F#dim7", "F#dim7", "Fm6", "Fm6", "F#dim7", "G7sus", "F7", "Fm7", "Bb7", "Cmaj7", "Dm7", "Em7", "Am7", "D7sus", "D7", "G7sus", "G7", "C6", "C6"],
  },
  {
      title: 'Serenade To A Cuckoo',
      composer: 'Roland Kirk',
      chords: ["Fm7", "Gm7b5", "C7", "Fm7", "Gm7b5", "C7", "Fm7", "Gm7b5", "C7", "Fm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Gm7b5", "C7", "Fm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Gm7b5", "C7", "Fm7", "F7"],
  },
  {
      title: 'Serenade To A Soul Sister',
      composer: 'Horace Silver',
      chords: ["Ebm7", "E7#9", "Ebm7", "E7#9", "Ebm7", "E7#9", "Ebm7", "E7#9", "Ebm7", "Ab13", "A13", "Ab13", "Bb7b13", "Ebm7", "E7#9", "Ebm7", "E7#9", "Ebm7", "B13", "C13", "B13", "Bb7b13", "B13", "Bb7b13", "Ebm7", "E7#9", "Ebm7", "E7#9"],
  },
  {
      title: 'Serene',
      composer: 'Eric Dolphy',
      chords: ["Ebmaj7", "Ab7#11", "Db7", "Eb7", "Ab7", "D7b5", "Ebmaj7", "Dbm7", "Gb7", "Fm7b5", "Bb7b5", "", "Bm7", "E7", "Ab7#11", "Ab7#11", "Ab7#11", "Gbmaj7", "F7#9", "A9", "A9"],
  },
  {
      title: 'Serenity',
      composer: 'Joe Henderson',
      chords: ["Dm7b5", "G7b13", "Abmaj7#11", "Gbmaj7#11", "Em7", "A7", "Fm7", "Bb7", "Ebmaj7", "", "Dm7b5", "G7", "Cm7", "Cm7", "Abm7", "Db7", "G7", "Gb7", "F7", "Emaj7#11", "Fm7", "Bb7#5", "Ebmaj7", "Dm7b5", "G7b13"],
  },
  {
      title: 'Serpent\'s Tooth',
      composer: 'Miles Davis',
      chords: ["Bbmaj7", "Bdim7", "Cm7", "C#dim7", "Dm7", "D7#5", "Ebmaj7", "Abmaj7#11", "Bbmaj7", "E9", "Ebmaj7", "Ab7", "Dm7", "G7", "Cm7", "F7", "Bb7", "Bb7", "Ebmaj7", "Ebmaj7", "C7", "C7", "F7", "F7", "Bbmaj7", "Bdim7", "Cm7", "C#dim7", "Dm7", "D7#5", "Ebmaj7", "Ab7#11", "Bbmaj7", "E9", "Ebmaj7", "Ab7", "Bbmaj7", "Bb6"],
  },
  {
      title: 'Seven Come Eleven',
      composer: 'Goodman-Christian',
      chords: ["Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "G7", "G7", "C7", "C7", "F7", "F7", "Bb7", "Eb7", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6", "", "Ab6"],
  },
  {
      title: 'Seven Steps To Heaven',
      composer: 'Victor Feldman',
      chords: ["F13", "Eb13", "F13", "Eb13", "F13", "Eb13", "F13", "F13", "Fmaj7", "Bb7", "Em7b5", "A7", "Dm7", "Ab7", "G7", "Gm7", "C7", "Eb6", "E6", "F6", "Cmaj7", "Dm7", "Em7", "Fm7", "Bb7", "Ebmaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7b5", "A7", "Dm7", "Ab7", "G7", "Gm7", "C7", "Eb6", "E6", "F6"],
  },
  {
      title: 'Shadow Of Your Smile, The',
      composer: 'Johnny Mandel',
      chords: ["F#m7", "B7b9", "Em7", "A7", "Am7", "D7", "Gmaj7", "Cmaj7", "F#m7b5", "B7b9", "Em7", "Em7", "C#m7b5", "F#7b9", "F#m7b5", "B7b13", "F#m7", "B7b9", "Em7", "A7", "Am7", "D7", "Bm7b5", "E7b9", "Am7", "Cm7", "F7", "Bm7", "E7b13", "A7", "D7sus", "D7b9", "G6", "G6"],
  },
  {
      title: 'Shaw \'Nuff',
      composer: 'Charlie Parker',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'She\'s Funny That Way',
      composer: 'Charles Daniels',
      chords: ["Ebmaj7", "Bb7#5", "Ebmaj7", "Bb7#5", "Ebmaj7", "D7#5", "Gm7b5", "C7", "F7", "Db7", "Cm7", "F7", "Fm7", "Bb7", "Abm6", "Db7", "Eb6", "Bb7", "Ebmaj7", "Eb7", "Abm6", "Db7", "Gm7", "C7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bb7#5", "Ebmaj7", "Bb7#5", "Ebmaj7", "D7#5", "Gm7b5", "C7", "F7", "Db7", "Eb6", "Bb7", "Eb6"],
  },
  {
      title: 'Shine',
      composer: 'Dabney-Mack-Brown',
      chords: ["Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "G7", "G7", "Cm7", "Cm7", "F7", "F7", "Bb7", "Bb7", "Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "G7", "G7", "Cm7", "Cm7", "Abmaj7#11", "Abmaj7#11", "Db7", "Eb6", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Shiny Stockings',
      composer: 'Frank Foster',
      chords: ["Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abdim7", "Gm7", "C7", "Bb7", "Am7", "D7", "D7", "Bm7", "E7", "A6", "Am7b5", "D7b9", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "Abdim7", "Gm7", "C7", "Bb7", "Am7", "D7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Shutterbug',
      composer: 'J.J. Johnson',
      chords: ["Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Cm7", "Cm7", "Cm7", "Cm7", "Gm7", "Gm7", "Gm7", "Gm7", "Bbm7", "Eb7", "Am7b5", "D7b9#5", "Gm7", "Gm7"],
  },
  {
      title: 'Si Si',
      composer: 'Charlie Parker',
      chords: ["F7", "Em7b5", "A7", "Dm7", "G7", "Cm7", "F7", "Bb7", "Bbm7", "Eb7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Sidewinder',
      composer: 'Lee Morgan',
      chords: ["", "Eb7", "", "Eb7", "", "Eb7", "", "Eb7", "", "Eb7", "", "Eb7", "", "Eb7", "", "Eb7", "", "Ab7", "", "Ab7", "", "Ab7", "", "Ab7", "", "Eb7", "", "Eb7", "", "Eb7", "", "C7b9", "", "Bb7", "", "Bb7", "", "Bb7", "", "Bb7", "", "Eb7", "", "Eb7", "Eb7", "", ""],
  },
  {
      title: 'Silver\'s Serenade',
      composer: 'Horace Silver',
      chords: ["Em9", "Em9", "Bbm9", "Bbm9", "Am9", "Am9", "Ebm9", "Ebm9", "Am7", "Am7", "Cm7", "Cm7", "B7", "Bbmaj7", "Cm7", "Dm7", "Ebmaj7", "Am7", "D7#11", "D7#11", "G69", "Gmaj7#11"],
  },
  {
      title: 'Simone',
      composer: 'Frank Foster',
      chords: ["Dm7", "A7sus", "Dm7", "Eb7#11", "Dm7", "A7sus", "D7sus", "Ab7", "Gm7", "Am7", "Bbm7", "Eb7", "Dm7", "Em7", "Fmaj7", "F#m7", "Fm7", "Bb7", "Em7", "A7b5b9", "Dm7", "A7sus", "Dm7", "Ebmaj7#11"],
  },
  {
      title: 'Since I Fell For You',
      composer: 'Buddy Johnson',
      chords: ["Ebmaj7", "C7b9", "Fm7", "Bb7#9", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Ab7", "Gb7", "F7", "Bb7sus", "G7", "C7b9", "F7", "Bb7", "Ab7", "Db7", "Eb7", "Bbm7", "Eb7", "Ab7", "Db7", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "C7b9", "Fm7", "Bb7#9", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Ab7", "Gb7", "F7", "Bb7sus", "Eb6", "C7b9", "F7", "Bb7"],
  },
  {
      title: 'Sippin\' At Bells',
      composer: 'Miles Davis',
      chords: ["Fmaj7", "Fm7", "Bb7", "Am7", "Gm7", "F#m7", "B7", "Bbmaj7", "Bbm7", "Eb7", "Am7", "Abm7", "Db7", "Gm7", "C7", "C#m7", "F#7", "Am7", "Ab7", "Dbmaj7", "Gb7", "F6", "F6"],
  },
  {
      title: 'Skating In Central Park',
      composer: 'John Lewis',
      chords: ["C", "G7b9", "Cmaj7", "Cmaj7", "Fmaj7", "G7#5", "Cmaj7", "C7b5", "Fmaj7", "B7", "Em7", "A7", "Dm7", "G7", "F", "F", "Bbm6", "", "Bbm6", "G7", "Fm7", "Fm", "Fm7", "Dm7b5", "Ebmaj7", "Bb6", "Cm7", "Bbm6", "Cm6", "Cm6", "Am7b5", "D7b9", "Fm7", "Fm", "Dm7b5", "G7#5", "C", "G7b9", "Cmaj7", "Cmaj7", "Fmaj7", "G7#5", "Cmaj7", "C7b5", "Fmaj7", "B7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "G7b9", "Cmaj7", "C7b9", "Fmaj7", "Cadd9", "Dm9", "G7", "Em7", "Am7", "D7", "F#dim7", "C", "Caug", "Am7", "G6", "Fm7", "Ebmaj7", "Dbmaj7#11", "Dbmaj7#11", "Cmaj7#5", "Db", "Bb", "B", "C", "Cmaj9"],
  },
  {
      title: 'Skippy',
      composer: 'Thelonious Monk',
      chords: ["D7", "G7", "C7", "F7", "Bb7", "A7", "Ab7", "Db7", "Gb7", "F7", "Bb7", "A7", "Ab7", "G7", "Gb7", "F7", "E7", "Eb7", "Ab7", "G7", "Gb7", "F7", "Bb7", "A7", "Ab7", "F#7", "B7", "E7", "A7", "D7", "G7", "C7", "F7", "Bb7", "A7", "Ab7", "Db7", "Gb7", "F7", "Bb7", "A7", "Ab7", "Db7", "Gb7", "Db7", "C7", "B7", "Bb7", "A7", "Ab7", "G7", "F#7", "B7", "Bb7", "A7", "Ab7", "G7", "Gb7", "F7", "E7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7"],
  },
  {
      title: 'Skylark',
      composer: 'Hoagy Carmichael',
      chords: ["Ebmaj7", "Fm7", "Ebmaj7", "Abmaj7", "Ebmaj7", "A7#11", "Abmaj7", "", "Gm7", "C7", "F7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7", "Cm7", "B7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9", "Fm", "Db7", "Bbm7", "Eb7", "Abmaj7", "", "Gmaj7", "Em7", "A7", "D7", "G6", "Bb7", "Ebmaj7", "Fm7", "Ebmaj7", "Abmaj7", "Ebmaj7", "A7#11", "Abmaj7", "", "Gm7", "C7", "F7", "Fm7", "Bb7", "Eb6", "Bb7#9", "Eb6", "Bb7"],
  },
  {
      title: 'Skyliner',
      composer: 'Charlie Barnet',
      chords: ["C6", "C6", "A7", "A7", "Dm7", "Dm7", "Fm7", "Bb7", "Em7", "Bb7", "Dm7", "G7", "C6", "D7", "Dm7", "G7", "F#m7", "B7", "Emaj7", "Emaj7", "Am7", "D7", "Gmaj7", "Gmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Dm7", "Dm7", "G7", "G7"],
  },
  {
      title: 'Slipped Disc',
      composer: 'Benny Goodman',
      chords: ["Bb7", "Eb7", "Abmaj7", "Bdim7", "Bbm7", "Eb7", "Ab6", "F7", "Bb7", "Eb7", "Abmaj7", "Bdim7", "Bbm7", "Eb7", "Ab6", "F7", "C7", "Fm6", "C7", "Fm6", "Bb7", "Eb7", "Bb7", "Eb7", "Bb7", "Eb7", "Abmaj7", "Bdim7", "Bbm7", "Eb7", "Ab6", "F7", "Bb7", "Eb7", "Abmaj7", "Bdim7", "Bbm7", "Eb7", "Ab6", "", "", "Db", "Ddim7", "Ab", "Ab7", "Db", "Ddim7", "Ab", "Ab7", "Db", "Ddim7", "Ab", "F7", "Bb7", "Eb7"],
  },
  {
      title: 'Slow Hot Wind',
      composer: 'Henry Mancini',
      chords: ["Am9", "Am9", "Am9", "Am9", "Dm9", "Dm9", "Am9", "Am9", "Fmaj7#11", "Fmaj7#11", "Emaj7", "Ebmaj7", "Ebmaj7", "Eb7", "Ab7sus", "Dbmaj7", "Cmaj7", "Bm7", "E7b9", "Am9", "Am9", "Am9", "Am9", "Dm9", "Dm9", "Am9", "Am9"],
  },
  {
      title: 'Smile',
      composer: 'Charles Chaplin',
      chords: ["Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Abdim7", "Gm7", "D7", "Gm7", "Gm7", "Bbm7", "Eb7", "Fmaj7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Abdim7", "Gm7", "D7", "Gm7", "Gm7", "Bbm7", "Eb7", "Fmaj7", "Fmaj7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Smoke Gets In Your Eyes',
      composer: 'Jerome Kern',
      chords: ["Ebmaj7", "Gbdim7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Adim7", "Gm7", "Cm7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Bmaj7", "E7#11", "Ebm7", "Ab7", "Dbm7", "Gb7", "Bmaj7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Gbdim7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Adim7", "Gm7", "Cm7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Smoke Rings',
      composer: 'Gifford-Washington',
      chords: ["Fmaj7", "C7#5", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Gm7b5", "C7", "F6", "Dm7", "Gm7", "C7", "Fmaj7", "C7#5", "", "Bb7", "A7", "Dm7", "G7", "Bbmaj7", "Gm7b5", "C7", "F6", "Bb7", "F6", "C7"],
  },
  {
      title: 'Sno\' Peas',
      composer: 'Phil Markowitz',
      chords: ["Eb7#9", "Abm7", "Bb7#9", "Ebm7", "Eb7#9", "Abm7", "Db7", "Cm", "Cm7", "Em7", "Abm7", "Bm7", "Ebm7", "D7#9", "Db9sus", "Gm", "Bm", "Cm", "Em7", "Am7", "Abm7", "Eb7#9", "Abm7", "Db7", "Cm", "Cm7", "Em7", "Abm7", "Bm7", "Ebm7"],
  },
  {
      title: 'Só Danço Samba',
      composer: 'Antonio-Carlos Jobim',
      chords: ["C6", "F7", "D7", "D7", "Dm7", "G7", "C6", "F7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Am7", "D7", "G7", "G7", "C6", "F7", "D7", "D7", "Dm7", "G7", "C6", "F7"],
  },
  {
      title: 'So In Love',
      composer: 'Cole Porter',
      chords: ["Fm", "Fm", "Gm7b5", "C7b9", "Fm", "Fm", "Bbm7", "Bbm7", "Eb7", "Eb7", "Abmaj7", "Ab7", "Dbmaj7", "G7b9", "Gm7b5", "C7b9", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Bbm7", "Eb7b9", "Abmaj7", "Gm7b5", "C7b9", "Fm", "Fm7", "Dm7b5", "G7b9", "Cmaj7", "C7b9", "Fm", "Fm", "Gm7b5", "C7b9", "Fm", "Fm", "Bbm7", "Bbm7", "Eb7", "Eb7", "Cm7b5", "F7b9", "Bbm7", "Dbm6", "Cm7", "F7b9", "Bm7", "E7", "Bbm7", "Eb7b9", "Ab6", "Ab6", "Gm7b5", "C7b9"],
  },
  {
      title: 'So Many Stars',
      composer: 'Sergio Mendez',
      chords: ["Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Eb7", "Am", "Amaug", "Am6", "Am7", "Am", "Am7", "D7b9", "Gm7", "C7", "Fmaj7", "Am7", "D7", "Bm7", "Bb7#11", "Am7", "D7", "Gm7", "C7", "A13", "A7#5", "Am7", "D7b13", "Gm7", "C7", "Am7", "D7b13", "Gm7", "C7", "Fmaj7", "Fmaj7"],
  },
  {
      title: 'So Nice (Summer Samba)',
      composer: 'Marco Valles',
      chords: ["Fmaj7", "Fmaj7", "Bm7", "E7b13", "Bbmaj7", "Bbmaj7", "Eb7", "Eb7", "", "Am7", "D7b9", "Gm7", "Em7b5", "A7b13", "Dm7", "G7", "Gm7", "Db7", "C7"],
  },
  {
      title: 'So Tender',
      composer: 'Keith Jarrett',
      chords: ["Amaj7", "F#m7", "G#m7", "Gm7", "F#m7", "B7", "Emaj7", "C7#5", "F7b9#5", "Bbm7", "Eb7b9", "Abmaj7", "Cm7b5", "F7b9", "Bbmaj7#5", "Bbmaj7", "Em7b5", "A7b13", "Dm7", "Dm7", "Bbm7", "Eb7", "A7b13", "Dm7", "Bm7", "Bbmaj7", "Amaj7", "F#m7", "Bm7", "E7", "C#m7", "F#7b9", "B13sus", "B13", "Bm7", "E7", "Amaj7", "Bmaj7#11"],
  },
  {
      title: 'So What',
      composer: 'Miles Davis',
      chords: ["Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Ebm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11", "Dm11"],
  },
  {
      title: 'Social Call',
      composer: 'Gigi Gryce',
      chords: ["B7#11", "Bb7b13", "Ebm7", "Ebm7", "Ab7alt", "Dbmaj7", "Fm7", "Em7", "Ebm7", "Eb7", "D7", "Dbmaj7", "Ab7", "Db7", "Gbmaj7", "Gbmaj7", "F#m7", "B7", "Emaj7", "Ebm7", "Ab7#5", "B7#11", "Bb7b13", "Ebm7", "Ebm7", "Ab7alt", "Dbmaj7", "Fm7", "Em7", "Ebm7", "Eb7", "D7", "Dbmaj7", "Gb7", "Fm7", "Bb7", "Ebm7", "Ab7", "Db6"],
  },
  {
      title: 'Softly, As In A Morning Sunrise',
      composer: 'Sigmund Romberg',
      chords: ["Cm7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Ebmaj7", "Ebmaj7", "C7b9", "C7b9", "Fm7", "F#dim7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9"],
  },
  {
      title: 'Solar',
      composer: 'Miles Davis',
      chords: ["Cm6", "Cm6", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dm7b5", "G7b9"],
  },
  {
      title: 'Solitude',
      composer: 'Duke Ellington',
      chords: ["Ebmaj7", "Ebmaj7", "Eb7", "Abmaj7", "Db7#11", "Fm7", "Bb7", "Ebmaj7", "F7", "Bb7", "Ab6", "Adim7", "Eb6", "Eb7", "Ab6", "Adim7", "Eb6", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Eb7", "Abmaj7", "Db7#11", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7"],
  },
  {
      title: 'Some Enchanted Evening',
      composer: 'Richard Rodgers',
      chords: ["C6", "C6", "G7", "G7", "C6", "Gm7", "C7#5", "Fmaj7", "Fmaj7", "A7b9", "Dm7", "Dm7", "Bm7b5", "E7#9", "Am7", "C7", "Fmaj7", "Em7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "G7", "C", "G7", "C6", "G7", "C", "Am7", "D7", "G7", "Am7", "Bbdim7", "G7", "C6", "C6", "G7", "G7", "C6", "Gm7", "C7#5", "Fmaj7", "Fmaj7", "A7b9", "Dm7", "Dm7", "Bm7b5", "E7#9", "Am7", "C7", "Fmaj7", "Em7", "Dm7", "G7", "C6", "C6", "G7", "C", "G7", "C6", "G7", "C", "Dm7", "G7sus", "C6"],
  },
  {
      title: 'Some Other Blues',
      composer: 'John Coltrane',
      chords: ["F7", "Bb7sus", "F7", "B7", "Bb7", "Eb7", "Ab7", "Db7", "C7", "C7", "F7", "C7"],
  },
  {
      title: 'Some Other Spring',
      composer: 'Herzog-Kitchings',
      chords: ["Cmaj7", "G7#5", "Em7b5", "A7b9", "Dm7", "Dm7b5", "Ab7", "G7b9", "C7", "B7", "Bb7", "Bb7", "Eb6", "Ebmaj7", "Eb7#11", "", "D7", "Cdim", "Bb6", "D7", "G7#5", "", "Bm7", "Bbm7", "Am7", "D7", "Bm7", "Bbdim7", "Am7", "D7", "Em7", "A7#5", "D", "C7", "B7", "", "Bb7", "A7", "A7", "", "D7", "G7#5", "Cmaj7", "G7#5", "Em7b5", "A7b9", "Dm7", "Dm7b5", "Ab7", "G7", "C7", "B7", "Bb7", "Bb7", "Am7b5", "Ab7", "C6", "", "D7", "G7", "C6", "Dm7", "G7", ""],
  },
  {
      title: 'Some Other Time',
      composer: 'Leonard Bernstein',
      chords: ["Cmaj7", "G7sus", "Cmaj7", "G7sus", "Cmaj7", "G7sus", "C", "C", "F#m7b5", "Fm7", "Em7", "A7", "Dm7", "G7sus", "Cmaj7", "G7sus", "Cmaj7", "G7sus", "Abmaj7", "Eb7", "Abmaj7", "Eb7", "Abmaj7", "Eb7", "Abmaj7", "Eb7", "Abmaj7", "G7b13", "C", "Em7", "Am7", "A7", "Ab7#11", "Dm7", "G7", "Cmaj7", "G7sus", "Cmaj7", "G7sus", "Cmaj7", "G7sus", "C", "C", "F#m7b5", "Fm7", "Em7", "A7", "Dm7", "G7sus", "Cmaj7", "G7sus", "Cmaj7", "G7sus"],
  },
  {
      title: 'Somebody Loves Me',
      composer: 'George Gershwin',
      chords: ["Fmaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Fmaj7", "Db7", "C7sus", "F6", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "F7", "E7sus", "Am7", "D7b13", "Gm", "Gm", "Gm7", "Gm6", "Gm7", "Em7b5", "A7b9", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Someday My Prince Will Come',
      composer: 'Frank Churchill',
      chords: ["Bbmaj7", "D7#5", "Ebmaj7", "G7b9", "Cm7", "G7b9", "Cm7", "F7", "Dm7", "C#dim7", "Cm7", "F7", "Dm7", "C#dim7", "Cm7", "F7", "Bbmaj7", "D7#5", "Ebmaj7", "G7b9", "Cm7", "G7b9", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Bbmaj7", "G7", "Cm7", "F7"],
  },
  {
      title: 'Someday You\'ll Be Sorry',
      composer: 'Louis Armstrong',
      chords: ["Eb", "Eb", "D7", "D7", "Eb", "Eb", "C7", "C7", "", "Fm", "Bb7", "Eb", "Cm", "F7", "F7", "Bb7", "Bb7", "Bb7#5"],
  },
  {
      title: 'Someone To Watch Over Me',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "Eb7", "Abmaj7", "Abdim7", "Ebmaj7", "Gbdim7", "Bb7", "Edim7", "Fm7", "Gdim", "Am7b5", "Bb7", "G7#5", "C7", "Fm7", "Bb7", "Abmaj7", "Abmaj7", "Abm6", "Eb6", "Am7b5", "D7b9", "G7b13", "C7", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Abdim7", "Ebmaj7", "Gbdim7", "Bb7", "Edim7", "Fm7", "Gdim", "Am7b5", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Sometime Ago',
      composer: 'Sergio Mikanovich',
      chords: ["Cmaj7", "G7sus", "Cmaj7", "G7sus", "Cmaj7", "G7sus", "Em7b5", "A7", "Dm7", "G7", "E7", "Am7", "D7", "D7", "Ebm7", "Ab7", "Dm7", "G7"],
  },
  {
      title: 'Sometimes I\'m Happy',
      composer: 'Vincent Youmans',
      chords: ["F6", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "Cm7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "Am7", "D7", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "Cm7", "F7", "Bbmaj7", "Eb7", "F6", "D7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'Somewhere',
      composer: 'Leonard Bernstein',
      chords: ["Bb", "Bb7", "Eb7", "Ab", "Fm7", "Bb7", "Eb7", "Ab", "Bb", "Bb7", "Gm", "Cm", "Ab", "Db", "Bb", "B", "Abm", "Ebm", "Fm7", "B", "Abm6", "Gb", "F", "Dm7", "Bb", "Bb7", "Eb7", "Ab", "Fm7", "Bb7", "Eb7", "Ab", "Bb", "Bb7", "Gm", "Cm", "Ab", "Db", "Bbm", "Gb", "B", "Ab", "Eb", "Eb7", "Ab"],
  },
  {
      title: 'Song For My Father',
      composer: 'Horace Silver',
      chords: ["Fm7", "Fm7", "Eb7", "Eb7", "Db7", "C7sus", "Fm7", "Fm7", "Eb7", "Eb7", "Fm7", "Fm7", "Eb7", "Db7", "C7", "Fm7", "Fm7"],
  },
  {
      title: 'Song For My Lady',
      composer: 'McCoy Tyner',
      chords: ["Dm7", "G7", "Gm7", "F", "Dm7", "G7", "Gm7", "F", "Dm7", "G7", "Gm7", "F", "Dm7", "G7", "Gm7", "F", "Dbm7", "Dbm7", "Dbm7", "Dbm7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7"],
  },
  {
      title: 'Song For Strayhorn',
      composer: 'Gerry Mulligan',
      chords: ["Dmaj7", "Em7", "Dmaj7", "Em7", "Dmaj7", "Am7", "Dmaj7", "A7sus", "Gmaj7", "A", "Dmaj7", "F7#11", "Cmaj7", "Fmaj7", "F#m7", "B7", "Emaj7", "Bb7", "A7sus", "A7", "Dmaj7", "Em7", "Dmaj7", "Em7", "Dmaj7", "Am7", "Dmaj7", "Am7", "Dmaj7", "A7sus"],
  },
  {
      title: 'Song Is You, The',
      composer: 'Jerome Kern',
      chords: ["Cmaj7", "Ebdim7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Fm7", "Bb7", "Em7", "A7", "Dm7", "G7", "Emaj7", "Emaj7", "F#m7", "B7", "Emaj7", "Emaj7", "A#m7b5", "D#7b9", "G#m7", "G#m7", "C#7", "C#7", "F#7", "F#7", "B7", "B7", "Cmaj7", "Ebdim7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "A7", "Dm7", "G7"],
  },
  {
      title: 'Sonnymoon For Two',
      composer: 'Sonny Rollins',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Cm7", "F7", "Bb7", "G7", "Cm7", "F7"],
  },
  {
      title: 'Soon',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "Ebmaj7", "Gm7b5", "C7b13", "C7", "Fm7", "Fm7", "Fm7b5", "", "Bb7b13", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7#9", "Fm7", "Am7b5", "D7b13", "Gm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Gm7b5", "C7b13", "C7", "Fm7", "Fm7", "Fm7b5", "", "Bb7b13", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "Cm7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Sophisticated Lady',
      composer: 'Duke Ellington',
      chords: ["Bbm7", "Gb7", "F7", "E7", "Eb7", "Abmaj7", "Ab7", "G7", "Gb7", "F7", "Bb7", "Bbm7", "Eb7", "Ab6", "Cm7b5", "F7b9", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "E7b9", "Am7", "D7b9", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Cm7", "Bbm7", "", "Cm7b5", "F7", "Bbm7", "Gb7", "F7", "E7", "Eb7", "Abmaj7", "Ab7", "G7", "Gb7", "F7", "Bb7", "Bbm7", "Eb7", "Ab6", "Cm7b5", "F7b9"],
  },
  {
      title: 'Sorcerer, The',
      composer: 'Herbie Hancock',
      chords: ["Dbmaj7", "Dmaj7", "Em9", "Fmaj7#11", "Dbmaj7", "Dmaj7", "A13#11", "D7b9", "Abm7", "Gm7", "D", "Am7", "Cm7", "Gm", "A7sus", "G"],
  },
  {
      title: 'Soul Eyes',
      composer: 'Mal Waldron',
      chords: ["Cm7", "G7b9", "Cm7", "F7", "Fm7", "Bb7alt", "Gm7b5", "C7b9", "Abmaj7", "Am7b5", "D7b9", "Gmaj7", "Abm7", "Db7", "Gbmaj7", "Fm7", "Bb7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "G7b9", "Cm7", "F7", "Fm7", "Bb7alt", "Gm7b5", "C7b9", "Abmaj7", "Am7b5", "D7b9", "Gm7b5", "C7b9", "Fm7", "Bb7alt", "Ebmaj7", "Dm7b5", "G7b9"],
  },
  {
      title: 'Soultrane',
      composer: 'Tadd Dameron',
      chords: ["Ebmaj7", "Gm7b5", "C7b9", "Fm7", "Db7", "Abm7", "", "Db7", "Ddim", "Ebmaj7", "", "G7", "C7", "F7", "Bb7", "Gm", "F#7", "Fm", "E7", "Gm7", "Am7b5", "D7b9", "Gm7", "C7", "B7#9", "Bbmaj7", "Gm7", "Cm7b5", "F7", "Fm7", "Bbdim7", "B7b5", "", "Bb7", "E7", "Ebmaj7", "Gm7b5", "C7b9", "Fm7", "Db7", "Abm7", "", "Db7", "Ddim", "Ebmaj7", "", "G7", "C7", "F7", "Bb7", "Eb6", "Fm7"],
  },
  {
      title: 'Sound Lee',
      composer: 'Lee Konitz',
      chords: ["Fm7", "Bb7", "Fm7", "E7", "Ebmaj7", "Abmaj7#11", "Gm7", "E7", "Fm7", "Bb7", "Fm7", "E7", "Ebmaj7", "Abmaj7#11", "Am7", "D7", "G", "Bbm7", "Eb7", "Eb7b9", "Gb", "G", "Ab", "Db7", "Gb6", "E7", "Fm7", "Bb7", "Eb7", "C7b9", "Fm7", "Bb7", "E7", "Ebmaj7", "C7"],
  },
  {
      title: 'Spain',
      composer: 'Chick Corea',
      chords: ["Gmaj7#11", "Gmaj7#11", "Gmaj7#11", "Gmaj7#11", "F#7b13", "F#7b13", "F#7b13", "F#7b13", "Em7", "Em7", "A7", "A7", "Dmaj7", "Dmaj7", "Gmaj7#11", "Gmaj7#11", "C#7alt", "C#7alt", "F#7b13", "F#7b13", "Bm7", "Bm7", "B7", "B7"],
  },
  {
      title: 'Speak Like A Child',
      composer: 'Herbie Hancock',
      chords: ["C#7alt", "C#7alt", "G#7alt", "E9sus", "Am7", "Bb13", "Bb7#5", "Bbm9", "Eb13", "Ab13sus", "Ab13sus", "Ab13b9", "G7alt", "G7alt", "Gbmaj7#11", "Gbmaj7#11", "Gbdim7", "Gbdim7", "Eb9sus", "Eb13", "Ebm9", "D7#9", "Db7alt", "C7", "Fmaj7", "Bbm9", "Am9", "E9sus", "C#7alt", "C#7alt", "G#7alt", "E9sus", "Am7b5", "Bb13", "Bb7#5", "A7#5#9", "A13b9", "Ab13", "Ab13b9", "G7alt", "G7alt", "Gbmaj7#11", "Gbmaj7#11", "Gbdim7", "Gbdim7", "Fm", "Dbmaj7#5", "Dbmaj7#5", "Gbmaj7#11", "Gbmaj7#11", "C", "Bb", "C", "Bbm7", "Am9", "E9sus"],
  },
  {
      title: 'Speak Low',
      composer: 'Kurt Weill',
      chords: ["Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7", "Am7b5", "D7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Dm7", "G7", "Gm7", "C7", "F6", "Am7", "D7", "Fm7", "Fm7", "Db7", "Db7", "Ebmaj7", "Ebmaj7", "Db7", "C7", "Am7b5", "D7", "Gm7", "C7", "F6", "Am7", "D7"],
  },
  {
      title: 'Speak No Evil',
      composer: 'Wayne Shorter',
      chords: ["Cm7", "Dbmaj7", "Cm7", "Dbmaj7", "Cm7", "Dbmaj7", "Cm7", "Dbmaj7", "Ebm7", "Em7", "Cm7", "Dm7", "Bbm7", "A7alt", "Bbm7", "A7alt", "Bbm7", "Am7b5", "Ab7", "Gm7", "Gb7#11", "Fm7", "Bb7#11", "D", "Dbmaj7#11", "Cm7", "Dbmaj7", "Cm7", "Dbmaj7", "Cm7", "Dbmaj7", "Cm7", "Dbmaj7", "Ebm7", "Em7", "Cm7", "Dm7", "Bbm7", "A7alt", "Bbm7", "A7alt", "Bbm7"],
  },
  {
      title: 'Spiral',
      composer: 'John Coltrane',
      chords: ["G", "Gb", "F", "E", "Eb", "D", "Gm", "F#7b13", "Bm", "C#m7b5", "F#7b9", "Bm", "Em7", "A7", "G7", "G7", "Bm", "Bm", "Em7", "A7", "Dmaj7", "Em7", "Fmaj7", "A7", "G", "Gb", "F", "E", "Eb", "D", "Gm", "F#7b13", "Bm", "C#m7b5", "F#7b9", "Bm", "Em7", "A7"],
  },
  {
      title: 'Spring Can Really Hang You Up The Most',
      composer: 'Tommy Wolf',
      chords: ["Cmaj7", "Bbmaj7", "Cmaj7", "Bbmaj7", "Em7", "Am7", "Dm7", "G7", "Em7", "A7b13", "F#m7b5", "Fm6", "Em7", "A7", "D7", "", "Dm7", "G7", "Cmaj7", "Bbmaj7", "Gm7", "Cmaj7", "Gm7", "Cmaj7", "Gm7", "Cmaj7", "Gm7", "Cmaj7", "Cm7", "Fmaj7", "Cm7", "Fmaj7", "F#m7", "B7", "Emaj7", "", "Am7", "D7", "Gmaj7", "Fmaj7", "Cmaj7", "Bbmaj7", "Em7", "Am7", "Dm7", "G7", "Em7", "A7b13", "F#m7b5", "Fm6", "Em7", "A7", "D7", "", "Dm7", "G7", "Cmaj7", "Bbmaj7", "Cmaj7", "G7", "Ebm7", "Ab7", "Dm7", "G7", "Em7", "A7", "Dm7", "Cmaj7", "Dm7", "Cmaj7", "Bm7b5", "E7", "Am7", "", "D7", "Dm7", "Bb7", "Em7", "A7", "Dm7", "Dbmaj7", "Cmaj7"],
  },
  {
      title: 'Spring Is Here',
      composer: 'Richard Rodgers',
      chords: ["Abdim7", "Ab6", "Abdim7", "Ab6", "Cm7b5", "F7b9", "Bbm7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bbm7", "C7b13", "Fm6", "Fm6", "Bb7", "Eb7", "Abdim7", "Ab6", "Abdim7", "Ab6", "Cm7b5", "F7b9", "Bbm7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bm7", "E7", "Bbm7", "Eb7", "Cm7", "F7", "Bbm7", "Eb7", "Cm7", "F7", "Dm7b5", "Dbm6", "Cm7", "F7", "Bbm7", "Eb7", "Ab6", "Dbmaj7", "Ab6", "", "Bbm7", "Eb7"],
  },
  {
      title: 'St. James Infirmary',
      composer: 'Joe Primrose',
      chords: ["Fm", "C7", "Fm", "C7", "Fm", "Bbm", "Fm", "C7", "Fm", "C7", "Fm", "C7", "Bbm", "C7", "Fm"],
  },
  {
      title: 'St. Louis Blues',
      composer: 'W.C. Handy',
      chords: ["G7", "C7", "G7", "G7", "C7", "C7", "G7", "G7", "D7", "C7", "G7", "D7"],
  },
  {
      title: 'St. Thomas',
      composer: 'Sonny Rollins',
      chords: ["Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "C6", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "C6", "Em7b5", "A7b9", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "F#dim7", "G7", "C6"],
  },
  {
      title: 'Stablemates',
      composer: 'Benny Golson',
      chords: ["Em7", "A7", "Ebm7", "Ab7", "Dbmaj7", "C7#5", "Abm7", "Db7", "Gbmaj7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebm7", "Ab7#5", "Dbmaj7", "Dbmaj7", "Fm7", "Gb7", "G7#5", "C7", "B7", "Bb7", "A7", "Ab7", "Em7", "A7", "Ebm7", "Ab7", "Dbmaj7", "C7#5", "Abm7", "Db7", "Gbmaj7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebm7", "Ab7#5", "Dbmaj7", "Dbmaj7"],
  },
  {
      title: 'Stairway To The Stars',
      composer: 'Matt Maineck',
      chords: ["C6", "G7#5", "Gm7", "C7", "Fmaj7", "Bb7#11", "Am7", "D7", "Dm7", "G7", "E7", "A7", "Dm7", "G7", "Em7", "F7#11", "Em7", "B7sus", "Em7", "B7b9", "Em7b5", "A7b9", "Dm7", "Eb7#11", "Dm7", "A7sus", "Dm7", "D7", "Dm7", "G7", "C6", "G7#5", "Gm7", "C7", "Fmaj7", "Bb7#11", "Am7", "D7", "Dm7", "G7", "C6", "Am7", "D7", "G7"],
  },
  {
      title: 'Star Dust',
      composer: 'Hoagy Carmichael',
      chords: ["Dbmaj7", "Gb7#11", "F7b9", "Bb7", "Ebm7", "Ab7", "Fm7", "Bbm7", "Gm7", "C7", "Ebm7", "Ab7", "Dbmaj7", "Gb7#11", "F7b9", "Bb7", "Ebm7", "Ab7", "Fm7", "Bbm7", "Ebm7", "Ab7", "Dbmaj7", "Db7#5", "Gbmaj7", "Gbmaj7", "Gbm", "F#m7", "B7", "Dbmaj7", "Fm7", "Bb7", "Ebm7", "Bb7", "Ebm7", "Ab7", "Ebm7", "Ab7", "Dbmaj7", "", "Ebm7", "Edim", "Fm7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab7", "Ebm7", "Ab7", "Db7"],
  },
  {
      title: 'Star Eyes',
      composer: 'Gene DePaul',
      chords: ["Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "Gm7b5", "C7b9", "Fmaj7", "B7", "Bb7", "Abmaj7", "Abmaj7", "Abm7", "Db7", "Gbmaj7", "Gbmaj7", "Fm7", "Bb7sus", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "Gm7b5", "C7b9", "Fmaj7", "B7", "Bb7", "Eb7#9", "D7b9", "Db7#9", "C7#9", "Fm7", "Bb7sus", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'Star-Crossed Lovers, The',
      composer: 'Strayhorn-Ellington',
      chords: ["Gbmaj7", "G9b5", "Dbmaj7", "Bbm7", "Ebm7", "Ab13", "Dbmaj7", "G7b5", "Gbmaj7", "G9b5", "Dbmaj7", "Bbm7", "Gm7b5", "C7b9", "Fm", "Ebm7", "Dbmaj7", "Ebm7", "Dbmaj7", "Ebm7b5", "Ab13", "Ebm7b5", "Ab13", "Db7sus", "Db7sus", "Db13b9", "Gbmaj7", "Gb7#9", "F#m", "Ab13", "Dbmaj7", "Db9#5", "Gbmaj7", "Eb7", "Dbmaj7", "Ab7sus", "Eadd9", "Dbmaj7", "Bb7", "Eb7", "", "Ab7", "G7"],
  },
  {
      title: 'Stars Fell On Alabama',
      composer: 'Frank Perkins',
      chords: ["Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Em7", "A7b9", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "C6", "A7", "Dm7", "Dm", "Bm7b5", "E7", "Am7", "Am7", "F#m7", "B7", "Emaj7", "", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Em7", "A7b9", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7"],
  },
  {
      title: 'Stella By Starlight',
      composer: 'Victor Young',
      chords: ["Em7b5", "A7b9", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Bbmaj7", "Em7b5", "A7b9", "Dm7", "Bbm7", "Eb7", "Fmaj7", "Em7b5", "", "Ebmaj7#11", "D7b9", "G7b13", "G7b13", "Cm7", "Cm7", "Ab7#11", "Ab7#11", "Bbmaj7", "Bbmaj7", "Em7b5", "A7b9", "Dm7b5", "G7b9", "Cm7b5", "F7b9", "Bbmaj7", "Bbmaj7"],
  },
  {
      title: 'Stolen Moments',
      composer: 'Oliver Nelson',
      chords: ["Cm7", "Dm7", "Ebmaj7", "Dm7", "Cm7", "Cm6", "Cm7", "Cm6", "Fm7", "Fm6", "Cm7", "Cm6", "Dm", "D#m", "Em", "Fm", "F#m", "Fm", "Em", "Ebm", "Dm7", "D#dim7", "C7", "Fm", "Cm", "G7"],
  },
  {
      title: 'Stompin\' At The Savoy',
      composer: 'Webb-Goodman-Sampson',
      chords: ["Dbmaj7", "Dbmaj7", "Ab7", "Dbmaj7", "Dbmaj7", "Ddim7", "Ebm7", "Ab7", "Db6", "Bbm7", "Ebm7", "Ab7", "Gb7", "G7", "Gb7", "B7", "C7", "B7", "E7", "F7", "E7", "A7", "Ab7", "Dbmaj7", "Dbmaj7", "Ab7", "Dbmaj7", "Dbmaj7", "Ddim7", "Ebm7", "Ab7", "Db6", "Ebm7", "Ab7"],
  },
  {
      title: 'Stormy Weather',
      composer: 'Harold Arlen',
      chords: ["Gmaj7", "E7", "Am7", "D7", "Gmaj7", "E7", "Am7", "D7", "G6", "E7", "Am7", "D7#5", "G6", "E7#9", "Am7", "D7", "C6", "C#dim7", "G6", "G7", "C6", "C#dim7", "G6", "G7", "C6", "C#dim7", "G6", "E7", "Bm7", "E7", "A7", "D7", "Gmaj7", "E7", "Am7", "D7", "Gmaj7", "E7", "Am7", "D7", "G6", "E7", "Am7", "D7#5", "G6", "E7#9", "Am7", "D7"],
  },
  {
      title: 'Straight Life',
      composer: 'Freddie Hubbard',
      chords: ["F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7", "F7", "Eb7"],
  },
  {
      title: 'Straight No Chaser',
      composer: 'Thelonious Monk',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "F7", "F7", "Bb7", "F7"],
  },
  {
      title: 'Straight Street',
      composer: 'John Coltrane',
      chords: ["Bm7", "E7", "Am7", "D7", "Gm7", "C7", "Fm7", "Bb7", "Ebm7", "E7", "Gb7", "D7", "Fm7", "Bb7", "Ebm7", "Ebm7", "Dbm7", "Gb7", "Ebm7", "Ab7", "Em7", "A7", "Dmaj7", "C7#11", "Bm", "C#7", "F#m7", "B7", "Gm7", "C7", "Bm7", "E7", "Am7", "D7", "Gm7", "C7", "Fm7", "Bb7", "Ebm7", "E7", "Gb7", "D7", "Fm7", "Bb7", "Ebm7", "Ebm7"],
  },
  {
      title: 'Straighten Up And Fly Right',
      composer: 'Cole-Mills',
      chords: ["Ab", "Ab", "Ab", "Ab", "Db", "Ab", "Bbm7", "Eb7", "Ab", "Ab", "Ab", "Ab", "Db", "Ab", "Bbm6", "Eb7", "C7", "C7", "F7", "F7", "Bb7", "Bb7", "Eb7", "Eb7", "Ab", "Ab", "Ab", "Ab", "Db", "Ab", "Bbm7", "Eb7", "Ab", "Ab", "Ab", "Ab", "Db", "Ab", "Bbm7", "Eb7", "Ab6", ""],
  },
  {
      title: 'Strangers In The Night',
      composer: 'Bert Kaempfert',
      chords: ["Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "F", "Abdim7", "Gm6", "Eb", "Gm6", "Eb", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "Gm7", "C7b9", "Fmaj7", "Fmaj7", "Am7b5", "Am7b5", "D7b9", "D7b9", "Gm7", "Bbm6", "F", "Dm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fmaj7", "F", "Abdim7", "Gm7", "C7b9", "F6", "F6"],
  },
  {
      title: 'Street Of Dreams',
      composer: 'Victor Young',
      chords: ["Ebm6", "B7", "Bb7b13", "Ebm6", "B7", "Bb7b13", "Ebm6", "Db7", "B7", "Bb7", "Ebm6", "A9#11", "Bbm7b5", "Eb7b9", "Abm6", "Bb7b13", "E9", "Ebm6", "B7", "Bb7b13", "Ebm", "Db7", "B7", "Bb7", "Cm7b5", "B7", "Fm7", "Bb7", "F7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7", "C7#5", "F7", "Fm7", "Bb7", "Ebmaj7", "Bb7#5", "Bbm7", "Eb7", "Ab6", "Db7", "Ebmaj7", "Db7", "C7b9", "F7", "B7#5", "Fm7", "Bb7", "Eb6", ""],
  },
  {
      title: 'Strike Up The Band',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "Ebmaj7", "Edim7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Adim7", "Adim7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7"],
  },
  {
      title: 'Strollin\'',
      composer: 'Horace Silver',
      chords: ["Dbmaj7", "Dbmaj7", "Em7", "A7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Abm7", "Db7", "Gm7", "C7", "Fm7", "Bbm7", "Ebm7", "Ab7", "Dbmaj7", "Bbm7", "Eb7#11", "Ab7", "Dbmaj7", "Gb7", "Fm7", "Bb7", "Ebm7", "Ab7", "Dbmaj7#11"],
  },
  {
      title: 'Struttin\' With Some Barbecue',
      composer: 'Lillian Armstrong',
      chords: ["Fmaj7", "Fmaj7", "F6", "F6", "Fmaj7", "Fmaj7", "D7", "D7", "Gm7", "C7", "C#dim", "Dm7", "Dm7", "G7", "G7", "C7", "C7", "Fmaj7", "Fmaj7", "F6", "F6", "Cm7", "F7", "Bb6", "Bb6", "Bb6", "Bbm6", "Fmaj7", "D7", "Gm7", "C7", "F6", "Db7", "C7"],
  },
  {
      title: 'Subconscious Lee',
      composer: 'Lee Konitz',
      chords: ["Gm7b5", "C7b9", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Ab7", "Ab7", "G7", "G7", "Gm7b5", "C7b9", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7"],
  },
  {
      title: 'Suddenly It\'s Spring',
      composer: 'Jimmy Van-Heusen',
      chords: ["Cm7", "D7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Dm7b5", "G7b9", "Cm7", "D7", "Gm7", "C7", "C#dim7", "Dmaj7", "Bm7", "Em7", "A7", "D6", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "Dm7", "G7", "Cm7", "Dm7b5", "G7b13", "Cm7", "D7", "Gm7", "C7", "Cm7", "F7", "Bb6", "Dm7b5", "G7b9"],
  },
  {
      title: 'Sugar',
      composer: 'Stanley Turrentine',
      chords: ["Cm7", "Dm7b5", "G7b9b13", "Cm7", "G7b9b13", "Cm7", "Cm7", "Dm7b5", "G7b9b13", "Cm7", "Gb7#11", "Fm7", "Eb7", "Dm7b5", "G7b9b13", "Ab7#11", "G7b9b13"],
  },
  {
      title: 'Summer Band Camp',
      composer: 'Mick Goodrick',
      chords: ["Cmaj7", "Cmaj7", "Abmaj7#11", "Abmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Dmaj7#11", "Dmaj7#11", "Bb7", "Bb7", "Emaj7#11", "Emaj7#11", "Dbmaj7", "Dbmaj7", "F7", "F7", "Bmaj7", "Bmaj7", "G7sus", "G7sus", "Ebmaj7", "Ebmaj7", "A7", "A7"],
  },
  {
      title: 'Summer In Central Park',
      composer: 'Horace Silver',
      chords: ["F69", "A7b9#5", "Dm9", "G13", "Db69", "Gb69", "Gm9", "A13b9", "Dmaj9", "Dmaj9", "Dm9", "Dm9", "Dmaj9", "Dmaj9", "Gm7", "C7b9", "F69", "A7b9#5", "Dm9", "G13", "Db69", "Gb69", "A69", "D69", "Db69", "Db69", "Gm7", "C7b9", "Ab69", "Gb69", "F69", "Gm7", "C7b9"],
  },
  {
      title: 'Summer Knows, The',
      composer: 'Michel Legrand',
      chords: ["Fm9", "C7b9", "Fm9", "Dm7b5", "Bbm9", "F7b9", "Bbm9", "Gm7b5", "C7b9sus", "C7b9", "Fmaj7", "Bbm6", "Fmaj7", "F9sus", "F7b9", "Bbmaj7", "Bm7b5", "E7b9", "Amaj7", "E7b9", "Amaj7", "Eb7b9", "Abmaj7", "Eb7b9", "Abmaj7", "D7b9", "Gmaj7", "Gm7b5", "C7b9", "Fmaj7", "Bbm6", "Fmaj7", "Bbm6", "Fm7", "Fdim7", "C7b9sus", "Fm", "Fm"],
  },
  {
      title: 'Summer Night',
      composer: 'Harry Warren',
      chords: ["Cm7", "G7b9", "Cm7", "G7b9", "Cm7", "Bm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7#11", "", "Dm7b5", "G7b9", "Dm7b5", "G7b9", "Cm7", "F7", "Ab7#11", "G7b9", "Bb7", "Eb6"],
  },
  {
      title: 'Summer Serenade',
      composer: 'Benny Carter',
      chords: ["Dbmaj7", "G7", "Cmaj7", "F#7", "Bmaj7", "F7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "A7", "Dmaj7", "Ab7", "Dbmaj7", "Bmaj7", "Amaj7", "Ab7sus", "Ab7", "Dbmaj7", "G7", "Cmaj7", "F#7", "Bmaj7", "F7", "Bb7", "Bm7b5", "Fmaj7", "C7", "F6", "Ab7", "Dbmaj7", "C7b9", "Bm7b5", "Bbm6", "F6", "Ab7"],
  },
  {
      title: 'Summer Wind, The',
      composer: 'Meyer-Mercer',
      chords: ["Fmaj7", "F#dim7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Fmaj7", "F7", "F7", "Bbmaj7", "Eb7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Am7", "D7", "Gmaj7", "G#dim7", "Am7", "D7", "Am7", "D7", "Gmaj7", "Gmaj7", "G7", "G7", "Cmaj7", "F7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Bm7", "E7", "Amaj7", "A#dim7", "Bm7", "E7", "Bm7", "E7", "Amaj7", "Amaj7", "A7", "A7", "Dmaj7", "G7", "C#m7", "F#7", "Bm7", "E7", "Amaj7", "Gm7", "C7"],
  },
  {
      title: 'Summertime',
      composer: 'George Gershwin',
      chords: ["Am7", "Bm7b5", "E7b13", "Am7", "Am7", "A7b9", "Dm7", "F7", "Bm7b5", "E7b13", "Am7", "Bm7b5", "E7b13", "Am7", "D7", "G7", "Cmaj7", "Am7", "Bm7b5", "E7b13", "Am7", "Bm7b5", "E7b13"],
  },
  {
      title: 'Sun down',
      composer: 'Wes Montgomery',
      chords: ["A7", "D7", "A7", "Em7", "A7#5", "D7", "D7", "A7", "C#m7", "F#7b9", "Bm7", "C#m7", "Dmaj7", "Dm7", "C#m7", "Cm7", "Bm7", "E7#9", "A7", "D7", "A7", "Em7", "A7#5", "D7", "D7", "A7", "C#m7", "F#7b9", "Bm7", "E7", "A7", "F#7b9", "B7", "E7#9"],
  },
  {
      title: 'Sunny',
      composer: 'Bobby Hebb',
      chords: ["Am7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "C7", "Fmaj7", "Bb7", "Bm7b5", "E7b9", "Am7", "E7b9"],
  },
  {
      title: 'Sunshower',
      composer: 'Kenny Barron',
      chords: ["Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5", "Dm7", "Dm7", "E7", "E7", "Fmaj7", "Fmaj7", "Bm7b5", "E7alt", "Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5", "Am7", "Bm7b5"],
  },
  {
      title: 'Surrey With The Fringe On The Top',
      composer: 'Richard Rodgers',
      chords: ["Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Am7b5", "D7", "Gm7", "C7", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Eb6", "Gm7", "C7", "F6", "D7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Am7b5", "D7", "Gm7", "C7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Bb6"],
  },
  {
      title: 'Sway',
      composer: 'Ruiz-Gimbel',
      chords: ["Am7b5", "D7", "Am7b5", "D7", "Gm7", "Gm7", "Eb7", "D7", "Eb7", "D7", "Gm7", "Gm7", "F7", "F7", "Bbmaj7", "Bbmaj7", "D7", "D7", "Gm7", "D7", "Am7b5", "D7", "Am7b5", "D7", "Gm7", "Gm7", "Eb7", "D7", "Eb7", "D7", "Gm7", "Gm7"],
  },
  {
      title: 'Sweeping Up',
      composer: 'Steve Swallow',
      chords: ["D7", "Gmaj7", "F#m7", "Bm", "Em7", "Bm", "Am7"],
  },
  {
      title: 'Sweet And Lovely',
      composer: 'Arnheim-Daniels-Tobias',
      chords: ["Gm7", "C7", "Gm7", "C7", "F7", "Bbmaj7", "Eb7", "Cmaj7", "G7", "C6", "Fm7", "Bb7", "Cmaj7", "Fm7", "Bb7", "Cmaj7", "Abm7", "Db7", "Ebmaj7", "Ebm7", "Ab7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "F7", "Bbmaj7", "Eb7", "Cmaj7", "G7", "C6"],
  },
  {
      title: 'Sweet Georgia Bright',
      composer: 'Charles Lloyd',
      chords: ["C7", "C7", "Bb7", "Bb7", "C7", "C7", "Bb7", "Bb7", "Eb7", "Eb7", "Eb7", "Eb7", "D7", "Db7", "C7", "C7"],
  },
  {
      title: 'Sweet Georgia Brown',
      composer: 'Pinkard-Casey-Bernie',
      chords: ["F7", "F7", "F7", "F7", "Bb7", "Bb7", "Bb7", "Bb7", "Eb7", "Eb7", "Eb7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9"],
  },
  {
      title: 'Sweet Lorraine',
      composer: 'Cliff Burwell',
      chords: ["G6", "F7", "E7", "", "Am7", "", "D7", "B7", "Em7", "Eb7", "Dm7", "G7", "C7", "B7b9", "E7", "A7", "Am7", "D7", "Bm7", "E7", "Am7", "D7#5", "C6", "E7", "Am7", "Ab7", "Gm7", "C7", "Fmaj7", "E7", "Am7", "Ab7", "Gm7", "C7", "Fmaj7", "E7", "Eb7#11", "D7", "Fmaj7", "E7", "Eb7#11", "D7", "G6", "F7", "E7", "", "Am7", "", "D7", "B7", "Em7", "Eb7", "Dm7", "G7", "C7", "B7b9", "E7", "A7", "Am7", "D7", "G6", "", "C7", "C#dim", "G6", "D7"],
  },
  {
      title: 'Sweet Sue, Just You',
      composer: 'Harris-Young',
      chords: ["Am7", "D7", "Am7", "D7", "G6", "G#dim7", "Am7", "D7", "G6", "Bm7b5", "E7b9", "Dm7", "G7", "Bm7b5", "E7b9", "Am", "Am", "Am", "D7", "F7", "Bm7b5", "E7b9", "Am7", "D7", "Am7", "D7", "G6", "C7", "G6", "Bm7b5", "E7b9"],
  },
  {
      title: 'Sweetest Sounds, The',
      composer: 'Richard Rodgers',
      chords: ["Dm7", "Dm7", "Gm7", "Gm7", "Bb7#11", "A7#11", "Dm7", "Em7b5", "A7b9", "Dm7", "Dm7", "Gm7", "Gm7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "Dm7", "Gm7", "Gm7", "Bb7#11", "A7#11", "Cm7", "F7", "Bbmaj7", "Bm7b5", "E7b9", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bb6", "Bb6", "Gm7", "C7sus", "C7", "F6", "F6", "Em7b5", "A7b9"],
  },
  {
      title: 'Swinging At The Haven',
      composer: 'Ellis Marsalis',
      chords: ["Bb13sus", "Bb13sus", "Bb13sus", "Bb13sus", "Ab13sus", "Ab13sus", "Ab13sus", "Ab13sus", "Dbmaj7", "Gm7b5", "C7b9", "Fmaj7", "Fmaj7", "Bbm7", "Eb7sus", "Eb7", "Abmaj7", "Gm7", "C7b9"],
  },
  {
      title: 'Swinging Shepherd Blues, The',
      composer: 'Koffman-Roberts-Jacobson',
      chords: ["Bb6", "Bb6", "Bb6", "Bb6", "Eb7", "Eb7", "Bb7", "", "Cm7", "C#dim", "Bb", "G7#9", "Cm7", "F7", "Bb7", "", "Eb7", "Gb7", "F7", "Bb7"],
  },
  {
      title: 'Tadd\'s Delight',
      composer: 'Tadd Dameron',
      chords: ["Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "Cm7b5", "F7", "Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Gb7#11", "Abmaj7", "F7b9", "Bb7#11", "Bb7#11", "Eb7", "Cm7", "F7", "Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "Cm7b5", "F7", "Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Gb7#11", "Abmaj7", "Cm7", "F7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "F7b9"],
  },
  {
      title: 'Take Five',
      composer: 'Paul Desmond',
      chords: ["Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Bmaj7", "Abm6", "Bbm7", "Ebm7", "Abm7", "Db7", "Gbmaj7", "Bmaj7", "Abm6", "Bbm7", "Ebm7", "Abm7", "Db7", "Fm7b5", "Bb7b9", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7", "Ebm", "Bbm7"],
  },
  {
      title: 'Take The A Train',
      composer: 'Billy Strayhorn',
      chords: ["C6", "C6", "D7#11", "D7#11", "Dm7", "G7", "C6", "Dm7", "G7", "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "D7", "D7", "Dm7", "G7", "G7b9", "C6", "C6", "D7#11", "D7#11", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Taking A Chance On Love',
      composer: 'Vernon Duke',
      chords: ["Fmaj7", "Dm7", "Gm7", "D7", "Gm7", "C7", "Fmaj7", "A7", "Dm7", "G7", "Gm7", "C7", "Am7", "Ab7", "Gm7", "C7", "Cm7", "F7", "Bb6", "G7", "Cm7", "F7", "Bbmaj7", "Bbm7", "Eb7", "Ab6", "Adim7", "Bbm7", "Bdim7", "C7", "Fmaj7", "Dm7", "Gm7", "D7", "Gm7", "C7", "Fmaj7", "A7", "Dm7", "G7", "Gm7", "C7", "F6", "", "", ""],
  },
  {
      title: 'Tangerine',
      composer: 'Victor Schertzinger',
      chords: ["Gm7", "C7", "F6", "Bb7", "Am7", "D7#9", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "D7b9", "Gm7", "C7", "F6", "Bm7b5", "E7b9", "Amaj7", "F#m7", "Bm7", "E7", "A7", "D7b9", "Gm7", "C7", "F6", "Bb7", "Am7", "D7#9", "Gm7", "C7", "Gm7", "C7", "Eb7", "D7b13", "Gm7", "Em7b5", "A7#9", "Dm7", "G7", "Gm7", "C7", "F6", "D7#9"],
  },
  {
      title: 'Tautology',
      composer: 'Lee Konitz',
      chords: ["Fmaj7", "A7b9", "Dm7", "D7b13", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "", "Bb6", "", "Fmaj7", "D7b13", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Am7", "D7", "G7", "C7", "Fmaj7", "A7b9", "Dm7", "D7b13", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Tea For Two',
      composer: 'Vincent Youmans',
      chords: ["Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Cm7", "F7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Cm7", "F7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Cm7b5", "F7b9", "Bbm7", "Cdim7", "Dbmaj7", "Cdim7", "Bbm7", "Bbm7", "Gb7", "Cm7", "Bdim7", "Bbm7", "Eb7", "Ab6", "Cm7b5", "F7b9"],
  },
  {
      title: 'Teach Me Tonight',
      composer: 'Gene DePaul',
      chords: ["Ebmaj7", "Ab7", "Gm7", "C7b13", "Fm7", "Bb7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7", "Fm7", "Bb7", "Gm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7", "C7b13", "Fm7", "Bb7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Tell Me A Bedtime Story',
      composer: 'Herbie Hancock',
      chords: ["Gmaj7", "Gmaj7", "F#m7", "F#m7", "Gmaj7", "Gmaj7", "F#m7", "F#m7", "Gmaj7", "Gmaj7", "F#m7", "F#m7", "Gmaj7", "F#m7", "Cmaj7#11", "Cmaj7#11", "Bmaj7", "Gmaj7", "Emaj7", "Cmaj7#11", "Bmaj7", "Gmaj7", "Emaj7", "Cmaj7#11", "B7sus", "B7#5", "Emaj7", "E7#9", "Eb7#9", "Dmaj7", "Db7#9", "Cmaj7#11", "Cmaj7#11", "Bmaj7", "Gmaj7", "Emaj7", "Cmaj7#11", "Bmaj7", "Gmaj7", "Emaj7", "Cmaj7#11", "B7sus", "A7sus", "Abm7", "Em7", "Dbm7", "Ebm7", "Em7", "F#m7", "Gmaj7#11", "Gmaj7#11", "F#m7", "F#m7", "Em7", "A7", "Dmaj7", "Cmaj7#11", "Bmaj7", "Gmaj7", "Emaj7", "Cmaj7#11", "Bmaj7", "Gmaj7", "Emaj7", "Cmaj7#11", "Emaj7", "Cmaj7", "Bmaj7", "Gmaj7", "Emaj7", "Cmaj7#11"],
  },
  {
      title: 'Tempus Fugit',
      composer: 'Bud Powell',
      chords: ["Gm7", "A7b9", "Dm7", "A7b9", "Dm7", "Gm7", "A7b9", "Dm7", "E7", "A7b9", "Dm7", "Em7b5", "A7#9", "Dm7", "E7#9", "A7b13", "A7b13", "D7b13", "D7b13", "Gm7", "A7b9", "Dm7", "A7b9", "Dm7", "Gm7", "A7b9", "Dm7", "E7", "A7b9", "Dm"],
  },
  {
      title: 'Tenderly',
      composer: 'Walter Gross',
      chords: ["Ebmaj7", "Ab7", "Ebm7", "Ab7", "Fm7", "Db7#11", "Ebmaj7", "Gm7b5", "C7b9", "Fm7b5", "Bb7", "Fm7b5", "Bb7", "Bdim7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Ebm7", "Ab7", "Fm7", "Db7#11", "Ebmaj7", "Gm7b5", "C7b9", "Fm7b5", "Bb7", "Bdim7", "Cm7", "F7", "F#dim7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Tenor Madness',
      composer: 'Sonny Rollins',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Cm7", "F7", "Bb7", "F7"],
  },
  {
      title: 'Thanks For The Memory',
      composer: 'Leo Robin',
      chords: ["Gm7", "C7", "F6", "F6", "F#dim7", "Gm7", "C7", "F6", "", "F#dim7", "Gm7", "Adim7", "Bb6", "Gm7", "C7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Adim7", "Cmaj7", "Am7", "Dm7", "G7", "Gm7", "C7#5", "Gm7", "C7", "F6", "F6", "F#dim7", "Gm7", "C7", "F6", "", "F#dim7", "Gm7", "Adim7", "Bb6", "Gm7", "C7", "F6", "D7b9"],
  },
  {
      title: 'That Old Feeling',
      composer: 'Brown-Fain',
      chords: ["C6", "C6", "Em7b5", "", "A7b9", "", "Dm7", "A7b9", "Dm7", "Dm7b5", "", "G7", "", "Am7", "E7b13", "Em7b5", "A7", "D7", "D7", "Dm7b5", "G7", "C6", "C6", "Em7b5", "", "A7b9", "", "Dm7", "A7b9", "Dm7", "Fm6", "E7", "Em7b5", "", "A7b9", "", "Dm7", "Fm6", "", "Cmaj7", "A7", "Dm7", "G7", "C6"],
  },
  {
      title: 'That Ole Devil Called Love',
      composer: 'Doris Fisher',
      chords: ["Bbm7", "Eb7", "Ab6", "Cm7", "F7", "Bbm7", "Bbm7b5", "Eb7", "Ab6", "Bdim7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab6", "B7", "Bbm7", "Eb7", "Ab6", "C7b9", "Fm6", "Gdim7", "Fm6", "Fm6", "Bb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab6", "Cm7", "F7", "Bbm7", "Bbm7b5", "Eb7", "Bbm7", "", "Bbm7", "Eb7", "Ab6"],
  },
  {
      title: 'That\'s All',
      composer: 'Haymes-Brandt',
      chords: ["Bbmaj7", "Cm7", "Dm7", "", "Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Em7b5", "Ebm7", "Bbmaj7", "G7#9", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Gm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Cm7", "Dm7", "", "Cm7", "F7", "Bbmaj7", "Eb7", "Dm7", "G7", "Em7b5", "Ebm7", "Bbmaj7", "G7#9", "Cm7", "F7", "Bb6", "F7"],
  },
  {
      title: 'That\'s Amore (That\'s Love)',
      composer: 'Warren-Brooks',
      chords: ["Bb", "Bbmaj7", "Bb6", "Dbdim7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "Bb6", "Cm7", "F7", "Bb", "Bbmaj7", "Bb6", "Dbdim7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'That\'s Life',
      composer: 'Kay-Gordon',
      chords: ["Gmaj7", "F#m7", "B7", "Em7", "A7", "Gmaj7", "B7", "Em7", "A7", "Am7", "D7", "Gmaj7", "F#m7", "B7", "Em7", "A7", "Gmaj7", "", "F#m7", "Fm7", "Em7", "A7", "D7", "G6", "G7", "G7", "C6", "C6", "A7", "A7", "D7", "D7", "Gmaj7", "F#m7", "B7", "Em7", "A7", "Gmaj7", "", "Fm7b5", "B7", "Em7", "A7b9", "D7b13", "G6"],
  },
  {
      title: 'Thelonious',
      composer: 'Thelonious Monk',
      chords: ["Bb", "Ab7", "Gb7", "F7sus", "E7b5", "Eb7", "D7#5", "Db7", "C7sus", "F7sus", "Gb", "B7b5b9", "Bb7", "Eb7", "Gb7", "F7", "D7", "Ebm7", "Ab7", "D7#5", "Db7", "Db9", "G7#5", "C7b5", "F7sus", "Bb", "Ab7", "Gb7", "F7sus", "E7b5", "Eb7", "D7#5", "Db7", "C7sus", "F7sus", "Gb", "B7b5b9", "Bb7", "Eb7", "Gb7", "F7", "Cm11", "F7", "Bbmaj7"],
  },
  {
      title: 'Them There Eyes',
      composer: 'Tracy-Tauber-Pinkard',
      chords: ["Abmaj7", "Abmaj7", "Abmaj7", "Abmaj7", "Ab6", "F7", "Bb7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bb7", "Bb7", "Eb7", "Eb7", "Abmaj7", "Abmaj7", "Abmaj7", "Abmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Dbmaj7", "Ddim7", "Abmaj7", "Bb7", "Eb7", "Abmaj7", "F7", "Bb7", "Eb7", "Ab6", "Eb7"],
  },
  {
      title: 'Theme From Family Guy',
      composer: 'Murphy-MacFarlane-Zuckerman',
      chords: ["F", "G7", "Gm7", "C7", "F", "F7", "Bb", "Bdim7", "F", "D7", "G9", "C", "B9", "Bb", "Bdim7", "F", "D7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "Em7b5", "A7", "Dm7", "G7", "C7", "C#7", "Bb", "C7", "F", "", "Bb", "C7", "F"],
  },
  {
      title: 'Theme, The',
      composer: 'Miles Davis',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Fm7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'There Is No Greater Love',
      composer: 'Isham Jones',
      chords: ["Bbmaj7", "Eb7", "Ab7#11", "G7", "C7", "C7", "Cm7", "F7", "Am7b5", "D7b9", "Gm6", "Am7b5", "D7b9", "Gm6", "Am7b5", "D7b9", "Gm6", "C7", "F7", "Bbmaj7", "Eb7", "Ab7#11", "G7", "C7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'There Will Never Be Another You',
      composer: 'Harry Warren',
      chords: ["Ebmaj7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Bbm7", "Eb7", "Abmaj7", "Db7#11", "Ebmaj7", "Cm7", "F7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Bbm7", "Eb7", "Abmaj7", "Db7#11", "Ebmaj7", "Am7b5", "D7", "Ebmaj7", "Ab7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'There\'ll Be Some Changes Made',
      composer: 'Benton Overstreet',
      chords: ["G7", "G7", "C7", "C7", "D7", "G7", "C7", "C7", "F7", "G7", "G7", "C7", "C7", "D7", "G7", "C7", "F7", "Bb6", "G7", "C7", "F7", "Bb6", "", "A7", "Ab7"],
  },
  {
      title: 'There\'s A Lull In My Life',
      composer: 'Harry Revel',
      chords: ["Fmaj7", "", "Gm7", "Am", "Bbmaj7", "Am7", "Gm7", "", "Am7", "Bb", "Am7", "Gm7", "F6", "", "Gm7", "Am", "Bbmaj7", "", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Ebm7", "Ab7", "Ebm7", "Ab7", "Dbmaj7", "Ab7sus", "Dbmaj7", "Fmaj7", "F#dim7", "Gm7", "C7", "F#dim7", "Gm7", "C7", "Fmaj7", "", "Gm7", "Am", "Bbmaj7", "Am7", "Gm7", "", "Am7", "Bb", "Am7", "Gm7", "F6", "", "Gm7", "Am", "Bbmaj7", "", "Gm7", "C7", "Am7", "D7", "Abm7", "Db7", "Am7", "Ab7", "Gm7", "C7", "F6", "F6", ""],
  },
  {
      title: 'There\'s A Small Hotel',
      composer: 'Richard Rodgers',
      chords: ["Gmaj7", "Gmaj7", "Gmaj7", "C7", "Bm7", "Bbdim7", "Am7", "Abdim7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Cmaj7", "Dm7", "G7", "Cmaj7", "Bm7", "E7b9", "Am7", "Bm7", "E7b9", "F7", "E7", "Am7b5", "D7", "Gmaj7", "Gmaj7", "Gmaj7", "C7", "Bm7", "Bbdim7", "Am7", "Abdim7", "Am7", "D7", "Gmaj7", "Am7", "D7"],
  },
  {
      title: 'There\'s No You',
      composer: 'Hal Hopper',
      chords: ["Fmaj7", "Eb7", "Fmaj7", "Db7", "Fmaj7", "Am7", "Abdim7", "Gm7", "C7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "F7#5", "Bbmaj7", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Eb7", "Fmaj7", "Db7", "Fmaj7", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", ""],
  },
  {
      title: 'These Foolish Things',
      composer: 'Strachey-Link',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "", "G7", "C7", "F7", "Fm7", "Bb7", "Gm7", "Em7b5", "Am7b5", "D7b9", "Gm7", "C7", "F7", "Bbmaj7", "Gm7", "Cm7", "F7", "Bb7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "", "G7", "C7", "F7", "Bb7", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'They All Laughed',
      composer: 'George Gershwin',
      chords: ["Gmaj7", "Em7", "Am7", "D7", "Am7", "D7", "Gmaj7", "D7sus", "Gmaj7", "Em7", "Am7", "D7", "G6", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "G7", "F#7b13", "Bm7", "E7", "Dmaj7", "Bm7", "Em7", "A7", "Am7", "D7", "G7", "Dm7", "G7", "Bm7b5", "E7b13", "A7", "Em7", "A7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "B7b9", "E7b13", "C#m7b5", "Cm6", "Bm7", "E7", "Am7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'They Can\'t Take That Away From Me',
      composer: 'George Gershwin',
      chords: ["Ebmaj7", "Fm7", "Gm7", "Gbdim7", "Fm7", "Bb7sus", "Bbm7", "Eb7", "Abmaj7", "", "Gm7", "C7", "Fm7", "Bb7sus", "Gm7", "D7b9", "Gm7", "D7b9", "Gm7", "Em7b5", "Am7b5", "D7b9", "Gm7", "D7b9", "Gm7", "C7", "F7", "Bb7sus", "Ebmaj7", "Fm7", "Gm7", "Gbdim7", "Fm7", "Bb7sus", "Bbm7", "Eb7", "Abmaj7", "Bb7", "Eb6", "Abm6", "G7", "C7", "F7", "Bb7", "Eb6", "Bb7sus"],
  },
  {
      title: 'They Didn\'t Believe Me',
      composer: 'Jerome Kern',
      chords: ["Am7", "D7", "Gmaj7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "Em7", "Bm7", "C#m7b5", "F#7b13", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "F7#11", "E7", "Am7", "D7", "Gmaj7", "Am7", "Bm7", "E7", "Am7", "D7", "G6", "G6"],
  },
  {
      title: 'They Say It\'s Wonderful',
      composer: 'Irving Berlin',
      chords: ["Gm7", "Gm7b5", "C7b9", "Fmaj7", "Am7", "Abdim7", "Gm7b5", "C7b9", "Fmaj7", "Am7", "D7b9", "Bbmaj7", "Eb7#11", "Fmaj7", "Gm7", "Am7", "E7", "Am7", "Bm7b5", "E7b9", "Am7", "D7", "Abm7", "Db7", "Gm7", "Gm7b5", "C7b9", "Am7b5", "D7b13", "Gm7", "C7", "F6", "D7b9"],
  },
  {
      title: 'Things Ain\'t What They Used To Be',
      composer: 'Duke Ellington',
      chords: ["Db7", "Gb7", "Db7", "Db7", "Gb7", "Gb7", "Db7", "Db7", "Ebm7", "Ab7", "Db7", "Bb7", "Ebm7", "Ab7"],
  },
  {
      title: 'Things We Did Last Summer, The',
      composer: 'Cahn-Styne',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7b5", "D7b9", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "F7", "Bbmaj7", "Dm7", "G7", "Dm7", "G7", "C7", "Ab7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7b5", "D7b9", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "C7"],
  },
  {
      title: 'Think Of One',
      composer: 'Thelonious Monk',
      chords: ["F", "B9b5", "Dm7", "Eb9", "Ab13", "Db7", "Gb13", "F", "B9b5", "Dm7", "Eb9", "Ab7", "Db7", "Gb7", "Cm7", "F7b9", "Bbmaj7", "G7b9", "G7b9", "G7b5", "Gm7", "C7b9#11", "F", "B9b5", "Dm7", "Eb9", "Ab13", "Db7", "Gb13", "F", "B9b5", "Dm7", "Eb9", "Ab7", "Db7", "Gb7"],
  },
  {
      title: 'This Can\'t Be Love',
      composer: 'Richard Rodgers',
      chords: ["Fmaj7", "Fmaj7", "Bb7", "Bb7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bb7", "Bb7", "Am7", "Dm7", "Gm7", "C7", "F6", "F6", "Em7", "A7", "Dm7", "Dm7", "Am7b5", "D7b9", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bb7", "Bb7", "Am7", "Dm7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'This Could Be The Start Of Something Big',
      composer: 'Steve Allen',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "C7b13", "Fm7", "Bb7", "Cm7", "B7", "Bbm7", "A7#11", "Abmaj7", "Adim7", "Gm7", "C7b9", "Fm7", "Bb7", "Gm7", "Gb7", "Fm7", "Bb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Abmaj7", "F7", "Bb7sus", "Bb7", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'This I Dig Of You',
      composer: 'Hank Mobley',
      chords: ["Bbmaj7", "Cm7", "Dm7", "Cm7", "Dm7", "Cm7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Em7b5", "A7b9", "Dm7", "G7", "C#m7", "F#7", "Cm7", "F7", "Bbmaj7", "Cm7", "Dm7", "Cm7", "Dm7", "Cm7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Em7b5", "A7b9", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Bbmaj7"],
  },
  {
      title: 'This Is All I Ask',
      composer: 'Gordon Jenkins',
      chords: ["Fmaj7", "D7b13", "Gm7", "C7", "Fmaj7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Am7", "D7", "D7", "G7", "G7", "C7", "C7", "Fmaj7", "D7b13", "Gm7", "C7", "Fmaj7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "A7b13", "Bb6", "Bm7b5", "E7b9", "Am7", "D7b13", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'This Is New',
      composer: 'Kurt Weill',
      chords: ["Cm6", "G7alt", "Cm7", "F7", "Bbm7", "F7b13", "Bbm7", "Bb7b13", "Ebm7", "Ebm7", "Ab7b13", "Ab7b13", "Dbm7", "Dbm7", "E7", "Eb7", "D7", "G7b9", "Cm6", "G7alt", "Cm7", "Ebm7", "Ab7", "Dbmaj7", "Gm7b5", "C7b9", "Fm6", "F7b9", "Bbm7", "Eb7b9", "Cm7", "Fm7", "Bbm7b5", "Eb7b13", "Abm7", "Dm7b5", "G7b9"],
  },
  {
      title: 'This Masquerade',
      composer: 'Leon Russell',
      chords: ["Fm7", "Bb7", "Fm7", "Bb7", "Fm", "Fm", "Fm7", "Bb7", "Fm7", "Db7", "Gm7b5", "C7#9", "Fm", "Fm", "Fm7", "Bb7", "Db7", "Gm7b5", "C7b9", "Fm", "Fm", "", "Em7", "A7", "Ebm7", "Ab7", "Dbmaj7", "Bb7b13", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Dm7", "G13", "G7b13", "Cmaj7", "Cmaj7", "Gm7", "G13", "G7b13", "C9sus", "Gb7#11", "Fm7", "Bb7", "Fm7", "B7"],
  },
  {
      title: 'This Time The Dream\'s On Me',
      composer: 'Harold Arlen',
      chords: ["Gmaj7", "E7b13", "Am7", "Cm7", "F7", "Bm7", "E7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "F#m7", "B7", "Bm7", "E7", "Em7", "A7", "Am7", "D7", "Gmaj7", "E7b13", "Am7", "Cm7", "F7", "Bm7", "E7", "Am7", "D7", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'This Year\'s Kisses',
      composer: 'Irving Berlin',
      chords: ["Gmaj7", "Gmaj7", "G#dim7", "Am7", "D7", "Am7", "D7", "Gmaj7", "G#dim7", "Am7", "D7", "Cmaj7", "Cmaj7", "Cm7", "Cm7", "Gmaj7", "A7", "Am7", "D7", "Gmaj7", "Gmaj7", "G#dim7", "Am7", "D7", "Am7", "D7", "Bm7", "E7", "Am7", "D7", "G6", "Bbdim7", "Am7", "D7"],
  },
  {
      title: 'Thou Swell',
      composer: 'Richard Rodgers',
      chords: ["Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Bbm7", "Eb7", "Ab6", "G7", "Cm7", "F7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Db7#11", "C7", "Fm7", "Bb7", "Eb6", "Eb6"],
  },
  {
      title: 'Three Flowers',
      composer: 'McCoy Tyner',
      chords: ["Ebmaj7", "Db7", "Ebmaj7", "Db7", "Ebmaj7", "Db7", "Am7", "D7", "G", "Dm7", "G", "Dm7", "Emaj7", "D7", "Emaj7", "Fm7", "Bb7", "Ebmaj7", "Db7", "Ebmaj7"],
  },
  {
      title: 'Three Little Words',
      composer: 'Harry Ruby',
      chords: ["Cmaj7", "Cmaj7", "Cmaj7", "Ebm7", "Ab7", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bb7", "A7", "Ab7", "G7", "Cmaj7", "Cmaj7", "Cmaj7", "Ebm7", "Ab7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Thrill Is Gone, The',
      composer: 'Ray Henderson',
      chords: ["Cm7", "G7b13", "Cm7", "F7", "Fm7", "Bb7", "Ab7", "Db7", "Ebmaj7", "", "Dbmaj7", "Dm7b5", "G7b9", "Cm7", "Dm7b5", "G7b9", "Cm7", "Am7b5", "Dm7b5", "G7b9", "Cm7", "Am7b5", "Ab7#11", "Cm7", "Fm7", "Db7#11", "Dm7b5", "G7b9", "Abmaj7", "Dm7b5", "G7b9", "Cm6", "Cm6"],
  },
  {
      title: 'Thriving From A Riff',
      composer: 'Charlie Parker',
      chords: ["Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Bb7", "Eb7", "Ab7", "Dm7", "G7", "Cm7", "F7", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7", "Bbmaj7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Bb7", "Eb7", "Ab7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Tickle-Toe',
      composer: 'Lester Young',
      chords: ["Bbm7", "F7", "Bbm7", "F7", "Bbm7", "Bb7", "Ebm7", "Bb7", "Ebm7", "Bb7", "Ebm7", "Abm7", "Db7", "Gb7", "B7", "Dbmaj7", "Fm7", "Bb7", "Eb7", "Bbm7", "Eb7", "Ab7", "F7", "Bbm7", "F7", "Bbm7", "F7", "Bbm7", "Bb7", "Ebm7", "Bb7", "Ebm7", "Bb7", "Ebm7", "Abm7", "Db7", "Gb7", "B7", "Dbmaj7", "Bb7", "Eb7", "Ab7", "Dbmaj7", "Cm7b5", "F7b9"],
  },
  {
      title: 'Till There Was You',
      composer: 'Meredith Wilson',
      chords: ["Ebmaj7", "Edim7", "Fm7", "Abm7", "Db7", "Gm7", "Gbdim7", "Fm7", "Bb7", "Gm7", "Gb7", "Fm7", "Bb7", "Abmaj7", "Adim7", "Ebmaj7", "C7", "Fm7", "Gm7", "Am7b5", "Fm7", "Bb7#5", "Ebmaj7", "Edim7", "Fm7", "Abm7", "Db9", "Gm7", "Gbdim7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Time After Time',
      composer: 'Jule Styne',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Bm7b5", "E7b9", "Am", "Am", "F#m7b5", "B7b9", "Em7", "A7b9", "Dm7", "Em7b5", "A7b9", "Ab7#11", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Fm6", "Bb7", "C6", "F#m7b5", "Fm6", "Em7", "Am7", "D7", "Fm6", "Em7", "Am7", "Dm7", "G7", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'Time On My Hands',
      composer: 'Vincent Youmans',
      chords: ["Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Gm7", "Gm7", "C7", "C7", "D7b13", "D7b13", "G7#11", "Gm7", "C7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Bb7#11", "A7#9", "D7b13", "G7#11", "C7", "F6", "D7", "Gm7", "C7"],
  },
  {
      title: 'Time Remembered',
      composer: 'Bill Evans',
      chords: ["Bm9", "Cmaj7#11", "Fmaj7#11", "Em9", "Am9", "Dm9", "Gm9", "Ebmaj7#11", "Abmaj7#11", "Am9", "Dm9", "Gm9", "Cm9", "Fm11", "Em9", "Bm9", "Bm9", "Ebm9", "Am9", "Cm9", "F#m9", "Bm9", "Gm9", "Ebmaj7#11", "Dm7", "Cm9", "Cm9"],
  },
  {
      title: 'Tin Tin Deo',
      composer: 'Dizzy Gillespie',
      chords: ["Fm6", "Ebm6", "Dbmaj7", "C7#5", "Fm6", "D7#9", "Gm7b5", "Gb7", "Fm6", "Ebm6", "Dbmaj7", "C7#5", "Fm7", "Bb7", "Eb7", "D7b5#9", "C7#9", "C7#9", "Fm6", "Fm6", "C7#9", "C7#9", "Fm6", "Fm6", "Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "Db7", "Cm7", "F7b9", "Bbm7", "Bbm7", "Eb7b9", "Abmaj7", "Dm7b5", "Gb7b9", "Dm7b5", "C7#9", "C7#9", "Fm6", "Fm6", "C7#9", "C7#9", "Fm6", "Fm6"],
  },
  {
      title: 'Tiny Capers',
      composer: 'Clifford Brown',
      chords: ["Bb6", "D7", "Gm7", "Bb7", "Ebmaj7", "G7", "Cm7", "C#dim7", "Dm7", "Eb7", "Dm7", "G7", "Gm7", "C7", "Cm7", "F7", "Eb7b9", "Eb7b9", "Bb7#11", "Bb7#11", "Eb7b9", "Ebm7", "Ab7", "Dm7", "G7", "Cm7", "F7", "Bb6", "D7", "Gm7", "Bb7", "Ebmaj7", "G7", "Cm7", "C#dim7", "Dm7", "Eb7", "Dm7", "G7", "Cm7", "F7", "Bb6", "F7"],
  },
  {
      title: 'Tippin\'',
      composer: 'Horace Silver',
      chords: ["Bb6", "G7b9", "Cm7", "C#dim7", "Bb", "G7b9", "Cm7", "F7", "Bb7", "Eb6", "Edim7", "Bb", "G7b9", "C7", "F7", "Am7", "D7", "Abm7", "Db7", "Gm7", "C7", "Cm7b5", "F7", "Bb6", "G7b9", "Cm7", "C#dim7", "Bb", "G7b9", "Cm7", "F7", "Bb7", "Eb6", "Edim7", "Bb", "Gm7", "C7", "", "F7", "Bb"],
  },
  {
      title: 'Tis Autumn',
      composer: 'Henry Nemo',
      chords: ["Fm7", "Bb7#5", "Ebmaj7", "Fm7", "Gm7", "C7b9", "Fm7", "Db7#11", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "C7#9", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab6", "Eb7b9#5", "Ab6", "Cm7", "F7", "Cm7", "F7", "Fm7", "C7#5#9", "F7", "Bb7", "Fm7", "Bb7#5", "Ebmaj7", "Fm7", "Gm7", "C7b9", "Fm7", "Db7#11", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "C7b9#5"],
  },
  {
      title: 'Tokyo Blues',
      composer: 'Horace Silver',
      chords: ["Db7", "Db7", "Cm7", "Cm7", "Db7", "Db7", "Cm7", "Cm7", "Db7", "Db7", "Cm7", "Cm7", "Eb7", "D7b13", "G7b9", "Cm7", "Cm7"],
  },
  {
      title: 'Tones For Joan\'s Bones',
      composer: 'Chick Corea',
      chords: ["Em7", "Em7", "Em7", "Em7", "Em7b5", "Em7b5", "Em7b5", "Em7b5", "Eb7", "Dmaj7", "Dmaj7", "Gm7", "Gm7", "D7#9", "D7#9", "F7b9", "Bbmaj7", "Abm7", "Gbmaj7", "F7", "Bbm7b5", "Bbm7b5", "Eb7#9", "Eb7#9", "Abm7", "Abm7", "Fm7b5", "Emaj7#11", "Ebmaj7", "Gbmaj7", "Fmaj7", "Abmaj7", "Cmaj7", "Ebmaj7", "Dbm", "Dbm", "A7b9", "Dmaj7", "Dmaj7", "Gm7", "Gm7", "D7#9", "D7#9", "F7b9", "Bbmaj7", "Bbmaj7", "Em7", "A7", "Bbdim7", "Bm7", "E7", "Em7", "F#m7", "Fm7", "Bb7", "Ebmaj7", "Dm7", "Cm7", "F7", "Em7", "F#m7", "Gmaj7", "A7b9", "Ebmaj7#11", "Ebmaj7#11"],
  },
  {
      title: 'Tonight',
      composer: 'Bernstein-Sondheim',
      chords: ["Ab", "Bb", "Ab", "Bb", "Ab", "Fm", "Gm", "F#7", "B", "C#", "B", "C#m", "C#m", "Bbm7b5", "Eb", "Eb", "E", "E", "Bbm7b5", "Bbm7b5", "Bm", "Bdim7", "Bb", "Bb7", "Ab", "Bb", "Ab", "Fm", "Cm", "Eb7", "Ab", "Ab"],
  },
  {
      title: 'Tonight I Shall Sleep',
      composer: 'Ellington-Mercer',
      chords: ["Dbmaj7", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Gm7b5", "Gb7#11", "Fm7b5", "Bb7b9", "Fm7b5", "Bb7b9", "Eb7", "Eb7", "Ebm7", "Ab7", "Dbmaj7", "Ab7", "Db", "Gb7", "Fm7", "E7", "Eb7", "Bbm7", "Eb7", "Em7", "A7", "Ebm7", "Ab7", "Dbmaj7", "Cm7b5", "F7b9", "Bbm7", "Bbm7", "Gm7b5", "Gb7#11", "Fm7b5", "Bb7b9", "Fm7b5", "Bb7b9", "Eb7", "A7", "Ab7", "G7", "Gbmaj7", "Ebm7b5", "A7", "Ab7sus", "Bbm7", "Eb7", "A7", "Ab7sus", "Bbm7", "Ebm7", "Ab7", "Dbmaj7", "Bbm7", "Ebm7", "Ab7"],
  },
  {
      title: 'Tonight You Belong To Me',
      composer: 'Rose-David',
      chords: ["Cmaj7", "Em7", "Fmaj7", "Cmaj7", "A7", "Dm7", "Fm6", "Cmaj7", "Am7", "D7", "G7", "C7", "Gm7", "C7", "Bbmaj7", "Fmaj7", "Fmaj7", "D7", "Am7", "D7", "G7", "G7", "Cmaj7", "Em7", "Fmaj7", "Cmaj7", "A7", "Dm7", "Fm6", "Cmaj7", "Am7", "D7", "G7", "Cmaj7", "G7"],
  },
  {
      title: 'Too Close For Comfort',
      composer: 'Bock-Weiss-Holofcener',
      chords: ["Cmaj7", "B7#5", "Em7b5", "A7", "Dm7b5", "G7", "Cmaj7", "Dm7", "G7", "F7", "F#dim7", "C6", "Gm7", "C7", "F7", "F#dim7", "Ab7", "Dm7", "G7", "Cmaj7", "B7#5", "Em7b5", "A7b13", "Dm7b5", "G7", "Cmaj7", "Gm7", "C7", "F7", "F#dim7", "Am7b5", "D7b9", "Ab7", "G7", "C6", "C6"],
  },
  {
      title: 'Too Marvelous For Words',
      composer: 'Richard Whiting',
      chords: ["Am7", "D7", "Am7", "D7", "Gmaj7", "C7#11", "Bm7", "Em7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "F7", "Em7", "A7", "Am7", "D7", "Am7", "D7", "Gmaj7", "F7", "E7b9", "Am7", "F7", "Am7", "D7", "G6"],
  },
  {
      title: 'Too Young',
      composer: 'Lippman-Dee',
      chords: ["Bb6", "Dm7", "Gm7", "Cm7", "F7", "Bb6", "Dm7", "Ebmaj7", "Dm7b5", "G7", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "Dm7", "Db7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Dm7", "Gm7", "Cm7", "F7", "Bb6", "Bb7", "Eb6", "Dm7b5", "G7", "Cm7", "Ebm7", "Dm7", "G7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Too Young To Go Steady',
      composer: 'Jimmy McHugh',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7", "D7", "Gm7", "", "Em7b5", "A7", "Dm7", "G7", "Gm7", "C7", "Am7", "Bm7b5", "E7b9", "Am7", "Bm7b5", "E7b9", "Am7", "Bm7b5", "E7b9", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "F6", "D7", "Gm7", "C7"],
  },
  {
      title: 'Topsy',
      composer: 'Battle-Durham',
      chords: ["Dm", "Bb7", "A7", "Dm", "Bb7", "A7", "Dm", "Bb7", "A7", "Dm", "Bb7", "A7", "Gm", "Eb7", "D7", "Gm", "Gm", "Dm", "Bb7", "A7", "Dm", "Dm", "D7", "D7", "G7", "G7", "C7", "C7", "F7", "Bb7", "A7", "Dm", "Bb7", "A7", "Dm", "Bb7", "A7", "Dm", "Bb7", "A7", "Dm", "Dm"],
  },
  {
      title: 'Touch Of Your Lips, The',
      composer: 'Ray Noble',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7b5", "G7", "Cmaj7", "F#m7b5", "B7b9", "Emaj7", "C#m7", "F#m7", "B7", "Emaj7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Em7b5", "A7b9", "Dm7b5", "G7", "E7b9#5", "Am7", "D7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Tour De Force',
      composer: 'Dizzy Gillespie',
      chords: ["Dm7b5", "Dbm7", "Cm7", "Bm7", "Bbm7", "Eb7", "Cm7", "Bm7", "Dm7b5", "Dbm7", "Cm7", "Bm7", "Bbm7", "Eb7", "Ab6", "Ab6", "Bbm7", "Ab7", "Ebm7", "Ab7", "Dbmaj7", "Ddim7", "Ebm7", "Ab7", "Dbmaj7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "E7", "Eb7", "Dm7b5", "Dbm7", "Cm7", "Bm7", "Bbm7", "Eb7", "Cm7", "Bm7", "Dm7b5", "Dm7", "Cm7", "Bm7", "Bbm7", "Eb7", "Ab6"],
  },
  {
      title: 'Toy Tune',
      composer: 'Wayne Shorter',
      chords: ["Bbm9", "Am9", "Cm7", "Bm7", "Bm7", "Db", "Bbm7", "Bmaj7", "Gbmaj9", "Em69", "Dmaj9", "Gm9", "Fmaj9", "E7alt", "Fm9", "Ebm9", "Dm7b9", "G7#5#9", "Cdim", "B7alt", "Bbm9", "Am9", "Cm7", "Bm7", "Bm7", "Db", "Bbm7", "Bmaj7", "Gbmaj9", "Em69", "Dmaj9", "Gm9", "Fmaj9", "E7alt"],
  },
  {
      title: 'Toys',
      composer: 'Herbie Hancock',
      chords: ["Bb7", "Bb7", "F7", "F7", "E7#9", "Db", "Cm7", "Cm7", "Eb7", "Eb7", "Dm", "Bb7", "Dm", "Bb7", "Dm", "Dm"],
  },
  {
      title: 'Training',
      composer: 'Michel Petrucciani',
      chords: ["Dm7", "G7", "Cm7", "C#m7", "F#7", "Bmaj7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Dm7", "G7", "Cm7", "C#m7", "F#7", "Bmaj7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7", "Fm7", "Bm7", "E7", "Gm7b5", "C7", "Fm7", "Em7", "Eb7", "D7", "F#m7", "Em7", "Abmaj7", "Dm7", "G7", "Cm7", "C#m7", "F#7", "Bmaj7", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7"],
  },
  {
      title: 'Trane’s Blues',
      composer: 'John Coltrane',
      chords: ["Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7", "Cm7", "F7", "Bb7", "Bb7"],
  },
  {
      title: 'Travels',
      composer: 'Pat Metheny',
      chords: ["Gmaj7", "Gadd9", "C", "C", "Gmaj7", "B7", "Em", "Em", "Dm", "", "Cadd9", "Em", "C", "G", "Dsus", "C", "D", "Bbmaj7", "C", "Fmaj7", "G", "C", "", "Bb", "C", "Fmaj7", "G7", "Ebmaj7", "", "Fsus", "F7", "Bbmaj7", "C", "Dsus", "D", "Gmaj7", "Gmaj7", "Cmaj7", "Cmaj7", "Gmaj7", "B7", "Em7", "Dm9", "Cmaj7", "Em7", "C", "Gadd9", "C", "Gmaj7", "", "G", "D", "Em", "C", "Gmaj7", "B7", "Em", "C", "Gmaj7", "D", "Em7", "C", "Gmaj7"],
  },
  {
      title: 'Tricotism',
      composer: 'Oscar Pettiford',
      chords: ["Dbmaj7", "Dbmaj7", "Eb7", "Eb7", "Gbmaj7", "Gdim7", "Db6", "Bb7", "A7", "Ab7", "A7", "A7", "Dbmaj7", "Cm7b5", "F7b9", "Bbm", "Bbm", "Bbm7", "Eb7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Eb7", "Eb7", "Gbmaj7", "Gdim7", "Db6", "Bb7", "Ebm7", "Ab7", "Db6"],
  },
  {
      title: 'Trinkle Tinkle',
      composer: 'Thelonious Monk',
      chords: ["Bbm7", "Eb7", "A7#11", "Ab7", "Db7", "F#7", "B7", "E7", "Fm7", "Bb7#5", "Ebmaj7", "Ebmaj7", "Ebmaj7", "Bbm7", "Eb7#11", "Abmaj7", "Gm7b5", "Cm7", "F7", "Ab7", "A7", "F#7", "B7", "Fm7", "Bb7", "Bbm7", "Eb7", "A7#11", "Ab7", "Db7", "F#7", "B7", "E7", "Fm7", "Bb7#5", "Ebmaj7", "Ebmaj7", "Ebmaj7"],
  },
  {
      title: 'Triste',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Amaj7", "Amaj7", "Fmaj7#11", "Fmaj7#11", "Amaj7", "Amaj7", "C#m7", "F#7b9", "Bm7", "G#m7b5", "C#7b9", "F#m7", "G#7#9", "C#maj7", "D#m7", "G#7", "C#maj7", "F#7", "Bm7", "E7", "Amaj7", "Amaj7", "Am7", "D7", "Amaj7", "Amaj7", "Em7", "A7", "Dmaj7", "G7", "C#m7", "F#7", "B7", "Bm7", "E7", "Am7", "D7", "Am7", "D7", "Am7", "D7", "Am7", "D7"],
  },
  {
      title: 'Troubled Waters',
      composer: 'Arthur Johnston',
      chords: ["Dm6", "Gm7", "E7", "A7", "D7", "G7", "C7", "F6", "Bb7", "A7", "A7", "D7", "E7", "A7", "D6", "A7", "Bm7", "E7", "A7", "A7", "Dm6", "Gm7", "E7", "A7", "D7", "G7", "C7", "F6", "Bb7", "A7"],
  },
  {
      title: 'Try A Little Tenderness',
      composer: 'Harry Woods',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Eb6", "Gm7b5", "C7", "F7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Abmaj7", "Dm7b5", "G7b9", "Cm7", "F7", "Fm7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Eb6", "Gm7b5", "C7", "F7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Tune Up',
      composer: 'Miles Davis',
      chords: ["Em7", "A7", "Dmaj7", "Dmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Cm7", "F7", "Bbmaj7", "Gm7", "Em7", "F7", "Bbmaj7", "A7"],
  },
  {
      title: 'Turn Out The Stars',
      composer: 'Bill Evans',
      chords: ["Bm7b5", "E13", "Am", "A7#5", "Dm7", "G7b9", "Cmaj7", "Am7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Am7", "D7", "Gmaj7", "Em7", "C#m7", "F#7", "Bmaj7", "G#m7", "C#m7", "Bbm7b5", "Eb7", "Abm7", "Fm7b5", "Bb7#5#9", "Ebm7", "Ebm7", "Bmaj7", "Ebm7", "A7sus", "A13b9", "Dmaj7", "A7sus", "Dmaj7", "G7sus", "G13b9", "Cmaj7", "G7sus", "G7", "Cmaj7", "C13", "B7#5", "Em7", "Bb7#11", "A7#5", "Dm7", "Ab7#11", "G7#5", "Cm7", "Eb9", "Abmaj7", "C7b9", "Fm9", "Dm7b5", "G7#5#9", "Cm7", "Eb7sus", "Abmaj7", "G7b9", "Cmaj7", "F#7#11", "Bm7b5", "E13", "Am", "Ab7sus", "Ab13b9", "C#m7", "F#7"],
  },
  {
      title: 'Turnaround',
      composer: 'Ornette Coleman',
      chords: ["C7", "F7", "C7", "C7", "F7", "Fm7", "C7", "C7", "Cm7", "Dbm7", "Bm7", "Am7", "C7", "G7"],
  },
  {
      title: 'Twisted',
      composer: 'Wardell Gray',
      chords: ["Bb7", "Ab7", "Ab7", "Bb7", "Bb7", "Ab7", "Ab7", "Bb7", "Bb7", "Eb7", "Eb7", "Fm7", "Bb7", "Eb7", "Eb7", "Bb7", "Dm7", "Gm7", "Cm7", "F7", "Bb7", "Gm7", "Cm7", "F7"],
  },
  {
      title: 'Twisted Blues',
      composer: 'Wes Montgomery',
      chords: ["Gb7", "G7", "Gb7", "G7", "Gb7", "G7", "Gb7", "G7", "Gb7", "Gdim7", "Dbmaj7", "Bm7", "E7", "Bbm7", "Eb7", "Em7", "A7", "Ebm7", "Ab7", "Dm7", "G7", "Bbm7", "Eb7", "A7", "D7", "Db7#9"],
  },
  {
      title: 'Two For The Road',
      composer: 'Henry Mancini',
      chords: ["F#m7b5", "B7b9", "Em7", "Em7", "Cmaj7", "Cmaj7", "Am7", "D7sus", "D7b9", "Cdim7", "Gmaj7", "F#m7", "B7b9", "Em7", "B7b13", "Em7", "A7b9", "Dm7", "A7b13", "Dm7", "G7b9", "Em7b5", "A7b9", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7", "Am7", "Am7", "F#m7b5", "B7b9", "Em7", "Em7", "Cmaj7", "Cmaj7", "Am7", "D7sus", "D7b9", "Cdim7", "Gmaj7", "G7", "Em7", "Em7", "C#m7b5", "Cm6", "Bm7", "Em7", "Cmaj7", "Bm7", "Bb7", "Am7", "D13b9", "G6", "Dm7", "G7"],
  },
  {
      title: 'Two Not One',
      composer: 'Lennie Tristano',
      chords: ["Dbmaj7", "Dbm", "Abmaj7", "F7#11", "Bbm7", "Eb7", "Abmaj7", "Ab7", "C7", "C7", "F7", "F7", "Bb7", "Bb7", "Eb7", "Eb7", "Dbmaj7", "Dbm", "Abmaj7", "F7#11", "Bbm7", "Eb7", "Abmaj7", "Ab7"],
  },
  {
      title: 'Two Sleepy People',
      composer: 'Hoagy Carmichael',
      chords: ["Eb6", "Gbdim7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Abm6", "Ebmaj7", "F7", "Fm7", "Bb7", "Abmaj7", "Bb7", "Eb6", "Bb7", "Ebmaj7", "", "Eb6", "G7", "Cm", "Cm7", "Ab6", "Bb7", "Eb6", "Bb7", "Eb6", "Db7", "C7", "", "F7", "Fm7", "Bb7", "Eb6", "Gbdim7", "Fm7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Ab6", "Eb", "C7", "F7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'Ugly Beauty',
      composer: 'Thelonious Monk',
      chords: ["Dm7b5", "G13b9", "Dm7b5", "Dbmaj7", "Eb7#11", "Ebm7", "Ab13b9", "Dbmaj7", "Dbmaj7", "Abm7", "Db7b9", "Bb7#5#9", "Fm7", "Bb7#11", "Ab9sus", "Ab7#11", "Abm7", "G7b5", "Dm7b5", "G13b9", "Dm7b5", "Dbmaj7", "Eb7#11", "Ebm7", "Ab13b9", "Ab13b9", "Dbmaj7"],
  },
  {
      title: 'Undecided',
      composer: 'Charlie Shavers',
      chords: ["C6", "C6", "F7", "F7", "D7", "Dm7", "G7", "C6", "A7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "F6", "F6", "Am7", "D7", "Am7", "D7", "G7", "G7", "C6", "C6", "F7", "F7", "D7", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'Under A Blanket Of Blue',
      composer: 'Jerry Livingston',
      chords: ["Bbm7", "Eb7#5", "Abmaj7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "F7", "Ab7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb7#5", "Bbm7", "Eb7#5", "Abmaj7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Dbm6", "Ab6"],
  },
  {
      title: 'Unforgettable',
      composer: 'Gordon Irving',
      chords: ["Gmaj7", "Gmaj7", "Bbdim7", "Bbdim7", "Cmaj7", "Cmaj7", "Em7", "A7", "Fmaj7", "Fm7", "Cmaj7", "F7", "Em7", "A7", "Am7", "Am7", "D7", "D7", "Gmaj7", "Gmaj7", "Bbdim7", "Bbdim7", "Cmaj7", "Cmaj7", "Em7", "A7", "Fmaj7", "Bb7#11", "Cmaj7", "F7", "Em7", "A7", "Am7", "D7", "Dm7", "G7", "C6", "Am7", "D7"],
  },
  {
      title: 'Unit Seven',
      composer: 'Sam Jones',
      chords: ["C7", "C7", "C7", "C7", "F7", "F7", "C7", "A7#9", "Abmaj7", "G7#9", "C7", "A7", "D7", "G7#9", "Dm7", "G7", "Em7", "A7b9", "Dm7", "G7b9", "E7", "A7", "Dm7", "G7", "C7", "C7", "C7", "C7", "F7", "F7", "C7", "A7#9", "Abmaj7", "G7#9", "C7", "A7", "D7", "G7#9"],
  },
  {
      title: 'United',
      composer: 'Wayne Shorter',
      chords: ["E7#9", "A7b9", "Dm", "Dm", "E7#9", "A7b9", "Dm", "Dm", "Cm7", "F7", "Bbmaj7", "Db7", "Gbmaj7", "C7", "Fmaj7", "Fm7"],
  },
  {
      title: 'Unity Village',
      composer: 'Pat Metheny',
      chords: ["Am", "E7", "Fmaj7", "Fmaj7", "Am", "E7", "Fmaj7", "Bbmaj7#11", "Amaj7", "C#m9", "G#m7", "Eb7#9", "F#m7", "B7sus", "Emaj7", "E", "Emaj7", "E", "C", "G", "Eb", "Bb", "Bb", "C", "F", "B", "E", "E7sus"],
  },
  {
      title: 'Unrequited',
      composer: 'Brad Mehldau',
      chords: ["Em7", "Cmaj7#11", "Am6", "B7sus", "B7", "Cm6", "Gm", "A7sus", "A7", "D7sus", "D7", "Gm", "Cm9", "Cm6", "D7sus", "D7", "Ebm", "Bbadd9", "D7", "Gm7", "Abm", "Bmaj7", "Fm7b5", "F7#11", "Bbm", "F#m", "Amaj7", "C#m", "Ebm7b5", "Eb7#11", "Ab7sus", "Ab7", "C#m7", "Am9", "F#7b9", "B7sus", "B7", "E", "C6", "B7sus", "E", "E7", "Eb7", "Abm9"],
  },
  {
      title: 'Up Jumped Spring',
      composer: 'Freddie Hubbard',
      chords: ["Bbmaj7", "G7#5", "Cm7", "F7", "F#dim7", "Gm7", "Fm7", "Em7b5", "A7b9", "Dm7", "Ebm7", "Dm7", "Ebm7", "B7#11", "E7", "Cm7b5", "F7", "Gm7", "C7", "Fmaj7", "Dm7", "Abm7", "Ebm7", "Cm7", "F7", "Cm7", "F7", "Bmaj7", "Bbmaj7"],
  },
  {
      title: 'Up With The Lark',
      composer: 'Jerome Kern',
      chords: ["Cmaj7", "C6", "G9sus", "G7", "C6", "Eb13", "Abmaj7", "G7#5#9", "C6", "G9", "C69", "G9sus", "Em7", "Am7", "Am7", "D13", "Dm7", "G13", "Dm7", "G13", "C69", "Eb13", "Abmaj7", "G7#5#9", "C9", "G9", "C69", "Gm7", "F#m7", "B7", "E69", "C#m7", "F#m7", "B7", "Emaj7", "Emaj7", "Fm7", "Bb7", "Eb69", "Eb69", "A13", "A7#5", "Dmaj7", "Dmaj7", "B", "A", "G", "F", "C6", "G9", "C69", "Fm7", "Em7", "Am7", "D7", "Ab7", "Cmaj7", "C6", "G9sus", "G7", "C6", "Eb13", "Abmaj7", "G7#5#9"],
  },
  {
      title: 'Upper Manhattan Medical Group',
      composer: 'Billy Strayhorn',
      chords: ["Fm7b5", "Bb7b9", "Ebm7", "Ab7", "Dbdim7", "Db6", "Dbmaj7", "Dbm7", "Gb7", "Gm7b5", "C7b13", "Fmaj7", "Fmaj7", "Abm7b5", "Db7b13", "Gbm", "Ab7", "Fm7b5", "Bb7b9", "Ebm7", "Ab7", "Dbdim7", "Db6", "Dbdim7", "Db6"],
  },
  {
      title: 'Valse Hot',
      composer: 'Sonny Rollins',
      chords: ["Abmaj7", "Dbmaj7", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "F7", "Bbm7", "Dbm6", "Cm7", "F7", "Bbm7", "Eb7", "Abmaj7", "Eb7"],
  },
  {
      title: 'Very Early',
      composer: 'Bill Evans',
      chords: ["Cmaj7", "Bb7", "Ebmaj7", "Ab7b9", "Dbmaj7", "G7", "Cmaj7", "Bb7#11", "Dmaj7", "Am7", "F#m7", "B13b9", "Em7", "Ab7", "Dbmaj7", "G7", "Bmaj7", "Ab7b9", "Dbmaj7", "Bb7", "Bmaj7", "G7", "Cmaj7", "Ab7", "Dbmaj7", "G7", "Cmaj7", "A7alt", "Dm7", "Em7", "Fmaj7", "G7", "Cmaj7", "G7", "Dm7", "Em7", "Fmaj7", "G7", "Cmaj7", "Abmaj7", "Bbmaj7", "Gmaj7", "Bmaj7", "Bmaj7"],
  },
  {
      title: 'Very Thought Of You, The',
      composer: 'Ray Noble',
      chords: ["Abmaj7", "Dbmaj7", "Cm7", "Eb7sus", "Ab6", "Dbmaj7", "Cm7", "Eb7sus", "Ab6", "Bbm7", "Bdim7", "Ab6", "Bb7", "Bb7", "Bbm7", "Eb7", "Gm7b5", "C7b9", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cm7", "Fm7b5", "Bb7sus", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Cm7", "Eb7sus", "Ab6", "Dbmaj7", "Cm7", "Eb7sus", "Ab6", "Bbm7", "Bdim7", "Ab6", "Bb7", "Bb7", "Bbm7", "Eb7", "Gm7b5", "C7b9", "Fm7", "Fm7", "Dm7b5", "Adim7", "Bbm7", "Adim7", "Bbm7", "Eb7", "Ab6", "Bbm7", "Eb7"],
  },
  {
      title: 'Violets For Your Furs',
      composer: 'Adair-Dennis',
      chords: ["Gm7", "C7", "Fmaj7", "Bbm7", "Eb7", "Fmaj7", "D7b9", "Gm7", "C7", "Fmaj7", "Am7", "D7b9", "Gm7", "D7b9#5", "Gm7", "C7", "Fmaj7", "D7b9", "Gm7", "C7", "Fmaj7", "D7b9", "Gm7", "C7", "Fmaj7", "D7", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bbm7", "Eb7", "Fmaj7", "D7b9", "Gm7", "C7", "Fmaj7", "Am7", "D7b9", "Gm7", "Bbmaj7", "Eb7", "Fmaj7", "Eb7", "D7", "Db7", "C7#5", "F6", "D7", "Gm7", "C7", "F6", "D7b9"],
  },
  {
      title: 'Virgo',
      composer: 'Wayne Shorter',
      chords: ["Fmaj7", "Bbm7", "Eb7", "Dm7b5", "Bb7#11", "Amaj7", "Am7", "Fm7", "Bb7", "Em7b5", "Eb7#11", "Dmaj7", "Dm7", "Cm7", "F7", "Eb7", "D7", "Gm7", "Ab7", "Dbmaj7", "Dm7", "G7", "Gm7", "C#m7", "F#7", "Fmaj7", "Bbm7", "Eb7", "Dm7b5", "Bb7#11", "Amaj7", "Am7", "Fm7", "Bb7", "Em7b5", "Eb7#11", "Dm7", "Db7#5", "Cm7", "F7", "Bbmaj7", "E7#5", "A7#5", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Voyage',
      composer: 'Kenny Barron',
      chords: ["Fm6", "Fm6", "F#m6", "F7b9", "Bbm7", "Gm7b5", "C7b9", "Fm6", "Gm7b5", "C7b9", "Dbmaj7", "Em7", "A7", "Dmaj7", "Fm7", "Bb7", "Ebmaj7", "F#m7", "B7", "Emaj7", "Gm7b5", "C7b9", "Fm6", "Fm6", "F#m6", "F7b9", "Bbm7", "Gm7b5", "C7b9", "Fm6", "Gm7b5", "C7b9"],
  },
  {
      title: 'Wait Till You See Her',
      composer: 'Richard Rodgers',
      chords: ["Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Gm7", "Cm7", "G7b13", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Gm7", "Cm7", "Cm7", "Am7b5", "Abdim7", "Eb", "Gbdim7", "Bb7", "Edim7", "Fm7", "Bb7", "Eb6", "Eb6"],
  },
  {
      title: 'Walk Tall',
      composer: 'Cannonball Adderley',
      chords: ["G7", "C7", "G7", "C7", "G7", "C7", "G7", "C7", "G7", "C7", "G7", "C7", "G7", "C7", "G7", "C7", "Bm7", "Em7", "D7sus", "Am7", "Bm7", "Cmaj7", "", "Bm7", "Em7", "Am7", "D7sus", "D7sus", "D7sus", "G7", "C7", "G7", "C7"],
  },
  {
      title: 'Walkin\'',
      composer: 'Miles Davis',
      chords: ["F7", "Bb7", "F7", "Cm7", "F7", "Bb7", "Bdim7", "F7", "Am7", "D7", "Gm7", "C7", "F7", "D7", "Gm7", "C7"],
  },
  {
      title: 'Walkin\' My Baby Back Home',
      composer: 'Ahlert-Turk',
      chords: ["Ebmaj7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "C7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6", "Bb7", "Gm7", "C7", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "C7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Fm7", "Bb7", "Eb6"],
  },
  {
      title: 'Walkin\' Shoes',
      composer: 'Gerry Mulligan',
      chords: ["Eb6", "Ab7", "Eb6", "Gm7b5", "C7", "Fm7", "Am7", "D7", "Gmb6", "Gbm7", "Gbm7", "Fm", "E7#9", "", "G7", "G7", "Cm6", "Cm6", "Cm7", "F7", "Fm7", "Bb7", "Eb6", "Ab7", "Adim7", "Eb6", "Abmaj7", "Gm7b5", "C7", "Fm7b5", "C7", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'Walkin\' up',
      composer: 'Bill Evans',
      chords: ["Cmaj7", "Bbmaj7", "Abmaj7", "Gbmaj7", "Fmaj7", "B13", "Emaj7", "Amaj7#11", "Ebmaj7", "Abmaj7", "Dbmaj7", "Gbmaj7", "Bmaj7", "Emaj7", "Amaj7", "Dmaj7", "Ab7sus", "Ab7sus", "Ab7sus", "Ab7sus", "G7sus", "G7sus", "G7sus", "G7sus", "Cmaj7", "Bbmaj7", "Abmaj7", "Gbmaj7", "Fmaj7", "B13", "Emaj7", "Amaj7#11", "Ebmaj7", "Abmaj7", "Dbmaj7", "Gbmaj7", "Bmaj7", "Emaj7", "Amaj7", "Dmaj7"],
  },
  {
      title: 'Waltz For Debby',
      composer: 'Bill Evans',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "A7", "D7", "G7", "C7", "F7", "Bb6", "Gm7b5", "C7", "Am7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "A7", "D7", "G7", "C7", "A7", "Dm7", "B7", "E7", "Amaj7", "Amaj7", "Amaj7", "Amaj7", "Gm7", "C7", "Am7", "D7", "Gm7", "A7", "Dm7", "Cm7", "Bbmaj7", "A7", "Dm7", "G7", "Abmaj7", "Dbmaj7", "Gm7", "C7", "Fmaj7", "Dm7", "Gm7", "C7", "A7", "D7", "G7", "C7", "F7", "Bb6", "Gm7b5", "C7", "Am7", "Dm7", "Bm7", "E7", "Am7", "F7", "Bbmaj7", "A7alt", "Dm7", "Dm7", "G7", "G#dim7", "Am7", "Abdim7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Warm Valley',
      composer: 'Duke Ellington',
      chords: ["Bbmaj7", "E7", "Eb7", "", "Em7b5", "A7", "D7", "Dm7b5", "G7b9", "Cm7b5", "Bbmaj7", "F7sus", "Bbmaj7", "F7#9", "Emaj7", "C#m7", "G#m7", "Gdim7", "F#m7", "B7", "Bm7", "E7", "Amaj7", "Em7b5", "A7", "Dmaj7", "C#m7b5", "Cm7b5", "F7", "Bbmaj7", "E7", "Eb7", "", "Em7b5", "A7", "D7", "Dm7b5", "G7b9", "Cm7b5", "Bbmaj7", "F7sus", "Bbmaj7", "F7"],
  },
  {
      title: 'Watch What Happens',
      composer: 'Michel Legrand',
      chords: ["Ebmaj7", "Ebmaj7", "F7", "F7", "Fm7", "Bb7", "Ebmaj7", "Emaj7", "Fmaj7", "Emaj7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "F7", "F7", "Fm7", "Bb7", "Eb6", "E6", "D6", "Eb6", "E6", "D6", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Watermelon Man',
      composer: 'Herbie Hancock',
      chords: ["F7#9", "F7#9", "F7#9", "F7#9", "Bb9", "Bb9", "F7#9", "F7#9", "C9", "Bb9", "C9", "Bb9", "C9", "Bb9", "F7#9", "F7#9"],
  },
  {
      title: 'Wave',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Dmaj7", "Bbdim7", "Am7", "D7b9", "Gmaj7", "Gm6", "F#13", "F#7b13", "B9", "B7b9", "E9", "Bb7", "A7", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "A7b9", "Dmaj7", "Bbdim7", "Am7", "D7b9", "Gmaj7", "Gm6", "F#13", "F#7b13", "B9", "B7b9", "E9", "Bb7", "A7", "Dm7", "G7", "Dm7", "G7"],
  },
  {
      title: 'Way You Look Tonight, The',
      composer: 'Jerome Kern',
      chords: ["Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "D7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7", "Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "F7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Gm7", "C7", "Gm7", "C7", "F6", "Dm7", "Gm7", "C7"],
  },
  {
      title: 'Wayne\'s Thang',
      composer: 'Kenny Garrett',
      chords: ["Em7", "Em7", "C6", "C6", "B7b9b13", "B7b9b13", "Em7", "Em7", "Em7", "Em7", "C6", "C6", "B7b9b13", "B7b9b13", "Em7", "Em7"],
  },
  {
      title: 'We See',
      composer: 'Thelonious Monk',
      chords: ["Bbmaj7", "Ab7", "Gb7", "Cm7", "F7", "Fm7", "Bb7b9", "Ebmaj7", "Ab7", "C7", "F7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Cm7", "F7", "Bbmaj7", "Ab7", "Gb7", "Cm7", "F7", "Fm7", "Bb7b9", "Ebmaj7", "Ab7", "C7", "F7", "Bbmaj7"],
  },
  {
      title: 'We Will Meet Again',
      composer: 'Bill Evans',
      chords: ["Cm6", "Cm6", "Fm7", "Fm7", "Dm7b5", "G7b9", "Cm6", "Cm6", "Abmaj7", "G7b9", "Cm6", "Cm6", "Am7b5", "D7#9", "G7b9sus", "G13b9"],
  },
  {
      title: 'We\'ll Be Together Again',
      composer: 'Carl Fisher',
      chords: ["C6", "C6", "Ab7", "", "Dm7", "G7", "Am7", "D7#11", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Dm7b5", "Ab7", "G7sus", "G7", "Ab7", "G7#9", "Cm6", "Am7b5", "Ab7", "G7#9", "Cm6", "Am7b5", "Ab7", "G7", "Gb7", "F7", "Am7b5", "Ab7", "G7sus", "G7", "C6", "C6", "Ab7", "", "Dm7", "G7", "Am7", "D7#11", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Dm7b5", "G7", "C6", "", "Dm7", "G7"],
  },
  {
      title: 'Webb City',
      composer: 'Bud Powell',
      chords: ["Bbmaj7", "Gm7", "Cm7", "C#dim7", "Dm7", "G7b9", "Cm7", "F7", "Bb7", "Eb7", "Ebm7", "Dm7", "G7b9", "Cm7", "F7", "Eb7", "Eb7", "Bb7", "G7#5", "C7#11", "C7#11", "F7#5", "F7#5", "Bbmaj7", "Gm7", "Cm7", "C#dim7", "Dm7", "G7b9", "Cm7", "F7", "Bb7", "Eb7", "Ebm7", "Cm7", "F7", "Bb6"],
  },
  {
      title: 'Well You Needn\'t',
      composer: 'Thelonious Monk',
      chords: ["F6", "Gb7", "F6", "Gb7", "F6", "Gb7", "F6", "F6", "Db7", "Db7", "D7", "D7", "Eb7", "E7", "Eb7", "D7", "Db7", "C7", "B7", "C7", "F6", "Gb7", "F6", "Gb7", "F6", "Gb7", "F6", "F6"],
  },
  {
      title: 'Wendy',
      composer: 'Paul Desmond',
      chords: ["Ebmaj7", "Cm7", "Fm7", "Bb7", "Gm7", "C7", "Abm7", "Db7", "Gm7", "Gbdim7", "Fm7", "Dm7b5", "G7#5", "Cm7", "F7", "Fm7", "Bb7", "Emaj7", "Ebmaj7"],
  },
  {
      title: 'West Coast Blues',
      composer: 'Wes Montgomery',
      chords: ["Bb7", "Ab7", "Bb7", "Bm7", "E7", "Eb7", "Eb7", "Bb7", "Bb7", "F7", "Eb7", "Bb7", "Bb7", "Bb7", "Ab7", "Bb7", "Bm7", "E7", "Eb7", "Ebm7", "Ab7", "Dm7", "G7", "C#m7", "F#7", "Cm7", "Cm7", "F7", "Bbmaj7", "Db7", "Gbmaj7", "F7"],
  },
  {
      title: 'What A Difference A Day Made',
      composer: 'Maria Grever',
      chords: ["Gm7", "C7", "Fmaj7", "Bb7", "Am7", "D7#9", "Gm7", "C7", "Fmaj7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm", "Dm", "Dm7", "G7", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bb7", "Am7", "D7#9", "Gm7", "C7", "F7", "Cm7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "Abdim7", "Gm7", "C7", "F6", "Am7", "D7"],
  },
  {
      title: 'What A Little Moonlight Can Do',
      composer: 'Harry Woods',
      chords: ["G6", "G6", "Bm7", "E7", "Am7", "D7", "Am7", "D7", "Am7", "E7", "Am7", "D7", "G6", "G6", "Dm7", "G7", "Cmaj7", "Cmaj7", "F9", "F9", "G6", "Am7", "Bm7", "E7", "A9", "A9", "A9", "A9", "Am7", "G#dim7", "Am7", "Bbdim7", "G6", "G6", "Bm7", "E7", "Am7", "D7", "Am7", "D7", "Am7", "Am7", "F#m7b5", "B7", "Em7", "Eb7", "Dm7b5", "G7", "Cmaj7", "Cmaj7", "F9", "F9", "G6", "Am7", "Bm7", "E7", "Am7", "E7", "Am7", "D7", "G6", "G6", "Am7", "D7"],
  },
  {
      title: 'What A Wonderful World',
      composer: 'Weiss-Thiele',
      chords: ["F6", "Am7", "Bbmaj7", "Am7", "Gm7", "Fmaj7", "A7b9", "Dm7", "Db7", "Gm7", "C7", "Fmaj7", "F6", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Dm7", "Am7", "Dm7", "Am7", "Dm7", "D7b9", "Gm7", "F#dim", "Gm7", "C7"],
  },
  {
      title: 'What Are You Doing New Year\'s Eve?',
      composer: 'Frank Loesser',
      chords: ["Fmaj7", "Eb7", "Fmaj7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "Dm7", "G7", "C7", "C7", "Am7", "D7", "Gm7", "C7", "Am7", "Bm7b5", "E7b9", "Am7", "Bm7b5", "Bb7", "Am7", "D7", "G7", "C7", "Fmaj7", "Eb7", "Fmaj7", "F7", "Bbmaj7", "Eb7", "Fmaj7", "Dm7", "G7", "C7", "C7b9", "F6", "C7sus"],
  },
  {
      title: 'What Are You Doing The Rest Of Your Life?',
      composer: 'Michel Legrand',
      chords: ["Am", "Am", "Am7", "F#m7b5", "Fmaj7", "Fmaj7", "Dm7", "Dm7", "Bm7", "E7b13", "Bm7", "E7", "Amaj7", "F#m7", "Bm7", "E7", "Amaj7", "Abm7", "Db7", "Gbmaj7", "Gm7", "C7", "Fmaj7", "E7b13", "Am", "Am", "Am7", "F#m7b5", "Fmaj7", "Fmaj7", "Dm7", "Dm7", "Bm7", "E7b13", "Fmaj7", "Bm7b5", "E7", "Fmaj7", "F7#11", "Am7", "Bm7b5", "E7b13", "Am", "Bm7b5", "E7b9"],
  },
  {
      title: 'What Is This Thing Called Love',
      composer: 'Cole Porter',
      chords: ["Gm7b5", "C7b9", "Fm6", "Fm6", "Dm7b5", "G7#5", "Cmaj7", "Cmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Ab7", "Ab7", "Dm7b5", "G7", "Gm7b5", "C7b9", "Fm6", "Fm6", "Dm7b5", "G7#5", "Cmaj7", "Cmaj7"],
  },
  {
      title: 'What\'ll I Do',
      composer: 'Irving Berlin',
      chords: ["Cmaj7", "Fm7", "Bb7", "Cmaj7", "Fm7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "Dm7", "G7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "A7", "D7", "Dm7", "G7", "Cmaj7", "Fm7", "Bb7", "Cmaj7", "Fm7", "Bb7", "Em7", "A7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'What\'s New',
      composer: 'Bob Haggard',
      chords: ["C6", "Bbm7", "Eb7", "Abmaj7", "Dm7b5", "G7b9", "Cm7", "Am7b5", "Dm7b5", "G7b9", "C6", "Am7", "Dm7", "G7", "F6", "Ebm7", "Ab7", "Dbmaj7", "Gm7b5", "C7b9", "Fm7", "Dm7b5", "Gm7b5", "C7b9", "Fm6", "Dm7b5", "G7b9", "C6", "Bbm7", "Eb7", "Abmaj7", "Dm7b5", "G7b9", "Cm7", "Am7b5", "Dm7b5", "G7b9", "C6", "Am7", "Dm7", "G7"],
  },
  {
      title: 'When I Fall In Love',
      composer: 'Victor Young',
      chords: ["Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "G7b9", "C7b9", "F7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Gm7b5", "C7b9", "Fm7", "D7alt", "Gm7b5", "C7b9", "Fm7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "G7b9", "C7b9", "F7", "Bb7", "Ebmaj7", "A7#11", "Abmaj7", "D7", "Gm7", "C7#9", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'When It Rains',
      composer: 'Brad Mehldau',
      chords: ["B7", "G#m6", "Em", "B", "B7", "G#m6", "Em", "B", "B7", "Emaj7", "C#7", "Emaj7", "G7", "B", "G#m7", "Em", "B"],
  },
  {
      title: 'When It\'s Sleepy Time Down South',
      composer: 'Traditional',
      chords: ["Fmaj7", "Bb7#11", "Cmaj7", "Am7", "D7", "G7", "G7", "E7sus", "E7", "Fmaj7", "Bb7", "C6", "C7", "E", "Emaj7", "E6", "Fdim7", "F#m7", "B7", "E", "B7sus", "E", "Emaj7", "E6", "Fdim7", "F#m7", "B7", "E", "G7", "Fmaj7", "Bb7#11", "Cmaj7", "Am7", "D7", "G7", "G7", "E7sus", "E7", "Fmaj7", "Bb7", "C6", "C7"],
  },
  {
      title: 'When Lights Are Low',
      composer: 'Benny Carter',
      chords: ["Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "Fm7", "Gm7", "C7", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Bb7", "Abm7", "Db7", "Gbmaj7", "Bm7", "E7", "Amaj7", "Dm7", "G7", "Cmaj7", "Cm7", "F7", "Fm7", "Bb7b9", "Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "Fm7", "Gm7", "C7#9", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Bb7"],
  },
  {
      title: 'When Sunny Gets Blue',
      composer: 'Marvin Fisher',
      chords: ["Gm7", "C7", "Bbm7", "Eb7", "Fmaj7", "Gm7", "Am7", "D7", "Bm7b5", "", "Bbm7", "Eb7", "Fmaj7", "", "Abm7", "Db7", "Gm7", "", "C7", "Bb7", "Am7", "D7b9", "Dmaj7", "Em7", "F#m7", "B7", "Em7", "A7", "Dmaj7", "Dm7", "G7", "Cmaj7", "Am7", "Fmaj7", "", "Dm7", "G7", "Gm7", "C7", "Gm7", "C7", "Bbm7", "Eb7", "Fmaj7", "Gm7", "Am7", "D7", "Bm7b5", "", "Bbm7", "Eb7", "Fmaj7", "", "Abm7", "Db7", "Gm7", "C7", "Fmaj7"],
  },
  {
      title: 'When The Saints Go Marching In',
      composer: 'Traditional',
      chords: ["F", "F", "F", "F", "F", "F", "C7", "C7", "F", "F7", "Bb", "Bbm", "F", "G7", "C7", "F", "C7"],
  },
  {
      title: 'When The Sun Comes Out',
      composer: 'Harold Arlen',
      chords: ["C7", "Bb7", "Am7", "D7", "C7", "C#dim7", "D7sus", "D7", "Dm7", "G7", "Cmaj7", "F7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "C7#11", "Bm7", "Em7", "Dm7", "Bm7b5", "E7b9", "Am7", "D7", "", "Bm7b5", "E7", "Am7", "D7", "Am7", "D7", "C7", "Bb7", "Am7", "D7", "C7", "C#dim7", "D7sus", "D7", "Dm7", "G7", "Cmaj7", "F7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "B7", "Em7", "F7", "B7", "E7", "A7", "D7", "G6", "G6"],
  },
  {
      title: 'When You Wish Upon A Star',
      composer: 'Leigh Harline',
      chords: ["Cmaj7", "A7b13", "Dm7", "G7", "C6", "F7", "Em7", "Ebdim7", "Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Dm7", "G7", "Cmaj7", "Dm7", "G7", "Cdim7", "Cmaj7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "A7b13", "Dm7", "G7", "C6", "F7", "Em7", "Ebdim7", "Dm7", "G7", "Dm7", "G7", "C6"],
  },
  {
      title: 'When You\'re Smilin\'',
      composer: 'Shay - Fisher - Goodwin',
      chords: ["Bb6", "Bb6", "Bbmaj7", "Bbmaj7", "Dm7", "G7", "Cm7", "F7", "Cm7", "Cm7", "Cm7", "Cm7", "F7", "F7#5", "Bbmaj7", "Bbmaj7", "Fm7", "Bb7", "Eb6", "Eb6", "Gm7", "C7", "Cm7", "F7", "Bb6", "Bb6", "Ab7#11", "G7", "Cm7", "F7", "Bb6", "Bb6", ""],
  },
  {
      title: 'When Your Lover Has Gone',
      composer: 'E.A. Swan',
      chords: ["Gmaj7", "G6", "Gm6", "C7", "A7", "A7", "Cm6", "F7", "Gmaj7", "Em7", "A7", "Bbdim7", "Bm7", "E7#5", "Am7", "D9", "Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "G6", "Gm6", "C7", "A7", "A7", "Cm6", "F7", "Gmaj7", "Em7", "Gmaj7", "F7", "E7", "Am7", "Eb7", "D7#5", "G6", "Em7", "Am7", "D7"],
  },
  {
      title: 'Where Are You?',
      composer: 'Jimmy McHugh',
      chords: ["Gmaj7", "C7", "Bm7", "Bbdim7", "Am7", "D7sus", "Gmaj7", "Em7", "A7", "Bbdim7", "Bm7", "E7", "Am7", "D7", "B7", "E7", "Am7", "D7", "Cmaj7", "Am7", "F#m7", "B7", "Em7", "Am7", "D7", "", "Gmaj7", "Dm7", "G7", "", "Cmaj7", "Am7", "F#m7", "B7", "Em7", "A7", "Am7", "D7", "Gmaj7", "C7", "Bm7", "Bbdim7", "Am7", "D7sus", "Gmaj7", "Em7", "A7", "Bbdim7", "Bm7", "E7", "Am7", "D7", "G6", "Am7", "D7", ""],
  },
  {
      title: 'Where Or When',
      composer: 'Richard Rodgers',
      chords: ["Eb", "Eb6", "Ebmaj7", "Ebmaj7", "Abmaj7", "Abmaj7", "Abmaj7", "Fm7", "Bb7sus", "Ebmaj7", "Bb7sus", "Cm7", "Fm7", "Dm7b5", "G7b9", "Cm7", "Fm7", "B7#11", "Bb7", "Eb", "Eb6", "G7", "Cm7", "Abmaj7", "C7b9", "Fm7", "C7b9", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'While We\'re Young',
      composer: 'Wilder-Palitz',
      chords: ["Eb6", "Fm7", "Gm7", "Cm7", "F7", "F7", "Bb7", "Bb7", "Eb6", "Fm7", "Gm7", "Cm7", "Dm7b5", "Dm7b5", "G7b9", "G7b9", "Cm7", "Cm7", "F7", "F7", "Cm7", "Cm7", "Db7", "Db7", "Cm7", "Cm7", "F7", "F7", "Fm7", "Fm7", "Bb7", "Bb7", "Eb6", "Fm7", "Gm7", "Cm7", "F7", "F7", "Bb7", "Bb7", "Eb6", "Fm7", "Gm7", "Cm7", "Dm7b5", "Dm7b5", "G7b9", "G7b9", "Cm7", "Cm7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Db7", "Db7", "Eb6", "Ebdim7", "Bb7sus", "Bb7", "Eb6", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Whisper Not',
      composer: 'Benny Golson',
      chords: ["Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm7", "Bm7b5", "Em7b5", "A7b9", "Dm7", "Em7", "Fm7", "G7b9", "Am7b5", "D7b9", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm7b5", "G7b9", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "Gm7", "Em7b5", "A7b9", "Dm7", "Bm7b5", "Em7b5", "A7b9", "Dm7", "Em7", "Fm7", "G7b9"],
  },
  {
      title: 'Who Can I Turn To',
      composer: 'Newley-Bricusse',
      chords: ["Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Am7b5", "D7#9", "Gm7", "Cm7", "Fm7", "F#dim7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Dm7b5", "G7b9", "Cm7", "F7", "F#dim7", "Eb", "Gbdim7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Who Cares',
      composer: 'George Gershwin',
      chords: ["Cmaj7", "F7#11", "E7b13", "E7b13", "A7b13", "A7b13", "Dm7", "G7", "Em7", "Fm7", "Em7", "Ebdim7", "Dm7", "G7", "Em7", "Am7", "Ebm7", "Ab7", "Dm7", "G7", "Cmaj7", "F7#11", "E7b13", "E7b13", "Am7", "Am7", "D7", "D#dim7", "Em7", "F7", "Em7", "A7", "Dm7", "G7", "C6", "C6"],
  },
  {
      title: 'Who\'s Sorry Now?',
      composer: 'Snyder-Kalmar-Ruby',
      chords: ["Cmaj7", "Cmaj7", "E7", "E7", "A7", "A7", "D7", "D7", "G7", "G7", "Cmaj7", "D7", "Gmaj7", "D7", "G7", "Fm6", "G7", "Dm7", "G7", "", "Cmaj7", "Cmaj7", "E7", "E7", "A7", "A7", "Dm7", "A7", "Fmaj7", "Fm6", "Cmaj7", "A7", "D7", "Fm7", "G7", "Cmaj7", "G7", "Cmaj7"],
  },
  {
      title: 'Why Do I Love You?',
      composer: 'Jerome Kern',
      chords: ["Abmaj7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "F7", "Bbm7", "Eb7", "Cm7", "Fm7", "Bbm7", "Gm7b5", "C7b9", "Fm7", "Bb7", "Bbm7", "Eb7"],
  },
  {
      title: 'Why Don\'t You Do Right?',
      composer: 'Kansas-Joe McCoy',
      chords: ["Dm6", "Bm7b5", "Bb7", "A7", "Dm6", "Bm7b5", "Bb7", "A7", "Gm7", "Gm7", "A7", "Dm6", "Bm7b5", "Bb7", "A7", "Bb7", "A7", "Bb7", "A7", "Dm6", "Bm7b5", "Bb7", "A7"],
  },
  {
      title: 'Wild Flower',
      composer: 'Wayne Shorter',
      chords: ["Bbmaj7", "Abm7", "A7#5#9", "D7b9sus", "D7b9sus", "Bbmaj7", "Abm7", "A7#9", "D7#9", "D7#9", "G7b9sus", "Cm7", "F13", "Bbmaj7#5", "Abmaj7#11", "Gm11", "C13b9", "Fm9", "E7#9", "Ebmaj7", "Cm7", "Abm7", "A7#9", "D7b9sus", "D7b9sus", "Bbmaj7", "Abm7", "A7#9", "D7#9", "D7#9", "G7b9sus", "Cm7", "F13", "Bbmaj7#5", "Bbm11", "Bbm11", "Eb13", "Abmaj7", "Dbmaj7", "Abm7", "Eb7#11", "D7#9", "D7#9"],
  },
  {
      title: 'Will You Still Be Mine?',
      composer: 'Matt Dennis',
      chords: ["Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Dm7b5", "G7b9", "Cm7", "Cm7", "F7", "F7", "F#m7", "B7", "Bb7#9", "Ebmaj7", "C7", "Fm7", "Bb7", "Abmaj7", "Abmaj7", "Db7#11", "Db7#11", "Ebmaj7", "Ebmaj7", "F#m7", "B7", "Fm7", "Bb7"],
  },
  {
      title: 'Willow Weep For Me',
      composer: 'Ann Ronell',
      chords: ["G7", "C7", "G7", "C7", "G7", "", "Am7", "Bbdim", "G6", "Am7", "Dm7", "Db7", "C7", "Db7#11", "C7", "", "Am7", "D7", "G7", "C7", "G7", "D7", "Cm7", "Gm7", "G7b9", "Cm7", "Bb7", "Ab7", "G7b9", "Cm7", "Gm7", "G7b9", "Cm7", "Bb7", "Ab7", "", "Am7", "D7", "G7", "C7", "G7", "C7", "G7", "", "Am7", "Bbdim", "G6", "Am7", "Dm7", "Db7", "C7", "Db7#11", "C7", "", "Am7", "D7", "G7", "C7", "G7", "D7"],
  },
  {
      title: 'Windows',
      composer: 'Chick Corea',
      chords: ["Bm7", "Bm7", "Bm7", "Bm7", "G#m7b5", "G#m7b5", "G#m7b5", "C#7", "F#m7", "F#m7", "F#m7", "F#m7", "D7sus", "D7sus", "D7sus", "D7sus", "Emaj7#11", "Emaj7#11", "Emaj7#11", "Emaj7#11", "Emaj7#11", "Emaj7#11", "Emaj7#11", "Emaj7#11", "Ab7", "A7", "Ab7", "A7", "Ab7", "A7", "Ab7", "A7", "Emaj7", "Emaj7", "C#m7", "C#m7", "Bbm7b5", "Bbm7b5", "Eb7", "Eb7", "Abm7", "Abm7", "Db7", "Db7", "Emaj7", "D#m7", "C#m7", "C7#11", "Bmaj7", "Bmaj7", "C#m7", "C#m7"],
  },
  {
      title: 'Witch Hunt',
      composer: 'Wayne Shorter',
      chords: ["Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Cm7", "Eb7", "Eb7", "Eb7", "Eb7", "Cm7", "Cm7", "Cm7", "Cm7", "Gbmaj7", "F7", "Emaj7", "Eb7", "Eb7", "Abm7", "A", "Abm7", "G7b9b13"],
  },
  {
      title: 'Witchcraft',
      composer: 'Cy Coleman',
      chords: ["F6", "F6", "Abdim7", "Abdim7", "Gm7", "C7sus", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7", "Ab6", "G7b9", "C7", "C7", "Fmaj7", "Fmaj7", "Bb7#11", "Bb7#11", "Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "F", "Am6", "F", "Am", "Gm7", "Eb", "Gm7", "C7", "F6", "F6", "Abdim7", "Abdim7", "Gm7", "C7", "F6", "Gm7", "C7"],
  },
  {
      title: 'With A Song In My Heart',
      composer: 'Richard Rodgers',
      chords: ["Ebmaj7", "C7b13", "Fm7", "Bb7", "Ebmaj7", "C7b13", "Fm7", "G7b9", "Cm7", "Cm7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Dm7b5", "G7b9", "", "Cm7", "Cm7", "Am7b5", "Am7b5", "Abmaj7", "Abmaj7", "Cm7", "Cm7", "Am7b5", "Am7b5", "D7b9", "D7b9", "G7", "C7b9", "Fm7", "Bb7"],
  },
  {
      title: 'With The Wind And The Rain In Your Hair',
      composer: 'Clare Edwards',
      chords: ["Ebmaj7", "G7b9", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebdim7", "Ebdim7", "Ebmaj7", "Fm7", "Gm7", "G7b9", "Cm7", "F7", "Fm7", "Bb7", "Dm7b5", "G7b9", "Cm7", "Cm7", "Am7b5", "D7b9", "Gm7", "Eb7", "Abmaj7", "Db7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Without A Song',
      composer: 'Vincent Youmans',
      chords: ["Ebmaj7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7", "Gm7", "C7", "Fm7", "Bb7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "Am7b5", "D7b9", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'Without A Song (Joe Henderson Changes)',
      composer: 'Vincent Youmans',
      chords: ["Ebmaj7", "A7#11", "Abmaj7", "Gb7", "Bmaj7", "E7#9#11", "Db7#11", "Bb7sus", "Gm7", "Gb7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Gm7", "Fm7", "Eb6", "Bb7", "Abmaj7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Gm7", "Am7b5", "D7b13", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "A7#11", "Abmaj7", "Gb7", "Bmaj7", "E7#9#11", "Db7#11", "Bb7sus", "Gm7", "Gb7", "Fm7", "Bb7", "Eb6", "Abmaj7", "Gm7", "Fm7", "Eb6", "Bb7"],
  },
  {
      title: 'Woody\'n You',
      composer: 'Dizzy Gillespie',
      chords: ["Gm7b5", "C7b9", "Fm7b5", "Bb7b9", "Ebm7b5", "Ab7b9", "Dbmaj7", "Dbmaj7", "Abm7", "Db7", "Abm7", "Db7", "Abm7", "Db7", "Gbmaj7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Abmaj7", "Gm7b5", "C7b9", "Fm7b5", "Bb7b9", "Ebm7b5", "Ab7b9", "Dbmaj7", "Dbmaj7"],
  },
  {
      title: 'Work Song',
      composer: 'Nat Adderley',
      chords: ["Fm", "Fm", "Fm", "Fm", "Fm", "Fm", "C7", "C7", "Fm", "Fm", "Fm", "Fm", "F7", "Bb7", "G7", "C7", "Fm"],
  },
  {
      title: 'Wouldn\'t It Be Loverly',
      composer: 'Frederick Loewe',
      chords: ["G6", "Em7", "Am7", "D7sus", "G6", "Em7", "A7", "D7", "G6", "D7", "Dm6", "E7", "G6", "Ddim7", "Am7", "D7", "Dmaj7", "Ebdim7", "A7", "A7", "Dmaj7", "F#7", "Bm7", "D7", "G6", "F#7", "Bm7", "E9", "A6", "Ebdim7", "Am7", "D7", "G6", "Em7", "Am7", "D7sus", "G6", "Em7", "A7", "D7", "G6", "D7", "Dm6", "E7", "G6", "Em7", "Am7", "D7", "G6", "Am7", "D7", "G6", "F9", "G6"],
  },
  {
      title: 'Wow',
      composer: 'Lennie Tristano',
      chords: ["Gm7", "C7", "F6", "Gm7", "Am7", "Abmaj7", "Gmaj7", "Gbm7", "Fmaj7", "F#dim7", "Gm7", "C7", "F6", "Am7", "Abmaj7", "Gmaj7", "Gbm7", "Fmaj7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "G7#11", "G7#11", "C7#11", "C7#11", "Gm7", "C7", "F6", "Gm7", "Am7", "Abmaj7", "Gmaj7", "Gbm7", "Fmaj7", "F#dim7"],
  },
  {
      title: 'Wrap Your Troubles In Dreams',
      composer: 'Harry Barris',
      chords: ["Cmaj7", "F7", "Em7", "A7", "Dm7", "E7", "Am7", "C7", "Fmaj7", "F#dim7", "Cmaj7", "A7", "D7", "G7", "Cmaj7", "G7", "F#7", "B7", "E7", "A7", "D7", "G7", "Cmaj7", "F#7", "B7", "E7", "A7", "D7", "G7", "Cmaj7", "G7", "Cmaj7", "F7", "Em7", "A7", "Dm7", "E7", "Am7", "C7", "Fmaj7", "F#dim7", "Cmaj7", "A7", "D7", "G7", "Cmaj7", "G7"],
  },
  {
      title: 'Yardbird Suite',
      composer: 'Charlie Parker',
      chords: ["C6", "Fm7", "Bb7", "C7", "Bb7", "A7", "D7", "G7", "Em7", "A7", "Dm7", "G7", "Em7", "F#m7b5", "B7b9", "Em7", "A7", "Dm7", "Em7b5", "A7", "D7", "Dm7", "G7", "C6", "Fm7", "Bb7", "C7", "Bb7", "A7", "D7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Yes And No',
      composer: 'Wayne Shorter',
      chords: ["D7sus", "D7sus", "D7sus", "D7sus", "Dmaj7", "Dmaj7", "Dmaj7", "Dmaj7", "Am7", "D7", "Gmaj7", "F7", "Bbmaj7", "Bbmaj7", "Em7", "Em7", "Am7b5", "Am7b5", "D7b9", "D7b9", "Gm7", "Gm7", "C7", "C7", "Fm7", "Fm7", "Bb7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7", "D7"],
  },
  {
      title: 'Yesterday\'s Gardenias',
      composer: 'Robertson Mysels',
      chords: ["Bbmaj7", "Cm7", "Dm7", "G7b9", "Cm7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Eb7#11", "Dm7", "Gm7", "Em7", "A7", "Dmaj7", "Bm7", "Abm7", "Db7", "Gbmaj7", "Abm7", "Bbm7", "Bb7", "Ebmaj7", "Cm7", "A7", "Dmaj7", "Bm7", "Cm7", "F7", "Bbmaj7", "Cm7", "Dm7", "G7b9", "Cm7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Eb7#11", "Dm7", "Gm7", "Em7", "A7", "Am7b5", "D7b9", "Ebmaj7", "Cm7", "Am7", "D7", "Gm7", "Dm7b5", "G7b9", "Db7#11", "Cm7", "Dm7", "Ebmaj7", "F7sus", "Bb6", "Db7", "Gbmaj7", "F7sus", "Bb"],
  },
  {
      title: 'Yesterdays',
      composer: 'Jerome Kern',
      chords: ["Dm", "Em7b5", "A7b9", "Dm", "Em7b5", "A7b9", "Dm", "Dm", "Dm7", "Bm7b5", "E7", "A7#5", "D9", "G13", "C9", "F13", "Bbmaj7", "Em7b5", "A7b9"],
  },
  {
      title: 'You And The Night And The Music',
      composer: 'Arthur Schwartz',
      chords: ["Cm", "Dm7b5", "G7b9", "Cm", "C7b9", "Fm7", "Dm7b5", "G7b9", "Cmaj7", "Cmaj7", "Ab7", "Ab7", "G7", "G7", "Ab7", "Ab7", "G7", "Ab7", "G7", "Cm", "Dm7b5", "G7b9", "Cm", "C7b9", "Fm7", "Dm7b5", "G7b9", "Cm", "Am7b5", "Dm7b5", "G7b9", "Cm"],
  },
  {
      title: 'You Are Too Beautiful',
      composer: 'Richard Rodgers',
      chords: ["Dm7", "G7", "Em7", "A7b9", "Dm7", "G7b9", "Cmaj7", "", "Gm7", "C7", "Fmaj7", "Bb7", "C6", "Am7", "Dm7", "G7", "Em7", "A7b9", "Fmaj7", "F#dim7", "C6", "A7b9", "Dm7", "G7b9", "Cmaj7", "Bm7b5", "E7b9", "Am7", "E7b9", "Am7", "D7", "Dm7", "", "Em7", "A7", "Dm7", "G7", "Em7", "A7b9", "Dm7", "G7b9", "Cmaj7", "", "Gm7", "C7", "Fmaj7", "Bb7", "C6", "Am7", "D7", "G7", "C6", "", "Em7", "A7"],
  },
  {
      title: 'You Better Go Now',
      composer: 'Reichner-Graham',
      chords: ["Ebmaj7", "Bb7#5", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Bb7#5", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Eb", "Fm7", "Gm7", "Ab", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "F7", "Fm7", "Bb7", "Ebmaj7", "Bb7#5", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'You Better Leave It Alone',
      composer: 'Clifford Jordan',
      chords: ["Bb13", "Bb13", "Bb13", "Bb13", "Eb13", "Eb13", "Eb13", "Eb7", "Bb13", "Bb13", "Ab13", "G7#5", "Cm9", "F13", "Bb13", "F13"],
  },
  {
      title: 'You Brought A New Kind Of Love To Me',
      composer: 'Fain-Kaval-Norman',
      chords: ["Bbm7", "Eb7", "Ab7", "G7", "Gb7", "F7", "Bb7", "Eb7", "Ab6", "F7", "Bbm7", "Eb7", "Fm", "Fm", "Fm7", "Dm7b5", "Db7", "C7", "Fm7", "Bb7", "Ebmaj7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Bbm7", "Eb7", "Bbm7", "Eb7", "Ab7", "G7", "Gb7", "F7", "Bb7", "Eb7", "Ab6", "F7", "Bbm7", "Eb7"],
  },
  {
      title: 'You Can Depend On Me',
      composer: 'Carpenter-Dunlap-Hines',
      chords: ["Gm7", "C7", "Fmaj7", "Am7", "Abdim7", "Gm7", "C7", "F6", "Am7b5", "D7", "Cm7", "F7", "Bb6", "Bb6", "G7", "G7", "Gm7", "C7", "Gm7", "C7", "Fmaj7", "Am7", "Abdim7", "Gm7", "C7", "F6", "Am7b5", "D7"],
  },
  {
      title: 'You Do Something To Me',
      composer: 'Cole Porter',
      chords: ["Eb6", "D7", "Eb6", "Eb6", "", "Eb6", "Gm7", "C7b9", "Fm7", "Bb7", "Fm7", "C7b9", "Fm7", "C7b9", "F7", "F7", "Fm7", "Bb7", "Gm7", "Gbdim7", "Fm7", "Edim7", "F#m7", "B7", "Fm7", "Bb7", "F#m7", "B7", "Fm7", "Bb7", "Eb6", "D7", "Eb6", "Gm7", "C7", "F7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'You Don\'t Know What Love Is',
      composer: 'Raye-DePaul',
      chords: ["Fm7", "Db7", "C7b9", "Fm7", "C7b9", "Db7", "Gm7b5", "C7b9", "Fm7", "E7", "Ebm7", "D7", "Db7", "Gm7b5", "C7b9", "Bbm7", "Eb7", "Abmaj7", "Bbm7", "Eb7", "Abmaj7", "Dm7", "G7", "Cmaj7", "Db7", "C7b9", "Fm7", "Db7", "C7b9", "Fm7", "C7b9", "Db7", "Gm7b5", "C7b9", "Fm7", "E7", "Ebm7", "D7", "Db7", "C7b9", "Fm6"],
  },
  {
      title: 'You Go To My Head',
      composer: 'Fred Coots',
      chords: ["Ebmaj7", "Gm7", "Abm7", "Db7", "Gbmaj7", "Fm7b5", "Bb7b13", "Ebm7", "Cm7b5", "Fm7b5", "Bb7b13", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Abmaj7", "Adim7", "Eb6", "Eb6", "Am7", "D7", "Bm7", "E7b9", "Am7", "D7", "Gmaj7", "Bb7", "Ebmaj7", "Gm7", "Abm7", "Db7", "Gbmaj7", "Fm7b5", "Bb7b13", "Ebm7", "Cm7b5", "Fm7b5", "Bb7b13", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Ebmaj7", "Bb6", "Cm7", "Cm7", "Am7b5", "D7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7"],
  },
  {
      title: 'You Keep Coming Back Like A Song',
      composer: 'Irving Berlin',
      chords: ["Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Eb7", "Abmaj7", "Adim7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "F7", "Bb7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "G7", "G7", "Abmaj7", "Adim7", "Ebmaj7", "Eb7", "Abmaj7", "Abm7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7"],
  },
  {
      title: 'You Made Me Love You',
      composer: 'James Monaco',
      chords: ["Cmaj7", "F7#11", "Em7", "Ebdim7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "C6", "C6", "A7", "A7", "D7", "D7", "D7", "D7", "Dm7", "G7", "Cmaj7", "F7#11", "Em7", "Ebdim7", "Dm7", "G7", "Dm7", "G7", "Dm7", "G7", "G7", "F7", "E7", "E7", "A7", "A7", "D7", "D7", "D#dim7", "Em7", "Ebdim7", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'You Make Me Feel So Young',
      composer: 'Josef Myrow',
      chords: ["Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Fm7", "F7", "Bbmaj7", "Bb7", "Ebmaj7", "Eb6", "Dm7", "Dbdim7", "Cm7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Am7b5", "D7b9", "Gm7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Cm7", "F7", "Bbmaj7", "Bdim7", "Fm7", "F7", "Bb7", "Ebmaj7", "Ebm6", "Dm7", "G7", "Cm7", "F7", "Dm7", "G7", "Cm7", "F7", "D7#5", "Ab7#11", "G7b9", "Cm7", "F7sus", "F7", "Bb6", "Gm7", "Cm7", "F7"],
  },
  {
      title: 'You Must Believe In Spring',
      composer: 'Michel Legrand',
      chords: ["C#m7b5", "F#7b9", "F#7b9", "Bm7", "Em7", "A7", "A7b9", "Dmaj7", "G#m7b5", "C#7b9", "F#m7b5", "B7b9", "Em7", "A7", "Dmaj7", "", "G#7#5", "", "C#m7b5", "F#7b9", "F#7b9", "Bm7", "Em7", "A7", "A7b9", "Dmaj7", "G#m7b5", "C#7b9", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "", "A7#5", "", "Dm7b5", "G7b9", "G7b9", "Cm7", "Fm7", "Bb7", "Bb7b9", "Ebmaj7", "Am7b5", "D7b9", "Gm7b5", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Abmaj7#11", "Dm7b5", "G7b9", "Cm6"],
  },
  {
      title: 'You Stepped Out Of A Dream',
      composer: 'Nacio-Herb-Brown',
      chords: ["Cmaj7", "Cmaj7", "Dbmaj7", "Dbmaj7", "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Am7", "D7", "Ebm7", "Ab7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Dbmaj7", "Dbmaj7", "Bbm7", "Eb7", "Gb7#11", "F7", "Dm7b5", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "A7", "Dm7", "G7"],
  },
  {
      title: 'You Took Advantage Of Me',
      composer: 'Richard Rodgers',
      chords: ["Eb6", "Edim7", "Fm7", "Bb7", "Gm7", "Gbdim7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "", "Fm7", "Bb7", "Cm7", "D7", "G7", "C7", "F7", "Bb7", "Ebmaj7", "G7b9", "Cm7", "D7", "G7", "C7", "F7", "Bb7", "Eb6", "", "Fm7", "Bb7", "Eb6", "Edim7", "Fm7", "Bb7", "Gm7", "Gbdim7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Db7", "Gm7", "C7", "Fm7", "Bb7", "Eb6", "", "Fm7", "Bb7"],
  },
  {
      title: 'You Turned The Tables on Me',
      composer: 'Louis Alter',
      chords: ["Gm7", "C7", "Fmaj7", "Gm7", "Am7", "D7b9", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Bbmaj7", "Eb7#11", "Am7", "Abdim7", "Gm7", "G#dim7", "Am7", "D7b9", "Gm7", "D7", "Gm7", "C7", "Fmaj7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm6", "Eb7", "Fmaj7", "Abdim7", "Gm7", "D7b9", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'You Won\'t Forget Me',
      composer: 'Goell-Spielman',
      chords: ["Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7b9", "Bbm7", "G7b9", "Am7b5", "D7b9", "Gm7", "Gm7", "Em7b5", "A7b9", "Eb7", "D7", "Am7b5", "D7b9", "Gm7", "C7", "Cm7", "F7b9", "Ab7sus", "G7b9", "Cm7", "Ab7sus", "D7b9", "G7", "Gb7", "F7", "Bbm7", "C", "B"],
  },
  {
      title: 'You\'d Be So Nice To Come Home To',
      composer: 'Cole Porter',
      chords: ["Am7", "Bm7b5", "E7b9", "Am7", "Am7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "Am7", "F#m7b5", "B7b9", "Bm7b5", "E7b9", "Am7", "Bm7b5", "E7b9", "Am7", "Am7", "Gm7", "C7", "Fmaj7", "Fmaj7", "F#dim7", "C6", "G#dim7", "Am7", "D7", "Ab7", "G7", "C6", "Bm7b5", "E7b9"],
  },
  {
      title: 'You\'re Blasé',
      composer: 'Ord Hamilton',
      chords: ["Fmaj7", "Abdim7", "Gm7", "F#dim7", "Gm7", "F#dim7", "Gm7", "C7", "Am7", "D7", "Gm7", "C7", "Cm", "F7", "Bbm", "Eb7", "Cm", "F7", "Bbm", "Eb7", "Am7", "Abdim7", "Gm7", "C7", "Fmaj7", "Abdim7", "Gm7", "F#dim7", "Gm7", "F#dim7", "Gm7", "C7", "F6", "Bb7", "F6"],
  },
  {
      title: 'You\'re Everything',
      composer: 'Chick Corea',
      chords: ["Amaj7", "Abm6", "Gmaj7", "F#7b9", "Em7", "Gmaj7#11", "G#7sus", "Gm7", "F#m7", "Fm7", "Bb9", "Em7", "A7", "Dmaj7", "Dm7", "Amaj7", "Abm6", "Gmaj7", "F#7b9", "Bm", "Ebmaj7", "Amaj7#5", "G#7", "G13", "F#7#5#9", "F9", "E7b9", "Amaj7", "Em7", "Amaj7", "Fmaj7#5", "Emaj7", "D#7", "G#m", "C#m7", "G#m", "G7#9", "Cmaj7", "B7#5#9", "Em7", "A7", "Dmaj7", "Dm7", "Amaj7", "Abm6", "Gmaj7", "F#7b9", "Bm", "Ebmaj7", "Amaj7#5", "G#7", "G13", "F#7#5#9", "F9", "E7b9", "Amaj7", "Em7", "Amaj7", "Em7"],
  },
  {
      title: 'You\'re Laughing At Me',
      composer: 'Irving Berlin',
      chords: ["Eb6", "Fm7b5", "Bb7b9", "Ebmaj7", "Gm7", "Cm7", "Bdim7", "Ebmaj7", "Am7b5", "D7b9", "Gm7", "Cm7", "Abm7", "Db7", "Gbmaj7", "Db7sus", "Db9", "Gbmaj7", "Db7sus", "Db7", "Bbmaj7", "F7b9", "Fm7", "Bb9", "Bm7", "E13", "Eb6", "Fm7b5", "Bb7b9", "Ebmaj7", "Gm7", "Cm7", "Bdim7", "Ebmaj7", "Am7b5", "D7", "Gmaj7", "G7sus", "G7", "Cm7", "Eb7", "Ab6", "Abm6", "Gm7", "C9", "Gbdim7", "Fm6", "Edim7", "Fm7", "D7", "Fdim7", "Eb69", "Fm7", "Bb7sus"],
  },
  {
      title: 'You\'re My Everything',
      composer: 'Harry Warren',
      chords: ["Am7", "Gm7", "C7", "F#m7", "B7", "Em7", "A7", "Dm7", "Dm7", "G7", "Fm", "Em7", "Ebm7", "Ab7", "Dm7", "Dm7", "Bm7b5", "E7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "F#7#11", "F7", "Em7", "A7", "Dm7", "Dm7", "Bm7b5", "E7b9", "Am7", "Ab7", "Gm7", "C7", "Fmaj7", "Bb7", "Em7", "Ebm7", "Dm7", "G7", "Abmaj7", "Abmaj7"],
  },
  {
      title: 'You\'re My Thrill',
      composer: 'Jay Gorney',
      chords: ["E7", "Bm7b5", "E7", "Bm7b5", "E7", "Em7b5", "A7b9", "D7", "Bb7", "Am7", "F7", "Em7b5", "A7b9", "Em7b5", "A7b9", "Dm7", "Dm7", "F#m7b5", "B7", "F#m7b5", "B7", "Emaj7", "Cm7", "F7", "E7", "Bm7b5", "E7", "Bm7b5", "E7", "Em7b5", "A7b9", "D7", "Bb7", "Am7", "F7", "Am7", "D7", "Dm7", "A6", "A6"],
  },
  {
      title: 'You\'re Nobody Till Somebody Loves You',
      composer: 'Morgan-Stock-Cavanaugh',
      chords: ["Ebmaj7", "G7", "C7", "C7", "Fm7", "Bb7", "Eb6", "Eb6", "Gm7", "Gbdim7", "Fm7", "C7", "Fm7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7", "Ebmaj7", "G7", "C7", "C7", "Fm7", "C7", "Fm7", "Fm7", "Abmaj7", "Adim7", "Ebmaj7", "Gm7", "C7", "Fm7", "Fm7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'You\'re The Top',
      composer: 'Cole Porter',
      chords: ["Ebmaj7", "Edim7", "Fm7", "Bb7", "Gm7", "F#dim7", "Gm7", "C7", "Fm7", "Fm7", "Bb7", "Ebmaj7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Am7", "D7", "Gm7", "D7b9", "Gm7", "D7b9", "Bb7", "Bb7", "Bb7#5", "Eb6", "Eb6", "Edim7", "Fm7", "Bb7", "Cm", "Cm", "Cm7", "Cm6", "Dm7b5", "G7b9", "Abmaj7", "Gm7", "Fm7", "Bb7", "Eb6", "Am7b5", "D7", "G7", "C7", "F7", "Fm7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Gm7", "Fm7", "Gm7", "Abmaj7", "C7b9", "F7", "Fm7", "Bb7sus", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'You\'ve Changed',
      composer: 'Carl Fisher',
      chords: ["Ebmaj7", "Am7b5", "D7b13", "Gm7b5", "C7", "C7b13", "F7", "B7", "Bb7", "Eb6", "C7", "Fm7", "Bb7", "Abmaj7", "Abm6", "Ebmaj7", "Bbm7", "Eb7", "Abmaj7", "Abm6", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7b13", "Gm7b5", "C7", "C7b13", "F7", "B7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Young And Foolish',
      composer: 'Albert Hague',
      chords: ["Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7sus", "G7", "Cmaj7", "Ebdim7", "C", "E7b13", "Am7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Gm7", "C7", "Fmaj7", "Em7b5", "A7b9", "Dm7", "G7sus", "G7", "Cmaj7", "E7b13", "Am7", "D7", "D#dim7", "Cmaj7", "A7b13", "Dm7", "G7", "C6", "Dm7", "G7"],
  },
  {
      title: 'Young At Heart',
      composer: 'Johnny Richards',
      chords: ["Bbmaj7", "Bbmaj7", "Dbdim7", "Cm7", "Cm7", "F7", "Cm7", "F7", "F7#5", "Bbmaj7", "Bbmaj7", "Dm7b5", "G7b9", "Dm7b5", "G7b9", "Gm7", "C7", "Gm7", "C7", "F7", "Cm7", "F7", "Bb6", "Cm7", "F7"],
  },
  {
      title: 'Yours Is My Heart Alone',
      composer: 'Franz Lehar',
      chords: ["Bm7b5", "E7b9", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Cm7", "F7", "Am7b5", "D7b9", "Gm7", "Gm7", "Bbm7", "Eb7", "Fmaj7", "Fmaj7", "Bm7b5", "E7b9", "Am7", "D7", "Gm7", "C7", "F6", "F6"],
  },
  {
      title: 'Zing Went The Strings Of My Heart',
      composer: 'James Hanley',
      chords: ["Ebmaj7", "Ebmaj7", "Cm7", "Cm7", "Fm7", "Fm7", "Bb7", "Bb7", "Abmaj7", "Abmaj7", "Abm7", "Abm7", "Cm7", "F7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Am7b5", "D7", "Gm7", "F7", "Fm7", "Bb7#5", "Ebmaj7", "Ebmaj7", "Cm7", "Cm7", "Fm7", "Fm7", "Bb7", "Bb7", "Abmaj7", "Abmaj7", "Abm7", "Abm7", "Cm7", "F7", "Bb7", "Eb6", "Fm7", "Bb7"],
  },
  {
      title: 'Zingaro (Retrato Em Branco E Preto)',
      composer: 'Antonio-Carlos Jobim',
      chords: ["Gm7", "Gm7", "D7b9", "D7b9", "Fm6", "Fm6", "Emaj7", "Ebmaj7", "Ebmaj7", "Cm7", "D7b9", "Bbmaj7", "Bbmaj7", "A13#9", "A13#9", "Dmaj7", "Ab7#11", "Gm7", "Gm7", "D7b9", "D7b9", "Fm6", "Fm6", "Emaj7", "Ebmaj7", "Ebmaj7", "Cm7", "C#dim7", "Gm", "Ebmaj7", "Cm7", "Ebm7", "D7", "Gm7", "Ebm7", "Ebm6", "Cm7", "C#dim7", "Gm", "Ebmaj7", "Cm7", "Ebm7", "D7", "G7b13", "G7b13"],
  },
  {
      title: 'Zoltan',
      composer: 'Woody Shaw',
      chords: ["Cmaj7#11", "Cmaj7#11", "Cmaj7#11", "Cmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Gbmaj7#11", "Fmaj7#11", "Ebmaj7#11", "Ebmaj7#11", "Ebmaj7#11", "Fmaj7#11", "Abmaj7#11", "Bbmaj7#11", "Cmaj7#11", "Cmaj7#11", "Cmaj7#11", "Cmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11", "Bbmaj7#11"],
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
