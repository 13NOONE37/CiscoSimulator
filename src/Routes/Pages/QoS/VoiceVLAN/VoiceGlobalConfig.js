import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function VoiceGlobalConfig() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSVoiceGlobalVoiceVLAN: config.QoSVoiceGlobalVoiceVLAN,
      QoSVoiceGlobalVLANID: config.QoSVoiceGlobalVLANID,
      QoSVoiceGlobalAgingTime: config.QoSVoiceGlobalAgingTime,
      QoSVoiceGlobalPriority: config.QoSVoiceGlobalPriority,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Voice VLAN')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Enable',
                  name: 'voiceVLANEnable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSVoiceGlobalVoiceVLAN']: e.target.value,
                    }),
                  defaultChecked:
                    localConfig.QoSVoiceGlobalVoiceVLAN === 'Enable',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Disable',
                  name: 'voiceVLANEnable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSVoiceGlobalVoiceVLAN']: e.target.value,
                    }),
                  defaultChecked:
                    localConfig.QoSVoiceGlobalVoiceVLAN === 'Disable',
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
                  'QoSVoiceGlobalVoiceVLAN',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'QoSVoiceGlobalVLANID',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'QoSVoiceGlobalAgingTime',
                );
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'QoSVoiceGlobalPriority',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('VLAN ID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 4,
                max: 4094,
                value: localConfig.QoSVoiceGlobalVLANID,
                onChange: (e) =>
                  setLocalConfig({
                    ['QoSVoiceGlobalVLANID']: e.target.value,
                  }),
              }}
              afterText={'(4-4094)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('AgingTime')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 43200,
                value: localConfig.QoSVoiceGlobalAgingTime,
                onChange: (e) =>
                  setLocalConfig({
                    ['QoSVoiceGlobalAgingTime']: e.target.value,
                  }),
              }}
              afterText={'min(1-43200, default 1440)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Priority')}:</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.QoSVoiceGlobalPriority,
                onChange: (e) =>
                  setLocalConfig({
                    ['QoSVoiceGlobalPriority']: e.target.value,
                  }),
              }}
              options={[1, 2, 3, 4, 5, 6, 7, 8]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
