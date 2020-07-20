import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navContainer: {
        height: '68px',
        // background:
        //     'linear-gradient(90deg, rgba(216,211,210,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(216,211,210,1) 100%)',
    },

    // appbar: {
    //     background:
    //         'linear-gradient(90deg, rgba(216,211,210,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(216,211,210,1) 100%)',
    // },
    menuContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logoContainer: {
        display: 'flex',
    },
    logoText: {
        fontFamily: 'Dr Sugiyama',
        fontWeight: 'bold',
        letterSpacing: '4px',
        padding: '5px 0',
        justifyContent: 'center',
        fontSize: '48px',
        // color: '#F39A1D',
        backgroundImage:
            'linear-gradient(0deg, rgba(243,154,29,1) 0%, rgba(255,212,4,1) 50%, rgba(255,212,4,1) 70%, rgba(243,154,29,1) 100%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    },
}));
