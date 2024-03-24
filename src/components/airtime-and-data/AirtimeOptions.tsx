import React from 'react';

import Image from 'next/image';

import { useState } from 'react';

import styles from '@/styles/airtime-and-data.module.scss';

import MTN from '@/../public/images/mtn-logo.jpg';
import GLO from '@/../public/images/glo-logo.jpg';
import Airtel from '@/../public/images/airtel-logo.jpg';
import NineMobile from '@/../public/images/9mobile-logo.png';

type Props = {};

const airtimeOptions = [MTN, GLO, Airtel, NineMobile];

export default function AirtimeOptions({}: Props) {
  const [activeOption, setActiveOption] = useState<any>('');

  return (
    <div className={styles['airtime--options__container']}>
      {airtimeOptions.map((el: any, index: number) => (
        <div
          key={index}
          className={`${styles['airtime--option']} ${
            activeOption === index
              ? styles['active--option']
              : styles['non--active__option']
          }`}
          onClick={() => setActiveOption(index)}
        >
          <Image src={el} alt='icon' />
        </div>
      ))}
    </div>
  );
}
