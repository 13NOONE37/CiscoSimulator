import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function StaticMulticastIP() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      addressIP: [null, null, null, null],
      VLANID: 1,
      Port: '',
      SearchPhrase: '',
      SearchOption: 'All',
      multicastIPTable: config.multicastIPTable,
    },
  );

  const regExIP =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const handleCreate = () => {
    if (regExIP.test(localConfig.addressIP.join('.'))) {
      let temp = localConfig;
      temp.multicastIPTable.push([
        localConfig.addressIP,
        localConfig.VLANID,
        localConfig.Port,
        'Static',
      ]);
      setLocalConfig({ ['multicastIPTable']: temp.multicastIPTable });
      MultiPage.handleApplyToConfig(config, temp, 'multicastIPTable');
    } else {
      alert(t('InncorrectIPAddress'));
    }
  };
  const handleFilter = () => {
    let temp = config.multicastIPTable.filter((item) => {
      let isCorrect = true;
      if (localConfig.SearchOption === 'Multicast IP') {
        if (item[0].join('.') != localConfig.SearchPhrase) {
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
    setLocalConfig({ ['multicastIPTable']: temp });
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CreateStaticMulticast')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('MulticastIP')}</span>
            <MultiPage.MaskedInput
              value={localConfig.addressIP}
              changeCallback={(data) => setLocalConfig({ ['addressIP']: data })}
              afterText={'Format: 225.0.0.1'}
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
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ForwardPort')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.Port,
                onChange: (e) => setLocalConfig({ ['Port']: e.target.value }),
              }}
              afterText={'(Format: 1-3,6,8)'}
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
                options={['All', 'Multicast IP', 'VLAN ID', 'Port']}
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

        <MultiPage.DefaultTable
          title={t('FilteringAddressTable')}
          navItems={['Select', 'MulticastIP', 'VLANID', 'ForwardPort']}
          data={localConfig.multicastIPTable.map((item) => [
            <input type="checkbox" />,
            item[0].join('.'),
            item[1],
            item[2],
          ])}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note40')}: {localConfig.multicastIPTable?.length}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
