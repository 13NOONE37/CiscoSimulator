import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function CosMapping() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSGlobalDiffCoSMappingEnable: config.QoSGlobalDiffCoSMappingEnable,
      QoSGlobalDiffCoSMapping1: config.QoSGlobalDiffCoSMapping1,
      QoSGlobalDiffCoSMapping2: config.QoSGlobalDiffCoSMapping2,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>{t('802.1P/CoSmapping')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'QoSGlobalDiffCoSMappingEnable',
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
            <span>{t('802.1P Priority')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'CoSEnable',
                  value: 'Enable',
                  checked:
                    localConfig.QoSGlobalDiffCoSMappingEnable === 'Enable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffCoSMappingEnable']: e.target.value,
                    }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'CoSEnable',
                  value: 'Disable',
                  checked:
                    localConfig.QoSGlobalDiffCoSMappingEnable === 'Disable',
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffCoSMappingEnable']: e.target.value,
                    }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>
          {t('Priority and CoS-mapping Config')}
        </MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={400}>
            <MultiPage.SubElementsLine>
              <span>{t('Tag-id/CoS-id')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.QoSGlobalDiffCoSMapping1,
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffCoSMapping1']: e.target.value,
                    }),
                }}
                options={[0, 1, 2, 3, 4, 5, 6, 7]}
              />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('Queue TC-id')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.QoSGlobalDiffCoSMapping2,
                  onChange: (e) =>
                    setLocalConfig({
                      ['QoSGlobalDiffCoSMapping2']: e.target.value,
                    }),
                }}
                options={['TC0', 'TC1', 'TC2', 'TC3']}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          navItems={[
            'Tag-id/CoS-id',
            'Queue TC-id',
            'Tag-id/CoS-id',
            'Queue TC-id',
          ]}
          data={[
            [0, 'TC1', 1, 'TC0'],
            [2, 'TC0', 3, 'TC1'],
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
                'QoSGlobalDiffCoSMapping1',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'QoSGlobalDiffCoSMapping2',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note34')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
