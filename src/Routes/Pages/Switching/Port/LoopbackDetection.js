import React, { useState } from 'react';
import handleGlobalChange from 'Utils/handleGlobalChange';

export default function LoopbackDetection({ t, config }) {
  const [loopbackDetection, setloopbackDetection] = useState(
    config.portLoopbackGlobal.detection,
  );
  const [interval, setinterval] = useState(config.portLoopbackGlobal.interval);
  const [automaticRecovery, setautomaticRecovery] = useState(
    config.portLoopbackGlobal.automaticRecovery,
  );
  const [webRefresh, setwebRefresh] = useState(
    config.portLoopbackGlobal.webRefresh,
  );
  const [webInterval, setwebInterval] = useState(
    config.portLoopbackGlobal.webInterval,
  );

  const [portConf, setportConf] = useState(
    JSON.parse(JSON.stringify(config.portLoopback)),
  );

  const [portChecked, setportChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [currentSelect, setcurrentSelect] = useState(undefined);
  const [forceUpdate, setforceUpdate] = useState(1);

  const handleSelectOne = () => {
    if (!isNaN(currentSelect)) {
      let temp = portChecked;
      temp[currentSelect - 1] = true;
      setportChecked(temp);
      setcurrentSelect(undefined);
    }
  };
  const handleSelectPort = (index) => {
    let temp = portChecked;
    temp[index] = !temp[index];
    setportChecked(temp);
    setforceUpdate(forceUpdate + 1);
  };
  const handleSelectAllPorts = () => {
    let temp = portChecked;
    if (portChecked.includes(false)) {
      temp = temp.map((item) => {
        if (!item) item = true;
        return item;
      });
    } else {
      temp = temp.map((item) => (item = false));
    }
    setportChecked(temp);
  };

  const handleChange = (e, param) =>
    setportConf(
      portConf.map((item, index) => {
        if (portChecked[index] == true) {
          item[param] = e.target.value;
        }
        return item;
      }),
    );
  const handleApply = () => {
    config.portLoopback = portConf;
  };
  const handleSubmit = () => {
    config.portLoopbackGlobal.detection = loopbackDetection;
    config.portLoopbackGlobal.interval = interval;
    config.portLoopbackGlobal.automaticRecovery = automaticRecovery;
    config.portLoopbackGlobal.webRefresh = webRefresh;
    config.portLoopbackGlobal.webInterval = webInterval;
  };
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="row InfoTableTitle">{t('GlobalConfig')}</div>

        <div className="subCategoryBox">
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('LoopbackDetection\nStatus')}: </span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="loopbackDetectionStatus"
                  value="enabled"
                  defaultChecked={loopbackDetection == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setloopbackDetection)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="loopbackDetectionStatus"
                  value="disabled"
                  defaultChecked={loopbackDetection == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setloopbackDetection)}
                />
                <label>Disable</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('DetectionInterval')}:</span>
              <span className="moveRight">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={interval}
                  onChange={(e) => handleGlobalChange(e, setinterval)}
                />
                <label> seconds(1-1000)</label>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('AutomaticRecovery\nTime')}:</span>
              <span className="moveRight">
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={automaticRecovery}
                  onChange={(e) => handleGlobalChange(e, setautomaticRecovery)}
                />
                <label> detection times(1-100)</label>
              </span>
            </span>
            <span>
              <input
                value={t('Apply')}
                className="buttonPointer"
                type="button"
                onClick={handleSubmit}
              />
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('WebRefreshStatus')}: </span>
              <span className="moveRight">
                <input
                  type="radio"
                  name="webRefreshStatus"
                  value="enabled"
                  defaultChecked={webRefresh == 'enabled'}
                  onChange={(e) => handleGlobalChange(e, setwebRefresh)}
                />
                <label>Enable</label>
                <input
                  type="radio"
                  name="webRefreshStatus"
                  value="disabled"
                  defaultChecked={webRefresh == 'disabled'}
                  onChange={(e) => handleGlobalChange(e, setwebRefresh)}
                />
                <label>Disable</label>
              </span>
            </span>
          </div>

          <div className="boxSpaceBetween">
            <span className="boxEqualSpaceBetween">
              <span>{t('WebRefreshInterval')}: </span>
              <span className="moveRight">
                <input
                  type="number"
                  min={3}
                  max={100}
                  value={webInterval}
                  onChange={(e) => handleGlobalChange(e, setwebInterval)}
                />
                <label> seconds(3-100)</label>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="tplinkBoxBase1">
        <div className="InfoTable isolationTable">
          <div className="row InfoTableTitle">{t('Usertable')}</div>
          <div className="rowUser portSelect">
            <span>
              Port
              <input
                className="basicInput"
                type="number"
                min={1}
                max={8}
                value={currentSelect}
                onChange={(e) =>
                  setcurrentSelect(
                    Math.max(1, Math.min(e.target.valueAsNumber, 8)),
                  )
                }
              />
              <button className="buttonPointer" onClick={handleSelectOne}>
                {t('Select')}
              </button>
            </span>
          </div>
          <div className="rowUser tableNav">
            <span>{t('Select')}</span>
            <span>{t('Port')}</span>
            <span>{t('Status')}</span>
            <span>{t('OperationMode')}</span>
            <span>{t('RecoveryMode')}</span>
            <span>{t('LoopStatus')}</span>
            <span>{t('BlockStatus')}</span>
            <span>{t('LAG')}</span>
          </div>
          <div className="rowUser controlRow">
            <span>
              <input type="checkbox" onChange={handleSelectAllPorts} />
            </span>
            <span></span>
            <span>
              <select
                className="basicInput"
                onChange={(e) => handleChange(e, 'status')}
              >
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </span>
            <span>
              <select
                className="basicInput"
                onChange={(e) => handleChange(e, 'operationMode')}
              >
                <option>PortBased</option>
                <option>Alert</option>
              </select>
            </span>
            <span>
              <select
                className="basicInput"
                onChange={(e) => handleChange(e, 'recoveryMode')}
              >
                <option>Auto</option>
                <option>Manual</option>
              </select>
            </span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {portConf.map((item, index) => (
            <div className="rowUser" key={index}>
              <span>
                <input
                  type="checkbox"
                  checked={portChecked[index]}
                  onChange={() => handleSelectPort(index)}
                />
              </span>
              <span>{index + 1}</span>
              <span>{item.status}</span>
              <span>{item.operationMode}</span>
              <span>{item.recoveryMode}</span>
              <span>{item.loopStatus}</span>
              <span>{item.blockStatus}</span>
              <span>{item.LAG}</span>
            </div>
          ))}
        </div>
        <div class="buttonsRow">
          <button class="basicInput actionButton" onClick={handleApply}>
            Apply
          </button>
          <button class="basicInput actionButton">Manual Recovery</button>
          <button class="basicInput actionButton">Help</button>
        </div>
      </div>
      <div className="note">
        <strong>{t('Note')}:</strong>
        <br />
        Recovery mode is just useful to process not in Alrt process mode.
        <br />
        Loopback Detection must coordinate with storm control.
      </div>
    </article>
  );
}
