import EnterAmountMainPage from '@/components/send-money/enter-amount/EnterAmountMainPage';
import React from 'react';

import { Suspense } from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <EnterAmountMainPage />
      </Suspense>
    </>
  );
}
