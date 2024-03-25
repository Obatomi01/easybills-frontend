import ConfirmPinAirtime from '@/components/airtime-and-data/ConfirmPinAirtime';
import DashboardMenu from '@/components/general/DashboardMenu';
import React from 'react';

import styles from '@/styles/airtime-and-data.module.scss';

import { Suspense } from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main className={styles['confirm--pin__container']}>
      <Suspense fallback={<p>loading...</p>}>
        <DashboardMenu />
        <ConfirmPinAirtime />
      </Suspense>
    </main>
  );
}
