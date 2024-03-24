import React from 'react';

import styles from '@/styles/dashboard.module.scss';
import DashboardTopContainer from '../general/DashboardTopContainer';
import DashboardContentCard from '../general/DashboardContentCard';
import TransactionTable from '../transaction-history/TransactionTable';
import TransactionMobile from '../transaction-history/TransactionMobile';

type Props = {
  mainTransactionPage?: boolean;
};

type History = {
  date: string;
  name: string;
  type: string;
  amount: string;
  isDebit: boolean;
};

const userTransactionHistory: History[] = [
  {
    date: '01/01',
    name: 'John Doe',
    type: 'Card Payment',
    amount: '2,300',
    isDebit: false,
  },
  {
    date: '01/02',
    name: 'Jane Smith',
    type: 'Online Transfer',
    amount: '1,500',
    isDebit: true,
  },
  {
    date: '01/03',
    name: 'Alice Johnson',
    type: 'Cash Withdrawal',
    amount: '800',
    isDebit: true,
  },
  {
    date: '01/04',
    name: 'Robert Williams',
    type: 'Card Payment',
    amount: '4,700',
    isDebit: false,
  },
  {
    date: '01/05',
    name: 'Ella Brown',
    type: 'Online Transfer',
    amount: '3,200',
    isDebit: true,
  },
  {
    date: '01/06',
    name: 'David Lee',
    type: 'Cash Withdrawal',
    amount: '1,000',
    isDebit: true,
  },
  {
    date: '01/07',
    name: 'Sophia Garcia',
    type: 'Card Payment',
    amount: '5,600',
    isDebit: false,
  },
  {
    date: '01/08',
    name: 'Liam Martinez',
    type: 'Online Transfer',
    amount: '2,900',
    isDebit: true,
  },
  {
    date: '01/09',
    name: 'Olivia Hernandez',
    type: 'Cash Withdrawal',
    amount: '700',
    isDebit: true,
  },
  {
    date: '01/10',
    name: 'Noah Lopez',
    type: 'Card Payment',
    amount: '3,400',
    isDebit: false,
  },
  {
    date: '01/11',
    name: 'Emma Perez',
    type: 'Online Transfer',
    amount: '1,200',
    isDebit: true,
  },
  {
    date: '01/12',
    name: 'William Adams',
    type: 'Cash Withdrawal',
    amount: '600',
    isDebit: true,
  },
  {
    date: '01/13',
    name: 'Ava Washington',
    type: 'Card Payment',
    amount: '4,100',
    isDebit: false,
  },
  {
    date: '01/14',
    name: 'James Scott',
    type: 'Online Transfer',
    amount: '2,000',
    isDebit: true,
  },
  {
    date: '01/15',
    name: 'Charlotte King',
    type: 'Cash Withdrawal',
    amount: '900',
    isDebit: true,
  },
];

export default function TransactionHistory({ mainTransactionPage }: Props) {
  return (
    <section
      className={
        !mainTransactionPage
          ? styles['transaction--briefing']
          : styles['transaction--main__page']
      }
    >
      <DashboardTopContainer />
      <div className={styles['transaction--bottom__container']}>
        <TransactionTable userTransactionHistory={userTransactionHistory} />
        <TransactionMobile userTransactionHistory={userTransactionHistory} />
      </div>
    </section>
  );
}
