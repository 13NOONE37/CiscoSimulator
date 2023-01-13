import React, { useRef, useState, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';
export default function NotificationConfig() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      ipAddress: [null, null, null, null],
      user: '',
      securityModel: 'v1',
      type: 'Trap',
      retry: 3,
      timeout: 100,
      UDPPort: 162,
      securityLevel: 'noAuthNoPriv',
      checked: false,
      isEditing: false,
    },
  );

  const [tempNotify, settempNotify] = useState(config.notificationConfig);
  const [forceUpdate, setforceUpdate] = useState(1);

  const handleClear = () => {
    setLocalConfig({
      ipAddress: [null, null, null, null],
      user: '',
      securityModel: 'v1',
      type: 'Trap',
      retry: 3,
      timeout: 100,
      UDPPort: 162,
      securityLevel: 'noAuthNoPriv',
      checked: false,
      isEditing: false,
    });
  };
  const handleEdit = (
    {
      ipAddress,
      UDPPort,
      user,
      securityModel,
      securityLevel,
      type,
      timeout,
      retry,
      checked,
    },
    index,
  ) => {
    setLocalConfig({ ['ipAddress']: ipAddress });
    setLocalConfig({ ['user']: user });
    setLocalConfig({ ['securityModel']: securityModel });
    setLocalConfig({ ['type']: type });
    setLocalConfig({ ['retry']: retry });
    setLocalConfig({ ['timeout']: timeout });
    setLocalConfig({ ['UDPPort']: UDPPort });
    setLocalConfig({ ['securityLevel']: securityLevel });
    setLocalConfig({ ['checked']: checked });

    setLocalConfig({ ['isEditing']: index + 1 });
  };
  const handleSubmit = () => {
    const regExIP =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (localConfig.user?.length > 0 && !isNaN(localConfig.UDPPort)) {
      let addNotify = true;
      if (!regExIP.test(localConfig.ipAddress.join('.'))) {
        addNotify = false;
        alert(t('Incorrect IP address'));
      }
      if (
        localConfig.type == 'Inform' &&
        localConfig.retry?.length == 0 &&
        localConfig.timeout?.length == 0
      ) {
        addNotify = false;
        alert(t('There are empty fields'));
      }

      if (addNotify) {
        let temp = tempNotify;
        temp.push({
          ipAddress: localConfig.ipAddress,
          user: localConfig.user,
          securityModel: localConfig.securityModel,
          type: localConfig.type,
          retry: localConfig.retry,
          timeout: localConfig.timeout,
          UDPPort: localConfig.UDPPort,
          securityLevel: localConfig.securityLevel,
          checked: false,
        });
        settempNotify(temp);
        handleClear();
      }
    } else {
      alert(t('There are empty fields'));
    }
  };
  const handleModify = () => {
    if (localConfig.user?.length > 0 && !isNaN(localConfig.UDPPort)) {
      let addNotify = true;

      if (
        localConfig.type == 'Inform' &&
        localConfig.retry?.length == 0 &&
        localConfig.timeout?.length == 0
      ) {
        addNotify = false;
        alert(t('There are empty fields'));
      }

      if (addNotify) {
        let temp = tempNotify;
        temp[localConfig.isEditing - 1] = {
          ipAddress: localConfig.ipAddress,
          UDPPort: localConfig.UDPPort,
          user: localConfig.user,
          securityModel: localConfig.securityModel,
          securityLevel: localConfig.securityLevel,
          type: localConfig.type,
          retry: localConfig.retry,
          timeout: localConfig.timeout,
          checked: localConfig.checked,
        };

        settempNotify(temp);
        handleClear();
      }
    } else {
      alert(t('There are empty fields'));
    }
  };
  const handleAll = () => {
    let temp = tempNotify.map((notify) => {
      notify.checked = true;
      return notify;
    });
    settempNotify(temp);
  };
  return (
    forceUpdate && (
      <MultiPage.Wizard>
        <MultiPage.Section width={700}>
          <MultiPage.Title>{t('NotificationConfig')}</MultiPage.Title>
          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine FirstColumnWidth={300}>
              <MultiPage.SubElementsLine>
                <span>{t('IPAddress')}:</span>
                <MultiPage.MaskedInput
                  value={localConfig.ipAddress}
                  isDisabled={localConfig.isEditing != false}
                  changeCallback={(data) =>
                    setLocalConfig({ ['ipAddress']: data })
                  }
                />
              </MultiPage.SubElementsLine>
              <MultiPage.SubElementsLine>
                <span>{t('UDPPort')}:</span>
                <MultiPage.Input
                  inputProps={{
                    type: 'number',
                    value: localConfig.UDPPort,
                    onChange: (e) =>
                      setLocalConfig({ ['UDPPort']: e.target.value }),
                  }}
                />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>

          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('User')}:</span>
              <MultiPage.Input
                inputProps={{
                  value: localConfig.user,
                  disabled: localConfig.isEditing,
                  onChange: (e) => setLocalConfig({ ['user']: e.target.value }),
                }}
              />
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
            <MultiPage.SubElementsLine FirstColumnWidth={300}>
              <MultiPage.SubElementsLine>
                <span>{t('SecurityModel')}:</span>
                <MultiPage.Select
                  options={['v1', 'v2c', 'v3']}
                  selectProps={{
                    value: localConfig.securityModel,
                    onChange: (e) =>
                      setLocalConfig({ ['securityModel']: e.target.value }),
                  }}
                />
              </MultiPage.SubElementsLine>
              <MultiPage.SubElementsLine>
                <span>{t('SecurityLevel')}:</span>
                <MultiPage.Select
                  options={['noAuthNoPriv', 'authNoPriv', 'authPriv']}
                  selectProps={{
                    disabled: localConfig.securityModel != 'v3',
                    value: localConfig.securityLevel,
                    onChange: (e) =>
                      setLocalConfig({ ['securityLevel']: e.target.value }),
                  }}
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
              <span>{t('Type')}:</span>
              <MultiPage.Select
                options={['Trap', 'Inform']}
                selectProps={{
                  value: localConfig.type,
                  onChange: (e) => {
                    if (
                      e.target.value == 'Inform' &&
                      localConfig.securityModel == 'v1'
                    ) {
                      alert(t('Inform is not supported by SNMP v1.'));
                    } else {
                      setLocalConfig({ ['type']: e.target.value });
                    }
                  },
                }}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>

          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('retry')}:</span>
              <MultiPage.Input
                inputProps={{
                  disabled: localConfig.type === 'Trap',
                  type: 'number',
                  value: localConfig.retry,
                  onChange: (e) =>
                    setLocalConfig({ ['retry']: e.target.value }),
                }}
                afterText={'(1-255)'}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>

          <MultiPage.ElementsLine>
            <MultiPage.SubElementsLine>
              <span>{t('timeout')}:</span>
              <MultiPage.Input
                inputProps={{
                  disabled: localConfig.type === 'Trap',
                  type: 'number',
                  value: localConfig.timeout,
                  onChange: (e) =>
                    setLocalConfig({ ['timeout']: e.target.value }),
                }}
                afterText={t('sec(1-3600')}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.ElementsLine>
        </MultiPage.Section>
        <MultiPage.Section width={750}>
          <MultiPage.EditableTable
            gridTemp={'65px 1fr 65px 65px 1fr 1fr repeat(4,65px)'}
            title={t('NotificationTable')}
            data={{
              names: [
                'Select',
                'IPAddress',
                'UDPPort',
                'User',
                'SecurityModel',
                'SecurityLevel',
                'type',
                'timeout',
                'retry',
                'Operation',
              ],
              fields: [
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
                { type: 'disable' },
              ],
              data: tempNotify.map((user, index) => [
                <input
                  type="checkbox"
                  checked={user.checked}
                  onChange={() => {
                    let temp = tempNotify;
                    temp[index].checked = !temp[index]?.checked;
                    settempNotify(temp);
                    setforceUpdate(forceUpdate + 1);
                  }}
                />,
                user.ipAddress?.join('.'),
                user.UDPPort,
                user.user,
                user.securityModel,
                user.securityLevel,
                user.type,
                user.securityModel != 'v1' ? user.timeout : undefined,
                user.securityModel != 'v1' ? user.retry : undefined,
                <MultiPage.Button
                  isBlank
                  action={() => handleEdit(user, index)}
                >
                  {t('Edit')}
                </MultiPage.Button>,
              ]),
            }}
            isPortSelect={false}
            isAllSelect={false}
            isLeftPortSelect={false}
          />
          <MultiPage.ButtonsRow>
            <MultiPage.Button isSpecial action={handleAll}>
              {t('All')}
            </MultiPage.Button>
            <MultiPage.Button isSpecial>{t('Delete')}</MultiPage.Button>
            <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
          </MultiPage.ButtonsRow>
          <MultiPage.Note />
        </MultiPage.Section>
      </MultiPage.Wizard>
    )
  );
}
