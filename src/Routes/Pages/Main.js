import React, { useContext } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   NavLink,
   useParams,
   useRouteMatch,
} from 'react-router-dom';

import 'css/ContentContainer.css';
import 'css/Variables.css';
import 'css/App.css';

import Sidebar from 'components/Sidebar';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';
import SystemSummary from 'Routes/Pages/System/SystemSummary';
import DeviceDescription from './System/DeviceDescription';
import SystemTime from './System/SystemTime';
import DayglightSavingTime from './System/DayglightSavingTime';
import SystemIp from './System/SystemIp';
import Usertable from './Usermanagment/Usertable';
import Userconfig from './Usermanagment/Userconfig';
import ConfigRestore from './SystemTools/ConfigRestore';
import ConfigBackup from './SystemTools/ConfigBackup';
import FirmwareUpgrade from './SystemTools/FirmwareUpgrade';
import SystemReboot from './SystemTools/SystemReboot';
import SystemReset from './SystemTools/SystemReset';

export default function Main() {
   const [loggedIn, setLoggedIn, config, setConfig] = useContext(AppContext);
   const { t } = useTranslation();
   const pageRoutes = [
      {
         path: '/systeminfo',
         navItems: [
            {
               path: '/systemsummary',
               name: t('SystemSummary'),
               content: () => (
                  <SystemSummary t={t} config={config} setConfig={setConfig} />
               ),
            },
            {
               path: '/devicedescription',
               name: t('DeviceDescription'),
               content: () => (
                  <DeviceDescription
                     t={t}
                     config={config}
                     setConfig={setConfig}
                  />
               ),
            },
            {
               path: '/systemtime',
               name: t('SystemTime'),
               content: () => (
                  <SystemTime t={t} config={config} setConfig={setConfig} />
               ),
            },
            {
               path: '/daylightsavingtime',
               name: t('DaylightSavingTime'),
               content: () => (
                  <DayglightSavingTime
                     t={t}
                     config={config}
                     setConfig={setConfig}
                  />
               ),
            },
            {
               path: '/systemip',
               name: t('SystemIP'),
               content: () => (
                  <SystemIp t={t} config={config} setConfig={setConfig} />
               ),
            },
         ],
      },
      {
         path: '/usermanagment',
         navItems: [
            {
               path: '/usertable',
               name: t('UserTable'),
               content: () => <Usertable />,
            },
            {
               path: '/userconfig',
               name: t('UserConfig'),
               content: () => <Userconfig />,
            },
         ],
      },
      {
         path: '/systemtools',
         navItems: [
            {
               path: '/configrestore',
               name: t('ConfigRestore'),
               content: () => <ConfigRestore />,
            },
            {
               path: '/configbackup',
               name: t('ConfigBackup'),
               content: () => <ConfigBackup />,
            },
            {
               path: '/firmwareupgrade',
               name: t('FirmwareUpgrade'),
               content: () => <FirmwareUpgrade />,
            },
            {
               path: '/systemreboot',
               name: t('SystemReboot'),
               content: () => <SystemReboot />,
            },
            {
               path: '/systemreset',
               name: t('SystemReset'),
               content: () => <SystemReset />,
            },
         ],
      },
   ];

   return (
      <div className='ContentContainer'>
         <Router>
            <Sidebar setLoggedIn={setLoggedIn} />

            <Switch>
               {pageRoutes.map((route1, index1) => (
                  <Route path={route1.path}>
                     <SubPages navItems={route1.navItems} />
                  </Route>
               ))}
            </Switch>
         </Router>
      </div>
   );
}

const SubPages = ({ navItems }) => {
   let { path, url } = useRouteMatch();
   console.log(url, path);
   return (
      <div className='InfoContainer'>
         <nav>
            {navItems.map((item, index) => (
               <Link
                  className='navOption'
                  to={`${url}${item.path}`}
                  key={index}
               >
                  {item.name}
               </Link>
            ))}
         </nav>
         {navItems.map((item, index) => (
            <Route path={`${url}${item.path}`} component={item.content} />
         ))}
      </div>
   );
};
