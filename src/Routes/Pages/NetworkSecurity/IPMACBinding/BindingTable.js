import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function BindingTable() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={800}>
        <MultiPage.Title>{t('SearchOption')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Search')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Source')}:</span>
            <MultiPage.Select
              options={['All', 'Manual', 'Scanning', 'Snooping']}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('BindingTable')}
          gridTemp={'65px 100px repeat(4,95px) 1fr 65px'}
          data={{
            names: [
              'Hostname',
              'IPAddress',
              'MAC Address',
              'VLAN ID',
              'Port',
              'ProtectType',
              'Source',
              'Collision',
            ],
            fields: [
              { type: 'input', options: { type: 'text' } },
              { type: 'disabled' },
              { type: 'input', options: { type: 'text' } },
              { type: 'input', options: { type: 'number' } },
              { type: 'input', options: { type: 'number' } },
              {
                type: 'select',
                options: ['Disable', 'ARPDetection', 'IPSourceGuard', 'All'],
              },

              { type: 'disabled' },
              { type: 'disabled' },
            ],
            data: [],
          }}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note28_1')}
          <br />
          {t('Note28_2')}
          <br />
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
