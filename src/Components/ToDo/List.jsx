/** @format */
import { Pagination } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { SettingsContext } from '../SettingsContext';

export default function List({ list, toggleComplete }) {
  const { itemsDisplayed } = useContext(SettingsContext);
  const [page, onChange] = useState(1);
  const startIndex = (page - 1) * itemsDisplayed;
  const endIndex = startIndex + itemsDisplayed;
  const pageList = list?.slice(startIndex, endIndex);
  return (
    <>
      {pageList?.map((item, idx) => (
        <div
          data-testid={`todo-item-${idx}`}
          key={item.id}
        >
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item?.complete?.toString()}
          </div>
          <hr />
        </div>
      ))}

      <Pagination
        data-testid="pagination"
        page={page}
        initialPage={1}
        onChange={onChange}
        total={Math.ceil(list?.length / itemsDisplayed)}
      />
    </>
  );
}
