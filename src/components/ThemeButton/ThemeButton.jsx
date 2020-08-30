import React, { useContext } from 'react';

import { Context } from 'context/ThemeContext';

import { Styled } from './ThemeButton.styles';

const ThemeButton = () => {
    const theme = useContext(Context);

    return (
        <Styled.Button onClick={theme.toggleTheme} className={theme.isDark ? 'btn-dark' : ''}>
            Switch to {theme.isDark ? 'light' : 'dark'} theme
        </Styled.Button>
    );
};

export default ThemeButton;
