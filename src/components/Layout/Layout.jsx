import React from 'react';
import PropTypes from 'prop-types';

import SiteBar from 'components/SiteBar/SiteBar';
import withTheme from 'hoc/withTheme';

import { Styled } from './Layout.styles';

const Layout = ({ theme, children }) => (
    <Styled.Layout className={theme.isDark ? 'dark' : ''}>
        <SiteBar />

        {children}
    </Styled.Layout>
);

Layout.propTypes = {
    theme: PropTypes.shape({
        isDark: PropTypes.bool.isRequired,
    }).isRequired,
};

export default withTheme(Layout);
