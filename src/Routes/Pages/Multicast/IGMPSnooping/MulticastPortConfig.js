import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function MulticastPortConfig() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      IGMPPortConfigTable: config.IGMPPortConfigTable,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.EditableTable
          title={t('PortConfig')}
          data={localConfig.IGMPPortConfigTable}
          saveTable={(data) =>
            setLocalConfig({ ['IGMPPortConfigTable']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'IGMPPortConfigTable',
              )
            }
            isSpecial
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
