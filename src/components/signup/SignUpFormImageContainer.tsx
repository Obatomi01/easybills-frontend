import React from 'react';
import Image from 'next/image';

import styles from '@/styles/login/login.module.scss';

import SignUpImage from '@/../public/images/signup.jpg';
import SignUpBtn from '../general/SignUpBtn';

type Props = {};

export default function SignUpFormImageContainer({}: Props) {
  return (
    <div className={styles['signup--image__container']}>
      <Image src={SignUpImage} alt='image' />
      <div>
        <p className='text-2xl text-slate-500 text-center w-9/12 m-auto'>
          Experience seamless transactions with cutting-edge security features,
          simplifying your payments while safeguarding your financial data. Join
          our platform for effortless, worry-free transactions!
        </p>
      </div>
    </div>
  );
}
