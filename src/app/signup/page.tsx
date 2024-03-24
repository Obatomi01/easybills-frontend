import React from 'react';
import styles from '@/styles/login/login.module.scss';
import SignUpPage from '@/components/signup/SignUpPage';

type Props = {};

export default function Signup({}: Props) {
  return (
    <main>
      <SignUpPage />
    </main>
  );
}
