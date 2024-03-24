import React from 'react';

import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';

import styles from '@/styles/terms-and-policy.module.scss';

type Props = {};

export default function PolicyTexts({}: Props) {
  const policyContainer = useRef<any>();

  useEffect(() => {
    gsap.fromTo(
      policyContainer.current,
      { yPercent: 50 },
      { yPercent: 0, opacity: 1, delay: 0.1, duration: 2 }
    );
  }, []);

  return (
    <div className={styles['policy--container']} ref={policyContainer}>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam
        debitis fugiat, non eaque perspiciatis tempore molestias asperiores, et
        vero voluptate expedita maiores distinctio, quis tenetur. Aspernatur
        beatae enim quasi! Tempore minima sed, dignissimos, modi voluptate, eos
        fuga dolorem omnis qui cum placeat? Delectus vero expedita dignissimos
        atque quisquam aperiam doloremque libero!
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim
        eius ratione ad, ea ipsum nostrum rem natus praesentium ex excepturi,
        alias voluptate id sapiente veniam voluptatum numquam? Quae, error?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel itaque
        magnam cupiditate harum obcaecati, dolores voluptate repellendus natus
        nemo aliquid eaque eius possimus. Quos, sed atque doloremque excepturi
        assumenda blanditiis?
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga
        expedita quidem ipsa facilis ipsum eligendi aliquam blanditiis quae
        dolore asperiores dicta repellat deserunt, impedit perferendis labore ut
        non vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
        sed necessitatibus reiciendis, quo architecto veniam voluptatibus ea
        sapiente praesentium ipsa eum a ratione officia quae mollitia ducimus
        fuga odio tenetur.
      </p>
      <p className='text-2xl mb-12'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa mollitia culpa enim cum nostrum odio corporis! Sequi aliquid alias
        quis voluptatum, ipsa repudiandae totam libero tenetur optio magni
        eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        deleniti deserunt excepturi reprehenderit labore? Facere consequatur quo
        distinctio in dignissimos nesciunt ipsam dicta assumenda, eligendi
        quisquam unde modi, perferendis culpa!
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam
        debitis fugiat, non eaque perspiciatis tempore molestias asperiores, et
        vero voluptate expedita maiores distinctio, quis tenetur. Aspernatur
        beatae enim quasi! Tempore minima sed, dignissimos, modi voluptate, eos
        fuga dolorem omnis qui cum placeat? Delectus vero expedita dignissimos
        atque quisquam aperiam doloremque libero!
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim
        eius ratione ad, ea ipsum nostrum rem natus praesentium ex excepturi,
        alias voluptate id sapiente veniam voluptatum numquam? Quae, error?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel itaque
        magnam cupiditate harum obcaecati, dolores voluptate repellendus natus
        nemo aliquid eaque eius possimus. Quos, sed atque doloremque excepturi
        assumenda blanditiis?
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga
        expedita quidem ipsa facilis ipsum eligendi aliquam blanditiis quae
        dolore asperiores dicta repellat deserunt, impedit perferendis labore ut
        non vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
        sed necessitatibus reiciendis, quo architecto veniam voluptatibus ea
        sapiente praesentium ipsa eum a ratione officia quae mollitia ducimus
        fuga odio tenetur.
      </p>
      <p className='text-2xl mb-12'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa mollitia culpa enim cum nostrum odio corporis! Sequi aliquid alias
        quis voluptatum, ipsa repudiandae totam libero tenetur optio magni
        eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        deleniti deserunt excepturi reprehenderit labore? Facere consequatur quo
        distinctio in dignissimos nesciunt ipsam dicta assumenda, eligendi
        quisquam unde modi, perferendis culpa!
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam
        debitis fugiat, non eaque perspiciatis tempore molestias asperiores, et
        vero voluptate expedita maiores distinctio, quis tenetur. Aspernatur
        beatae enim quasi! Tempore minima sed, dignissimos, modi voluptate, eos
        fuga dolorem omnis qui cum placeat? Delectus vero expedita dignissimos
        atque quisquam aperiam doloremque libero!
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim
        eius ratione ad, ea ipsum nostrum rem natus praesentium ex excepturi,
        alias voluptate id sapiente veniam voluptatum numquam? Quae, error?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel itaque
        magnam cupiditate harum obcaecati, dolores voluptate repellendus natus
        nemo aliquid eaque eius possimus. Quos, sed atque doloremque excepturi
        assumenda blanditiis?
      </p>
      <p className='text-2xl mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga
        expedita quidem ipsa facilis ipsum eligendi aliquam blanditiis quae
        dolore asperiores dicta repellat deserunt, impedit perferendis labore ut
        non vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
        sed necessitatibus reiciendis, quo architecto veniam voluptatibus ea
        sapiente praesentium ipsa eum a ratione officia quae mollitia ducimus
        fuga odio tenetur.
      </p>
      <p className='text-2xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsa mollitia culpa enim cum nostrum odio corporis! Sequi aliquid alias
        quis voluptatum, ipsa repudiandae totam libero tenetur optio magni
        eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        deleniti deserunt excepturi reprehenderit labore? Facere consequatur quo
        distinctio in dignissimos nesciunt ipsam dicta assumenda, eligendi
        quisquam unde modi, perferendis culpa!
      </p>
    </div>
  );
}
