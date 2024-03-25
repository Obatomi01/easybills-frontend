'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import useSWR from 'swr';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import Link from 'next/link';

import styles from '@/styles/send-money.module.scss';
import DashboardMenu from '../general/DashboardMenu';

import Close from '@/../public/icon/menu-close.png';
import TransferCheck from './TransferCheck';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {
  bankDetails: any;
  bankNames: any;
};

export default function SendMoneyMainPage({ bankDetails, bankNames }: Props) {
  const router = useRouter();
  useClientIsLoggedIn();

  const [banks, setBanks] = useState(bankNames);
  const [chosenBank, setChosenBank] = useState('Select Option');
  const [bankCode, setBankCode] = useState('');

  const [accountName, setAccountName] = useState('');
  const [accountNameError, setAccountNameError] = useState(false);

  const [showBankOptions, setShowBankOptions] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');

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
        // console.log(err);
      });

  const { data, error, isLoading } = useSWR([bankCode, accountNumber], fetcher);

  useEffect(() => {
    setAccountName(data?.data);
  }, [data]);

  const validationSchema = Yup.object({
    accountName: Yup.string(),
    accountNumber: Yup.string().required('Account number is required'),
    bankCode: Yup.string(),
  });

  const changeBankListHandler = (event: any) => {
    const value = event.target.value;

    const newBanks = bankNames.filter((el: string) =>
      el.toLowerCase().includes(value.toLowerCase())
    );
    setBanks(newBanks);
  };

  const numberChangeHandler = (event: any) => {
    const numericValue = event.target.value.replace(/\D/g, '');

    return setAccountNumber(numericValue);
  };

  return (
    <section className={styles['send-money__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <div className={styles['page--title']}>
          <h3 className={`text-3xl text-center`}>Send to Bank</h3>
        </div>

        <Formik
          onSubmit={(values) => {
            const { accountNumber } = values;

            if (!accountName && chosenBank === 'Select Option') {
              return setAccountNameError(true);
            }

            if (!accountName) {
              return;
            }
            router.push(
              `/send-money/enter-amount?accountNumber=${accountNumber}&accountName=${accountName}&bank=${chosenBank}`
            );
          }}
          initialValues={{
            accountName: '',
            accountNumber: '',
            bankCode: '',
          }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div
                className={styles['chosen--bank']}
                onClick={() => {
                  setAccountNameError(false);
                  setShowBankOptions(true);
                  setBanks(bankNames);
                }}
              >
                <p className='text-2xl'>{chosenBank}</p>
              </div>
              {accountNameError ? (
                <p className='text-2xl mt-4 text-red-500'>
                  Bank name is required
                </p>
              ) : (
                ''
              )}

              {showBankOptions && (
                <div className={styles['bank--options__container']}>
                  <div className={styles['options--header__container']}>
                    <div className={styles['options--header']}>
                      <h3 className='text-2xl font-bold'>Banks</h3>
                      <Image
                        src={Close}
                        alt='icon'
                        onClick={() => {
                          setShowBankOptions(false);
                        }}
                      />
                    </div>
                    <input
                      placeholder='Search'
                      type='text'
                      onChange={changeBankListHandler}
                    />
                  </div>

                  <div className={styles['bank--options']}>
                    {banks.map((el: string, id: number) => (
                      <span
                        className={styles['bank--option']}
                        key={id}
                        onClick={() => {
                          setChosenBank(el);
                          setShowBankOptions(false);

                          const bankDetail = bankDetails.find(
                            (bank: any) => bank.name === el
                          );
                          const bankCode = bankDetail?.code;
                          setBankCode(bankCode);
                        }}
                      >
                        <p className='text-2xl'>{el}</p>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <span className={styles['account--input']}>
                <input
                  placeholder='Account Number'
                  type='text'
                  maxLength={10}
                  pattern='[0-9]*'
                  inputMode='numeric'
                  value={accountNumber}
                  onChange={(event: any) => {
                    numberChangeHandler(event);
                    props.setFieldValue(
                      'accountNumber',
                      event.target.value.replace(/\D/g, '')
                    );
                  }}
                  name='accountNumber'
                />
              </span>
              <ErrorMessage
                name='accountNumber'
                className='text-red-600 text-2xl mb-12'
                component={'p'}
              />

              <div className={styles['account--output']}>
                {bankCode && accountNumber.length === 10 ? (
                  isLoading ? (
                    <p className='text-2xl'>loading...</p>
                  ) : !data?.success ? (
                    <p className='text-2xl text-red-500'>NO USER FOUND</p>
                  ) : (
                    <p className='text-2xl'>{data ? data.data : ''}</p>
                  )
                ) : (
                  ''
                )}
              </div>

              <button className={styles['next--btn']} type='submit'>
                <h3 className={`text-3xl text-center`}>Next</h3>
              </button>
            </form>
          )}
        </Formik>

        <Link
          href={{
            pathname: '/send-money/enter-amount',
            query: { accountNumber, accountName, bank: chosenBank },
          }}
        ></Link>
      </div>
    </section>
  );
}
