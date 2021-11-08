import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    margin: theme.spacing(1, 0, 1),
    display: 'flex',
    alignItems: 'center',
    overflowY: 'auto',
    minHeight: 80,
    maxHeight: '100%',
  },
  list: {
    //texto dentro
    overflowX: 'hidden',
    wordWrap: 'break-word',
  },
  listButton: {
    // botoes grupo
    overflowX: 'hidden',
    flex: 1,
  },
}));

const stylesList = {
  background: '#303fEf',
  borderRadius: 3,
  color: 'white',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  padding: '0 30px',
  boxShadow: '1px 1px 1px 1px rgba(159, 105, 235, .3)',
};

const checkedList = {
  ...stylesList,
  background: 'green',
  boxShadow: '1px 1px 1px 1px rgba(33, 222, 243, .3)',
};

export default React.memo(function TodoList({
  item,
  listItems,
  setListItems,
  setOpen,
  setitemTodoText,
  setOpenEdit,
}) {
  const handleOpenModal = (id, title, check, description) => () => {
    setOpen(true);
    setitemTodoText({
      id: id,
      title: title,
      check: check,
      description: description,
    });
  };

  const handleDelete = id => () => {
    const filteredArray = listItems.filter(i => i.id !== id);
    setListItems(filteredArray);
  };

  const handleEdit = (id, title, check, description) => () => {
    setOpenEdit(true);
    setitemTodoText({
      id: id,
      title: title,
      check: check,
      description: description,
    });
  };

  const handleToggle = id => () => {
    const itemToggle = listItems.map(i => {
      return i.id === id
        ? {
            id: i.id,
            title: i.title,
            description: i.description,
            check: !i.check,
          }
        : i;
    });

    setListItems(itemToggle);
  };

  const classes = useStyles();
  if (item) {
    const { id, title, check, description } = item;
    const labelId = `list-label-${title}`;
    return (
      <ListItem
        key={id}
        dense
        button
        className={classes.root}
        style={check === false ? stylesList : checkedList}
        onDoubleClick={handleToggle(id)} //AQUI dblclick
      >
        <Box maxWidth="73%">
          <ListItemText id={labelId} primary={title} className={classes.list} />
          <ListItemSecondaryAction className={classes.listButton}>
            <ListItemIcon>
              <IconButton edge="end" aria-label="View">
                <VisibilityIcon
                  onClick={handleOpenModal(id, title, check, description)}
                />
              </IconButton>
              <IconButton edge="end" aria-label="Edit">
                <EditIcon onClick={handleEdit(id, title, check, description)} />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={handleDelete(id)} />
              </IconButton>
            </ListItemIcon>
          </ListItemSecondaryAction>
        </Box>
      </ListItem>
    );
  } else {
    return '';
  }
});
