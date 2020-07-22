import React from 'react';
import { useStyles } from './Skills.style';
import { Typography, Paper, LinearProgress, Box, Grid, Avatar } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { useTheme } from '@material-ui/core/styles';
import { Zoom, Roll } from 'react-reveal';
import Spin from 'react-reveal/Spin';
import SkillSVG from '../../assets/images/sprite_60fps.svg';

const Skills = () => {
    const classes = useStyles();
    const theme = useTheme();

    function LinearProgressWithLabel(props) {
        return (
            <Box component="div" style={{ marginBottom: theme.spacing(3) }}>
                <Typography variant="h6" gutterBottom style={{ letterSpacing: 4 }}>
                    {props.text}
                </Typography>
                <Box display="flex" alignItems="center">
                    <Box width="100%" mr={1}>
                        <LinearProgress variant="determinate" {...props} style={{ height: 30 }} />
                    </Box>
                    <Box minWidth={35}>
                        <Typography variant="body2" color="textSecondary">{`${Math.round(
                            props.value
                        )}%`}</Typography>
                    </Box>
                </Box>
            </Box>
        );
    }

    return (
        <Paper component="section" className={classes.skillsContainer} square elevation={2}>
            <Zoom>
                <Typography style={{ ...theme.share.sectionTitle }}>
                    <span style={{ color: theme.palette.primary.main }}>S</span>kills
                </Typography>
            </Zoom>
            <Grid container spacing={2}>
                <Grid item xs={6} container direction="column">
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
