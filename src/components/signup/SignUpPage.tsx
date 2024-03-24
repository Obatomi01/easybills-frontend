'use client';

import React from 'react';
import styles from '@/styles/login/login.module.scss';

import SignUpHeader from '../general/SignUpHeader';
import SignUpFormContainer from './SignUpFormContainer';
import SignUpFormImageContainer from './SignUpFormImageContainer';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function SignUpPage({}: Props) {
  useResetCookies();

  return (
    <section>
      <SignUpHeader />
      <div
        className={`${styles['form--container']} ${styles['signup--form__container']}`}
      >
        <SignUpFormContainer />
        <SignUpFormImageContainer />
      </div>
    </section>
  );
}
