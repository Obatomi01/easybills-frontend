import React from 'react';

import styles from '@/styles/accounts.module.scss';

type Props = {};

export default function AccountCard({}: Props) {
  return (
    <div className={styles['account--card__container']}>
      <div className={styles['card--details']}>
        <div className={styles['card--detail']}>
          <h5 className='text-3xl'>Balance</h5>
          <h4 className='text-4xl'>#5,075.50</h4>
        </div>
        <div className={styles['card--detail']}>
          <h5 className='text-3xl'>Account Number</h5>
          <h4 className='text-4xl'>0123456789</h4>
        </div>
      </div>
      <div className={styles['card--details']}>
        <div className={styles['card--detail']}>
          <h5 className='text-3xl'>Status</h5>
          <h4 className='text-4xl'>Active</h4>
        </div>
        <div className={styles['card--detail']}></div>
      </div>
    </div>
  );
}
