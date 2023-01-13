/** @format */

import React, { useState } from 'react';
import { Button, MantineProvider } from '@mantine/core';
import ToDo from './Components/ToDo/ToDo';
import Header from './Components/Header';
import './Components/sass/main.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import Gear from './Components/Settings/Gear';
import LoginProvider from './Components/auth/context';
import Auth from './Components/auth/auth';
import Signup from './Components/auth/Signup';

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
                  <div className="signup">
                    <Button color={'dark'}>
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </>
              }
            />
            <Route
              path="/signup"
              element={<Signup />}
            ></Route>
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
