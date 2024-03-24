import React from 'react';

import styles from '@/styles/get-help.module.scss';

import UserIcon from '@/../public/icon/user.png';
import ContactIcon from '@/../public/icon/communicate.png';
import HelpIcon from '@/../public/icon/help-desk.png';
import HelpOption from './HelpOption';

type Props = {};

type HelpOptions = {
  imgSrc: any;
  title: string;
  description: string;
  btnText: string;
  linkTo: string;
};

const helpOptions: HelpOptions[] = [
  {
    imgSrc: UserIcon,
    title: 'Account-Specific Support?',
    description: 'Access by Logging In',
    btnText: 'Log In',
    linkTo: '/login',
  },
  {
    imgSrc: ContactIcon,
    title: 'Engage with Us',
    description: 'Share Your Questions or Comments',
    btnText: 'Contact Us',
    linkTo: '/contact-us',
  },
  {
    imgSrc: HelpIcon,
    title: 'Insights and Solutions',
    description: 'Connect with the Easybills Team',
    btnText: 'Help Center',
    linkTo: '/support/faq',
  },
];

export default function HelpOptions({}: Props) {
  return (
    <section className={styles['help--options__container']}>
      {helpOptions.map((el: HelpOptions) => (
        <HelpOption
          key={el.title}
          imgSrc={el.imgSrc}
          description={el.description}
          title={el.title}
          btnText={el.btnText}
          linkTo={el.linkTo}
        />
      ))}
    </section>
  );
}
