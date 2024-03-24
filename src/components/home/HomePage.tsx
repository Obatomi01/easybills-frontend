'use client';

import React from 'react';

import { Fade } from 'react-reveal';

import HomeHeader from '../general/HomeHeader';
import Hero from './Hero';
import Offers from './Offers';
import Features from './Features';
import Reviews from './Reviews';
import GetStarted from '../general/GetStarted';
import Footer from '../general/Footer';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function HomePage({}: Props) {
  useResetCookies();

  return (
    <section>
      <HomeHeader />
      <Hero />
      <Offers />
      <Features />
      <Reviews />
      <GetStarted />
      <Footer />
    </section>
  );
}
