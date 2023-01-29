import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function SNMPCommunity() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      communityName: '',
      access: 'read-only',
      MIBView: 'viewDefault',
      isEditing: false,
    },
  );

  const [tempNotify, settempNotify] = useState(config.SNMPCommunityTable);

  const handleClear = () => {
    setLocalConfig({ ['communityName']: '' });
    setLocalConfig({ ['access']: 'read-only' });
    setLocalConfig({ ['MIBView']: 'viewDefault' });
    setLocalConfig({ ['checked']: false });
    setLocalConfig({ ['isEditing']: false });
  };
  const handleEdit = ({ communityName, access, MIBView, checked }, index) => {
    setLocalConfig({ ['communityName']: communityName });
    setLocalConfig({ ['access']: access });
    setLocalConfig({ ['MIBView']: MIBView });

    setLocalConfig({ ['isEditing']: index + 1 });
  };
  const handleSubmit = () => {
    if (localConfig.communityName.length > 0) {
      let temp = tempNotify;
      temp.push({
        communityName: localConfig.communityName,
        access: localConfig.access,
        MIBView: localConfig.MIBView,
      });
      settempNotify(temp);
      handleClear();
    } else {
      alert(t('There are empty fields'));
    }
  };
  const handleModify = () => {
    if (localConfig.communityName?.length > 0) {
      let temp = tempNotify;
      temp[localConfig.isEditing - 1] = {
        communityName: localConfig.communityName,
        access: localConfig.access,
        MIBView: localConfig.MIBView,
      };

      settempNotify(temp);
      handleClear();
    } else {
      alert(t('There are empty fields'));
    }
  };
  const [forceUpdate, setForceUpdate] = useState(1);

  const handleDelete = () => {
    let temp = tempNotify;
    temp = temp.filter((user) => !user.checked);

    temp = temp.map((user) => {
      user.checked = false;
      return user;
    });
    settempNotify(temp);
    setForceUpdate(forceUpdate + 1);
    MultiPage.handleApplyToConfig(
      config,
      { SNMPCommunityTable: temp },
      'SNMPCommunityTable',
    );
  };

  const handleAll = () => {
    let temp = tempNotify.map((notify) => {
      notify.checked = true;
      return notify;
    });
    settempNotify(temp);
  };
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t('CommunityConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('CommunityName')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  maxLength: 16,
                  value: localConfig.communityName,
                  onChange: (e) =>
                    setLocalConfig({ ['communityName']: e.target.value }),
                }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button
              action={localConfig.isEditing ? handleModify : handleSubmit}
            >
              {localConfig.isEditing ? t('Modify') : t('Create')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('Access')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.access,
                  onChange: (e) =>
                    setLocalConfig({ ['access']: e.target.value }),
                }}
                options={['read-only', 'read-write']}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={() => handleClear()}>
              {t('Clear')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MIBView')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.MIBView,
                  onChange: (e) =>
                    setLocalConfig({ ['MIBView']: e.target.value }),
                }}
                options={config.SNMPViewTable.map((i) => i.viewName)}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('CommunityTable')}
          navItems={[
            'Select',
            'CommunityName',
            'Access',
            'MIBView',
            'Operation',
          ]}
          data={tempNotify.map((item, index) => [
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => {
                let temp = tempNotify;
                temp[index].checked = !temp[index]?.checked;
                settempNotify(temp);
                setForceUpdate(forceUpdate + 1);
              }}
            />,
            item.communityName,
            item.access,
            item.MIBView,
            <MultiPage.Button isBlank action={() => handleEdit(item, index)}>
              {t('Edit')}
            </MultiPage.Button>,
          ])}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial action={handleAll}>
            {t('All')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial action={handleDelete}>
            {t('Delete')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note21')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
