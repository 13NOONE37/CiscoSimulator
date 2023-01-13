import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function GlobalConfigSNMP() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      SNMPEnable: config.SNMPEnable,
      SNMPLocalEngineID: config.SNMPLocalEngineID,
      SNMPRemoteEngineID: config.SNMPRemoteEngineID,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(config, localConfig, 'SNMPEnable')
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('SNMP')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'SNMPEnable',
                  defaultChecked: localConfig.SNMPEnable === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['SNMPEnable']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'SNMPEnable',
                  defaultChecked: localConfig.SNMPEnable === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['SNMPEnable']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('LocalEngine')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                setLocalConfig({
                  ['SNMPLocalEngineID']: '80002e5703001478f047cb',
                })
              }
            >
              {t('Default ID')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Local Engine ID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.SNMPLocalEngineID,
                onChange: (e) => {
                  if (/^[0-9a-fA-F]{0,64}$/.test(e.target.value)) {
                    setLocalConfig({ ['SNMPLocalEngineID']: e.target.value });
                  }
                },
              }}
              afterText={t('(10-64 Hex)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'SNMPLocalEngineID',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine></MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('RemoteEngine')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'SNMPRemoteEngineID',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Remote Engine ID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                maxLength: 64,
                value: localConfig.SNMPRemoteEngineID,
                onChange: (e) => {
                  if (/^[0-9a-fA-F]{0,64}$/.test(e.target.value)) {
                    setLocalConfig({ ['SNMPRemoteEngineID']: e.target.value });
                  }
                },
              }}
              afterText={t('(0 or 10-64 Hex)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine></MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note>{t('Note22')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
