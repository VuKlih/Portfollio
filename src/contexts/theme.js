import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState('light');

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setThemeName(darkMediaQuery.matches ? 'dark' : 'light');

        /*
          -The event type is 'change', which indicates that the listener will be triggered when the result of 
          the media query changes.
          -The listener function (e) => { setThemeName(e.matches ? 'dark' : 'light'); } is executed 
          whenever the 'change' event occurs. It receives an Event object e as its argument, which contains information 
          about the change event.
        */
        darkMediaQuery.addEventListener('change', (e) => {
            setThemeName(e.matches ? 'dark' : 'light');
        });
    }, []);

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name);
        setThemeName(name);
    };

    // const value = {
    //     themeName,
    //     toggleTheme,
    // };

    // return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
    return <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
