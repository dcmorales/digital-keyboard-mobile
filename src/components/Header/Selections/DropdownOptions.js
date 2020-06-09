import React, { useContext, useEffect, useState } from 'react';
import { Picker } from 'react-native';

import { Context } from '../../../context/SelectionContext';

export default function DropdownOptions({
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
      for (var i = iNum; i <= max; listName !== 'noteLength' ? i++ : (i *= 2)) {
        optionsNum.push(i);
      }
      setOptions(optionsNum);
    }
  }, []);

  return (
    <Picker
      style={{ color: '#2196F3' }}
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
  );
}
