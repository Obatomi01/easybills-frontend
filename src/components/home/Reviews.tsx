import React from 'react';
import Image from 'next/image';

import styles from '@/styles/home/home.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowRight from '@/../public/icon/right-arrow.png';
import ArrowLeft from '@/../public/icon/left-arrow.png';

import Customer_1 from '@/../public/images/customer-1.jpg';
import Customer_2 from '@/../public/images/customer-2.jpg';
import Customer_3 from '@/../public/images/customer-3.jpg';
import Customer_4 from '@/../public/images/customer-4.jpg';

import { Bounce } from 'react-reveal';

import Review from './Review';

type Props = {};

type CustomerReviews = {
  name: string;
  imgSrc: any;
  id: number;
  review: string;
};

const ReviewsObj: CustomerReviews[] = [
  {
    name: 'Daniel Kim',
    id: 1,
    imgSrc: Customer_1,
    review:
      'Being a busy professional, this bill payment platform has been a lifesaver. I can organize and pay bills on-the-go, making my financial management a lot smoother.',
  },
  {
    name: 'John Rodriguez',
    id: 2,
    imgSrc: Customer_2,
    review:
      "I've been using this platform for my online store's billing needs. The integration with various payment methods and the insights into sales have significantly improved my business's efficiency.",
  },
  {
    name: 'Sophia Thompson',
    id: 3,
    imgSrc: Customer_3,
    review:
      'As a freelancer, managing payments used to be a headache. This platform changed the game for me. Now, I easily send invoices and track payments hassle-free. Love it!',
  },
  {
    name: 'David Pate',
    id: 4,
    imgSrc: Customer_4,
    review:
      'I have been using this bill payment platform for months now, and it has simplified my life! Paying bills is a breeze, and the reminders ensure I never miss a due date. Highly recommended!',
  },
];

export default function Reviews({}: Props) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Image
        src={ArrowRight}
        alt='icon'
        style={{
          width: '4rem',
          height: '4rem',
          right: '0%',
        }}
        onClick={onClick}
        className={`${className} ${styles['next--arrow']}`}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Image
        src={ArrowLeft}
        alt='icon'
        style={{
          width: '4rem',
          height: '4rem',
          left: '0%',
        }}
        onClick={onClick}
        className={`${className} ${styles['prev--arrow']}`}
      />
    );
  }

  const settings = {
    fade: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: 'reviews--dots slick-dots',
  };

  return (
    <section className={styles['reviews--container']}>
      <Bounce top>
        <h2 className='text-center text-5xl font-semibold mb-12'>Reviews</h2>
      </Bounce>

      <div className={styles['swiper--container']}>
        <Slider {...settings}>
          {ReviewsObj.map((el: CustomerReviews, index: number) => (
            <div key={index}>
              <Review
                imgSrc={el.imgSrc}
                review={el.review}
                id={el.id}
                name={el.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
