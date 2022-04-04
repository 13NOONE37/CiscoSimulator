import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function PortConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      portConfig: MultiPage.deepCopy(config.portConfig),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.EditableTable
          title={t('PortConfig')}
          gridTemp={'65px 65px 125px repeat(3,1fr) 65px'}
          data={localConfig.portConfig}
          saveTable={(data) => setLocalConfig({ ['portConfig']: data })}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(config, localConfig, 'portConfig')
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          The Port Description should not be more than 16 characters.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
