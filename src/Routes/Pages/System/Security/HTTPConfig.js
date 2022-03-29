import Title from 'components/General/Title/Title';
import React, { useState } from 'react';
import handleGlobalChange from 'Utils/handleGlobalChange';

export default function HTTPConfig({ t, config }) {
  const [httpState, sethttpState] = useState(config.httpEnabled);
  const [sessionTime, setsessionTime] = useState(config.sessionTimeoutHTTP);
  const [numberControl, setnumberControl] = useState(config.numberControlHTTP);
  const [adminNumber, setadminNumber] = useState(config.adminNumberHTTP);
  const [guestNumber, setguestNumber] = useState(config.guestNumberHTTP);

  const handleSubmit1 = () => {
    config.httpEnabled = httpState;
  };
  const handleSubmit2 = () => {
    config.sessionTimeout = sessionTime;
  };
  const handleSubmit3 = () => {
    config.numberControl = numberControl;
    config.adminNumber = adminNumber;
    config.guestNumber = guestNumber;
  };

  return (
    <article>
      <div className="tplinkBoxBase1">
        <Title content="GlobalConfig" />
        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>HTTP:</span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="httpState"
                  value="enabled"
                  defaultChecked={httpState == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, sethttpState)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="httpState"
                  value="disabled"
                  defaultChecked={httpState == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, sethttpState)}
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
                onClick={handleSubmit2}
              />
            </span>
          </div>
        </div>
        <Title content="AccessUserNumber" />

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
                onClick={handleSubmit3}
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
        {/* <Note /> */}
      </div>
    </article>
  );
}
