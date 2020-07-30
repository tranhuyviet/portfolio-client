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
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
    year: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            display: 'none',
        },
    },
    yearXS: {
        display: 'none',
        fontWeight: 'bold',
        width: '100%',
        borderBottom: '2px solid',
        borderBottomColor: theme.palette.grey['400'],
        paddingBottom: '4px',

        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            display: 'inline-block',
        },
    },
    title: {
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
    subtitle: {
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
    body: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
    },
    bodyChild: {
        fontSize: 16,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            fontSize: 13,
        },
    },
}));

const TimelineItemRender = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <TimelineItem className={classes.timelineItemContainer}>
            {props.year && (
                <TimelineOppositeContent>
                    <Fade top>
                        <Typography variant="h6" className={classes.year}>
                            {props.year}
                        </Typography>
                    </Fade>
                </TimelineOppositeContent>
            )}
            <TimelineSeparator>
                {/* <TimelineDot> */}
                {props.starsIcon ? (
                    <StarsIcon style={{ ...theme.share.timelineDot }} color="primary" />
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
                        <Typography className={classes.yearXS}>{props.year}</Typography>
                        <Typography variant="h6" color="primary" className={classes.title}>
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            {props.subtitle1}
                        </Typography>
                        <Typography className={classes.body}>{props.subtitle2}</Typography>
                        <div className={classes.bodyChild}>{props.children}</div>
                    </Paper>
                </Fade>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineItemRender;
