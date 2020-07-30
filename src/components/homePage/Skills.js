import React from 'react';
import { useStyles } from './Skills.style';
import { Typography, Paper, LinearProgress, Box, Grid } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { useTheme } from '@material-ui/core/styles';
import { Zoom, Roll } from 'react-reveal';
import Spin from 'react-reveal/Spin';
import SectionTitle from '../shared/SectionTitle';

const Skills = () => {
    const classes = useStyles();
    const theme = useTheme();

    function LinearProgressWithLabel(props) {
        return (
            <Zoom left>
                <Box component="div" className={classes.skillItemContainer}>
                    <Typography variant="h6" gutterBottom className={classes.skillItemText}>
                        {props.text}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Box width="100%">
                            <LinearProgress
                                variant="determinate"
                                {...props}
                                className={classes.skillItemBar}
                            />
                        </Box>
                        <Box minWidth={35}>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                style={{ marginLeft: theme.spacing(1) }}
                            >{`${Math.round(props.value)}%`}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Zoom>
        );
    }

    return (
        <Paper
            component="section"
            className={classes.skillsContainer}
            square
            elevation={0}
            style={{ marginTop: theme.spacing(5) }}
        >
            <SectionTitle title="Skills" />
            <Grid container spacing={1}>
                <Grid item sm={6} container direction="column" justify="center" alignItems="center">
                    <Grid item container justify="center">
                        <Spin forever>
                            <SettingsIcon className={classes.icon1} />
                        </Spin>
                    </Grid>
                    <Grid item container justify="center">
                        <Grid item>
                            <Roll forever>
                                <SettingsIcon color="primary" className={classes.icon2} />
                            </Roll>
                        </Grid>
                        <Grid item>
                            <Spin forever>
                                <SettingsIcon className={classes.icon3} />
                            </Spin>
                        </Grid>
                    </Grid>
                    {/* <Avatar
                        src="https://i.dlpng.com/static/png/6597586_preview.png"
                        style={{ height: 600, width: 600 }}
                    /> */}
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ paddingLeft: theme.spacing(2), paddingRight: theme.spacing(2) }}
                >
                    <Paper style={{ height: '100%' }} square elevation={0}>
                        <LinearProgressWithLabel text="HTML/CSS/JSS/SASS" value={90} />
                        <LinearProgressWithLabel text="JAVASCRIPT" value={92} />
                        <LinearProgressWithLabel text="REACT: REDUX, CONTEXT API" value={95} />
                        <LinearProgressWithLabel
                            text="UI FRAMEWORK: MATERIAL UI, SEMANTIC"
                            value={90}
                        />
                        <LinearProgressWithLabel text="APOLLO CLIENT, APOLLO SERVER" value={95} />
                        <LinearProgressWithLabel text="NODEJS: REST API, GRAPHQL" value={95} />
                        <LinearProgressWithLabel text="MONGODB" value={90} />
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Skills;
