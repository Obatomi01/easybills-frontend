import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/dashboard.module.scss';
import Account from '@/../public/icon/bank-account.png';

type Props = {
  imgSrc: any;
  title: string;
  linkTo: string;
};

export default function FavouriteOption({ imgSrc, title, linkTo }: Props) {
  return (
    <Link href={linkTo} className={styles['favourite--option']}>
      <div className={styles['image--container']}>
        <Image src={imgSrc} alt='icon' />
      </div>
      <h3 className='text-2xl'>{title}</h3>
    </Link>
  );
}
