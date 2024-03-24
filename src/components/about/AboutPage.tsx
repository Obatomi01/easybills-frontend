'use client';

import React from 'react';
import HomeHeader from '../general/HomeHeader';
import AboutHero from './AboutHero';
import Mission from './Mission';
import Workers from './Workers';
import GetStarted from '../general/GetStarted';
import Footer from '../general/Footer';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function AboutPage({}: Props) {
  useResetCookies();

  return (
    <section>
      <HomeHeader />
      <AboutHero />
      <Mission />
      <Workers />
      <GetStarted />
      <Footer />
    </section>
  );
}
