import Note from 'components/General/Note/Note';
import Title from 'components/General/Title/Title';
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as MultiPage from 'components/General/Page/MultiPage';

import AppContext from 'store/AppContext';
import handleGlobalChange from 'Utils/handleGlobalChange';

export default function DeviceDescription() {
  const { t } = useTranslation();
  const { config, setConfig } = useContext(AppContext);

  const [deviceName, setdeviceName] = useState(config.deviceName);
  const [deviceLocation, setdeviceLocation] = useState(config.deviceLocation);
  const [systemContact, setsystemContact] = useState(config.systemContact);

  const handleSubmit = (e) => {
    e.preventDefault();
    config.deviceName = deviceName;
    config.deviceLocation = deviceLocation;
    config.systemContact = systemContact;
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('DeviceDescription')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={180}>
            {t('DeviceName')}:
            <MultiPage.Input />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>Apply</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={180}>
            {t('DeviceLocation')}:
            <MultiPage.Input />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={180}>
            {t('SystemContact')}:
            <MultiPage.Input inputProps={{ type: 'email' }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note>
          The Device Name, Location and Contact should not be more than 32
          characters.
        </MultiPage.Note>
        {/* <article>
          <div className="tplinkBoxBase1">
            <Title content="DeviceDescription" />
            <form onSubmit={handleSubmit} className="tplinkFormBase1">
              <span>
                {t('DeviceName')}:{' '}
                <input
                  className="basicInput"
                  type="text"
                  maxLength={32}
                  value={deviceName}
                  onChange={(e) => handleGlobalChange(e, setdeviceName)}
                />
              </span>
              <span>
                {t('DeviceLocation')}:{' '}
                <input
                  className="basicInput"
                  type="text"
                  maxLength={32}
                  value={deviceLocation}
                  onChange={(e) => handleGlobalChange(e, setdeviceLocation)}
                />
                <input
                  type="submit"
                  className="moveRight buttonPointer"
                  value={t('Apply')}
                />
              </span>
              <span>
                {t('SystemContact')}:{' '}
                <input
                  className="basicInput"
                  type="text"
                  maxLength={32}
                  value={systemContact}
                  onChange={(e) => handleGlobalChange(e, setsystemContact)}
                />
              </span>
            </form>
            <Note
              content={
                <>
                  <br />
                </>
              }
            />
          </div>
        </article> */}
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
