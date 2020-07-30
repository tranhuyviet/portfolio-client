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
            '&:before': {
                display: 'none',
            },
        },
    },
    logoText: {
        fontFamily: 'Dr Sugiyama',
        fontWeight: 'bold',
        letterSpacing: '4px',
        padding: '5px 0',

        fontSize: '64px',
        // color: '#F39A1D',
        backgroundImage: `linear-gradient(-10deg, ${theme.palette.primary.main} 0%,${
            theme.palette.primary.main
        } 40%, ${
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['600']
        } 55%,${
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.grey['600']
        }  58%,${theme.palette.primary.main} 75%,${theme.palette.primary.main} 100%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        // color: theme.palette.primary.light,

        height: 140,
        width: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        // top: '0',
        // left: '50%',
        // position: 'absolute',
        // zIndex: '19001',
        // top: '52%',
        // transform: 'translate(-50%,-50%)',
        // WebkitTransform: 'translate(-50%,-50%)',
        // MozTransform: 'translate(-50%,-50%)',
        // OTransform: 'translate(-50%,-50%)',
        // MsTransform: 'translate(-50%,-50%)',
    },
    logoBackground: {
        // position: 'absolute',
        //top: '0',
        // zIndex: 19000,
        //position: 'absolute',
        //zIndex: '19000',
        //top: '50%',
        //left: '50%',
        // transform: 'translate(-50%,-50%)',
        // WebkitTransform: 'translate(-50%,-50%)',
        // MozTransform: 'translate(-50%,-50%)',
        // OTransform: 'translate(-50%,-50%)',
        // MsTransform: 'translate(-50%,-50%)',
        height: '140px',
        width: '140px',
        background:
            theme.palette.type === 'dark' ? theme.palette.grey['800'] : theme.palette.common.white,
        borderRadius: '50%',
        // border: `2px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[10],
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
