'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import styles from '@/styles/settings.module.scss';
import DashboardMenu from '../general/DashboardMenu';
import { useClientIsLoggedIn } from '../clientSideAuth';

import { getCookie } from 'cookies-next';

import ChevronRight from '@/../public/icon/chevron-right.png';
import LoginPage from '../login/LoginPage';
import Login from '@/app/login/page';

type Props = {};

type SettingOptions = {
  title: string;
  linkTo: string;
  description: string;
};

const settingsOptions: SettingOptions[] = [
  {
    title: 'Change Password',
    description: 'Change login Password',
    linkTo: '/settings/check-password',
  },
  {
    title: 'Pin Management',
    description: 'Change Transaction Pin Management',
    linkTo: '/settings/check-password?pin=true',
  },
  {
    title: 'Security Questions',
    description: 'Set security question and answer',
    linkTo: '',
  },
];

export default function SettingsMainPage({}: Props) {
  useClientIsLoggedIn();

  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <section className={styles['settings__container']}>
      <DashboardMenu />
      <div className={styles['settings--options']}>
        <h3 className='text-center text-4xl font-semibold mb-6'>Settings</h3>
        {settingsOptions.map((el: SettingOptions, index: number) => (
          <Link
            key={index}
            className={styles['settings--option']}
            href={el.linkTo}
          >
            <div className={styles['text--container']}>
              <h4 className='text-2xl font-semibold'>{el.title}</h4>
              <h5 className='text-xl font-semibold'>{el.description}</h5>
            </div>
            <Image src={ChevronRight} alt='icon' />
          </Link>
        ))}
      </div>
    </section>
  );
}
