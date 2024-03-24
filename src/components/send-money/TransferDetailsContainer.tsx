'use client';

import React from 'react';

import { useState } from 'react';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import styles from '@/styles/enter-amount.module.scss';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import TransferReceiver from './enter-amount/TransferReceiver';

import TransferSender from './enter-amount/TransferSender';

type Props = {
  linkTo: string;
  confirmPin: boolean;
  amount?: string;
};

export default function TransferDetailsContainer({
  linkTo,
  confirmPin,
  amount,
}: Props) {
  const [pin, setPin] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  const bank = searchParams.get('bank');
  const accountNumber = searchParams.get('accountNumber');
  const accountName = searchParams.get('accountName');

  const validationSchema = !confirmPin
    ? Yup.object({
        amount: Yup.string().required('Amount is required'),
      })
    : Yup.object({
        pin: Yup.string().required('Pin is required'),
      });

  const initialValues = confirmPin
    ? {
        pin: '',
      }
    : {
        amount: '',
      };

  const numberChangeHandler = (event: any) => {
    const numericValue = event.target.value.replace(/\D/g, '');

    return setPin(numericValue);
  };

  return (
    <div className={styles['main--contents']}>
      <div className={styles['page--title']}>
        <h3 className={`text-3xl text-center`}>Send to Bank</h3>
      </div>

      <div>
        <h2 className='text-4xl font-semibold mb-4'>Transfer to</h2>
        <TransferReceiver
          bank={bank}
          accountName={accountName}
          accountNumber={accountNumber}
        />
      </div>

      <div>
        <h2 className='text-4xl font-semibold mt-20 mb-4'>Transfer from</h2>
        <TransferSender />
      </div>

      <Formik
        onSubmit={(values) => {
          router.push(
            confirmPin ? `${linkTo}` : `${linkTo}&amount=${values.amount}`
          );
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <h2 className='text-4xl font-semibold mt-20 mb-4'>
                {confirmPin ? 'Amount' : 'Enter Amount'}
              </h2>
              {confirmPin ? (
                <span className={styles['amount--container']}>
                  <p className='text-3xl'>#{amount}</p>
                </span>
              ) : (
                <input
                  name='amount'
                  type='number'
                  onChange={props.handleChange}
                  pattern='[0-9]*'
                  inputMode='numeric'
                />
              )}
            </div>
            {!confirmPin && (
              <ErrorMessage
                component={'p'}
                name='amount'
                className='text-2xl text-red-500 mt-2'
              />
            )}

            <div>
              <h2 className='text-4xl font-semibold mt-20 mb-4'>
                {confirmPin ? 'Pin' : 'Transaction Remark (Optional)'}
              </h2>
              {confirmPin ? (
                <input
                  name='pin'
                  type='text'
                  inputMode='numeric'
                  pattern='[0-9]*'
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
              ) : (
                <input name='remark' type='text' />
              )}
            </div>
            {confirmPin && (
              <ErrorMessage
                component={'p'}
                name='pin'
                className='text-2xl text-red-500 mt-2'
              />
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
