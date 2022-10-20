import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function ARPStatistics() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('AutoRefresh')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('AutoRefresh')}:</span>
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
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Apply')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('RefreshInterval')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'number',
                  min: 3,
                  max: 300,
                }}
                afterText={t('sec(3-300)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('IllegalARPPacket')}
          navItems={[
            'Port',
            'Trusted Port',
            'Illegal ARP Packet',
            'Port',
            'Trusted Port',
            'Illegal ARP Packet',
          ]}
          data={[
            [1, 'No', undefined, '2', 'No', undefined],
            [3, 'No', undefined, '4', 'No', undefined],
            [5, 'No', undefined, '6', 'No', undefined],
            [7, 'No', undefined, '8', 'No', undefined],
          ]}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Refresh')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Clear')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
