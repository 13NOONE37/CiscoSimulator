import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function RateLimit() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      QoSGlobalBandwidthRateLimitConfig: MultiPage.deepCopy(
        config.QoSGlobalBandwidthRateLimitConfig,
      ),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('RateLimitConfig')}
          data={localConfig.QoSGlobalBandwidthRateLimitConfig}
          saveTable={(data) =>
            setLocalConfig({ ['QoSGlobalBandwidthRateLimitConfig']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'QoSGlobalBandwidthRateLimitConfig',
              )
            }
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note31_1')}
          <br />
          {t('Note31_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
