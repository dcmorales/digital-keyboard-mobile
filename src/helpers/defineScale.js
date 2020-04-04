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
    const scaleNotes = octave2Notes.concat(octave3notes, lastNote);

    if (scale === 'chromatic') {
      return { instrument, scaleNotes };
    } else {
      const scaleNum = scaleOpts.indexOf(`${scale}`) - 1;
      //uses defined cut points for each scale to get correct notes in scale
      const partialScale = cutPoints[1][scaleNum].map(point =>
        scaleNotes.slice(point[0], point[1])
      );
      //combines all arrays containing partial scale notes into a single array
      const scaleCombined = partialScale[0].concat(
        partialScale[1],
        partialScale[2],
        partialScale[3],
        partialScale[4],
        partialScale[5]
      );
      const slicePoint = cutPoints[0][indexOfKey][scaleNum];
      const scaleNow = scaleCombined.slice(0, slicePoint);
      const scaleNext = scaleCombined.slice(slicePoint, 8);
      return { instrument, scaleNotes: scaleNow.concat(scaleNext) };
    }
  },
};
