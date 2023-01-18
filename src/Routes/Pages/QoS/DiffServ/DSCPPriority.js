import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function DSCPPriority() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSGlobalDiffDSCPMappingEnable: config.QoSGlobalDiffDSCPMappingEnable,
      QoSGlobalDiffDSCPMapping1: config.QoSGlobalDiffDSCPMapping1,
      QoSGlobalDiffDSCPMapping2: config.QoSGlobalDiffDSCPMapping2,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>{t('DSCPPriorityConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'QoSGlobalDiffDSCPMappingEnable',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine
            actionButton={() => (
              <MultiPage.Button>{t('Apply')}</MultiPage.Button>
            )}
          >
            <span>{t('DSCPPriority')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'DSCPEnable',
                  value: 'Enable',
                  checked:
                    localConfig.QoSGlobalDiffDSCPMappingEnable === 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffDSCPMappingEnable']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'DSCPEnable',
                  value: 'Disable',
                  checked:
                    localConfig.QoSGlobalDiffDSCPMappingEnable === 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffDSCPMappingEnable']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('PriorityLevel')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={400}>
            <MultiPage.SubElementsLine>
              <span>{t('DSCP')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.QoSGlobalDiffDSCPMapping1,
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffDSCPMapping1']: e.target.value,
                    }),
                }}
                options={[
                  '0',
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24',
                  '25',
                  '26',
                  '27',
                  '28',
                  '29',
                  '30',
                  '31',
                  '32',
                  '33',
                  '34',
                  '35',
                  '36',
                  '37',
                  '38',
                  '39',
                  '40',
                  '41',
                  '42',
                  '43',
                  '44',
                  '45',
                  '46',
                  '47',
                  '48',
                  '49',
                  '50',
                  '51',
                  '52',
                  '53',
                  '54',
                  '55',
                  '56',
                  '57',
                  '58',
                  '59',
                  '60',
                  '61',
                  '62',
                  '63',
                ]}
              />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Priority')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.QoSGlobalDiffDSCPMapping2,
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffDSCPMapping2']: e.target.value,
                    }),
                }}
                options={[
                  'Cos0',
                  'Cos1',
                  'Cos2',
                  'Cos3',
                  'Cos4',
                  'Cos5',
                  'Cos6',
                  'Cos7',
                ]}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          navItems={['DSCP', 'PriorityLevel', 'DSCP', 'PriorityLevel']}
          data={[
            [0, 'TC0', 1, 'TC0'],
            [2, 'TC0', 3, 'TC0'],
            [4, 'TC2', 5, 'TC2'],
            [6, 'TC3', 7, 'TC3'],
          ]}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'QoSGlobalDiffDSCPMapping1',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'QoSGlobalDiffDSCPMapping2',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note35')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
