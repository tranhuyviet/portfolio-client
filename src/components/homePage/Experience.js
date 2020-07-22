import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Zoom } from 'react-reveal';
import SectionTitle from '../shared/SectionTitle';

const Experience = () => {
    const theme = useTheme();
    return (
        <Paper component="section" square elevation={0}>
            <SectionTitle title="experience" />
            <Grid container justify="center">
                <Grid item xs={8}>
                    Content
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Experience;
