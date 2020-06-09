export const selectionInfo = {
  //****************************************************************************
  instrumentInfo: ['Instrument to play notes in'],

  //****************************************************************************
  scaleInfo: [
    'Chromatic: plays all',
    'Major: W-W-H-W-W-W-H',
    'Natural Minor: W-H-W-W-H-W-W',
    'Harmonic Minor: W-H-W-W-H-A2-H',
    'Melodic Minor: W-H-W-W-W-W-H ',
    'Major Pentatonic: W-W-W+H-W-W+H',
    'Minor Pentatonic: W+H-W-W-W+H-W',
    'Blues: W+H-W-H-H-W+H-W',
  ],

  //****************************************************************************
  keyInfo: ['First key to start the scale with'],

  //****************************************************************************
  orderInfo: [
    'Ascending: lowest frequency to highest frequency.',
    'Descending: highest frequency to lowest frequency.',
    'Random: will play notes in random order.',
  ],

  //****************************************************************************
  bpmInfo: [
    'Beats Per Minute: the number of beats, in quarter notes, per minute',
  ],

  //****************************************************************************
  noteLengthInfo: [
    'Length of note.',
    'Options are quarter, eighth, sixteenth, 32nd.',
  ],

  //****************************************************************************
  totalBeatsInfo: [
    'Total of different beats to play.',
    'Max number is defined by total notes in scale.',
    'Only works when order is set to random.',
  ],

  //****************************************************************************
  playxInfo: [
    'Number of times to play selected notes.',
    'Only works when order is set to random.',
  ],
};
