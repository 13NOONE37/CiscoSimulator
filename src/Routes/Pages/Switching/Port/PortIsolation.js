import React, { useState } from 'react';

export default function PortIsolation({ t, config }) {
  const [portIsolationConf, setportIsolationConf] = useState(
    config.portIsolationConfig,
  );
  const [currentPort, setcurrentPort] = useState(1);
  const [forwardPortChecked, setforwardPortChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [forceUpdate, setforceUpdate] = useState(1);

  const handleSelectMainPort = (e) => {
    const value = parseInt(e.target.value);
    setcurrentPort(value);
    setforwardPortChecked(config.portIsolationConfig[value - 1].forwardList);
  };
  const handleSelectPort = (index) => {
    forwardPortChecked[index] = !forwardPortChecked[index];
  };
  const handleSelectAllPorts = () => {
    let temp = forwardPortChecked;
    if (forwardPortChecked.includes(false)) {
      temp = temp.map((item) => {
        if (!item) item = true;
        return item;
      });
    } else {
      temp = temp.map((item) => (item = false));
    }
    setforwardPortChecked(temp);
  };
  const handleApply = () => {
    console.log(forwardPortChecked);
    config.portIsolationConfig = portIsolationConf;
    setforwardPortChecked([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  };

  const getForwardList = (list) => {
    return '1-8';
  };

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('PortIsolationConfig')}</div>
        <div className="subCategoryBox">
          <div class="boxSpaceBetween">
            <span class="boxEqualSpaceBetween">
              <span>Port:</span>
              <span className="moveRight">
                <select class="basicInput" onChange={handleSelectMainPort}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </span>
            </span>
          </div>
          <div className="boxSpaceBetween">
            <span className="boxColumn">
              <span>{t('ForwardPortlist')}:</span>
              <span class="devideSquare">
                <span className="checkboxContainer">
                  {forwardPortChecked.map(
                    (item, index) =>
                      index + 1 <= 6 && (
                        <label>
                          <input
                            type="checkbox"
                            defaultChecked={item}
                            onChange={() => handleSelectPort(index)}
                          />
                          {index + 1}
                          {`${item}`}
                        </label>
                      ),
                  )}
                </span>
                <span class="devider"></span>
                <span className="checkboxContainer">
                  {forwardPortChecked.map(
                    (item, index) =>
                      index + 1 > 6 && (
                        <label>
                          <input
                            type="checkbox"
                            defaultChecked={item}
                            onChange={() => handleSelectPort(index)}
                          />
                          {index + 1}
                          {`${item}`}
                        </label>
                      ),
                  )}
                </span>
              </span>
            </span>
          </div>
        </div>
        <div class="buttonsRow">
          <button
            class="basicInput actionButton"
            onClick={handleSelectAllPorts}
          >
            All
          </button>
          <button class="basicInput actionButton" onClick={handleApply}>
            Apply
          </button>
          <button class="basicInput actionButton">Help</button>
        </div>

        <div className="InfoTable portIsolationTable">
          <div className="row InfoTableTitle">{t('PortIsolationList')}</div>
          <div className="rowUser tableNav">
            <span>{t('Port')}</span>
            <span>{t('ForwardPortlist')}</span>
          </div>
          {portIsolationConf.map((item, index) => (
            <div className="rowUser" key={index}>
              <span>{index + 1}</span>
              <span>{getForwardList(item.forwardList)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="note">
        <strong>{t('Note')}:</strong>
      </div>
    </article>
  );
}
