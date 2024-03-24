import React from 'react';

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/../public/images/easybills-logo.png';
import DropIcon from '@/../public/icon/down.png';

import AboutIcon from '@/../public/icon/information-button.png';
import TermsIcon from '@/../public/icon/terms-and-conditions.png';
import PrivacyIcon from '@/../public/icon/confidential-folder.png';
import FAQIcon from '@/../public/icon/asking.png';
import HelpIcon from '@/../public/icon/customer-service.png';

import MenuIcon from '@/../public/icon/hamburger.png';
import CloseIcon from '@/../public/icon/menu-close.png';

import styles from '@/styles/home/home.module.scss';

import { gsap } from 'gsap';

type Props = {};

type PageInfo = {
  title: string;
  iconSrc: any;
  linkTo: string;
};

const CompanyObj: PageInfo[] = [
  {
    title: 'About',
    iconSrc: AboutIcon,
    linkTo: '/about',
  },
  {
    title: 'Terms',
    iconSrc: TermsIcon,
    linkTo: '/terms',
  },
  {
    title: 'Privacy and Policy',
    iconSrc: PrivacyIcon,
    linkTo: '/privacy-and-policy',
  },
];

const SupportObj: PageInfo[] = [
  {
    title: 'Get Help',
    iconSrc: HelpIcon,
    linkTo: '/get-help',
  },
  {
    title: 'FAQ',
    iconSrc: FAQIcon,
    linkTo: '/faq',
  },
];

export default function HomeHeader({}: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const [showNavOptions, setShowNavOptions] = useState(false);

  const headerRef = useRef<any>();

  useEffect(() => {
    if (showNavOptions) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    gsap.fromTo(
      headerRef.current,
      { y: -20 },
      { y: 0, delay: 0.5, opacity: 1, duration: 1 }
    );

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNavOptions]);

  return (
    <section>
      <header
        className={`${styles['home--header__container']} ${
          isSticky ? styles['home--sticky'] : ''
        }`}
        ref={headerRef}
      >
        <div className={`hidden md:flex ${styles['home--header__contents']}`}>
          <div className={styles['content--container']}>
            <div className={styles['page--container']}>
              <div className={styles['page--heading']}>
                <h3 className='text-2xl font-semibold'>Company</h3>
                <Image src={DropIcon} alt='icon' />
              </div>

              <div className={styles['pages']}>
                <h2 className='text-3xl font-semibold '>COMPANY</h2>
                {CompanyObj.map((el: PageInfo) => (
                  <Link href={`/company/${el.linkTo}`} key={el.title}>
                    <div className={styles['page']}>
                      <span>
                        <Image src={el.iconSrc} alt='icon' />
                      </span>
                      <p className='text-2xl font-semibold'>{el.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles['page--container']}>
              <div className={styles['page--heading']}>
                <h3 className='text-2xl font-semibold'>Support</h3>
                <Image src={DropIcon} alt='icon' />
              </div>

              <div className={styles['pages']}>
                <h2 className='text-3xl font-semibold '>SUPPORT</h2>
                {SupportObj.map((el: PageInfo) => (
                  <Link href={`/support/${el.linkTo}`} key={el.title}>
                    <div className={styles['page']}>
                      <span>
                        <Image src={el.iconSrc} alt='icon' />
                      </span>
                      <p className='text-2xl font-semibold'>{el.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href={'/'}>
            <Image src={Logo} alt='logo' className={styles['logo']} />
          </Link>

          <div className={styles['content--container']}>
            <Link href={'/login'}>
              <button className={styles['login--btn']}>
                <h3 className='text-2xl font-semibold'>Login</h3>
              </button>
            </Link>
            <Link href={'/signup'}>
              <button className={styles['signup--btn']}>
                <h3 className='text-2xl font-semibold'>Sign up</h3>
              </button>
            </Link>
          </div>
        </div>

        <div className={`flex md:hidden ${styles['mobile--nav']}`}>
          <div className={styles['nav--controls']}>
            <Link href={'/'}>
              <Image src={Logo} alt='icon' className={styles['logo']} />
            </Link>

            <Image
              src={MenuIcon}
              alt='icon'
              className={styles['menu']}
              onClick={() => setShowNavOptions(true)}
            />
          </div>
        </div>
      </header>

      <div
        className={`flex relative md:hidden md:absolute ${
          styles['nav--options']
        } ${
          showNavOptions
            ? styles['show--mobile__nav']
            : styles['hide--mobile__nav']
        }`}
      >
        <div className={`flex md:hidden ${styles['mobile--nav']}`}>
          <div className={styles['nav--controls']}>
            <Link href={'/'} onClick={() => setShowNavOptions(false)}>
              <Image src={Logo} alt='icon' className={styles['logo']} />
            </Link>

            <Image
              src={CloseIcon}
              alt='icon'
              className={styles['menu']}
              onClick={() => setShowNavOptions(false)}
            />
          </div>
        </div>
        <div className={styles['page--container']}>
          <div className={styles['page--heading']}>
            <h2 className='text-3xl font-semibold '>COMPANY</h2>
          </div>

          <div className={styles['pages']}>
            {CompanyObj.map((el: PageInfo) => (
              <Link
                href={`/company/${el.linkTo}`}
                key={el.title}
                onClick={() => setShowNavOptions(false)}
              >
                <div className={styles['page']}>
                  <span>
                    <Image src={el.iconSrc} alt='icon' />
                  </span>
                  <p className='text-2xl font-semibold'>{el.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles['page--container']}>
          <div className={styles['page--heading']}>
            <h2 className='text-3xl font-semibold '>SUPPORT</h2>
          </div>

          <div className={styles['pages']}>
            {SupportObj.map((el: PageInfo) => (
              <Link
                href={`/support/${el.linkTo}`}
                key={el.title}
                onClick={() => setShowNavOptions(false)}
              >
                <div className={styles['page']}>
                  <span>
                    <Image src={el.iconSrc} alt='icon' />
                  </span>
                  <p className='text-2xl font-semibold'>{el.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link href={'/login'} onClick={() => setShowNavOptions(false)}>
          <button className={styles['login--btn']}>
            <h3 className='text-2xl font-semibold'>Login</h3>
          </button>
        </Link>
        <Link href={'/signup'} onClick={() => setShowNavOptions(false)}>
          <button className={styles['signup--btn']}>
            <h3 className='text-2xl font-semibold'>Sign up</h3>
          </button>
        </Link>
      </div>
    </section>
  );
}
