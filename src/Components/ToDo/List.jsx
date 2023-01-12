/** @format */
import { Pagination, Card, CloseButton, Group, Button } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { When } from 'react-if';
import Auth from '../auth/auth';
import { LoginContext } from '../auth/context';
import { SettingsContext } from '../SettingsContext';

export default function List({ list, setList, toggleComplete }) {
  const { user } = useContext(LoginContext);

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  const { itemsDisplayed, name, showCompleted } = useContext(SettingsContext);
  const [page, onChange] = useState(1);
  const startIndex = (page - 1) * itemsDisplayed;
  const endIndex = startIndex + itemsDisplayed;
  const pageList = list?.slice(startIndex, endIndex);
  const filtered = pageList?.filter((todo) => !todo.complete);
  const filteredAll = list?.filter((todo) => !todo.complete);

  const displayed = showCompleted ? pageList : filtered;
  const perPage = showCompleted ? list?.length : filteredAll?.length;
  return (
    <div className="list__content">
      {displayed?.map((item, idx) => (
        <div
          data-testid={`todo-item-${idx}`}
          key={item.id}
        >
          <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
          >
            <Card.Section
              inheritPadding
              withBorder
              className="card__top"
            >
              <Group position="apart">
                <div className="card__top--left">
                  <When condition={item?.complete}>
                    <Button
                      onClick={() => {
                        user.capabilities.includes('create') &&
                          toggleComplete(item.id);
                      }}
                      radius={'xl'}
                      compact
                      color="green"
                    >
                      Complete
                    </Button>
                  </When>
                  <When condition={!item?.complete}>
                    <Button
                      onClick={() => {
                        user.capabilities.includes('create') &&
                          toggleComplete(item.id);
                      }}
                      radius={'xl'}
                      compact
                      color="red"
                    >
                      Pending
                    </Button>
                  </When>

                  <p>{item.assignee || name}</p>
                </div>

                <CloseButton
                  position="top-end"
                  className="card__top--close"
                  title="Close popover"
                  size="xl"
                  iconSize={20}
                  onClick={() => {
                    user.capabilities.includes('delete') && deleteItem(item.id);
                  }}
                />
              </Group>
            </Card.Section>
            <div className="card__bottom">
              <p>{item.text}</p>
              <div className="card__bottom--difficulty">
                <p>
                  <small>Difficulty: {item.difficulty}</small>
                </p>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {console.log(perPage)}
      <Pagination
        data-testid="pagination"
        page={page}
        initialPage={1}
        onChange={onChange}
        total={Math.ceil(perPage / itemsDisplayed)}
      />
    </div>
  );
}
