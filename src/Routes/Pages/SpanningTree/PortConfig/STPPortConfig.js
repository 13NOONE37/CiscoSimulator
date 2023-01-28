import React, { useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function STPPortConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      stpPortConfig: config.stpPortConfig,
    },
  );

  return (
    <MultiPage.Section width={1100}>
      <MultiPage.EditableTable
        title={t('PortConfig')}
        gridTemp={'55px 55px repeat(11,1fr) '}
        data={localConfig.stpPortConfig}
        saveTable={(data) => setLocalConfig({ ['stpPortConfig']: data })}
      />
      <MultiPage.ButtonsRow>
        <MultiPage.Button
          isSpecial
          action={() =>
            MultiPage.handleApplyToConfig(config, localConfig, 'stpPortConfig')
          }
        >
          {t('Apply')}
        </MultiPage.Button>
        <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
        <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
      </MultiPage.ButtonsRow>
      <MultiPage.Note>{t('Note38')}</MultiPage.Note>
    </MultiPage.Section>
  );
}
