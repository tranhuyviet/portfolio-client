import React from 'react';
import { useStyles } from './Educations.style';
import { Paper, Grid, useMediaQuery, Typography } from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';

import SectionTitle from '../shared/SectionTitle';
import TimelineItemRender from '../shared/TimelineItemRender';
import { useTheme } from '@material-ui/core/styles';

const Educations = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <Paper component="section" square elevation={0} className={classes.educationContainer}>
            <SectionTitle title="Education" />
            <Grid container justify="center">
                <Grid item xs={12} sm={11} md={10}>
                    <Timeline align={isXS ? 'left' : 'alternate'} className={classes.timeline}>
                        <TimelineItemRender
                            year="1997 - 2002"
                            title="Hanoi University of Science and Technology"
                            subtitle1="Major: Electronics and Telecommunication"
                            subtitle2="Graduated: Electronics and Telecommunications Engineer"
                            link="https://en.hust.edu.vn/"
                        />
                        <TimelineItemRender
                            year="2004 - 2006"
                            title="Military Technology Academy"
                            subtitle1="Major: Information Technology"
                            subtitle2="Graduated: Master of Technology"
                            link="http://mta.edu.vn/"
                        />
                        <TimelineItemRender
                            year="2017"
                            title="Metropolia University of Applied Sciences"
                            subtitle1="Major: Mobile Solution"
                            subtitle2="Some of my following knowledge is in-school learning and self-study:"
                            link="https://www.metropolia.fi/en"
                        >
                            <Typography variant="inherit">- Javascript (ES6)</Typography>
                            <Typography variant="inherit">
                                - React: Redux, React Hooks (Custom Hooks, Context API,...),
                                Cloudinary
                            </Typography>
                            <Typography variant="inherit">
                                - UI Frameworks: Material UI, Semantic
                            </Typography>
                            <Typography variant="inherit">
                                - Apollo Client, Apollo Server
                            </Typography>
                            <Typography variant="inherit">- Nodejs: Rest API, Graphql</Typography>
                            <Typography variant="inherit">- Database: MongoDB, MariaDB</Typography>
                        </TimelineItemRender>
                    </Timeline>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Educations;
