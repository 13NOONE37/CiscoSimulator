import React from 'react';
import 'css/System/DaylightSavingTime.css';
import Note from 'components/General/Note/Note';
import Title from 'components/General/Title/Title';

export default function DayglightSavingTime({ t, config }) {
  return (
    <article>
      <div className="tplinkBoxBase1">
        <Title content="DeviceDescription" />
        <form className="tplinkFormBase1"></form>
        <Note />
      </div>
    </article>
  );
}
