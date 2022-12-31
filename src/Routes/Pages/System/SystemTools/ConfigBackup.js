import React, { useEffect, useRef, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import AppContext from 'store/AppContext';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function ConfigBackup() {
  const { t } = useTranslation();
  const { config } = useContext(AppContext);

  const downloadRef = useRef(null);
  const [downloadHref, setdownloadHref] = useState('');

  const handlePrepareJson = async () => {
    const backup = { config };
    const json = JSON.stringify(backup);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    setdownloadHref(href);
  };
  useEffect(() => {
    handlePrepareJson();
  }, []);

  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={700}>
        <MultiPage.Title>{t('ConfigBackup')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.Text>{t('BackupConfigText')}</MultiPage.Text>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => downloadRef.current.click()}
          >
            {t('BackupConfig')}
          </MultiPage.Button>
          <a
            ref={downloadRef}
            href={downloadHref}
            download="Config.json"
            style={{ display: 'none' }}
          ></a>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>{t('Note5')}</MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
