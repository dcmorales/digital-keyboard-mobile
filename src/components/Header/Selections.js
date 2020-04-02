import React, { useContext } from 'react';
import { Picker, Text, View } from 'react-native';

import { Context } from '../../context/SelectionContext';

export default function Selections({ listName, listItems, selectionValue }) {
  const { handleSelectionChange } = useContext(Context);

  return (
    <View>
      <Text>{listName}</Text>
      <Picker
        selectedValue={selectionValue}
        style={{ height: 50, width: 150 }}
        onValueChange={itemValue => handleSelectionChange(listName, itemValue)}
      >
        {listItems.map(item => (
          <Picker.Item key={item} label={`${item}`} value={`${item}`} />
        ))}
      </Picker>
    </View>
  );
}
