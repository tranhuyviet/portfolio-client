import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import SectionTitle from '../shared/SectionTitle';
// import { useStyles } from './Projects.style';
import { useTheme } from '@material-ui/core/styles';

import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
    const theme = useTheme();
    return (
        <Paper
            component="section"
            square
            elevation={0}
            style={{ padding: theme.spacing(3), paddingTop: theme.spacing(5) }}
        >
            <SectionTitle title="projects" />

            <Grid
                container
                style={{
                    marginTop: theme.spacing(5),
                    paddingLeft: theme.spacing(1),
                    paddingRight: theme.spacing(1),
                }}
                justify="center"
                spacing={5}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Projects;
