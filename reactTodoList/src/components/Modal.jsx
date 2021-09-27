import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: 5,
  },
  subTitle: {
    hyphens: 'auto',
    wordWrap: 'break-word',
    fontSize: '1.1rem',
  },
  text: {
    hyphens: 'auto',
    wordWrap: 'break-word',
  },
  button: {
    float: 'right',
    alignContent: 'center',
    padding: 5,
  },
}));

export default function Modal({
  open,
  setOpen,
  textValue,
  listItems,
  setListItems,
  setOpenEdit,
}) {
  const { id, title, description } = textValue;

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      fullWidth
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="dialog-title">
        {`Task View`}
        <IconButton
          aria-label="close"
          className={classes.button}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogTitle
        id="Sub-title"
        disableTypography
        className={classes.subTitle}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          className={classes.text}
        >
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <IconButton edge="end" aria-label="Edit">
          <EditIcon
            onClick={() => {
              setOpenEdit(true);
            }}
          />
        </IconButton>
        <IconButton edge="start" aria-label="delete">
          <DeleteIcon
            onClick={() => {
              const filteredArray = listItems.filter(i => i.id !== id);
              setListItems(filteredArray);
              setOpen(false);
            }}
          />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}
