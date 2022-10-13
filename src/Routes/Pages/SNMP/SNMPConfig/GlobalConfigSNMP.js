import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function GlobalConfigSNMP() {
  const { t } = useTranslation();
  //!todo  workflow

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Apply')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t('SNMP')}:</span>
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

        <MultiPage.Title>{t('LocalEngine')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Default ID')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Local Engine ID')}:</span>
            <MultiPage.Input
              inputProps={{ type: 'text' }}
              afterText={t('(10-64 Hex)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Apply')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine></MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('RemoteEngine')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t('Default ID')}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Remote Engine ID')}:</span>
            <MultiPage.Input
              inputProps={{ type: 'text' }}
              afterText={t('(0 or 10-64 Hex)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t('Apply')}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine></MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note>
          The total hexadecimal characters of Engine ID should be even.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
