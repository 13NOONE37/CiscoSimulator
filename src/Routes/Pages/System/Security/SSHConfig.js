import React from 'react';

export default function SSHConfig({ t, config }) {
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('GlobalConfig')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>SSH:</span>
              <span className="moveRight">
                <input type="radio" name="telnetState" value="enabled" />
                <label>Enable</label>
                <input type="radio" name="telnetState" value="disabled" />
                <label>Disable</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Protocol V1:</span>
              <span className="moveRight">
                <input type="radio" name="telnetState" value="enabled" />
                <label>Enable</label>
                <input type="radio" name="telnetState" value="disabled" />
                <label>Disable</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Protocol V2:</span>
              <span className="moveRight">
                <input type="radio" name="telnetState" value="enabled" />
                <label>Enable</label>
                <input type="radio" name="telnetState" value="disabled" />
                <label>Disable</label>
              </span>
            </span>
            <span>
              <input
                value={t('Apply')}
                className="buttonPointer"
                type="button"
              />
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Idle Timeout:</span>
              <span className="moveRight">
                <input type="number" min={1} max={120} />
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
                <input type="number" min={1} max={5} />
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
          </div>{' '}
        </div>

        <div className="InfoTableTitle">{t('DataIntegrityAlogorithm')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span>
              <input type="checkbox" />
              <label>HMAC-SHA1</label>
              <input type="checkbox" />
              <label>HMAC-MD5</label>
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

        <div className="InfoTableTitle">{t('KeyDownload')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span>Choose the SSH public key file to download into switch.</span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>Key Type:</span>
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
