import React from 'react';

import Image from 'next/image';

import styles from '@/styles/dashboard.module.scss';

type Props = { title: string; imgSrc: any; headline: string };

export default function NewsItem({ title, imgSrc, headline }: Props) {
  return (
    <div className={styles['news--contents']}>
      <Image src={imgSrc} alt='news' />
      <h5 className='text-3xl font-semibold mb-2 mt-2'>{title}</h5>
      <p className='text-2xl'>{headline}</p>
    </div>
  );
}
