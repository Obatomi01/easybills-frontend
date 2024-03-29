import AuthUser from '@/components/AuthUser';
import SendMoneyMainPage from '@/components/send-money/SendMoneyMainPage';
import React from 'react';

type Props = {};

export default async function page({}: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLONY_ENDPOINT}/bank_list`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYLONY_SECRET_KEY}`,
      },
    }
  );

  const banksData = await res.json();
  const bankDetails = banksData.data.banks;

  // Add a select option
  bankDetails.unshift({
    name: 'Select Option',
    code: '',
  });

  const banks = bankDetails.map((el: any) => el.name);

  return (
    <main>
      <SendMoneyMainPage bankDetails={bankDetails} bankNames={banks} />
    </main>
  );
}
