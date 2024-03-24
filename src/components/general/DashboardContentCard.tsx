import React from 'react';

import styles from '@/styles/dashboard.module.scss';

type Props = {
  children: any;
};

export default function DashboardContentCard({ children }: Props) {
  return <div className={styles['contents--container']}>{children}</div>;
}
