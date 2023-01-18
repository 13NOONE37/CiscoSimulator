import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function PortConfigNetwork() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      portConfigNetwork: MultiPage.deepCopy(config.portConfigNetwork),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('HistoryControlTable')}
          data={localConfig.portConfigNetwork}
          saveTable={(data) => setLocalConfig({ ['portConfigNetwork']: data })}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'portConfigNetwork',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note25')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
