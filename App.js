import React from 'react';
import { StyleSheet, View } from 'react-native';

import Keyboard from './src/components/Keyboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Keyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 10,
    borderColor: '#0059b2',
  },
});
