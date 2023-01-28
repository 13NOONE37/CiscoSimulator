import React, { useContext, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function InstanceConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      STPMSTPInstanceTable: MultiPage.deepCopy(config.STPMSTPInstanceTable),
      STPMSTPVLANID: '',
      STPMSTPInstanceID: 0,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.EditableTable
          title={t('InstanceTable')}
          data={localConfig.STPMSTPInstanceTable}
          gridTemp={`65px 65px 100px 100px 1fr 65px`}
          saveTable={(data) =>
            setLocalConfig({ ['STPMSTPInstanceTable']: data })
          }
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'STPMSTPInstanceTable',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Title>{t('VLAN-InstanceMapping')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('VLANID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.STPMSTPVLANID,
                onChange: (e) => {
                  if (/^[0-9,-\s]*$/.test(e.target.value)) {
                    setLocalConfig({ ['STPMSTPVLANID']: e.target.value });
                  }
                },
              }}
              afterText={t('(1-4094)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                let temp = localConfig.STPMSTPInstanceTable;
                let index = Math.max(
                  0,
                  Math.min(7, localConfig.STPMSTPInstanceID),
                );
                temp.data[index][3] = localConfig.STPMSTPVLANID;

                setLocalConfig({ ['STPMSTPInstanceTable']: temp });
                MultiPage.handleApplyToConfig(
                  config,
                  { STPMSTPInstanceTable: temp },
                  'STPMSTPInstanceTable',
                );
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('InstanceID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 0,
                max: 8,
                value: localConfig.STPMSTPInstanceID,
                onChange: (e) =>
                  setLocalConfig({ ['STPMSTPInstanceID']: e.target.value }),
              }}
              afterText={t('(0-8, 0 is the cist)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Note>{t('Note36')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
