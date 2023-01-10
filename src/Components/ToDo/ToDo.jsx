/** @format */
import { Slider } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import List from './List.jsx';

import { Button } from '@mantine/core';

import { v4 as uuid } from 'uuid';
import { SettingsContext } from '../SettingsContext.jsx';

const ToDo = (props) => {
  const { difficulty } = useContext(SettingsContext);
  const [defaultValues] = useState({
    difficulty: difficulty,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState(0);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  console.log(incomplete);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  // function deleteItem(id) {
  //   const items = list.filter((item) => item.id !== id);
  //   setList(items);
  // }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    setIncomplete(() => {
      let incompleteCount = list.filter((item) => !item.complete).length;
      props.setIncomplete(incompleteCount);
      document.title = `To Do List: ${incompleteCount}`;
      props.setIncomplete(incompleteCount);
      return incompleteCount;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  console.log(difficulty);
  return (
    <main className='wrapper'>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </label>

        <label>
          <span>Difficulty</span>

          <Slider
            defaultValue={defaultValues.difficulty}
            min={1}
            max={5}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          <Button
            className="button"
            radius={'sm'}
            type="submit"
          >
            Add Item
          </Button>
        </label>
      </form>

      <List
        className="list"
        list={list ? list : []}
        toggleComplete={toggleComplete}
      />
    </main>
  );
};

export default ToDo;
