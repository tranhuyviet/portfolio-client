import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    projectCardContainer: {
        maxWidth: 600,
        margin: '0 auto',
        // marginBottom: theme.spacing(3),
        // [theme.breakpoints.down('xs')]: {
        //     maxWidth: 440,
        // },
        // [theme.breakpoints.down('sm')]: {
        //     maxWidth: 550,
        // },
        '&:hover': {
            // cursor: 'pointer',
            opacity: 0.8,
            boxShadow: theme.shadows[1],
        },
    },
    projectImage: {
        display: 'block',
        width: '100%',
        padding: 0,
        margin: 0,
    },
    infoContainer: {
        padding: theme.spacing(3),
    },
    technologyContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    projectTitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
        borderBottom: '2px solid',
        paddingBottom: 4,
    },
    projectSubtitle: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
    },
    projectBody: {
        marginBottom: theme.spacing(2),
    },
    logoTechnology: {
        //marginTop: theme.spacing(3),
        width: 'auto',
        height: '50px',
        margin: theme.spacing(1),
    },
}));
