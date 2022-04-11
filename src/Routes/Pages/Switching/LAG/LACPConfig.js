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
          1. To avoid any broadcast storm when LACP takes effect, you are
          suggested to enable Spanning Tree function.
          <br />
          2. LACP function can't be enabled for the port already in a static
          link aggregation group.
          <br />
          3. The value of admin key can't be the same with the group number of
          any static link aggregation group in used and vice versa.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
