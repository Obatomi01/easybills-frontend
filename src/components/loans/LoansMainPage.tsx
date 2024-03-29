'use client';

import React from 'react';
import styles from '@/styles/loans.module.scss';
import DashboardMenu from '../general/DashboardMenu';
import LoansOptions from './LoansOptions';
import { useClientIsLoggedIn } from '../clientSideAuth';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';
import LoginPage from '../login/LoginPage';

type Props = {};

export default function LoansMainPage({}: Props) {
  useClientIsLoggedIn();

  return (
    <section className={styles['loans--page__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <LoansOptions />
      </div>
    </section>
  );
}
