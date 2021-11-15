import React from 'react';
import 'css/System/InfoTable.css';

export default function InfoTable({ config, setConfig, t }) {
   const title = t('Info_SystemInfo');
   const SystemInfo = [
      {
         title: t('Info_System Description'),
         value: '8-Port Gigabit Smart Switch',
      },
      {
         title: t('Info_DeviceName'),
         value: 'TL-SG2008',
      },
      {
         title: t('Info_DeviceLocation'),
         value: 'SHENZEN',
      },
      {
         title: t('Info_SystemContact'),
         value: 'www.tp-link.com',
      },
      {
         title: t('Info_HardwareVersion'),
         value: 'TL-SG2008 1.0',
      },
      {
         title: t('Info_FirmwareVersion'),
         value: '1.0.0 Build 20140126 Rel.34563',
      },
      {
         title: t('Info_I Address'),
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
         title: t('Info_SystemTime'),
         value: config.time,
      },
   ];

   return (
      <div className='InfoTable'>
         <div className='row InfoTableTitle'>{title}</div>
         {SystemInfo.map((item, index) => (
            <div className='row' key={index}>
               <span>{item.title}:</span>
               <span>{item.value}</span>
            </div>
         ))}
      </div>
   );
}
