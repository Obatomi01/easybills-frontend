import React from 'react';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '@/styles/airtime-and-data.module.scss';

type Props = {};

export default function AirtimeForm({}: Props) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required('Phone Number is required'),
    amount: Yup.string().required('Amount is required'),
  });

  return (
    <div className={styles['airtime--form__container']}>
      <Formik
        onSubmit={(values) => {
          router.push(
            `/airtime-and-data/confirm-pin?phoneNumber=${values.phoneNumber}&amount=${values.amount}`
          );
        }}
        initialValues={{
          phoneNumber: '',
          amount: '',
        }}
        validationSchema={validationSchema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <h3 className='text-3xl mb-4'>Phone Number</h3>
              <input
                type='text'
                maxLength={11}
                inputMode='numeric'
                value={phoneNumber}
                onChange={(event: any) => {
                  setPhoneNumber(event.target.value.replace(/\D/g, ''));
                  props.setFieldValue(
                    'phoneNumber',
                    event.target.value.replace(/\D/g, '')
                  );
                }}
                name='phoneNumber'
              />
              <ErrorMessage
                component={'p'}
                name='phoneNumber'
                className='text-2xl mt-4 text-red-500'
              />
            </div>

            <div>
              <h3 className='text-3xl mb-4 mt-12'>Amount</h3>
              <input
                type='text'
                inputMode='numeric'
                value={amount}
                onChange={(event: any) => {
                  setAmount(event.target.value.replace(/\D/g, ''));
                  props.setFieldValue(
                    'amount',
                    event.target.value.replace(/\D/g, '')
                  );
                }}
                name='amount'
              />
              <ErrorMessage
                component={'p'}
                name='amount'
                className='text-2xl mt-4 text-red-500'
              />
            </div>

            <button className={`${styles['next--btn']} mt-16`} type='submit'>
              <h3 className={`text-3xl text-center font-semibold`}>Next</h3>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
