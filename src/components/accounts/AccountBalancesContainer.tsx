import React from 'react';

import styles from '@/styles/accounts.module.scss';

type Props = {};

type BalanceDetails = {
  title: string;
  description: string;
  amount: string;
};

const balanceDetails: BalanceDetails[] = [
  {
    title: 'Current Balance',
    description:
      'The total amount of funds currently available in your account',
    amount: '60,023.34',
  },
  {
    title: 'Minimum Balance',
    description:
      'The lowest balance required to maintain your account and avoid fees or penalties',
    amount: '500',
  },
  {
    title: 'Overdraft Balance',
    description:
      'The amount of funds you have overdrawn from your account, resulting in a negative balance',
    amount: '100,000',
  },
  {
    title: 'Average Daily Balance',
    description:
      'The average balance maintained in your account over a specific period, often used for calculating interest or fees',
    amount: '23,105.30',
  },
];

export default function AccountBalancesContainer({}: Props) {
  return (
    <div className={styles['balance--details__container']}>
      {balanceDetails.map((el: BalanceDetails, index: number) => (
        <div key={index} className={styles['balance--container']}>
          <div className={styles['description--container']}>
            <h4 className='text-3xl font-semibold'>{el.title}</h4>
            <h5 className='text-2xl'>{el.description}</h5>
          </div>
          <p className='text-3xl font-semibold'>#{el.amount}</p>
        </div>
      ))}
    </div>
  );
}
