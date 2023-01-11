/** @format */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Gear from './Gear';

describe('Testing of Gear', () => {
  test('Should render SVG', () => {
    render(<Gear />);
    expect(screen.getByTestId('test-svg')).toBeInTheDocument();
  });
});
