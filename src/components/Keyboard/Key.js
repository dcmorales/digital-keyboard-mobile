import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Audio } from 'expo-av';

import { Context } from '../../context/SelectionContext';
import { sounds } from '../../values/soundValues';

export default function Key({ color, note, octNum }) {
  const { selectedValue } = useContext(Context);
  const { white, black, text } = styles;
  const noteFull = `${note}${octNum}`;
  const instrument = selectedValue;

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

  return (
    <>
      <TouchableHighlight
        activeOpacity={0.5}
        style={color === 'white' ? white : black}
        underlayColor={color === 'white' ? '#f7f7f7' : '#0b0b0b'}
        onPress={() => handleKeyPress(instrument, `${noteFull}`)}
      >
        <View style={text}>
          <Text style={color === 'black' ? { color: '#fff' } : null}>
            {noteFull}
          </Text>
        </View>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
