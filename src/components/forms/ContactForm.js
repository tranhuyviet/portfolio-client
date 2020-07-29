import React from 'react';
import { Paper, TextField, Button, CircularProgress } from '@material-ui/core';
import { useFormik } from 'formik';
import { useTheme } from '@material-ui/core/styles';
import { contactSchema } from '../../schemas';

const ContactForm = () => {
    const theme = useTheme();

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        setErrors,
        //isValid,
        setValues,
        touched,
    } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: contactSchema,
    });

    function onSubmit(values) {
        console.log('submit...', values);
    }

    return (
        <Paper style={{ padding: theme.spacing(3), maxWidth: 700 }} elevation={3}>
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
                    style={{ marginBottom: theme.spacing(3) }}
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
                    style={{ marginBottom: theme.spacing(3) }}
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
                    style={{ marginBottom: theme.spacing(3) }}
                />

                <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    style={{ fontWeight: 'bold' }}
                >
                    Send
                </Button>
            </form>
        </Paper>
    );
};

export default ContactForm;
