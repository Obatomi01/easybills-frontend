'use client';

import React from 'react';
import DashboardMenu from '../general/DashboardMenu';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';

import styles from '@/styles/cards.module.scss';
import CardContainer from './CardContainer';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

export default function CardsMainPage({}: Props) {
  const router = useRouter();
  useClientIsLoggedIn();

  return (
    <section className={styles['all--cards__container']}>
      <DashboardMenu />

      <div className={styles['cards--container']}>
        <CardContainer
          cardName='Primary Card'
          cardNumber='1234 5678 9012 3456'
          cardType='VERVE'
          expiryDate='05 / 26'
          availableFunds='#5,000.00'
          cvv='000'
        />
        <CardContainer
          cardName='Secondary Card'
          cardNumber='9876 5432 1098 7654'
          cardType='VISA'
          expiryDate='02 / 25'
          availableFunds='#52,405.50'
          cvv='111'
        />
      </div>
    </section>
  );
}
