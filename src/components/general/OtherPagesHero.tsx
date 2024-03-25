import React from 'react';

import Image from 'next/image';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import styles from '@/styles/about.module.scss';

type Props = {
  imgSrc: any;
  blackDescriptionText: string;
  colouredDescriptionText: string;
};

export default function OtherPagesHero({
  imgSrc,
  blackDescriptionText,
  colouredDescriptionText,
}: Props) {
  const heroImage = useRef<any>();
  const heroDescription = useRef<any>();

  useEffect(() => {
    gsap.fromTo(
      heroDescription.current,
      { xPercent: -50 },
      { xPercent: 0, opacity: 1, delay: 1, duration: 2 }
    );
    gsap.fromTo(
      heroImage.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.1, duration: 4 }
    );
  }, []);

  return (
    <section className={styles['hero--container']}>
      <div className={styles['description--container']} ref={heroDescription}>
        <h1 className='text-6xl md:text-7xl font-bold'>
          {blackDescriptionText}
          <span className='text-amber-400'>{colouredDescriptionText}</span>
        </h1>
      </div>
      <Image src={imgSrc} alt='about us' ref={heroImage} />
    </section>
  );
}
