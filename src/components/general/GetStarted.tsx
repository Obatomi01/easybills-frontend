import React from 'react';
import Image from 'next/image';

import { Fade } from 'react-reveal';

import styles from '@/styles/general.module.scss';

import GetStartedImage from '@/../public/images/get-started.jpg';
import Link from 'next/link';

type Props = {};

export default function GetStarted({}: Props) {
  return (
    <Fade bottom>
      <div className={styles['get--started__container']}>
        <Image src={GetStartedImage} alt='get-started' />
        <div className={styles['description--container']}>
          <p className='text-3xl'>
            Take control of your bills effortlessly with our intuitive platform.
            Say goodbye to late payments and overwhelming invoices. Get started
            today and experience a streamlined way to manage your finances
            hassle-free.
          </p>
          <button>
            <Link href={'/signup'}>
              <h3 className='text-3xl'>Get Started</h3>
            </Link>
          </button>
        </div>
      </div>
    </Fade>
  );
}
