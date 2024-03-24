import React from 'react';

import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowRight from '@/../public/icon/right-arrow.png';
import ArrowLeft from '@/../public/icon/left-arrow.png';

import styles from '@/styles/dashboard.module.scss';
import DashboardTopContainer from '../general/DashboardTopContainer';
import DashboardContentCard from '../general/DashboardContentCard';

import News1 from '@/../public/images/news-1.jpg';
import News2 from '@/../public/images/news-2.jpg';
import News3 from '@/../public/images/news-3.jpg';
import News4 from '@/../public/images/news-4.jpg';
import News5 from '@/../public/images/news-5.jpg';

import { register } from 'swiper/element/bundle';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';
import NewsItem from './NewsItem';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}

type Props = {};

type NewsProps = {
  title: string;
  imgSrc: any;
  headline: any;
};

type ArrowProps = {
  className: string;
  style?: any;
  onClick?: any;
};

const latestNews: NewsProps[] = [
  {
    title: 'Stock Market Surge',
    imgSrc: News1,
    headline: 'Dow Jones Hits Record High Amidst Tech Rally',
  },
  {
    title: 'Oil and Energy Sector Update',
    imgSrc: News2,
    headline:
      'Oil Prices Soar Amidst Supply Chain Constraints and Geopolitical Tensions',
  },
  {
    title: 'Global Economic Outlook',
    imgSrc: News3,
    headline: 'World Bank Projects Robust Growth in Emerging Markets for 2023',
  },
  {
    title: 'Cryptocurrency Market Update',
    imgSrc: News4,
    headline: 'Bitcoin Reaches New All-Time High, Surpassing $70,000',
  },
  {
    title: 'Real Estate Market Trends',
    imgSrc: News5,
    headline:
      'Housing Market Shift: Urban Exodus Spurs Suburban Real Estate Boom',
  },
];

register();
export default function News({}: Props) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Image
        src={ArrowRight}
        alt='icon'
        style={{
          width: '4rem',
          height: '4rem',
        }}
        onClick={onClick}
        className={`${className}
        ${styles['next--arrow']}`}
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
        }}
        onClick={onClick}
        className={className}
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
    arrows: false,
  };

  return (
    <section className={styles['news--container']}>
      <DashboardTopContainer />
      <div className={styles['news--bottom__container']}>
        <DashboardContentCard>
          <div className={styles['news--contents__container']}>
            <h4 className='text-3xl font-semibold mb-4'>News</h4>
            <Slider {...settings}>
              {latestNews.map((el: NewsProps, index: number) => (
                <NewsItem
                  key={index}
                  title={el.title}
                  headline={el.headline}
                  imgSrc={el.imgSrc}
                />
              ))}
            </Slider>
          </div>
        </DashboardContentCard>
      </div>
    </section>
  );
}
