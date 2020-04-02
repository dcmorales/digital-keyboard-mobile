import React, { useContext } from 'react';
import { Button } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { playSound } from '../../helpers/playSound';

export default function PlayButton() {
  const { selectedValue } = useContext(Context);
  const instrument = selectedValue;

  return (
    <Button
      title="Play Keys"
      onPress={() => playSound.handleKeyPress(instrument, 'C3')}
    />
  );
}
