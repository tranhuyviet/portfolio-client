import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footer: {
        height: 450,
        position: 'relative',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['800'],
        overflow: 'hidden',
        '&:before': {
            content: '""',
            position: 'absolute',
            left: '-250px',
            right: '-250px',
            top: 0,
            height: 300,
            borderRadius: '100%',
            backgroundColor:
                theme.palette.type === 'dark'
                    ? theme.palette.grey['800']
                    : theme.palette.common.white,
            transform: 'translateY(-50%) rotate(2deg)',
            boxSizing: 'border-box',
            borderBottom: `2px solid`,
            borderBottomColor:
                theme.palette.type === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.grey['800'],
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(5),
            '&:before': {
                display: 'none',
            },
        },
    },
    logoText: {
        // fontFamily: 'Dr Sugiyama',
        // fontFamily: 'Paytone One',
        fontFamily: 'Saira Stencil One',
        fontWeight: 'bold',
        textDecoration: 'underline',
        letterSpacing: '1px',
        padding: '5px 0',

        fontSize: '64px',
        // color: '#F39A1D',
        backgroundImage: `linear-gradient(0deg, ${theme.palette.primary.main} 0%,${
            theme.palette.primary.main
        } 40%, ${
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['700']
        } 55%,${
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['700']
        }  58%,${theme.palette.primary.main} 75%,${theme.palette.primary.main} 100%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        position: 'absolute',
        top: 25,
        height: 140,
        width: 140,
        textAlign: 'center',
    },
    logoBackground: {
        height: '140px',
        width: '140px',
        background:
            theme.palette.type === 'dark' ? theme.palette.grey['800'] : theme.palette.common.white,
        borderRadius: '50%',
        // border: `2px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[10],
        position: 'relative',
    },
    footerContainer: {
        height: 450,
        paddingTop: 150,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
            //height: 600,
        },
    },
    copyright: {
        color:
            theme.palette.type === 'dark' ? theme.palette.grey['800'] : theme.palette.common.white,
    },
    infoContainer: {
        [theme.breakpoints.down('xs')]: {
            height: 150,
        },
    },
    logoContainer: {
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
            height: 150,
            // marginTop: -155,
        },
    },
    socialIconContainer: {
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
            //marginTop: -170,
            height: 150,
        },
    },
    socialIcon: {
        color:
            theme.palette.type === 'dark' ? theme.palette.grey['800'] : theme.palette.common.white,
        fontSize: '48px',
        zIndex: 10,
        margin: '0 16px',
    },
    info: {
        ...theme.share.info,
        color:
            theme.palette.type === 'dark' ? theme.palette.grey['800'] : theme.palette.common.white,
        marginBottom: theme.spacing(2),
        // position: 'relative',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));
