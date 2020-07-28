import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { useStyles } from './Footer.style';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.footer} component="footer" elevation={0}>
            <Grid container>
                <Grid item xs={5} container justify="center" alignItems="center" direction="column">
                    <Typography variant="subtitle1" className={classes.info}>
                        <PhoneIcon color="primary" fontSize="large" className={classes.icon} />
                        +358 45 105 3344
                    </Typography>
                    <Typography variant="subtitle1" className={classes.info}>
                        <EmailIcon color="primary" fontSize="large" className={classes.icon} />
                        vietth@msn.com
                    </Typography>
                    {/* <Typography
                        variant="subtitle1"
                        className={classes.copyright}
                    >{`© ${new Date().getFullYear()} Viet Tran.`}</Typography> */}
                </Grid>
                <Grid item xs={2} container justify="center" alignItems="center">
                    <Typography variant="h2" className={classes.logoText}>
                        Viet
                    </Typography>
                    <div className={classes.logoBackground} />
                </Grid>
                <Grid
                    item
                    xs={5}
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.socialIconContainer}
                >
                    <FacebookIcon className={classes.socialIcon} />
                    <LinkedInIcon className={classes.socialIcon} />
                    <GitHubIcon className={classes.socialIcon} />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Footer;
