/** @format */

import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [name] = useState('Anyone');
  const [difficulty] = useState(3);
  const [itemsDisplayed] = useState(3);
  const [showCompleted] = useState(false);

  const values = {
    name,
    difficulty,
    itemsDisplayed,
    showCompleted,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
