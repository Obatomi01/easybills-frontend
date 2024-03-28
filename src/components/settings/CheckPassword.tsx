'use client';

import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import { getCookie } from 'cookies-next';

import { useState, useTransition, useEffect } from 'react';

import styles from '@/styles/forgot-password.module.scss';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import DashboardMenu from '../general/DashboardMenu';
import FormEntryContainer from '../general/FormEntryContainer';

import Spinner from '@/../public/icon/spinner.png';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

type FormFeedback = {
  message: string;
  ok: boolean;
  showFeedback: boolean;
};

export default function CheckPassword({}: Props) {
  useClientIsLoggedIn();

  const router = useRouter();
  const [formFeedback, setFormFeedback] = useState<FormFeedback>({
    message: '',
    ok: false,
    showFeedback: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const [isPending, startTransition] = useTransition();

  const token = getCookie('token');

  const userSchema = Yup.object({
    password: Yup.string().required('Password is required'),
  });

  return (
    <section className={styles['change--password__page']}>
      <DashboardMenu />
      <div className={styles['check--password__container']}>
        <h3 className='text-center text-4xl font-semibold mb-6'>
          Change Password
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
          validationSchema={userSchema}
          initialValues={{
            password: '',
          }}
          onSubmit={(values) => {
            try {
              startTransition(async () => {
                const { password } = values;

                const response = await fetch(
                  `${process.env.NEXT_PUBLIC_USER_API_LINK}/check-password-for-reset`,
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
                    message: 'Correct Password',
                    ok: true,
                    showFeedback: true,
                  });

                  // TODO: check if it is to reset the pin by checking if there is a query of 'pin'

                  router.push(`/settings/change-password?token=${data.token}`);
                } else {
                  setFormFeedback({
                    message: 'Incorrect Password',
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
                title='Password'
                placeholderTitle='Enter new password'
                fieldName='password'
                password={showPassword}
                onShowPassword={() => setShowPassword(!showPassword)}
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
