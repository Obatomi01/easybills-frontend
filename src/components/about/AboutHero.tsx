import React from 'react';

import AboutImage from '@/../public/images/about.jpg';

import OtherPagesHero from '../general/OtherPagesHero';

type Props = {};

export default function AboutHero({}: Props) {
  return (
    <OtherPagesHero
      imgSrc={AboutImage}
      blackDescriptionText='We are Transforming Transactions:'
      colouredDescriptionText='Effortless Bill Payments for Everyone'
    />
  );
}
