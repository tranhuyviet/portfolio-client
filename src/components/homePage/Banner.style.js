import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    bannerContainer: {
        minHeight: 'calc(100vh - 40px - 65px)',
        // height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    contentContainer: {
        // position: 'relative',
        // zIndex: 100,
    },
    infoContainer: {
        position: 'relative',
        zIndex: 2,
        paddingRight: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(3),
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
        },
    },
    particles: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    avatar: {
        height: 600,
        width: 502,
        [theme.breakpoints.down('sm')]: {
            height: 400,
            width: 333,
        },
        [theme.breakpoints.down('xs')]: {
            height: 250,
            width: 208,
        },
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '36px',
        },
    },
    subtitle: {
        textDecoration: 'underline',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            marginBottom: theme.spacing(2),
        },
    },
    description: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            marginBottom: theme.spacing(2),
        },
    },
}));
