import React, { useRef, useState, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function MulticastVLANConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      IGMPMulticastVLANID: '',
      IGMPMulticastVLANRouterPortTime: 300,
      IGMPMulticastVLANMemberPortTime: 260,
      IGMPMulticastVLANLeaveTime: 1,
      IGMPMulticastVLANStaticRouterPort: 'Disable',
      MulticastIGMPSnoopingVLANConfig: config.MulticastIGMPSnoopingVLANConfig,
    },
  );

  const handleSubmit = () => {
    if (
      !isNaN(localConfig.IGMPMulticastVLANID) &&
      !isNaN(localConfig.IGMPMulticastVLANRouterPortTime) &&
      !isNaN(localConfig.IGMPMulticastVLANMemberPortTime) &&
      !isNaN(localConfig.IGMPMulticastVLANLeaveTime)
    ) {
      let temp = localConfig.MulticastIGMPSnoopingVLANConfig;
      temp.data.push([
        localConfig.IGMPMulticastVLANID,
        localConfig.IGMPMulticastVLANRouterPortTime,
        localConfig.IGMPMulticastVLANMemberPortTime,
        localConfig.IGMPMulticastVLANLeaveTime,
        localConfig.IGMPMulticastVLANRouterPortTime,
      ]);
      setLocalConfig({ ['IPRangeConfig']: temp });
    } else {
      alert(t('There are empty fields'));
    }
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('VLANConfig')}</MultiPage.Title>

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
            <MultiPage.Button action={handleSubmit}>
              {t('Create')}
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
      </MultiPage.Section>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('VLANDTable')}
          data={localConfig.MulticastIGMPSnoopingVLANConfig}
          saveTable={(data) =>
            setLocalConfig({ ['MulticastIGMPSnoopingVLANConfig']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'MulticastIGMPSnoopingVLANConfig',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note43')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
