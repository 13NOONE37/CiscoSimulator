import React, { useContext, useReducer, useState } from 'react';
import * as MultiPage from 'components/General/Page/MultiPage';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';

export default function OUIConfig() {
  const { t } = useTranslation();

  const { config } = useContext(AppContext);
  const [localConfig, setLocalConfig] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      oui: '',
      mask: '',
      description: '',
    },
  );
  const [tempNotify, settempNotify] = useState(config.QoSVoiceGlobalQUIConfig);
  const [forceUpdate, setForceUpdate] = useState(1);
  const handleClear = () => {
    setLocalConfig({ ['oui']: '' });
    setLocalConfig({ ['mask']: '' });
    setLocalConfig({ ['description']: '' });
  };

  const handleSubmit = () => {
    if (
      localConfig.oui.length == 0 ||
      localConfig.mask.length == 0 ||
      localConfig.description.length == 0
    ) {
      alert(t('There are empty fields'));
      return;
    }
    if (
      !MultiPage.isValidMAC(localConfig.oui) ||
      !MultiPage.isValidMAC(localConfig.mask)
    ) {
      alert(t('Incorrect MAC address'));
      return;
    }
    let temp = tempNotify;
    temp.push({
      oui: localConfig.oui,
      mask: localConfig.mask,
      description: localConfig.description,
    });
    console.log(temp);
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
    setForceUpdate(forceUpdate + 1);
    MultiPage.handleApplyToConfig(
      config,
      { QoSVoiceGlobalQUIConfig: temp },
      'QoSVoiceGlobalQUIConfig',
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
      <MultiPage.Section width={650}>
        <MultiPage.Title>{t('CreateOUI')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('OUI')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.oui,
                onChange: (e) => setLocalConfig({ ['oui']: e.target.value }),
              }}
              afterText={t('(Format: 00-00-00-00-00-01)')}
            />
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
            <span>{t('Mask')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                value: localConfig.mask,
                onChange: (e) => setLocalConfig({ ['mask']: e.target.value }),
              }}
              afterText={t('(Default: FF-FF-FF-00-00-00)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t('Description')}:</span>
            <MultiPage.Input
              inputProps={{
                type: 'text',
                maxLength: 16,
                value: localConfig.description,
                onChange: (e) =>
                  setLocalConfig({ ['description']: e.target.value }),
              }}
              afterText={t('(16 characters maximum)')}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t('CreateOUI')}
          navItems={['Select', 'OUI', 'Mask', 'Description']}
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
            item.oui,
            item.mask,
            item.description,
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
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
