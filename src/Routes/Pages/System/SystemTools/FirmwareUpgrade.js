import React from 'react';

export default function FirmwareUpgrade({ t, config }) {
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('FirmwareUpgrade')}</div>
        <span className="firmwareBox">
          <span>
            <span className="spanText">
              You will get the new function after upgrading the firmware.
            </span>
          </span>
          <span>
            <span className="spanText">
              Firmware File: <input type="file" />
            </span>
            <input
              type="submit"
              className="moveRight buttonPointer"
              value={t('Apply')}
            />
          </span>
          <span>
            <span className="spanText">
              Firmware Version: {config.firmware}
            </span>
            <input
              type="submit"
              className="moveRight buttonPointer"
              value={t('Help')}
            />
          </span>
          <span>
            <span className="spanText">
              Hardware Version: {config.hardware}
            </span>
          </span>
        </span>
        <div className="note">
          1. Please select the proper software version matching with your
          hardware to upgrade.
          <br />
          2. To avoid damage, please don't turn off the device while upgrading.
          <br />
          3. After upgrading, the device will reboot automatically.
          <br />
          4. You are suggested to backup the configuration before upgrading.
        </div>
      </div>
    </article>
  );
}
