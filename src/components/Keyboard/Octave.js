import React from 'react';
import { StyleSheet, View } from 'react-native';

import Key from './Key';

export default function Octave({ octNum }) {
  return (
    <View style={styles.octave}>
      <Key color="white" note="C" octNum={octNum} />
      <Key color="black" note="Db" octNum={octNum} />
      <Key color="white" note="D" octNum={octNum} />
      <Key color="black" note="Eb" octNum={octNum} />
      <Key color="white" note="E" octNum={octNum} />
      <Key color="white" note="F" octNum={octNum} />
      <Key color="black" note="Gb" octNum={octNum} />
      <Key color="white" note="G" octNum={octNum} />
      <Key color="black" note="Ab" octNum={octNum} />
      <Key color="white" note="A" octNum={octNum} />
      <Key color="black" note="Bb" octNum={octNum} />
      <Key color="white" note="B" octNum={octNum} />
    </View>
  );
}

const styles = StyleSheet.create({
  octave: {
    flex: 1,
    flexDirection: 'row',
  },
});
