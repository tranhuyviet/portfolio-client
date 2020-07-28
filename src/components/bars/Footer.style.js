import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footer: {
        height: 420,
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
    },
    logoText: {
        fontFamily: 'Dr Sugiyama',
        fontWeight: 'bold',
        letterSpacing: '6px',
        padding: '5px 0',

        fontSize: '64px',
        // color: '#F39A1D',
        backgroundImage:
            'linear-gradient(0deg, rgba(243,154,29,1) 0%, rgba(255,212,4,1) 50%, rgba(255,212,4,1) 70%, rgba(243,154,29,1) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',

        height: 140,
        width: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        position: 'absolute',
        zIndex: '19001',
        top: '52%',
        // transform: 'translate(-50%,-50%)',
        // WebkitTransform: 'translate(-50%,-50%)',
        // MozTransform: 'translate(-50%,-50%)',
        // OTransform: 'translate(-50%,-50%)',
        // MsTransform: 'translate(-50%,-50%)',
    },
    logoBackground: {
        position: 'absolute',
        zIndex: 19000,
        top: '52%',
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
        border: `2px solid ${theme.palette.common.white}`,
    },
    copyright: {
        color:
            theme.palette.type === 'dark' ? theme.palette.grey['800'] : theme.palette.common.white,
    },
    socialIconContainer: {
        height: 570,
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
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));
