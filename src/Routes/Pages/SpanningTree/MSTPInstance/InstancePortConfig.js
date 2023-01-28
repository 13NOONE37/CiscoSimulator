import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function InstancePortConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      STPMSTPInstancePortTable: MultiPage.deepCopy(
        config.STPMSTPInstancePortTable,
      ),
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('InstanceID')}:</span>
            <MultiPage.Select options={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.EditableTable
          title={t('PortConfig')}
          data={localConfig.STPMSTPInstancePortTable}
          gridTemp={`65px 65px 1fr 1fr 1fr 1fr 65px`}
          saveTable={(data) =>
            setLocalConfig({ ['STPMSTPInstancePortTable']: data })
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
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note>{t('Note37')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
