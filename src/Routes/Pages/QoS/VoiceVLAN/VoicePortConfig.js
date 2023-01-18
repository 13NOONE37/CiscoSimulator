import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function VoicePortConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSVoiceGlobalPortConfig: MultiPage.deepCopy(
        config.QoSVoiceGlobalPortConfig,
      ),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('PortConfig')}
          data={localConfig.QoSVoiceGlobalPortConfig}
          saveTable={(data) =>
            setLocalConfig({ ['QoSVoiceGlobalPortConfig']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'QoSVoiceGlobalPortConfig',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
