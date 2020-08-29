import axios from 'axios';

import contactsAction from './contactsAction';

const fetchContacts = () => dispatch => {
    dispatch(contactsAction.FETCH_CONTACTS_REQUEST);

    axios
        .get('/contacts')
        .then(response => dispatch(contactsAction.fetchContactsSuccess(response.data)))
        .catch(error => dispatch(contactsAction.fetchContactsError(error)));
};

const addContact = (name, number) => dispatch => {
    dispatch(contactsAction.ADD_CONTACT_REQUEST);

    axios
        .post('/contacts', { name, number })
        .then(response => dispatch(contactsAction.addContactSuccess(response.data)))
        .catch(error => dispatch(contactsAction.addContactError(error)));
};

const removeContact = contactId => dispatch => {
    dispatch(contactsAction.REMOVE_CONTACTS_REQUEST);

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(contactsAction.removeContactSuccess(contactId)))
        .catch(error => dispatch(contactsAction.removeContactError(error)));
};

const updateContact = (id, name, number) => dispatch => {
    dispatch(contactsAction.UPDATE_CONTACT_REQUEST);

    axios
        .patch(`/contacts/${id}`, { name, number })
        .then(response => dispatch(contactsAction.updateContactSuccess(response.data)))
        .catch(error => dispatch(contactsAction.updateContactError(error)));
};

export default {
    fetchContacts,
    addContact,
    removeContact,
    updateContact,
};
