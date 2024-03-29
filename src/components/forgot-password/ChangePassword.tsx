'use client';

import React from 'react';
import ResetForgottenPassword from './ResetForgottenPassword';
import { useClientIsLoggedIn } from '../clientSideAuth';
import Login from '@/app/login/page';

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';
import LoginPage from '../login/LoginPage';

type Props = {};

export default function ChangePassword({}: Props) {
  useClientIsLoggedIn();

  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <div>
      <ResetForgottenPassword changePassword={true} />
    </div>
  );
}
