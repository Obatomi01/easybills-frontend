import DashboardPage from '@/components/dashboard/DashboardPage';
import React from 'react';

import { redirect } from 'next/navigation';

import { cookies } from 'next/headers';

type Props = {};

const userDetails = async () => {
  const token = cookies().get('token');

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_USER_API_LINK}/get-user-details/${token?.value}`
  );

  const data = await res.json();
  return data;
};

export default async function Dashboard({}: Props) {
  // const firstName = cookies().get('firstName');
  // const lastName = cookies().get('lastName');

  const { firstName } = await userDetails();
  // const isLoggedIn = cookies().get('isLoggedIn');

  // if (!isLoggedIn) {
  //   redirect('/login');
  // }

  return (
    <main>
      <DashboardPage firstName={firstName} />
    </main>
  );
}
