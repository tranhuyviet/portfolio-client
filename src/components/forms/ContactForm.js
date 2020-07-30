import React, { useState } from 'react';
import { Paper, TextField, Button, Grid, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useFormik } from 'formik';
import { useTheme } from '@material-ui/core/styles';
import { contactSchema } from '../../schemas';
import ReCAPTCHA from 'react-google-recaptcha';

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
        // setErrors,
        // isValid,
        // setValues,
        // touched,
        setFieldValue,
    } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: contactSchema,
    });

    function onSubmit(values) {
        console.log('submit...', values, errors);
        if (Object.keys(errors).length === 0) {
            setAlertSuccessOpen(true);
            values = initialValues;
        }
    }

    return (
        <Paper style={{ padding: theme.spacing(2), maxWidth: 700 }} elevation={3}>
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
                            <p style={{ color: '#f44336', fontSize: '12px', marginLeft: '14px' }}>
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
                    >
                        Send
                    </Button>
                </Grid>
                {/* </div> */}
                <Snackbar
                    open={alertSuccessOpen}
                    autoHideDuration={6000}
                    onClose={() => setAlertSuccessOpen(false)}
                >
                    <Alert onClose={() => setAlertSuccessOpen(false)} severity="success">
                        Thanks for your message. I will reply to you as soon as possible.
                    </Alert>
                </Snackbar>
            </form>
        </Paper>
    );
};

export default ContactForm;
