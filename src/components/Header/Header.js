import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { selectionOptions } from '../../values/selectionOptions';

import Selections from './Selections';
import PlayButton from './PlayButton';

export default function Header() {
  const { instrument, scale, key, order, bpm } = useContext(Context);
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

      <PlayButton />
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
