import React from 'react';

import { Styled } from 'components/Navigation/Navigation.styled';

import { paths } from 'routes';

const AuthNavigation = () => {
    const links = [
        { url: paths.register, exact: true, label: 'Register' },
        { url: paths.login, exact: true, label: 'Login' },
    ].map(route => (
        <Styled.NavLink key={route.url} to={route.url} exact={route.exact} activeClassName="active">
            {route.label}
        </Styled.NavLink>
    ));

    return <nav>{links}</nav>;
};

export default AuthNavigation;
