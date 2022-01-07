import React, { useContext } from 'react';
import ActivePorts from 'components/System/ActivePorts';
import InfoTable from 'components/System/InfoTable';

export default function SystemSummary({ t, config }) {
   return (
      <article>
         <ActivePorts />
         <InfoTable config={config} t={t} />
      </article>
   );
}
