import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import TopBar from './components/bars/TopBar';
import NavBar from './components/bars/NavBar';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: isDarkTheme ? 'dark' : 'light',
        },
    });

    const toggleTheme = (event) => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar darkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <NavBar />
        </ThemeProvider>
    );
}

export default App;
