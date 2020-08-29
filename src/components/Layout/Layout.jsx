import React from 'react';

import SiteBar from 'components/SiteBar/SiteBar';
import withTheme from 'hoc/withTheme';

import { Styled } from './Layout.styles';

const Layout = ({ theme, children }) => (
    <Styled.Layout className={theme.isDark ? 'dark' : ''}>
        <SiteBar />

        {children}
    </Styled.Layout>
);

export default withTheme(Layout);
