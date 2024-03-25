import ResetForgottenPassword from '@/components/forgot-password/ResetForgottenPassword';
import React from 'react';

import { Suspense } from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <Suspense>
        <ResetForgottenPassword />
      </Suspense>
    </main>
  );
}
