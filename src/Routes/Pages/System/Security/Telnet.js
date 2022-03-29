import Title from 'components/General/Title/Title';
import React, { useState } from 'react';
import handleGlobalChange from 'Utils/handleGlobalChange';

export default function Telnet({ t, config }) {
  const [telnetState, settelnetState] = useState(config.telnetEnabled);
  const handleApply = () => (config.telnetEnabled = telnetState);
  return (
    <article>
      <div className="tplinkBoxBase1">
        <Title content="GlobalConfig" />

        <div className="boxSpaceBetween">
          <span className="boxEqualSpaceBetween">
            <span>Telnet:</span>
            <span>
              <input
                type="radio"
                name="telnetState"
                value="enabled"
                onChange={(e) => handleGlobalChange(e, settelnetState)}
                defaultChecked={telnetState == 'enabled'}
              />
              <label>Enable</label>
              <input
                type="radio"
                name="telnetState"
                value="disabled"
                onChange={(e) => handleGlobalChange(e, settelnetState)}
                defaultChecked={telnetState == 'disabled'}
              />
              <label>Disable</label>
              {telnetState == false && ' true'}
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

        {/* <Note /> */}
      </div>
    </article>
  );
}
