import React from 'react';
import { AppBar, Toolbar, Paper, Typography, Grid } from '@material-ui/core';
import { useStyles } from './NavBar.style';

const NavBar = () => {
    const classes = useStyles();
    return (
        <Paper components="nav" className={classes.navContainer} square elevation={0}>
            <AppBar position="static" className={classes.appbar} color="transparent">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={5} container alignItems="center">
                            {/* <Typography variant="h6">Education</Typography>
                            <Typography variant="h6" style={{ margin: '0 24px' }}>
                                Skill
                            </Typography>
                            <Typography variant="h6">Work Experience</Typography> */}
                        </Grid>
                        <Grid item xs={2} container justify="center">
                            <Typography variant="h2" className={classes.logoText}>
                                Viet
                            </Typography>
                        </Grid>
                        <Grid item xs={5}></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Paper>
    );
};

export default NavBar;
