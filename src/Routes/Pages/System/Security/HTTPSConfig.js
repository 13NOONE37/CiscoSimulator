import React, { useState } from 'react';
import handleGlobalChange from 'Utils/handleGlobalChange';

export default function HTTPSConfig({ t, config }) {
  const [httpsState, sethttpsState] = useState(config.httpsEnabled);
  const [sslVersion, setsslVersion] = useState(config.sslVersionHTTPS);
  const [tlsVersion, settlsVersion] = useState(config.tlsVersionHTTPS);
  const [cipherSuite1HTTPS, setcipherSuite1HTTPS] = useState(
    config.cipherSuite1HTTPS,
  );
  const [cipherSuite2HTTPS, setcipherSuite2HTTPS] = useState(
    config.cipherSuite2HTTPS,
  );
  const [cipherSuite3HTTPS, setcipherSuite3HTTPS] = useState(
    config.cipherSuite3HTTPS,
  );
  const [cipherSuite4HTTPS, setcipherSuite4HTTPS] = useState(
    config.cipherSuite4HTTPS,
  );

  const [sessionTime, setsessionTime] = useState(config.sessionTimeoutHTTPS);
  const [numberControl, setnumberControl] = useState(config.numberControlHTTPS);
  const [adminNumber, setadminNumber] = useState(config.adminNumberHTTPS);
  const [guestNumber, setguestNumber] = useState(config.guestNumberHTTPS);

  const handleSubmit1 = () => {
    config.httpsEnabled = httpsState;
    config.sslVersionHTTPS = sslVersion;
    config.tlsVersionHTTPS = tlsVersion;
  };
  const handleSubmit2 = () => {
    config.cipherSuite1HTTPS = cipherSuite1HTTPS;
    config.cipherSuite2HTTPS = cipherSuite2HTTPS;
    config.cipherSuite3HTTPS = cipherSuite3HTTPS;
    config.cipherSuite4HTTPS = cipherSuite4HTTPS;
  };
  const handleSubmit3 = () => {
    config.sessionTimeoutHTTPS = sessionTime;
  };
  const handleSubmit4 = () => {
    config.numberControlHTTPS = numberControl;
    config.adminNumberHTTPS = adminNumber;
    config.guestNumberHTTPS = guestNumber;
  };
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('GlobalConfig')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>HTTPS:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="httpsState"
                  value="enabled"
                  defaultChecked={httpsState == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, sethttpsState)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="httpsState"
                  value="disabled"
                  defaultChecked={httpsState == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, sethttpsState)}
                />
                <label>Disable</label>
              </span>
            </span>
            <span></span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>SSL Version 3:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="sslState"
                  value="enabled"
                  defaultChecked={sslVersion == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setsslVersion)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="sslState"
                  value="disabled"
                  defaultChecked={sslVersion == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setsslVersion)}
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
              <span>TLS Version 1:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="tslState"
                  value="enabled"
                  defaultChecked={tlsVersion == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, settlsVersion)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="tslState"
                  value="disabled"
                  defaultChecked={tlsVersion == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, settlsVersion)}
                />
                <label>Disable</label>
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
        </div>

        <div className="InfoTableTitle">{t('CIPHERSUITE')}</div>
        <div className="subCategoryBox  cipherSuite">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>RSA_WITH_RC4_128_MD5:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="rsa1State"
                  value="enabled"
                  defaultChecked={cipherSuite1HTTPS == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite1HTTPS)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="rsa1State"
                  value="disabled"
                  defaultChecked={cipherSuite1HTTPS == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite1HTTPS)}
                />
                <label>Disable</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>RSA_WITH_RC4_128_SHA:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="rsa2State"
                  value="enabled"
                  defaultChecked={cipherSuite2HTTPS == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite2HTTPS)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="rsa2State"
                  value="disabled"
                  defaultChecked={cipherSuite2HTTPS == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite2HTTPS)}
                />
                <label>Disable</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>RSA_WITH_DES_CBC_SHA:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="rsa3State"
                  value="enabled"
                  defaultChecked={cipherSuite3HTTPS == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite3HTTPS)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="rsa3State"
                  value="disabled"
                  defaultChecked={cipherSuite3HTTPS == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite3HTTPS)}
                />
                <label>Disable</label>
              </span>
            </span>
            <span>
              <input
                value={t('Apply')}
                className="buttonPointer"
                type="button"
                onClick={handleSubmit2}
              />
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>RSA_WITH_3DES_EDE_CBC_SHA:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="rsa4State"
                  value="enabled"
                  defaultChecked={cipherSuite4HTTPS == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite4HTTPS)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="rsa4State"
                  value="disabled"
                  defaultChecked={cipherSuite4HTTPS == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setcipherSuite4HTTPS)}
                />
                <label>Disable</label>
              </span>
            </span>
          </div>
        </div>

        <div className="InfoTableTitle">{t('SessionConfig')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Session Timeout:</span>
              <span className="moveRight">
                <input
                  type="number"
                  min={5}
                  max={30}
                  value={sessionTime}
                  onChange={(e) => handleGlobalChange(e, setsessionTime)}
                />
                <label> min(5-30)</label>
              </span>
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

        <div className="InfoTableTitle">{t('AccessUserNumber')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Number Control:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="numberControl"
                  value="enabled"
                  defaultChecked={numberControl == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setnumberControl)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="numberControl"
                  value="disabled"
                  defaultChecked={numberControl == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setnumberControl)}
                />
                <label>Disable</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Admin Number:</span>
              <span className="moveRight">
                <input
                  type="number"
                  min={1}
                  max={16}
                  name="adminNumber"
                  value={adminNumber}
                  onChange={(e) => handleGlobalChange(e, setadminNumber)}
                />
                <label>(1-16)</label>
              </span>
            </span>
            <span>
              <input
                value={t('Apply')}
                className="buttonPointer"
                type="button"
                onClick={handleSubmit4}
              />
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Guest Number:</span>
              <span className="moveRight">
                <input
                  type="number"
                  min={0}
                  max={15}
                  value={guestNumber}
                  onChange={(e) => handleGlobalChange(e, setguestNumber)}
                />
                <label>(0-15)</label>
              </span>
            </span>
          </div>
        </div>

        <div className="InfoTableTitle">{t('CertificateDownload')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('CertificateFile')}</span>
              <span className="moveRight">
                <input type="file" />
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
        </div>

        <div className="InfoTableTitle">{t('KeyDownload')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('KeyFile')}</span>
              <span className="moveRight">
                <input type="file" />
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
        </div>
        <div className="note"></div>
      </div>
    </article>
  );
}
