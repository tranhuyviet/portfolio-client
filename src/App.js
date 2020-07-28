import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, useTheme } from '@material-ui/core/styles';

import { BrowserRouter, Route } from 'react-router-dom';

import TopBar from './components/bars/TopBar';
import NavBar from './components/bars/NavBar';
import HomePage from './components/pages/HomePage';
import Footer from './components/bars/Footer';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: isDarkTheme ? 'dark' : 'light',
            primary: {
                main: '#f39a1d',
            },
        },
        share: {
            sectionTitle: {
                // fontFamily: 'Dr Sugiyama',
                fontWeight: 'bold',
                letterSpacing: '4px',
                fontSize: '48px',
                textAlign: 'center',
                marginBottom: '16px',
            },
            timelineDot: {
                fontSize: '40px',
                boxShadow: useTheme().shadows[3],
                borderRadius: '50%',
            },
            info: {
                display: 'flex',
                alignItems: 'center',
                margin: `0 16px`,
                fontWeight: 'bold',
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
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
