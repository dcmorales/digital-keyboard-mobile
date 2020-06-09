import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

export default function Footer() {
  const [notesPlayed, getNotesPlayed] = useState([]);

  return (
    <View style={styles.footerContainer}>
      <PlayButton getNotesPlayed={getNotesPlayed} />
      <NoteDisplay notesPlayed={notesPlayed} />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#0059b2',
    paddingTop: 5,
    paddingLeft: 5,
    flexDirection: 'row',
  },
});
