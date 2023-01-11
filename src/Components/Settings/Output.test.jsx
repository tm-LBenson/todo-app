/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Output from './Output';
import { SettingsContext } from '../SettingsContext';

describe('Output component', () => {
  it('shows the correct settings', () => {
    const contextValue = {
      showCompleted: true,
      itemsDisplayed: 4,
      difficulty: 'difficulty',
    };
    render(
      <SettingsContext.Provider value={contextValue}>
        <Output />
      </SettingsContext.Provider>,
    );
    expect(screen.getByText('Show Completed ToDos')).toBeInTheDocument();
    expect(screen.getByText('Items Per Page: 4')).toBeInTheDocument();
    expect(screen.getByText('Sort Keyword: difficulty')).toBeInTheDocument();
  });
});
