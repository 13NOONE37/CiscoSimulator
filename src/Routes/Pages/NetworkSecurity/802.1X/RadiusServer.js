import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function RadiusServer() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      netSecRadiusPrimaryIP1: config.netSecRadiusPrimaryIP1,
      netSecRadiusPrimaryIP2: config.netSecRadiusPrimaryIP2,

      netSecRadiusSecondaryIP1: config.netSecRadiusSecondaryIP1,
      netSecRadiusSecondaryIP2: config.netSecRadiusSecondaryIP2,

      netSecRadiusAuthPort: config.netSecRadiusAuthPort,
      netSecRadiusAccountingPort: config.netSecRadiusAccountingPort,

      netSecRadiusAuthKey: config.netSecRadiusAuthKey,
      netSecRadiusAccountingKey: config.netSecRadiusAccountingKey,

      netSecRadiusAuthKeyEnable: config.netSecRadiusAuthKeyEnable,
      netSecRadiusKeyModifyEnable: config.netSecRadiusKeyModifyEnable,
      netSecRadiusAccounting: config.netSecRadiusAccounting,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('AuthenticationConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('PrimaryIP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                value={localConfig.netSecRadiusPrimaryIP1}
                changeCallback={(data) =>
                  setLocalConfig({ ['netSecRadiusPrimaryIP1']: data })
                }
                afterText={t('(Format: 192.168.0.1)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('SecondaryIP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                value={localConfig.netSecRadiusSecondaryIP1}
                changeCallback={(data) =>
                  setLocalConfig({ ['netSecRadiusSecondaryIP1']: data })
                }
                afterText={t('(Format: 192.168.0.1)')}
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
                  'netSecRadiusPrimaryIP1',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusSecondaryIP1',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusAuthPort',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusAuthKeyEnable',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusAuthKey',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('AuthPort')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 65535,
                  value: localConfig.netSecRadiusAuthPort,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecRadiusAuthPort']: e.target.value,
                    }),
                }}
                afterText={t('(1-65535)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.Input
            inputProps={{
              type: 'checkbox',
              checked: localConfig.netSecRadiusAuthKeyEnable,
              onChange: (e) =>
                setLocalConfig({
                  ['netSecRadiusAuthKeyEnable']:
                    !localConfig.netSecRadiusAuthKeyEnable,
                }),
            }}
            afterText={`${t('KeyModify')}:`}
          />
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AuthKey')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  value: localConfig.netSecRadiusAuthKey,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecRadiusAuthKey']: e.target.value,
                    }),
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>

      <MultiPage.Section>
        <MultiPage.Title>{t('AccountingConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Accounting')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'accountingEnable',
                  value: 'Enable',
                  checked: localConfig.netSecRadiusAccounting === 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecRadiusAccounting']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'accountingEnable',
                  value: 'Disable',
                  checked: localConfig.netSecRadiusAccounting === 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecRadiusAccounting']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('PrimaryIP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                value={localConfig.netSecRadiusPrimaryIP2}
                changeCallback={(data) =>
                  setLocalConfig({ ['netSecRadiusPrimaryIP2']: data })
                }
                afterText={t('(Format: 192.168.0.1)')}
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
                  'netSecRadiusAccounting',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusPrimaryIP2',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusSecondaryIP2',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusAccountingPort',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusKeyModifyEnable',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRadiusAccountingKey',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('SecondaryIP')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.MaskedInput
                value={localConfig.netSecRadiusSecondaryIP2}
                changeCallback={(data) =>
                  setLocalConfig({ ['netSecRadiusSecondaryIP2']: data })
                }
                afterText={t('(Format: 192.168.0.1)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('AccountingPort')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 1,
                  max: 65535,
                  value: localConfig.netSecRadiusAccountingPort,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecRadiusAccountingPort']: e.target.value,
                    }),
                }}
                afterText={t('(1-65535)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.Input
            inputProps={{
              type: 'checkbox',
              checked: localConfig.netSecRadiusKeyModifyEnable,
              onChange: (e) =>
                setLocalConfig({
                  ['netSecRadiusKeyModifyEnable']:
                    !localConfig.netSecRadiusKeyModifyEnable,
                }),
            }}
            afterText={`${t('KeyModify')}:`}
          />
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AccountingKey')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  value: localConfig.netSecRadiusAccountingKey,
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecRadiusAccountingKey']: e.target.value,
                    }),
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
