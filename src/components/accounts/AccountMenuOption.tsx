import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ArrowRight from '@/../public/icon/chevron-right.png';
import styles from '@/styles/accounts.module.scss';

type Props = {
  imgSrc: any;
  title: string;
  description: string;
  linkTo: string;
};

export default function AccountMenuOption({
  imgSrc,
  title,
  description,
  linkTo,
}: Props) {
  return (
    <Link href={linkTo}>
      <div className={styles['menu--option']}>
        <div className={styles['menu']}>
          <Image src={imgSrc} alt='icon' className={styles['menu--icon']} />
          <div className={styles['menu--description']}>
            <h4 className='text-3xl font-semibold'>{title}</h4>
            <h5 className='text-2xl'>{description}</h5>
          </div>
        </div>
        <Image src={ArrowRight} alt='icon' className={styles['arrow--icon']} />
      </div>{' '}
    </Link>
  );
}
