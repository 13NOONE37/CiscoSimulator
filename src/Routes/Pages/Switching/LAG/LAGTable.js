import React, { useContext, useReducer, useState } from 'react';
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

  const [tempUsers, settempUsers] = useState(localConfig.lagTable);

  const handleAll = () => {
    let temp = tempUsers;
    temp = temp.map((user) => true);
    settempUsers(temp);
  };

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
              options={['SRC MAC+DST MAC', 'SRC IP+DST IP']}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('LAGTable')}
          data={[
            [
              '',
              '',
              <b>{t('No trunk exists')}</b>,
              // <input
              //   type="checkbox"
              //   checked={Boolean(item)}
              //   onChange={() => {
              //     let temp = tempUsers;
              //     temp[index].checked = !Boolean(temp[index]);
              //     settempUsers(temp);
              //   }}
              // />,
              // localConfig.lagTable[index][0],
              // localConfig.lagTable[index][1],
              // localConfig.lagTable[index][2].join(', '),
              // <MultiPage.Row style={{ justifyContent: 'center' }}>
              //   <MultiPage.Button isBlank>{t('Edit')}</MultiPage.Button>
              //   <MultiPage.Button isBlank>{t('Detail')}</MultiPage.Button>
              // </MultiPage.Row>,
            ],
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
        <MultiPage.Note>{t('Note13')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
