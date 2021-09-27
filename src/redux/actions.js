import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', ({id, name, number}) => ({
  payload: {
    id,
    name,
    number
  },
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

const phonebookActions = { addContact, deleteContact, changeFilter };

export default phonebookActions;