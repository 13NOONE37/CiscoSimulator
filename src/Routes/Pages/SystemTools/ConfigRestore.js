import React, { useState } from 'react';

export default function ConfigRestore({ t, config }) {
  const [uploadedConfig, setuploadedConfig] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    let result;
    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', function () {
        if (
          window.confirm('Arey you sure? It will overwrite all your profil.')
        ) {
          const myObj = JSON.parse(this.result);
          console.log(myObj);
        }
      });
      reader.readAsText(file);
    }
  };
  const handleRestore = () => {
    if (uploadedConfig == null) return;
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

        <div className="note">
          It will take a long time to restore the config file. Please wait
          wihout any operation.
        </div>
      </div>
    </article>
  );
}
