import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
export default function EventConfig() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.EditableTable
          isPortSelect={false}
          title={t('HistoryControlTable')}
          data={{
            names: ['Index', 'User', 'Description', 'Type', 'Owner', 'Status'],
            fields: [
              { type: 'disable' },
              { type: 'input', options: { type: 'text' } },
              { type: 'input', options: { type: 'text' } },
              {
                type: 'select',
                options: ['None'],
              },
              { type: 'input', options: { type: 'text' } },

              { type: 'select', options: ['Enable', 'Disable'] },
            ],
            data: [
              ['1', 'public', '', 'None', 'monitor', 'Disable'],
              ['2', 'public', '', 'None', 'monitor', 'Disable'],
              ['3', 'public', '', 'None', 'monitor', 'Disable'],
              ['4', 'public', '', 'None', 'monitor', 'Disable'],
              ['5', 'public', '', 'None', 'monitor', 'Disable'],
              ['6', 'public', '', 'None', 'monitor', 'Disable'],
              ['7', 'public', '', 'None', 'monitor', 'Disable'],
              ['8', 'public', '', 'None', 'monitor', 'Disable'],
              ['9', 'public', '', 'None', 'monitor', 'Disable'],
              ['10', 'public', '', 'None', 'monitor', 'Disable'],
              ['11', 'public', '', 'None', 'monitor', 'Disable'],
              ['12', 'public', '', 'None', 'monitor', 'Disable'],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
