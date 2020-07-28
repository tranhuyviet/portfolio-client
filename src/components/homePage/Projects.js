import React from 'react';
import { Paper, Typography, Grid, Avatar, Button } from '@material-ui/core';
import SectionTitle from '../shared/SectionTitle';
import { useStyles } from './Projects.style';
import { useTheme } from '@material-ui/core/styles';

const Projects = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Paper
            component="section"
            square
            elevation={0}
            style={{ padding: theme.spacing(3), paddingTop: theme.spacing(5) }}
        >
            <SectionTitle title="projects" />
            <Paper className={classes.projectCardContainer} elevation={4}>
                <Grid container className={classes.projectCard}>
                    <Grid item xs={6} container>
                        <Avatar
                            src="https://res.cloudinary.com/dzaxf70c4/image/upload/c_scale,w_600/v1595754744/Screenshot_2020-07-26_at_12.11.48_sfhew8.png"
                            alt="project"
                            variant="square"
                            className={classes.projectImage}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" className={classes.projectTitle} color="primary">
                            iShare Project
                        </Typography>
                        <Typography variant="subtitle2" className={classes.projectSubtitle}>
                            Web-based image sharing application
                        </Typography>
                        <Typography variant="body1" className={classes.projectBody}>
                            The main idea of the application is for people to share their own photo.
                            Users will be able to post their own photos with caption, view/like
                            other’s photos.
                        </Typography>
                        <Paper className={classes.technologyContainer} elevation={0}>
                            <Avatar
                                src="https://res.cloudinary.com/dzaxf70c4/image/upload/c_scale,w_100/v1595757950/kisspng-node-js-javascript-software-developer-express-js-c-node-js-5b4bc172b6aa80.4777337515316913787482_ugvxnj.png"
                                alt="nodejs"
                                variant="square"
                                className={classes.logoTechnology}
                            />
                            <Avatar
                                src="https://res.cloudinary.com/dzaxf70c4/image/upload/c_scale,w_100/v1595758030/kisspng-logo-brand-product-design-mongodb-inc-mongodb-stickker-5b6abb6692b4a4.5287731615337214466009_p4q9b5.png"
                                alt="mongodb"
                                variant="square"
                                className={classes.logoTechnology}
                            />
                            <Avatar
                                src="https://res.cloudinary.com/dzaxf70c4/image/upload/c_scale,h_60/v1595838262/express-logo_vm1xh4.png"
                                alt="express"
                                variant="square"
                                style={{ width: 'auto' }}
                                // className={classes.logoTechnology}
                            />
                            <Avatar
                                src="https://res.cloudinary.com/dzaxf70c4/image/upload/c_scale,h_100/v1595759509/GraphQL_with_Logotype_s70ipl.png"
                                alt="graphql"
                                variant="square"
                                className={classes.logoTechnology}
                            />
                            <Avatar
                                src="https://res.cloudinary.com/dzaxf70c4/image/upload/c_scale,h_50,w_50/v1595759795/React.js_logo-512_azx5ne.png"
                                alt="react"
                                variant="square"
                            />
                        </Paper>

                        <Button
                            variant="outlined"
                            style={{ marginTop: theme.spacing(3) }}
                            color="primary"
                        >
                            View Project
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Paper>
    );
};

export default Projects;
