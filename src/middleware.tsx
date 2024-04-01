import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('isLoggedIn');
  const url = request.nextUrl;

  const protectedRoutes = [
    'dashboard',
    'cards',
    'get-support',
    'settings',
    'transaction-history',
    'send-money',
    'loans',
    'airtime-and-data',
    'accounts',
    'targets',
    'success',
  ];

  const baseURL = url.pathname.split('/');

  if (!isLoggedIn && protectedRoutes.includes(baseURL[1])) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_LINK}/login`);
  }
}
