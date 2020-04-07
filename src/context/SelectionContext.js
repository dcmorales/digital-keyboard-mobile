import React, { useState } from 'react';

export const Context = React.createContext();

export default ({ children }) => {
  const [selectedValues, setSelectedValue] = useState({
    instrument: 'piano',
    scale: 'chromatic',
    key: 'C',
    order: 'ascending',
    bpm: '125',
  });

  const handleSelectionChange = (name, itemValue) => {
    setSelectedValue({ ...selectedValues, [name]: itemValue });
  };

  const { instrument, scale, key, order, bpm } = selectedValues;

  const store = {
    instrument,
    scale,
    key,
    order,
    bpm,
    handleSelectionChange,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
