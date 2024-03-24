'use client';

import React from 'react';
import ResetForgottenPassword from './ResetForgottenPassword';
import { useClientIsLoggedIn } from '../clientSideAuth';

type Props = {};

export default function ChangePassword({}: Props) {
  useClientIsLoggedIn();

  return (
    <div>
      <ResetForgottenPassword changePassword={true} />
    </div>
  );
}
