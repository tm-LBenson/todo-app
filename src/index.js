/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import SettingsProvider from './Components/SettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <SettingsProvider>
        <App />
    </SettingsProvider>
      </BrowserRouter>
  </React.StrictMode>,
);
