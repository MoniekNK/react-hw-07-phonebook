import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterStatus = state => state.filter.status;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterStatus],
  (contacts, filterStatus) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterStatus)
    );
  }
);
