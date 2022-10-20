import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function ManualBinding() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={800}>
        <MultiPage.Title>{t('ManualBindingOption')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('HostName')}:</span>
            <MultiPage.Input
              inputProps={{ type: 'text', maxLength: 20 }}
              afterText={'(20 characters maximum)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('IPAddress')}:</span>
            <MultiPage.MaskedInput afterText={t('(Format: 192.168.0.1)')} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Bind')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MACAddress')}:</span>
            <MultiPage.Input
              inputProps={{ type: 'text' }}
              afterText={'(Format: 00-00-00-00-00-01)'}
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
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Port')}:</span>
            <MultiPage.Select options={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ProtectType')}:</span>
            <MultiPage.Select options={['Disable', 'Enable']} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('ManualBindingTable')}
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
            fields: [],
            data: [],
          }}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          1. Among the entries with critical collision level, the one having the
          highest source priority will take effect.
          <br />
          2. Among the entries with the same Source priority, only the last
          added or edited one will take effect.
          <br />
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
