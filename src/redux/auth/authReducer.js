import { combineReducers } from 'redux';

import authTypes from './authActionsTypes';

const initialUserState = { name: null, email: null };

const user = (state = initialUserState, action) => {
    switch (action.type) {
        case authTypes.REGISTER_SUCCESS:
        case authTypes.LOGIN_SUCCESS:
            return action.payload.user;

        case authTypes.CURRENT_SUCCESS:
            return action.payload;

        case authTypes.LOGOUT_SUCCESS:
            return initialUserState;

        default:
            return state;
    }
};

const token = (state = null, action) => {
    switch (action.type) {
        case authTypes.REGISTER_SUCCESS:
        case authTypes.LOGIN_SUCCESS:
            return action.payload.token;

        case authTypes.LOGOUT_SUCCESS:
            return null;

        default:
            return state;
    }
};

const loading = (state = false, action) => {
    switch (action.type) {
        case authTypes.REGISTER_REQUEST:
        case authTypes.LOGIN_REQUEST:
        case authTypes.LOGOUT_REQUEST:
        case authTypes.CURRENT_REQUEST:
            return true;

        case authTypes.REGISTER_SUCCESS:
        case authTypes.REGISTER_ERROR:
        case authTypes.LOGIN_SUCCESS:
        case authTypes.LOGIN_ERROR:
        case authTypes.LOGOUT_SUCCESS:
        case authTypes.LOGOUT_ERROR:
        case authTypes.CURRENT_SUCCESS:
        case authTypes.CURRENT_ERROR:
            return false;

        default:
            return state;
    }
};

const error = (state = '', action) => {
    switch (action.type) {
        case authTypes.REGISTER_ERROR:
        case authTypes.LOGIN_ERROR:
        case authTypes.LOGOUT_ERROR:
        case authTypes.CURRENT_ERROR:
            return action.payload;

        case authTypes.REGISTER_REQUEST:
        case authTypes.REGISTER_SUCCESS:
        case authTypes.LOGIN_REQUEST:
        case authTypes.LOGIN_SUCCESS:
        case authTypes.LOGOUT_REQUEST:
        case authTypes.LOGOUT_SUCCESS:
        case authTypes.CURRENT_REQUEST:
        case authTypes.CURRENT_SUCCESS:
            return '';

        default:
            return state;
    }
};

export default combineReducers({
    user,
    token,
    loading,
    error,
});
