'use client';

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/general.module.scss';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

import DashboardIcon from '@/../public/icon/dashboard.png';
import CardsIcon from '@/../public/icon/credit-card.png';
import SettingIcon from '@/../public/icon/setting.png';
import TransactionIcon from '@/../public/icon/money-transfer.png';
import LogoutIcon from '@/../public/icon/logout.png';
import SupportIcon from '@/../public/icon/customer-service.png';

import DisplayPicture from '@/../public/icon/profile-picture.png';

import Menu from '@/../public/icon/hamburger.png';
import Logo from '@/../public/images/easybills-logo.png';
import Close from '@/../public/icon/menu-close.png';

type Props = {};

type linkProps = {
  linkTo: string;
  imgSrc: any;
  title: string;
};

const menuOptions: linkProps[] = [
  {
    linkTo: '/dashboard',
    imgSrc: DashboardIcon,
    title: 'Dashboard',
  },
  {
    linkTo: '/cards',
    imgSrc: CardsIcon,
    title: 'Cards',
  },
  {
    linkTo: '/transaction-history',
    imgSrc: TransactionIcon,
    title: 'Transactions',
  },
  {
    linkTo: '/get-support',
    imgSrc: SupportIcon,
    title: 'Support',
  },
  {
    linkTo: '/settings',
    imgSrc: SettingIcon,
    title: 'Settings',
  },
  {
    linkTo: '/login',
    imgSrc: LogoutIcon,
    title: 'Logout',
  },
];

export default function DashboardMenu({}: Props) {
  const [showNavBar, setShowNavBar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showNavBar]);

  return (
    <section>
      <div className={`hidden md:flex ${styles['dashboard--menu__container']}`}>
        <div className={styles['profile--container']}>
          <Image
            src={DisplayPicture}
            alt='profile'
            className={styles['profile--picture']}
            priority={false}
          />
        </div>
        <div className={styles['menu--container']}>
          {menuOptions.map((el: linkProps, index: number) => (
            <Link href={el.linkTo} key={index}>
              <div className={styles['menu--option']}>
                <span className={styles['image--container']}>
                  <Image src={el.imgSrc} alt='icon' />
                </span>
                <span className={styles['text--container']}>
                  <h4 className='text-3xl'>{el.title}</h4>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={`flex md:hidden ${styles['mobile--nav__container']} `}>
        <div
          style={{
            width: '90vw',
            paddingBlock: '2.4rem',
            display: 'flex',
            justifyContent: 'space-between',
            margin: 'auto',
          }}
        >
          <Link href={'/dashboard'}>
            <Image src={Logo} alt='icon' className={styles['logo']} />
          </Link>
          <Image
            src={Menu}
            alt='icon'
            className={styles['menu']}
            onClick={() => setShowNavBar(true)}
          />
        </div>

        <div
          className={`${styles['mobile--menu__container']} ${
            showNavBar ? styles['show--nav__bar'] : styles['hide--nav__bar']
          }`}
        >
          <Image
            src={Close}
            alt='icon'
            onClick={() => setShowNavBar(false)}
            className={styles['close']}
          />
          <div className={styles['profile--container']}>
            <Image
              src={DisplayPicture}
              alt='profile'
              className={styles['profile--picture']}
              priority={false}
            />
          </div>
          <div className={styles['menu--container']}>
            {menuOptions.slice(0, -1).map((el: linkProps, index: number) => (
              <Link
                href={el.linkTo}
                key={index}
                onClick={() => setShowNavBar(false)}
              >
                <div className={styles['menu--option']}>
                  <span className={styles['image--container']}>
                    <Image src={el.imgSrc} alt='icon' />
                  </span>
                  <span className={styles['text--container']}>
                    <h4 className='text-3xl'>{el.title}</h4>
                  </span>
                </div>
              </Link>
            ))}
            <div
              className={styles['menu--option']}
              onClick={() => {
                deleteCookie('token');
                deleteCookie('isLoggedIn');

                setShowNavBar(false);

                router.refresh();

                setTimeout(() => {
                  router.push('/login');
                }, 2000);
              }}
            >
              <span className={styles['image--container']}>
                <Image src={LogoutIcon} alt='icon' />
              </span>
              <span className={styles['text--container']}>
                <h4 className='text-3xl'>Logout</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
