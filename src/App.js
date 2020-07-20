import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter, Route } from 'react-router-dom';

import TopBar from './components/bars/TopBar';
import NavBar from './components/bars/NavBar';
import HomePage from './components/pages/HomePage';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: isDarkTheme ? 'dark' : 'light',
            primary: {
                main: '#f39a1d',
            },
        },
    });

    const toggleTheme = (event) => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    };

    console.log(theme);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <TopBar darkTheme={isDarkTheme} toggleTheme={toggleTheme} />
                <NavBar />
                <Route exact path="/" component={HomePage} />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
