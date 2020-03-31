import React, { useState } from 'react';

export const Context = React.createContext();

export default ({ children }) => {
  const [selectedValue, setSelectedValue] = useState('piano');

  return (
    <Context.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </Context.Provider>
  );
};
