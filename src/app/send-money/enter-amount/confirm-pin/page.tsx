import ConfirmPinMoneyTransfer from '@/components/send-money/enter-amount/confirm-pin/ConfirmPinMoneyTransfer';
import React from 'react';

import { Suspense } from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <Suspense fallback={<p>loading...</p>}>
        <ConfirmPinMoneyTransfer />
      </Suspense>
    </main>
  );
}
