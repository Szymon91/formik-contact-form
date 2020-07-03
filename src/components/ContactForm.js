import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ErrorMessageForm from './ErrorMessageForm';

import styles from './ContactForm.module.css';

const useStyles = makeStyles((theme) => ({
    buttonStyles: {
        marginTop: 25,
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        minWidth: 175,
        width: '100%',
        borderRadius: 20,
        padding: 10,
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    }
}));

const ContactForm = () => {

    const initialValues = {
        name: '',
        email: '',
        message: ''
    }

    const onSubmit = (values, submitProps) => {
        console.log('Form data', values);
        console.log('submitProps', submitProps);
        axios.post('/api/form', values)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        message: Yup.string().required('Required')
    })

    const classes = useStyles();

    return ( 
        <>
            <h2 className={styles.contactHeader}>Contact with me</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => {
                    return (
                        <Form>
                        <div className={styles.formControl}>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                            <ErrorMessage name='name' component={ErrorMessageForm} />
                        </div>
        
                        <div className={styles.formControl}>
                            <label htmlFor='email'>Email</label>
                            <Field type='email' id='email' name='email' />
                            <ErrorMessage name='email' component={ErrorMessageForm} />
                        </div>
        
                        <div className={styles.formControl}>
                            <label htmlFor='message'>Message</label>
                            <Field as='textarea' id='message' name='message' />
                            <ErrorMessage name='message' component={ErrorMessageForm} />
                        </div>
                        <Button
                            className={(classes.buttonStyles)}
                            variant="contained" 
                            color="primary"
                            type="submit"
                            disabled={!formik.isValid || formik.isSubmitting}
                        >
                            Submit
                        </Button>
                    </Form>
                    )
                }}
            </Formik>
        </>
     );
}
 
export default ContactForm;