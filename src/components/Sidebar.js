import React from 'react';
import 'css/Sidebar.css';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();

  const switchName = 'TL-SG2008';
  const elements = [
    {
      name: t('SideSystem'),
      action: null,
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'System Info',
          action: null,
        },
        {
          name: 'User Managment',
          action: null,
        },
        {
          name: 'System Tools',
          action: null,
        },
        {
          name: 'Access Security',
          action: null,
        },
      ],
    },
    {
      name: t('SideSwitching'),
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideVLAN'),
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideSpaningTree'),
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideMulticast'),
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideQoS'),
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideACL'),
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideSNMP'),
      action: null,
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideMaintenance'),
      action: null,
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
              <summary className="sideButton">{item.name}</summary>
              {item.subitems.map((item2) => (
                <button className="sideButton">{item2.name}</button>
              ))}
            </details>
          ) : (
            <button className="sideButton" style={item.style}>
              {item.name}
            </button>
          ),
        )}
      </div>
    </aside>
  );
}
