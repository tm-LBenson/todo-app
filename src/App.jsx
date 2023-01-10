/** @format */

import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import ToDo from './Components/ToDo/ToDo';
import Header from './Components/Header';
import './Components/sass/main.scss';
export default function App() {
  const [incomplete, setIncomplete] = useState(0);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
    >
      <Header incomplete={incomplete} />
      
        <ToDo setIncomplete={setIncomplete} />
      
    </MantineProvider>
  );
}
