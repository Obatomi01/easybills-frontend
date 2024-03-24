import React from 'react';
import Image from 'next/image';

import { useState } from 'react';

import styles from '@/styles/cards.module.scss';

import Hide from '@/../public/icon/hide.png';
import Show from '@/../public/icon/visible.png';

type Props = {
  cardType: string;
  cardName: string;
  cardNumber: string;
  availableFunds: string;
  expiryDate: string;
  cvv: string;
};

export default function CardContainer({
  cardName,
  cardNumber,
  cardType,
  availableFunds,
  expiryDate,
  cvv,
}: Props) {
  const [showFunds, setShowFunds] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className={styles['card--container']}>
      <div className={styles['card--type__details']}>
        <h2 className='text-4xl font-bold'>{cardName}</h2>
        <h4 className='text-3xl font-bold'>{cardType}</h4>
      </div>

      <div className={styles['card--number__details']}>
        <h4 className='text-3xl font-bold'>
          {showNumber ? cardNumber : '**** **** **** ****'}
        </h4>
        <Image
          src={showNumber ? Hide : Show}
          alt='icon'
          onClick={() => setShowNumber(!showNumber)}
        />
      </div>

      <div className={styles['other--details']}>
        <div className={styles['total--funds']}>
          <h4 className='text-2xl font-bold'>Available Funds</h4>

          <div className={styles['amount--container']}>
            <h3 className='text-3xl'>
              {showFunds ? availableFunds : '#****.**'}
            </h3>
            <Image
              src={showFunds ? Hide : Show}
              alt='icon'
              onClick={() => setShowFunds(!showFunds)}
            />
          </div>
        </div>
        <div className={styles['expiry--date']}>
          <h4 className='text-2xl font-bold'>Expiry Date</h4>
          <h3 className='text-3xl'>{expiryDate}</h3>
        </div>
        <div className={styles['cvv']}>
          <h4 className='text-2xl font-bold'>CVV</h4>
          <h3 className='text-3xl'>{cvv}</h3>
        </div>
      </div>
    </div>
  );
}
