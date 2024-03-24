import React from 'react';

import { useState, useEffect } from 'react';
import { useField } from 'formik';

import useSWR from 'swr';

import styles from '@/styles/send-money.module.scss';

type Props = {
  bankCode: string;
  accountNumber: string;
  onAccountNameHandler: (number: string) => void;
  // name: string;
};

export default function TransferCheck({
  bankCode,
  accountNumber,
  onAccountNameHandler,
}: Props) {
  const fetcher = () =>
    fetch(`${process.env.NEXT_PUBLIC_PAYLONY_ENDPOINT}/account_name`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYLONY_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_code: bankCode,
        account_number: accountNumber,
      }),
    })
      .then((r) => r.json())
      .catch((err) => {
        console.log(err);
      });

  const { data, error, isLoading } = useSWR([bankCode, accountNumber], fetcher);

  if (isLoading) {
    return <p className='text-2xl'>Loading...</p>;
  }

  if (!data?.success) {
    return <p className='text-2xl'>USER NOT FOUND</p>;
  }

  if (data) {
    onAccountNameHandler(data.data);
  }

  return (
    <>
      <p className='text-2xl'>{data ? data.data : ''}</p>
      {/* {meta.touched && meta.error ? (
        <p className='text-2xl text-red-600'>{meta.error}</p>
      ) : null} */}
    </>
  );
}
