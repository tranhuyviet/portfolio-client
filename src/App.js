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
    const [primaryColorIndex, setPrimaryColorIndex] = useState(0);
    const primaryColors = ['#f39a1d', '#42a5f5', '#4db6ac', '#ba68c8'];

    const theme = createMuiTheme({
        palette: {
            type: isDarkTheme ? 'dark' : 'light',
            primary: {
                main: primaryColors[primaryColorIndex],
                // main: '#f39a1d',
                // main: '#42a5f5',
                // main: '#4db6ac',

                // main: '#b3d146',
                // main: '#f57c00',
                // main: '#ba68c8',
                // main: '#5c6bc0',
                // main: '#8d6e63',
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
                <TopBar
                    darkTheme={isDarkTheme}
                    toggleTheme={toggleTheme}
                    primaryColorIndex={primaryColorIndex}
                    setPrimaryColorIndex={setPrimaryColorIndex}
                    primaryColors={primaryColors}
                />
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
