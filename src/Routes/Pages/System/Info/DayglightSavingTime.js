import React from 'react';
import 'css/System/DaylightSavingTime.css';

export default function DayglightSavingTime({ t, config }) {
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('DeviceDescription')}</div>
        <form className="tplinkFormBase1"></form>
        <div className="note">
          <strong>{t('Note')}:</strong>
          <br />
        </div>
      </div>
    </article>
  );
}
