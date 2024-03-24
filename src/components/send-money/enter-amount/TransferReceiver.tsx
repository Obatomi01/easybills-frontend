import React from 'react';

import styles from '@/styles/enter-amount.module.scss';

type Props = {
  bank?: any;
  accountNumber: any;
  accountName: any;
  airtime?: boolean;
};

export default function TransferReceiver({
  bank,
  accountName,
  accountNumber,
  airtime,
}: Props) {
  return (
    <section className={styles['receiver--card__container']}>
      <div className={styles['top--container']}>
        <div className={styles['card--details']}>
          <h5 className='text-2xl'>
            {airtime ? 'Phone Number' : 'Account Number'}
          </h5>
          <h4 className='text-3xl'>{accountNumber}</h4>
        </div>
        <div className={styles['card--details']}>
          <h5 className='text-2xl'>{airtime ? '' : 'Bank'}</h5>
          <h4 className='text-3xl'>{airtime ? '' : bank}</h4>
        </div>
      </div>
      <div className={styles['card--details']}>
        <h5 className='text-2xl'>{airtime ? 'Amount' : 'Account Name'}</h5>
        <h4 className='text-3xl'>{accountName}</h4>
      </div>
    </section>
  );
}
