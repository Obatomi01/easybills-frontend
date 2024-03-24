import React from 'react';
import styles from '@/styles/dashboard.module.scss';

type History = {
  date: string;
  name: string;
  type: string;
  amount: string;
  isDebit: boolean;
};

type Props = {
  userTransactionHistory: History[];
};

export default function TransactionTable({ userTransactionHistory }: Props) {
  return (
    <div className={`hidden md:flex ${styles['transaction--contents']}`}>
      <h4 className='text-3xl font-semibold'>Latest Transactions</h4>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>

          {userTransactionHistory.map((el: History, index: number) => (
            <tr key={index}>
              <td>{el.date}</td>
              <td>{el.name}</td>
              <td>{el.type}</td>
              <td className={el.isDebit ? styles['debit'] : styles['credit']}>
                {el.isDebit ? '-' : '+'}#{el.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
