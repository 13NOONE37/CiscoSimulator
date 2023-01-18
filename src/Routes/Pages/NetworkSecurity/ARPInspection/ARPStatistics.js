import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function ARPStatistics() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      netSecARPStatisticsRefresh: config.netSecARPStatisticsRefresh,
      netSecARPStatisticsRefreshInterval:
        config.netSecARPStatisticsRefreshInterval,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('AutoRefresh')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AutoRefresh')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Enable',
                  name: 'ARPDetect',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecARPStatisticsRefresh']: e.target.value,
                    }),
                  checked: localConfig.netSecARPStatisticsRefresh === 'Enable',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Disable',
                  name: 'ARPDetect',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecARPStatisticsRefresh']: e.target.value,
                    }),
                  checked: localConfig.netSecARPStatisticsRefresh === 'Disable',
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
                  'netSecARPStatisticsRefresh',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecARPStatisticsRefreshInterval',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('RefreshInterval')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 3,
                  max: 300,
                  value: localConfig.netSecARPStatisticsRefreshInterval,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecARPStatisticsRefreshInterval']: e.target.value,
                    }),
                }}
                afterText={t('sec(3-300)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('IllegalARPPacket')}
          navItems={[
            'Port',
            'TrustedPort',
            'IllegalARPPacket',
            'Port',
            'TrustedPort',
            'IllegalARPPacket',
          ]}
          data={[
            [1, 'No', undefined, '2', 'No', undefined],
            [3, 'No', undefined, '4', 'No', undefined],
            [5, 'No', undefined, '6', 'No', undefined],
            [7, 'No', undefined, '8', 'No', undefined],
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
