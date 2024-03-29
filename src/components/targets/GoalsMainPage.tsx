'use client';

import React from 'react';

import styles from '@/styles/targets.module.scss';
import DashboardMenu from '../general/DashboardMenu';
import Goals from './Goals';
import { useClientIsLoggedIn } from '../clientSideAuth';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';
import Login from '@/app/login/page';
import LoginPage from '../login/LoginPage';

type Props = {};

export default function GoalsMainPage({}: Props) {
  useClientIsLoggedIn();

  return (
    <section className={styles['target--page__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <Goals />
      </div>
    </section>
  );
}
