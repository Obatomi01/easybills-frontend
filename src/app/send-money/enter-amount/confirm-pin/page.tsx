import AuthUser from '@/components/AuthUser';
import ConfirmPinMoneyTransfer from '@/components/send-money/enter-amount/confirm-pin/ConfirmPinMoneyTransfer';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <ConfirmPinMoneyTransfer />
    </main>
  );
}
