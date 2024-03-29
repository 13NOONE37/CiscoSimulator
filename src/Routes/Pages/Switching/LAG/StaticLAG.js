import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function StaticLAG() {
  const { config } = useContext(AppContext);
  const { t } = useTranslation();
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      hashAlgorithmLAG: config.hashAlgorithmLAG,
      lagTable: config.lagTable,
    },
  );
  //#TODO:skopiować logikę z accessControl
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('LAGConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('GroupNumber')}:</span>
            <MultiPage.Select
              options={[
                'LAG1',
                'LAG2',
                'LAG3',
                'LAG4',
                'LAG5',
                'LAG6',
                'LAG7',
                'LAG8',
              ]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Description')}:</span>
            <MultiPage.Input
              inputProps={{ value: 'Active LACP', disabled: true }}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t('MemberPort')}</MultiPage.Title>
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
          <MultiPage.Button action={() => 0} isSpecial>
            {t('Apply')}
          </MultiPage.Button>
          <MultiPage.Button action={() => 0} isSpecial>
            {t('Clear')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note14_1')}
          <br />
          {t('Note14_2')}
          <br />
          {t('Note14_3')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
