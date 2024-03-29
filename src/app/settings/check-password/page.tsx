import AuthUser from '@/components/AuthUser';
import CheckPassword from '@/components/settings/CheckPassword';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <CheckPassword />
    </main>
  );
}
