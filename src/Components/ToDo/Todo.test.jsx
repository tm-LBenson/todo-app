/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ToDo from './ToDo';
import { SettingsContext } from '../SettingsContext';
import Header from '../Header';
describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    const setIncomplete = jest.fn();

    render(
      <SettingsContext.Provider value={{ difficulty: 3 }}>
        <Header />
        <ToDo setIncomplete={setIncomplete} />
      </SettingsContext.Provider>,
    );

    let header = screen.getByTestId('todo-header');
    let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: items pending'); // State is slow, not getting the 0 right away
  });
});
