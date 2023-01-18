import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function GlobalConfigNetwork() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      netSecGlobal802Enable: config.netSecGlobal802Enable,
      netSecGlobalAuthMethod: config.netSecGlobalAuthMethod,
      netSecGlobalVLAN: config.netSecGlobalVLAN,
      netSecGlobalVLANID: config.netSecGlobalVLANID,
      netSecGlobalQuiet: config.netSecGlobalQuiet,
      netSecGlobalQuietPeriod: config.netSecGlobalQuietPeriod,
      netSecGlobalRetryTimes: config.netSecGlobalRetryTimes,
      netSecGlobalSuppliciantTimeout: config.netSecGlobalSuppliciantTimeout,
      netSecGlobalServerTimeout: config.netSecGlobalServerTimeout,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>802.1X:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Enable',
                  name: '802enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobal802Enable']: e.target.value,
                    }),
                  defaultChecked:
                    localConfig.netSecGlobal802Enable === 'Enable',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Disable',
                  name: '802enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobal802Enable']: e.target.value,
                    }),
                  defaultChecked:
                    localConfig.netSecGlobal802Enable === 'Disable',
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
                  'netSecGlobal802Enable',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalAuthMethod',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalVLAN',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalVLANID',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('AuthMethod')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.netSecGlobalAuthMethod,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalAuthMethod']: e.target.value,
                    }),
                }}
                options={['PAP', 'EAP-MD5']}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('GuestVLAN')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Enable',
                  name: 'vlanenable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalVLAN']: e.target.value,
                    }),
                  defaultChecked: localConfig.netSecGlobalVLAN === 'Enable',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Disable',
                  name: 'vlanenable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalVLAN']: e.target.value,
                    }),
                  defaultChecked: localConfig.netSecGlobalVLAN === 'Disable',
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('GuestVLANID')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 4096,
                  value: localConfig.netSecGlobalVLANID,
                  onChange: (e) =>
                    setLocalConfig({ ['netSecGlobalVLANID']: e.target.value }),
                }}
                afterText={t('(1-4094)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section>
        <MultiPage.Title>{t('AuthenticationConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Quiet')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Enable',
                  name: 'quietenable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalQuiet']: e.target.value,
                    }),
                  defaultChecked: localConfig.netSecGlobalQuiet === 'Enable',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Disable',
                  name: 'quietenable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalQuiet']: e.target.value,
                    }),
                  defaultChecked: localConfig.netSecGlobalQuiet === 'Disable',
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('QuietPeriod')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 999,
                  value: localConfig.netSecGlobalQuietPeriod,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalQuietPeriod']: e.target.value,
                    }),
                }}
                afterText={t('sec(1-999)')}
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
                  'netSecGlobalQuiet',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalQuietPeriod',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalRetryTimes',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalSuppliciantTimeout',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalServerTimeout',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('RetryTimes')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 9,
                  value: localConfig.netSecGlobalRetryTimes,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalRetryTimes']: e.target.value,
                    }),
                }}
                afterText={t('(1-9)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('SuppliciantTimeout')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 9,
                  value: localConfig.netSecGlobalSuppliciantTimeout,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalSuppliciantTimeout']: e.target.value,
                    }),
                }}
                afterText={t('sec(1-9)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ServerTimeout')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 9,
                  value: localConfig.netSecGlobalServerTimeout,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecGlobalServerTimeout']: e.target.value,
                    }),
                }}
                afterText={t('sec(1-9)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
