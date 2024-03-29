'use client';

import React from 'react';
import DashboardMenu from '../general/DashboardMenu';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';

import styles from '@/styles/airtime-and-data.module.scss';
import AirtimeOptions from './AirtimeOptions';
import AirtimeForm from './AirtimeForm';

type Props = {};

export default function AirtimeMainPage({}: Props) {
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
    <section className={styles['page--container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <div className={styles['page--title']}>
          <h3 className={`text-3xl text-center font-semibold`}>Buy Airtime</h3>
        </div>

        <div>
          <h3 className='text-3xl mb-4'>Select Network</h3>
          <AirtimeOptions />
        </div>

        <AirtimeForm />
      </div>
    </section>
  );
}
