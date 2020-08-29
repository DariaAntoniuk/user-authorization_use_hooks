import React from 'react';

import withTheme from 'hoc/withTheme';

import { Styled } from './ThemeButton.styles';

const ThemeButton = ({ theme }) => (
    <Styled.Button onClick={theme.toggleTheme} className={theme.isDark ? 'btn-dark' : ''}>
        Switch to {theme.isDark ? 'light' : 'dark'} theme
    </Styled.Button>
);

export default withTheme(ThemeButton);
