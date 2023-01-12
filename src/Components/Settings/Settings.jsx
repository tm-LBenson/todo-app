/** @format */

import { Button, Card, NumberInput, Switch, TextInput } from '@mantine/core';
import React, { useContext, useEffect } from 'react';
import { SettingsContext } from '../SettingsContext';
import Output from './Output';

export default function Settings() {
  const { setShowCompleted, setItemsPerPage, setDifficulty } =
    useContext(SettingsContext);

  function handleSettings(e) {
    e.preventDefault();
    setShowCompleted(e.target.switch.checked);
    setItemsPerPage(e.target.number.value);
    setDifficulty(e.target.text.value || 'difficulty');

    localStorage.setItem('showCompleted', e.target.switch.checked);
    localStorage.setItem('itemsPerPage', e.target.number.value);
    localStorage.setItem('difficulty', e.target.text.value);
  }
  useEffect(() => {
    function applyStoredSettings() {
      const storedShowCompleted = localStorage.getItem('showCompleted');
      const storedItemsPerPage = localStorage.getItem('itemsPerPage');
      const storedDifficulty = localStorage.getItem('difficulty');

      if (storedShowCompleted) setShowCompleted(storedShowCompleted);

      if (storedItemsPerPage) setItemsPerPage(parseInt(storedItemsPerPage));

      if (storedDifficulty) setDifficulty(storedDifficulty);
    }
    applyStoredSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const storedItemsPerPage = localStorage.getItem('itemsPerPage');
  return (
    <section className="settings">
      <form
        onSubmit={handleSettings}
        className="settings__form"
      >
        <Card
          className="settings__card"
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
        >
          <h4>Update Settings</h4>
          <Switch
            data-testid="test-switch"
            name="switch"
            label="Show Completed ToDos"
          />
          <NumberInput
            data-testid="test-number"
            name="number"
            className="settings__input"
            defaultValue={3}
            placeholder="3"
            label="Items Per Page"
          />
          <TextInput
            data-testid="test-text"
            name="text"
            className="settings__input"
            placeholder="difficulty"
            label="Sort Keyword"
          />
          <Button
            type="submit"
            color={'blue'}
          >
            Show New Settings
          </Button>
        </Card>
      </form>
      {storedItemsPerPage ? <Output /> : null}
    </section>
  );
}
