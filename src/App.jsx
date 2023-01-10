/** @format */

import React from 'react';
import { MantineProvider } from '@mantine/core';
import ToDo from './Components/ToDo/ToDo';
import Header from './Components/Header';

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
    >
      <Header />
      <ToDo />
    </MantineProvider>
  );
}
