/** @format */

import React from 'react';



export default function Header({ incomplete }) {
  return (
    <>
      <header data-testid="todo-header">
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>

        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>
    </>
  );
}
