import React, { useEffect, useRef, useState } from 'react';

export default function ConfigBackup({ t, config }) {
  const downloadRef = useRef(null);
  const [downloadHref, setdownloadHref] = useState('');

  const handlePrepareJson = async () => {
    const backup = { config };
    const json = JSON.stringify(backup);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    setdownloadHref(href);
  };
  useEffect(() => {
    handlePrepareJson();
  }, []);

  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('ConfigBackup')}</div>

        <div className="configRestoreBox">
          <span>
            Backup System Config
            <br />
            <br />
            Click the Backup Config button to save the config to your computer.
          </span>
          <span className="buttonRowSpan">
            <div>
              <button
                className="basicInput bottomButton"
                onClick={() => downloadRef.current.click()}
              >
                {t('BackupConfig')}
              </button>
              <a
                ref={downloadRef}
                href={downloadHref}
                download="Config.json"
                style={{ display: 'none' }}
              ></a>

              <button className="basicInput bottomButton">{t('Help')}</button>
            </div>
          </span>
        </div>
        {/* <Note
          content={
            <>
              <br />
              It will take a long time to backup the config file. Please wait
              without any operation.
            </>
          }
        /> */}
      </div>
    </article>
  );
}
