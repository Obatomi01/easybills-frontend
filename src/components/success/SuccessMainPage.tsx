'use client';

import React from 'react';

import Image from 'next/image';

import styles from '@/styles/success.module.scss';
import DashboardMenu from '../general/DashboardMenu';

import Money from '@/../public/icon/banknotes.png';
import Checked from '@/../public/icon/checked.png';
import { useClientIsLoggedIn } from '../clientSideAuth';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';
import Login from '@/app/login/page';
import LoginPage from '../login/LoginPage';

type Props = {};

export default function SuccessMainPage({}: Props) {
  useClientIsLoggedIn();

  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <section className={styles['success--page__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <div className={styles['icons--container']}>
          <Image src={Checked} alt='icon' className={styles['check']} />
          <Image src={Money} alt='icon' className={styles['money']} />
        </div>
        <h5 className='text-center font-semibold text-4xl'>
          Successfully sent!
        </h5>
      </div>
    </section>
  );
}
