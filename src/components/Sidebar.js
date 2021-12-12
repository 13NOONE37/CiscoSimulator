import React, { useEffect, useRef, useState } from 'react';
import 'css/Sidebar.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

export default function Sidebar({ setLoggedIn, config }) {
  const downloadRef = useRef(null);
  const [downloadHref, setdownloadHref] = useState('');

  const { t } = useTranslation();
  const history = useHistory();

  const handlePrepareJson = async () => {
    const backup = { config };
    const json = JSON.stringify(backup);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    setdownloadHref(href);
  };
  useEffect(() => {
    handlePrepareJson();
  }, []);

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
          action: () => history.push('/systemtools'),
        },
        {
          name: 'Access Security',
          action: () => history.push('/systemsecurity'),
        },
      ],
    },
    {
      name: t('SideSwitching'),
      action: () => history.push('/switching'),
      style: null,
      isSubitem: false,
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
      action: () => {
        downloadRef.current.click();
      },
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
      <a
        ref={downloadRef}
        href={downloadHref}
        download="Config.json"
        style={{ display: 'none' }}
      ></a>
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
