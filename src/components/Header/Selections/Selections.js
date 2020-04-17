import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { Context } from '../../../context/SelectionContext';
import { selectionOptions } from '../../../values/selectionOptions';
import { selectionInfo } from '../../../values/selectionInfo';

import SelectionDetail from './SelectionDetail';

export default function Selections() {
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
  const {
    instrumentInfo,
    scaleInfo,
    keyInfo,
    orderInfo,
    bpmInfo,
    noteLengthInfo,
    totalBeatsInfo,
    playxInfo,
  } = selectionInfo;
  const { playSettingsContainer, settingsRowContainer } = styles;

  return (
    <View style={playSettingsContainer}>
      <View style={settingsRowContainer}>
        <SelectionDetail
          selectionValue={instrument}
          info={instrumentInfo}
          label="Instrument"
          listName="instrument"
          listItems={instrumentOpts}
        />

        <SelectionDetail
          selectionValue={scale}
          info={scaleInfo}
          label="Scale"
          listName="scale"
          listItems={scaleOpts}
        />

        <SelectionDetail
          selectionValue={key}
          info={keyInfo}
          label="Key"
          listName="key"
          listItems={keyOpts}
        />

        <SelectionDetail
          selectionValue={noteLength}
          info={noteLengthInfo}
          label="Note Length"
          listName="noteLength"
          start="4"
          max="32"
        />
      </View>

      <View style={settingsRowContainer}>
        <SelectionDetail
          selectionValue={order}
          info={orderInfo}
          label="Order"
          listName="order"
          listItems={orderOpts}
        />

        <SelectionDetail
          selectionValue={bpm}
          info={bpmInfo}
          label="BPM"
          listName="bpm"
          start="100"
          max="130"
        />

        {order !== 'random' ? null : (
          <>
            <SelectionDetail
              selectionValue={totalBeats}
              info={totalBeatsInfo}
              label="Total Beats"
              listName="totalBeats"
              start="1"
              max={maxBeats}
            />
            <SelectionDetail
              selectionValue={playx}
              info={playxInfo}
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
