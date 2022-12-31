import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function SystemIp() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      ip: config.ip,
      mask: config.mask,
      gateway: config.gateway,
      addressMode: config.addressMode,
      managmentVlan: config.managmentVlan,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('IPConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('MACAddress')}:</span>
            <span>{config.mac}</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('IPAddressMode')}:</span>
            <MultiPage.Row style={{ gap: '30px' }}>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Static IP',
                  name: 'ipAddressMode',
                  defaultChecked: localConfig.addressMode === 'Static IP',
                  onChange: (e) =>
                    setLocalConfig({ ['addressMode']: e.target.value }),
                }}
                afterText={t('Static IP')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'DHCP',
                  name: 'ipAddressMode',
                  defaultChecked: localConfig.addressMode === 'DHCP',
                  onChange: (e) =>
                    setLocalConfig({ ['addressMode']: e.target.value }),
                }}
                afterText={t('DHCP')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'BOOTP',
                  name: 'ipAddressMode',
                  defaultChecked: localConfig.addressMode === 'BOOTP',
                  onChange: (e) =>
                    setLocalConfig({ ['addressMode']: e.target.value }),
                }}
                afterText={t('BOOTP')}
              />
            </MultiPage.Row>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ManagmentVlan')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 4094,
                value: localConfig.managmentVlan,
                onChange: (e) =>
                  setLocalConfig({
                    ['managmentVlan']: e.target.value,
                  }),
              }}
              afterText="(VLAN ID: 1-4094)"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(config, localConfig, 'ip');
                MultiPage.handleApplyToConfig(config, localConfig, 'mask');
                MultiPage.handleApplyToConfig(config, localConfig, 'gateway');
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'addressMode',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'managmentVlan',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('IPAddress')}:</span>
            <MultiPage.MaskedInput
              isDisabled={localConfig.addressMode !== 'Static IP'}
              value={localConfig.ip}
              changeCallback={(data) => setLocalConfig({ ['ip']: data })}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('SubnetMask')}:</span>
            <MultiPage.MaskedInput
              isDisabled={localConfig.addressMode !== 'Static IP'}
              value={localConfig.mask}
              changeCallback={(data) => setLocalConfig({ ['mask']: data })}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('DefaultGateway')}:</span>
            <MultiPage.MaskedInput
              isDisabled={localConfig.addressMode !== 'Static IP'}
              value={localConfig.gateway}
              changeCallback={(data) => setLocalConfig({ ['gateway']: data })}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note>{t('Note2')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
