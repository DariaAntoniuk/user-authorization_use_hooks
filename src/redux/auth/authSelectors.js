const getUserName = state => state.auth.user.name;

const isLoading = state => state.auth.loading;

const isAuthenticated = state => state.auth.token;

export default {
    getUserName,
    isLoading,
    isAuthenticated,
};
