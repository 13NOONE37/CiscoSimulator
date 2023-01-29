import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function PacketStatistics() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      MulticastAutoRefresh: config.MulticastAutoRefresh,
      MulticastRefreshPeriod: config.MulticastRefreshPeriod,
      MulticastStatisticsTable: config.MulticastStatisticsTable,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>{t('AutoRefresh')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AutoRefresh')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'MulticastAutoRefresh',
                  defaultChecked: localConfig.MulticastAutoRefresh === 'Enable',
                  onChange: () =>
                    setLocalConfig({ ['MulticastAutoRefresh']: 'Enable' }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'MulticastAutoRefresh',
                  defaultChecked:
                    localConfig.MulticastAutoRefresh === 'Disable',
                  onChange: () =>
                    setLocalConfig({ ['MulticastAutoRefresh']: 'Disable' }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'MulticastRefreshPeriod',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'MulticastAutoRefresh',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('RefreshPeriod')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 3,
                max: 300,
                value: localConfig.MulticastRefreshPeriod,
                onChange: (e) =>
                  setLocalConfig({
                    ['MulticastRefreshPeriod']: e.target.value,
                  }),
              }}
              afterText={t('sec(3-300)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('IGMPStatistics')}
          isLeftPortSelect={false}
          data={localConfig.MulticastStatisticsTable}
          saveTable={(data) =>
            setLocalConfig({ ['MulticastStatisticsTable']: data })
          }
          gridTemp={`65px repeat(6,1fr)`}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Clear')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
