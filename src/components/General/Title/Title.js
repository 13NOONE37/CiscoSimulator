import React from 'react';
import { useTranslation } from 'react-i18next';
import './Title.css';
export default function Title({ content, addClass }) {
  const { t } = useTranslation();
  const classes = ['BasicTitle', addClass].join(' ');
  return <h1 className={classes}>{t(content)}</h1>;
}
