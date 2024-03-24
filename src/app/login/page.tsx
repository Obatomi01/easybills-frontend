'use server';

import LoginPage from '@/components/login/LoginPage';
import React from 'react';

type Props = {};

export default async function Login({}: Props) {
  return (
    <main>
      <LoginPage />
    </main>
  );
}
