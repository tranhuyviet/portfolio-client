import React from 'react';
import { useStyles } from './Banner.style';
import { Paper, Typography, Box, Avatar, Button, Grid } from '@material-ui/core';
import Particles from 'react-particles-js';
import { useTheme } from '@material-ui/core/styles';
import Typed from 'react-typed';

const Banner = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Paper component="section" elevation={0} square className={classes.bannerContainer}>
            <Grid container className={classes.contentContainer}>
                <Grid
                    item
                    xs={6}
                    container
                    justify="flex-end"
                    alignItems="center"
                    style={{ paddingRight: theme.spacing(4) }}
                >
                    <Avatar
                        src="https://res.cloudinary.com/dzaxf70c4/image/upload/ar_1:1,bo_5px_solid_rgb:f39a1d,c_fill,g_auto,r_max,w_1000/v1592381151/jqoyecsjkjtxxshaxhqt.jpg"
                        alt="avatar"
                        style={{ height: 200, width: 200 }}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h4">
                        Hi, I am <span style={{ fontWeight: 'bold' }}>Viet Tran</span>
                    </Typography>
                    <Typography
                        variant="h5"
                        color="primary"
                        style={{ textDecoration: 'underline', marginBottom: theme.spacing(2) }}
                    >
                        <Typed strings={['Full-Stack Web Diveloper']} typeSpeed={60} loop />
                    </Typography>
                    <Typography variant="subtitle1">
                        I am currently a fourth year student at the Metropolia University of Applied
                        Sciences. Although my major is Mobile Solution, I have a passion for the
                        web-devenopment.
                    </Typography>
                    <Typography variant="subtitle1">
                        I have over 10 years of experience working in the information technology
                        environment in Vietnam.
                    </Typography>
                    <Button
                        variant="outlined"
                        style={{ marginTop: theme.spacing(2) }}
                        color="primary"
                    >
                        Download CV
                    </Button>
                </Grid>
            </Grid>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 80,
                        },
                        size: {
                            value: 4,
                        },
                        color: {
                            value:
                                theme.palette.type === 'dark'
                                    ? theme.palette.common.white
                                    : theme.palette.common.black,
                        },
                        line_linked: {
                            color:
                                theme.palette.type === 'dark'
                                    ? theme.palette.common.white
                                    : theme.palette.common.black,
                            opacity: '0.1',
                            width: '1',
                        },
                        opacity: {
                            value: '0.1',
                            random: false,
                            anim: {
                                speed: '0.5',
                                sync: false,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse',
                            },
                        },
                    },
                }}
                className={classes.particles}
            />
        </Paper>
    );
};

export default Banner;
