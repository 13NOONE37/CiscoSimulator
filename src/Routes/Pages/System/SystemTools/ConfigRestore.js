import React, { useState } from 'react';

export default function ConfigRestore({ t, config, setConfig }) {
  const [uploadedConfig, setuploadedConfig] = useState(null);

  const compareKeys = (a, b) => {
    let aKeys = Object.keys(a).sort();
    let bKeys = Object.keys(b).sort();
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', function () {
      const myObj = JSON.parse(this.result);
      setuploadedConfig(myObj.config);
    });
    reader.readAsText(file);
  };
  const handleRestore = () => {
    if (uploadedConfig == null) return;
    if (
      window.confirm(
        'Are you sure? It will overwrite your current configuration',
      )
    ) {
      if (compareKeys(config, uploadedConfig)) {
        setConfig(uploadedConfig);
      }
    }
  };

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('ConfigRestore')}</div>

        <div className="configRestoreBox">
          <span>
            <span className="spanText">
              Restore the config from the saved config file Select a backup
              config file and click the Restore Config button, and then you can
              restore to the previous config.
            </span>
            <span className="spanText">
              Config file:{' '}
              <input
                type="file"
                onChange={handleChange}
                accept="application/json"
              />
            </span>
          </span>
          <span className="buttonRowSpan">
            <div>
              <button
                className="basicInput bottomButton"
                onClick={handleRestore}
              >
                {t('RestoreConfig')}
              </button>
              <button className="basicInput bottomButton">{t('Help')}</button>
            </div>
          </span>
        </div>
        {/* <Note
          content={
            <>
              <br />
              It will take a long time to restore the config file. Please wait
              wihout any operation.
            </>
          }
        /> */}
      </div>
    </article>
  );
}
