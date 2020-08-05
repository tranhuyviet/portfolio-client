import React, { useState } from 'react';
import {
    Paper,
    TextField,
    Button,
    Grid,
    Snackbar,
    CircularProgress,
    // Typography,
    // Backdrop,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useFormik } from 'formik';
import { useTheme } from '@material-ui/core/styles';
import { contactSchema } from '../../schemas';

import ReCAPTCHA from 'react-google-recaptcha';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import errorParse from '../../utils/errorParse';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactForm = () => {
    const theme = useTheme();

    const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        message: '',
        recaptcha: '',
    };

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        setErrors,
        // isValid,
        setValues,
        // touched,
        setFieldValue,
        // resetForm,
    } = useFormik({
        initialValues,
        onSubmit,
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: contactSchema,
    });

    const [alertErrorsOpen, setAlertErrorsOpen] = useState(false);

    const [createContact, { loading }] = useMutation(CREATE_CONTACT, {
        variables: values,
        onError(error) {
            // console.log('ERROR CLIENT', error.graphQLErrors[0]);
            // console.log('ERRRRR', error);
            setErrors(errorParse(error));
        },
        update(proxy, result) {
            // console.log('RESULT', result);
            if (result.data.createContact === 'create contact success') {
                setAlertSuccessOpen(true);
                setValues(initialValues);
                // resetForm();
                // history.push('/contact');
            }
        },
    });

    function onSubmit() {
        // console.log('submit...', values, errors);
        if (Object.keys(errors).length === 0) {
            createContact();
        }
    }

    return (
        <Paper
            style={{ padding: theme.spacing(2), maxWidth: 700, textAlign: 'center' }}
            elevation={3}
        >
            {loading && (
                <CircularProgress color="primary" style={{ marginBottom: theme.spacing(2) }} />
            )}

            {/* {errors.global && <h1>{errors.global}</h1>} */}

            <form noValidate onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    name="name"
                    error={errors.name ? true : false}
                    label="Name"
                    placeholder="Viet Tran"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.name}
                    style={{ marginBottom: theme.spacing(2) }}
                />
                <TextField
                    type="email"
                    name="email"
                    error={errors.email ? true : false}
                    label="Email"
                    placeholder="example@example.com"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email}
                    style={{ marginBottom: theme.spacing(2) }}
                />
                <TextField
                    type="text"
                    name="message"
                    error={errors.message ? true : false}
                    label="Message"
                    placeholder="This is the message"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={6}
                    fullWidth
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.message}
                    style={{ marginBottom: theme.spacing(2) }}
                />
                {/* <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                > */}
                <Grid container justify="space-between" alignItems="center">
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        container
                        direction="column"
                        style={{ marginBottom: theme.spacing(2) }}
                    >
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            onChange={(value) => setFieldValue('recaptcha', value)}
                        />
                        {errors.recaptcha && (
                            <p
                                style={{
                                    color: '#f44336',
                                    fontSize: '12px',
                                    marginLeft: '14px',
                                    textAlign: 'left',
                                }}
                            >
                                {errors.recaptcha}
                            </p>
                        )}
                    </Grid>

                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        style={{
                            fontWeight: 'bold',
                            color: theme.palette.common.white,
                            letterSpacing: 1,
                        }}
                        fullWidth
                        autoFocus
                    >
                        Send
                    </Button>
                </Grid>

                <Snackbar
                    open={alertSuccessOpen}
                    autoHideDuration={6000}
                    onClose={() => setAlertSuccessOpen(false)}
                >
                    <Alert onClose={() => setAlertSuccessOpen(false)} severity="success">
                        Send message successfully. Thank you.
                    </Alert>
                </Snackbar>

                {errors.global && (
                    <Snackbar
                        open={!!errors.global || alertErrorsOpen}
                        autoHideDuration={6000}
                        onClose={() => {
                            errors.global = null;
                            setAlertErrorsOpen(false);
                        }}
                    >
                        <Alert
                            // onClose={() => {
                            //     errors.global = null;
                            //     setAlertErrorsOpen(false);
                            // }}
                            severity="error"
                        >
                            {errors.global}
                        </Alert>
                    </Snackbar>
                )}
            </form>
        </Paper>
    );
};

const CREATE_CONTACT = gql`
    mutation createContact(
        $name: String!
        $email: String!
        $message: String!
        $recaptcha: String!
    ) {
        createContact(name: $name, email: $email, message: $message, recaptcha: $recaptcha)
    }
`;

export default ContactForm;
