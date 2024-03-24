import React from 'react';

import Image from 'next/image';

import { Fade } from 'react-reveal';

import styles from '@/styles/about.module.scss';

type Props = {
  imgSrc: any;
  position: string;
  name: string;
};

export default function Worker({ imgSrc, position, name }: Props) {
  return (
    <Fade bottom>
      <div className={styles['worker--container']}>
        <Image src={imgSrc} alt='worker' />
        <h3 className='text-2xl font-semibold mb-4'>{position}</h3>
        <p className='text-2xl'>{name}</p>
      </div>
    </Fade>
  );
}
