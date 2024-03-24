import React from 'react';
import styles from '@/styles/login/login.module.scss';

type Props = {
  children: any;
};

export default function SignUpBtn({ children }: Props) {
  return <div className={styles['signup--btn']}>{children}</div>;
}
