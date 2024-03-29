'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { useTransition } from 'react';

import styles from '@/styles/forgot-password.module.scss';
import SignUpHeader from '../general/SignUpHeader';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormEntryContainer from '../general/FormEntryContainer';

import Spinner from '@/../public/icon/spinner.png';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';
import { useClientIsLoggedIn } from '../clientSideAuth';
import LoginPage from '../login/LoginPage';

type Props = {};

type FormFeedback = {
  message: string;
  ok: boolean;
  showFeedback: boolean;
};

export default function RequestPasswordChangeMainPage({}: Props) {
  const [formFeedback, setFormFeedback] = useState<FormFeedback>({
    message: '',
    ok: false,
    showFeedback: false,
  });
  const [isPending, startTransition] = useTransition();

  useClientIsLoggedIn();

  const userSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
  });

  return (
    <section
      style={{
        maxHeight: '100vh',
      }}
    >
      <SignUpHeader />
      <div className={styles['forgot-password__container']}>
        <h3 className='text-4xl font-semibold text-center'>Reset Password</h3>

        {formFeedback.showFeedback && (
          <h3
            className={`text-3xl text-center mt-5 font-bold ${
              formFeedback.ok ? styles['success--form'] : styles['error--form']
            }`}
          >
            {formFeedback.message}
          </h3>
        )}

        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={userSchema}
          onSubmit={(values) => {
            try {
              startTransition(async () => {
                setFormFeedback({
                  message: '',
                  ok: false,
                  showFeedback: false,
                });
                const { email } = values;

                const response = await fetch(
                  `${process.env.NEXT_PUBLIC_USER_API_LINK}/request-reset-password`,
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    cache: 'no-store',
                    body: JSON.stringify({
                      email,
                    }),
                  }
                );

                const data = await response.json();

                if (data.ok) {
                  setFormFeedback({
                    message: 'Mail sent successfully',
                    ok: true,
                    showFeedback: true,
                  });
                } else {
                  setFormFeedback({
                    message: 'Message not sent',
                    ok: false,
                    showFeedback: true,
                  });
                }
              });
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {() => (
            <Form>
              <FormEntryContainer
                title='Email'
                placeholderTitle='Enter your Email'
                fieldName='email'
                password={false}
                passwordField={false}
              />
              <button
                className={`${styles['signup--btn']} w-full`}
                type='submit'
              >
                {isPending ? (
                  <Image src={Spinner} alt='icon' />
                ) : (
                  <p className='text-3xl  text-center text-white font-semibold'>
                    Reset
                  </p>
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
