import React from 'react';

import Image from 'next/image';

import styles from '@/styles/contact-us.module.scss';
import ContactForm from './ContactForm';

import ContactImage from '@/../public/images/contact-us.jpg';
import CompanyDetails from './CompanyDetails';

type Props = {};

export default function ContactFormContainer({}: Props) {
  return (
    <section className={styles['contact--form__container']}>
      <div className={styles['contact--form__contents']}>
        <span className={`block md:hidden ${styles['image--container']}`}>
          <Image src={ContactImage} alt='contact us' />
        </span>
        <ContactForm />
        <div className={styles['additional--details']}>
          <span className={`hidden md:flex ${styles['image--container']}`}>
            <Image src={ContactImage} alt='contact us' />
          </span>
          <CompanyDetails />
        </div>
      </div>
    </section>
  );
}
