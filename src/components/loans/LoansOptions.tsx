import React from 'react';

import styles from '@/styles/loans.module.scss';
import LoansOption from './LoansOption';

import DeviceLoan from '@/../public/icon/device-loans.png';
import Target from '@/../public/icon/target.png';
import QuickLoan from '@/../public/icon/quick-loans.png';
import SMELoan from '@/../public/icon/sme.png';
import PayDayLoan from '@/../public/icon/salary-loans.png';

type Props = {};

type LoanOptionsProps = {
  title: string;
  imgSrc: any;
};

const loanOptions: LoanOptionsProps[] = [
  {
    title: 'Device Loans',
    imgSrc: DeviceLoan,
  },
  {
    title: 'Target Loans',
    imgSrc: Target,
  },
  {
    title: 'Quick Loans',
    imgSrc: QuickLoan,
  },
  {
    title: 'SME Loans',
    imgSrc: SMELoan,
  },
  {
    title: 'Pay Day Loans',
    imgSrc: PayDayLoan,
  },
];

export default function LoansOptions({}: Props) {
  return (
    <div className={styles['loans--options']}>
      {loanOptions.map((el: LoanOptionsProps, index: number) => (
        <LoansOption title={el.title} imgSrc={el.imgSrc} key={index} />
      ))}
    </div>
  );
}
