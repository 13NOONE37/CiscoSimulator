import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function TrafficStatistics() {
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
        <MultiPage.Title>{t('AutoRefresh')}</MultiPage.Title>
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
          title={t('Statistics')}
          navItems={['Recived', 'Sent']}
          data={[
            ['Multicast	0', 'Multicast	0'],
            ['Multicast	0', 'Multicast	0'],
            ['Unicast	0', 'Unicast	0'],
            ['Alignment Errors	0', 'Alignment Errors	0'],
            ['UndersizePkts	0'],
            ['Pkts64Octets	0'],
            ['Pkts65to127Octets	0'],
            ['Pkts128to255Octets	0'],
            ['Pkts256to511Octets	0'],
            ['Pkts512to1023Octets	0'],
            ['PktsOver1023Octets	0'],
          ]}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
