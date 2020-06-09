import React, { useContext } from 'react';
import { Button } from 'react-native-elements';

import { Context } from '../../context/SelectionContext';
import { updateScale } from '../../helpers/updateScale';

export default function PlayButton({ getNotesPlayed }) {
  const { order, scaleInfoObject } = useContext(Context);

  const renderPlayInfo = () => {
    scaleInfoObject.getNotesPlayed = getNotesPlayed;
    if (order === 'random') {
      updateScale.handleNoteShuffle(scaleInfoObject);
    } else {
      const { scaleNotes } = scaleInfoObject;
      scaleInfoObject.scaleNotes =
        order === 'descending' ? scaleNotes.reverse() : scaleNotes;
      scaleInfoObject.notesDisplayed = scaleNotes;
      updateScale.handleScaleNotes(scaleInfoObject);
    }
  };

  return (
    <Button
      title="Play Keys"
      buttonStyle={{ paddingHorizontal: 35 }}
      onPress={() => renderPlayInfo()}
    />
  );
}
