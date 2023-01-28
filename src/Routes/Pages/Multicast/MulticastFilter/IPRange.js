import React, { useRef, useState, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function IPRange() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      ipID: undefined,
      startIpAddress: [null, null, null, null],
      endIpAddress: [null, null, null, null],
      IPRangeConfig: config.IPRangeConfig,
    },
  );

  const handleSubmit = () => {
    const regExIP =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!isNaN(localConfig.ipID)) {
      let addNotify = true;
      if (
        !regExIP.test(localConfig.startIpAddress.join('.')) ||
        !regExIP.test(localConfig.endIpAddress.join('.'))
      ) {
        addNotify = false;
        alert(t('Incorrect IP address'));
      }

      if (addNotify) {
        let temp = localConfig.IPRangeConfig;
        temp.data.push([
          localConfig.ipID,
          localConfig.startIpAddress,
          localConfig.endIpAddress,
        ]);
        setLocalConfig({ ['IPRangeConfig']: temp });
      }
    } else {
      alert(t('There are empty fields'));
    }
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('NotificationConfig')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('IP-RangeID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.ipID,
                min: 1,
                max: 30,
                onChange: (e) => setLocalConfig({ ['ipID']: e.target.value }),
              }}
              afterText={t('(1-30)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleSubmit}>
              {t('Create')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={300}>
            <MultiPage.SubElementsLine>
              <span>{t('StartMulticastIP')}:</span>
              <MultiPage.MaskedInput
                value={localConfig.startIpAddress}
                changeCallback={(data) =>
                  setLocalConfig({ ['startIpAddress']: data })
                }
                afterText={'Format: 225.0.0.1)'}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={300}>
            <MultiPage.SubElementsLine>
              <span>{t('EndMulticastIP')}:</span>
              <MultiPage.MaskedInput
                value={localConfig.endIpAddress}
                changeCallback={(data) =>
                  setLocalConfig({ ['endIpAddress']: data })
                }
                afterText={'Format: 225.0.0.1)'}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
      </MultiPage.Section>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('IP-RangeTable')}
          data={localConfig.IPRangeConfig}
          saveTable={(data) => setLocalConfig({ ['IPRangeConfig']: data })}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'IPRangeConfig',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('TotalIP-Range')}: {localConfig.IPRangeConfig?.data.length}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
