import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navContainer: {
        height: '68px',
        maxHeight: '68px',
        // background:
        //     'linear-gradient(90deg, rgba(216,211,210,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(216,211,210,1) 100%)',
    },

    appbar: {
        boxShadow: theme.shadows[1],
    },
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

        fontSize: '46px',
        // color: '#F39A1D',
        backgroundImage:
            'linear-gradient(0deg, rgba(243,154,29,1) 0%, rgba(255,212,4,1) 50%, rgba(255,212,4,1) 70%, rgba(243,154,29,1) 100%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        // position: 'absolute',
        // top: '-52px',
        // left: '50%',

        // borderRadius: '50%',
        // height: '104px',
        // width: '104px',
        // zIndex: '19001',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    logoBackground: {
        position: 'absolute',
        zIndex: '19000',
        top: '-52px',
        left: '50%',
        height: '104px',
        width: '104px',
        background:
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['800'],
        borderRadius: '50%',
        border: `2px solid ${theme.palette.common.white}`,
    },
}));
