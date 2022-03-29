import Title from 'components/General/Title/Title';
import React, { useState } from 'react';

export default function PortConfig({ t, config }) {
  const [portConf, setportConf] = useState(
    JSON.parse(JSON.stringify(config.portConfig)),
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

  const handleChangeDescription = (e) => {
    setportConf(
      portConf.map((item, index) => {
        if (portChecked[index] == true) {
          item.description = e.target.value;
        }
        return item;
      }),
    );
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
    config.portConfig = portConf;
  };

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTable portTable">
          <Title content="Usertable" addClass="row" />
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
            <span>{t('Description')}</span>
            <span>{t('Status')}</span>
            <span>{t('SpeedAndDuplex')}</span>
            <span>{t('FlowControl')}</span>
            <span>{t('LAG')}</span>
          </div>
          <div className="rowUser controlRow">
            <span>
              <input type="checkbox" onChange={handleSelectAllPorts} />
            </span>
            <span></span>
            <span>
              <input
                className="basicInput"
                type="text"
                maxLength={16}
                onChange={handleChangeDescription}
              />
            </span>
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
                onChange={(e) => handleChange(e, 'speed')}
              >
                <option>Auto</option>
                <option>10MHD</option>
              </select>
            </span>
            <span>
              <select
                className="basicInput"
                onChange={(e) => handleChange(e, 'flow')}
              >
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </span>
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
              <span>{item.description}</span>
              <span>{item.status}</span>
              <span>{item.speed}</span>
              <span>{item.flow}</span>
              <span>{item.lag}</span>
            </div>
          ))}
        </div>
        <div class="buttonsRow">
          <button class="basicInput actionButton" onClick={handleApply}>
            Apply
          </button>
          <button class="basicInput actionButton">Help</button>
        </div>
      </div>
      {/* <Note
        content={
          <>
            <br />
            The Port Description should not be more than 16 characters.
          </>
        }
      /> */}
    </article>
  );
}
