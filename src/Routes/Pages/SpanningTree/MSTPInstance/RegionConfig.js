import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function RegionConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      stpRegionName: config.stpRegionName,
      stpRevision: config.stpRevision,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('RegionConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpRegionName',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpRevision',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('RegionName')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.stpRegionName,
                onChange: (e) =>
                  setLocalConfig({ ['stpRegionName']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Revision')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 0,
                max: 65535,
                value: localConfig.stpRevision,
                onChange: (e) =>
                  setLocalConfig({ ['stpRevision']: e.target.value }),
              }}
              afterText="(0-65535)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
