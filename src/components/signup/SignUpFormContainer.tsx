'use client';

import React from 'react';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import { navigateUser } from '@/app/action';

import styles from '@/styles/login/login.module.scss';
import FormEntryContainer from '../general/FormEntryContainer';

import Spinner from '@/../public/icon/spinner.png';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

type Props = {};

type FormFeedback = {
  message: string;
  ok: boolean;
  showFeedback: boolean;
};

export default function SignUpFormContainer({}: Props) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPending, startTransition] = useTransition();

  const [formFeedback, setFormFeedback] = useState<FormFeedback>({
    message: '',
    ok: false,
    showFeedback: false,
  });

  const userSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        'Password must contain at least one symbol'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <div className={styles['signup--form__details']}>
      <h2 className='text-5xl'>Create an account</h2>

      {formFeedback.showFeedback && (
        <h3
          className={`text-3xl text-left mt-5 font-bold ${
            formFeedback.ok ? styles['success--form'] : styles['error--form']
          }`}
        >
          {formFeedback.message}
        </h3>
      )}

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
          email: '',
        }}
        validationSchema={userSchema}
        onSubmit={async (values, action) => {
          try {
            startTransition(async () => {
              setFormFeedback({
                message: '',
                ok: false,
                showFeedback: false,
              });

              const res = await fetch(
                `${process.env.NEXT_PUBLIC_USER_API_LINK}/new-user`,
                {
                  method: 'POST',
                  body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                  }),
                  headers: { 'Content-Type': 'application/json' },
                }
              );

              const data = await res.json();

              if (data.ok) {
                setFormFeedback({
                  message: 'Registration successful',
                  ok: true,
                  showFeedback: true,
                });
                await navigateUser(data);
                router.push('/dashboard');
              } else {
                setFormFeedback({
                  message: 'User with the email exists.',
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
              title='First Name'
              placeholderTitle='Enter your first name'
              fieldName='firstName'
            />
            <FormEntryContainer
              title='Last Name'
              placeholderTitle='Enter your last name'
              fieldName='lastName'
            />
            <FormEntryContainer
              title='Email'
              placeholderTitle='Enter your email'
              fieldName='email'
            />

            <FormEntryContainer
              title='Password'
              placeholderTitle='Enter your password'
              fieldName='password'
              passwordField={true}
              password={showPassword}
              onShowPassword={() => setShowPassword(!showPassword)}
            />
            <FormEntryContainer
              title='Confirm Password'
              placeholderTitle='Confirm password'
              fieldName='confirmPassword'
              passwordField={true}
              password={showConfirmPassword}
              onShowPassword={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            />
            <button className={`${styles['signup--btn']} w-full`} type='submit'>
              {isPending ? (
                <Image src={Spinner} alt='icon' />
              ) : (
                <p className='text-3xl  text-center text-white'>
                  Create account
                </p>
              )}
            </button>
          </Form>
        )}
      </Formik>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0.8rem',

          width: '60%',
          margin: 'auto',
        }}
      >
        <p className='text-2xl font-bold'>Already have an account?</p>
        <Link href={'/login'}>
          <p className='text-2xl text-yellow-500 font-bold'>login</p>
        </Link>
      </div>
    </div>
  );
}
