import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function ManualBinding() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      hostname: '',
      ipAddress: [null, null, null, null],
      mac: '',
      VLANID: undefined,
      port: 1,
      protectType: 'Disable',
    },
  );
  const [tempNotify, settempNotify] = useState(config.manualBinding);
  const handleClear = () => {
    setLocalConfig({ ['hostname']: '' });
    setLocalConfig({ ['ipAddress']: [null, null, null, null] });
    setLocalConfig({ ['mac']: '' });
    setLocalConfig({ ['VLANID']: undefined });
    setLocalConfig({ ['port']: 1 });
    setLocalConfig({ ['protectType']: 'Disable' });
  };
  const [forceUpdate, setForceUpdate] = useState(1);

  const regExIP =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const handleSubmit = () => {
    if (
      localConfig.hostname.length == 0 ||
      localConfig.mac.length == 0 ||
      isNaN(localConfig.VLANID)
    ) {
      alert(t('There are empty fields'));
      return;
    }
    if (!regExIP.test(localConfig.ipAddress.join('.'))) {
      alert(t('Incorrect IP address'));
      return;
    }
    if (!MultiPage.isValidMAC(localConfig.mac)) {
      alert(t('Incorrect MAC address'));
      return;
    }
    let temp = tempNotify;
    temp.push({
      hostname: localConfig.hostname,
      ipAddress: localConfig.ipAddress,
      mac: localConfig.mac,
      VLANID: localConfig.VLANID,
      port: localConfig.port,
      protectType: localConfig.protectType,
      collision: undefined,
      checked: false,
    });
    settempNotify(temp);
    handleClear();
  };
  const handleDelete = () => {
    let temp = tempNotify;
    temp = temp.filter((user) => !user.checked);

    temp = temp.map((user) => {
      user.checked = false;
      return user;
    });
    settempNotify(temp);
    MultiPage.handleApplyToConfig(
      config,
      { manualBinding: temp },
      'manualBinding',
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
      <MultiPage.Section width={800}>
        <MultiPage.Title>{t('ManualBindingOption')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Hostname')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                maxLength: 20,
                value: localConfig.hostname,
                onChange: (e) =>
                  setLocalConfig({ ['hostname']: e.target.value }),
              }}
              afterText={'(20 characters maximum)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('IPAddress')}:</span>
            <MultiPage.MaskedInput
              value={localConfig.ipAddress}
              changeCallback={(data) => setLocalConfig({ ['ipAddress']: data })}
              afterText={t('(Format: 192.168.0.1)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button action={handleSubmit}>
              {t('Bind')}
            </MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t('MACAddress')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.mac,
                onChange: (e) => setLocalConfig({ ['mac']: e.target.value }),
              }}
              afterText={'(Format: 00-00-00-00-00-01)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>VLAN ID:</span>
            <MultiPage.Input
              inputProps={{
                type: 'number',
                min: 1,
                max: 4094,
                value: localConfig.VLANID,
                onChange: (e) => setLocalConfig({ ['VLANID']: e.target.value }),
              }}
              afterText={'(1-4094)'}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Port')}:</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.port,
                value: localConfig.port,
                onChange: (e) => setLocalConfig({ ['port']: e.target.value }),
              }}
              options={[1, 2, 3, 4, 5, 6, 7, 8]}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('ProtectType')}:</span>
            <MultiPage.Select
              selectProps={{
                value: localConfig.protectType,
                value: localConfig.protectType,
                onChange: (e) =>
                  setLocalConfig({ ['protectType']: e.target.value }),
              }}
              options={['Disable', 'ARP Detection', 'IP Source Guard', 'All']}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        {forceUpdate && (
          <MultiPage.DefaultTable
            title={t('ManualBindingTable')}
            navItems={[
              'Select',
              'Hostname',
              'IPAddress',
              'MAC Address',
              'VLAN ID',
              'Port',
              'ProtectType',
              'Collision',
            ]}
            data={tempNotify.map((item, index) => [
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  let temp = tempNotify;
                  temp[index].checked = !temp[index].checked;
                  settempNotify(temp);
                  setForceUpdate(forceUpdate + 1);
                }}
              />,
              item.hostname,
              item.ipAddress?.join('.'),
              item.mac,
              item.VLANID,
              item.port,
              item.protectType,
              item.collision,
            ])}
          />
        )}

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial action={handleAll}>
            {t('All')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial action={handleDelete}>
            {t('Delete')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          {t('Note29_1')}
          <br />
          {t('Note29_2')}
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
