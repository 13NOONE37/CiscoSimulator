import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function STPConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      stpConfigEnable: config.stpConfigEnable,
      stpConfigVersion: config.stpConfigVersion,
      stpConfigCISTPriority: config.stpConfigCISTPriority,
      stpConfigHelloTime: config.stpConfigHelloTime,
      stpConfigMaxAge: config.stpConfigMaxAge,
      stpConfigForwardDelay: config.stpConfigForwardDelay,
      stpConfigTxHoldCount: config.stpConfigTxHoldCount,
      stpConfigMaxHops: config.stpConfigMaxHops,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpConfigEnable',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpConfigVersion',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('STP')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'stpConfigEnabled',
                  defaultChecked: localConfig.stpConfigEnable === 'Enable',
                  onChange: () =>
                    setLocalConfig({ ['stpConfigEnable']: 'Enable' }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'stpConfigEnabled',
                  defaultChecked: localConfig.stpConfigEnable === 'Disable',
                  onChange: () =>
                    setLocalConfig({ ['stpConfigEnable']: 'Disable' }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Version')}:</span>
            <MultiPage.Select
              selectProps={{
                defaultValue: localConfig.stpConfigVersion,
                onChange: (e) =>
                  setLocalConfig({ ['setpConfigVersion']: e.target.value }),
              }}
              options={['STP', 'RSTP', 'MSTP']}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
      <MultiPage.Section>
        <MultiPage.Title>{t('ParametersConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('CISTPriority')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.stpConfigCISTPriority,
                onChange: (e) =>
                  setLocalConfig({ ['stpConfigCISTPriority']: e.target.value }),
                min: 0,
                max: 61440,
              }}
              afterText={'0-61440'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('HelloTime')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.stpConfigHelloTime,
                onChange: (e) =>
                  setLocalConfig({ ['stpConfigHelloTime']: e.target.value }),
                min: 1,
                max: 10,
              }}
              afterText={'1-10'}
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
                  'stpConfigCISTPriority',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpConfigHelloTime',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpConfigMaxAge',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpConfigForwardDelay',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpConfigTxHoldCount',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'stpConfigMaxHops',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MaxAge')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.stpConfigMaxAge,
                onChange: (e) =>
                  setLocalConfig({ ['stpConfigMaxAge']: e.target.value }),
                min: 6,
                max: 40,
              }}
              afterText={'6-40'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('ForwardDelay')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.stpConfigForwardDelay,
                onChange: (e) =>
                  setLocalConfig({ ['stpConfigForwardDelay']: e.target.value }),
                min: 4,
                max: 30,
              }}
              afterText={'4-30'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('TxHoldCount')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.stpConfigTxHoldCount,
                onChange: (e) =>
                  setLocalConfig({ ['stpConfigTxHoldCount']: e.target.value }),
                min: 1,
                max: 20,
              }}
              afterText={'1-20'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('MaxHops')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.stpConfigMaxHops,
                onChange: (e) =>
                  setLocalConfig({ ['stpConfigMaxHops']: e.target.value }),
                min: 1,
                max: 40,
              }}
              afterText={'1-40'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
