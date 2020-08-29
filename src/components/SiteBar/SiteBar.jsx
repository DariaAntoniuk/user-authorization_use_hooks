import React from 'react';
import { connect } from 'react-redux';

import Navigation from 'components/Navigation/Navigation';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';

import { authSelectors } from 'redux/auth';

import { Styled } from './SiteBar.styles';

const SiteBar = ({ isAuthenticated }) => (
    <Styled.Header>
        <Navigation />

        {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
    </Styled.Header>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(SiteBar);
