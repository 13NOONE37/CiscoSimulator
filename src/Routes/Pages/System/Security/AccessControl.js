import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function AccessControl() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      accessControlMode: config.accessControlMode,
      accessControlInterface: config.accessControlInterface,
      accessControlIp: config.accessControlIp,
      accessControlMask: config.accessControlMask,
      accessControlMAC: config.accessControlMAC,
      accessControlPort: config.accessControlPort,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('AccessControlConfig')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ControlMode')}:</span>
            <MultiPage.Select
              selectProps={{
                defaultValue: localConfig.accessControlMode,
                onChange: (e) =>
                  setLocalConfig({ ['accessControlMode']: e.target.value }),
              }}
              options={['Disable', 'IP-based', 'MAC-based', 'Port-based']}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AccessInterface')}:</span>
            <MultiPage.Row>
              {['SNMP', 'Telnet', 'SSH', 'HTTP', 'HTTPS', 'Ping', 'All'].map(
                (protocol, index) => (
                  <MultiPage.Input
                    inputProps={{
                      type: 'checkbox',
                      defaultChecked: localConfig.accessControlInterface[index],
                      onChange: () => {
                        let temp = localConfig.accessControlInterface;
                        temp[index] = !temp[index];
                        setLocalConfig({ ['accessControlInterface']: temp });
                      },
                    }}
                    afterText={protocol}
                  />
                ),
              )}
            </MultiPage.Row>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={300}>
            <MultiPage.SubElementsLine>
              <span>{t('IPAddress')}:</span>
              <MultiPage.MaskedInput
                value={localConfig.accessControlIp}
                changeCallback={(data) =>
                  setLocalConfig({ ['accessControlIp']: data })
                }
              />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={50}>
              <span>{t('Mask')}:</span>
              <MultiPage.MaskedInput
                value={localConfig.accessControlMask}
                changeCallback={(data) =>
                  setLocalConfig({ ['accessControlMask']: data })
                }
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('MACAddress')}:</span>
            <MultiPage.Input
              afterText="(Format 00-00-00-00-00-01)"
              inputProps={{
                defaultValue: localConfig.accessControlMAC,
                onChange: (e) =>
                  setLocalConfig({ ['accessControlMAC']: e.target.value }),
              }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <span>{t('Port')}:</span>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.Row
            style={{
              border: '1px solid var(--tplink-grey2',
              justifyContent: 'space-between',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
              <MultiPage.Input
                inputProps={{
                  defaultChecked: localConfig.accessControlPort[index],
                  onChange: () => {
                    let temp = localConfig.accessControlPort;
                    temp[index] = !temp[index];
                    setLocalConfig({ ['accessControlPort']: temp });
                  },
                  type: 'checkbox',
                }}
                afterText={`${num}`}
              />
            ))}
          </MultiPage.Row>
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'accessControlMode',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'accessControlInterface',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'accessControlIp',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'accessControlMask',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'accessControlMAC',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'accessControlPort',
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
