import { selectionOptions } from '../values/selectionOptions';

export const defineScale = {
  renderNotes(instrument, key) {
    const { keyOpts } = selectionOptions;
    const indexOfKey = keyOpts.indexOf(key);
    //gets new start point for scale based on selected key's index
    const newStartPoint = keyOpts.slice(indexOfKey, 12);
    //gets all notes that came before the selected key's index
    const oldStartPoint = keyOpts.slice(0, indexOfKey);
    //adds notes to appropriate octave
    const octave2Notes = newStartPoint.map(note => `${note}2`);
    const octave3notes = oldStartPoint.map(note => `${note}3`);
    const lastNote = [`${key}3`];
    //combines the three arrays into single array to represent scale
    const combinedNotes = octave2Notes.concat(octave3notes, lastNote);

    return { instrument, combinedNotes };
  },
};
