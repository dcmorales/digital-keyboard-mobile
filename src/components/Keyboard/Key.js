import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { defineScale } from '../../helpers/defineScale';
import { playSound } from '../../helpers/playSound';

export default function Key({ color, note, octNum }) {
  const { instrument, key, scale, activeNote } = useContext(Context);
  const { white, black, text, scaleNote, currentNote } = styles;
  const noteFull = `${note}${octNum}`;
  const scaleNotes = defineScale.renderNotes(key, scale);

  return (
    <>
      <TouchableHighlight
        activeOpacity={0.5}
        style={color === 'white' ? white : black}
        underlayColor={color === 'white' ? '#f7f7f7' : '#0b0b0b'}
        onPress={() => playSound.handleNoteSound(instrument, `${noteFull}`)}
      >
        <View style={text}>
          <Text
            style={[
              color === 'black' ? { color: '#fff' } : null,
              scaleNotes.includes(`${noteFull}`) ? scaleNote : null,
              activeNote.includes(`${noteFull}`) ? currentNote : null,
            ]}
          >
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
  scaleNote: {
    color: '#3399ff',
    marginBottom: 20,
    fontWeight: '700',
  },
  currentNote: {
    color: '#0059b2',
    marginBottom: 10,
    fontWeight: '800',
  },
});
