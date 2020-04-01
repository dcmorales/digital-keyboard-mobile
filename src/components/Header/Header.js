import React, { useContext } from 'react';
import { Picker, Text, View } from 'react-native';

import Selections from './Selections';

export default function Header() {
  const { container } = styles;

  return (
    <View style={container}>
      <Selections
        listName="instrument"
        listItems={['piano', 'cowbell', 'horn']}
      />
    </View>
  );
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
