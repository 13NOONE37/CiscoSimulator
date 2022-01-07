import React from 'react';
import 'css/System/InfoTable.css';
import { useTranslation } from 'react-i18next';

export default function InfoTable({ config, setConfig }) {
  const { t, i18n } = useTranslation();

  const title = t('Info_SystemInfo');
  const SystemInfo = [
    {
      title: t('Info_SystemDescription'),
      value: '8-Port Gigabit Smart Switch',
    },
    {
      title: t('Info_DeviceName'),
      value: config.deviceName,
    },
    {
      title: t('Info_DeviceLocation'),
      value: config.deviceLocation,
    },
    {
      title: t('Info_SystemContact'),
      value: config.systemContact,
    },
    {
      title: t('Info_HardwareVersion'),
      value: config.hardware,
    },
    {
      title: t('Info_FirmwareVersion'),
      value: config.firmware,
    },
    {
      title: t('Info_IAddress'),
      value: config.ip,
    },
    {
      title: t('Info_SubnetMask'),
      value: config.mask,
    },
    {
      title: t('Info_DefaultGateway'),
      value: config.gateway,
    },
    {
      title: t('Info_MACAddress'),
      value: config.mac,
    },
    {
      title: t('SystemTime'),
      value: `${new Date(config.currentTime).toDateString()} ${new Date(
        config.currentTime,
      ).toLocaleTimeString()}`,
    },
  ];

  return (
    <div className="InfoTable">
      <div className="row InfoTableTitle">{title}</div>
      {SystemInfo.map((item, index) => (
        <div className="row" key={index}>
          <span>{item.title}:</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
