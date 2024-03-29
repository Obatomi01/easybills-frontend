'use client';

import React from 'react';
import DashboardMenu from '../general/DashboardMenu';
import TransactionHistory from '../dashboard/TransactionHistory';

import styles from '@/styles/transaction-history.module.scss';
import { useClientIsLoggedIn } from '../clientSideAuth';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';

import LoginPage from '../login/LoginPage';

type Props = {};

export default function MainTransactionHistoryPage({}: Props) {
  useClientIsLoggedIn();

  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <section className={styles['page--container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <TransactionHistory mainTransactionPage={true} />
      </div>
    </section>
  );
}
