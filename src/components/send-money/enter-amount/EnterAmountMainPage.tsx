'use client';

import React from 'react';
import Link from 'next/link';

import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useRouter } from 'next/navigation';

import styles from '@/styles/enter-amount.module.scss';
import { getCookie } from 'cookies-next';

import { useSearchParams } from 'next/navigation';
import TransferReceiver from './TransferReceiver';
import DashboardMenu from '@/components/general/DashboardMenu';
import TransferSender from './TransferSender';
import TransferDetailsContainer from '../TransferDetailsContainer';
import { useClientIsLoggedIn } from '@/components/clientSideAuth';
import Login from '@/app/login/page';

type Props = {};

export default function EnterAmountMainPage({}: Props) {
  const searchParams = useSearchParams();
  useClientIsLoggedIn();

  const bank = searchParams.get('bank');
  const accountNumber = searchParams.get('accountNumber');
  const accountName = searchParams.get('accountName');

  return (
    <section className={styles['enter--amount__container']}>
      <DashboardMenu />
      <TransferDetailsContainer
        linkTo={`/send-money/enter-amount/confirm-pin?accountNumber=${accountNumber}&accountName=${accountName}&bank=${bank}`}
        confirmPin={false}
      />
    </section>
  );
}
