import React from 'react';
import Image from 'next/image';

import styles from '@/styles/home/home.module.scss';

type Props = {
  name: string;
  imgSrc: any;
  id: number;
  review: string;
};

export default function Review({ name, imgSrc, id, review }: Props) {
  return (
    <div className={styles['review--container']}>
      <Image src={imgSrc} alt='reviewer' />
      <div className={styles['review--text__container']}>
        <h3 className='text-2xl'>&quot;{review}&quot;</h3>
        <p className='text-xl italic'>{name}</p>
      </div>
    </div>
  );
}
