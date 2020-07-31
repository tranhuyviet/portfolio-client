import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    topbarContainer: {
        maxHeight: 40,
        padding: '8px 0',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'fixed',
        zIndex: '1000',
        width: '100%',
        top: 0,
        opacity: 1,
        // background:
        //     theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['600'],
        // color:
        //     theme.palette.type === 'dark' ? theme.palette.common.black : theme.palette.common.white,
    },
    changeTheme: {
        marginLeft: 14,
    },
    language: {
        padding: '0 16px',
    },
    login: {
        marginLeft: 10,
    },
    button: {
        textTransform: 'capitalize',
        fontSize: 16,
    },
    colorButton: {
        height: 20,
        maxWidth: 20,
        borderRadius: '50%',
    },
    divider: {
        // margin: '0 16px',
    },
}));
