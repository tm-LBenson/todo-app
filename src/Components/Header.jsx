/** @format */

import { Link } from 'react-router-dom';
import Auth from './auth/auth';
import Login from './auth/login';

export default function Header({ incomplete }) {
  return (
    <>
      <header
        className="header"
        data-testid="todo-header"
      >
        <nav className="navbar">
          <ul className="navbar__links">
            <div className="navbar__links--left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <Auth capability={'read'}>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
              </Auth>
            </div>
            <li>
              <Login />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
