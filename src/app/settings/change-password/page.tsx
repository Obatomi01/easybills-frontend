import ChangePassword from '@/components/forgot-password/ChangePassword';

import React from 'react';

import { Suspense } from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <Suspense fallback={<p>loading...</p>}>
        <ChangePassword />
      </Suspense>
    </main>
  );
}
