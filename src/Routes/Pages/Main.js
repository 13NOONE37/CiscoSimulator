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
import 'css/System/SystemTools.css';
import 'css/System/AccessSecurity.css';

import Sidebar from 'components/Sidebar';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';
import SystemSummary from 'Routes/Pages/System/Info/SystemSummary';
import DeviceDescription from 'Routes/Pages/System/Info/DeviceDescription';
import SystemTime from 'Routes/Pages/System/Info/SystemTime';
import SystemIp from 'Routes/Pages/System/Info/SystemIp';
import DayglightSavingTime from 'Routes/Pages/System/Info/DayglightSavingTime';
import Usertable from 'Routes/Pages/System/Usermanagment/Usertable';
import Userconfig from 'Routes/Pages/System/Usermanagment/Userconfig';
import ConfigRestore from 'Routes/Pages/System/SystemTools/ConfigRestore';
import ConfigBackup from 'Routes/Pages/System/SystemTools/ConfigBackup';
import FirmwareUpgrade from 'Routes/Pages/System/SystemTools/FirmwareUpgrade';
import SystemReboot from 'Routes/Pages/System/SystemTools/SystemReboot';
import SystemReset from 'Routes/Pages/System/SystemTools/SystemReset';
import AccessControl from './System/Security/AccessControl';
import HTTPConfig from './System/Security/HTTPConfig';
import HTTPSConfig from './System/Security/HTTPSConfig';
import SSHConfig from './System/Security/SSHConfig';
import Telnet from './System/Security/Telnet';
import NotFound from 'components/NotFound';

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
          content: () => <SystemSummary t={t} config={config} />,
        },
        {
          path: '/devicedescription',
          name: t('DeviceDescription'),
          content: () => <DeviceDescription t={t} config={config} />,
        },
        {
          path: '/systemtime',
          name: t('SystemTime'),
          content: () => <SystemTime t={t} config={config} />,
        },
        {
          path: '/daylightsavingtime',
          name: t('DaylightSavingTime'),
          content: () => <DayglightSavingTime t={t} config={config} />,
        },
        {
          path: '/systemip',
          name: t('SystemIP'),
          content: () => <SystemIp t={t} config={config} />,
        },
      ],
    },
    {
      path: '/usermanagment',
      navItems: [
        {
          path: '/usertable',
          name: t('UserTable'),
          content: () => <Usertable t={t} config={config} />,
        },
        {
          path: '/userconfig',
          name: t('UserConfig'),
          content: () => (
            <Userconfig t={t} config={config} setConfig={setConfig} />
          ),
        },
      ],
    },
    {
      path: '/systemtools',
      navItems: [
        {
          path: '/configrestore',
          name: t('ConfigRestore'),
          content: () => (
            <ConfigRestore t={t} config={config} setConfig={setConfig} />
          ),
        },
        {
          path: '/configbackup',
          name: t('ConfigBackup'),
          content: () => <ConfigBackup t={t} config={config} />,
        },
        {
          path: '/firmwareupgrade',
          name: t('FirmwareUpgrade'),
          content: () => <FirmwareUpgrade t={t} config={config} />,
        },
        {
          path: '/systemreboot',
          name: t('SystemReboot'),
          content: () => <SystemReboot t={t} setLoggedIn={setLoggedIn} />,
        },
        {
          path: '/systemreset',
          name: t('SystemReset'),
          content: () => <SystemReset t={t} setConfig={setConfig} />,
        },
      ],
    },
    {
      path: '/accesssecurity',
      navItems: [
        {
          path: '/accesscontrol',
          name: t('AccessControl'),
          content: () => (
            <AccessControl t={t} config={config} setConfig={setConfig} />
          ),
        },
        {
          path: '/HTTPConfig',
          name: t('HTTPConfig'),
          content: () => (
            <HTTPConfig t={t} config={config} setConfig={setConfig} />
          ),
        },
        {
          path: '/HTTPSConfig',
          name: t('HTTPSConfig'),
          content: () => (
            <HTTPSConfig t={t} config={config} setConfig={setConfig} />
          ),
        },
        {
          path: '/SSHConfig',
          name: t('SSHConfig'),
          content: () => <SSHConfig t={t} config={config} />,
        },
        {
          path: '/TelnetConfig',
          name: t('TelnetConfig'),
          content: () => <Telnet t={t} config={config} />,
        },
      ],
    },
  ];
  return (
    <div className="ContentContainer">
      <Router>
        <Sidebar setLoggedIn={setLoggedIn} config={config} />

        <Switch>
          {pageRoutes.map((route1, index1) => (
            <Route path={route1.path} key={index1}>
              <SubPages navItems={route1.navItems} />
            </Route>
          ))}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const SubPages = ({ navItems }) => {
  let { path, url } = useRouteMatch();
  console.log(url, path);
  return (
    <div className="InfoContainer">
      <nav>
        {navItems.map((item, index) => (
          <Link className="navOption" to={`${url}${item.path}`} key={index}>
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
