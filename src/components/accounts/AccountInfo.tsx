'use client';

import React from 'react';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';

import styles from '@/styles/accounts.module.scss';
import DashboardMenu from '../general/DashboardMenu';
import AccountCard from './AccountCard';
import AccountBalancesContainer from './AccountBalancesContainer';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

export default function AccountInfo({}: Props) {
  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    // router.push('/login');
    return (
      <div>
        <p>Unauthenticated User</p>
      </div>
    );
  }

  return (
    <section className={styles['account--info__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <h2 className='text-4xl text-center font-semibold mb-8'>
          Account Information
        </h2>
        <AccountCard />
        <AccountBalancesContainer />
      </div>
    </section>
  );
}
