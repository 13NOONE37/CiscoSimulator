import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import AppContext from 'store/AppContext';
import { useTranslation } from 'react-i18next';

export default function AddressTable() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      MACAddress: false,
      VLANID: false,
      Port: false,
      Type: false,
      MACAddressValue: '',
      VLANIDValue: '',
      PortValue: '',
      TypeValue: '',
      addressTable: config.addressTable,
    },
  );

  const handleFilter = () => {
    let temp = config.addressTable.filter((item) => {
      let isCorrect = true;
      if (localConfig.MACAddress && item[0] != localConfig.MACAddressValue) {
        isCorrect = false;
      } else if (localConfig.VLANID && item[1] != localConfig.VLANIDValue) {
        isCorrect = false;
      } else if (localConfig.Port && item[2] != localConfig.PortValue) {
        isCorrect = false;
      } else if (localConfig.Type && item[3] != localConfig.TypeValue) {
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
                  defaultChecked: localConfig.MACAddress,
                  onChange: () => {
                    setLocalConfig({ ['MACAddress']: !localConfig.MACAddress });
                  },
                }}
                afterText={`${t('MACAddress')}:`}
              />
            </span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                disabled: !localConfig.MACAddress,
                onChange: (e) =>
                  setLocalConfig({ ['MACAddressValue']: e.target.value }),
              }}
              afterText={'(Format: 00-00-00-00-00-01)'}
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
                value: localConfig.VLANID,
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

        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
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
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'Type',
                  defaultChecked: localConfig.Type === 'Filtering',
                  value: 'Filtering',
                  disabled: !localConfig.Type,
                  onChange: (e) =>
                    setLocalConfig({ ['TypeValue']: e.target.value }),
                }}
                afterText={t('Filtering')}
              />
            </MultiPage.Row>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('AddressTable')}
          navItems={['MACAddress', 'VLAN ID', 'Port', 'Type', 'AgingStatus']}
          data={localConfig.addressTable}
        />

        <MultiPage.Note>
          {t('Note16_1')}: {localConfig.addressTable?.length}
          <br />
          {t('Note16_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
