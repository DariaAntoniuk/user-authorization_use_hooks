import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
);

export default {
    getContacts,
    getFilter,
    getLoading,
    getError,
    getVisibleContacts,
};
