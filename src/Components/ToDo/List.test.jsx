/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SettingsContext } from '../SettingsContext';
import List from './List';
import ToDo from './ToDo';

describe('ToDo Component Tests', () => {
  render(
    <SettingsContext.Provider value={{}}>
      <List />
    </SettingsContext.Provider>,
  );

  test('display correct number of items on each page', () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    render(
      <>
        <SettingsContext.Provider value={{ itemsDisplayed: 3 }}>
          <List
            list={list}
            itemsDisplayed={3}
          />
        </SettingsContext.Provider>
      </>,
    );

    let item1 = screen.getByTestId('todo-item-1');

    expect(item1).toHaveTextContent('PendingDifficulty:');
  });
});
