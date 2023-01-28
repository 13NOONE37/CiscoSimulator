import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function PortFilter() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      MulticastPortFilterTable: MultiPage.deepCopy(
        config.MulticastPortFilterTable,
      ),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={800}>
        <MultiPage.EditableTable
          title={t('PortFilterConfig')}
          data={localConfig.MulticastPortFilterTable}
          gridTemp={`65px  1fr 1fr 1fr 2fr 1fr 65px`}
          saveTable={(data) =>
            setLocalConfig({ ['MulticastPortFilterTable']: data })
          }
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'MulticastPortFilterTable',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note>
          {t('Note39_1')}
          <br />
          {t('Note39_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
