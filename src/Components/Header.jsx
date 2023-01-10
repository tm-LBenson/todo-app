/** @format */

import { Link } from 'react-router-dom';

export default function Header({ incomplete }) {
  return (
    <>
      <header
        className="header"
        data-testid="todo-header"
      >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
            </li>
          </ul>
        </nav>

        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>
    </>
  );
}
