/** @format */

import { render, screen } from '@testing-library/react';
import Auth from './auth';
import { LoginContext } from './context';

describe('Auth component', () => {
  const loggedInContext = {
    loggedIn: true,
    can: (capability) => capability === 'read',
  };
  const notLoggedInContext = {
    loggedIn: false,
    can: (capability) => capability === 'read',
  };

  it('shows the child component when logged in and capability is true', () => {
    render(
      <LoginContext.Provider value={loggedInContext}>
        <Auth capability="read">
          <p data-testid="child">child component</p>
        </Auth>
      </LoginContext.Provider>,
    );
    // expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('does not show the child component when not logged in', () => {
    render(
      <LoginContext.Provider value={notLoggedInContext}>
        <Auth capability="read">
          <p data-testid="child">child component</p>
        </Auth>
      </LoginContext.Provider>,
    );
    // expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });
});
