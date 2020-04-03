import { selectionOptions } from '../values/selectionOptions';
import { cutPoints } from '../values/cutPoints';

export const defineScale = {
  renderNotes(instrument, key, scale) {
    const { keyOpts, scaleOpts } = selectionOptions;
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

    if (scale === 'chromatic') {
      return { instrument, combinedNotes };
    } else {
      const scaleNum = scaleOpts.indexOf(`${scale}`) - 1;
      //uses defined cut points for each scale to get correct notes in scale
      const scaleNotes = cutPoints[1][scaleNum].map(point =>
        combinedNotes.slice(point[0], point[1])
      );
      const scaleCombined = scaleNotes[0].concat(
        scaleNotes[1],
        scaleNotes[2],
        scaleNotes[3],
        scaleNotes[4],
        scaleNotes[5]
      );
      const slicePoint = cutPoints[0][indexOfKey][scaleNum];
      const scaleNow = scaleCombined.slice(0, slicePoint);
      const scaleNext = scaleCombined.slice(slicePoint, 8);
      return { instrument, combinedNotes: scaleNow.concat(scaleNext) };
    }
  },
};
