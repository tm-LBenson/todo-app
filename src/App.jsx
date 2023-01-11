/** @format */

import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import ToDo from './Components/ToDo/ToDo';
import Header from './Components/Header';
import './Components/sass/main.scss';
import { Route, Routes } from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import Gear from './Components/Settings/Gear';
export default function App() {
  const [incomplete, setIncomplete] = useState(0);

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
      >
        <Header incomplete={incomplete} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 data-testid="todo-h1">
                  To Do List: {incomplete} items pending
                </h1>
                <ToDo
                  incomplete={incomplete}
                  setIncomplete={setIncomplete}
                />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <h1 data-testid="todo-settings">
                  <Gear />
                  Manage Settings
                </h1>
                <Settings />
              </>
            }
          />
        </Routes>
      </MantineProvider>
    </>
  );
}
