import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function MulticastVLAN() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      IGMPMulticastVLANEnable: config.IGMPMulticastVLANEnable,
      IGMPMulticastVLANID: config.IGMPMulticastVLANID,
      IGMPMulticastVLANRouterPortTime: config.IGMPMulticastVLANRouterPortTime,
      IGMPMulticastVLANMemberPortTime: config.IGMPMulticastVLANMemberPortTime,
      IGMPMulticastVLANLeaveTime: config.IGMPMulticastVLANLeaveTime,
      IGMPMulticastVLANStaticRouterPort:
        config.IGMPMulticastVLANStaticRouterPort,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('MulticastVLAN')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('MulticastVLAN')}</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'IGMPMulticastVLANEnable',
                  defaultChecked:
                    localConfig.IGMPMulticastVLANEnable === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['IGMPMulticastVLANEnable']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'IGMPMulticastVLANEnable',
                  defaultChecked:
                    localConfig.IGMPMulticastVLANEnable === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['IGMPMulticastVLANEnable']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('VLAN ID')}:</span>
            <MultiPage.Input
              inputProps={{
                disabled: localConfig.IGMPMulticastVLANEnable == 'Disable',
                type: 'number',
                value: localConfig.IGMPMulticastVLANID,
                min: 2,
                max: 4094,
                onChange: (e) =>
                  setLocalConfig({ ['IGMPMulticastVLANID']: e.target.value }),
              }}
              afterText={'(2-4094)'}
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
                  'IGMPMulticastVLANID',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'IGMPMulticastVLANEnable',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'IGMPMulticastVLANLeaveTime',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'IGMPMulticastVLANMemberPortTime',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'IGMPMulticastVLANRouterPortTime',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'IGMPMulticastVLANStaticRouterPort',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('RouterPortTime')}:</span>
            <MultiPage.Input
              inputProps={{
                disabled: localConfig.IGMPMulticastVLANEnable == 'Disable',
                type: 'number',
                value: localConfig.IGMPMulticastVLANRouterPortTime,
                min: 60,
                max: 600,
                onChange: (e) =>
                  setLocalConfig({
                    ['IGMPMulticastVLANRouterPortTime']: e.target.value,
                  }),
              }}
              afterText={t('sec(60-600, recommended: 300)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MemberPortTime')}:</span>
            <MultiPage.Input
              inputProps={{
                disabled: localConfig.IGMPMulticastVLANEnable == 'Disable',
                type: 'number',
                value: localConfig.IGMPMulticastVLANMemberPortTime,
                min: 60,
                max: 600,
                onChange: (e) =>
                  setLocalConfig({
                    ['IGMPMulticastVLANMemberPortTime']: e.target.value,
                  }),
              }}
              afterText={t('sec(60-600, recommended: 260)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('LeaveTime')}:</span>
            <MultiPage.Input
              inputProps={{
                disabled: localConfig.IGMPMulticastVLANEnable == 'Disable',
                type: 'number',
                value: localConfig.IGMPMulticastVLANLeaveTime,
                min: 1,
                max: 30,
                onChange: (e) =>
                  setLocalConfig({
                    ['IGMPMulticastVLANLeaveTime']: e.target.value,
                  }),
              }}
              afterText={t('sec(1-30, recommended: 1)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('StaticRouterPort')}:</span>
            <MultiPage.Select
              selectProps={{
                disabled: localConfig.IGMPMulticastVLANEnable == 'Disable',
                value: localConfig.IGMPMulticastVLANStaticRouterPort,
                onChange: (e) =>
                  setLocalConfig({
                    ['IGMPMulticastVLANStaticRouterPort']: e.target.value,
                  }),
              }}
              options={['Disable', 1, 2, 3, 4, 5, 6, 7, 8]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note>
          {t('Note42_1')}
          <br />
          {t('Note42_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
