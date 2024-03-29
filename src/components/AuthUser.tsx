'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

import { useClientIsLoggedIn } from './clientSideAuth';

type Props = {
  children: any;
};

export default function AuthUser({ children }: Props) {
  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    router.push('/login');
    return (
      <div>
        <p>Unauthenticated User</p>
      </div>
    );
  }

  return <>{children}</>;
}
