import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function ARPDefend() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      ARPDefendTable: MultiPage.deepCopy(config.ARPDefendTable),
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('ARPDefend')}
          data={localConfig.ARPDefendTable}
          saveTable={(data) => setLocalConfig({ ['ARPDefendTable']: data })}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'ARPDefendTable',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note27')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
