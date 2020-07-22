import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import StarsIcon from '@material-ui/icons/Stars';
import { useTheme } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const TimelineItemRender = (props) => {
    const theme = useTheme();
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Fade top>
                    <Typography variant="h6">{props.year}</Typography>
                </Fade>
            </TimelineOppositeContent>
            <TimelineSeparator>
                {/* <TimelineDot> */}
                {props.starsIcon ? (
                    <StarsIcon style={{ ...theme.share.timelineDot }} />
                ) : (
                    <RadioButtonCheckedIcon
                        style={{
                            ...theme.share.timelineDot,
                        }}
                    />
                )}
                {/* </TimelineDot> */}
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Fade right>
                    <Paper style={{ padding: '8px 16px' }} elevation={3}>
                        <Typography variant="h6" style={{ fontWeight: 'bold' }} color="primary">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                            {props.subtitle1}
                        </Typography>
                        <Typography>{props.subtitle2}</Typography>
                        {props.children}
                    </Paper>
                </Fade>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineItemRender;
