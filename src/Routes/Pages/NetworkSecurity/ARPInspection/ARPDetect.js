import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function ARPDetect() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      netSecARPDetect: config.netSecARPDetect,
      netSecARPDetectTable: config.netSecARPDetectTable,
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
        <MultiPage.Title>{t('ARPDetect')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ARPDetect')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Enable',
                  name: 'ARPDetect',
                  onChange: (e) =>
                    setLocalConfig({ ['netSecARPDetect']: e.target.value }),
                  checked: localConfig.netSecARPDetect === 'Enable',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  value: 'Disable',
                  name: 'ARPDetect',
                  onChange: (e) =>
                    setLocalConfig({ ['netSecARPDetect']: e.target.value }),
                  checked: localConfig.netSecARPDetect === 'Disable',
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('TrustedPort')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.DevidedColumn
            data={[
              <MultiPage.Row style={{ justifyContent: 'flex-start' }}>
                {['1(LAG1)', '2(LAG1)', 3, 4, 5, 6].map((num, index) => (
                  <MultiPage.Input
                    inputProps={{
                      type: 'checkbox',
                      checked: localConfig.netSecARPDetectTable[index],
                      onChange: () => {
                        let temp = localConfig.netSecARPDetectTable;
                        temp[index] = !temp[index];
                        setLocalConfig({ ['netSecARPDetectTable']: temp });
                      },
                    }}
                    afterText={`${num}`}
                  />
                ))}
              </MultiPage.Row>,
              <MultiPage.Row
                style={{
                  borderBottom: '1px solid var(--tplink-grey1',
                  justifyContent: 'flex-start',
                }}
              >
                {[7, 8].map((num, index) => (
                  <MultiPage.Input
                    inputProps={{
                      type: 'checkbox',
                      checked: localConfig.netSecARPDetectTable[index + 6],
                      onChange: () => {
                        let temp = localConfig.netSecARPDetectTable;
                        temp[index + 6] = !temp[index + 6];
                        setLocalConfig({ ['netSecARPDetectTable']: temp });
                      },
                    }}
                    afterText={`${num}`}
                  />
                ))}
              </MultiPage.Row>,
            ]}
          />
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => {
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'netSecARPDetect',
              );
              MultiPage.handleApplyToConfig(
                config,
                localConfig,
                'netSecARPDetectTable',
              );
            }}
          >
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button
            isSpecial
            action={() => {
              let temp = localConfig.netSecARPDetectTable.fill(true, 0);
              setLocalConfig({ ['netSecARPDetectTable']: temp });
            }}
          >
            {t('All')}
          </MultiPage.Button>
          <MultiPage.Button
            isSpecial
            action={() => {
              let temp = localConfig.netSecARPDetectTable.fill(false, 0);
              setLocalConfig({ ['netSecARPDetectTable']: temp });
            }}
          >
            {t('Clear')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note26')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
