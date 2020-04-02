import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { Context } from '../../context/SelectionContext';

import Selections from './Selections';
import PlayButton from './PlayButton';

export default function Header() {
  const { instrument, scale } = useContext(Context);
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
        listItems={['chromatic', 'major', 'natural minor']}
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
