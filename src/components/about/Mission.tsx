import React from 'react';

import Image from 'next/image';

import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';

import styles from '@/styles/about.module.scss';

import MissionsImage from '@/../public/images/missions.jpg';

type Props = {};

export default function Mission({}: Props) {
  const imageContainer = useRef<any>();
  const textContainer = useRef<any>();

  useEffect(() => {
    gsap.fromTo(
      textContainer.current,
      { xPercent: 50 },
      { xPercent: 0, opacity: 1, delay: 1, duration: 2 }
    );
    gsap.fromTo(
      imageContainer.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.1, duration: 2 }
    );
  }, []);

  return (
    <section className={styles['mission--container']}>
      <Image src={MissionsImage} alt='mission' ref={imageContainer} />
      <div className={styles['description--container']} ref={textContainer}>
        <h2 className='text-7xl font-bold mb-10'>
          Our <span className='text-amber-400'>Missions</span>
        </h2>
        <p className='text-3xl leading-10 mb-5'>
          We are dedicated to revolutionizing the way bills are paid, offering
          an intuitive and accessible platform that ensures convenience,
          reliability, and transparency in every transaction, enabling financial
          freedom for all.
        </p>
        <p className='text-3xl leading-10'>
          We aim to empower individuals and businesses by providing a modern,
          all-inclusive bills payment solution that fosters financial
          empowerment, convenience, and peace of mind in every transaction.
        </p>
      </div>
    </section>
  );
}
