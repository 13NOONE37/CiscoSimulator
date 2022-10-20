import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function ARPScanning() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('ScanningOption')}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('StartIPAddress')}:</span>
            <MultiPage.MaskedInput />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Scan')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('EndIPAddress')}:</span>
            <MultiPage.MaskedInput />
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
          data={{
            names: [
              'Host Name',
              'IP Address',
              'MAC Address',
              'VLAN ID',
              'Port',
              'Protect Type',
              'Collision',
            ],
            fields: [
              { type: 'input', options: { type: 'text' } },
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'disabled' },
              { type: 'select', options: [] },
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
          1. The VLAN ID options is intended for scanning the network topology
          with the VLAN spanning across multiple switches.
          <br />
          2. VLAN ID affects the VLAN Tag in the ARP request packets used in the
          ARP request packets in the ARP Scanning, and is independent of the
          VLAN configuration.
          <br />
          3. If VLAN ID is blank, the switch will broadcast untaged ARP request
          packets in the ARP Scanning.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
