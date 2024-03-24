import React from 'react';

import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';

import styles from '@/styles/home/home.module.scss';

type Props = {};

export default function Hero({}: Props) {
  const heroText = useRef<any>();
  const heroContainer = useRef<any>();

  useEffect(() => {
    gsap.fromTo(
      heroText.current,
      { xPercent: 50 },
      { xPercent: 0, opacity: 1, delay: 0.1, duration: 1 }
    );
    gsap.fromTo(
      heroContainer.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.1, duration: 1 }
    );
  }, []);

  return (
    <section className={styles['hero--container']} ref={heroContainer}>
      <div className={styles['contents--container']}>
        <div className={`w-2/4 ${styles['empty--container']}`}></div>
        <div className={`w-2/4 ${styles['text--container']}`}>
          <div className={styles['top--line']}></div>

          <h1 className='text-white text-5xl' ref={heroText}>
            Welcome to Easybills, Your All-in-One Platform for Simplifying
            Billing, Invoicing, and Payment Management Effortlessly.
          </h1>

          <div className={styles['right--line']}></div>
        </div>
      </div>
    </section>
  );
}
