import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TodoComplete from './Todo';
import useLocalStorage from '../services/LocalStorage';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export default function TodoApp() {
  const [fortab, setForTab] = useState(0);
  const [listItems, setListItems] = useLocalStorage('list', '');

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#303fEf',
      },
      secondary: {
        main: '#F58200',
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky">
        <Tabs
          centered
          value={fortab}
          aria-label="
         tabs"
        >
          <Tab label="devinhouse" />
        </Tabs>
      </AppBar>
      <TodoComplete
        listItems={listItems}
        setListItems={setListItems}
        filtered={false}
      />
      <TodoComplete //aqui e os completos
        listItems={
          listItems.length >= 0 ? listItems.filter(i => i.check === true) : []
        }
        setListItems={setListItems}
        filtered={true}
      />
    </ThemeProvider>
  );
}
