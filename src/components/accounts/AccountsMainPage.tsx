'use client';

import React from 'react';

import styles from '@/styles/accounts.module.scss';
import DashboardMenu from '../general/DashboardMenu';
import AccountCard from './AccountCard';
import AccountMenuOptions from './AccountMenuOptions';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

export default function AccountsMainPage({}: Props) {
  useClientIsLoggedIn();

  return (
    <section className={styles['accounts--page__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <h2 className='text-4xl text-center font-semibold mb-8'>My Account</h2>
        <AccountCard />
        <AccountMenuOptions />
      </div>
    </section>
  );
}
