import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function ARPDetect() {
  const { t } = useTranslation();

  //#TODO:skopiować logikę z accessControl
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('ARPDetect')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ARPDetect')}:</span>
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

        <MultiPage.Title>{t('TrustedPort')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.DevidedColumn
            data={[
              <MultiPage.Row style={{ justifyContent: 'flex-start' }}>
                {['1(LAG1)', '2(LAG1)', 3, 4, 5, 6].map((num) => (
                  <MultiPage.Input
                    inputProps={{ type: 'checkbox' }}
                    afterText={`${num}`}
                  />
                ))}
              </MultiPage.Row>,
              <MultiPage.Row
                style={{
                  borderBottom: '1px solid var(--tplink-grey1',
                  justifyContent: 'flex-start',
                }}
              >
                {[7, 8].map((num) => (
                  <MultiPage.Input
                    inputProps={{ type: 'checkbox' }}
                    afterText={`${num}`}
                  />
                ))}
              </MultiPage.Row>,
            ]}
          />
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('Apply')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Clear')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          It's recommended to configure the up-linked port and LAG member as
          trusted port.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
