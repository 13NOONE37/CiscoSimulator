import React from 'react';
import 'css/Sidebar.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

export default function Sidebar() {
  const { t } = useTranslation();
  const history = useHistory();

  const switchName = 'TL-SG2008';
  const elements = [
    {
      name: t('SideSystem'),
      action: () => history.push('/system/info'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'System Info',
          action: () => history.push('/systeminfo'),
        },
        {
          name: 'User Managment',
          action: () => history.push('/usermanagment'),
        },
        {
          name: 'System Tools',
          action: () => history.push('/system/systemtools'),
        },
        {
          name: 'Access Security',
          action: () => history.push('/system/security'),
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
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideLogout'),
      action: null,
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
