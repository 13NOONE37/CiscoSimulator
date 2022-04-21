import React from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';

export default function Loopback() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('LoopbackType')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('LoopbackType')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{ type: 'radio', name: 'loopbackType' }}
                afterText={'Internal'}
              />
              <MultiPage.Input
                inputProps={{ type: 'radio', name: 'loopbackType' }}
                afterText={'External'}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.Title>{t('LoopbackPort')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.DevidedColumn
            data={[
              <MultiPage.Row
                style={{ justifyContent: 'flex-start', gap: '20px' }}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
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
                  gap: '20px',
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
          <MultiPage.Button isSpecial>{t('Test')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.DefaultTable
          title={t('LoopbackResult')}
          navItems={[undefined, undefined, undefined]}
          data={[['Port:N/A'], ['Type:N/A'], ['Result:N/A']]}
        />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
