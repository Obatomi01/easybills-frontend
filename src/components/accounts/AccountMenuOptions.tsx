import React from 'react';

import styles from '@/styles/accounts.module.scss';

import Account from '@/../public/icon/bank-account.png';
import History from '@/../public/icon/account-history.png';
import Statement from '@/../public/icon/statement.png';
import AccountMenuOption from './AccountMenuOption';

type Props = {};

type MenuOptionsProps = {
  imgSrc: any;
  title: string;
  description: string;
  linkTo: string;
};

const menuOptions: MenuOptionsProps[] = [
  {
    imgSrc: Account,
    description: 'Check your account information',
    title: 'Account Information',
    linkTo: '/accounts/account-info',
  },
  {
    imgSrc: History,
    description: 'Check your account history',
    title: 'Account History',
    linkTo: '/transaction-history',
  },
  {
    imgSrc: Statement,
    title: 'Statement of Account',
    description: 'Request for statement of account',
    linkTo: '/accounts/statement-of-account',
  },
];

export default function AccountMenuOptions({}: Props) {
  return (
    <section className={styles['account--menu__container']}>
      {menuOptions.map((el: MenuOptionsProps, index: number) => (
        <AccountMenuOption
          key={index}
          imgSrc={el.imgSrc}
          description={el.description}
          title={el.title}
          linkTo={el.linkTo}
        />
      ))}
    </section>
  );
}
