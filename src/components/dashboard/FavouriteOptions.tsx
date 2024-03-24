import React from 'react';

import styles from '@/styles/dashboard.module.scss';
import DashboardTopContainer from '../general/DashboardTopContainer';
import DashboardContentCard from '../general/DashboardContentCard';
import FavouriteOption from './FavouriteOption';

import Account from '@/../public/icon/bank-account.png';
import Loans from '@/../public/icon/loan.png';
import AirtimeAndData from '@/../public/icon/airtime-and-data.png';
import SendMoney from '@/../public/icon/send-money.png';
import Targets from '@/../public/icon/target.png';

type Props = {};

type Options = {
  imgSrc: any;
  title: string;
  linkTo: string;
};

const favouriteOptionsArray: Options[] = [
  {
    imgSrc: SendMoney,
    title: 'Send Money',
    linkTo: '/send-money',
  },
  {
    imgSrc: AirtimeAndData,
    title: 'Airtime and Data',
    linkTo: '/airtime-and-data',
  },
  {
    imgSrc: Loans,
    title: 'Loans',
    linkTo: '/loans',
  },
  {
    imgSrc: Account,
    title: 'Accounts',
    linkTo: '/accounts',
  },
  {
    imgSrc: Account,
    title: 'Create Account',
    linkTo: '/create-new-account',
  },
  {
    imgSrc: Targets,
    title: 'Targets',
    linkTo: '/targets',
  },
];

export default function FavouriteOptions({}: Props) {
  return (
    <section className={styles['favourite--options']}>
      <DashboardTopContainer />
      <div className={styles['favourite--bottom__container']}>
        <DashboardContentCard>
          <div className={styles['favourite--option__container']}>
            {favouriteOptionsArray.map((el: Options, index: number) => (
              <FavouriteOption
                key={index}
                imgSrc={el.imgSrc}
                title={el.title}
                linkTo={el.linkTo}
              />
            ))}
          </div>
        </DashboardContentCard>
      </div>
    </section>
  );
}
