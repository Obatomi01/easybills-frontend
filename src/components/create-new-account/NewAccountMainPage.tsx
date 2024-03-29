'use client';

import React from 'react';

import styles from '@/styles/accounts.module.scss';
import DashboardMenu from '../general/DashboardMenu';
import { useClientIsLoggedIn } from '../clientSideAuth';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';
import LoginPage from '../login/LoginPage';

type Props = {};

type NewAccountOptions = {
  title: string;
  description: string;
};

const newAccountOptions: NewAccountOptions[] = [
  {
    title: 'Current Account',
    description: 'Allows you to deposit and withdraw funds regularly.',
  },
  {
    title: 'Savings Account',
    description:
      'An interest-bearing account designed for accumulating savings over time.',
  },
  {
    title: 'Individual Retirement Account (IRA)',
    description: 'A tax-advantaged account designed for retirement savings.',
  },
  {
    title: 'Investment Account',
    description:
      'An account that allows you to invest in various financial instruments.',
  },
  {
    title: 'Business Account',
    description: 'An account designed for commercial purposes.',
  },
];

export default function NewAccountMainPage({}: Props) {
  const router = useRouter();
  useClientIsLoggedIn();

  return (
    <section className={styles['new--account__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <h3 className='text-4xl font-semibold text-center mb-8'>
          Create New Account
        </h3>
        <div className={styles['account--options']}>
          {newAccountOptions.map((el: NewAccountOptions, index: number) => (
            <div key={index} className={styles['account--option']}>
              <h4 className='text-3xl font-semibold'>{el.title}</h4>
              <h5 className='text-2xl'>{el.description}</h5>
            </div>
          ))}{' '}
        </div>
      </div>
    </section>
  );
}
