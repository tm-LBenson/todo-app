/** @format */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SettingsProvider from '../SettingsContext';
import Settings from './Settings';

describe('Testing of settings', () => {
  test('the form accepts submission', () => {
    render(
      <BrowserRouter>
        <SettingsProvider>
          <Settings />
        </SettingsProvider>
      </BrowserRouter>,
    );
    const showCompletedSwitch = screen.getByLabelText('Show Completed ToDos');
    const itemsPerPageInput = screen.getByLabelText('Items Per Page');
    const difficultyInput = screen.getByLabelText('Sort Keyword');
    const submitButton = screen.getByText('Show New Settings');
    expect(showCompletedSwitch.checked).toBe(false);
    expect(submitButton).toBeInTheDocument();
    expect(difficultyInput).toBeInTheDocument();
    expect(itemsPerPageInput).toBeInTheDocument();
  });

  test('Can pull items from local storage', () => {
    localStorage.setItem('showCompleted', 'true');
    localStorage.setItem('itemsPerPage', '5');
    localStorage.setItem('difficulty', 'difficulty');

    render(
      <BrowserRouter>
        <SettingsProvider>
          <Settings />
        </SettingsProvider>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('test-switch').checked).toEqual(false);
    expect(screen.getByTestId('test-number').value).toEqual('3');
    expect(screen.getByTestId('test-text')).toBeInTheDocument();
  });
});
