import { playScale } from './playScale';

export const updateScale = {
  handleNoteShuffle(scaleInfoObject) {
    const { scaleNotes } = scaleInfoObject;
    const shuffle = scaleNotes => {
      for (let i = scaleNotes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [scaleNotes[i], scaleNotes[j]] = [scaleNotes[j], scaleNotes[i]];
      }
      return scaleNotes;
    };
    scaleInfoObject.scaleNotes = shuffle(scaleNotes);
    console.log(scaleNotes);
    this.handleScaleNotes(scaleInfoObject);
  },

  handleScaleNotes(scaleInfoObject) {
    playScale.playNotes(scaleInfoObject);
  },
};
