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
      name: t('SideSystem✅'),
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
      name: t('SideSwitching✅'),
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
      name: t('SideSpaningTree'),
      action: () => history.push('/stpconfig/stpconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'STPConfig',
          action: () => history.push('/stpconfig/stpconfig'),
        },
        {
          name: 'PortConfig',
          action: () => history.push('/stpportconfig/portconfig'),
        },
        {
          name: 'MSTPInstance',
          action: () => history.push('/mstpinstance/regionconfig'),
        },
        {
          name: 'STPSecurity',
          action: () => history.push('/stpsecurity/portprotect'),
        },
      ],
    },
    {
      name: t('SideMulticast'),
      action: () => history.push('/igmpsnooping/snoopingconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'IGMPSnooping',
          action: () => history.push('/igmpsnooping/snoopingconfig'),
        },
        {
          name: 'MulticastIPTable',
          action: () => history.push('/multicastip/multicastiptable'),
        },
        {
          name: 'MulticastFilter',
          action: () => history.push('/multicastfilter/iprange'),
        },
        {
          name: 'PacketStatistics',
          action: () => history.push('/packetstatistics/packetstatistics'),
        },
      ],
    },
    {
      name: t('QoS✅'),
      action: () => history.push('/diffserv/portpriority'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'DiffServ',
          action: () => history.push('/diffserv/portpriority'),
        },
        {
          name: 'BandwidthControl',
          action: () => history.push('/bandwidthcontrol/ratelimit'),
        },
        {
          name: 'VoiceVLAN',
          action: () => history.push('/voicevlan/globalconfig'),
        },
      ],
    },
    {
      name: t('SideACL'),
      action: () => history.push('/aclconfig/aclsummary'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'ACLConfig',
          action: () => history.push('/aclconfig/aclsummary'),
        },
        {
          name: 'PolicyConfig',
          action: () => history.push('/policyconfig/policysummary'),
        },
        {
          name: 'PolicyBinding',
          action: () => history.push('/policybinding/BindingTableACL'),
        },
      ],
    },
    {
      name: t('NetworkSecurity✅'),
      action: () => history.push('/ipmacbinding/bindingtable'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'IPMACBinding',
          action: () => history.push('/ipmacbinding/bindingtable'),
        },
        {
          name: 'ARPInspection',
          action: () => history.push('/arpinspection/arpdetect'),
        },
        {
          name: 'DoSDefend',
          action: () => history.push('/dosdefend/dosdefend'),
        },
        {
          name: '802.1X',
          action: () => history.push('/802.1X/GlobalConfigNetwork'),
        },
      ],
    },
    {
      name: t('SideSNMP✅'),
      action: () => history.push('/snmpconfig/globalconfig'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'SNMPConfig',
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
      name: t('SideMaintenance✅'),
      action: () => history.push('/systemmonitor/cpumonitor'),
      style: null,
      isSubitem: true,
      subitems: [
        {
          name: 'SystemMonitor',
          action: () => history.push('/systemmonitor/cpumonitor'),
        },
        {
          name: 'Log',
          action: () => history.push('/log/logtable'),
        },
        {
          name: 'DeviceDiagnostics',
          action: () => history.push('/devicediagnostics/cabletest'),
        },
        {
          name: 'NetworkDiagnostics',
          action: () => history.push('/networkdiagnostics/ping'),
        },
      ],
    },
    {
      name: t('SideSaveConfig✅'),
      action: () => {},
      style: null,
      isSubitem: false,
    },
    {
      name: t('SideLogout✅'),
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
