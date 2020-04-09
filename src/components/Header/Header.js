import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { selectionOptions } from '../../values/selectionOptions';

import Selections from './Selections';

export default function Header() {
  const {
    instrument,
    scale,
    key,
    order,
    bpm,
    noteLength,
    playx,
    totalBeats,
    maxBeats,
  } = useContext(Context);
  const { instrumentOpts, scaleOpts, keyOpts, orderOpts } = selectionOptions;

  return (
    <View style={styles.headerContainer}>
      <Selections
        selectionValue={instrument}
        listName="instrument"
        listItems={instrumentOpts}
      />

      <Selections
        selectionValue={scale}
        listName="scale"
        listItems={scaleOpts}
      />

      <Selections selectionValue={key} listName="key" listItems={keyOpts} />

      <Selections
        selectionValue={order}
        listName="order"
        listItems={orderOpts}
      />

      <Selections selectionValue={bpm} listName="bpm" start="100" max="130" />

      <Selections
        selectionValue={noteLength}
        listName="noteLength"
        start="4"
        max="32"
      />

      {order !== 'random' ? null : (
        <>
          <Selections
            selectionValue={totalBeats}
            listName="totalBeats"
            start="1"
            max={maxBeats}
          />
          <Selections
            selectionValue={playx}
            listName="playx"
            start="1"
            max="8"
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
