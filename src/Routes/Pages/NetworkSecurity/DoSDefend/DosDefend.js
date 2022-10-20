import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function DosDefend() {
  const { t } = useTranslation();
  //!todo  workflow

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfigure')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('DoS Defend')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                }}
                afterText={t('Enable')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                }}
                afterText={t('Disable')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t('DefendTable')}
          isPortSelect={false}
          data={{
            names: ['Defend Type'],
            fields: [{ type: 'disabled' }],
            data: [
              ['Land Attack'],
              ['Scan SYNFIN'],
              ['Xmascan'],
              ['NULL Scan'],
              ['SYN sPort less 1024'],
              ['Blat Attack'],
              ['Ping Flooding'],
              ['SYN/SYN-ACK Flooding'],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
