import React from 'react';

import styles from '@/styles/dashboard.module.scss';
import DashboardTopContainer from '../general/DashboardTopContainer';
import DashboardContentCard from '../general/DashboardContentCard';

type Props = {
  title: string;
  amount: string;
};

export default function DetailCard({ title, amount }: Props) {
  return (
    <section className={styles['funds--details__container']}>
      <DashboardTopContainer />
      <div className={styles['funds--bottom__container']}>
        <DashboardContentCard>
          <div className={styles['funds--details']}>
            <h4 className='text-3xl font-semibold'>{title}</h4>
            <p className='text-2xl'>#{amount}</p>
          </div>
        </DashboardContentCard>
      </div>
    </section>
  );
}
