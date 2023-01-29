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
      name: t('System'),
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
      name: t('Switching'),
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
      name: t('VLAN'),
      action: () => history.push('/vlan/vlanconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: '802.1Q VLAN',
          action: () => history.push('/vlan/vlanconfig'),
        },
      ],
    },
    {
      name: t('Spaning Tree'),
      action: () => history.push('/stpconfig/stpconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'STP Config',
          action: () => history.push('/stpconfig/stpconfig'),
        },
        {
          name: 'Port Config',
          action: () => history.push('/stpportconfig/portconfig'),
        },
        {
          name: 'MSTP Instance',
          action: () => history.push('/mstpinstance/regionconfig'),
        },
        {
          name: 'STP Security',
          action: () => history.push('/stpsecurity/portprotect'),
        },
      ],
    },
    {
      name: t('Multicast'),
      action: () => history.push('/igmpsnooping/snoopingconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'IGMP nooping',
          action: () => history.push('/igmpsnooping/snoopingconfig'),
        },
        {
          name: 'Multicast IP',
          action: () => history.push('/multicastip/multicastiptable'),
        },
        {
          name: 'Multicast Filter',
          action: () => history.push('/multicastfilter/iprange'),
        },
        {
          name: 'Packet Statistics',
          action: () => history.push('/packetstatistics/packetstatistics'),
        },
      ],
    },
    {
      name: t('QoS'),
      action: () => history.push('/diffserv/portpriority'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'Diff Serv',
          action: () => history.push('/diffserv/portpriority'),
        },
        {
          name: 'Bandwidth Control',
          action: () => history.push('/bandwidthcontrol/ratelimit'),
        },
        {
          name: 'Voice VLAN',
          action: () => history.push('/voicevlan/globalconfig'),
        },
      ],
    },
    {
      name: t('ACL'),
      action: () => history.push('/aclconfig/aclsummary'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'ACL Config',
          action: () => history.push('/aclconfig/aclsummary'),
        },
        {
          name: 'Policy Config',
          action: () => history.push('/policyconfig/policysummary'),
        },
        {
          name: 'Policy Binding',
          action: () => history.push('/policybinding/BindingTableACL'),
        },
      ],
    },
    {
      name: t('NetworkSecurity'),
      action: () => history.push('/ipmacbinding/bindingtable'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'IP-MAC Binding',
          action: () => history.push('/ipmacbinding/bindingtable'),
        },
        {
          name: 'ARP Inspection',
          action: () => history.push('/arpinspection/arpdetect'),
        },
        {
          name: 'DoS Defend',
          action: () => history.push('/dosdefend/dosdefend'),
        },
        {
          name: '802.1X',
          action: () => history.push('/802.1X/GlobalConfigNetwork'),
        },
      ],
    },
    {
      name: t('SNMP'),
      action: () => history.push('/snmpconfig/globalconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'SNMP Config',
          action: () => history.push('/snmpconfig/globalconfig'),
        },
        {
          name: 'Notification',
          action: () => history.push('/snmpnotification/notificationconfig'),
        },
        {
          name: 'RMON',
          action: () => history.push('/rmon/historycontrol'),
        },
      ],
    },
    {
      name: t('Maintenance'),
      action: () => history.push('/systemmonitor/cpumonitor'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'System Monitor',
          action: () => history.push('/systemmonitor/cpumonitor'),
        },
        {
          name: 'Log',
          action: () => history.push('/log/logtable'),
        },
        {
          name: 'Device Diagnostics',
          action: () => history.push('/devicediagnostics/cabletest'),
        },
        {
          name: 'Network Diagnostics',
          action: () => history.push('/networkdiagnostics/ping'),
        },
      ],
    },
    {
      name: t('Save Config'),
      action: () => {},
      style: null,
      isSubitem: false,
    },
    {
      name: t('Logout'),
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
