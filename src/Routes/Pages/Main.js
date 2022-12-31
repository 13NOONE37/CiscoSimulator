import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AppContext from "store/AppContext";

import "css/Variables.css";
import "css/App.css";

import Sidebar from "components/Sidebar";
import SystemSummary from "Routes/Pages/System/Info/SystemSummary";
import DeviceDescription from "Routes/Pages/System/Info/DeviceDescription";
import SystemTime from "Routes/Pages/System/Info/SystemTime";
import SystemIp from "Routes/Pages/System/Info/SystemIp";
import DayglightSavingTime from "Routes/Pages/System/Info/DayglightSavingTime";
import Usertable from "Routes/Pages/System/Usermanagment/Usertable";
import Userconfig from "Routes/Pages/System/Usermanagment/Userconfig";
import ConfigRestore from "Routes/Pages/System/SystemTools/ConfigRestore";
import ConfigBackup from "Routes/Pages/System/SystemTools/ConfigBackup";
import FirmwareUpgrade from "Routes/Pages/System/SystemTools/FirmwareUpgrade";
import SystemReboot from "Routes/Pages/System/SystemTools/SystemReboot";
import SystemReset from "Routes/Pages/System/SystemTools/SystemReset";
import AccessControl from "./System/Security/AccessControl";
import HTTPConfig from "./System/Security/HTTPConfig";
import HTTPSConfig from "./System/Security/HTTPSConfig";
import SSHConfig from "./System/Security/SSHConfig";
import Telnet from "./System/Security/Telnet";
import NotFound from "components/NotFound";
import PortConfig from "./Switching/Port/PortConfig";
import PortMirror from "./Switching/Port/PortMirror";
import PortSecurity from "./Switching/Port/PortSecurity";
import PortIsolation from "./Switching/Port/PortIsolation";
import LoopbackDetection from "./Switching/Port/LoopbackDetection";
import FilteringAddress from "./Switching/MACAdress/FilteringAddress";
import DynamicAddress from "./Switching/MACAdress/DynamicAddress";
import StaticAddress from "./Switching/MACAdress/StaticAddress";
import AddressTable from "./Switching/MACAdress/AddressTable";
import LAGTable from "./Switching/LAG/LAGTable";
import StaticLAG from "./Switching/LAG/StaticLAG";
import LACPConfig from "./Switching/LAG/LACPConfig";
import { useTranslation } from "react-i18next";
import TrafficSummary from "./Switching/TrafficMonitor/TrafficSummary";
import TrafficStatistics from "./Switching/TrafficMonitor/TrafficStatistics";
import VLANConfig from "./VLAN/VLANConfig";
import STPConfig from "./SpanningTree/STPConfig/STPConfig";
import STPSummary from "./SpanningTree/STPConfig/STPSummary";
import STPPortConfig from "./SpanningTree/PortConfig/STPPortConfig";
import RegionConfig from "./SpanningTree/MSTPInstance/RegionConfig";
import InstanceConfig from "./SpanningTree/MSTPInstance/InstanceConfig";
import InstancePortConfig from "./SpanningTree/MSTPInstance/InstancePortConfig";
import PortProtect from "./SpanningTree/STPSecurity/PortProtect";
import TCProtect from "./SpanningTree/STPSecurity/TCProtect";
import SnoopingConfig from "./Multicast/IGMPSnooping/SnoopingConfig";
import MulticastPortConfig from "./Multicast/IGMPSnooping/MulticastPortConfig";
import MulticastVLANConfig from "./Multicast/IGMPSnooping/MulticastVLANConfig";
import MulticastVLAN from "./Multicast/IGMPSnooping/MulticastVLAN";
import MulticastIPTable from "./Multicast/MulticastIP/MulticastIPTable";
import StaticMulticastIP from "./Multicast/MulticastIP/StaticMulticastIP";
import IPRange from "./Multicast/MulticastFilter/IPRange";
import PortFilter from "./Multicast/MulticastFilter/PortFilter";
import PacketStatistics from "./Multicast/PacketStatistics/PacketStatistics";
import DiffPortPriority from "./QoS/DiffServ/DiffPortPriority";
import CosMapping from "./QoS/DiffServ/CosMapping";
import DSCPPriority from "./QoS/DiffServ/DSCPPriority";
import ScheduleMode from "./QoS/DiffServ/ScheduleMode";
import RateLimit from "./QoS/BandwidthControl/RateLimit";
import StormControl from "./QoS/BandwidthControl/StormControl";
import VoiceGlobalConfig from "./QoS/VoiceVLAN/VoiceGlobalConfig";
import VoicePortConfig from "./QoS/VoiceVLAN/VoicePortConfig";
import OUIConfig from "./QoS/VoiceVLAN/OUIConfig";
import ACLSummary from "./ACL/ACLConfig/ACLSummary";
import ACLCreate from "./ACL/ACLConfig/ACLCreate";
import MACACL from "./ACL/ACLConfig/MACACL";
import StandardIPACL from "./ACL/ACLConfig/StandardIpACL";
import ExtendIpACL from "./ACL/ACLConfig/ExtendIpACL";
import PolicySummary from "./ACL/PolicyConfig/PolicySummary";
import PolicyCreate from "./ACL/PolicyConfig/PolicyCreate";
import ActionCreate from "./ACL/PolicyConfig/ActionCreate";
import BindingTableACL from "./ACL/PolicyBinding/BindingTableACL";
import PortBinding from "./ACL/PolicyBinding/PortBinding";
import VLANBinding from "./ACL/PolicyBinding/VLANBinding";
import BindingTable from "./NetworkSecurity/IPMACBinding/BindingTable";
import ManualBinding from "./NetworkSecurity/IPMACBinding/ManualBinding";
import ARPScanning from "./NetworkSecurity/IPMACBinding/ARPScanning";
import DHCPSnooping from "./NetworkSecurity/IPMACBinding/DHCPSnooping";
import ARPDetect from "./NetworkSecurity/ARPInspection/ARPDetect";
import ARPDefend from "./NetworkSecurity/ARPInspection/ARPDefend";
import ARPStatistics from "./NetworkSecurity/ARPInspection/ARPStatistics";
import GlobalConfigNetwork from "./NetworkSecurity/802.1X/GlobalConfigNetwork";
import PortConfigNetwork from "./NetworkSecurity/802.1X/PortConfigNetwork";
import RadiusServer from "./NetworkSecurity/802.1X/RadiusServer";
import DosDefend from "./NetworkSecurity/DoSDefend/DosDefend";
import GlobalConfigSNMP from "./SNMP/SNMPConfig/GlobalConfigSNMP";
import SNMPView from "./SNMP/SNMPConfig/SNMPView";
import SNMPGroup from "./SNMP/SNMPConfig/SNMPGroup";
import SNMPUser from "./SNMP/SNMPConfig/SNMPUser";
import SNMPCommunity from "./SNMP/SNMPConfig/SNMPCommunity";
import NotificationConfig from "./SNMP/Notification/NotificationConfig";
import HistoryControl from "./SNMP/RMON/HistoryControl";
import EventConfig from "./SNMP/RMON/EventConfig";
import AlarmConfig from "./SNMP/RMON/AlarmConfig";
import MemoryMonitor from "./Maintenance/SystemMonitor/MemoryMonitor";
import CPUMonitor from "./Maintenance/SystemMonitor/CPUMonitor";
import LogTable from "./Maintenance/Log/LogTable";
import LocalLog from "./Maintenance/Log/LocalLog";
import RemoteLog from "./Maintenance/Log/RemoteLog";
import BackupLog from "./Maintenance/Log/BackupLog";
import CableTest from "./Maintenance/DeviceDiagnostics/CableTest";
import Loopback from "./Maintenance/DeviceDiagnostics/Loopback";
import Ping from "./Maintenance/NetworkDiagnostics/Ping";
import Tracert from "./Maintenance/NetworkDiagnostics/Tracert";

