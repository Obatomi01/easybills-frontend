'use client';

import React from 'react';
import HomeHeader from '../general/HomeHeader';
import Footer from '../general/Footer';
import PolicyTexts from '../general/PolicyTexts';
import { useResetCookies } from '../clientSideAuth';

type Props = {};

export default function TermsPage({}: Props) {
  useResetCookies();

  return (
    <>
      <HomeHeader />
      <PolicyTexts />
      <Footer />
    </>
  );
}
