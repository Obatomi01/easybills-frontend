import React from 'react';

import Image from 'next/image';

import { useState } from 'react';

import HideIcon from '@/../public/icon/hide.png';
import ShowIcon from '@/../public/icon/visible.png';

import styles from '@/styles/dashboard.module.scss';
import DashboardTopContainer from '../general/DashboardTopContainer';
import DashboardContentCard from '../general/DashboardContentCard';

type Props = {
  firstName: any;
};

export default function DashboardHeader({ firstName }: Props) {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className={styles['dashboard--header']}>
      <DashboardTopContainer />
      <div className={styles['profile--details__container']}>
        <DashboardContentCard>
          <div className={styles['profile--details']}>
            <div className={styles['details--container']}>
              <h4 className='text-5xl font-semibold '>Overview</h4>
              <div>
                <div className={styles['balance--container']}>
                  <p className='text-3xl font-semibold'>
                    {showBalance ? '#5,000' : '****.**'}
                  </p>
                  <Image
                    src={showBalance ? HideIcon : ShowIcon}
                    alt='icon'
                    onClick={() => setShowBalance(!showBalance)}
                  />
                </div>
                <p className='text-3xl'>Total balance</p>
              </div>
            </div>

            <div>
              <h4 className='text-3xl'>Welcome, {firstName}</h4>
            </div>
          </div>
        </DashboardContentCard>
      </div>
    </div>
  );
}
