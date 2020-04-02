import React, { useContext } from 'react';
import { View } from 'react-native';

import { Context } from '../../context/SelectionContext';

import Selections from './Selections';
import PlayButton from './PlayButton';

export default function Header() {
  const { instrument, scale, key } = useContext(Context);
  const { container } = styles;

  return (
    <View style={container}>
      <Selections
        selectionValue={instrument}
        listName="instrument"
        listItems={['piano', 'cowbell', 'horn']}
      />

      <Selections
        selectionValue={scale}
        listName="scale"
        listItems={[
          'chromatic',
          'major',
          'natural minor',
          'harmonic minor',
          'melodic minor',
          'major pentatonic',
          'minor pentatonic',
          'blues',
        ]}
      />

      <Selections
        selectionValue={key}
        listName="key"
        listItems={[
          'C',
          'Db',
          'D',
          'Eb',
          'E',
          'F',
          'Gb',
          'G',
          'Ab',
          'A',
          'Bb',
          'B',
        ]}
      />

      <PlayButton />
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
