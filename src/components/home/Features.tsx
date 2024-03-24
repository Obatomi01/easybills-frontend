import React from 'react';

import { Bounce } from 'react-reveal';

import styles from '@/styles/home/home.module.scss';

import BillManagement from '@/../public/images/bill-management.jpg';
import MultipleMethods from '@/../public/images/multiple-payment-methods.jpg';
import SecuredTransaction from '@/../public/images/secured-transaction.jpg';
import CustomerService from '@/../public/images/customer-service.jpg';
import Integration from '@/../public/images/Integration-with-Bank-Accounts.jpg';
import Feature from './Feature';

type Props = {};

export default function Features({}: Props) {
  return (
    <section className={styles['features--section__container']}>
      <Bounce top>
        <h2 className='text-center text-6xl font-semibold mb-12'>
          Key Offerings
        </h2>
      </Bounce>

      <div className={styles['features--container']}>
        <Feature
          imgSrc={BillManagement}
          description='Efficiently manage all bills in one place. Track, organize, and schedule payments for utilities, subscriptions, rent, and more, ensuring timely settlement.'
          featureTitle='Bills Management'
        />
        <Feature
          imgSrc={MultipleMethods}
          description='Enjoy flexibility with various payment options. Pay bills using credit/debit cards, bank transfers, digital wallets, or other preferred payment methods.'
          featureTitle='Multiple Payment Methods'
        />
        <Feature
          imgSrc={SecuredTransaction}
          description='Ensure secure transactions. Benefit from encrypted connections and robust security measures, safeguarding personal and financial information.'
          featureTitle='Secure Transactions'
        />
        <Feature
          imgSrc={CustomerService}
          description='Receive prompt assistance. Access customer support services to address queries, resolve issues, or seek guidance on bill-related matters.'
          featureTitle='Customer Support Assistance'
        />
        <Feature
          imgSrc={Integration}
          description='Seamless integration with bank accounts. Link accounts for direct payments, transaction syncing, and real-time balance updates for improved financial control.'
          featureTitle='Integration with Bank Accounts'
        />
      </div>
    </section>
  );
}
