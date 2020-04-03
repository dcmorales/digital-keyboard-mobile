import React, { useContext } from 'react';
import { Picker, Text, StyleSheet, View } from 'react-native';

import { Context } from '../../context/SelectionContext';

export default function Selections({ listName, listItems, selectionValue }) {
  const { handleSelectionChange } = useContext(Context);

  return (
    <View style={styles.selectionContainer}>
      <Text>{listName}</Text>
      <Picker
        selectedValue={selectionValue}
        onValueChange={itemValue => handleSelectionChange(listName, itemValue)}
      >
        {listItems.map(item => (
          <Picker.Item key={item} label={`${item}`} value={`${item}`} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  selectionContainer: {
    flex: 1,
  },
});
