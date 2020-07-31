import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    skillsContainer: {
        height: 'auto',
        // padding: '24px',
        paddingTop: theme.spacing(5),
    },
    sectionTitle: {
        ...theme.share.sectionTitle,
    },
    gridContainer: {
        width: '90%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    icon1: {
        fontSize: 125,
        color:
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['500'],
        [theme.breakpoints.down('sm')]: {
            fontSize: 75,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 55,
        },
    },
    icon2: {
        fontSize: 200,
        [theme.breakpoints.down('sm')]: {
            fontSize: 150,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 100,
        },
    },
    icon3: {
        fontSize: 280,
        color:
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['500'],
        [theme.breakpoints.down('sm')]: {
            fontSize: 170,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 130,
        },
    },
    skillItemContainer: {
        marginBottom: theme.spacing(3),
    },
    skillItemText: {
        letterSpacing: 4,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    skillItemBar: {
        height: 30,
        [theme.breakpoints.down('sm')]: {
            height: 20,
        },
    },
}));
