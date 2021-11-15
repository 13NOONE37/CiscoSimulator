import React from 'react';
import 'css/ContentContainer.css';
import { NavLink } from 'react-router-dom';
import ActivePorts from './System/ActivePorts';
import InfoTable from './System/InfoTable';

export default function ContentContainer({ config, setConfig, t }) {
   const navItems = [
      {
         path: '/1',
         name: t('SystemSummary'),
      },
      {
         path: '/2',
         name: t('DeviceDescription'),
      },
      {
         path: '/3',
         name: t('SystemTime'),
      },
      {
         path: '/4',
         name: t('DaylightSavingTime'),
      },
      {
         path: '/5',
         name: t('SystemIP'),
      },
   ]; //to musi być z propsów

   return (
      <div className='InfoContainer'>
         <nav>
            {navItems.map((item, index) => (
               <NavLink to={item.path} className='navOption' key={index}>
                  {item.name}
               </NavLink>
            ))}
         </nav>
         <article>
            <ActivePorts />
            <InfoTable config={config} t={t} />
         </article>
      </div>
   );
}
