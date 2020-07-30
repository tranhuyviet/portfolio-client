import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import SectionTitle from '../shared/SectionTitle';
import { useTheme } from '@material-ui/core/styles';
import ContactForm from '../forms/ContactForm';

const ContactPage = () => {
    const theme = useTheme();
    return (
        <Paper
            square
            elevation={0}
            style={{ paddingTop: theme.spacing(5), minHeight: 'calc(100vh - 40px - 65px - 422px)' }}
        >
            <SectionTitle title="Contact" />
            <Grid container justify="center" style={{ padding: '24px' }}>
                <ContactForm />
            </Grid>
        </Paper>
    );
};

export default ContactPage;
