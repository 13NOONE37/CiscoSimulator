import React from 'react';
import defaultConfig from 'store/defaultConfig';

export default function SystemReset({ t, setConfig }) {
  const handleReset = () => setConfig({ ...defaultConfig });
  return (
    <article>
      <div className="tplinkBoxBase1">
        <div className="InfoTableTitle">{t('SystemReset')}</div>

        <div className="configRestoreBox resetBox">
          <span>
            Reset:
            <button className="basicInput bottomButton" onClick={handleReset}>
              Reset
            </button>
          </span>
        </div>

        {/* <Note
          content={
            <>
              <br />
              The System Reset option will restore the configuration to default
              and your current settings will be lost.
            </>
          }
        /> */}
      </div>
    </article>
  );
}
