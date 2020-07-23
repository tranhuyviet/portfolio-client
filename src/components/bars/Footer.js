import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useStyles } from './Footer.style';

const Footer = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.footer} component="footer" elevation={0}>
            <Typography variant="h2" className={classes.logoText}>
                Viet
            </Typography>
            <div className={classes.logoBackground} />
        </Paper>
    );
};

export default Footer;
