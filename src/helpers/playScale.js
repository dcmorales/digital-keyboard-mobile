import { playSound } from './playSound';

export const playScale = {
  playNotes({ instrument, scaleNotes }) {
    var offsetPlus = 200;

    scaleNotes.forEach(note => {
      setTimeout(() => {
        playSound.handleNoteSound(instrument, note);
      }, offsetPlus);
      offsetPlus += 200;
    });
  },
};
