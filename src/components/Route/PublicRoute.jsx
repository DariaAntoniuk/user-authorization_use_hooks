import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import withAuth from 'hoc/withAuth';

import { paths } from 'routes';

const PublicRoute = ({ component: Component, isAuthenticated, ...routeProp }) => (
    <Route
        {...routeProp}
        render={props =>
            isAuthenticated && routeProp.restricted ? <Redirect to={paths.contacts} /> : <Component {...props} />
        }
    />
);

export default withAuth(PublicRoute);
