import React, { useState } from 'react';

export default function Telnet({ t, config }) {
  const [telnetState, settelnetState] = useState(config.telnetEnabled);
  const handleApply = () => (config.telnetEnabled = telnetState);
  const handleChange = (e) => settelnetState(e.target.value);
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('GlobalConfig')}</div>

        <div className="telnetBox boxSpaceBetween">
          Telnet
          <span>
            <input
              type="radio"
              name="telnetState"
              value="enabled"
              onChange={handleChange}
              defaultChecked={telnetState == 'enabled'}
            />
            <label>Enable</label>
            <input
              type="radio"
              name="telnetState"
              value="disabled"
              onChange={handleChange}
              defaultChecked={telnetState == 'disabled'}
            />
            <label>Disable</label>
            {telnetState == false && ' true'}
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

        <div className="note"></div>
      </div>
    </article>
  );
}
