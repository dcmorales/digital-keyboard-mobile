import React, { useState } from 'react';

export const Context = React.createContext();

export default ({ children }) => {
  const [selectedValue, setSelectedValue] = useState({
    instrument: 'piano',
    scale: 'chromatic',
  });

  const handleSelectionChange = (name, itemValue) => {
    setSelectedValue({ [name]: itemValue });
  };

  const { instrument, scale } = selectedValue;

  const store = {
    instrument,
    scale,
    handleSelectionChange,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
