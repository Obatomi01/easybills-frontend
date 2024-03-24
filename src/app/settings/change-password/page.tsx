import ChangePassword from '@/components/forgot-password/ChangePassword';
import ResetForgottenPassword from '@/components/forgot-password/ResetForgottenPassword';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <ChangePassword />
    </main>
  );
}
