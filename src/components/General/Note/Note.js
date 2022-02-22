import React from 'react';
import { useTranslation } from 'react-i18next';
import './Note.css';
export default function Note({ content }) {
  const { t } = useTranslation();
  return (
    <div className="note">
      <strong>{t('Note')}:</strong>
      {content}
    </div>
  );
}
