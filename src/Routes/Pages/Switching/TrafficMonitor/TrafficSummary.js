import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function TrafficSummary() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      trafficAutoRefresh: config.trafficAutoRefresh,
      trafficRefreshRate: config.trafficRefreshRate,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('TrafficSummary')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'trafficAutoRefresh',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'trafficRefreshRate',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('AutoRefresh')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'autoRefresh',
                  defaultChecked: localConfig.trafficAutoRefresh === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['trafficAutoRefresh']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'autoRefresh',
                  defaultChecked: localConfig.trafficAutoRefresh === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['trafficAutoRefresh']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('RefreshRate')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.trafficRefreshRate,
                min: 3,
                max: 300,
                onChange: (e) =>
                  setLocalConfig({ ['trafficRefreshRate']: e.target.value }),
              }}
              afterText={t('sec(3-300)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('TrafficSummary')}
          navItems={[
            'Port',
            'Packets Rx',
            'Packets Tx',
            'Octets Rx',
            'Octets Tx',
            'Statistics',
          ]}
          data={[
            [
              1,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
            [
              2,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
            [
              3,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
            [
              4,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
            [
              5,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
            [
              6,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
            [
              7,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
            [
              8,
              0,
              0,
              0,
              0,
              <MultiPage.Button isBlank>{t('Statistics')}</MultiPage.Button>,
            ],
          ]}
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
