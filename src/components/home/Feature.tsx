import React from 'react';
import Image from 'next/image';

import { Fade } from 'react-reveal';
import { gsap } from 'gsap';

import { useEffect, useRef } from 'react';

import styles from '@/styles/home/home.module.scss';

type Props = {
  imgSrc: any;
  description: string;
  featureTitle: string;
};

export default function Feature({ imgSrc, description, featureTitle }: Props) {
  const descriptionContainer = useRef<any>();

  useEffect(() => {
    gsap.to(descriptionContainer.current, { opacity: 1, delay: 2 });
  }, []);

  return (
    <div className={styles['feature--container']}>
      <div className={styles['image--container']}>
        <Image src={imgSrc} alt='feature' />
      </div>
      <div
        className={styles['description--container']}
        ref={descriptionContainer}
      >
        <Fade bottom>
          <h2 className='text-5xl font-medium'>{featureTitle}</h2>
          <p className='text-2xl font-medium'>{description}</p>
        </Fade>
      </div>
    </div>
  );
}
