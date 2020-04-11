import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header/Header';
import Keyboard from './src/components/Keyboard/Keyboard';
import Footer from './src/components/Footer/Footer';
import SelectionStore from './src/context/SelectionContext';
import PlaySettings from './src/components/Header/PlaySettings';

export default function App() {
  return (
    <SelectionStore>
      <View style={styles.container}>
        <PlaySettings />
        <Keyboard />
        <Footer />
      </View>
    </SelectionStore>
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
