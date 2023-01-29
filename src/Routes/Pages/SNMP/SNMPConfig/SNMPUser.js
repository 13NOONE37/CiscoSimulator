import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function SNMPUser() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userName: '',
      userType: 'LocalUser',
      groupName: 'group1',
      securityModel: 'v1',
      securityLevel: 'noAuthNoPriv',
      authMode: 'None',
      privacyMode: 'None',
      password1: '',
      password2: '',
      isEditing: false,
    },
  );

  const [tempNotify, settempNotify] = useState(config.SNMPUserTable);

  const handleClear = () => {
    setLocalConfig({
      userName: '',
      userType: '',
      groupName: '',
      securityModel: 'v1',
      securityLevel: 'noAuthNoPriv',
      authMode: 'None',
      privacyMode: 'None',
      password1: '',
      password2: '',
      isEditing: false,
    });
  };
  const handleEdit = (
    {
      userName,
      userType,
      groupName,
      securityModel,
      securityLevel,
      authMode,
      privacyMode,
    },
    index,
  ) => {
    setLocalConfig({
      userName: userName,
      userType: userType,
      groupName: groupName,
      securityModel: securityModel,
      securityLevel: securityLevel,
      authMode: authMode,
      privacyMode: privacyMode,
      isEditing: index + 1,
    });
  };
  const handleSubmit = () => {
    if (localConfig.groupName.length > 0) {
      let temp = tempNotify;
      temp.push({
        userName: localConfig.userName,
        userType: localConfig.userType,
        groupName: localConfig.groupName,
        securityModel: localConfig.securityModel,
        securityLevel: localConfig.securityLevel,
        authMode: localConfig.authMode,
        privacyMode: localConfig.privacyMode,
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
        userName: localConfig.userName,
        userType: localConfig.userType,
        groupName: localConfig.groupName,
        securityModel: localConfig.securityModel,
        securityLevel: localConfig.securityLevel,
        authMode: localConfig.authMode,
        privacyMode: localConfig.privacyMode,
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
      { SNMPUserTable: temp },
      'SNMPUserTable',
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
      <MultiPage.Section width={1000}>
        <MultiPage.Title>{t('UserConfig')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Username')}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={400}>
              <MultiPage.Input
                inputProps={{
                  type: 'text',
                  maxLength: 16,
                  value: localConfig.userName,
                  onChange: (e) =>
                    setLocalConfig({ ['userName']: e.target.value }),
                }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.Row>
            <MultiPage.SubElementsLine>
              <span>{t('UserType')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.userType,
                  onChange: (e) =>
                    setLocalConfig({ ['userType']: e.target.value }),
                }}
                options={['LocalUser', 'RemoteUser']}
              />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '70px' }}>{t('Group Name')}:</span>

              <MultiPage.Select
                selectProps={{
                  value: localConfig.groupName,
                  onChange: (e) =>
                    setLocalConfig({ ['groupName']: e.target.value }),
                }}
                options={config.SNMPGroupTable.map((i) => i.groupName)}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.Row>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.Row>
            <MultiPage.SubElementsLine>
              <span>{t('SecurityModel')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.securityModel,
                  onChange: (e) =>
                    setLocalConfig({ ['securityModel']: e.target.value }),
                }}
                options={['v1', 'v2c', 'v3']}
              />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '110px' }}>{t('SecurityLevel')}:</span>

              <MultiPage.Select
                selectProps={{
                  value: localConfig.securityLevel,
                  disabled: localConfig.securityModel == 'v1',
                  onChange: (e) =>
                    setLocalConfig({ ['securityLevel']: e.target.value }),
                }}
                options={['noAuthNoPriv', 'authNoPriv', 'authPriv']}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.Row>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.Row>
            <MultiPage.SubElementsLine>
              <span>{t('AuthMode')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.authMode,
                  onChange: (e) =>
                    setLocalConfig({ ['authMode']: e.target.value }),
                }}
                options={['None', 'MD5', 'SHA']}
              />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '100px' }}>{t('Auth Password')}:</span>
              <MultiPage.Input
                inputProps={{
                  type: 'password',
                  maxLength: 16,
                  value: localConfig.password2,
                  onChange: (e) =>
                    setLocalConfig({ ['password2']: e.target.value }),
                  disabled: localConfig.authMode == 'None',
                }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.Row>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.Row>
            <MultiPage.SubElementsLine>
              <span>{t('PrivacyMode')}:</span>
              <MultiPage.Select
                selectProps={{
                  value: localConfig.privacyMode,
                  onChange: (e) =>
                    setLocalConfig({ ['privacyMode']: e.target.value }),
                }}
                options={['None', 'DES']}
              />
            </MultiPage.SubElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <span style={{ marginLeft: '100px' }}>
                {t('PrivacyPassword')}:
              </span>
              <MultiPage.Input
                inputProps={{
                  type: 'password',
                  maxLength: 16,
                  value: localConfig.password1,
                  onChange: (e) =>
                    setLocalConfig({ ['password1']: e.target.value }),
                  disabled: localConfig.privacyMode == 'None',
                }}
                afterText={t('(16 characters maximum)')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.Row>
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={localConfig.isEditing ? handleModify : handleSubmit}
          >
            {localConfig.isEditing ? t('Modify') : t('Create')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial action={handleClear}>
            {t('Clear')}
          </MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.DefaultTable
          title={t('UserTable')}
          navItems={[
            'Select',
            'Username',
            'UserType',
            'GroupName',
            'SecurityModel',
            'SecurityLevel',
            'AuthMode',
            'PrivacyMode',
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
            user.userName,
            user.userType,
            user.groupName,
            user.securityModel,
            user.securityLevel,
            user.authMode,
            user.privacyMode,
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
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note24')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
