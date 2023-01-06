import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function PortSecurity() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      portSecurity: MultiPage.deepCopy(config.portSecurity),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={650}>
        <MultiPage.EditableTable
          title={t('PortSecurity')}
          gridTemp={'65px 65px repeat(2,1fr) 95px 95px'}
          data={localConfig.portSecurity}
          saveTable={(data) => setLocalConfig({ ['portConfig']: data })}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(config, localConfig, 'portSecurity')
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note11')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
