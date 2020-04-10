import React from 'react';
import { Text, View } from 'react-native';

export default function NoteDisplay({ notesPlayed }) {
  return (
    <View>
      <Text>Notes played:</Text>
      <Text>{notesPlayed.join('-')}</Text>
    </View>
  );
}
