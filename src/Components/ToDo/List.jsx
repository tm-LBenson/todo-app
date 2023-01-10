/** @format */
import { Pagination, Card, CloseButton, Group, Button } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { SettingsContext } from '../SettingsContext';

export default function List({ list, toggleComplete }) {
  const { itemsDisplayed, name } = useContext(SettingsContext);
  const [page, onChange] = useState(1);
  const startIndex = (page - 1) * itemsDisplayed;
  const endIndex = startIndex + itemsDisplayed;
  const pageList = list?.slice(startIndex, endIndex);
  return (
    <div className="list__content">
      {pageList?.map((item, idx) => (
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
            <Group position="center"></Group>
            <Card.Section className="card__top">
              <div className="card__top--left">
                <Button
                  radius={'xl'}
                  compact
                  color="green"
                >
                  {item?.complete ? 'Complete' : 'Pending'}
                </Button>
                <p>{item.text}</p>
              <p>{item.assignee || name}</p>
              </div>
              <div onClick={() => toggleComplete(item.id)}></div>
              <CloseButton
                className="card__top--close"
                title="Close popover"
                size="xl"
                iconSize={20}
              />
            </Card.Section>

            <p>
              <small>Difficulty: {item.difficulty}</small>
            </p>
          </Card>
        </div>
      ))}

      <Pagination
        data-testid="pagination"
        page={page}
        initialPage={1}
        onChange={onChange}
        total={Math.ceil(list?.length / itemsDisplayed)}
      />
    </div>
  );
}
