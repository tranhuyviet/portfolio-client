import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    topbarContainer: {
        maxHeight: 40,
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    changeTheme: {
        // borderRight: `1px solid ${theme.palette.grey[500]}`,
    },
    language: {
        padding: '0 16px',
    },
    login: {
        marginLeft: 16,
    },
    button: {
        textTransform: 'capitalize',
        fontSize: 16,
    },
}));
