import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Key({ color, note }) {
  const { white, black, text } = styles;
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.96}
        style={color === 'white' ? white : black}
        onPress={() => console.log(`note is ${note}`)}
      >
        <Text style={color === 'black' ? text : null}>{note}</Text>
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
