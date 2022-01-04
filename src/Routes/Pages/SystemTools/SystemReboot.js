import React from 'react';

export default function SystemReboot({ t, setLoggedIn }) {
  const handleReboot = () => {
    setLoggedIn(false);
  };
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('SystemReboot')}</div>

        <div className="configRestoreBox resetBox">
          <span>
            Save config:{' '}
            <input type="checkbox" style={{ marginLeft: '20px' }} />
          </span>
          <span>
            Reboot:
            <button className="basicInput bottomButton" onClick={handleReboot}>
              Reboot
            </button>
          </span>
        </div>

        <div className="note">
          To avoid damage, please don't turn off the device while rebooting.
        </div>
      </div>
    </article>
  );
}
