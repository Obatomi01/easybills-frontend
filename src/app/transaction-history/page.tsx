import AuthUser from '@/components/AuthUser';
import MainTransactionHistoryPage from '@/components/transaction-history/MainTransactionHistoryPage';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <MainTransactionHistoryPage />
    </main>
  );
}
