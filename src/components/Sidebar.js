import React, { useRef, useState, useContext } from 'react';
import 'css/Sidebar.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import AppContext from 'store/AppContext';

export default function Sidebar() {
  const { setLoggedIn, config } = useContext(AppContext);
  const downloadRef = useRef(null);
  const [downloadHref, setdownloadHref] = useState('');

  const { t } = useTranslation();
  const history = useHistory();

  const switchName = 'TL-SG2008';
  const elements = [
    {
      name: t('SideSystem'),
      action: () => history.push('/systeminfo/systemsummary'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'System Info',
          action: () => history.push('/systeminfo/systemsummary'),
        },
        {
          name: 'User Managment',
          action: () => history.push('/usermanagment/usertable'),
        },
        {
          name: 'System Tools',
          action: () => history.push('/systemtools/configrestore'),
        },
        {
          name: 'Access Security',
          action: () => history.push('/accesssecurity/accesscontrol'),
        },
      ],
    },
    {
      name: t('SideSwitching'),
      action: () => history.push('/switching/portconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'Port',
          action: () => history.push('/switching/portconfig'),
        },
        {
          name: 'LAG',
          action: () => history.push('/lag/lagtable'),
        },
        {
          name: 'Traffic Monitor',
          action: () => history.push('/trafficmonitor/trafficsummary'),
        },
        {
          name: 'MAC Address',
          action: () => history.push('/MACAddress/AddressTable'),
        },
      ],
    },
    {
      name: t('SideVLAN'),
      action: () => history.push('/vlan'),
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideSpaningTree'),
      action: () => history.push('/stp'),
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideMulticast'),
      action: () => history.push('/multicast'),
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideQoS'),
      action: () => history.push('/qos'),
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideACL'),
      action: () => history.push('/acl'),
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideSNMP'),
      action: () => history.push('/snmp'),
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideMaintenance'),
      action: () => history.push('/maintance'),
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideSaveConfig'),
      action: () => {},
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideLogout'),
      action: () => {
        setLoggedIn(false);
        sessionStorage.setItem('loggedIn', 'false');
      },
      style: { marginTop: '20px' },
      isSubitem: false,
    },
  ];

  return (
    <aside className="sidebar">
      <h1>{switchName}</h1>
      <div className="elements">
        {elements.map((item, index) =>
          item.isSubitem ? (
            <details>
              <summary className="sideButton" onClick={item.action}>
                {item.name}
              </summary>
              {item.subitems.map((item2) => (
                <button className="sideButton" onClick={item2.action}>
                  {item2.name}
                </button>
              ))}
            </details>
          ) : (
            <button
              className="sideButton"
              style={item.style}
              onClick={item.action}
            >
              {item.name}
            </button>
          ),
        )}
      </div>
    </aside>
  );
}
