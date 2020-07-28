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
        width: '600px',
        height: '450px',
        boxShadow: theme.shadows[5],
    },
    technologyContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    projectTitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    projectSubtitle: {
        marginBottom: theme.spacing(2),
    },
    projectBody: {
        marginBottom: theme.spacing(2),
    },
    logoTechnology: {
        //marginTop: theme.spacing(3),
        width: 'auto',
        height: '100px',
    },
}));
