import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function RemoteLog() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      remoteLogTable: MultiPage.deepCopy(config.remoteLogTable),
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.EditableTable
          title={t('LogHost')}
          gridTemp={'65px 65px 195px repeat(3,1fr) '}
          data={localConfig.remoteLogTable}
          saveTable={(data) => setLocalConfig({ ['remoteLogTable']: data })}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'remoteLogTable',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note19_1')}
          <br />
          {t('Note19_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
