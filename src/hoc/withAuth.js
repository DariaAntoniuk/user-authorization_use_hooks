import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from 'redux/auth';

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

const withAuth = WrappedComponent => {
    function WithAuth(props) {
        return <WrappedComponent {...props} />;
    }

    return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
