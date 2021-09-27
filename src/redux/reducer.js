import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import phonebookActions from './actions';

const contacts = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => {
    toast.success(`${payload.name} has been added to your phonebook!`);
    return [...state, payload]
  },
  [phonebookActions.deleteContact]: (state, { payload }) => {
    toast.warn("Contact deleted from your phonebook!");
      return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});