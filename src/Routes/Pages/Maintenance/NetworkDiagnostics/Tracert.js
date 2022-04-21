import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function Tracert() {
  const { t } = useTranslation();
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('TracertConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Tracert')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('DestinationIP')}:</span>
            <MultiPage.MaskedInput />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Help')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MaxHop')}:</span>
            <MultiPage.Input
              inputProps={{ type: 'number', min: 1, max: 30 }}
              afterText={t('hop(1-30)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Title>{t('TracertResult')}</MultiPage.Title>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
