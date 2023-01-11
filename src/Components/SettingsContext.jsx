/** @format */

import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const storedShowCompleted = localStorage.getItem('showCompleted');
  const storedItemsPerPage = localStorage.getItem('itemsPerPage');
  const storedDifficulty = localStorage.getItem('difficulty');
  const [name] = useState('Anyone');
  const [difficulty, setDifficulty] = useState(
    storedDifficulty || 'difficulty',
  );
  const [sliderSetting, setSliderSetting] = useState(3);
  const [itemsDisplayed, setItemsPerPage] = useState(storedItemsPerPage || 3);
  const [showCompleted, setShowCompleted] = useState(
    storedShowCompleted || false,
  );

  const values = {
    name,
    difficulty,
    itemsDisplayed,
    showCompleted,
    setDifficulty,
    setItemsPerPage,
    setShowCompleted,
    sliderSetting,
    setSliderSetting,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
