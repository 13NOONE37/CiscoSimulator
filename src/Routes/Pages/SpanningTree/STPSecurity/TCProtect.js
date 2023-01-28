import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function TCProtect() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      STPSecurityTCThreshold: config.STPSecurityTCThreshold,
      TCSecurityTCProtectCycle: config.TCSecurityTCProtectCycle,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('TCProtect')}</MultiPage.Title>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'STPSecurityTCThreshold',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'TCSecurityTCProtectCycle',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('TCThreshold')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 100,
                value: localConfig.STPSecurityTCThreshold,
                onChange: (e) =>
                  setLocalConfig({
                    ['STPSecurityTCThreshold']: e.target.value,
                  }),
              }}
              afterText={t('packet(1-100)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('AgingTime')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 10,
                value: localConfig.TCSecurityTCProtectCycle,
                onChange: (e) =>
                  setLocalConfig({
                    ['TCSecurityTCProtectCycle']: e.target.value,
                  }),
              }}
              afterText={t('sec(1-100)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
