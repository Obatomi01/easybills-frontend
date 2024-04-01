'use client';

import React from 'react';

import { useState } from 'react';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import styles from '@/styles/airtime-and-data.module.scss';

import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

import { useSearchParams } from 'next/navigation';

import TransferReceiver from '../send-money/enter-amount/TransferReceiver';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

export default function ConfirmPinAirtime({}: Props) {
  const router = useRouter();
  useClientIsLoggedIn();

  const [pin, setPin] = useState('');
  const [formFeedback, setFormFeedback] = useState({
    message: 'Invalid Pin',
    showFeedback: false,
  });

  const searchParams = useSearchParams();
  const token = getCookie('token');

  const phoneNumber = searchParams.get('phoneNumber');
  const amount = searchParams.get('amount');

  const validationSchema = Yup.object({
    pin: Yup.string()
      .required('Pin is required')
      .length(4, 'Pin must be exactly 4 characters'),
  });

  const initialValues = {
    pin: '',
  };

  const numberChangeHandler = (event: any) => {
    const numericValue = event.target.value.replace(/\D/g, '');

    return setPin(numericValue);
  };

  return (
    <div className={styles['main--contents']}>
      <div className={styles['page--title']}>
        <h3 className={`text-3xl text-center font-semibold`}>Buy Airtime</h3>
      </div>

      <div>
        <h2 className='text-4xl font-semibold mb-4'>Transfer to</h2>
        <TransferReceiver
          accountName={amount}
          accountNumber={phoneNumber}
          airtime={true}
        />
      </div>

      <Formik
        onSubmit={async (values) => {
          try {
            setFormFeedback({
              showFeedback: false,
              message: '',
            });
            const enteredPin = values.pin;
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_USER_API_LINK}/confirm-pin`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                cache: 'no-store',
                body: JSON.stringify({ pin: enteredPin }),
              }
            );

            const data = await response.json();

            if (data.ok) {
              router.push('/success');
            } else {
              setFormFeedback({
                message: data.message,
                showFeedback: true,
              });
            }
          } catch (err) {
            // router.push('/dashboard');
            console.log(err);
          }
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <h2 className='text-4xl font-semibold mt-20 mb-4'>Amount</h2>

              <span className={styles['amount--container']}>
                <p className='text-3xl'>#{amount}</p>
              </span>
            </div>

            <div>
              <h2 className='text-4xl font-semibold mt-20 mb-4'>Pin</h2>

              <input
                name='pin'
                type='text'
                inputMode='numeric'
                maxLength={4}
                onChange={(event: any) => {
                  setFormFeedback({
                    showFeedback: false,
                    message: '',
                  });
                  numberChangeHandler(event);
                  props.setFieldValue(
                    'pin',
                    event.target.value.replace(/\D/g, '')
                  );
                }}
                value={pin}
              />
            </div>

            <ErrorMessage
              component={'p'}
              name='pin'
              className='text-2xl text-red-500 mt-2'
            />
            {formFeedback.showFeedback && (
              <p className='text-2xl text-red-500 mt-2'>
                {formFeedback.message}
              </p>
            )}

            <button className={`${styles['next--btn']} mt-20`} type='submit'>
              <h3 className={`text-3xl text-center`}>Next</h3>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
