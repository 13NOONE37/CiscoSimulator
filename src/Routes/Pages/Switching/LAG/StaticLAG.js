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
            <MultiPage.Select options={['LAG1', 'LAG2', '3']} />
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
              <MultiPage.Row style={{ justifyContent: 'space-between' }}>
                <span>1</span>
                <span>1</span>
                <span>1</span>
              </MultiPage.Row>,
              <MultiPage.Row style={{ justifyContent: 'space-between' }}>
                <span>3</span>
                <span>1</span>
                <span>1</span>
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
          1. LAG* denotes the Link Aggregation Group which the port belngs to.
          <br />
          2. it's not suggested to set 100M and 1000M ports in the same LAG. 3.
          <br />
          The LAG created by LACP can't be modified.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
