import React from 'react';

import useThemeContext from 'utils/useThemeContext';

import { Styled } from './ThemeButton.styles';

const ThemeButton = () => {
    const theme = useThemeContext();

    return (
        <Styled.Button onClick={theme.toggleTheme} className={theme.isDark ? 'btn-dark' : ''}>
            Switch to {theme.isDark ? 'light' : 'dark'} theme
        </Styled.Button>
    );
};

export default ThemeButton;
