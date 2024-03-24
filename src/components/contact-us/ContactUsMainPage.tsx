'use client';

import React from 'react';
import HomeHeader from '../general/HomeHeader';
import Footer from '../general/Footer';
import ContactFormContainer from './ContactFormContainer';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function ContactUsMainPage({}: Props) {
  useResetCookies();

  return (
    <section>
      <HomeHeader />
      <ContactFormContainer />
      <Footer />
    </section>
  );
}
