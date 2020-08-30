import React, { useContext } from 'react';

import SiteBar from 'components/SiteBar/SiteBar';

import { Context } from 'context/ThemeContext';

import { Styled } from './Layout.styles';

const Layout = ({ children }) => {
    const theme = useContext(Context);

    return (
        <Styled.Layout className={theme.isDark ? 'dark' : ''}>
            <SiteBar />

            {children}
        </Styled.Layout>
    );
};

export default Layout;
