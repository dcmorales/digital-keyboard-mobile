import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import Header from './src/components/Header/Header';
import Keyboard from './src/components/Keyboard/Keyboard';
import Footer from './src/components/Footer/Footer';
import SelectionStore from './src/context/SelectionContext';

const theme = {
  Button: {
    buttonStyle: {
      backgroundColor: '#0059b2',
      borderColor: '#3399ff',
      borderWidth: 2.5,
    },
  },
  colors: {
    primary: '#0059b2',
  },
};

export default function App() {
  return (
    <SelectionStore>
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <Header />
          <Keyboard />
          <Footer />
        </ThemeProvider>
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
