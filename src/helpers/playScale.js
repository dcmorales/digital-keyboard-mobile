import { playSound } from './playSound';

export const playScale = {
  playNotes({ instrument, combinedNotes }) {
    var offsetPlus = 200;

    combinedNotes.forEach(note => {
      setTimeout(() => {
        playSound.handleNoteSound(instrument, note);
      }, offsetPlus);
      offsetPlus += 200;
    });
  },
};
