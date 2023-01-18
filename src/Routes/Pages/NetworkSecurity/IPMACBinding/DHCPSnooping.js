import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function DHCPSnooping() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      netSecDHCPSnooping: config.netSecDHCPSnooping,
      netSecGlobalFlowControl: config.netSecGlobalFlowControl,
      netSecDeclineThreshold: config.netSecDeclineThreshold,
      netSecDeclineFlowControl: config.netSecDeclineFlowControl,
      netSecOption82Support: config.netSecOption82Support,
      netSecOption82Field: config.netSecOption82Field,
      netSecCircuitIDEnable: config.netSecCircuitIDEnable,
      netSecRemoteIDEnable: config.netSecRemoteIDEnable,
      netSecCircuitID: config.netSecCircuitID,
      netSecRemoteID: config.netSecRemoteID,
      netSecDHCPSnoopingTable: config.netSecDHCPSnoopingTable,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>{t('DHCPSnoopingConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('DHCPSnooping')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={150}>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'dhcp snooping',
                  value: 'Enable',
                  checked: localConfig.netSecDHCPSnooping === 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecDHCPSnooping']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'dhcp snooping',
                  value: 'Disable',
                  checked: localConfig.netSecDHCPSnooping === 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecDHCPSnooping']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('GlobalFlowControl')}</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.netSecGlobalFlowControl,
                onChange: (e) =>
                  setLocalConfig({
                    ['netSecGlobalFlowControl']: e.target.value,
                  }),
              }}
              options={['Disable', 10, 20, 30, 40, 50]}
              afterText="pps"
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
                  'netSecDHCPSnooping',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecGlobalFlowControl',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecDeclineThreshold',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecDeclineFlowControl',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('DeclineThreshold')}</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.netSecDeclineThreshold,
                onChange: (e) =>
                  setLocalConfig({
                    ['netSecDeclineThreshold']: e.target.value,
                  }),
              }}
              options={['Disable', 5, 10, 15, 20, 25, 30]}
              afterText="pps"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('DeclineFlowControl')}</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.netSecDeclineFlowControl,
                onChange: (e) =>
                  setLocalConfig({
                    ['netSecDeclineFlowControl']: e.target.value,
                  }),
              }}
              options={[5, 10, 15, 20, 25, 30]}
              afterText="pps"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('Option82Config')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('Option82Support')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={150}>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: '82support',
                  value: 'Enable',
                  checked: localConfig.netSecOption82Support === 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecOption82Support']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: '82support',
                  value: 'Disable',
                  checked: localConfig.netSecOption82Support === 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['netSecOption82Support']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('ExistedOption82Field')}</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.netSecOption82Field,
                onChange: (e) =>
                  setLocalConfig({ ['netSecOption82Field']: e.target.value }),
              }}
              options={['Keep', 'Replace', 'Drop']}
              afterText="pps"
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
                  'netSecRemoteID',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecRemoteIDEnable',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecCircuitID',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecCircuitIDEnable',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecOption82Field',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'netSecOption82Support',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t('Custumization')}:</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                checked: localConfig.netSecCircuitIDEnable,
                onChange: () =>
                  setLocalConfig({
                    ['netSecCircuitIDEnable']:
                      !localConfig.netSecCircuitIDEnable,
                  }),
              }}
              afterText={t('CircuitID')}
            />
            <MultiPage.Input
              inputProps={{
                type: 'text',
                disabled: !localConfig.netSecCircuitIDEnable,
                value: localConfig.netSecCircuitID,

                onChange: (e) =>
                  setLocalConfig({ ['netSecCircuitID']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <MultiPage.Input
              inputProps={{
                type: 'checkbox',
                checked: localConfig.netSecRemoteIDEnable,
                onChange: () =>
                  setLocalConfig({
                    ['netSecRemoteIDEnable']: !localConfig.netSecRemoteIDEnable,
                  }),
              }}
              afterText={t('RemoteID')}
            />
            <MultiPage.Input
              inputProps={{
                type: 'text',
                disabled: !localConfig.netSecRemoteIDEnable,
                value: localConfig.netSecRemoteID,
                onChange: (e) =>
                  setLocalConfig({ ['netSecRemoteID']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('PortConfig')}
          data={localConfig.netSecDHCPSnoopingTable}
          gridTemp={'65px 65px repeat(4,1fr)65px'}
          saveTable={(data) =>
            setLocalConfig({ ['netSecDHCPSnoopingTable']: data })
          }
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'netSecDHCPSnoopingTable',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
