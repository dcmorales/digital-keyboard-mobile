import React, { useState } from 'react';
import { Picker, View } from 'react-native';

export default function Header() {
  const [selectedValue, setSelectedValue] = useState('piano');

  const { container } = styles;

  return (
    <View style={container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Piano" value="piano" />
        <Picker.Item label="Cowbell" value="cowbell" />
      </Picker>
    </View>
  );
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
