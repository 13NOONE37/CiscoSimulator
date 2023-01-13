import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function SNMPView() {
  const { t } = useTranslation();
  //!todo  workflow
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      viewName: '',
      mibID: '',
      viewType: 'Include',
      isEditing: false,
    },
  );

  const [tempNotify, settempNotify] = useState(config.SNMPViewTable);

  const handleClear = () => {
    setLocalConfig({ ['viewName']: '' });
    setLocalConfig({ ['mibID']: '' });
    setLocalConfig({ ['viewType']: 'Include' });
    setLocalConfig({ ['isEditing']: false });
  };
  const handleSubmit = () => {
    if (localConfig.viewName.length > 0 && localConfig.mibID.length > 0) {
      let temp = tempNotify;
      temp.push({
        viewName: localConfig.viewName,
        mibID: localConfig.mibID,
        viewType: localConfig.viewType,
      });
      settempNotify(temp);

      handleClear();
    } else {
      alert(t('There are empty fields'));
    }
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('ViewConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ViewName')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  maxLength: 16,
                  value: localConfig.viewName,
                  onChange: (e) =>
                    setLocalConfig({ ['viewName']: e.target.value }),
                }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleSubmit}>
              {t('Create')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MIBObjectID')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  maxLength: 61,
                  value: localConfig.mibID,
                  onChange: (e) =>
                    setLocalConfig({ ['mibID']: e.target.value }),
                }}
                afterText={t('(61 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ViewType')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'viewType',
                  checked: localConfig.viewType === 'Include',
                  value: 'Include',
                  onChange: (e) =>
                    setLocalConfig({ ['viewType']: e.target.value }),
                }}
                afterText={t('Include')}
              />
              <MultiPage.Input
                inputProps={{
                  type: 'radio',
                  name: 'viewType',
                  checked: localConfig.viewType === 'Exclude',
                  value: 'Exclude',
                  onChange: (e) =>
                    setLocalConfig({ ['viewType']: e.target.value }),
                }}
                afterText={t('Exclude')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('ViewTable')}
          navItems={['Select', 'ViewName', 'ViewType', 'MIBObjectID']}
          data={tempNotify.map((user) => [
            <input type="checkbox" />,
            user.viewName,
            user.viewType,
            user.mibID,
          ])}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t('All')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
