import React, { useState } from 'react';
import handleGlobalChange from 'utils/handleGlobalChange';

export default function DeviceDescription({ t, config }) {
  const [deviceName, setdeviceName] = useState(config.deviceName);
  const [deviceLocation, setdeviceLocation] = useState(config.deviceLocation);
  const [systemContact, setsystemContact] = useState(config.systemContact);

  const handleSubmit = (e) => {
    e.preventDefault();
    config.deviceName = deviceName;
    config.deviceLocation = deviceLocation;
    config.systemContact = systemContact;
  };

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('DeviceDescription')}</div>
        <form onSubmit={handleSubmit} className="tplinkFormBase1">
          <span>
            {t('Info_DeviceName')}:{' '}
            <input
              type="text"
              maxLength={32}
              value={deviceName}
              onChange={(e) => handleGlobalChange(e, setdeviceName)}
            />
          </span>
          <span>
            {t('Info_DeviceLocation')}:{' '}
            <input
              type="text"
              maxLength={32}
              value={deviceLocation}
              onChange={(e) => handleGlobalChange(e, setdeviceLocation)}
            />
            <input type="submit" className="moveRight" value={t('Apply')} />
          </span>
          <span>
            {t('Info_SystemContact')}:{' '}
            <input
              type="text"
              maxLength={32}
              value={systemContact}
              onChange={(e) => handleGlobalChange(e, setsystemContact)}
            />
          </span>
        </form>
        <div className="note">
          The Device Name, Location and Contact should not be more than 32
          characters.
        </div>
      </div>
    </article>
  );
}
