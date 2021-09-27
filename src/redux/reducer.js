import { combineReducers } from 'redux';
import {  toast } from 'react-toastify';
import types from './types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD: {
      toast.success(`${payload.name} has been added to your phonebook!`);
      return [...state, payload];
    }
    case types.DELETE:
      toast.warn("Contact deleted from your phonebook!");
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});