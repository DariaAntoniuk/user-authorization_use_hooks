import React, { useMemo } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useStore } from 'react-redux';

import ThemeContext from 'context/ThemeContext';

import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';

import Layout from 'components/Layout/Layout';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

import { authOperation } from 'redux/auth';

import { paths } from 'routes';

const App = () => {
    const { dispatch, getState } = useStore();
    useMemo(() => authOperation.getCurrentUser()(dispatch, getState), []);

    return (
        <ThemeContext>
            <Layout>
                <Switch>
                    <PublicRoute path={paths.home} exact restricted={false} component={HomeView} />
                    <PublicRoute path={paths.register} exact restricted component={RegisterView} />
                    <PublicRoute path={paths.login} exact restricted component={LoginView} />
                    <PrivateRoute path={paths.contacts} exact component={ContactsView} />

                    <Redirect to={paths.home} />
                </Switch>
            </Layout>
        </ThemeContext>
    );
};

export default App;
