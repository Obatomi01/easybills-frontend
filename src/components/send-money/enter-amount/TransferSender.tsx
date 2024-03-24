import React from 'react';

import styles from '@/styles/enter-amount.module.scss';

type Props = {};

export default function TransferSender({}: Props) {
  return (
    <section className={styles['sender--card__container']}>
      <div className={styles['top--container']}>
        <div className={styles['card--details']}>
          <h5 className='text-2xl'>Balance</h5>
          <h4 className='text-3xl'>#5,500.79</h4>
        </div>
        <div className={styles['card--details']}>
          <h5 className='text-2xl'>Status</h5>
          <h4 className='text-3xl'>Active</h4>
        </div>
      </div>

      <div className={styles['card--details']}>
        <h5 className='text-2xl'>Account Number</h5>
        <h4 className='text-3xl'>0123456789</h4>
      </div>
    </section>
  );
}
