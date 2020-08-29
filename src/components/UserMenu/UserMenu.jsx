import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Loader from 'components/Loader/Loader';
import { authSelectors, authOperation } from 'redux/auth';

import { Styled } from './UserMenu.style';

const UserMenu = ({ avatar, isLoading, name, onLogout }) => (
    <>
        {isLoading ? (
            <Loader align="right" />
        ) : (
            <Styled.Nav>
                <Styled.Image src={avatar} alt="user image" />
                <Styled.Span>Welcome, {name}</Styled.Span>
                <Button onClick={onLogout} variant="outlined" color="primary" size="small">
                    Logout
                </Button>
            </Styled.Nav>
        )}
    </>
);

const mapStateToProps = state => ({
    isLoading: authSelectors.isLoading(state),
    name: authSelectors.getUserName(state),
    avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
});

const mapDispatchToProps = {
    onLogout: authOperation.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
