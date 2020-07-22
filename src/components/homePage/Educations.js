import React from 'react';
import { useStyles } from './Educations.style';
import { Paper, Typography, Grid } from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';

import { Zoom } from 'react-reveal';
import { useTheme } from '@material-ui/core/styles';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import SectionTitle from '../shared/SectionTitle';
import TimelineItemRender from '../shared/TimelineItemRender';

const Educations = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Paper component="section" square elevation={0}>
            <SectionTitle title="Education" />
            <Grid container justify="center">
                <Grid item xs={8}>
                    <Timeline align="alternate">
                        <TimelineItemRender
                            year="1997 - 2002"
                            title="Hanoi University of Science and Technology"
                            subtitle1="Major: Electronics and Telecommunication"
                            subtitle2="Graduated: Electronics and Telecommunications Engineer"
                        />
                        <TimelineItemRender
                            year="2004 - 2006"
                            title="Le Quy Don Technical University"
                            subtitle1="Major: Infomation Technology"
                            subtitle2="Graduated: Master of Technology"
                        />
                        <TimelineItemRender
                            year="2017"
                            title="Metropolia University of Applied Sciences"
                            subtitle1="Major: Mobile Solution"
                        />
                    </Timeline>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Educations;
