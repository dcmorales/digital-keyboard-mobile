import React, { useState } from 'react';

export const Context = React.createContext();

export default ({ children }) => {
  const [selectedValues, setSelectedValue] = useState({
    instrument: 'piano',
    scale: 'chromatic',
  });

  const handleSelectionChange = (name, itemValue) => {
    setSelectedValue({ ...selectedValues, [name]: itemValue });
  };

  const { instrument, scale, key } = selectedValues;

  const store = {
    instrument,
    scale,
    handleSelectionChange,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
