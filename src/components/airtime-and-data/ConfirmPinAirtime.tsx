'use client';

import React from 'react';

import { useState } from 'react';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import styles from '@/styles/airtime-and-data.module.scss';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import TransferReceiver from '../send-money/enter-amount/TransferReceiver';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

export default function ConfirmPinAirtime({}: Props) {
  useClientIsLoggedIn();
  const [pin, setPin] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  const phoneNumber = searchParams.get('phoneNumber');
  const amount = searchParams.get('amount');

  const validationSchema = Yup.object({
    pin: Yup.string().required('Pin is required'),
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
        onSubmit={() => {
          router.push('/success');
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

            <button className={`${styles['next--btn']} mt-20`} type='submit'>
              <h3 className={`text-3xl text-center`}>Next</h3>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
