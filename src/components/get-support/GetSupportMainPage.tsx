'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

import { useEffect } from 'react';

import DashboardMenu from '../general/DashboardMenu';

import styles from '@/styles/get-support.module.scss';
import { useClientIsLoggedIn } from '../clientSideAuth';

import Phone from '@/../public/icon/telephone.png';
import Mail from '@/../public/icon/mail.png';
import LinkedIn from '@/../public/icon/linkedin.png';
import Twitter from '@/../public/icon/twitter.png';
import Instagram from '@/../public/icon/instagram.png';
import Chevron from '@/../public/icon/chevron-right.png';

type Props = {};

type SupportOptions = {
  title: string;
  imgSrc: any;
  description: string;
};

const supportOptions: SupportOptions[] = [
  {
    title: '07012345678',
    imgSrc: Phone,
    description: 'You can reach out to our call center',
  },
  {
    title: 'sample@gmail.com',
    imgSrc: Mail,
    description: 'Send a mail to get any information',
  },
  {
    title: 'Easybills',
    imgSrc: LinkedIn,
    description: 'Get connected on LinkedIn',
  },
  {
    title: '@easy_bills',
    imgSrc: Twitter,
    description: 'Get connected on X',
  },
  {
    title: '@easy_bills',
    imgSrc: Instagram,
    description: 'Get connected on Instagram',
  },
];

export default function GetSupportMainPage({}: Props) {
  const router = useRouter();
  const isLoggedIn = getCookie('isLoggedIn');
  useClientIsLoggedIn();

  if (!isLoggedIn) {
    // router.push('/login');
    return (
      <div>
        <p>Unauthenticated User</p>
      </div>
    );
  }

  return (
    <section className={styles['get--support__container']}>
      <DashboardMenu />
      <div className={styles['support--options']}>
        <h3 className='text-center text-4xl font-semibold mb-6'>
          Reach out to us
        </h3>
        {supportOptions.map((el: SupportOptions, index: number) => (
          <div key={index} className={styles['support--option']}>
            <div className={styles['right--container']}>
              <span className={styles['image--container']}>
                <Image src={el.imgSrc} alt='icon' />
              </span>
              <div className={styles['description--container']}>
                <h4 className='text-2xl font-semibold'>{el.title}</h4>
                <h5 className='text-xl font-semibold'>{el.description}</h5>
              </div>
            </div>
            <Image src={Chevron} alt='icon' />
          </div>
        ))}
      </div>
    </section>
  );
}
