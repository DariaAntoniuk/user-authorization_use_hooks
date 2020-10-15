import React from 'react';

import SiteBar from 'components/SiteBar/SiteBar';

import useThemeContext from 'utils/useThemeContext';

import { Styled } from './Layout.styles';

const Layout = ({ children }) => {
    const theme = useThemeContext();

    return (
        <Styled.Layout className={theme.isDark ? 'dark' : ''}>
            <SiteBar />

            {children}
        </Styled.Layout>
    );
};

export default Layout;
