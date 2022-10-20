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
            <MultiPage.Select options={['All']} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('BindingTable')}
          data={{
            names: [
              'Host Name',
              'IP Address',
              'MAC Address',
              'VLAN ID',
              'Port',
              'Protect Type',
              'Source',
              'Collision',
            ],
            fields: [
              { type: 'input', options: { type: 'text' } },
              { type: 'disabled' },
              { type: 'input', options: { type: 'text' } },
              { type: 'input', options: { type: 'number' } },
              { type: 'input', options: { type: 'number' } },
              { type: 'select', options: [] },

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
