import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from 'redux/auth';

import { paths } from 'routes';

import { Styled } from './Navigation.styled';

const linkProps = {
    exact: true,
    activeClassName: 'active',
};

const Navigation = ({ isAuthenticated }) => (
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

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
