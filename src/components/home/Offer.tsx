import React from 'react';
import Image from 'next/image';

import { Fade, Zoom } from 'react-reveal';

import styles from '@/styles/home/home.module.scss';

type Props = {
  imgSrc: any;
  offerTitle: string;
  offerDescription: string;
};

export default function Offer(props: Props) {
  return (
    <Fade bottom>
      <div className={styles['offer--container']}>
        <div className={styles['top--line']}></div>
        <div className={styles['left--line']}></div>

        <div className={styles['offer--contents']}>
          <Zoom>
            <Image src={props.imgSrc} alt='offer' priority={true} />
          </Zoom>
          <h2 className='text-3xl font-semibold mt-8 mb-1 '>
            {props.offerTitle}
          </h2>
          <p className='text-2xl'>{props.offerDescription}</p>
        </div>

        <div className={styles['right--line']}></div>
        <div className={styles['bottom--line']}></div>
      </div>
    </Fade>
  );
}
