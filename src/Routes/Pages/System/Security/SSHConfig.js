import React, { useState } from 'react';
import handleGlobalChange from 'Utils/handleGlobalChange';

export default function SSHConfig({ t, config }) {
  const [sshEnabled, setsshEnabled] = useState(config.sshEnabled);
  const [v1Enabled, setv1Enabled] = useState(config.v1Enabled);
  const [v2Enabled, setv2Enabled] = useState(config.v2Enabled);
  const [idleTimeout, setidleTimeout] = useState(config.idleTimeout);
  const [maxConnect, setmaxConnect] = useState(config.maxConnect);
  const [encryptionAlgorithm, setencryptionAlgorithm] = useState(
    config.encryptionAlgorithm,
  );
  const [dataIntegrity, setdataIntegrity] = useState(
    config.dataIntegrityAlgorithm,
  );
  const [keyType, setkeyType] = useState(config.keyType);

  const handleSubmit1 = () => {
    console.log(sshEnabled);
    config.sshEnabled = sshEnabled;
    config.v1Enabled = v1Enabled;
    config.v2Enabled = v2Enabled;
    config.idleTimeout = idleTimeout;
    config.idleTimeout = idleTimeout;
    config.maxConnect = maxConnect;
  };
  const handleSubmit2 = () => {};
  const handleSubmit3 = () => {
    console.log(dataIntegrity);
  };

  const handleIntegrityChange = (e) => {
    const index = dataIntegrity.indexOf(e.target.value);
    console.log(e.target.value, index);
    if (index != -1) {
      console.log(dataIntegrity.splice(index, index + 1));
      setdataIntegrity(dataIntegrity.splice(index, index + 1));
    } else {
      const temp = dataIntegrity;
      temp.push(e.target.value);
      setdataIntegrity(dataIntegrity);
    }
  };
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('GlobalConfig')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>SSH:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="sshState"
                  value="enabled"
                  defaultChecked={sshEnabled == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setsshEnabled)}
                />
                <label>{t('Enable')}</label>
                <input
                  type="radio"
                  name="sshState"
                  value="disabled"
                  defaultChecked={sshEnabled == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setsshEnabled)}
                />
                <label>{t('Disable')}</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Protocol V1:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="v1State"
                  value="enabled"
                  defaultChecked={v1Enabled == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setv1Enabled)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="v1State"
                  value="disabled"
                  defaultChecked={v1Enabled == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setv1Enabled)}
                />
                <label>Disable</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Protocol V2:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="v2State"
                  value="enabled"
                  defaultChecked={v2Enabled == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setv2Enabled)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="v2State"
                  value="disabled"
                  defaultChecked={v2Enabled == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setv2Enabled)}
                />
                <label>Disable</label>
              </span>
            </span>
            <span>
              <input
                value={t('Apply')}
                className="buttonPointer"
                type="button"
                onClick={handleSubmit1}
              />
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Idle Timeout:</span>
              <span className="moveRight">
                <input
                  className="basicInput"
                  type="number"
                  min={1}
                  max={120}
                  value={idleTimeout}
                  onChange={(e) => handleGlobalChange(e, setidleTimeout)}
                />{' '}
                sec(1-120)
              </span>
            </span>
            <span>
              <input
                value={t('Help')}
                className="buttonPointer"
                type="button"
              />
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Max Connect:</span>
              <span className="moveRight">
                <input
                  className="basicInput"
                  type="number"
                  min={1}
                  max={5}
                  value={maxConnect}
                  onChange={(e) => handleGlobalChange(e, setmaxConnect)}
                />{' '}
                (1-5)
              </span>
            </span>
          </div>
        </div>

        <div className="InfoTableTitle">{t('EncryptionAlgorithm')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span>
              <input type="checkbox" />
              <label>AES128-CBC</label>
              <input type="checkbox" />
              <label>AES128-CBC</label>
              <input type="checkbox" />
              <label>AES128-CBC</label>
              <br />
              <input type="checkbox" />
              <label>AES128-CBC</label>
              <input type="checkbox" />
              <label>AES128-CBC</label>
              <input type="checkbox" />
              <label>AES128-CBC</label>
            </span>
            <span>
              <input
                value={t('Apply')}
                className="buttonPointer"
                type="button"
              />
            </span>
          </div>
        </div>

        <div className="InfoTableTitle">{t('DataIntegrityAlogorithm')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span>
              <input
                type="checkbox"
                value="HMAC-SHA1"
                onChange={handleIntegrityChange}
                defaultChecked={dataIntegrity.indexOf('HMAC-SHA1') != -1}
              />
              <label>HMAC-SHA1</label>
              <input
                type="checkbox"
                value="HMAC-MD5"
                onChange={handleIntegrityChange}
                defaultChecked={dataIntegrity.indexOf('HMAC-MD5') != -1}
              />
              <label>HMAC-MD5</label>
            </span>
            <span>
              <input
                value={t('Apply')}
                className="buttonPointer"
                type="button"
                onClick={handleSubmit3}
              />
            </span>
          </div>
        </div>

        <div className="InfoTableTitle">{t('KeyDownload')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span>{t('ChooseSSHKey')}</span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('KeyType')}:</span>
              <span className="moveRight">
                <select>
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                </select>
              </span>
            </span>
            <span>
              <input
                value={t('Download')}
                className="buttonPointer"
                type="button"
              />
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Key File:</span>
              <span className="moveRight">
                <input type="file" />
              </span>
            </span>
          </div>
        </div>
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
