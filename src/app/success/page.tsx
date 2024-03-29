import AuthUser from '@/components/AuthUser';
import SuccessMainPage from '@/components/success/SuccessMainPage';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <SuccessMainPage />
    </main>
  );
}
