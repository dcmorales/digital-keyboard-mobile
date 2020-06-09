import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function NoteDisplay({ notesPlayed }) {
  const { noteDisplayContainer, notesTitle, notesText } = styles;

  return (
    <View style={noteDisplayContainer}>
      <Text style={notesTitle}>Notes played:</Text>
      <Text style={notesText}>{notesPlayed.join('-')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noteDisplayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0059b2',
    paddingLeft: 15,
  },
  notesTitle: {
    color: '#f7f7f7',
    fontWeight: '700',
  },
  notesText: {
    color: '#f7f7f7',
    marginHorizontal: 5,
  },
});
