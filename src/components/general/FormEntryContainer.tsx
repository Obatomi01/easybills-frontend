'use client';

import React from 'react';

import Image from 'next/image';
import HidePasswordIcon from '@/../public/icon/hide.png';
import ShowPasswordIcon from '@/../public/icon/visible.png';

import styles from '@/styles/login/login.module.scss';
import { Field, ErrorMessage } from 'formik';

type Props = {
  title: string;
  fieldName: string;
  placeholderTitle: string;

  passwordField?: boolean;
  password?: boolean;
  onShowPassword?: () => void;
};

export default function FormEntryContainer({
  title,
  placeholderTitle,
  fieldName,
  passwordField,
  password,
  onShowPassword,
}: Props) {
  return (
    <div className={styles['signup--entry__container']}>
      <p className='text-2xl font-semibold'>{title}</p>
      <div
        style={{
          position: 'relative',

          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Field
          name={fieldName}
          placeholder={placeholderTitle}
          type={passwordField && !password ? 'password' : 'text'}
        />
        {passwordField && (
          <Image
            onClick={onShowPassword}
            src={!password ? ShowPasswordIcon : HidePasswordIcon}
            alt='icon'
            className={styles['password--icon']}
          />
        )}
      </div>
      <ErrorMessage
        name={fieldName}
        className={styles['error--message']}
        component='p'
      />
    </div>
  );
}
