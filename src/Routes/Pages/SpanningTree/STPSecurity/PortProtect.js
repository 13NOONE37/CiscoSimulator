import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function PortProtect() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      STPSecurityPortProtect: MultiPage.deepCopy(config.STPSecurityPortProtect),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('PortProtect')}
          data={localConfig.STPSecurityPortProtect}
          gridTemp={`65px 65px repeat(5, 1fr) 65px`}
          saveTable={(data) =>
            setLocalConfig({ ['STPSecurityPortProtect']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() =>
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'STPSecurityPortProtect',
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
