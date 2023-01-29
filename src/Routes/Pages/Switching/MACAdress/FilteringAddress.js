import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function FilteringAddress() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      MACAddress: undefined,
      VLANID: undefined,
      Port: 1,
      SearchPhrase: '',
      SearchOption: 'All',
      addressTable: config.addressTable,
    },
  );
  const [forceUpdate, setForceUpdate] = useState(2);

  const handleCreate = () => {
    if (MultiPage.isValidMAC(localConfig.MACAddress)) {
      let temp = localConfig;
      temp.addressTable.push([
        localConfig.MACAddress,
        localConfig.VLANID,
        localConfig.Port,
        'Filtering',
        'no-Aging',
      ]);
      setLocalConfig({ ['addressTable']: temp.addressTable });
      MultiPage.handleApplyToConfig(config, temp, 'addressTable');
    } else {
      alert(t('InncorrectMAC'));
    }
  };
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
      }

      return isCorrect;
    });
    setLocalConfig({ ['addressTable']: temp });
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CreateFilteringAddress')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('MACAddress')}</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                onChange: (e) =>
                  setLocalConfig({ ['MACAddress']: e.target.value }),
              }}
              afterText={'(Format: 00-00-00-00-00-01)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleCreate}>
              {t('Create')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('VLAN ID')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.VLANID,
                min: 1,
                max: 4094,
                onChange: (e) => setLocalConfig({ ['VLANID']: e.target.value }),
              }}
              afterText={'(1-4094)'}
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
                options={['All', 'MAC Address', 'VLAN ID']}
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
          title={t('FilteringAddressTable')}
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
              localConfig.addressTable.filter((item) => item[3] == 'Filtering'),
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
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note16_1')}:{' '}
          {
            localConfig.addressTable.filter((item) => item[3] == 'Filtering')
              .length
          }
          <br />
          {t('Note16_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
