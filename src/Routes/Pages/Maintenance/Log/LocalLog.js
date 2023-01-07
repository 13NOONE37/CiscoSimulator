import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function LocalLog() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      localLogTable: MultiPage.deepCopy(config.localLogTable),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={600}>
        <MultiPage.EditableTable
          title={t('LocalLog')}
          gridTemp={'125px 125px repeat(2,1fr) '}
          data={localConfig.localLogTable}
          saveTable={(data) => setLocalConfig({ ['localLogTable']: data })}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'localLogTable',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note18_1')}
          <br />
          {t('Note18_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
