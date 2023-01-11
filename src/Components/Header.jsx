/** @format */

import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

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
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </div>
            <li>
              <Link to="/">
                <Button color={'red'}>Log Out</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
