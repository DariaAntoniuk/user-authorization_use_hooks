import React, { Component } from 'react';

const Context = React.createContext();

class ThemeContext extends Component {
    static Consumer = Context.Consumer;

    toggleTheme = () => {
        this.setState(prevState => ({
            isDark: !prevState.isDark,
        }));
    };

    state = {
        isDark: false,
        toggleTheme: this.toggleTheme,
    };

    render() {
        return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
    }
}

export default ThemeContext;
