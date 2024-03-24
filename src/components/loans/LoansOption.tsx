import React from 'react';
import Image from 'next/image';

import styles from '@/styles/loans.module.scss';

type Props = {
  title: string;
  imgSrc: any;
};

export default function LoansOption({ title, imgSrc }: Props) {
  return (
    <div className={styles['loans--option']}>
      <Image src={imgSrc} alt='icon' />
      <p className='text-3xl font-semibold'>{title}</p>
    </div>
  );
}
