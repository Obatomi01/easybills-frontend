import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/get-help.module.scss';

type Props = {
  imgSrc: any;
  title: string;
  description: string;
  btnText: string;
  linkTo: string;
};

export default function HelpOption({
  imgSrc,
  title,
  description,
  btnText,
  linkTo,
}: Props) {
  return (
    <div className={styles['help--option']}>
      <Image src={imgSrc} alt='icon' />
      <h3 className='text-4xl font-bold mb-3'>{title}</h3>
      <p className={`text-2xl font-semibold mb-6 ${styles['description']}`}>
        {description}
      </p>
      <button>
        <Link href={linkTo}>
          <p className='text-2xl font-bold'>{btnText}</p>
        </Link>
      </button>
    </div>
  );
}
