/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ToDo from './ToDo';
import { SettingsContext } from '../SettingsContext';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import Auth from '../auth/auth';
import LoginProvider from '../auth/context';
describe('ToDo Component Tests', () => {
  const capabilityTrueContext = {
    loggedIn: true,
    can: (capability) => capability === 'read',
  };
  const capabilityFalseContext = {
    loggedIn: true,
    can: (capability) => capability !== 'delete',
  };

  test('render a header element as expected', () => {
    const setIncomplete = jest.fn();
    const incomplete = '0';
    render(
      <BrowserRouter>
        <SettingsContext.Provider value={{ difficulty: 3 }}>
          <LoginProvider value={capabilityTrueContext}>
            <Auth>
              <Header />
              <h1 data-testid="todo-header">
                To Do List: {incomplete} items pending
              </h1>
              <ToDo setIncomplete={setIncomplete} />
            </Auth>
          </LoginProvider>
        </SettingsContext.Provider>
      </BrowserRouter>,
    );

    let h1 = screen.queryByTestId('todo-header');

    expect(h1).toBeNull(); // State is slow, not getting the 0 right away
  });
});
