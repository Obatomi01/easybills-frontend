import React from 'react';

import { useState } from 'react';

import styles from '@/styles/contact-us.module.scss';

import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import FormEntryContainer from '../general/FormEntryContainer';

type Props = {};

export default function ContactForm({}: Props) {
  const [textMessage, setTextMessage] = useState('');

  const userSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    message: Yup.string().required('Message is required'),
  });

  const onChangeTextArea = (event: any) => {
    setTextMessage(event.target.value);
  };

  return (
    <section className={styles['contact--form']}>
      <h1 className='text-5xl font-semibold'>
        Start a Conversation,
        <span className='text-amber-400'> Get in Touch</span>
      </h1>
      <p className='text-2xl mt-8 mb-12'>
        Have inquiries or comments? Contact us, and we will respond accordingly.
      </p>
      <Formik
        initialValues={{
          message: '',
          email: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={userSchema}
        onSubmit={() => {}}
      >
        {(props) => (
          <Form className={styles['user--form__container']}>
            <FormEntryContainer
              title='First name'
              placeholderTitle='Enter your first name'
              fieldName='firstName'
              password={false}
              passwordField={false}
            />
            <FormEntryContainer
              title='Last name'
              placeholderTitle='Enter your last name'
              fieldName='lastName'
              password={false}
              passwordField={false}
            />
            <FormEntryContainer
              title='Email'
              placeholderTitle='Enter your Email'
              fieldName='email'
              password={false}
              passwordField={false}
            />

            <div className={styles['form--content']}>
              <p className='text-2xl font-semibold mb-2'>Message</p>
              <textarea
                placeholder='Leave your message'
                name='message'
                onChange={(e: any) => {
                  onChangeTextArea(e);
                  props.setFieldValue('message', e.target.value);
                }}
                value={textMessage}
              />
              <ErrorMessage
                name='message'
                component={'p'}
                className={styles['error--message']}
              />
            </div>

            <button type='submit'>
              <p className='text-2xl font-semibold text-white'>Send</p>
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
