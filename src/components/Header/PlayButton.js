import React, { useContext } from 'react';
import { Button } from 'react-native';

import { playSound } from '../../helpers/playSound';

export default function PlayButton() {
  return (
    <Button
      title="Play Keys"
      onPress={() => playSound.handleKeyPress('cowbell', 'C3')}
    />
  );
}
