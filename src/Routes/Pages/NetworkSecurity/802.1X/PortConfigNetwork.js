import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
export default function PortConfigNetwork() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t('HistoryControlTable')}
          data={{
            names: [
              'Port',
              'Status',
              'Guest VLAN',
              'Control Mode',
              'Control Type',
              'Authorized',
              'LAG',
            ],
            fields: [
              { type: 'disable' },
              { type: 'select', options: ['Enable', 'Disable'] },
              { type: 'select', options: ['Enable', 'Disable'] },
              { type: 'select', options: ['Auto'] },
              { type: 'select', options: ['MAC Based'] },
              { type: 'disable' },
              { type: 'disable' },
            ],
            data: [
              ['1', 'Disable', 'Disable', 'Auto', 'MAC Based', 'Yes', 'LAG1'],
              ['2', 'Disable', 'Disable', 'Auto', 'MAC Based', 'Yes', 'LAG1'],
              [
                '3',
                'Disable',
                'Disable',
                'Auto',
                'MAC Based',
                'Yes',
                undefined,
              ],
              [
                '4',
                'Disable',
                'Disable',
                'Auto',
                'MAC Based',
                'Yes',
                undefined,
              ],
              [
                '5',
                'Disable',
                'Disable',
                'Auto',
                'MAC Based',
                'Yes',
                undefined,
              ],
              [
                '6',
                'Disable',
                'Disable',
                'Auto',
                'MAC Based',
                'Yes',
                undefined,
              ],
              [
                '7',
                'Disable',
                'Disable',
                'Auto',
                'MAC Based',
                'Yes',
                undefined,
              ],
              [
                '8',
                'Disable',
                'Disable',
                'Auto',
                'MAC Based',
                'Yes',
                undefined,
              ],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          802.1X can not be enabled for LAG member.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
