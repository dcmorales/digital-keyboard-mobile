import React, { useContext, useEffect } from 'react';
import { Button } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { defineScale } from '../../helpers/defineScale';
import { updateScale } from '../../helpers/updateScale';

export default function PlayButton() {
  const {
    instrument,
    key,
    scale,
    order,
    bpm,
    noteLength,
    totalBeats,
    playx,
    handleSelectionChange,
  } = useContext(Context);

  const scaleInfoObject = {
    scaleNotes: defineScale.renderNotes(key, scale),
    instrument,
    bpm,
    noteLength,
    totalBeats,
    playx,
    handleSelectionChange,
  };

  useEffect(() => {
    if (order === 'random') {
      handleSelectionChange('maxBeats', `${scaleInfoObject.scaleNotes.length}`);
      handleSelectionChange(
        'totalBeats',
        `${scaleInfoObject.scaleNotes.length}`
      );
    }
  }, [scale]);

  const renderPlayInfo = () => {
    if (order === 'random') {
      updateScale.handleNoteShuffle(scaleInfoObject);
    } else {
      const { scaleNotes } = scaleInfoObject;
      scaleInfoObject.scaleNotes =
        order === 'descending' ? scaleNotes.reverse() : scaleNotes;
      updateScale.handleScaleNotes(scaleInfoObject);
    }
  };

  return <Button title="Play Keys" onPress={() => renderPlayInfo()} />;
}
