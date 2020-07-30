import React from 'react';
import { Zoom } from 'react-reveal';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        ...theme.share.sectionTitle,
        [theme.breakpoints.down('xs')]: {
            fontSize: '36px',
        },
    },
    firstLeter: {
        marginRight: 4,

        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        padding: '4px 8px 4px 12px',
        textAlign: 'center',
        boxShadow: theme.shadows[4],
    },
}));

const SectionTitle = ({ title }) => {
    const firstLeter = title[0].toUpperCase();
    const restOfTitle = title.slice(1);

    const classes = useStyles();

    return (
        <Zoom>
            <Typography className={classes.title}>
                <span className={classes.firstLeter}>{firstLeter}</span>
                {restOfTitle}
            </Typography>
        </Zoom>
    );
};

export default SectionTitle;
