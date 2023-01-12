/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Auth from './Components/auth/auth';
import LoginProvider from './Components/auth/context';

import Header from './Components/Header';

import SettingsProvider from './Components/SettingsContext';
const capabilityTrueContext = {
  loggedIn: true,
  can: (capability) => capability === 'read',
};
const capabilityFalseContext = {
  loggedIn: true,
  can: (capability) => capability !== 'delete',
};

describe('Testing of Gear', () => {
  test('Should render the Header when capability is true', () => {
    render(
      <BrowserRouter>
        <SettingsProvider>
          <LoginProvider value={capabilityTrueContext}>
            <Header incomplete={3} />
            <Auth capability="read">
              <App />
            </Auth>
          </LoginProvider>
        </SettingsProvider>
      </BrowserRouter>,
    );

    const header = screen.getByTestId('todo-header');
    expect(header).toHaveTextContent('HomeLogin');
  });

  test('Should not render the Header when capability is false', () => {
    render(
      <BrowserRouter>
        <SettingsProvider>
          <LoginProvider value={capabilityFalseContext}>
            <Auth capability={'delete'}>
              <Header incomplete={3} />
              <App />
            </Auth>
          </LoginProvider>
        </SettingsProvider>
      </BrowserRouter>,
    );

    expect(screen.queryByTestId('todo-h1')).not.toBeInTheDocument();
  });
});
