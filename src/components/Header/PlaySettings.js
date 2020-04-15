import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { Context } from '../../context/SelectionContext';
import { selectionOptions } from '../../values/selectionOptions';

import Selections from './Selections';

export default function PlaySettings() {
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
  const { playSettingsContainer, settingsRowContainer } = styles;

  return (
    <View style={playSettingsContainer}>
      <View style={settingsRowContainer}>
        <Selections
          selectionValue={instrument}
          label="Instrument"
          listName="instrument"
          listItems={instrumentOpts}
        />

        <Selections
          selectionValue={scale}
          label="Scale"
          listName="scale"
          listItems={scaleOpts}
        />

        <Selections
          selectionValue={key}
          label="Key"
          listName="key"
          listItems={keyOpts}
        />

        <Selections
          selectionValue={noteLength}
          label="Note Length"
          listName="noteLength"
          start="4"
          max="32"
        />
      </View>

      <View style={settingsRowContainer}>
        <Selections
          selectionValue={order}
          label="Order"
          listName="order"
          listItems={orderOpts}
        />

        <Selections
          selectionValue={bpm}
          label="BPM"
          listName="bpm"
          start="100"
          max="130"
        />

        {order !== 'random' ? null : (
          <>
            <Selections
              selectionValue={totalBeats}
              label="Total Beats"
              listName="totalBeats"
              start="1"
              max={maxBeats}
            />
            <Selections
              selectionValue={playx}
              label="Play x"
              listName="playx"
              start="1"
              max="8"
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playSettingsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  settingsRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
