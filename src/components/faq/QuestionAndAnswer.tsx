import React from 'react';

import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/faq.module.scss';

import ShowIcon from '@/../public/icon/plus.png';
import HideIcon from '@/../public/icon/close.png';

type Props = {
  question: string;
  answer: string;
};

export default function QuestionAndAnswer({ question, answer }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className={`${styles['part--container']} ${
        !showAnswer ? '' : styles['show--answer']
      }`}
    >
      <div className={styles['contents--container']}>
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className={`${styles['question--container']} ${
            showAnswer ? '' : styles['show--answer']
          }`}
        >
          <h4 className='text-4xl font-bold'>{question}</h4>
        </div>

        <div
          className={`${styles['answer--container']} ${
            showAnswer ? styles['show--answer'] : ''
          }`}
        >
          <h4 className='text-3xl leading-relaxed'>{answer}</h4>
        </div>
      </div>
      <span className={styles['icon--container']}>
        <Image
          src={!showAnswer ? ShowIcon : HideIcon}
          alt='icon'
          onClick={() => setShowAnswer(!showAnswer)}
          className={showAnswer ? styles['hide--icon'] : styles['show--icon']}
        />
      </span>
    </div>
  );
}
