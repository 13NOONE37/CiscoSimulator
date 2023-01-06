import React, { useReducer, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function LoopbackDetection() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      loopbackDetectionStatus: config.loopbackDetectionStatus,
      detectionIntervalLoopback: config.detectionIntervalLoopback,
      automaticRecoveryTimeLoopback: config.automaticRecoveryTimeLoopback,
      webRefreshStatusLoopback: config.webRefreshStatusLoopback,
      webRefreshIntervalLoopback: config.webRefreshIntervalLoopback,
      portLoopback: config.portLoopback,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={200}>
            <span>{t('LoopbackDetectionStatus')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'loopbackStatus',
                  defaultChecked:
                    localConfig.loopbackDetectionStatus === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['loopbackDetectionStatus']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'loopbackStatus',
                  defaultChecked:
                    localConfig.loopbackDetectionStatus === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['loopbackDetectionStatus']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={200}>
            <span>{t('DetectionInterval')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 1000,
                value: localConfig.detectionIntervalLoopback,
                onChange: (e) =>
                  setLocalConfig({
                    ['detectionIntervalLoopback']: e.target.value,
                  }),
              }}
              afterText={t('seconds(1-1000)')}
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
                  'loopbackDetectionStatus',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'detectionIntervalLoopback',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'automaticRecoveryTimeLoopback',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'webRefreshStatusLoopback',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'webRefreshIntervalLoopback',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={200}>
            <span>{t('AutomaticRecoveryTime')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 100,
                value: localConfig.automaticRecoveryTimeLoopback,
                onChange: (e) =>
                  setLocalConfig({
                    ['automaticRecoveryTimeLoopback']: e.target.value,
                  }),
              }}
              afterText={t('detection times(1-100)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={200}>
            <span>{t('WebRefreshStatus')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'webRefreshStatus',
                  defaultChecked:
                    localConfig.webRefreshStatusLoopback === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['webRefreshStatusLoopback']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'webRefreshStatus',
                  defaultChecked:
                    localConfig.webRefreshStatusLoopback === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['webRefreshStatusLoopback']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={200}>
            <span>{t('WebRefreshInterval')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 3,
                max: 100,
                value: localConfig.webRefreshIntervalLoopback,
                onChange: (e) =>
                  setLocalConfig({
                    ['webRefreshIntervalLoopback']: e.target.value,
                  }),
              }}
              afterText={t('sec(3-100)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('PortConfig')}
          data={localConfig.portLoopback}
          gridTemp={'65px 65px repeat(3,1fr) repeat(3,95px)'}
          saveTable={(data) => setLocalConfig({ ['portLoopback']: data })}
          isPortSelect
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(config, localConfig, 'portLoopback')
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('ManualRecover')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note12')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
