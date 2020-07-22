import React from 'react';
import { useStyles } from './Educations.style';
import { Paper, Typography, Grid } from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { Zoom } from 'react-reveal';
import { useTheme } from '@material-ui/core/styles';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const Educations = () => {
    const classes = useStyles();
    const theme = useTheme();

    const TimelineItemRender = (props) => (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography style={{ marginTop: 5 }} variant="h6">
                    {props.year}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <RadioButtonCheckedIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper style={{ padding: '8px 16px' }} elevation={3}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }} color="primary">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1">{props.subtitle}</Typography>
                    <Typography>{props.graduated}</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    );

    return (
        <Paper component="section" square elevation={0}>
            <Zoom>
                <Typography style={{ ...theme.share.sectionTitle }}>
                    <span style={{ color: theme.palette.primary.main }}>E</span>ducation
                </Typography>
            </Zoom>
            <Grid container justify="center">
                <Grid item xs={8}>
                    <Timeline align="alternate">
                        <TimelineItemRender
                            year="1997 - 2002"
                            title="Hanoi University of Science and Technology"
                            subtitle="Major: Electronics and Telecommunication"
                            graduated="Graduated: Electronics and Telecommunications Engineer"
                        />
                        <TimelineItemRender
                            year="2004 - 2006"
                            title="Le Quy Don Technical University"
                            subtitle="Major: Infomation Technology"
                            graduated="Graduated: Master of Technology"
                        />
                        <TimelineItemRender
                            year="2017"
                            title="Metropolia University of Applied Sciences"
                            subtitle="Major: Mobile Solution"
                        />
                    </Timeline>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Educations;
