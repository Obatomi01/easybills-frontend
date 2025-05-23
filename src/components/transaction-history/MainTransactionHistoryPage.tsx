'use client';

import React from 'react';
import DashboardMenu from '../general/DashboardMenu';
import TransactionHistory from '../dashboard/TransactionHistory';

import styles from '@/styles/transaction-history.module.scss';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

export default function MainTransactionHistoryPage({}: Props) {
  useClientIsLoggedIn();

  return (
    <section className={styles['page--container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <TransactionHistory mainTransactionPage={true} />
      </div>
    </section>
  );
}
