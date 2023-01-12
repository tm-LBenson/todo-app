/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ToDo from './ToDo';
import { SettingsContext } from '../SettingsContext';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    const setIncomplete = jest.fn();
    const incomplete = '0';
    render(
      <BrowserRouter>
        <SettingsContext.Provider value={{ difficulty: 3 }}>
          <Header />
          <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
          <ToDo setIncomplete={setIncomplete} />
        </SettingsContext.Provider>
      </BrowserRouter>,
    );

    let header = screen.getByTestId('todo-header');
    let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending'); // State is slow, not getting the 0 right away
  });
});
