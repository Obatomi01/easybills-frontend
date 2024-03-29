import AuthUser from '@/components/AuthUser';
import RequestPasswordChangeMainPage from '@/components/forgot-password/RequestPasswordChangeMainPage';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <RequestPasswordChangeMainPage />
    </main>
  );
}
