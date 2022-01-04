import React from 'react';

export default function SystemReset({ t, setConfig }) {
  const handleReset = () =>
    setConfig({
      ip: '192.168.0.40',
      mask: '255.255.255.0',
      gateway: '',
      mac: 'E8-DE-27-B0-AA-AB',
      timeSource: 'Manual',
      currentTime: 0,
      timeZone: '',
      firstNTP: '',
      secoundNTP: '',
      updateRate: 0,
      deviceName: 'TL-SG2008',
      systemContact: 'www.tp-link.com',
      deviceLocation: 'SHENZEN',
      addressMode: 'Static IP',
      managmentVlan: '1',
      users: [
        { username: 'admin', password: 'admin', permission: 'Admin' },
        {
          username: 'Jarek',
          password: 'admin',
          permission: 'Guest',
        },
      ],
    });
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('SystemReset')}</div>

        <div className="configRestoreBox resetBox">
          <span>
            Reset:
            <button className="basicInput bottomButton" onClick={handleReset}>
              Reset
            </button>
          </span>
        </div>

        <div className="note">
          The System Reset option will restore the configuration to default and
          your current settings will be lost.
        </div>
      </div>
    </article>
  );
}