export default function Main() {
  const { t } = useTranslation();
  const { setConfig } = useContext(AppContext);
  const pageRoutes = [
    {
      path: "/systeminfo",
      navItems: [
        {
          path: "/systemsummary",
          name: t("SystemSummary"),
          content: () => <SystemSummary />,
        },
        {
          path: "/devicedescription",
          name: t("DeviceDescription"),
          content: () => <DeviceDescription />,
        },
        {
          path: "/systemtime",
          name: t("SystemTime"),
          content: () => <SystemTime />,
        },
        {
          path: "/daylightsavingtime",
          name: t("DaylightSavingTime"),
          content: () => <DayglightSavingTime />,
        },
        {
          path: "/systemip",
          name: t("SystemIP"),
          content: () => <SystemIp />,
        },
      ],
    },
    {
      path: "/usermanagment",
      navItems: [
        {
          path: "/usertable",
          name: t("UserTable"),
          content: () => <Usertable />,
        },
        {
          path: "/userconfig",
          name: t("UserConfig"),
          content: () => <Userconfig setConfig={setConfig} />,
        },
      ],
    },
    {
      path: "/systemtools",
      navItems: [
        {
          path: "/configrestore",
          name: t("ConfigRestore"),
          content: () => <ConfigRestore setConfig={setConfig} />,
        },
        {
          path: "/configbackup",
          name: t("ConfigBackup"),
          content: () => <ConfigBackup />,
        },
        {
          path: "/firmwareupgrade",
          name: t("FirmwareUpgrade"),
          content: () => <FirmwareUpgrade />,
        },
        {
          path: "/systemreboot",
          name: t("SystemReboot"),
          content: () => <SystemReboot />,
        },
        {
          path: "/systemreset",
          name: t("SystemReset"),
          content: () => <SystemReset />,
        },
      ],
    },
    {
      path: "/accesssecurity",
      navItems: [
        {
          path: "/accesscontrol",
          name: t("AccessControl"),
          content: () => <AccessControl setConfig={setConfig} />,
        },
        {
          path: "/HTTPConfig",
          name: t("HTTPConfig"),
          content: () => <HTTPConfig setConfig={setConfig} />,
        },
        {
          path: "/HTTPSConfig",
          name: t("HTTPSConfig"),
          content: () => <HTTPSConfig setConfig={setConfig} />,
        },
        {
          path: "/SSHConfig",
          name: t("SSHConfig"),
          content: () => <SSHConfig />,
        },
        {
          path: "/TelnetConfig",
          name: t("TelnetConfig"),
          content: () => <Telnet />,
        },
      ],
    },
    {
      path: "/switching",
      navItems: [
        {
          path: "/portconfig",
          name: t("PortConfig"),
          content: () => <PortConfig />,
        },
        {
          path: "/portmirror",
          name: t("PortMirror"),
          content: () => <PortMirror setConfig={setConfig} />,
        },
        {
          path: "/portsecurity",
          name: t("PortSecurity"),
          content: () => <PortSecurity setConfig={setConfig} />,
        },
        {
          path: "/portisolation",
          name: t("PortIsolation"),
          content: () => <PortIsolation />,
        },
        {
          path: "/loopbackdetection",
          name: t("LoopbackDetection"),
          content: () => <LoopbackDetection />,
        },
      ],
    },
    {
      path: "/lag",
      navItems: [
        {
          path: "/lagtable",
          name: t("LAGTable"),
          content: () => <LAGTable />,
        },
        {
          path: "/staticlag",
          name: t("StaticLAG"),
          content: () => <StaticLAG />,
        },
        {
          path: "/lacpconfig",
          name: t("LACPConfig"),
          content: () => <LACPConfig />,
        },
      ],
    },
    {
      path: "/trafficmonitor",
      navItems: [
        {
          path: "/trafficsummary",
          name: t("TrafficSummary"),
          content: () => <TrafficSummary />,
        },
        {
          path: "/trafficstatistics",
          name: t("TrafficStatistics"),
          content: () => <TrafficStatistics />,
        },
      ],
    },
    {
      path: "/MACAddress",
      navItems: [
        {
          path: "/AddressTable",
          name: t("AdressTable"),
          content: () => <AddressTable />,
        },
        {
          path: "/StaticAddress",
          name: t("StaticAddress"),
          content: () => <StaticAddress />,
        },
        {
          path: "/DynamicAddress",
          name: t("DynamicAddress"),
          content: () => <DynamicAddress />,
        },
        {
          path: "/FilteringAddress",
          name: t("FilteringAddress"),
          content: () => <FilteringAddress />,
        },
      ],
    },
    {
      path: "/vlan",
      navItems: [
        {
          path: "/vlanconfig",
          name: t("VLANConfig"),
          content: () => <VLANConfig />,
        },
      ],
    },
    {
      path: "/stpconfig",
      navItems: [
        {
          path: "/stpconfig",
          name: t("STPConfig"),
          content: () => <STPConfig />,
        },
        {
          path: "/stpsummary",
          name: t("STPSummary"),
          content: () => <STPSummary />,
        },
      ],
    },
    {
      path: "/stpportconfig",
      navItems: [
        {
          path: "/portconfig",
          name: t("PortConfig"),
          content: () => <STPPortConfig />,
        },
      ],
    },
    {
      path: "/mstpinstance",
      navItems: [
        {
          path: "/regionconfig",
          name: t("RegionConfig"),
          content: () => <RegionConfig />,
        },
        {
          path: "/instanceconfig",
          name: t("InstanceConfig"),
          content: () => <InstanceConfig />,
        },
        {
          path: "/instanceportconfig",
          name: t("InstancePortConfig"),
          content: () => <InstancePortConfig />,
        },
      ],
    },
    {
      path: "/stpsecurity",
      navItems: [
        {
          path: "/portprotect",
          name: t("PortProtect"),
          content: () => <PortProtect />,
        },
        {
          path: "/tcprotect",
          name: t("TCProtect"),
          content: () => <TCProtect />,
        },
      ],
    },
    {
      path: "/igmpsnooping",
      navItems: [
        {
          path: "/snoopingconfig",
          name: t("SnoopingConfig"),
          content: () => <SnoopingConfig />,
        },
        {
          path: "/igmpportconfig",
          name: t("PortConfig"),
          content: () => <MulticastPortConfig />,
        },
        {
          path: "/igmpvlanconfig",
          name: t("VLANConfig"),
          content: () => <MulticastVLANConfig />,
        },
        {
          path: "/igmpmulticastvlan",
          name: t("MulticastVLAN"),
          content: () => <MulticastVLAN />,
        },
      ],
    },
    {
      path: "/multicastip",
      navItems: [
        {
          path: "/multicastiptable",
          name: t("MulticastIPTable"),
          content: () => <MulticastIPTable />,
        },
        {
          path: "/multicaststaticip",
          name: t("StaticMulticastIP"),
          content: () => <StaticMulticastIP />,
        },
      ],
    },
    {
      path: "/multicastfilter",
      navItems: [
        {
          path: "/iprange",
          name: t("IPRange"),
          content: () => <IPRange />,
        },
        {
          path: "/portfilter",
          name: t("PortFilter"),
          content: () => <PortFilter />,
        },
      ],
    },
    {
      path: "/packetstatistics",
      navItems: [
        {
          path: "/packetstatistics",
          name: t("PacketStatistics"),
          content: () => <PacketStatistics />,
        },
      ],
    },
    {
      path: "/diffserv",
      navItems: [
        {
          path: "/portpriority",
          name: t("PortPriority"),
          content: () => <DiffPortPriority />,
        },
        {
          path: "/CoSMapping",
          name: t("802.1P/CoSmapping"),
          content: () => <CosMapping />,
        },
        {
          path: "/dscppriority",
          name: t("DSCPPriority"),
          content: () => <DSCPPriority />,
        },
        {
          path: "/schedulemode",
          name: t("ScheduleMode"),
          content: () => <ScheduleMode />,
        },
      ],
    },
    {
      path: "/bandwidthcontrol",
      navItems: [
        {
          path: "/ratelimit",
          name: t("RateLimit"),
          content: () => <RateLimit />,
        },
        {
          path: "/StormControl",
          name: t("StormControl"),
          content: () => <StormControl />,
        },
      ],
    },
    {
      path: "/voicevlan",
      navItems: [
        {
          path: "/globalconfig",
          name: t("GlobalConfig"),
          content: () => <VoiceGlobalConfig />,
        },
        {
          path: "/portconfig",
          name: t("PortConfig"),
          content: () => <VoicePortConfig />,
        },
        {
          path: "/ouiconfig",
          name: t("OUIConfig"),
          content: () => <OUIConfig />,
        },
      ],
    },
    {
      path: "/aclconfig",
      navItems: [
        {
          path: "/ACLSummary",
          name: t("ACLSummary"),
          content: () => <ACLSummary />,
        },
        {
          path: "/ACLCreate",
          name: t("ACLCreate"),
          content: () => <ACLCreate />,
        },
        {
          path: "/MACACL",
          name: t("MACACL"),
          content: () => <MACACL />,
        },
        {
          path: "/StandardIPACL",
          name: t("StandardIPACL"),
          content: () => <StandardIPACL />,
        },
        {
          path: "/ExtendIPACL",
          name: t("ExtendIPACL"),
          content: () => <ExtendIpACL />,
        },
      ],
    },
    {
      path: "/policyconfig",
      navItems: [
        {
          path: "/PolicySummary",
          name: t("PolicySummary"),
          content: () => <PolicySummary />,
        },
        {
          path: "/PolicyCreate",
          name: t("PolicyCreate"),
          content: () => <PolicyCreate />,
        },
        {
          path: "/ActionCreate",
          name: t("ActionCreate"),
          content: () => <ActionCreate />,
        },
      ],
    },
    {
      path: "/policybinding",
      navItems: [
        {
          path: "/BindingTableACL",
          name: t("BindingTable"),
          content: () => <BindingTableACL />,
        },
        {
          path: "/PortBinding",
          name: t("PortBinding"),
          content: () => <PortBinding />,
        },
        {
          path: "/VLANBinding",
          name: t("VLANBinding"),
          content: () => <VLANBinding />,
        },
      ],
    },
    {
      path: "/ipmacbinding",
      navItems: [
        {
          path: "/BindingTable",
          name: t("BindingTable"),
          content: () => <BindingTable />,
        },
        {
          path: "/ManualBinding",
          name: t("ManualBinding"),
          content: () => <ManualBinding />,
        },
        {
          path: "/ARPScanning",
          name: t("ARPScanning"),
          content: () => <ARPScanning />,
        },
        {
          path: "/DHCPSnooping",
          name: t("DHCPSnooping"),
          content: () => <DHCPSnooping />,
        },
      ],
    },
    {
      path: "/arpinspection",
      navItems: [
        {
          path: "/ARPDetect",
          name: t("ARPDetect"),
          content: () => <ARPDetect />,
        },
        {
          path: "/ARPDefend",
          name: t("ARPDefend"),
          content: () => <ARPDefend />,
        },
        {
          path: "/ARPStatistics",
          name: t("ARPStatistics"),
          content: () => <ARPStatistics />,
        },
      ],
    },
    {
      path: "/dosdefend",
      navItems: [
        {
          path: "/DOSDefend",
          name: t("DOSDefend"),
          content: () => <DosDefend />,
        },
      ],
    },
    {
      path: "/802.1X",
      navItems: [
        {
          path: "/GlobalConfigNetwork",
          name: t("GlobalConfig"),
          content: () => <GlobalConfigNetwork />,
        },
        {
          path: "/PortConfigNetwork",
          name: t("PortConfig"),
          content: () => <PortConfigNetwork />,
        },
        {
          path: "/RadiusServer",
          name: t("RadiusServer"),
          content: () => <RadiusServer />,
        },
      ],
    },
    {
      path: "/snmpconfig",
      navItems: [
        {
          path: "/GlobalConfig",
          name: t("GlobalConfig"),
          content: () => <GlobalConfigSNMP />,
        },
        {
          path: "/SNMPView",
          name: t("SNMPView"),
          content: () => <SNMPView />,
        },
        {
          path: "/SNMPGroup",
          name: t("SNMPGroup"),
          content: () => <SNMPGroup />,
        },
        {
          path: "/SNMPUser",
          name: t("SNMPUser"),
          content: () => <SNMPUser />,
        },
        {
          path: "/SNMPCommunity",
          name: t("SNMPCommunity"),
          content: () => <SNMPCommunity />,
        },
      ],
    },
    {
      path: "/snmpnotification",
      navItems: [
        {
          path: "/NotificationConfig",
          name: t("NotificationConfig"),
          content: () => <NotificationConfig />,
        },
      ],
    },
    {
      path: "/rmon",
      navItems: [
        {
          path: "/HistoryControl",
          name: t("HistoryControl"),
          content: () => <HistoryControl />,
        },
        {
          path: "/EventConfig",
          name: t("EventConfig"),
          content: () => <EventConfig />,
        },
        {
          path: "/AlarmConfig",
          name: t("AlarmConfig"),
          content: () => <AlarmConfig />,
        },
      ],
    },
    {
      path: "/systemmonitor",
      navItems: [
        {
          path: "/CPUMonitor",
          name: t("CPUMonitor"),
          content: () => <CPUMonitor />,
        },
        {
          path: "/MemoryMonitor",
          name: t("MemoryMonitor"),
          content: () => <MemoryMonitor />,
        },
      ],
    },
    {
      path: "/log",
      navItems: [
        {
          path: "/LogTable",
          name: t("LogTable"),
          content: () => <LogTable />,
        },
        {
          path: "/LocalLog",
          name: t("LocalLog"),
          content: () => <LocalLog />,
        },
        {
          path: "/RemoteLog",
          name: t("RemoteLog"),
          content: () => <RemoteLog />,
        },
        {
          path: "/BackupLog",
          name: t("BackupLog"),
          content: () => <BackupLog />,
        },
      ],
    },
    {
      path: "/devicediagnostics",
      navItems: [
        {
          path: "/CableTest",
          name: t("CableTest"),
          content: () => <CableTest />,
        },
        {
          path: "/Loopback",
          name: t("Loopback"),
          content: () => <Loopback />,
        },
      ],
    },
    {
      path: "/networkdiagnostics",
      navItems: [
        {
          path: "/Ping",
          name: t("Ping"),
          content: () => <Ping />,
        },
        {
          path: "/Tracert",
          name: t("Tracert"),
          content: () => <Tracert />,
        },
      ],
    },
  ];
  return (
    <div className='ContentContainer'>
      <Router>
        <Sidebar />

        <Switch>
          {pageRoutes.map((route1, index1) => (
            <Route path={route1.path} key={index1}>
              <SubPages navItems={route1.navItems} />
            </Route>
          ))}
          <Route path='*'>
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
    <div className='InfoContainer'>
      <nav>
        {navItems.map((item, index) => (
          <Link className='navOption' to={`${url}${item.path}`} key={index}>
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
