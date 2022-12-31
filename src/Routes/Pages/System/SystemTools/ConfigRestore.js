import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function ConfigRestore() {
  const { t } = useTranslation();
  const { config, setConfig } = useContext(AppContext);

  const [uploadedConfig, setuploadedConfig] = useState(null);
  const compareKeys = (a, b) => {
    let aKeys = Object.keys(a).sort();
    let bKeys = Object.keys(b).sort();
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  };
  const handleChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', function () {
      const myObj = JSON.parse(this.result);
      setuploadedConfig(myObj.config);
    });
    reader.readAsText(file);
  };
  const handleRestore = () => {
    if (uploadedConfig == null) return;
    if (
      window.confirm(
        t('Are you sure? It will overwrite your current configuration'),
      )
    ) {
      if (compareKeys(config, uploadedConfig)) {
        setConfig(uploadedConfig);
      }
    }
  };

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('ConifgRestore')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.Text>{t('RestoreConfigText')}</MultiPage.Text>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={100}>
            <span>{t('ConfigFile')}:</span>
            <input
              type="file"
              onChange={handleChange}
              accept="application/json"
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial action={handleRestore}>
            {t('RestoreConfig')}
          </MultiPage.Button>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note4')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
