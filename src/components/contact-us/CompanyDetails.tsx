import React from 'react';
import Image from 'next/image';

import styles from '@/styles/contact-us.module.scss';

import Email from '@/../public/icon/mail.png';
import Phone from '@/../public/icon/telephone.png';

type Props = {};

type CompanyDetail = {
  imgSrc: any;
  title: string;
  description: string;
};

const companyDetails: CompanyDetail[] = [
  { imgSrc: Email, title: 'Email', description: 'sample@gmail.com' },
  { imgSrc: Phone, title: 'Phone', description: '08012345678' },
];

export default function CompanyDetails({}: Props) {
  return (
    <div className={styles['company--details']}>
      {companyDetails.map((el: CompanyDetail, index: number) => (
        <div key={index} className={styles['company--detail']}>
          <span className={styles['detail--image']}>
            <Image src={el.imgSrc} alt='company detail' />
          </span>
          <div className={styles['description']}>
            <h5 className='text-3xl font-bold'>{el.title}</h5>
            <p className='text-2xl'>{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
