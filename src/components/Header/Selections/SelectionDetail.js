import React from 'react';
import { View } from 'react-native';

import SelectionLabel from './SelectionLabel';
import DropdownOptions from './DropdownOptions';

export default function SelectionDetail({
  label,
  listName,
  listItems,
  selectionValue,
  start,
  max,
  info,
  height,
}) {
  return (
    <View style={{ flex: 1 }}>
      <SelectionLabel info={info} label={label} height={height} />

      <DropdownOptions
        selectionValue={selectionValue}
        listName={listName}
        listItems={listItems}
        start={start}
        max={max}
      />
    </View>
  );
}
