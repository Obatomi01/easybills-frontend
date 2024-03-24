'use client';

import React from 'react';

import GetHelpImage from '@/../public/images/get-help.jpg';

import HomeHeader from '../general/HomeHeader';
import OtherPagesHero from '../general/OtherPagesHero';
import Footer from '../general/Footer';
import HelpOptions from './HelpOptions';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function GetHelpPage({}: Props) {
  useResetCookies();

  return (
    <>
      <HomeHeader />
      <OtherPagesHero
        imgSrc={GetHelpImage}
        blackDescriptionText='Got A Question? '
        colouredDescriptionText="Let's talk"
      />
      <HelpOptions />
      <Footer />
    </>
  );
}
