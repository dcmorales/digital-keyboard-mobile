import React, { useContext } from 'react';
import { Button } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { defineScale } from '../../helpers/defineScale';
import { playScale } from '../../helpers/playScale';

export default function PlayButton() {
  const { instrument, key, scale } = useContext(Context);
  const scaleInfoObject = defineScale.renderNotes(instrument, key, scale);

  return (
    <Button
      title="Play Keys"
      onPress={() => playScale.playNotes(scaleInfoObject)}
    />
  );
}
