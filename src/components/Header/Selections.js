import React, { useContext, useEffect, useState } from 'react';
import { Picker, Text, StyleSheet, View } from 'react-native';

import { Context } from '../../context/SelectionContext';

export default function Selections({
  label,
  listName,
  listItems,
  selectionValue,
  start,
  max,
}) {
  const { handleSelectionChange } = useContext(Context);
  const [options, setOptions] = useState([]);
  const { selectionContainer, selectionLabel, picker } = styles;

  useEffect(() => {
    if (listItems) {
      setOptions(listItems);
    } else {
      var optionsNum = [];
      var iNum = parseInt(start, 10);
      for (var i = iNum; i <= max; listName !== 'noteLength' ? i++ : (i *= 2)) {
        optionsNum.push(i);
      }
      setOptions(optionsNum);
    }
  }, []);

  return (
    <View style={selectionContainer}>
      <Text style={selectionLabel}>{label}</Text>
      <Picker
        style={picker}
        selectedValue={selectionValue}
        onValueChange={itemValue => handleSelectionChange(listName, itemValue)}
      >
        {options.map(item => (
          <Picker.Item
            key={item}
            label={listName === 'noteLength' ? `1/${item}` : `${item}`}
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
  selectionLabel: {
    borderLeftWidth: 1,
    paddingLeft: 7,
    borderColor: '#2196F3',
    color: '#0059b2',
    fontWeight: '700',
  },
  picker: {
    color: '#2196F3',
  },
});
