/** @format */

import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [name, setName] = useState('Anyone');
  const [difficulty, setDifficulty] = useState(3);
  const [itemsDisplayed, setItems] = useState(3);
  const [showCompleted, setCompleted] = useState(false);

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
