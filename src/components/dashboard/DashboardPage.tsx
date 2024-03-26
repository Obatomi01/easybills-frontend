'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import DashboardMenu from '../general/DashboardMenu';

import styles from '@/styles/dashboard.module.scss';

import DashboardHeader from './DashboardHeader';

import News from './News';
import DetailCard from './DetailCard';

import { useClientIsLoggedIn } from '../clientSideAuth';

import FavouriteOptions from './FavouriteOptions';

type Props = {
  firstName: any;
};

export default function DashboardPage({ firstName }: Props) {
  useClientIsLoggedIn();
  // useCheckClientIsLoggedIn();
  // console.log('Ran again');

  return (
    <section className={styles['dashboard--container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <DashboardHeader firstName={firstName} />
        <div className={styles['bottom--container']}>
          <div className={styles['left--container']}>
            <div className={styles['left--top__container']}>
              <DetailCard title='Income in December' amount='20,000' />
              <DetailCard title='Spendings in December' amount='34,000' />
            </div>
            <News />
          </div>
          <FavouriteOptions />
        </div>
      </div>
    </section>
  );
}
