import React from 'react';

import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';

import styles from '@/styles/faq.module.scss';
import QuestionAndAnswer from './QuestionAndAnswer';

type Props = {};

type Question = {
  question: string;
  answer: string;
};

const BillingQuestions: Question[] = [
  {
    question: 'How do I add a new biller to my account?',
    answer:
      'To add a new biller, log in to your account, navigate to the "Add Biller" or "Manage Billers" section, enter the biller details (such as account number and biller name), and follow the prompts to verify and add the biller.',
  },
  {
    question: 'Can I set up automatic payments for my bills?',
    answer:
      'Yes, you can set up recurring payments for bills. After logging in, go to the "Automatic Payments" or "Recurring Payments" section, select the biller and payment frequency, then set the payment amount and duration.',
  },
  {
    question:
      'What happens if I make a payment to the wrong biller or account?',
    answer:
      'Contact our customer support immediately with transaction details. Depending on the situation, we will assist in stopping the payment or facilitate the process to rectify the payment to the correct account.',
  },
  {
    question: 'Is there a way to view my payment history?',
    answer:
      'Yes, your payment history is available in the "Payment History" or "Transaction History" section of your account. You can view past payments, their dates, amounts, and transaction IDs.',
  },
];
const SecurityAndPrivacy: Question[] = [
  {
    question: 'How secure are my payment transactions on this platform?',
    answer:
      'We employ industry-standard encryption protocols to safeguard your payment information. Additionally, our platform undergoes regular security audits to ensure robust protection.',
  },
  {
    question: ' Can I enable two-factor authentication for my account?',
    answer:
      'Yes, you can enable two-factor authentication (2FA) in your account settings. This adds an extra layer of security by requiring a verification code in addition to your password during login.',
  },
  {
    question:
      'What measures are in place to protect my personal and financial data?',
    answer:
      'We adhere to strict data protection policies and comply with relevant regulations. Your data is encrypted, and access is restricted to authorized personnel only.',
  },
  {
    question: 'How do I recognize fraudulent biller or payment requests?',
    answer:
      'Always verify the legitimacy of billers and payment requests. Check for official contact information, review statements, and avoid sharing sensitive details via unsolicited emails or calls claiming to be from our platform.',
  },
];
const AccountManagement: Question[] = [
  {
    question: 'Can I schedule payments in advance?',
    answer:
      ' Yes, you can schedule payments in advance. Choose the biller, select the payment date, and complete the payment process. The payment will be processed on the specified date.',
  },
  {
    question: 'What should I do if I forget my account password?',
    answer:
      ' Click on the "Forgot Password" link on the login page. Follow the instructions to reset your password via email or text verification.',
  },
  {
    question: 'How can I update my billing or contact information?',
    answer:
      'Go to the "Profile" or "Account Settings" section after logging in. From there, you can update your billing address, contact number, and other relevant information.',
  },
  {
    question:
      'Is there a limit to the number of billers I can add to my account?',
    answer:
      'No, there is not a fixed limit on the number of billers you can add to your account. You can add multiple billers based on your needs and manage them conveniently.',
  },
];

export default function QuestionCategories({}: Props) {
  const categoriesContainer1 = useRef<any>();
  const categoriesContainer2 = useRef<any>();
  const categoriesContainer3 = useRef<any>();

  useEffect(() => {
    const containers = [
      categoriesContainer1.current,
      categoriesContainer2.current,
      categoriesContainer3.current,
    ];

    gsap.fromTo(
      containers,
      { yPercent: 50 },
      { yPercent: 0, opacity: 1, delay: 0.1, duration: 2 }
    );
  }, []);

  return (
    <section className={styles['question--categories']}>
      <div className={styles['question--category']} ref={categoriesContainer1}>
        <h2>Billing Process</h2>
        <div className={styles['category--part__container']}>
          {BillingQuestions.map((el: Question, index: number) => (
            <QuestionAndAnswer
              key={index}
              question={el.question}
              answer={el.answer}
            />
          ))}
        </div>
      </div>

      <div className={styles['question--category']} ref={categoriesContainer2}>
        <h2>Security and Privacy</h2>
        <div className={styles['category--part__container']}>
          {SecurityAndPrivacy.map((el: Question, index: number) => (
            <QuestionAndAnswer
              key={index}
              question={el.question}
              answer={el.answer}
            />
          ))}
        </div>
      </div>

      <div className={styles['question--category']} ref={categoriesContainer3}>
        <h2>Account Management</h2>
        <div className={styles['category--part__container']}>
          {AccountManagement.map((el: Question, index: number) => (
            <QuestionAndAnswer
              key={index}
              question={el.question}
              answer={el.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
