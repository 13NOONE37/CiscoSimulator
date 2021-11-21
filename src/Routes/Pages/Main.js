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

import 'css/Variables.css';
import 'css/App.css';

import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';
import SystemInfo from 'Routes/Pages/System/SystemInfo';

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
            <SystemInfo t={t} config={config} setConfig={setConfig} />
          ),
        },
        {
          path: '/devicedescription',
          name: t('DeviceDescription'),
          content: () => <h1>🚕2</h1>,
        },
        {
          path: '/systemtime',
          name: t('SystemTime'),
          content: () => <h1>🚓3</h1>,
        },
        {
          path: '/daylightsavingtime',
          name: t('DaylightSavingTime'),
          content: () => <h1>🚗4</h1>,
        },
        {
          path: '/systemip',
          name: t('SystemIP'),
          content: () => <h1>🚌5</h1>,
        },
      ],
    },
    {
      path: '/usermanagment',
      navItems: [
        {
          path: '/usertable',
          name: t('UserTable'),
          content: () => <h1>🛺11</h1>,
        },
        {
          path: '/userconfig',
          name: t('UserConfig'),
          content: () => <h1>🚕22</h1>,
        },
      ],
    },
    {
      path: '/systemtools',
      navItems: [
        {
          path: '/configrestore',
          name: t('ConfigRestore'),
          content: () => <h1>🛺11</h1>,
        },
        {
          path: '/configbackup',
          name: t('ConfigBackup'),
          content: () => <h1>🚕22</h1>,
        },
        {
          path: '/firmwareupgrade',
          name: t('FirmwareUpgrade'),
          content: () => <h1>🚓33</h1>,
        },
        {
          path: '/systemreboot',
          name: t('SystemReboot'),
          content: () => <h1>🚗44</h1>,
        },
        {
          path: '/systemreset',
          name: t('SystemReset'),
          content: () => <h1>🚌55</h1>,
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
