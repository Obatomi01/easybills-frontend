import AuthUser from '@/components/AuthUser';
import NewAccountMainPage from '@/components/create-new-account/NewAccountMainPage';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <NewAccountMainPage />
    </main>
  );
}
