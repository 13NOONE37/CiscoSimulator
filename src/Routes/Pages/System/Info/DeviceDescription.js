import React, { useReducer, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';

export default function DeviceDescription() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      deviceName: config.deviceName,
      deviceLocation: config.deviceLocation,
      systemContact: config.systemContact,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('DeviceDescription')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={180}>
            {t('DeviceName')}:
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.deviceName,
                maxLength: 32,
                onChange: (e) =>
                  setLocalConfig({ ['deviceName']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'deviceName',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'deviceLocation',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'systemContact',
                );
              }}
            >
              Apply
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={180}>
            {t('DeviceLocation')}:
            <MultiPage.Input
              inputProps={{
                type: 'text',
                maxLength: 32,
                value: localConfig.deviceLocation,
                onChange: (e) =>
                  setLocalConfig({ ['deviceLocation']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={180}>
            {t('SystemContact')}:
            <MultiPage.Input
              inputProps={{
                type: 'email',
                value: localConfig.systemContact,
                maxLength: 32,
                onChange: (e) =>
                  setLocalConfig({ ['systemContact']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note>
          The Device Name, Location and Contact should not be more than 32
          characters.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
