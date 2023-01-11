/** @format */

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './Components/Header';

import SettingsProvider from './Components/SettingsContext';
import ToDo from './Components/ToDo/ToDo';

describe('Testing of Gear', () => {
  test('Should render the Header', () => {
    render(
      <BrowserRouter>
        <SettingsProvider>
          <App />
          <Header incomplete={3} />
        </SettingsProvider>
      </BrowserRouter>,
    );

    const header = screen.getByTestId('todo-h1');
    expect(header).toHaveTextContent('To Do List: 0 items pending');
  });
});
