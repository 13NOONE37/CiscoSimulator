import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as MultiPage from 'components/General/Page/MultiPage';

export default function BackupLog() {
  const { t } = useTranslation();

  const downloadRef = useRef(null);
  const [downloadHref, setdownloadHref] = useState('');

  const handlePrepareJson = async () => {
    const backup = {};
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
        <MultiPage.Title>{t('BackupLog')}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.Text>
            Click the button here to backup the log file:
          </MultiPage.Text>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button
            isSpecial
            action={() => downloadRef.current.click()}
          >
            {t('BackupLog')}
          </MultiPage.Button>
          <a
            ref={downloadRef}
            href={downloadHref}
            download="Logs.json"
            style={{ display: 'none' }}
          ></a>
          <MultiPage.Button isSpecial>{t('Help')}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          It will take a long time to backup the config file. Please wait
          without any operation.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}
