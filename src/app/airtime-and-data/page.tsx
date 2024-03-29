import AuthUser from '@/components/AuthUser';
import AirtimeMainPage from '@/components/airtime-and-data/AirtimeMainPage';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <AirtimeMainPage />
    </main>
  );
}
