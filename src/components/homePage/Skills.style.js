import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    skillsContainer: {
        height: 'auto',
        padding: '24px',
    },
    sectionTitle: {
        ...theme.share.sectionTitle,
    },
}));
