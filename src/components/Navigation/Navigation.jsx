import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';

import { paths } from 'routes';

import { Styled } from './Navigation.styled';

const linkProps = {
    exact: true,
    activeClassName: 'active',
};

const Navigation = () => {
    const isAuthenticated = useSelector(state => authSelectors.isAuthenticated(state));

    return (
        <nav>
            <Styled.NavLink to={paths.home} {...linkProps}>
                Home
            </Styled.NavLink>
            {isAuthenticated && (
                <Styled.NavLink to={paths.contacts} {...linkProps}>
                    Contacts
                </Styled.NavLink>
            )}
        </nav>
    );
};

export default Navigation;
