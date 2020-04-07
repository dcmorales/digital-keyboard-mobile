import { playSound } from './playSound';

export const playScale = {
  playNotes({ instrument, scaleNotes, bpm, noteLength }) {
    var offsetPlus = 200;
    var bpmToMs = parseInt(60000 / (bpm * (noteLength / 4)), 10);
    scaleNotes.forEach(note => {
      setTimeout(() => {
        playSound.handleNoteSound(instrument, note);
      }, offsetPlus);
      offsetPlus += bpmToMs;
    });
  },
};
