import React, { useContext } from 'react';
import { Picker, Text, View } from 'react-native';

import { Context } from '../../context/SelectionContext';

export default function Header() {
  const { selectedValue, setSelectedValue } = useContext(Context);
  const { container } = styles;
  const listName = 'instrument';

  return (
    <View style={container}>
      <Text>{listName}</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={itemValue => setSelectedValue(itemValue)}
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
