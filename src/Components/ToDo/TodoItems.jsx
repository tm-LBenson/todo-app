/** @format */
import { usePagination } from '@mantine/hooks';
import React, { useState } from 'react';

export default function TodoItems({ list, toggleComplete }) {
  const [page, onChange] = useState(1);
  const pagination = usePagination({ total: 10, page, onChange });

  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
      )
    </>
  );
}
