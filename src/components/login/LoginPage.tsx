'use client';

import React from 'react';

import SignUpHeader from '../general/SignUpHeader';
import styles from '@/styles/login/login.module.scss';
import LoginFormContainer from './LoginFormContainer';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function LoginPage({}: Props) {
  useResetCookies();

  return (
    <section
      style={{
        maxHeight: '100vh',
      }}
    >
      <SignUpHeader />
      <div className={styles['form--container']}>
        <LoginFormContainer />
      </div>
    </section>
  );
}
