import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from 'components/Navigation/Navigation';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';

import { authSelectors } from 'redux/auth';

import { Styled } from './SiteBar.styles';

const SiteBar = () => {
    const isAuthenticated = useSelector(state => authSelectors.isAuthenticated(state));

    return (
        <Styled.Header>
            <Navigation />

            {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
        </Styled.Header>
    );
};

export default SiteBar;
