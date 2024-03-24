import React from 'react';

import { Bounce } from 'react-reveal';
import { gsap } from 'gsap';

import { useEffect, useRef } from 'react';

import styles from '@/styles/home/home.module.scss';
import Ecommerce from '@/../public/images/e-commerce-service.jpg';
import Personal from '@/../public/images/personal-services.jpg';
import Professional from '@/../public/images/professional-services.jpg';
import Offer from './Offer';

type Props = {};

export default function Offers({}: Props) {
  const container = useRef<any>();

  useEffect(() => {
    gsap.to(container.current, { opacity: 1, delay: 2, duration: 2 });
  }, []);

  return (
    <section className={styles['offers--section__container']} ref={container}>
      <Bounce top>
        <h2 className='text-center text-6xl font-semibold mb-12'>
          We offer <span className='text-amber-400'>fast </span>
          and <span className='text-amber-400'>secure </span> money transfers
          for...
        </h2>
      </Bounce>
      <div className={styles['offers--container']}>
        <Offer
          imgSrc={Personal}
          offerDescription=' A bills payment platform designed for individuals seeking convenient management of personal expenses. '
          offerTitle='Personal Services'
        />
        <Offer
          imgSrc={Professional}
          offerDescription='Tailored for professionals and service providers, this bills payment platform offers an efficient way to manage and collect payments for rendered services.'
          offerTitle='Professional Services'
        />
        <Offer
          imgSrc={Ecommerce}
          offerDescription='Empower your online business with a comprehensive bills payment platform catered to e-commerce enterprises.'
          offerTitle='E-commerce'
        />
      </div>
    </section>
  );
}
