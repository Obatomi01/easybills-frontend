import AuthUser from '@/components/AuthUser';
import CardsMainPage from '@/components/cards/CardsMainPage';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <CardsMainPage />
    </main>
  );
}
