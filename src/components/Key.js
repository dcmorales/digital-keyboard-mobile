import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import { sounds } from '../values/soundValues';

export default function Key({ color, note, octNum }) {
  const handleKeyPress = async (instrument, noteFull) => {
    const soundObject = new Audio.Sound();

    let source = sounds[instrument][noteFull];
    await soundObject.loadAsync(source);
    await soundObject.playAsync().then(async playbackStatus => {
      setTimeout(() => {
        soundObject.unloadAsync();
      }, playbackStatus.playableDurationMillis);
    });
  };

  const { white, black, text } = styles;
  const noteFull = `${note}${octNum}`;
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.96}
        style={color === 'white' ? white : black}
        onPress={() => handleKeyPress('piano', `${noteFull}`)}
      >
        <Text style={color === 'black' ? text : null}>{noteFull}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  black: {
    backgroundColor: '#000',
    flex: 5,
    zIndex: 10,
    height: '70%',
    marginHorizontal: '-5%',
  },
  white: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    flex: 7,
    height: '100%',
  },
});
