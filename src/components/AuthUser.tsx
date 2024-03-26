'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useClientIsLoggedIn } from './clientSideAuth';

type Props = {
  children: any;
};

export default function AuthUser({ children }: Props) {
  const router = useRouter();
  useClientIsLoggedIn();

  useEffect(() => {
    router.refresh();
    console.log('refreshed');
  }, [router]);

  return <>{children}</>;
}
