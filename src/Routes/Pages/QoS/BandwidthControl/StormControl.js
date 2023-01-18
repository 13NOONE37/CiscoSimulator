import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function StormControlLimit() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSGlobalBandwidthStormControlConfig: MultiPage.deepCopy(
        config.QoSGlobalBandwidthStormControlConfig,
      ),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('StormControlConfig')}
          gridTemp={`65px 65px 1fr 1fr 1fr 65px`}
          data={localConfig.QoSGlobalBandwidthStormControlConfig}
          saveTable={(data) =>
            setLocalConfig({ ['QoSGlobalBandwidthStormControlConfig']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'QoSGlobalBandwidthStormControlConfig',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note32')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
