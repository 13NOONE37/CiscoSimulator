import React, { useContext } from 'react';
import ActivePorts from 'components/System/ActivePorts';
import InfoTable from 'components/System/InfoTable';
import 'css/ContentContainer.css';

export default function SystemInfo({ t, config, setConfig }) {
  return (
    <article>
      <ActivePorts />
      <InfoTable config={config} t={t} />
    </article>
  );
}
