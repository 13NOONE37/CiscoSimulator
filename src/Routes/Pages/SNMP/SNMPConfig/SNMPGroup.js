import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function SNMPGroup() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      groupName: '',
      securityModel: 'v1',
      securityLevel: 'noAuthNoPriv',
      readView: 'viewDefault',
      writeView: 'viewDefault',
      notifyView: 'viewDefault',
      isEditing: false,
    },
  );

  const [tempNotify, settempNotify] = useState(config.SNMPGroupTable);
  const [forceUpdate, setForceUpdate] = useState(1);

  const handleClear = () => {
    setLocalConfig({ ['groupName']: '' });
    setLocalConfig({ ['securityModel']: 'v1' });
    setLocalConfig({ ['securityLevel']: 'noAuthNoPriv' });
    setLocalConfig({ ['readView']: 'viewDefault' });
    setLocalConfig({ ['writeView']: 'viewDefault' });
    setLocalConfig({ ['notifyView']: 'viewDefault' });
    setLocalConfig({ ['isEditing']: false });
  };
  const handleEdit = (
    {
      groupName,
      securityModel,
      securityLevel,
      readView,
      writeView,
      notifyView,
    },
    index,
  ) => {
    setLocalConfig({ ['groupName']: groupName });
    setLocalConfig({ ['securityModel']: securityModel });
    setLocalConfig({ ['securityLevel']: securityLevel });
    setLocalConfig({ ['readView']: readView });
    setLocalConfig({ ['writeView']: writeView });
    setLocalConfig({ ['notifyView']: notifyView });
    setLocalConfig({ ['isEditing']: index + 1 });
  };
  const handleSubmit = () => {
    if (localConfig.groupName.length > 0) {
      let temp = tempNotify;
      temp.push({
        groupName: localConfig.groupName,
        securityModel: localConfig.securityModel,
        securityLevel: localConfig.securityLevel,
        readView: localConfig.readView,
        writeView: localConfig.writeView,
        notifyView: localConfig.notifyView,
      });
      settempNotify(temp);
      handleClear();
    } else {
      alert(t('There are empty fields'));
    }
  };
  const handleModify = () => {
    if (localConfig.groupName?.length > 0) {
      let temp = tempNotify;
      temp[localConfig.isEditing - 1] = {
        groupName: localConfig.groupName,
        securityModel: localConfig.securityModel,
        securityLevel: localConfig.securityLevel,
        readView: localConfig.readView,
        writeView: localConfig.writeView,
        notifyView: localConfig.notifyView,
      };

      settempNotify(temp);
      handleClear();
    } else {
      alert(t('There are empty fields'));
    }
  };
  const viewOptions = config.SNMPViewTable.map((i) => i.viewName);

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
      { SNMPGroupTable: temp },
      'SNMPGroupTable',
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
      <MultiPage.Section width={850}>
        <MultiPage.Title>{t('GroupConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('GroupName')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  maxLength: 16,
                  value: localConfig.groupName,
                  onChange: (e) =>
                    setLocalConfig({ ['groupName']: e.target.value }),
                }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('SecurityModel')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.securityModel,
                  onChange: (e) =>
                    setLocalConfig({ ['securityModel']: e.target.value }),
                }}
                options={['v1', 'v2c', 'v3']}
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
            <span>{t('SecurityLevel')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.securityLevel,
                  onChange: (e) =>
                    setLocalConfig({ ['securityLevel']: e.target.value }),

                  disabled: localConfig.securityModel === 'v1',
                }}
                options={['noAuthNoPriv', 'authNoPriv', 'AuthPriv']}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleClear}>
              {t('Clear')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('ReadView')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.readView,
                  onChange: (e) =>
                    setLocalConfig({ ['readView']: e.target.value }),
                }}
                options={viewOptions}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('WriteView')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.writeView,
                  onChange: (e) =>
                    setLocalConfig({ ['writeView']: e.target.value }),
                }}
                options={viewOptions}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('NotifyView')}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.notifyView,
                  onChange: (e) =>
                    setLocalConfig({ ['notifyView']: e.target.value }),
                }}
                options={viewOptions}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('GroupTable')}
          navItems={[
            'Select',
            'GroupName',
            'SecurityModel',
            'SecurityLevel',
            'ReadView',
            'WriteView',
            'NotifyView',
            'Operation',
          ]}
          data={tempNotify.map((user, index) => [
            <input
              type="checkbox"
              checked={user.checked}
              onChange={() => {
                let temp = tempNotify;
                temp[index].checked = !temp[index]?.checked;
                settempNotify(temp);
                setForceUpdate(forceUpdate + 1);
              }}
            />,
            user.groupName,
            user.securityModel,
            user.securityLevel,
            user.readView,
            user.writeView,
            user.notifyView,
            <MultiPage.Button isBlank action={() => handleEdit(user, index)}>
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
          </MultiPage.Button>{' '}
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note23')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
