import Title from 'components/General/Title/Title';
import React from 'react';

export default function EditTable({
  t,
  config,
  name,
  navBar = [{ name: 'MAC', type: 'checkbox' }, 'LearnedNum', 'LearnMode'],
}) {
  const [defaultConfig, setDefaultConfig] = useState(
    JSON.parse(JSON.stringify(config[name])),
  );

  const [forceUpdate, setforceUpdate] = useState(1);
  const [currentSelect, setcurrentSelect] = useState(undefined);
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
    setDefaultConfig(
      defaultConfig.map((item, index) => {
        if (portChecked[index] == true) {
          item[param] = e.target.value;
        }
        return item;
      }),
    );
  const handleApply = () => {
    config[name] = defaultConfig;
  };

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTable portSecurityTable">
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
            <span>{t('MaxLearnedMAC')}</span>
            <span>{t('LearnedNum')}</span>
            <span>{t('LearnMode')}</span>
            <span>{t('Status')}</span>
          </div>
          <div className="rowUser controlRow">
            <span>
              <input type="checkbox" onChange={handleSelectAllPorts} />
            </span>
            <span></span>
            <span>
              <input
                className="basicInput"
                type="number"
                min={1}
                max={64}
                onChange={(e) => handleChange(e, 'maxLearnedMAC')}
              />
            </span>
            <span></span>
            <span>
              <select
                className="basicInput"
                onChange={(e) => handleChange(e, 'learnMode')}
              >
                <option>Dynamic</option>
                <option>Static</option>
              </select>
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
            <span></span>
          </div>
          {portSecurityConf.map((item, index) => (
            <div className="rowUser" key={index}>
              <span>
                <input
                  type="checkbox"
                  checked={portChecked[index]}
                  onChange={() => handleSelectPort(index)}
                />
              </span>
              <span>{index + 1}</span>
              <span>{item.maxLearnedMAC}</span>
              <span>{item.learnedNum}</span>
              <span>{item.learnMode}</span>
              <span>{item.status}</span>
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
      <div className="note">
        <strong>{t('Note')}:</strong>
        <br />
        The maximum number of MAC addresses learned from individual port can be
        set to 64.
      </div>
    </article>
  );
}
