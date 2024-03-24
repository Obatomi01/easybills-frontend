import React from 'react';

import styles from '@/styles/faq.module.scss';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

type Props = {};

export default function FAQHero({}: Props) {
  const heroContainer = useRef<any>();

  useEffect(() => {
    gsap.to(heroContainer.current, { opacity: 1, duration: 2 });
  }, []);

  return (
    <section className={styles['hero--container']} ref={heroContainer}>
      <h1 className='text-7xl font-bold'>
        Frequently Asked <span className='text-amber-400'>Questions</span>
      </h1>
    </section>
  );
}
