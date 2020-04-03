import React, { useContext } from 'react';
import { Button } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { defineScale } from '../../helpers/defineScale';

export default function PlayButton() {
  const { instrument, key } = useContext(Context);

  return (
    <Button
      title="Play Keys"
      onPress={() => defineScale.renderNotes(instrument, key)}
    />
  );
}
