'use client';

import React from 'react';
import Image from 'next/image';

import { useSearchParams, useRouter } from 'next/navigation';

import { useState, useTransition, useEffect } from 'react';

import useSWR from 'swr';

import styles from '@/styles/forgot-password.module.scss';
import SignUpHeader from '../general/SignUpHeader';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormEntryContainer from '../general/FormEntryContainer';

import Spinner from '@/../public/icon/spinner.png';
import DashboardMenu from '../general/DashboardMenu';
import { useClientIsLoggedIn } from '../clientSideAuth';

import { getCookie } from 'cookies-next';

type Props = {
  changePassword?: boolean;
  changePin?: boolean;
};

type FormFeedback = {
  message: string;
  ok: boolean;
  showFeedback: boolean;
};

export default function ResetForgottenPassword({ changePassword }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const pin = searchParams.get('pin');

  if (!token) {
    router.replace('/settings');
  }

  const fetcher = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_USER_API_LINK}/validate-token/${token}`
    );

    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useSWR([router], fetcher);

  if (data) {
    if (!data.ok) {
      router.replace('/settings');
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPending, startTransition] = useTransition();

  const [formFeedback, setFormFeedback] = useState<FormFeedback>({
    message: '',
    ok: false,
    showFeedback: false,
  });

  useClientIsLoggedIn();

  const passwordSchema = Yup.object({
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

  // TODO: add another schema for when it is a request to reset the user's pin
  const pinSchema = Yup.object({
    pin: Yup.string()
      .required('Pin is required')
      .length(4, 'Password must be exactly 4 characters'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('pin'), undefined], 'Pins must match')
      .required('Confirm Pin is required'),
  });

  const numberChangeHandler = (event: any) => {
    const numericValue = event.target.value.replace(/\D/g, '');

    // return setPassword(numericValue);
  };

  return (
    <section className={changePassword ? styles['change--password__page'] : ''}>
      {!changePassword ? <SignUpHeader /> : <DashboardMenu />}
      <div
        className={
          changePassword
            ? styles['check--password__container']
            : styles['forgot-password__container']
        }
      >
        <h3 className='text-4xl font-semibold text-center'>
          Reset {!pin ? 'Password' : 'Pin'}
        </h3>

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
            confirmPassword: '',
          }}
          validationSchema={pin ? pinSchema : passwordSchema}
          onSubmit={(values) => {
            try {
              startTransition(async () => {
                const { password } = values;
                setFormFeedback({
                  message: '',
                  ok: false,
                  showFeedback: false,
                });

                const response = await fetch(
                  `${process.env.NEXT_PUBLIC_USER_API_LINK}/reset-forgotten-password`,
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                    },
                    cache: 'no-store',
                    body: JSON.stringify({
                      password,
                    }),
                  }
                );

                const data = await response.json();
                if (data.ok) {
                  setFormFeedback({
                    message: 'Reset successful',
                    ok: true,
                    showFeedback: true,
                  });

                  setTimeout(() => {
                    !changePassword
                      ? router.replace('/login')
                      : router.replace('/dashboard');
                  }, 2000);
                } else {
                  setFormFeedback({
                    message: 'Unauthenticated User',
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
              {pin ? (
                <FormEntryContainer
                  title='New Password'
                  placeholderTitle='Enter new password'
                  fieldName='password'
                  password={showPassword}
                  onShowPassword={() => setShowPassword(!showPassword)}
                  passwordField={true}
                />
              ) : (
                <FormEntryContainer
                  title='New Pin'
                  placeholderTitle='Enter new pin'
                  fieldName='pin'
                  password={showPassword}
                  onShowPassword={() => setShowPassword(!showPassword)}
                  passwordField={true}
                />
              )}
              <FormEntryContainer
                title='Confirm New Password'
                placeholderTitle='Confirm new password'
                fieldName='confirmPassword'
                password={showConfirmPassword}
                onShowPassword={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                passwordField={true}
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
