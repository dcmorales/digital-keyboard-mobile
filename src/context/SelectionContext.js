import React, { useState, useEffect } from 'react';

import { defineScale } from '../helpers/defineScale';

export const Context = React.createContext();

export default ({ children }) => {
  const [selectedValues, setSelectedValue] = useState({
    instrument: 'piano',
    scale: 'chromatic',
    key: 'C',
    order: 'ascending',
    bpm: '125',
    noteLength: 4,
    activeNote: [],
    totalBeats: '13',
    playx: '1',
    maxBeats: '13',
  });

  const handleSelectionChange = (name, itemValue) => {
    setSelectedValue({ ...selectedValues, [name]: itemValue });
  };

  const {
    instrument,
    scale,
    key,
    order,
    bpm,
    noteLength,
    activeNote,
    totalBeats,
    playx,
    maxBeats,
  } = selectedValues;

  const scaleInfoObject = {
    scaleNotes: defineScale.renderNotes(key, scale),
    instrument,
    bpm,
    noteLength,
    totalBeats,
    playx,
    handleSelectionChange,
  };

  useEffect(() => {
    if (order === 'random') {
      handleSelectionChange('maxBeats', `${scaleInfoObject.scaleNotes.length}`);
      handleSelectionChange(
        'totalBeats',
        `${scaleInfoObject.scaleNotes.length}`
      );
    }
  }, [scale]);

  const store = {
    instrument,
    scale,
    key,
    order,
    bpm,
    noteLength,
    activeNote,
    totalBeats,
    playx,
    maxBeats,
    scaleInfoObject,
    handleSelectionChange,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
