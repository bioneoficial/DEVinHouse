import React, { useState, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {},
  text: {
    fontSize: 18,
    textWeight: 'bold',
  },
  textValue: {
    overflow: 'break-word',
    hyphens: 'auto',
    wordWrap: 'break-word',
  },
  buttonCancel: {
    backgroundColor: '#A52A2A',
    '&:hover': {
      backgroundColor: '#A52A2A',
    },
  },
  buttonEdit: {
    backgroundColor: '#2DA522',
    '&:hover': {
      backgroundColor: '#2DA522',
    },
  },
  TextField: {},
}));

export default function EditModal({
  openEdit,
  setOpenEdit,
  textValue,
  setValueTodoText,
  listItems,
  setListItems,
}) {
  const { check, title, description, id } = textValue;

  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [error, setError] = useState(false);

  useMemo(() => {
    setEditTitle(title);
    setEditDescription(description);
  }, [title, description]);

  const handleClose = () => {
    setOpenEdit(false);
  };
  const classes = useStyles();

  return (
    <Dialog
      open={openEdit}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          color="secondary"
          required
          margin="dense"
          fullWidth
          defaultValue={title}
          id="title"
          label="Title"
          error={error}
          helperText="Type the title "
          onChange={evt => setEditTitle(evt.target.value)}
        />
        <TextField
          color="secondary"
          margin="dense"
          fullWidth
          defaultValue={description}
          id="description"
          label="Description"
          helperText="Enter the description of your task"
          onChange={evt => setEditDescription(evt.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className={classes.buttonCancel}>
          Cancel
        </Button>
        <Button
          className={classes.buttonEdit}
          onClick={() => {
            let index = listItems.findIndex(x => x.id === id);

            if (editTitle.length > 0) {
              setError(false);
              const updatedData = listItems.map(x =>
                x === listItems[index]
                  ? {
                      id: x.id,
                      title: editTitle,
                      description: editDescription,
                      check: x.check,
                    }
                  : x
              );
              setListItems(updatedData);
              setValueTodoText({
                id: id,
                title: editTitle,
                check: check,
                description: editDescription,
              });
              setOpenEdit(false);
            } else {
              setError(true);
            }
          }}
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
