import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header/Header';
import Keyboard from './src/components/Keyboard/Keyboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Keyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 10,
    borderColor: '#0059b2',
  },
});
