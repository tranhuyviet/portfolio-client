import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import SectionTitle from '../shared/SectionTitle';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItemRender from '../shared/TimelineItemRender';

const Experience = () => {
    const theme = useTheme();
    return (
        <Paper component="section" square elevation={0} style={{ paddingTop: theme.spacing(5) }}>
            <SectionTitle title="experience" />
            <Grid container justify="center">
                <Grid item xs={8}>
                    <Timeline align="alternate">
                        <TimelineItemRender
                            year="2002 - 2004"
                            title="Haiphong Software Park (HSP) Viet Nam"
                            subtitle1="Web Developer"
                            subtitle2="HTML/CSS, ASP.NET, SQLDB"
                        />
                        <TimelineItemRender
                            year="2004 - 2011"
                            title="Vietnam Maritime Communications and Electronic LLC (Vishipel)"
                            subtitle1="Project Manager"
                            subtitle2="Constructing and implementing a number of major projects of Vietnam's maritime industry: "
                        >
                            <Typography>Ship Registration Management</Typography>
                            <Typography>Crew Management</Typography>
                            <Typography>Human Resource Management</Typography>
                            <Typography>Document Management</Typography>
                        </TimelineItemRender>
                        <TimelineItemRender
                            year="2010"
                            starsIcon
                            title="The merit of the Ministry of Transport Vietnam"
                            subtitle2='"There have been many achievements in research and applied of science and technology for transportation from 2005 to 2010"'
                        />
                    </Timeline>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Experience;
