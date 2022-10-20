import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
export default function ARPDefend() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('ARPDefend')}
          data={{
            names: [
              'Port',
              'Defend',
              'Speed(10-100)pps',
              'Current Speed(pps)',
              'Status',
              'LAG',
              'Operation',
            ],
            fields: [
              { type: 'disable' },
              { type: 'select', options: ['Enable', 'Disable'] },
              { type: 'input', options: { type: 'number', min: 10, max: 100 } },
              { type: 'disable' },

              { type: 'disable' },

              { type: 'disable' },

              { type: 'disable' },
            ],
            data: [
              ['1', 'Disable', '15', undefined, undefined, 'LAG1', undefined],
              ['2', 'Disable', '15', undefined, undefined, 'LAG1', undefined],
              [
                '3',
                'Disable',
                '15',
                undefined,
                undefined,
                undefined,
                undefined,
              ],
              [
                '4',
                'Disable',
                '15',
                undefined,
                undefined,
                undefined,
                undefined,
              ],
              [
                '5',
                'Disable',
                '15',
                'Less Than 1',
                undefined,
                undefined,
                undefined,
              ],
              [
                '6',
                'Disable',
                '15',
                undefined,
                undefined,
                undefined,
                undefined,
              ],
              [
                '7',
                'Disable',
                '15',
                undefined,
                undefined,
                undefined,
                undefined,
              ],
              ['8', 'Disable', '15', '1', undefined, undefined, undefined],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          It is not recommended to enable ARP Defender for LAG member.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
