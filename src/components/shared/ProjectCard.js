import React from 'react';
import { useStyles } from './ProjectCard.style';
import { Paper, Typography, Grid, Avatar, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Slide } from 'react-reveal';
const ProjectCard = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Slide bottom>
            <Paper className={classes.projectCardContainer} elevation={5}>
                <Grid container direction="column">
                    <Grid item>
                        <img
                            src="https://res.cloudinary.com/dzaxf70c4/image/upload/c_scale,w_600/v1595754744/Screenshot_2020-07-26_at_12.11.48_sfhew8.png"
                            alt="project"
                            className={classes.projectImage}
                        />
                    </Grid>
                    <Grid item container direction="column" className={classes.infoContainer}>
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
                        <Grid item>
                            <Button
                                variant="contained"
                                style={{
                                    marginTop: theme.spacing(3),
                                    fontWeight: 'bold',
                                    letterSpacing: 1,
                                    // width: 150,
                                    marginRight: theme.spacing(3),
                                    color: theme.palette.common.white,
                                }}
                                color="primary"
                                startIcon={<VisibilityIcon />}
                            >
                                Launch
                            </Button>
                            <Button
                                variant="outlined"
                                style={{
                                    marginTop: theme.spacing(3),
                                    fontWeight: 'bold',
                                    letterSpacing: 1,
                                    // width: 150,
                                }}
                                color="primary"
                                startIcon={<GitHubIcon />}
                            >
                                Github
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Slide>
    );
};

export default ProjectCard;
