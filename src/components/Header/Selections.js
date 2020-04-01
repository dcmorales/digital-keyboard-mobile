import React, { useContext } from 'react';
import { Picker, Text, View } from 'react-native';

import { Context } from '../../context/SelectionContext';

export default function Selections({ listName, item1, item2, item3 }) {
  const { selectedValue, setSelectedValue } = useContext(Context);

  return (
    <View>
      <Text>{listName}</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={itemValue => setSelectedValue(itemValue)}
      >
        <Picker.Item label={`${item1}`} value={`${item1}`} />
        <Picker.Item label={`${item2}`} value={`${item2}`} />
        <Picker.Item label={`${item3}`} value={`${item3}`} />
      </Picker>
    </View>
  );
}
