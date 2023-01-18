import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function DosDefend() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      netSecDOSDefend: config.netSecDOSDefend,
      netSecDOSTable: config.netSecDOSTable,
    },
  );
  const attacks = [
    'Land Attack',
    'Scan SYNFIN',
    'Xmascan',
    'NULL Scan',
    'SYN sPort less 1024',
    'Blat Attack',
    'Ping Flooding',
    'SYN/SYN-ACK Flooding',
  ];

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfigure')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('DoS Defend')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'dosDefend',
                  value: 'Enable',
                  onChange: (e) =>
                    setLocalConfig({ ['netSecDOSDefend']: e.target.value }),
                  checked: localConfig.netSecDOSDefend === 'Enable',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'dosDefend',
                  value: 'Disable',
                  onChange: (e) =>
                    setLocalConfig({ ['netSecDOSDefend']: e.target.value }),
                  checked: localConfig.netSecDOSDefend === 'Disable',
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('DefendTable')}
          navItems={['Select', 'DefendType']}
          gridTemp={'60px 1fr'}
          data={[
            ...localConfig.netSecDOSTable.map((checked, index) => [
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  let temp = localConfig.netSecDOSTable;
                  temp[index] = !temp[index];
                  setLocalConfig({ ['netSecDOSTable']: temp });
                }}
              />,
              attacks[index],
            ]),
          ]}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              let temp = localConfig.netSecDOSTable.fill(true, 0);
              setLocalConfig({ ['netSecDOSTable']: temp });
            }}
          >
            {t('All')}
          </MultiPage.Button>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'netSecDOSDefend',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'netSecDOSTable',
              );
            }}
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
