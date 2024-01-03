import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { contactsReducer } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  }),
});
export default store;
