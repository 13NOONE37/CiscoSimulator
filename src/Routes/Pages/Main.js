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
import AppContext from 'store/AppContext';

import 'css/ContentContainer.css';
import 'css/Variables.css';
import 'css/App.css';
import 'css/System/SystemTools.css';
import 'css/System/AccessSecurity.css';
import 'css/Switching/Port.css';

import Sidebar from 'components/Sidebar';
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
import PortConfig from './Switching/Port/PortConfig';
import PortMirror from './Switching/Port/PortMirror';
import PortSecurity from './Switching/Port/PortSecurity';
import PortIsolation from './Switching/Port/PortIsolation';
import LoopbackDetection from './Switching/Port/LoopbackDetection';
import FilteringAddress from './Switching/MACAdress/FilteringAddress';
import DynamicAddress from './Switching/MACAdress/DynamicAddress';
import StaticAddress from './Switching/MACAdress/StaticAddress';
import AddressTable from './Switching/MACAdress/AddressTable';
import LAGTable from './Switching/LAG/LAGTable';
import StaticLAG from './Switching/LAG/StaticLAG';
import LACPConfig from './Switching/LAG/LACPConfig';
import { useTranslation } from 'react-i18next';

export default function Main() {
  const { t } = useTranslation();
  const { setConfig } = useContext(AppContext);
  const pageRoutes = [
    {
      path: '/systeminfo',
      navItems: [
        {
          path: '/systemsummary',
          name: t('SystemSummary'),
          content: () => <SystemSummary />,
        },
        {
          path: '/devicedescription',
          name: t('DeviceDescription'),
          content: () => <DeviceDescription />,
        },
        {
          path: '/systemtime',
          name: t('SystemTime'),
          content: () => <SystemTime />,
        },
        {
          path: '/daylightsavingtime',
          name: t('DaylightSavingTime'),
          content: () => <DayglightSavingTime />,
        },
        {
          path: '/systemip',
          name: t('SystemIP'),
          content: () => <SystemIp />,
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
          content: () => <Userconfig setConfig={setConfig} />,
        },
      ],
    },
    {
      path: '/systemtools',
      navItems: [
        {
          path: '/configrestore',
          name: t('ConfigRestore'),
          content: () => <ConfigRestore setConfig={setConfig} />,
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
    {
      path: '/accesssecurity',
      navItems: [
        {
          path: '/accesscontrol',
          name: t('AccessControl'),
          content: () => <AccessControl setConfig={setConfig} />,
        },
        {
          path: '/HTTPConfig',
          name: t('HTTPConfig'),
          content: () => <HTTPConfig setConfig={setConfig} />,
        },
        {
          path: '/HTTPSConfig',
          name: t('HTTPSConfig'),
          content: () => <HTTPSConfig setConfig={setConfig} />,
        },
        {
          path: '/SSHConfig',
          name: t('SSHConfig'),
          content: () => <SSHConfig />,
        },
        {
          path: '/TelnetConfig',
          name: t('TelnetConfig'),
          content: () => <Telnet />,
        },
      ],
    },
    {
      path: '/switching',
      navItems: [
        {
          path: '/portconfig',
          name: t('PortConfig'),
          content: () => <PortConfig />,
        },
        {
          path: '/portmirror',
          name: t('PortMirror'),
          content: () => <PortMirror setConfig={setConfig} />,
        },
        {
          path: '/portsecurity',
          name: t('PortSecurity'),
          content: () => <PortSecurity setConfig={setConfig} />,
        },
        {
          path: '/portisolation',
          name: t('PortIsolation'),
          content: () => <PortIsolation />,
        },
        {
          path: '/loopbackdetection',
          name: t('LoopbackDetection'),
          content: () => <LoopbackDetection />,
        },
      ],
    },
    {
      path: '/lag',
      navItems: [
        {
          path: '/lagtable',
          name: t('LAGTable'),
          content: () => <LAGTable />,
        },
        {
          path: '/staticlag',
          name: t('StaticLAG'),
          content: () => <StaticLAG />,
        },
        {
          path: '/lacpconfig',
          name: t('LACPConfig'),
          content: () => <LACPConfig />,
        },
      ],
    },
    {
      path: '/MACAddress',
      navItems: [
        {
          path: '/AddressTable',
          name: t('AdressTable'),
          content: () => <AddressTable />,
        },
        {
          path: '/StaticAddress',
          name: t('StaticAddress'),
          content: () => <StaticAddress />,
        },
        {
          path: '/DynamicAddress',
          name: t('DynamicAddress'),
          content: () => <DynamicAddress />,
        },
        {
          path: '/FilteringAddress',
          name: t('FilteringAddress'),
          content: () => <FilteringAddress />,
        },
      ],
    },
  ];
  return (
    <div className="ContentContainer">
      <Router>
        <Sidebar />

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
