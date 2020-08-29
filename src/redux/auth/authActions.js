import authTypes from './authActionsTypes';

const REGISTER_USER_REQUEST = {
    type: authTypes.REGISTER_REQUEST,
};
const registerUserSuccess = user => ({
    type: authTypes.REGISTER_SUCCESS,
    payload: { ...user },
});
const registerUserError = error => ({
    type: authTypes.REGISTER_ERROR,
    payload: error,
});

const LOG_IN_REQUEST = {
    type: authTypes.LOGIN_REQUEST,
};
const logInSuccess = auth => ({
    type: authTypes.LOGIN_SUCCESS,
    payload: {
        ...auth,
    },
});
const logInError = error => ({
    type: authTypes.LOGIN_ERROR,
    payload: error,
});

const LOG_OUT_REQUEST = {
    type: authTypes.LOGOUT_REQUEST,
};
const LOG_OUT_SUCCESS = {
    type: authTypes.LOGOUT_SUCCESS,
};
const logOutError = error => ({
    type: authTypes.LOGOUT_ERROR,
    payload: error,
});

const GET_CURRENT_USER_REQUEST = {
    type: authTypes.CURRENT_REQUEST,
};
const getCurrentUserSuccess = user => ({
    type: authTypes.CURRENT_SUCCESS,
    payload: {
        ...user,
    },
});
const getCurrentUserError = error => ({
    type: authTypes.CURRENT_ERROR,
    payload: error,
});

export default {
    REGISTER_USER_REQUEST,
    GET_CURRENT_USER_REQUEST,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    registerUserSuccess,
    registerUserError,
    logInSuccess,
    logInError,
    logOutError,
    getCurrentUserSuccess,
    getCurrentUserError,
};
