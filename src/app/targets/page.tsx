import React from 'react';

import GoalsMainPage from '@/components/targets/GoalsMainPage';
import AuthUser from '@/components/AuthUser';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <GoalsMainPage />
    </main>
  );
}
