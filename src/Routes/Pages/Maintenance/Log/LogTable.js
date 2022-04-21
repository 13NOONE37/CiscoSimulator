import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function LogTable() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      logTable: MultiPage.deepCopy(config.logTable),
    },
  );
  //#TODO:trzeba stworzyć tabele filtrującą i zamienić to co mamy tutaj na nią
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={770}>
        <MultiPage.EditableTable
          title={t('LogTable')}
          isPortSelect={false}
          isLeftPortSelect={false}
          gridTemp={'65px 165px 95px 95px 1fr'}
          data={localConfig.logTable}
          saveTable={() => null}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          1. There are 8 severity levels marked with values 0-7. The samller
          value has the higher priority.
          <br />
          2. This page displays logs in the log buffer and at most 512 logs are
          displayed.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
