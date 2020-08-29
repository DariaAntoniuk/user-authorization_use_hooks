import actionTypes from './contactsActionTypes';

const FETCH_CONTACTS_REQUEST = {
    type: actionTypes.FETCH_REQUEST,
};
const fetchContactsSuccess = data => ({
    type: actionTypes.FETCH_SUCCESS,
    payload: [...data],
});
const fetchContactsError = error => ({
    type: actionTypes.FETCH_ERROR,
    payload: error,
});

const ADD_CONTACT_REQUEST = {
    type: actionTypes.ADD_REQUEST,
};
const addContactSuccess = contact => ({
    type: actionTypes.ADD_SUCCESS,
    payload: {
        ...contact,
    },
});
const addContactError = error => ({
    type: actionTypes.ADD_ERROR,
    payload: error,
});

const REMOVE_CONTACTS_REQUEST = {
    type: actionTypes.REMOVE_REQUEST,
};
const removeContactSuccess = contactId => ({
    type: actionTypes.REMOVE_SUCCESS,
    payload: {
        contactId,
    },
});
const removeContactError = error => ({
    type: actionTypes.REMOVE_ERROR,
    payload: error,
});

const UPDATE_CONTACT_REQUEST = {
    type: actionTypes.UPDATE_REQUEST,
};
const updateContactSuccess = contact => ({
    type: actionTypes.UPDATE_SUCCESS,
    payload: {
        ...contact,
    },
});
const updateContactError = error => ({
    type: actionTypes.UPDATE_ERROR,
    payload: error,
});

const changeFilter = filter => ({
    type: actionTypes.CHANGE_FILTER,
    payload: filter,
});

export default {
    FETCH_CONTACTS_REQUEST,
    ADD_CONTACT_REQUEST,
    REMOVE_CONTACTS_REQUEST,
    UPDATE_CONTACT_REQUEST,
    fetchContactsSuccess,
    fetchContactsError,
    addContactSuccess,
    addContactError,
    removeContactSuccess,
    removeContactError,
    updateContactSuccess,
    updateContactError,
    changeFilter,
};
