import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function DynamicAddress() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      autoAging: config.autoAging,
      agingTime: config.agingTime,
      SearchPhrase: '',
      SearchOption: 'All',
      addressTable: config.addressTable,
    },
  );
  const [forceUpdate, setForceUpdate] = useState(2);

  const handleFilter = () => {
    let temp = config.addressTable.filter((item) => {
      let isCorrect = true;
      if (localConfig.SearchOption === 'MAC Address') {
        if (item[0] != localConfig.SearchPhrase) {
          isCorrect = false;
        }
      } else if (localConfig.SearchOption === 'VLAN ID') {
        if (item[1] != localConfig.SearchPhrase) {
          isCorrect = false;
        }
      } else if (localConfig.SearchOption === 'Port') {
        if (item[2] != localConfig.SearchPhrase) {
          isCorrect = false;
        }
      }

      return isCorrect;
    });
    setLocalConfig({ ['addressTable']: temp });
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('AgingConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AutoAging')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'autoaging',
                  checked: localConfig.autoAging === 'Enable',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['autoAging']: e.target.value }),
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'autoaging',
                  checked: localConfig.autoAging === 'Disable',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['autoAging']: e.target.value }),
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() => {
                MultiPage.handleApplyToConfig(config, localConfig, 'autoAging');
                MultiPage.handleApplyToConfig(config, localConfig, 'agingTime');
              }}
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('AgingTime')}</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.agingTime,
                min: 10,
                max: 630,
                onChange: (e) =>
                  setLocalConfig({ ['agingTime']: e.target.value }),
              }}
              afterText={t('sec (10-630, default: 300)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('SearchOption')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleFilter}>
              {t('Search')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('SearchOption')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  defaultValue: localConfig.SearchOption,
                  onChange: (e) => {
                    setLocalConfig({ ['SearchOption']: e.target.value });
                  },
                }}
                options={['All', 'MAC Address', 'VLAN ID', 'Port']}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  disabled: localConfig.SearchOption === 'All',
                  onChange: (e) =>
                    setLocalConfig({ ['SearchPhrase']: e.target.value }),
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.EditableTable
          title={t('DynamicAddressTable')}
          isPortSelect={false}
          data={{
            names: ['MACAddress', 'VLAN ID', 'Port', 'Type', 'AgingStatus'],
            fields: [
              { type: 'disable' },
              { type: 'disable' },
              {
                type: 'select',
                options: [
                  'Port 1',
                  'Port 2',
                  'Port 3',
                  'Port 4',
                  'Port 5',
                  'Port 6',
                  'Port 7',
                  'Port 8',
                ],
              },
              { type: 'disable' },
              { type: 'disable' },
            ],
            data:
              forceUpdate &&
              localConfig.addressTable.filter((item) => item[3] == 'Dynamic'),
          }}
          saveTable={(data) => {
            setForceUpdate(forceUpdate + 1);
          }}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial disabled>
            {t('All')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial disabled>
            {t('Delete')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial disabled>
            {t('Bind')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note16_1')}:{' '}
          {
            localConfig.addressTable.filter((item) => item[3] == 'Dynamic')
              .length
          }
          <br />
          {t('Note16_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
