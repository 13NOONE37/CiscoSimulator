import React, { useState } from 'react';

export default function DeviceDescription({ t, config, setConfig }) {
   const [deviceName, setdeviceName] = useState(config.deviceName);
   const [deviceLocation, setdeviceLocation] = useState(config.deviceLocation);
   const [systemContact, setsystemContact] = useState(config.systemContact);

   const handleChange = (e, setValue) => setValue(e.target.value);
   const handleSubmit = (e) => {
      e.preventDefault();
      config.deviceName = deviceName;
      config.deviceLocation = deviceLocation;
      config.systemContact = systemContact;
   };

   return (
      <article>
         <div className='tplinkBoxBase1'>
            <div className='InfoTableTitle'>{t('DeviceDescription')}</div>
            <form onSubmit={handleSubmit} className='tplinkFormBase1'>
               <span>
                  {t('Info_DeviceName')}:{' '}
                  <input
                     type='text'
                     maxLength={32}
                     value={deviceName}
                     onChange={(e) => handleChange(e, setdeviceName)}
                  />
               </span>
               <span>
                  {t('Info_DeviceLocation')}:{' '}
                  <input
                     type='text'
                     maxLength={32}
                     value={deviceLocation}
                     onChange={(e) => handleChange(e, setdeviceLocation)}
                  />
                  <input type='submit' className='moveRight' value={'Apply'} />
               </span>
               <span>
                  {t('Info_SystemContact')}:{' '}
                  <input
                     type='text'
                     maxLength={32}
                     value={systemContact}
                     onChange={(e) => handleChange(e, setsystemContact)}
                  />
               </span>
            </form>
            <div className='note'>
               The Device Name, Location and Contact should not be more than 32
               characters.
            </div>
         </div>
      </article>
   );
}
