import React from 'react';
import { useTranslation } from 'react-i18next';
import './Note.css';

export default function Note({ children }) {
  const { t } = useTranslation();
  return (
    <div className="note">
      {children && <strong>{t('Note')}:</strong>}
      <br />
      {children}
    </div>
  );
}
