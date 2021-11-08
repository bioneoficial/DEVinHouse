import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import Modal from '../components/Modal';
import EditModal from '../components/EditModal';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  borda: {
    borderStyle: 'dashed ',
    borderColor: 'whitesmoke',
    borderWidth: '2.5px',
    paddingLeft: '11px',
    paddingRight: '11px',
  },
}));

export default function TodoComplete({ listItems, setListItems, filtered }) {
  const [openModal, setOpenModal] = useState(false);
  const [valueTodoText, setValueTodoText] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {filtered === false && <Input setListItems={setListItems} />}

        {filtered === false ? (
          <h4>Atividades pendentes </h4> //texto dos pendentes
        ) : (
          ''
        )}

        {(filtered === true) & (listItems.length >= 0) ? ( //texto dos true aqui
          <h4>Atividades completas </h4>
        ) : (
          ''
        )}
        <List className={classes.borda}>
          <Box>
            {listItems.length >= 1 &&
              listItems.map(item => {
                return (
                  <TodoList // onde renderiza os falso
                    item={item}
                    listItems={listItems}
                    setListItems={setListItems}
                    setOpen={setOpenModal}
                    setitemTodoText={setValueTodoText}
                    setOpenEdit={setOpenEdit}
                  />
                );
              })}
          </Box>
        </List>

        <Modal
          open={openModal}
          setOpen={setOpenModal}
          textValue={valueTodoText}
          setValueTodoText={setValueTodoText}
          listItems={listItems}
          setListItems={setListItems}
          setOpenEdit={setOpenEdit}
        />

        <EditModal
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          textValue={valueTodoText}
          setValueTodoText={setValueTodoText}
          listItems={listItems}
          setListItems={setListItems}
        />
      </Container>
    </>
  );
}
