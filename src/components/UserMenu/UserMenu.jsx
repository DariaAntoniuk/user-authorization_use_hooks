import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import Loader from 'components/Loader/Loader';
import { authSelectors, authOperation } from 'redux/auth';

import { Styled } from './UserMenu.style';

const avatar = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder';

const UserMenu = () => {
    const isLoading = useSelector(state => authSelectors.isLoading(state));
    const name = useSelector(state => authSelectors.getUserName(state));

    const dispatch = useDispatch();
    const onLogout = dispatch(authOperation.logOut);

    return (
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
};

export default UserMenu;
