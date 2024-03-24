import React from 'react';

import { Bounce, Fade } from 'react-reveal';

import styles from '@/styles/about.module.scss';

import Worker1 from '@/../public/images/worker-1.jpg';
import Worker2 from '@/../public/images/worker-2.jpg';
import Worker3 from '@/../public/images/worker-3.jpg';
import Worker4 from '@/../public/images/worker-4.jpg';
import Worker5 from '@/../public/images/worker-5.jpg';
import Worker6 from '@/../public/images/worker-6.jpg';
import Worker7 from '@/../public/images/worker-7.jpg';
import Worker8 from '@/../public/images/worker-8.jpg';
import Worker9 from '@/../public/images/worker-9.jpg';
import Worker from './Worker';

type Props = {};

type WorkersProps = {
  imgSrc: any;
  position: string;
  name: string;
};

const WorkersObj: WorkersProps[] = [
  {
    imgSrc: Worker1,
    position: 'Business Development Associate',
    name: 'Jackson Lewis',
  },
  {
    imgSrc: Worker2,
    position: 'User Interface (UI) Designer',
    name: 'Ava Nguyen',
  },
  {
    imgSrc: Worker3,
    position: 'Data Analytics Specialist',
    name: 'Liam Foster',
  },
  {
    imgSrc: Worker4,
    position: 'Marketing Campaign Strategist',
    name: 'Maya Patel',
  },
  {
    imgSrc: Worker5,
    position: 'Security and Compliance Officer ',
    name: 'Ethan Wallace',
  },
  {
    imgSrc: Worker6,
    position: 'Product Development Manager',
    name: 'Olivia Ramirez',
  },
  {
    imgSrc: Worker7,
    position: 'Financial Technology Analyst',
    name: 'Harper Bennett',
  },
  {
    imgSrc: Worker8,
    position: 'Customer Experience Specialist',
    name: 'Alex Johnson',
  },
  {
    imgSrc: Worker9,
    position: 'Payment Operations Coordinator',
    name: 'Sophia Chen',
  },
];

export default function Workers({}: Props) {
  return (
    <section className={styles['workers--container']}>
      <div className={styles['description--container']}>
        <Bounce top>
          <h2 className='text-7xl font-bold mb-10'>
            Our <span className='text-amber-400'>Team</span>
          </h2>
        </Bounce>
        <Fade bottom>
          <p className='text-3xl leading-10'>
            We are a dynamic and diverse team of forward-thinking innovators,
            driven by a shared passion for empowering our customers to excel.
            Beyond our professional pursuits, we find joy in engaging activities
            such as soccer, exploring the world of music, travel adventures, and
            delving into the realm of cryptocurrency.
          </p>
        </Fade>
      </div>

      <div className={styles['workers--details__container']}>
        {WorkersObj.map((el: WorkersProps, index: number) => (
          <Worker
            imgSrc={el.imgSrc}
            position={el.position}
            name={el.name}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
