'use client';

import { useRouter } from 'next/navigation';

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

import useSWR from 'swr';

export function useClientIsLoggedIn() {
  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);
}

// export function useCheckClientIsLoggedIn() {
//   const router = useRouter();
//   const fetcher = async () => {
//     await fetch(`${process.env.NEXT_PUBLIC_APP_LINK}/api/auth-user`, {
//       cache: 'no-store',
//     });
//   };

//   const { data, error, isLoading } = useSWR([router], fetcher);
//   console.log(data);
// }

export function useResetCookies() {
  const fetcher = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_APP_LINK}/api/login`, {
      cache: 'no-store',
    });
  };

  useSWR('reset--cookie', fetcher);
}
