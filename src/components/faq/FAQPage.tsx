'use client';

import React from 'react';
import HomeHeader from '../general/HomeHeader';
import Footer from '../general/Footer';
import FAQHero from './FAQHero';
import QuestionCategories from './QuestionCategories';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function FAQPage({}: Props) {
  useResetCookies();

  return (
    <>
      <HomeHeader />
      <FAQHero />
      <QuestionCategories />
      <Footer />
    </>
  );
}
