import React, { useState } from 'react';
import { View } from 'react-native';

import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

export default function Footer() {
  const [notesPlayed, getNotesPlayed] = useState([]);

  return (
    <View>
      <PlayButton getNotesPlayed={getNotesPlayed} />
      <NoteDisplay notesPlayed={notesPlayed} />
    </View>
  );
}
