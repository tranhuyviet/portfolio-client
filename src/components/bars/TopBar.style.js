import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    topbarContainer: {
        maxHeight: 40,
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // background:
        //     theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['600'],
        // color:
        //     theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
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
