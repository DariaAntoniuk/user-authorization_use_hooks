import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
    const handleToggleTheme = () => {
        setState(prevState => ({ ...prevState, isDark: !prevState.isDark }));
    };

    const [state, setState] = useState({ isDark: false, toggleTheme: handleToggleTheme });

    return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
