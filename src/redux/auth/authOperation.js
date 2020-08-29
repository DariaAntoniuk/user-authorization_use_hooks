import axios from 'axios';

import { authActions } from 'redux/auth';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => dispatch => {
    dispatch(authActions.REGISTER_USER_REQUEST);

    axios
        .post('/users/signup', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.registerUserSuccess(response.data));
        })
        .catch(error => dispatch(authActions.registerUserError(error.message)));
};

const logIn = credentials => dispatch => {
    dispatch(authActions.LOG_IN_REQUEST);

    axios
        .post('/users/login', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.logInSuccess(response.data));
        })
        .catch(error => dispatch(authActions.logInError(error.message)));
};

const logOut = () => dispatch => {
    dispatch(authActions.LOG_OUT_REQUEST);

    axios
        .post('/users/logout')
        .then(() => {
            token.unset();
            dispatch(authActions.LOG_OUT_SUCCESS);
        })
        .catch(error => dispatch(authActions.logOutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return null;
    }

    token.set(persistedToken);
    dispatch(authActions.GET_CURRENT_USER_REQUEST);

    axios
        .get('/users/current')
        .then(response => dispatch(authActions.getCurrentUserSuccess(response.data)))
        .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export default {
    register,
    logIn,
    logOut,
    getCurrentUser,
};
