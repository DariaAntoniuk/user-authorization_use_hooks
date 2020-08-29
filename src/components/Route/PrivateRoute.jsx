import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import withAuth from 'hoc/withAuth';

import { paths } from 'routes';

const PrivateRoute = ({ component: Component, isAuthenticated, ...routeProp }) => (
    <Route
        {...routeProp}
        render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to={paths.login} />)}
    />
);

export default withAuth(PrivateRoute);
