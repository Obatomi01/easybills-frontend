'use client';

import React from 'react';

import styles from '@/styles/enter-amount.module.scss';

import { useSearchParams } from 'next/navigation';

import DashboardMenu from '@/components/general/DashboardMenu';

import TransferDetailsContainer from '../../TransferDetailsContainer';
import { useClientIsLoggedIn } from '@/components/clientSideAuth';
import Login from '@/app/login/page';

import { getCookie } from 'cookies-next';

type Props = {
  //   linkTo: string;
  //   confirmPin: boolean;
};

export default function ConfirmPinMoneyTransfer({}: Props) {
  const searchParams = useSearchParams();
  useClientIsLoggedIn();

  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    return <Login />;
  }

  const amount = searchParams.get('amount');

  return (
    <section className={styles['enter--amount__container']}>
      <DashboardMenu />
      <TransferDetailsContainer
        linkTo='/success'
        confirmPin={true}
        amount={amount || ''}
      />
    </section>
  );
}
