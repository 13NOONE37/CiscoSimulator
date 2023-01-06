import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function LACPConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      lacpPriority: config.lacpPriority,
      lacpConfig: MultiPage.deepCopy(config.lacpConfig),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'lacpPriority',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('SystemPriority')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.lacpPriority,
                min: 0,
                max: 65535,
                onChange: (e) =>
                  setLocalConfig({ ['lacpPriority']: e.target.value }),
              }}
              afterText={'(0-65535)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.EditableTable
          title={t('LACPConfig')}
          data={localConfig.lacpConfig}
          isPortSelect
          saveTable={(data) => setLocalConfig({ ['lacpConfig']: data })}
          gridTemp={'65px 65px 75px 1fr 75px 75px  95px'}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            action={() =>
              MultiPage.handleApplyToConfig(config, localConfig, 'lacpConfig')
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note>
          {t('Note15_1')}
          <br />
          {t('Note15_2')}
          <br />
          {t('Note15_3')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
