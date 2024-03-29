import ConfirmPinAirtime from '@/components/airtime-and-data/ConfirmPinAirtime';
import DashboardMenu from '@/components/general/DashboardMenu';
import React from 'react';

import styles from '@/styles/airtime-and-data.module.scss';
import AuthUser from '@/components/AuthUser';

type Props = {};

export default function page({}: Props) {
  return (
    <main className={styles['confirm--pin__container']}>
      <DashboardMenu />
      <ConfirmPinAirtime />
    </main>
  );
}
