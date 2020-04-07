import React, { useContext, useEffect, useState } from 'react';
import { Picker, Text, StyleSheet, View } from 'react-native';

import { Context } from '../../context/SelectionContext';

export default function Selections({
  listName,
  listItems,
  selectionValue,
  start,
  max,
}) {
  const { handleSelectionChange } = useContext(Context);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (listItems) {
      setOptions(listItems);
    } else {
      var optionsNum = [];
      var iNum = parseInt(start, 10);
      for (
        var i = iNum;
        i <= max;
        listName !== 'note length' ? i++ : (i *= 2)
      ) {
        optionsNum.push(i);
      }
      setOptions(optionsNum);
    }
  }, []);

  return (
    <View style={styles.selectionContainer}>
      <Text>{listName}</Text>
      <Picker
        selectedValue={selectionValue}
        onValueChange={itemValue => handleSelectionChange(listName, itemValue)}
      >
        {options.map(item => (
          <Picker.Item
            key={item}
            label={listName === 'note length' ? `1/${item}` : `${item}`}
            value={`${item}`}
          />
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
