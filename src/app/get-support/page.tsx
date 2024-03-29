import AuthUser from '@/components/AuthUser';
import GetSupportMainPage from '@/components/get-support/GetSupportMainPage';
import React from 'react';

type Props = {};

export default function pages({}: Props) {
  return (
    <main>
      <GetSupportMainPage />
    </main>
  );
}
