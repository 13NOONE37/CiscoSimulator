import React, { useContext, useReducer } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function LAGTable() {
  const { config } = useContext(AppContext);
  const { t } = useTranslation();
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      hashAlgorithmLAG: config.hashAlgorithmLAG,
      lagTable: config.lagTable,
    },
  );

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('GlobalConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={() =>
                MultiPage.handleApplyToConfig(
                  config,
                  localConfig,
                  'hashAlgorithmLAG',
                )
              }
            >
              {t('Apply')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('HashAlgorithm')}:</span>
            <MultiPage.Select
              selectProps={{
                defaultValue: localConfig.hashAlgorithmLAG,
                onChange: (e) => {
                  setLocalConfig({ ['hashAlgorithmLAG']: e.target.value });
                },
              }}
              options={['SRC MAC+DST MAC']}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('LAGTable')}
          data={[
            ...localConfig.lagTable.map((item) => [
              <MultiPage.Input inputProps={{ type: 'checkbox' }} />,
              ...item,
              <MultiPage.Row style={{ justifyContent: 'center' }}>
                <MultiPage.Button isBlank>{t('Edit')}</MultiPage.Button>
                <MultiPage.Button isBlank>{t('Detail')}</MultiPage.Button>
              </MultiPage.Row>,
            ]),
          ]}
          navItems={[
            t('Select'),
            t('GroupNumber'),
            t('Description'),
            t('Member'),
            t('Operation'),
          ]}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          1. The LAG created by LACP can't be deleted.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
