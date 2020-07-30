import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    educationContainer: {
        paddingTop: theme.spacing(5),
    },
    timeline: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-80%',
        },
    },
}));
