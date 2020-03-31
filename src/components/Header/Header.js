import React from 'react';
import { Text, View } from 'react-native';

export default function Header() {
  const { headerText, container } = styles;

  return (
    <View style={container}>
      <Text style={headerText}>Header</Text>
    </View>
  );
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
};
