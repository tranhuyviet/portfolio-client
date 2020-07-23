import React from 'react';
import { useStyles } from './Skills.style';
import { Typography, Paper, LinearProgress, Box, Grid, Avatar } from '@material-ui/core';
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
                <Box component="div" style={{ marginBottom: theme.spacing(3) }}>
                    <Typography variant="h6" gutterBottom style={{ letterSpacing: 4 }}>
                        {props.text}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <LinearProgress
                                variant="determinate"
                                {...props}
                                style={{ height: 30 }}
                            />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                                props.value
                            )}%`}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Zoom>
        );
    }

    return (
        <Paper component="section" className={classes.skillsContainer} square elevation={2}>
            <SectionTitle title="Skills" />
            <Grid container spacing={2}>
                <Grid item xs={6} container direction="column" justify="center" alignItems="center">
                    <Grid item container justify="center">
                        <Spin forever>
                            <SettingsIcon
                                style={{
                                    fontSize: 150,
                                    color:
                                        theme.palette.type === 'dark'
                                            ? theme.palette.common.white
                                            : theme.palette.grey['500'],
                                }}
                            />
                        </Spin>
                    </Grid>
                    <Grid item container justify="flex-end">
                        <Grid item>
                            <Roll forever>
                                <SettingsIcon
                                    style={{
                                        fontSize: 250,
                                        // color:
                                        //     theme.palette.type === 'dark'
                                        //         ? theme.palette.common.white
                                        //         : theme.palette.grey['500'],
                                    }}
                                    color="primary"
                                />
                            </Roll>
                        </Grid>
                        <Grid item>
                            <Spin forever>
                                <SettingsIcon
                                    style={{
                                        fontSize: 350,
                                        color:
                                            theme.palette.type === 'dark'
                                                ? theme.palette.common.white
                                                : theme.palette.grey['500'],
                                    }}
                                />
                            </Spin>
                        </Grid>
                    </Grid>
                    {/* <Avatar
                        src="https://i.dlpng.com/static/png/6597586_preview.png"
                        style={{ height: 600, width: 600 }}
                    /> */}
                </Grid>
                <Grid item xs={6}>
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
