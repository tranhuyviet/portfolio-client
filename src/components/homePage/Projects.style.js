import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    projectCardContainer: {
        width: '90%',
        margin: '0 auto',
        // marginBottom: theme.spacing(3),
        padding: theme.spacing(3),
        marginTop: theme.spacing(5),
    },
    projectImage: {
        display: 'block',
        width: '100%',
        boxShadow: theme.shadows[5],
        maxWidth: 600,
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
