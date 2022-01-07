import React from 'react';

export default function SSHConfig({ t, config }) {
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('GlobalConfig')}</div>
        <div className="InfoTableTitle">{t('EncryptionAlgorithm')}</div>
        <div className="InfoTableTitle">{t('DataIntegrityAlogorithm')}</div>
        <div className="telnetBox boxSpaceBetween">
          <span>Telnet</span>
          <span>
            <input type="radio" name="telnetState" value="enabled" />
            <label>Enable</label>
            <input type="radio" name="telnetState" value="disabled" />
            <label>Disable</label>
          </span>
        </div>
        <div className="InfoTableTitle">{t('KeyDownload')}</div>

        <div className="note">
          1. It will take a long time to download the key file. Please wait
          without any operation.
          <br />
          2. After the Key File is downloaded, the user's original key of the
          same type will be replaced. The wrong downloaded file will result in
          the SHH access to the switch via Password authentication.
        </div>
      </div>
    </article>
  );
}
