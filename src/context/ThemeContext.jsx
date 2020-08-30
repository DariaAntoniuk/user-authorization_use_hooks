import React, { useState } from 'react';

export const Context = React.createContext();

const ThemeContext = ({ children }) => {
    const handleToggleTheme = () => {
        setState(prevState => ({ ...prevState, isDark: !prevState.isDark }));
    };

    const [state, setState] = useState({ isDark: false, toggleTheme: handleToggleTheme });

    return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default ThemeContext;
