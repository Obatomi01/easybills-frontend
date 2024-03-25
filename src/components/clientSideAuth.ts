'use client';

import { useRouter } from 'next/navigation';

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

import useSWR from 'swr';

export function useClientIsLoggedIn() {
  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    router.push('/login');
  }
}

export function useResetCookies() {
  const fetcher = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_APP_LINK}/api/login`, {
      cache: 'no-store',
    });
  };

  useSWR('reset--cookie', fetcher);
}
