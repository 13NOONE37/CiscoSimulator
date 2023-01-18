import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function DiffPortPriority() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSGlobalDiffPortPriority: MultiPage.deepCopy(
        config.QoSGlobalDiffPortPriority,
      ),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.EditableTable
          title={t('StormControlConfig')}
          data={localConfig.QoSGlobalDiffPortPriority}
          saveTable={(data) =>
            setLocalConfig({ ['QoSGlobalDiffPortPriority']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'QoSGlobalDiffPortPriority',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note33')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
