import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navContainer: {
        height: '68px',
        maxHeight: '68px',
    },

    menu: {
        boxShadow: theme.shadows[1],
    },
    menuItem: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        fontWeight: 'bold',
        position: 'relative',
        color:
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
        textDecoration: 'none',
        transition: 'all 0.3s',
        '&:visited, &:link': {},
        '&:hover': {
            color: theme.palette.primary.main,
            '&:before': {
                content: '""',
                position: 'absolute',
                backgroundColor: theme.palette.primary.main,
                left: '20%',
                right: '20%',
                height: '2px',
                bottom: 0,
            },
        },
    },
    active: {
        color: theme.palette.primary.main,

        '&:before': {
            content: '""',
            position: 'absolute',
            backgroundColor: theme.palette.primary.main,
            left: '20%',
            right: '20%',
            height: '2px',
            bottom: 0,
        },
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
    },
    info: {
        ...theme.share.info,
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    tabItem: {
        textTransform: 'capitalize',
        fontSize: '18px',
        minWidth: 20,
        letterSpacing: 2,
        fontWeight: 'bold',
    },
    tabSelected: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        '&:before': {
            content: '""',
            position: 'absolute',
            backgroundColor: theme.palette.primary.main,
            left: '30%',
            right: '30%',
            height: '2px',
            bottom: 5,
        },
    },
    indicator: {
        height: 0,
    },
}));
