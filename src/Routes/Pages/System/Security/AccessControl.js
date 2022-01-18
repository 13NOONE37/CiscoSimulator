import React from 'react';

export default function AccessControl({ t, config }) {
  const handleApply = () => {};
  //#TODO: saving to config and mask inputs
  return (
    <article>
      <div className="tplinkBoxBase1 accessControl">
        <div className="InfoTableTitle">{t('AccessControlConfig')}</div>
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('ControlMode')}:</span>
              <span>
                <select>
                  <option>Disable</option>
                  <option>Enable</option>
                </select>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('ControlMode')}:</span>
              <span>
                {['SNMP', 'Telnet', 'SSH', 'HTTP', 'HTTPS', 'Ping', 'All'].map(
                  (item) => (
                    <>
                      <input type="checkbox" value={item} />
                      <label>{item}</label>
                    </>
                  ),
                )}
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('IPAddress')}:</span>
              <span className="boxRow">
                <span>
                  <input type="text" className="basicInput" />
                </span>
                <span style={{ display: 'inherit', marginLeft: '10px' }}>
                  {t('Mask')}:
                  <input type="text" className="basicInput" />
                </span>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('MACAddress')}:</span>
              <span>
                <input type="text" className="basicInput" />
                (Format: 00-00-00-00-00-01)
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxColumn">
              <span>{t('Port')}:</span>
              <span className="borderGreyBox">
                <label>
                  <input type="checkbox" name="port" value="1" />1
                </label>
                <label>
                  <input type="checkbox" name="port" value="2" />2
                </label>
                <label>
                  {' '}
                  <input type="checkbox" name="port" value="3" />3
                </label>
                <label>
                  <input type="checkbox" name="port" value="4" />4
                </label>
                <label>
                  <input type="checkbox" name="port" value="5" />5
                </label>
                <label>
                  <input type="checkbox" name="port" value="6" />6
                </label>
                <label>
                  <input type="checkbox" name="port" value="7" />7
                </label>
                <label>
                  <input type="checkbox" name="port" value="8" />8
                </label>
              </span>
            </span>
          </div>
          <div className="buttonsRow">
            <button className="basicInput actionButton" onClick={handleApply}>
              {t('Apply')}
            </button>
            <button className="basicInput actionButton buttonPointer">
              {t('Help')}
            </button>
          </div>
        </div>
        <div className="note"></div>
      </div>
    </article>
  );
}
