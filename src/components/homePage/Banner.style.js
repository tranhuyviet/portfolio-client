import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    bannerContainer: {
        height: 'calc(100vh - 40px - 68px)',
        // height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    contentContainer: {
        position: 'relative',
        zIndex: 100,
    },

    particles: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
}));
