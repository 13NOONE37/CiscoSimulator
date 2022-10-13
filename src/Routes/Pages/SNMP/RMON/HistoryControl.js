import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function HistoryControl() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.EditableTable
          isPortSelect={false}
          title={t('HistoryControlTable')}
          data={{
            names: ['Index', 'Port', 'Interval(sec)', 'Owner', 'Status'],
            fields: [
              { type: 'disable' },
              {
                type: 'select',
                options: [
                  'Port 1',
                  'Port 2',
                  'Port 3',
                  'Port 4',
                  'Port 5',
                  'Port 6',
                  'Port 7',
                  'Port 8',
                ],
              },
              { type: 'input', options: { type: 'number', min: 0, max: 1800 } },
              { type: 'input', options: { type: 'text' } },

              { type: 'select', options: ['Enable', 'Disable'] },
            ],
            data: [
              ['1', 'Port 1', '1800', 'monitor', 'Disable'],
              ['2', 'Port 1', '1800', 'monitor', 'Disable'],
              ['3', 'Port 1', '1800', 'monitor', 'Disable'],
              ['4', 'Port 1', '1800', 'monitor', 'Disable'],
              ['5', 'Port 1', '1800', 'monitor', 'Disable'],
              ['6', 'Port 1', '1800', 'monitor', 'Disable'],
              ['7', 'Port 1', '1800', 'monitor', 'Disable'],
              ['8', 'Port 1', '1800', 'monitor', 'Disable'],
              ['9', 'Port 1', '1800', 'monitor', 'Disable'],
              ['10', 'Port 1', '1800', 'monitor', 'Disable'],
              ['11', 'Port 1', '1800', 'monitor', 'Disable'],
              ['12', 'Port 1', '1800', 'monitor', 'Disable'],
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
