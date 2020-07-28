import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, Tab, Tabs } from '@material-ui/core';
import { useStyles } from './NavBar.style';
import { Link } from 'react-router-dom';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const NavBar = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const pathName = window.location.pathname;

    useEffect(() => {
        switch (pathName) {
            case '/':
                if (tabValue !== 0) setTabValue(0);
                break;
            case '/contact':
                if (tabValue !== 1) setTabValue(1);
                break;
            default:
                break;
        }
    }, [tabValue, pathName, setTabValue]);

    return (
        <Paper components="nav" className={classes.navContainer} square elevation={6}>
            {/* <AppBar position="static" className={classes.appbar} color="transparent">
                <Toolbar> */}
            <Grid container className={classes.menu}>
                <Grid item xs={5} container alignItems="center" justify="center">
                    {/* <Typography
                        variant="h6"
                        className={pathName === '/' ? classes.active : classes.menuItem}
                        component={Link}
                        to="/"
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.menuItem}
                        component={Link}
                        to="/contact"
                    >
                        Contact
                    </Typography> */}
                    <Tabs
                        value={tabValue}
                        onChange={(event, newValue) => setTabValue(newValue)}
                        classes={{ indicator: classes.indicator }}
                    >
                        <Tab
                            label="Home"
                            component={Link}
                            to="/"
                            classes={{ selected: classes.tabSelected }}
                            className={classes.tabItem}
                        />
                        <Tab
                            label="Contact"
                            component={Link}
                            to="/contact"
                            classes={{ selected: classes.tabSelected }}
                            className={classes.tabItem}
                        />
                    </Tabs>
                </Grid>
                <Grid item xs={2} container justify="center" style={{ position: 'relative' }}>
                    <Typography variant="h2" className={classes.logoText}>
                        Viet
                    </Typography>
                    {/* <div className={classes.logoBackground}></div> */}
                </Grid>
                <Grid item xs={5} container justify="center" alignItems="center">
                    <Typography variant="subtitle1" className={classes.info}>
                        <PhoneIcon color="primary" fontSize="large" className={classes.icon} />
                        +358 45 105 3344
                    </Typography>
                    <Typography variant="subtitle1" className={classes.info}>
                        <EmailIcon color="primary" fontSize="large" className={classes.icon} />
                        vietth@msn.com
                    </Typography>
                </Grid>
            </Grid>
            {/* </Toolbar>
            </AppBar> */}
        </Paper>
    );
};

export default NavBar;
