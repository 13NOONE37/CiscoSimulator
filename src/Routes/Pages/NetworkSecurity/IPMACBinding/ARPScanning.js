import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function ARPScanning() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      startIP: [null, null, null, null],
      endIP: [null, null, null, null],
      VLANID: undefined,
    },
  );
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>{t('ScanningOption')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('StartIPAddress')}:</span>
            <MultiPage.MaskedInput
              value={localConfig.startIP}
              changeCallback={(data) => setLocalConfig({ ['startIP']: data })}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Scan')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('EndIPAddress')}:</span>
            <MultiPage.MaskedInput
              value={localConfig.endIP}
              changeCallback={(data) => setLocalConfig({ ['endIP']: data })}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>VLAN ID:</span>
            <MultiPage.Input
              inputProps={{ type: 'number', min: 1, max: 4094 }}
              afterText={'(1-4094)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('ScanningResult')}
          isPortSelect={false}
          gridTemp={'65px 100px repeat(4,75px) 1fr 65px'}
          data={{
            names: [
              'Hostname',
              'IPAddress',
              'MACAddress',
              'VLAN ID',
              'Port',
              'ProtectType',
              'Collision',
            ],
            fields: [
              { type: 'input', options: { type: 'text' } },
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'disabled' },
              {
                type: 'select',
                options: ['Disable', 'ARPDetection', 'IPSourceGuard', 'All'],
              },
              { type: 'disabled' },
            ],
            data: [],
          }}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Bind')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note30_1')}

          <br />
          {t('Note30_2')}

          <br />
          {t('Note30_3')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
