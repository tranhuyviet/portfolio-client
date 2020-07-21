import React from 'react';
import { AppBar, Toolbar, Paper, Typography, Grid } from '@material-ui/core';
import { useStyles } from './NavBar.style';

const NavBar = () => {
    const classes = useStyles();
    return (
        <Paper components="nav" className={classes.navContainer} square elevation={6}>
            {/* <AppBar position="static" className={classes.appbar} color="transparent">
                <Toolbar> */}
            <Grid container className={classes.appbar}>
                <Grid item xs={5} container alignItems="center">
                    {/* <Typography variant="h6">Education</Typography>
                            <Typography variant="h6" style={{ margin: '0 24px' }}>
                                Skill
                            </Typography>
                            <Typography variant="h6">Work Experience</Typography> */}
                </Grid>
                <Grid item xs={2} container justify="center" style={{ position: 'relative' }}>
                    <Typography variant="h2" className={classes.logoText}>
                        Viet
                    </Typography>
                    {/* <div className={classes.logoBackground}></div> */}
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
            {/* </Toolbar>
            </AppBar> */}
        </Paper>
    );
};

export default NavBar;
