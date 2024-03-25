'use client';

import React from 'react';

import { useState, useTransition } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

import Link from 'next/link';

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

export default function LoginFormContainer({}: Props) {
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
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className={styles['login--form__details']}>
      <h2 className='text-5xl text-center'>Welcome back!</h2>

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
          password: '',
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

              const res = await fetch(
                `${process.env.NEXT_PUBLIC_USER_API_LINK}/login`,
                {
                  method: 'POST',
                  body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                  }),
                  headers: { 'Content-Type': 'application/json' },
                }
              );
              const data = await res.json();

              if (data.ok) {
                setFormFeedback({
                  message: 'User Found',
                  ok: true,
                  showFeedback: true,
                });

                const userDetails = {
                  token: data.token,
                };

                setCookie('isLoggedIn', 'true');
                setCookie('token', data.token);
                router.push('/dashboard');
              } else {
                setFormFeedback({
                  message: 'Incorrect details!',
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

            <button className={`${styles['signup--btn']} w-full`} type='submit'>
              {isPending ? (
                <Image src={Spinner} alt='icon' />
              ) : (
                <p className='text-3xl  text-center text-white font-semibold'>
                  Login
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

          width: 'max-content',
          margin: 'auto',
        }}
      >
        <p className='text-2xl font-semibold'>Don&apos;t have an account?</p>
        <Link href={'/signup'}>
          <p className='text-2xl text-yellow-500 font-semibold'>Signup</p>
        </Link>
      </div>
      <Link href={'/request-password-change'}>
        <p className='text-2xl text-center font-semibold mt-6'>
          Forgot Password?
        </p>
      </Link>
    </div>
  );
}
