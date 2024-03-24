import React from 'react';
import Image from 'next/image';

import styles from '@/styles/dashboard.module.scss';

import HistoryIcon from '@/../public/icon/account-history.png';
import ChevronRight from '@/../public/icon/chevron-right.png';

type Props = { userTransactionHistory: History[] };

type History = {
  date: string;
  name: string;
  type: string;
  amount: string;
  isDebit: boolean;
};

export default function TransactionMobile({ userTransactionHistory }: Props) {
  return (
    <div
      className={`flex md:hidden`}
      style={{
        flexDirection: 'column',
        gap: '1.2rem',
        width: '95%',
        margin: 'auto',
      }}
    >
      <h4 className='text-4xl font-semibold text-center'>
        Latest Transactions
      </h4>
      {userTransactionHistory.map((el: History, index: number) => (
        <div key={index} className={styles['transaction--mobile__container']}>
          <div className={styles['title--container']}>
            <Image src={HistoryIcon} alt='icon' />
            <div className={styles['description--container']}>
              <h4 className='text-3xl font-semibold'>{el.name}</h4>
              <p className='text-2xl'>{el.type}</p>
            </div>
          </div>

          <div className={styles['amount--container']}>
            <div
              className={`${styles['description--container']}`}
              style={{
                alignItems: 'end',
              }}
            >
              <h4
                className={`text-3xl font-semibold ${
                  el.isDebit ? styles['debit'] : styles['credit']
                }`}
              >
                {el.isDebit ? '-' : '+'} #{el.amount}
              </h4>
              <p className='text-2xl'>{el.date}</p>
            </div>
            <Image src={ChevronRight} alt='icon' />
          </div>
        </div>
      ))}
    </div>
  );
}
