import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';

const withAuth = WrappedComponent => {
    function WithAuth(props) {
        const isAuthenticated = useSelector(state => authSelectors.isAuthenticated(state));

        return <WrappedComponent {...props} isAuthenticated={isAuthenticated} />;
    }

    return WithAuth;
};

export default withAuth;
