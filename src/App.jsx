/** @format */

import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import ToDo from './Components/ToDo/ToDo';
import Header from './Components/Header';
import './Components/sass/main.scss';
import { Route, Routes } from 'react-router-dom';
export default function App() {
  const [incomplete, setIncomplete] = useState(0);

  return (
    <>
      <Header incomplete={incomplete} />
      <Routes>
        <Route
          path="/"
          element={
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
            >
              <ToDo
                incomplete={incomplete}
                setIncomplete={setIncomplete}
              />
            </MantineProvider>
          }
        />
        <Route
          path="/settings"
          element={<p>Test</p>}
        />
      </Routes>
    </>
  );
}
