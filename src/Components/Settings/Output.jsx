/** @format */

import { Card } from '@mantine/core';
import React, { useContext } from 'react';
import { SettingsContext } from '../SettingsContext';

export default function Output() {
  const { difficulty, itemsDisplayed, showCompleted } =
    useContext(SettingsContext);
  return (
    <Card
      className="settings__card--updated"
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
    >
      <h4>Updated Settings</h4>
      <ul>
        <li>{showCompleted ? 'Show' : 'Hide'} Completed ToDos</li>
        <li>Items Per Page: {`${itemsDisplayed}`}</li>
        <li>Sort Keyword: {`${difficulty}`}</li>
      </ul>
    </Card>
  );
}
