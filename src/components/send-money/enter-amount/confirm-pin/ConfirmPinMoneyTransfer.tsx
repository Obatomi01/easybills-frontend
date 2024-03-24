'use client';

import React from 'react';

import styles from '@/styles/enter-amount.module.scss';

import { useSearchParams } from 'next/navigation';

import DashboardMenu from '@/components/general/DashboardMenu';

import TransferDetailsContainer from '../../TransferDetailsContainer';
import { useClientIsLoggedIn } from '@/components/clientSideAuth';

type Props = {
  //   linkTo: string;
  //   confirmPin: boolean;
};

export default function ConfirmPinMoneyTransfer({}: Props) {
  const searchParams = useSearchParams();
  useClientIsLoggedIn();

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
