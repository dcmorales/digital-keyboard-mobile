import React, { useContext } from 'react';
import { Picker, Text, View } from 'react-native';

import Selections from './Selections';

export default function Header() {
  const { container } = styles;

  return (
    <View style={container}>
      <Selections
        listName="instrument"
        item1="piano"
        item2="cowbell"
        item3="horn"
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
