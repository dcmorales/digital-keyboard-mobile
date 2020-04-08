import { playSound } from './playSound';

export const playScale = {
  resetNote(handleSelectionChange) {
    setTimeout(() => {
      handleSelectionChange('activeNote', []);
    }, 200);
  },

  playNotes({
    instrument,
    scaleNotes,
    bpm,
    noteLength,
    handleSelectionChange,
  }) {
    var offsetPlus = 200;
    var bpmToMs = parseInt(60000 / (bpm * (noteLength / 4)), 10);
    scaleNotes.forEach(note => {
      setTimeout(() => {
        playSound.handleNoteSound(instrument, note);
        handleSelectionChange('activeNote', [note]);
        this.resetNote(handleSelectionChange);
      }, offsetPlus);
      offsetPlus += bpmToMs;
    });
  },
};
