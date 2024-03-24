import React from 'react';

import styles from '@/styles/loans.module.scss';

import Emergency from '@/../public/icon/emergency.png';
import EducationSavings from '@/../public/icon/tuition.png';
import DebtRepayment from '@/../public/icon/debt-repayment.png';
import Retirement from '@/../public/icon/retirement.png';
import Travel from '@/../public/icon/travel-and-tourism.png';
import LoansOption from '../loans/LoansOption';

type Props = {};

type GoalOptionsProps = {
  title: string;
  imgSrc: any;
};

const goalOptions: GoalOptionsProps[] = [
  {
    title: 'Emergency Fund',
    imgSrc: Emergency,
  },
  {
    title: 'Retirement Savings',
    imgSrc: Retirement,
  },
  {
    title: 'Education Savings',
    imgSrc: EducationSavings,
  },
  {
    title: 'Debt Repayment',
    imgSrc: DebtRepayment,
  },
  {
    title: 'Travel and Tourism',
    imgSrc: Travel,
  },
];

export default function Goals({}: Props) {
  return (
    <div className={styles['loans--options']}>
      {goalOptions.map((el: GoalOptionsProps, index: number) => (
        <LoansOption title={el.title} imgSrc={el.imgSrc} key={index} />
      ))}
    </div>
  );
}
