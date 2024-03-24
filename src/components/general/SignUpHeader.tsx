'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/login/login.module.scss';

import Logo from '@/../public/images/easybills-logo.png';

type Props = {};

export default function SignUpHeader({}: Props) {
  return (
    <section className={styles['signup--header__container']}>
      <section className={styles['signup--header']}>
        <Link href={'/'}>
          <Image src={Logo} alt='Logo' />
        </Link>
        <div className={styles['links--container']}>
          <Link href={'/support/get-help'}>
            <h2>Need help?</h2>
          </Link>
          <Link href={'/contact-us'}>
            <h2>Contact</h2>
          </Link>
        </div>
      </section>
    </section>
  );
}
