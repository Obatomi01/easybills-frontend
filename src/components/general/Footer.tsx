import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/general.module.scss';

import Logo from '@/../public/images/footer-logo.png';

import TwitterLogo from '@/../public/icon/twitter.png';
import InstagramLogo from '@/../public/icon/instagram.png';
import LinkedInLogo from '@/../public/icon/linkedin.png';

type Props = {};

type PageInfo = {
  title: string;
  linkTo: string;
};

const CompanyObj: PageInfo[] = [
  {
    title: 'About',
    linkTo: '/about',
  },
  {
    title: 'Terms',
    linkTo: '/terms',
  },
  {
    title: 'Privacy and Policy',
    linkTo: '/privacy-and-policy',
  },
];

const SupportObj: PageInfo[] = [
  {
    title: 'Get Help',
    linkTo: '/get-help',
  },
  {
    title: 'FAQ',
    linkTo: '/faq',
  },
];

export default function Footer({}: Props) {
  return (
    <footer className={styles['footer--container']}>
      <div className={styles['footer--contents']}>
        <Link href={'/'}>
          <Image src={Logo} alt='Company logo' className={styles['logo']} />
        </Link>

        <div className={styles['footer--content']}>
          <h2 className='text-4xl'>Company</h2>
          {CompanyObj.map((el: PageInfo, index: number) => (
            <Link href={`/company${el.linkTo}`} key={index}>
              <p className='text-3xl'>{el.title}</p>
            </Link>
          ))}
        </div>

        <div className={styles['footer--content']}>
          <h2 className='text-4xl'>Support</h2>
          {SupportObj.map((el: PageInfo, index: number) => (
            <Link href={`/support${el.linkTo}`} key={index}>
              <p className='text-3xl'>{el.title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles['footer--logos__container']}>
        <div className={styles['logos']}>
          <Link href={''}>
            <Image src={LinkedInLogo} alt='logo' />
          </Link>
          <Link href={''}>
            <Image src={InstagramLogo} alt='logo' />
          </Link>
          <Link href={''}>
            <Image src={TwitterLogo} alt='logo' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
