import { playScale } from './playScale';

export const updateScale = {
  handleNoteShuffle(scaleInfoObject) {
    const { scaleNotes, totalBeats } = scaleInfoObject;
    const shuffle = scaleNotes => {
      for (let i = scaleNotes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [scaleNotes[i], scaleNotes[j]] = [scaleNotes[j], scaleNotes[i]];
      }
      return scaleNotes.slice(0, totalBeats);
    };
    scaleInfoObject.scaleNotes = shuffle(scaleNotes);
    this.handleTotalBeatChange(scaleInfoObject);
  },

  handleTotalBeatChange(scaleInfoObject) {
    const { playx, scaleNotes } = scaleInfoObject;
    const play2x = scaleNotes.concat(scaleNotes);
    const play3x = scaleNotes.concat(play2x);
    const notesRepeated =
      playx === '8'
        ? play3x.concat(play3x, play2x)
        : playx === '7'
        ? play3x.concat(play2x, play2x)
        : playx === '6'
        ? play3x.concat(play3x)
        : playx === '5'
        ? play2x.concat(play3x)
        : playx === '4'
        ? play2x.concat(play2x)
        : playx === '3'
        ? play3x
        : playx === '2'
        ? play2x
        : //playx === '1'
          scaleNotes;

    scaleInfoObject.notesDisplayed = scaleNotes;
    scaleInfoObject.scaleNotes = notesRepeated;
    this.handleScaleNotes(scaleInfoObject);
  },

  handleScaleNotes(scaleInfoObject) {
    const { getNotesPlayed, notesDisplayed } = scaleInfoObject;
    getNotesPlayed(notesDisplayed);
    playScale.playNotes(scaleInfoObject);
  },
};
