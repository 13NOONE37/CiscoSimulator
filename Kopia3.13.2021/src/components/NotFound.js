import React from 'react';
import 'css/NotFound.css';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="notFoundBox">
      <h1>{t('NotFound')}</h1>
      <h1>◕_◕</h1>
    </div>
  );
}
