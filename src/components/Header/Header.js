import React, { useContext } from 'react';
import { View } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { selectionOptions } from '../../values/selectionOptions';

import Selections from './Selections';
import PlayButton from './PlayButton';

export default function Header() {
  const { instrument, scale, key } = useContext(Context);
  const { container } = styles;
  const { instrumentOpts, scaleOpts, keyOpts } = selectionOptions;

  return (
    <View style={container}>
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

      <PlayButton />
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
