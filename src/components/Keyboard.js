import React from 'react';
import { StyleSheet, View } from 'react-native';

import Key from './Key';

export default function Keyboard() {
  return (
    <View style={styles.keyboard}>
      <Key color="white" note="C" />
      <Key color="black" note="Db" />
      <Key color="white" note="D" />
      <Key color="black" note="Eb" />
      <Key color="white" note="E" />
      <Key color="white" note="F" />
      <Key color="black" note="Gb" />
      <Key color="white" note="G" />
      <Key color="black" note="Ab" />
      <Key color="white" note="A" />
      <Key color="black" note="Bb" />
      <Key color="white" note="B" />
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    flexDirection: 'row',
  },
});
