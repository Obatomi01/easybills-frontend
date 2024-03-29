import AuthUser from '@/components/AuthUser';
import AccountInfo from '@/components/accounts/AccountInfo';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <AccountInfo />
    </main>
  );
}
