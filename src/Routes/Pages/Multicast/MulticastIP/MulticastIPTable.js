import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function MulticastIPTable() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      addressIP: false,
      VLANID: false,
      Port: false,
      Type: false,
      addressIPValue: [null, null, null, null],
      VLANIDValue: '',
      PortValue: '',
      TypeValue: '',
      addressTable: config.multicastIPTable,
    },
  );

  const handleFilter = () => {
    let temp = config.multicastIPTable.filter((item) => {
      let isCorrect = true;
      if (
        localConfig.addressIP &&
        item[0].join('.') != localConfig.addressIPValue.join('.')
      ) {
        isCorrect = false;
      } else if (localConfig.VLANID && item[1] != localConfig.VLANIDValue) {
        isCorrect = false;
      } else if (localConfig.Port && item[2] != localConfig.PortValue) {
        isCorrect = false;
      } else if (
        localConfig.TypeValue != 'All' &&
        localConfig.Type &&
        item[3] != localConfig.TypeValue
      ) {
        isCorrect = false;
      }

      return isCorrect;
    });
    setLocalConfig({ ['addressTable']: temp });
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('SearchOption')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>
              <MultiPage.Input
                inputProps={{
                  type: 'checkbox',
                  defaultChecked: localConfig.addressIP,
                  onChange: () => {
                    setLocalConfig({ ['addressIP']: !localConfig.addressIP });
                  },
                }}
                afterText={`${t('AddressIP')}:`}
              />
            </span>
            <MultiPage.MaskedInput
              value={localConfig.addressIPValue}
              changeCallback={(data) =>
                setLocalConfig({ ['addressIPValue']: data })
              }
              isDisabled={!localConfig.addressIP}
              afterText={'Format: 225.0.0.1'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleFilter}>
              {t('Search')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>
              <MultiPage.Input
                inputProps={{
                  type: 'checkbox',
                  defaultChecked: localConfig.VLANID,
                  onChange: () => {
                    setLocalConfig({ ['VLANID']: !localConfig.VLANID });
                  },
                }}
                afterText={`${t('VLAN ID')}:`}
              />
            </span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                value: localConfig.VLANIDValue,
                min: 1,
                max: 4094,
                disabled: !localConfig.VLANID,
                onChange: (e) =>
                  setLocalConfig({ ['VLANIDValue']: e.target.value }),
              }}
              afterText={'(1-4094)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>
              <MultiPage.Input
                inputProps={{
                  type: 'checkbox',
                  defaultChecked: localConfig.Port,
                  onChange: () => {
                    setLocalConfig({ ['Port']: !localConfig.Port });
                  },
                }}
                afterText={`${t('Port')}:`}
              />
            </span>
            <MultiPage.Select
              selectProps={{
                defaultValue: localConfig.Port,
                disabled: !localConfig.Port,
                onChange: (e) => {
                  setLocalConfig({ ['PortValue']: e.target.value });
                },
              }}
              options={[1, 2, 3, 4, 5, 6, 7, 8]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>
              <MultiPage.Input
                inputProps={{
                  type: 'checkbox',
                  defaultChecked: localConfig.Type,
                  onChange: () => {
                    setLocalConfig({ ['Type']: !localConfig.Type });
                  },
                }}
                afterText={`${t('Type')}:`}
              />
            </span>
            <MultiPage.Row>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'Type',
                  defaultChecked: localConfig.Type === 'All',
                  value: 'All',
                  disabled: !localConfig.Type,
                  onChange: (e) =>
                    setLocalConfig({ ['TypeValue']: e.target.value }),
                }}
                afterText={t('All')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'Type',
                  defaultChecked: localConfig.Type === 'Static',
                  value: 'Static',
                  disabled: !localConfig.Type,
                  onChange: (e) =>
                    setLocalConfig({ ['TypeValue']: e.target.value }),
                }}
                afterText={t('Static')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'Type',
                  defaultChecked: localConfig.Type === 'Dynamic',
                  value: 'Dynamic',
                  disabled: !localConfig.Type,
                  onChange: (e) =>
                    setLocalConfig({ ['TypeValue']: e.target.value }),
                }}
                afterText={t('Dynamic')}
              />
            </MultiPage.Row>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('AddressTable')}
          navItems={['MulticastIP', 'VLANID', 'ForwardPort', 'Type']}
          data={localConfig.addressTable.map((item) => [
            item[0].join('.'),
            item[1],
            item[2],
            item[3],
          ])}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note>
          {t('Note40')}: {localConfig.addressTable?.length}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
