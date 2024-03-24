'use client';

import React from 'react';

import styles from '@/styles/statement-of-account.module.scss';
import DashboardMenu from '../general/DashboardMenu';

type Props = {};

export default function StatementOfAccount({}: Props) {
  return (
    <section className={styles['statements--page__container']}>
      <DashboardMenu />
      <div className={styles['main--contents']}>
        <p className='text-3xl'>
          A Statement of Account is a comprehensive document that provides a
          detailed record of all financial transactions associated with your
          account over a specific period. It serves as a valuable tool for
          tracking your account activity, monitoring expenses, and reconciling
          records. By reviewing your Statement of Account regularly, you can
          gain better control over your finances, identify any discrepancies,
          and make informed decisions about your spending habits.
        </p>
        <p className='text-3xl mt-6'>
          This feature will be added in future updates.
        </p>
        <button type='button'>
          <p className='text-3xl font-semibold'>Join the waitlist</p>
        </button>
      </div>
    </section>
  );
}
