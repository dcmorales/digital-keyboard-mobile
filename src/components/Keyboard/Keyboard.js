import React from 'react';
import { StyleSheet, View } from 'react-native';

import Octave from './Octave';

export default function Keyboard() {
  return (
    <View style={styles.keyboard}>
      <Octave octNum="2" />
      <Octave octNum="3" />
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    flexDirection: 'row',
  },
});
