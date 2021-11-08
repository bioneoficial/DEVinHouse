import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import uuid from 'react-uuid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  input: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    flexGrow: '1',
  },
  button: {
    background: '#303fEf',
    '&:hover': {
      backgroundColor: '#303fEf',
    },
    margin: '4px',
  },
}));

export default function Input({ setListItems }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const handleDeleteAll = () => {
    //DELETAR TUDO
    localStorage.removeItem('list');
    const filteredArray = [];
    setListItems(filteredArray);
  };

  const handleOnChangeTitle = event => {
    //mudar titulo
    setTitle(event.target.value);
  };
  const handleOnChangeDescription = event => {
    // mudar desc
    setDescription(event.target.value);
  };

  const handleAddNewItem = () => {
    //addnewitem
    setTitle('');
    setDescription('');
    setListItems(prev => {
      if (title) {
        setError(false);
        return [
          ...prev,
          {
            id: uuid(),
            title: title,
            description: description,
            check: false,
          },
        ];
      } else {
        setError(true);
        return [...prev];
      }
    });
  };

  const classes = useStyles(); //css

  return (
    <Box className={classes.root}>
      <Box className={classes.input}>
        <TextField
          id="input-title"
          required
          label="Type Title"
          onChange={handleOnChangeTitle}
          fullWidth
          color="secondary"
          style={{ margin: 4 }}
          value={title}
          variant="outlined"
          error={error}
        />
        <TextField
          id="input-description"
          label="Type Description"
          onChange={handleOnChangeDescription}
          fullWidth
          multiline
          color="secondary"
          variant="filled"
          maxRows={4}
          style={{ margin: 4 }}
          value={description}
        />
      </Box>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleAddNewItem}
        endIcon={<SaveIcon />}
      >
        Add
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleDeleteAll}
      >
        Deleteall
        <DeleteIcon />
      </Button>
    </Box>
  );
}
