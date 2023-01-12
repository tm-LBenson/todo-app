/** @format */

import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import ToDo from './Components/ToDo/ToDo';
import Header from './Components/Header';
import './Components/sass/main.scss';
import { Route, Routes } from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import Gear from './Components/Settings/Gear';
import LoginProvider from './Components/auth/context';
import Auth from './Components/auth/auth';

export default function App() {
  const [incomplete, setIncomplete] = useState(0);

  return (
    <>
      <LoginProvider>
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
                  <Auth capability="read">
                    <h1 data-testid="todo-h1">
                      To Do List: {incomplete} items pending
                    </h1>
                    <ToDo
                      incomplete={incomplete}
                      setIncomplete={setIncomplete}
                    />
                  </Auth>
                </>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <Auth capability={'read'}>
                    <h1 data-testid="todo-settings">
                      <Gear />
                      Manage Settings
                    </h1>
                    <Settings />
                  </Auth>
                </>
              }
            />
          </Routes>
        </MantineProvider>
      </LoginProvider>
    </>
  );
}
