import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import Selections from './Selections';
import PlayButton from './PlayButton';

export default function Header() {
  const { container } = styles;

  return (
    <View style={container}>
      <Selections
        listName="instrument"
        listItems={['piano', 'cowbell', 'horn']}
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
