import { combineReducers } from 'redux';

import actionTypes from './contactsActionTypes';
import authActionsTypes from 'redux/auth/authActionsTypes';

const items = (state = [], action) => {
    switch (action.type) {
        case authActionsTypes.LOGOUT_SUCCESS:
            return [];

        case actionTypes.FETCH_SUCCESS:
            return action.payload;

        case actionTypes.ADD_SUCCESS:
            return [...state, action.payload];

        case actionTypes.REMOVE_SUCCESS:
            return state.filter(contact => contact.id !== action.payload.contactId);

        case actionTypes.UPDATE_SUCCESS:
            const nextState = [...state];
            for (let i = 0; i < nextState.length; i++) {
                if (nextState[i].id === action.payload.id) {
                    nextState[i] = { ...action.payload };

                    break;
                }
            }
            return nextState;

        default:
            return state;
    }
};

const filter = (state = '', action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FILTER:
            return action.payload;

        default:
            return state;
    }
};

const loading = (state = false, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST:
        case actionTypes.ADD_REQUEST:
        case actionTypes.REMOVE_REQUEST:
        case actionTypes.UPDATE_REQUEST:
            return true;

        case actionTypes.FETCH_SUCCESS:
        case actionTypes.FETCH_ERROR:
        case actionTypes.ADD_SUCCESS:
        case actionTypes.ADD_ERROR:
        case actionTypes.REMOVE_SUCCESS:
        case actionTypes.REMOVE_ERROR:
        case actionTypes.UPDATE_SUCCESS:
        case actionTypes.UPDATE_ERROR:
            return false;

        default:
            return state;
    }
};

const error = (state = '', action) => {
    switch (action.type) {
        case actionTypes.FETCH_ERROR:
        case actionTypes.ADD_ERROR:
        case actionTypes.REMOVE_ERROR:
        case actionTypes.UPDATE_ERROR:
            return action.payload.message;

        case actionTypes.FETCH_REQUEST:
        case actionTypes.FETCH_SUCCESS:
        case actionTypes.ADD_REQUEST:
        case actionTypes.ADD_SUCCESS:
        case actionTypes.REMOVE_REQUEST:
        case actionTypes.REMOVE_SUCCESS:
        case actionTypes.UPDATE_REQUEST:
        case actionTypes.UPDATE_SUCCESS:
            return '';

        default:
            return state;
    }
};

export default combineReducers({
    items,
    filter,
    loading,
    error,
});
